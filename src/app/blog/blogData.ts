export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  url: string;
  date: string;
  readTime: number;
  tags: string[];
}

// Fallback static data in case API route fails
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

// Function to fetch blog posts from our API route
export async function fetchBlogPosts(): Promise<{ posts: BlogPost[], source: 'rss' | 'fallback', error?: string }> {
  try {
    const API_URL = '/api/medium-feed';
    
    const response = await fetch(API_URL, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.success && data.posts && data.posts.length > 0) {
      return { 
        posts: data.posts, 
        source: data.source as 'rss' | 'fallback',
        error: data.error
      };
    } else {
      return { 
        posts: fallbackBlogPosts, 
        source: 'fallback' as const, 
        error: 'No posts returned from API' 
      };
    }
  } catch (error) {
    return { 
      posts: fallbackBlogPosts, 
      source: 'fallback' as const, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}

// Export the fallback data as default for immediate use
export const blogPosts: BlogPost[] = fallbackBlogPosts; 