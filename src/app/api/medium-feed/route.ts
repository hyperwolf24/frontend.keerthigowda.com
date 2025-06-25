import { NextResponse } from 'next/server';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  url: string;
  date: string;
  readTime: number;
  tags: string[];
}

// Fallback static data in case RSS feed fails
const fallbackBlogPosts: BlogPost[] = [
  {
    id: 'bitwarden-password-chaos',
    title: 'Bitwarden: Turning Your Password Chaos into Organized Peace',
    excerpt: 'Growing up my passwords used to look like "<name>@123". Until one fine day I started getting calls from a few friends repeatedly and turns out my accounts were compromised. This is the story of how Bitwarden transformed my password management from chaos to organized peace.',
    url: 'https://keerthigowdad.medium.com/bitwarden-turning-your-password-chaos-into-organized-peace',
    date: 'Aug 10, 2024',
    readTime: 3,
    tags: ['Security', 'Password Management', 'Bitwarden']
  },
  {
    id: 'agriculture-india-reality',
    title: 'Ground reality of Agriculture in India',
    excerpt: 'India\'s agriculture, the most beautiful thing about the country. People in Bengaluru bargain over vegetables and pay what 200+ for a coffee. This article explores the real challenges and opportunities in Indian agriculture.',
    url: 'https://keerthigowdad.medium.com/ground-reality-of-agriculture-in-india',
    date: 'Aug 7, 2024',
    readTime: 4,
    tags: ['Agriculture', 'India', 'Farming', 'Sustainability']
  },
  {
    id: 'video-compression-magic',
    title: 'The magic behind Video Compression',
    excerpt: 'What if I say most videos we watch online today are 3D. See most videos are 2D in general but the third dimension is what makes the video compression possible. This article delves into the fascinating world of video compression technology.',
    url: 'https://keerthigowdad.medium.com/the-magic-behind-video-compression',
    date: 'Aug 2, 2024',
    readTime: 4,
    tags: ['Video Compression', 'H.264', 'FFMPEG']
  },
  {
    id: 'ai-programmer-software-engineer',
    title: 'From AI Programmer to becoming a "Software Engineer"',
    excerpt: 'Ask a senior developer how AI is treating them. The answer would be "It\'s been great so far. I am getting things done quick, simple tasks are automated." But there\'s a deeper transformation happening in the software development landscape.',
    url: 'https://keerthigowdad.medium.com/from-ai-programmer-to-becoming-a-software-engineer',
    date: 'Jul 8, 2024',
    readTime: 5,
    tags: ['AI', 'Software Engineering', 'Programming']
  }
];

// Function to parse RSS XML and extract blog posts
function parseRSSFeed(xmlText: string): BlogPost[] {
  try {
    // Simple XML parsing using regex (for basic RSS structure)
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    const titleRegex = /<title><!\[CDATA\[(.*?)\]\]><\/title>/;
    const linkRegex = /<link>(.*?)<\/link>/;
    const pubDateRegex = /<pubDate>(.*?)<\/pubDate>/;
    const categoryRegex = /<category><!\[CDATA\[(.*?)\]\]><\/category>/g;
    const contentRegex = /<content:encoded><!\[CDATA\[(.*?)\]\]><\/content:encoded>/;
    
    const posts: BlogPost[] = [];
    let match;
    
    while ((match = itemRegex.exec(xmlText)) !== null) {
      const itemContent = match[1];
      
      const titleMatch = itemContent.match(titleRegex);
      const linkMatch = itemContent.match(linkRegex);
      const pubDateMatch = itemContent.match(pubDateRegex);
      const contentMatch = itemContent.match(contentRegex);
      
      if (titleMatch && linkMatch && pubDateMatch) {
        const title = titleMatch[1];
        const url = linkMatch[1];
        const pubDate = new Date(pubDateMatch[1]);
        
        // Extract categories/tags
        const categories: string[] = [];
        let categoryMatch;
        const categoryRegexLocal = /<category><!\[CDATA\[(.*?)\]\]><\/category>/g;
        while ((categoryMatch = categoryRegexLocal.exec(itemContent)) !== null) {
          categories.push(categoryMatch[1]);
        }
        
        // Generate excerpt from content
        let excerpt = '';
        let fullContent = '';
        if (contentMatch) {
          fullContent = contentMatch[1];
          // Remove HTML tags and get first 200 characters for excerpt
          const plainText = fullContent
            .replace(/<[^>]*>/g, '')
            .replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'");
          excerpt = plainText.substring(0, 200) + (plainText.length > 200 ? '...' : '');
        }
        
        // Calculate read time based on full content (Medium uses ~200 words per minute)
        const wordCount = fullContent.replace(/<[^>]*>/g, '').split(/\s+/).length;
        const readTime = Math.max(1, Math.ceil(wordCount / 200));
        
        // Generate ID from URL
        const urlParts = url.split('/');
        const id = urlParts[urlParts.length - 1].split('?')[0];
        
        posts.push({
          id,
          title,
          excerpt,
          url,
          date: pubDate.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
          }),
          readTime,
          tags: categories
        });
      }
    }
    
    return posts;
  } catch (error) {
    return fallbackBlogPosts;
  }
}

export async function GET() {
  try {
    const MEDIUM_RSS_URL = 'https://medium.com/feed/@keerthigowdad';
    
    const response = await fetch(MEDIUM_RSS_URL, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const xmlText = await response.text();
    
    // Check if response looks like RSS
    if (!xmlText.includes('<rss') && !xmlText.includes('<item>')) {
      throw new Error('Response does not appear to be RSS format');
    }
    
    const posts = parseRSSFeed(xmlText);
    
    if (posts.length > 0) {
      return NextResponse.json({
        success: true,
        source: 'rss',
        posts,
        count: posts.length
      });
    } else {
      return NextResponse.json({
        success: true,
        source: 'fallback',
        posts: fallbackBlogPosts,
        count: fallbackBlogPosts.length,
        error: 'No posts found in RSS'
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: true,
      source: 'fallback',
      posts: fallbackBlogPosts,
      count: fallbackBlogPosts.length,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
} 