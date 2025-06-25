'use client';

import { useState, useEffect } from 'react';
import { blogPosts as fallbackPosts, fetchBlogPosts, BlogPost } from './blogData';

const POSTS_PER_PAGE = 10;

export default function BlogClient() {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(fallbackPosts);
  const [isLoading, setIsLoading] = useState(true);
  const [dataSource, setDataSource] = useState<'rss' | 'fallback' | 'loading'>('loading');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBlogPosts = async () => {
      setIsLoading(true);
      setDataSource('loading');
      setError(null);
      
      try {
        const result = await fetchBlogPosts();
        
        setBlogPosts(result.posts);
        setDataSource(result.source);
        
        if (result.error) {
          setError(result.error);
        }
      } catch (error) {
        setBlogPosts(fallbackPosts);
        setDataSource('fallback');
        setError(error instanceof Error ? error.message : 'Unknown error');
      } finally {
        setIsLoading(false);
      }
    };

    loadBlogPosts();
  }, []);

  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = blogPosts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <section className="h-[40vh] flex items-center justify-center text-center">
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-4 text-white">Blog</h2>
          <p className="hero-intro text-xl text-[#ccd6f6]">Thoughts on technology, agriculture, and life.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="section-content max-w-4xl mx-auto px-4">
          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="text-[#018c6d] text-lg">
                <i className="fas fa-spinner fa-spin mr-2"></i>
                Loading blog posts...
              </div>
            </div>
          ) : (
            <>
              <div className="blog-grid space-y-6 mb-8">
                {currentPosts.map((post, index) => (
                  <article key={post.id} className="blog-card transition-transform hover:-translate-y-1">
                    <div className="blog-card-content">
                      <div className="blog-meta text-sm text-[#8892b0] mb-3">
                        <span className="blog-date">
                          <i className="fas fa-calendar mr-2"></i>
                          {post.date}
                        </span>
                        <span className="blog-read-time ml-4">
                          <i className="fas fa-clock mr-2"></i>
                          {post.readTime} min read
                        </span>
                      </div>
                      
                      <h3 className="blog-title text-[#018c6d] text-xl font-semibold mb-3">
                        <a 
                          href={post.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-[#016b54] transition-colors"
                        >
                          {post.title}
                        </a>
                      </h3>
                      
                      <p className="blog-excerpt text-[#ccd6f6] leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      
                      <div className="blog-tags flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex} 
                            className="blog-tag px-3 py-1 bg-[#018c6d] bg-opacity-20 text-[#018c6d] text-sm rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <a 
                        href={post.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="blog-read-more inline-flex items-center text-[#018c6d] hover:text-[#016b54] transition-colors"
                      >
                        Read on Medium
                        <i className="fas fa-external-link-alt ml-2"></i>
                      </a>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="pagination flex justify-center items-center space-x-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="pagination-btn px-4 py-2 bg-[#018c6d] text-white rounded-lg hover:bg-[#016b54] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <i className="fas fa-chevron-left mr-2"></i>
                    Previous
                  </button>
                  
                  <div className="pagination-info text-[#ccd6f6] px-4">
                    Page {currentPage} of {totalPages}
                  </div>
                  
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="pagination-btn px-4 py-2 bg-[#018c6d] text-white rounded-lg hover:bg-[#016b54] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                    <i className="fas fa-chevron-right ml-2"></i>
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
} 