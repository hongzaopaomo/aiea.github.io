import { useState } from 'react';

const Artists = () => {
  // Sample artist data - in a real app, this would come from an API
  const [artists] = useState([
    {
      id: 1,
      name: 'Aisha Mwangi',
      country: 'Kenya',
      medium: 'Painting, Mixed Media',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80',
      bio: 'Aisha Mwangi is a contemporary artist from Nairobi whose work explores themes of identity, memory, and urban life in modern Africa.',
      featured: true,
    },
    {
      id: 2,
      name: 'Emmanuel Osei',
      country: 'Ghana',
      medium: 'Sculpture, Installation',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80',
      bio: 'Emmanuel Osei creates powerful sculptures that blend traditional Ghanaian craftsmanship with contemporary artistic expressions.',
      featured: true,
    },
    {
      id: 3,
      name: 'Fatima Diallo',
      country: 'Senegal',
      medium: 'Photography, Digital Art',
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80',
      bio: 'Fatima Diallo is a photographer whose work documents the changing landscapes and communities of West Africa.',
      featured: false,
    },
    {
      id: 4,
      name: 'Kwame Adetokunbo',
      country: 'Nigeria',
      medium: 'Painting, Textiles',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80',
      bio: 'Kwame Adetokunbo combines traditional Nigerian textile patterns with contemporary painting techniques to create vibrant, narrative-rich artworks.',
      featured: true,
    },
    {
      id: 5,
      name: 'Nala Abebe',
      country: 'Ethiopia',
      medium: 'Mixed Media, Performance',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2464&q=80',
      bio: 'Nala Abebe is a multidisciplinary artist whose work explores themes of heritage, spirituality, and the female experience in contemporary Ethiopia.',
      featured: false,
    },
    {
      id: 6,
      name: 'Jamal Nkosi',
      country: 'South Africa',
      medium: 'Sculpture, Public Art',
      image: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80',
      bio: 'Jamal Nkosi creates large-scale public sculptures that engage with South Africa\'s complex history and ongoing social transformations.',
      featured: false,
    },
  ]);

  // Filter for featured artists
  const featuredArtists = artists.filter(artist => artist.featured);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1561214115-f2f134cc4912?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2709&q=80"
            alt="African Artists"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Our Artists
          </h1>
          <p className="mt-6 text-xl max-w-3xl">
            Discover the talented artists we work with and support through our programs.
          </p>
        </div>
      </div>

      {/* Featured Artists Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Featured Artists
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              Meet some of our most accomplished artists who are making waves in the global art scene.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredArtists.map((artist) => (
              <div key={artist.id} className="bg-white overflow-hidden shadow rounded-lg">
                <img
                  className="h-64 w-full object-cover"
                  src={artist.image}
                  alt={artist.name}
                />
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">{artist.name}</h3>
                  <p className="text-sm text-primary">{artist.country} • {artist.medium}</p>
                  <p className="mt-2 text-gray-500">
                    {artist.bio}
                  </p>
                  <div className="mt-4">
                    <a href={`#artist-${artist.id}`} className="text-primary hover:text-blue-600">View profile &rarr;</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* All Artists Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              All Artists
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              Explore our complete roster of talented artists from across Africa.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {artists.map((artist) => (
              <div key={artist.id} className="bg-white overflow-hidden shadow rounded-lg flex">
                <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32">
                  <img
                    className="w-full h-full object-cover"
                    src={artist.image}
                    alt={artist.name}
                  />
                </div>
                <div className="p-4 flex-1">
                  <h3 className="text-lg font-medium text-gray-900">{artist.name}</h3>
                  <p className="text-sm text-primary">{artist.country}</p>
                  <p className="text-sm text-gray-500">{artist.medium}</p>
                  <div className="mt-2">
                    <a href={`#artist-${artist.id}`} className="text-sm text-primary hover:text-blue-600">View profile</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Artist Residency Program */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Artist Residency Program
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Our residency program provides African artists with the space, time, and resources to create new work and develop their practice. Residents receive studio space, accommodation, a stipend, and opportunities to engage with the local and international art community.
              </p>
              <div className="mt-6">
                <a href="#" className="text-primary hover:text-blue-600 font-medium">Learn more about our residency program &rarr;</a>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <img
                className="rounded-lg shadow-lg"
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2342&q=80"
                alt="Artist Residency"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Are you an artist?</span>
            <span className="block text-blue-100">Apply to our programs and opportunities.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-blue-50"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artists; 