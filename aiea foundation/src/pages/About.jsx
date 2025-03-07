const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
            alt="About AIEA Foundation"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            About Us
          </h1>
          <p className="mt-6 text-xl max-w-3xl">
            Learn about our foundation, our mission, and the team behind our work.
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Story
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                The African International Exchange of Art Foundation (AIEA) was established in 2010 with a vision to promote African art and artists on the global stage. Our foundation was born out of a recognition of the rich artistic heritage of Africa and the need to create platforms for African artists to showcase their work internationally.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                Over the years, we have grown from a small initiative to a recognized foundation working with artists, institutions, and partners across Africa and around the world. Our work spans exhibitions, educational programs, artist residencies, and publications, all aimed at fostering cultural exchange and promoting African artistic expression.
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <img
                className="rounded-lg shadow-lg"
                src="https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="AIEA Foundation"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mission and Vision */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Mission & Vision
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-500">
                To promote African art and artists on the global stage, foster cultural exchange between Africa and the world, and provide educational opportunities for emerging talents.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-500">
                A world where African art is recognized, celebrated, and valued globally, and where African artists have equal opportunities to showcase their work and contribute to the global art discourse.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Team
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              Meet the dedicated individuals who make our work possible.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Team Member 1 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <img
                className="h-64 w-full object-cover"
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Team Member"
              />
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Sarah Johnson</h3>
                <p className="text-sm text-primary">Executive Director</p>
                <p className="mt-2 text-gray-500">
                  Sarah has over 15 years of experience in arts management and cultural exchange programs.
                </p>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <img
                className="h-64 w-full object-cover"
                src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80"
                alt="Team Member"
              />
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">David Okafor</h3>
                <p className="text-sm text-primary">Artistic Director</p>
                <p className="mt-2 text-gray-500">
                  David is a renowned artist and curator with a passion for promoting African artistic expression.
                </p>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <img
                className="h-64 w-full object-cover"
                src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Team Member"
              />
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Amina Diallo</h3>
                <p className="text-sm text-primary">Education Coordinator</p>
                <p className="mt-2 text-gray-500">
                  Amina leads our educational programs and workshops, connecting artists with learning opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* History Timeline */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our History
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              Key milestones in our foundation's journey.
            </p>
          </div>
          <div className="mt-12 relative">
            {/* Timeline */}
            <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
            
            {/* 2010 */}
            <div className="relative md:flex items-center mb-12">
              <div className="md:w-1/2 md:pr-8 md:text-right">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-bold text-gray-900">2010</h3>
                  <p className="mt-2 text-gray-500">
                    Foundation established with initial funding from arts patrons and a mission to promote African art globally.
                  </p>
                </div>
              </div>
              <div className="hidden md:block w-6 h-6 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full"></div>
              <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0"></div>
            </div>
            
            {/* 2013 */}
            <div className="relative md:flex items-center mb-12">
              <div className="md:w-1/2 md:pr-8 md:text-right"></div>
              <div className="hidden md:block w-6 h-6 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full"></div>
              <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-bold text-gray-900">2013</h3>
                  <p className="mt-2 text-gray-500">
                    Launched our first major exhibition featuring works from 20 emerging African artists in Paris.
                  </p>
                </div>
              </div>
            </div>
            
            {/* 2016 */}
            <div className="relative md:flex items-center mb-12">
              <div className="md:w-1/2 md:pr-8 md:text-right">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-bold text-gray-900">2016</h3>
                  <p className="mt-2 text-gray-500">
                    Established our artist residency program, providing opportunities for African artists to create and collaborate internationally.
                  </p>
                </div>
              </div>
              <div className="hidden md:block w-6 h-6 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full"></div>
              <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0"></div>
            </div>
            
            {/* 2020 */}
            <div className="relative md:flex items-center">
              <div className="md:w-1/2 md:pr-8 md:text-right"></div>
              <div className="hidden md:block w-6 h-6 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full"></div>
              <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-bold text-gray-900">2020</h3>
                  <p className="mt-2 text-gray-500">
                    Celebrated our 10th anniversary with a major exhibition and launched our digital platform to reach wider audiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 