import React from 'react';

const SupportUs = () => {
  const handleTopUp = () => {
    // Logic for top-up (can be an API call or a redirect to a payment page)
    alert('Top-up functionality not yet implemented.'); // Placeholder for actual implementation
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Support Us</h1>
      <p className="text-lg mb-6">
        Thank you for considering to support us! Your contributions help us keep improving our services.
      </p>
      <button
        onClick={handleTopUp}
        className="bg-primary text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
      >
        Top Up Now
      </button>
    </div>
  );
};

export default SupportUs;
