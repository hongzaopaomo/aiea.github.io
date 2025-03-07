import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
            alt="African Art"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            African International Exchange of Art Foundation
          </h1>
          <p className="mt-6 text-xl max-w-3xl">
            Promoting African art and cultural exchange through education and collaboration.
          </p>
          <div className="mt-10 flex space-x-4">
            <Link
              to="/about"
              className="inline-block bg-primary py-3 px-6 rounded-md text-white font-medium hover:bg-blue-600 transition-colors"
            >
              Learn More
            </Link>
            <Link
              to="/donations"
              className="inline-block bg-white py-3 px-6 rounded-md text-primary font-medium hover:bg-gray-100 transition-colors"
            >
              Support Us
            </Link>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Mission</h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              We are dedicated to promoting African art and artists on the global stage, fostering cultural exchange, and providing educational opportunities for emerging talents.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 rounded-md bg-primary flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">Promote African Art</h3>
              <p className="mt-2 text-gray-500">
                We showcase the rich diversity of African art and artists to global audiences through exhibitions, publications, and digital platforms.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 rounded-md bg-primary flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">Cultural Exchange</h3>
              <p className="mt-2 text-gray-500">
                We facilitate cultural exchange programs between African artists and international institutions to foster mutual understanding and collaboration.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 rounded-md bg-primary flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">Education</h3>
              <p className="mt-2 text-gray-500">
                We provide educational opportunities, scholarships, and mentorship programs for emerging African artists to develop their skills and careers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Featured Projects</h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              Explore some of our recent initiatives and collaborations.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Project 1 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <img
                className="h-48 w-full object-cover"
                src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="African Art Exhibition"
              />
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Annual Art Exhibition</h3>
                <p className="mt-2 text-gray-500">
                  Our annual exhibition showcases works from emerging and established African artists.
                </p>
                <div className="mt-4">
                  <a href="#" className="text-primary hover:text-blue-600">Learn more &rarr;</a>
                </div>
              </div>
            </div>
            {/* Project 2 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <img
                className="h-48 w-full object-cover"
                src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2344&q=80"
                alt="Artist Residency Program"
              />
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Artist Residency Program</h3>
                <p className="mt-2 text-gray-500">
                  Our residency program provides African artists with space, time, and resources to create new work.
                </p>
                <div className="mt-4">
                  <a href="#" className="text-primary hover:text-blue-600">Learn more &rarr;</a>
                </div>
              </div>
            </div>
            {/* Project 3 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <img
                className="h-48 w-full object-cover"
                src="https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Youth Art Workshop"
              />
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Youth Art Workshops</h3>
                <p className="mt-2 text-gray-500">
                  We conduct workshops to introduce young people to African art forms and techniques.
                </p>
                <div className="mt-4">
                  <a href="#" className="text-primary hover:text-blue-600">Learn more &rarr;</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Partners</h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              We collaborate with organizations around the world to promote African art and culture.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            {/* Partner logos would go here */}
            <div className="col-span-1 flex justify-center items-center">
              <div className="h-16 w-full bg-gray-200 rounded-md flex items-center justify-center text-gray-500">
                Partner 1
              </div>
            </div>
            <div className="col-span-1 flex justify-center items-center">
              <div className="h-16 w-full bg-gray-200 rounded-md flex items-center justify-center text-gray-500">
                Partner 2
              </div>
            </div>
            <div className="col-span-1 flex justify-center items-center">
              <div className="h-16 w-full bg-gray-200 rounded-md flex items-center justify-center text-gray-500">
                Partner 3
              </div>
            </div>
            <div className="col-span-1 flex justify-center items-center">
              <div className="h-16 w-full bg-gray-200 rounded-md flex items-center justify-center text-gray-500">
                Partner 4
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to support African art?</span>
            <span className="block text-blue-100">Join our community today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/donations"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-blue-50"
              >
                Donate Now
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 