
import { useFeaturedBlogPost, useRegularBlogPosts } from '@/hooks/useBlogPosts';
import React from 'react';

const BlogSection: React.FC = () => {
  const { data: featuredPost, isLoading: featuredLoading, error: featuredError } = useFeaturedBlogPost();
  const { data: regularPosts = [], isLoading: regularLoading, error: regularError } = useRegularBlogPosts();

  const isLoading = featuredLoading || regularLoading;
  const error = featuredError || regularError;

  if (isLoading) {
    return (
      <section id="blog" className="min-h-screen py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-tech-cyan to-tech-purple bg-clip-text text-transparent">
              Latest Insights
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-tech-cyan to-tech-purple mx-auto rounded-full mb-8"></div>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Loading blog posts...
            </p>
          </div>
          <div className="mb-16">
            <div className="glass-card overflow-hidden animate-pulse">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="h-80 bg-slate-700"></div>
                <div className="p-8 lg:p-12">
                  <div className="h-4 bg-slate-700 rounded mb-4 w-1/2"></div>
                  <div className="h-8 bg-slate-700 rounded mb-4 w-3/4"></div>
                  <div className="space-y-2 mb-6">
                    <div className="h-3 bg-slate-700 rounded w-full"></div>
                    <div className="h-3 bg-slate-700 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="min-h-screen py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-tech-cyan to-tech-purple bg-clip-text text-transparent">
            Latest Insights
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-tech-cyan to-tech-purple mx-auto rounded-full mb-8"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Sharing knowledge about full-stack development, machine learning, and emerging technologies
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <div className="glass-card overflow-hidden hover-glow transition-all duration-300 animate-fade-in-up">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img
                    src={featuredPost.image_url || '/ayush_pic.png'}
                    alt={featuredPost.title || ''}
                    className="w-full h-full object-cover min-h-[300px] transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-tech-cyan to-tech-purple text-white rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center text-sm text-slate-400 mb-4">
                    <span>{featuredPost.author  || ''}</span>
                    <span className="mx-2">•</span>
                    <span>{new Date(featuredPost.date  || '').toLocaleDateString()}</span>
                    <span className="mx-2">•</span>
                    <span>{featuredPost.read_time || ''}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4 hover:text-tech-cyan transition-colors cursor-pointer">
                    {featuredPost.title || ''}
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    {featuredPost.excerpt || ''}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-md hover:bg-tech-cyan/20 hover:text-tech-cyan transition-colors cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  {/* <button className="self-start px-6 py-3 bg-gradient-to-r from-tech-cyan to-tech-purple text-white rounded-full font-medium hover:shadow-lg hover:shadow-tech-cyan/25 transition-all duration-300 hover:scale-105">
                    Read Full Article
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {regularPosts && regularPosts.map((post, index) => (
            <div
              key={post.id}
              className="glass-card group hover-glow transition-all duration-500 overflow-hidden animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image_url || '/ayush_pic.png'}
                  alt={post.title || ''}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-xs text-slate-400 mb-3">
                  <span>{post.author || ''}</span>
                  <span className="mx-2">•</span>
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <span className="mx-2">•</span>
                  <span>{post.read_time  || '10 min'}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-tech-cyan transition-colors line-clamp-2">
                  {post.title || ''}
                </h3>

                <p className="text-slate-400 text-sm mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt || ''}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* <div className="flex items-center justify-between">
                  <button className="text-tech-cyan font-medium text-sm hover:text-tech-purple transition-colors">
                    Read More →
                  </button>
                  <div className="flex space-x-2">
                    <button className="text-slate-400 hover:text-tech-cyan transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                    <button className="text-slate-400 hover:text-tech-cyan transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                      </svg>
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default BlogSection;
