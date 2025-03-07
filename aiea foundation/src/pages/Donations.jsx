import { useState } from 'react';

const Donations = () => {
  const [donationAmount, setDonationAmount] = useState('100');
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');

  const handleAmountChange = (amount) => {
    setDonationAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setDonationAmount('custom');
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
            alt="Support Our Mission"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Support Our Mission
          </h1>
          <p className="mt-6 text-xl max-w-3xl">
            Your donation helps us promote African art and support artists across the continent.
          </p>
        </div>
      </div>

      {/* Donation Form Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Make a Donation
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Your support enables us to continue our mission of promoting African art and artists on the global stage. Every donation, no matter the size, makes a difference.
              </p>
              <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900">Donation Type</h3>
                <div className="mt-4 flex space-x-4">
                  <button
                    type="button"
                    className={`px-4 py-2 rounded-md ${
                      donationType === 'one-time'
                        ? 'bg-primary text-white'
                        : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setDonationType('one-time')}
                  >
                    One-time
                  </button>
                  <button
                    type="button"
                    className={`px-4 py-2 rounded-md ${
                      donationType === 'monthly'
                        ? 'bg-primary text-white'
                        : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setDonationType('monthly')}
                  >
                    Monthly
                  </button>
                  <button
                    type="button"
                    className={`px-4 py-2 rounded-md ${
                      donationType === 'annually'
                        ? 'bg-primary text-white'
                        : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setDonationType('annually')}
                  >
                    Annually
                  </button>
                </div>

                <h3 className="mt-8 text-lg font-medium text-gray-900">Donation Amount</h3>
                <div className="mt-4 grid grid-cols-3 gap-4">
                  <button
                    type="button"
                    className={`px-4 py-2 rounded-md ${
                      donationAmount === '50'
                        ? 'bg-primary text-white'
                        : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => handleAmountChange('50')}
                  >
                    $50
                  </button>
                  <button
                    type="button"
                    className={`px-4 py-2 rounded-md ${
                      donationAmount === '100'
                        ? 'bg-primary text-white'
                        : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => handleAmountChange('100')}
                  >
                    $100
                  </button>
                  <button
                    type="button"
                    className={`px-4 py-2 rounded-md ${
                      donationAmount === '250'
                        ? 'bg-primary text-white'
                        : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => handleAmountChange('250')}
                  >
                    $250
                  </button>
                  <button
                    type="button"
                    className={`px-4 py-2 rounded-md ${
                      donationAmount === '500'
                        ? 'bg-primary text-white'
                        : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => handleAmountChange('500')}
                  >
                    $500
                  </button>
                  <button
                    type="button"
                    className={`px-4 py-2 rounded-md ${
                      donationAmount === '1000'
                        ? 'bg-primary text-white'
                        : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => handleAmountChange('1000')}
                  >
                    $1,000
                  </button>
                  <div className={`flex items-center px-3 rounded-md border ${
                    donationAmount === 'custom'
                      ? 'border-primary ring-2 ring-primary'
                      : 'border-gray-300'
                  }`}>
                    <span className="text-gray-500">$</span>
                    <input
                      type="text"
                      className="w-full border-0 p-0 focus:ring-0 text-gray-800 bg-transparent"
                      placeholder="Other"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    type="button"
                    className="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Donate Now
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900">Other Ways to Donate</h3>
                <div className="mt-6 space-y-6">
                  <div>
                    <h4 className="text-base font-medium text-gray-900">By Check</h4>
                    <p className="mt-2 text-gray-500">
                      Please make checks payable to "AIEA Foundation" and mail to:
                      <br />
                      AIEA Foundation
                      <br />
                      123 Art Street
                      <br />
                      Nairobi, Kenya
                    </p>
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-gray-900">Bank Transfer</h4>
                    <p className="mt-2 text-gray-500">
                      For bank transfer details, please contact us at donations@aieafoundation.org or call +254 123 456 789.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-gray-900">Donor-Advised Funds</h4>
                    <p className="mt-2 text-gray-500">
                      You can recommend a grant to the AIEA Foundation through your donor-advised fund.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900">Tax Information</h3>
                <p className="mt-2 text-gray-500">
                  The AIEA Foundation is a registered non-profit organization. All donations are tax-deductible to the extent allowed by law. Our tax ID number is 12-3456789.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Your Impact
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              See how your donations make a difference in the lives of African artists and communities.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl font-bold text-primary">50+</div>
              <h3 className="mt-2 text-lg font-medium text-gray-900">Artists Supported</h3>
              <p className="mt-2 text-gray-500">
                Your donations have helped us support over 50 emerging African artists through scholarships, residencies, and exhibition opportunities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl font-bold text-primary">15</div>
              <h3 className="mt-2 text-lg font-medium text-gray-900">Exhibitions Organized</h3>
              <p className="mt-2 text-gray-500">
                We've organized 15 exhibitions showcasing African art in major cities around the world, reaching thousands of visitors.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl font-bold text-primary">10</div>
              <h3 className="mt-2 text-lg font-medium text-gray-900">Educational Programs</h3>
              <p className="mt-2 text-gray-500">
                We've developed 10 educational programs that have introduced African art to schools and communities across the continent.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Donor Testimonials
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              Hear from some of our donors about why they support the AIEA Foundation.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80"
                  alt="Donor"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Sarah Johnson</h3>
                  <p className="text-gray-500">Monthly Donor since 2020</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600 italic">
                "I support the AIEA Foundation because I believe in the power of art to bridge cultures and create understanding. The foundation's work in promoting African artists globally is truly inspiring."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80"
                  alt="Donor"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">David Chen</h3>
                  <p className="text-gray-500">Annual Donor since 2018</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600 italic">
                "As an art collector, I've seen firsthand the incredible talent coming from Africa. The AIEA Foundation provides crucial support to these artists, helping them gain the recognition they deserve."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2464&q=80"
                  alt="Donor"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Amina Diallo</h3>
                  <p className="text-gray-500">Corporate Sponsor</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600 italic">
                "Our company is proud to support the AIEA Foundation's educational initiatives. Their work in bringing art education to underserved communities aligns perfectly with our corporate social responsibility goals."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              Find answers to common questions about donating to the AIEA Foundation.
            </p>
          </div>
          <div className="mt-12 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900">Is my donation tax-deductible?</h3>
              <p className="mt-2 text-gray-500">
                Yes, the AIEA Foundation is a registered non-profit organization, and all donations are tax-deductible to the extent allowed by law.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900">How is my donation used?</h3>
              <p className="mt-2 text-gray-500">
                Your donation supports our programs, including artist residencies, exhibitions, educational initiatives, and publications. We strive to keep administrative costs low to maximize the impact of your gift.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900">Can I specify how my donation is used?</h3>
              <p className="mt-2 text-gray-500">
                Yes, you can designate your donation for a specific program or initiative. Please contact us at donations@aieafoundation.org to discuss your preferences.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900">Do you accept non-monetary donations?</h3>
              <p className="mt-2 text-gray-500">
                Yes, we accept in-kind donations such as art supplies, equipment, and services that support our mission. Please contact us to discuss your non-monetary donation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Questions About Donating?
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              Our team is here to help. Contact us with any questions about making a donation.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="mailto:donations@aieafoundation.org"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-blue-600"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donations; 