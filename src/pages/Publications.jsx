import { useState } from 'react';

const Publications = () => {
  // Sample publications data - in a real app, this would come from an API
  const [publications] = useState([
    {
      id: 1,
      title: 'Contemporary African Art: Trends and Perspectives',
      type: 'Book',
      author: 'Dr. Amina Diallo & Dr. James Chen',
      year: 2022,
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80',
      description: 'A comprehensive overview of contemporary African art, examining current trends, key artists, and the global impact of African artistic expressions.',
      featured: true,
    },
    {
      id: 2,
      title: 'Voices from the Studio: Interviews with African Artists',
      type: 'Book',
      author: 'Sarah Johnson',
      year: 2021,
      image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2456&q=80',
      description: 'A collection of in-depth interviews with 25 leading African artists, offering insights into their creative processes, inspirations, and challenges.',
      featured: true,
    },
    {
      id: 3,
      title: 'African Art in the Digital Age',
      type: 'Research Paper',
      author: 'Dr. Emmanuel Osei',
      year: 2023,
      image: 'https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'An exploration of how digital technologies are transforming the creation, distribution, and reception of African art in the 21st century.',
      featured: false,
    },
    {
      id: 4,
      title: 'Tradition and Innovation: Craftsmanship in Contemporary African Art',
      type: 'Exhibition Catalog',
      author: 'AIEA Foundation',
      year: 2020,
      image: 'https://images.unsplash.com/photo-1576504677634-06b2130bd1f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'Catalog from our 2020 exhibition exploring the intersection of traditional craftsmanship and contemporary artistic expression in African art.',
      featured: true,
    },
    {
      id: 5,
      title: 'Art Education in Africa: Challenges and Opportunities',
      type: 'Research Report',
      author: 'AIEA Research Team',
      year: 2021,
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2422&q=80',
      description: 'A comprehensive report on the state of art education across African countries, identifying challenges and proposing strategies for improvement.',
      featured: false,
    },
    {
      id: 6,
      title: 'African Women in Art: Breaking Boundaries',
      type: 'Book',
      author: 'Dr. Fatima Diallo',
      year: 2022,
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80',
      description: 'A celebration of African women artists who have broken boundaries and made significant contributions to the global art scene.',
      featured: false,
    },
  ]);

  // Filter for featured publications
  const featuredPublications = publications.filter(publication => publication.featured);

  // Group publications by type
  const publicationsByType = publications.reduce((acc, publication) => {
    if (!acc[publication.type]) {
      acc[publication.type] = [];
    }
    acc[publication.type].push(publication);
    return acc;
  }, {});

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
            alt="Publications"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Publications
          </h1>
          <p className="mt-6 text-xl max-w-3xl">
            Explore our books, research papers, and exhibition catalogs on African art and artists.
          </p>
        </div>
      </div>

      {/* Featured Publications Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Featured Publications
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              Discover our most recent and significant publications on African art.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredPublications.map((publication) => (
              <div key={publication.id} className="bg-white overflow-hidden shadow rounded-lg">
                <img
                  className="h-64 w-full object-cover"
                  src={publication.image}
                  alt={publication.title}
                />
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">{publication.title}</h3>
                  <p className="text-sm text-primary">{publication.type} • {publication.year}</p>
                  <p className="text-sm text-gray-500">By {publication.author}</p>
                  <p className="mt-2 text-gray-500">
                    {publication.description}
                  </p>
                  <div className="mt-4">
                    <a href={`#publication-${publication.id}`} className="text-primary hover:text-blue-600">Read more &rarr;</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Publications by Type Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Browse by Type
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              Explore our publications organized by category.
            </p>
          </div>
          <div className="mt-12 space-y-16">
            {Object.entries(publicationsByType).map(([type, items]) => (
              <div key={type}>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">{type}s</h3>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {items.map((publication) => (
                    <div key={publication.id} className="bg-white overflow-hidden shadow rounded-lg flex">
                      <div className="flex-shrink-0 w-24 h-full">
                        <img
                          className="w-full h-full object-cover"
                          src={publication.image}
                          alt={publication.title}
                        />
                      </div>
                      <div className="p-4 flex-1">
                        <h4 className="text-lg font-medium text-gray-900">{publication.title}</h4>
                        <p className="text-sm text-gray-500">{publication.year} • By {publication.author}</p>
                        <div className="mt-2">
                          <a href={`#publication-${publication.id}`} className="text-sm text-primary hover:text-blue-600">View details</a>
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

      {/* Annual Report Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Annual Reports
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Our annual reports provide detailed information about our activities, achievements, and financial performance each year. They offer transparency into our operations and showcase the impact of our work in promoting African art.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <a href="#" className="ml-2 text-primary hover:text-blue-600">Annual Report 2022</a>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <a href="#" className="ml-2 text-primary hover:text-blue-600">Annual Report 2021</a>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <a href="#" className="ml-2 text-primary hover:text-blue-600">Annual Report 2020</a>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <img
                className="rounded-lg shadow-lg"
                src="https://images.unsplash.com/photo-1554757387-2a28855c78fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Annual Reports"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Want to stay updated?</span>
            <span className="block text-blue-100">Subscribe to our newsletter for the latest publications.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-blue-50"
              >
                Subscribe Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications; 