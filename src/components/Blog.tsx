import React from 'react';

const Blog = () => {
  const posts = [
    {
      title: 'The Future of Corporate Catering',
      excerpt: 'Discover the latest trends shaping the future of workplace dining.',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
      date: 'Mar 16, 2024',
      readTime: '5 min read'
    },
    {
      title: 'Healthy Eating at Work',
      excerpt: 'Tips for maintaining a balanced diet during busy workdays.',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
      date: 'Mar 12, 2024',
      readTime: '4 min read'
    },
    {
      title: 'Sustainable Corporate Catering',
      excerpt: 'How we're making corporate catering more environmentally friendly.',
      image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
      date: 'Mar 8, 2024',
      readTime: '6 min read'
    }
  ];

  return (
    <div className="bg-gray-50 py-24" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Latest from Our Blog
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Insights, updates, and stories from the world of corporate catering
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48">
                <img
                  className="w-full h-full object-cover"
                  src={post.image}
                  alt={post.title}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500">
                  <time>{post.date}</time>
                  <span className="mx-1">·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="mt-2 text-xl font-semibold text-gray-900">
                  {post.title}
                </h3>
                <p className="mt-3 text-base text-gray-500">
                  {post.excerpt}
                </p>
                <div className="mt-4">
                  <a href="#" className="text-blue-600 hover:text-blue-500">
                    Read more →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700">
            View All Posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;