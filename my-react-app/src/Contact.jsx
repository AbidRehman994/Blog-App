const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-pink-600 text-center mb-8">
        Contact Us
      </h2>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8">
        <p className="text-gray-600 mb-6">
          Have a question, suggestion, or found a bug? We'd love to hear from
          you. Feel free to reach out using the information below.
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-800">Email</h3>
            <a
              href="mailto:contact@dummyblog.com"
              className="text-pink-600 hover:underline"
            >
              contact@dummyblog.com
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">Location</h3>
            <p className="text-gray-600">
              Peshawar, Khyber Pakhtunkhwa, Pakistan
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">Response Time</h3>
            <p className="text-gray-600">
              We usually reply within 24–48 hours.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-sm text-gray-500 mt-8 border-t pt-4">
        © {new Date().getFullYear()} Dummy Blog. All rights reserved.
      </p>
    </div>
  );
};

export default Contact;
