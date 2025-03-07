import { useState } from 'react';

const News = () => {
  // Sample news data - in a real app, this would come from an API
  const [newsItems] = useState([
    {
      id: 1,
      title: 'AIEA Foundation Announces New Artist Residency Program',
      date: 'May 15, 2023',
      category: 'Announcements',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2342&q=80',
      excerpt: 'The AIEA Foundation is excited to announce the launch of a new artist residency program that will provide opportunities for African artists to develop their work in an international context.',
      featured: true,
    },
    {
      id: 2,
      title: 'Exhibition: "Contemporary Visions of Africa" Opens in Paris',
      date: 'April 28, 2023',
      category: 'Exhibitions',
      image: 'https://images.unsplash.com/photo-1594122230689-45899d9e6f69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      excerpt: 'Our latest exhibition, "Contemporary Visions of Africa," featuring works by 15 emerging African artists, has opened at the Galerie d\'Art Contemporain in Paris.',
      featured: true,
    },
    {
      id: 3,
      title: 'AIEA Foundation Partners with Major Museum for Educational Initiative',
      date: 'March 10, 2023',
      category: 'Partnerships',
      image: 'https://images.unsplash.com/photo-1594122230733-e9f211e3c92d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      excerpt: 'We are thrilled to announce a new partnership with the Metropolitan Museum of Art to develop educational programs focused on African art and artists.',
      featured: false,
    },
    {
      id: 4,
      title: 'Annual Fundraising Gala Raises Record Amount for Artist Scholarships',
      date: 'February 22, 2023',
      category: 'Events',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      excerpt: 'Our annual fundraising gala was a tremendous success, raising over $500,000 for our artist scholarship program, which supports emerging African artists in pursuing advanced education and training.',
      featured: true,
    },
    {
      id: 5,
      title: 'New Publication: "African Art in the Digital Age" Released',
      date: 'January 15, 2023',
      category: 'Publications',
      image: 'https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      excerpt: 'We are pleased to announce the release of our latest publication, "African Art in the Digital Age," exploring how digital technologies are transforming the creation and distribution of African art.',
      featured: false,
    },
    {
      id: 6,
      title: 'Artist Spotlight: Aisha Mwangi\'s Solo Exhibition in Nairobi',
      date: 'December 5, 2022',
      category: 'Artist News',
      image: 'https://images.unsplash.com/photo-1577720643272-265f09367456?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      excerpt: 'AIEA Foundation artist Aisha Mwangi has opened her first major solo exhibition, "Memories of Home," at the National Museum of Kenya in Nairobi.',
      featured: false,
    },
  ]);

  // Filter for featured news
  const featuredNews = newsItems.filter(item => item.featured);

  // Group news by category
  const newsByCategory = newsItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80"
            alt="News and Updates"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            News & Updates
          </h1>
          <p className="mt-6 text-xl max-w-3xl">
            Stay informed about our latest exhibitions, events, and initiatives.
          </p>
        </div>
      </div>

      {/* Featured News Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Featured News
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              Catch up on our most important announcements and updates.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredNews.map((item) => (
              <div key={item.id} className="bg-white overflow-hidden shadow rounded-lg">
                <img
                  className="h-48 w-full object-cover"
                  src={item.image}
                  alt={item.title}
                />
                <div className="p-6">
                  <div className="flex items-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-primary">
                      {item.category}
                    </span>
                    <time className="ml-2 text-sm text-gray-500">{item.date}</time>
                  </div>
                  <a href={`#news-${item.id}`} className="mt-2 block">
                    <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                    <p className="mt-3 text-base text-gray-500">{item.excerpt}</p>
                  </a>
                  <div className="mt-4">
                    <a href={`#news-${item.id}`} className="text-primary hover:text-blue-600">
                      Read full story &rarr;
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* All News Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              All News
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              Browse all our news and updates.
            </p>
          </div>
          <div className="mt-12 space-y-10">
            {newsItems.map((item) => (
              <div key={item.id} className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover md:w-48"
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-primary">
                        {item.category}
                      </span>
                      <time className="ml-2 text-sm text-gray-500">{item.date}</time>
                    </div>
                    <a href={`#news-${item.id}`} className="mt-2 block">
                      <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                      <p className="mt-3 text-base text-gray-500">{item.excerpt}</p>
                    </a>
                    <div className="mt-4">
                      <a href={`#news-${item.id}`} className="text-primary hover:text-blue-600">
                        Read full story &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* News by Category Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              News by Category
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              Filter news by your areas of interest.
            </p>
          </div>
          <div className="mt-12 space-y-16">
            {Object.entries(newsByCategory).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">{category}</h3>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {items.map((item) => (
                    <div key={item.id} className="bg-white overflow-hidden shadow rounded-lg">
                      <div className="p-6">
                        <time className="text-sm text-gray-500">{item.date}</time>
                        <a href={`#news-${item.id}`} className="mt-2 block">
                          <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                          <p className="mt-3 text-sm text-gray-500 line-clamp-2">{item.excerpt}</p>
                        </a>
                        <div className="mt-4">
                          <a href={`#news-${item.id}`} className="text-sm text-primary hover:text-blue-600">
                            Read more &rarr;
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Subscribe to Our Newsletter
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Stay up to date with our latest news, events, and initiatives by subscribing to our monthly newsletter.
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <form className="sm:flex">
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-primary focus:border-primary sm:max-w-xs rounded-md"
                  placeholder="Enter your email"
                />
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
              <p className="mt-3 text-sm text-gray-500">
                We care about your data. Read our{' '}
                <a href="#" className="font-medium text-gray-900 underline">
                  Privacy Policy
                </a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News; 