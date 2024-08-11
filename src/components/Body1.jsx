export const Feature = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        {/* <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
            Brand new
          </p>
        </div> */}
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Secure</span>
          </span>{' '}
          Your Data with Our Encryption and Decryption Services
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
         Safeguard your information with advanced encryption techniques and seamless decryption processes.
        </p>
      </div>
      <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4 ">
{/* added animate-slidein ... */}
        <div className=" animate-slidein ...  flex flex-col justify-between p-5 border rounded shadow-sm hover:bg-teal-50">
          <div className="">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 ">
              <svg
                className="w-12 h-12 text-purple-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">AES-128 Encryption</h6>
            <p className="mb-3 text-sm text-gray-900">
               Protect your data with AES-128, a secure and efficient symmetric encryption algorithm.
            </p>
          </div>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-400 hover:text-purple-800"
          >
            Learn more
          </a>
        </div>

        <div className="animate-slidein ... flex flex-col justify-between p-5 border rounded shadow-sm hover:bg-teal-50">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-12 h-12 text-purple-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">RSA Encryption</h6>
            <p className="mb-3 text-sm text-gray-900">
              Securely encrypt sensitive data using RSA, a robust asymmetric encryption algorithm.
            </p>
          </div>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-400 hover:text-purple-800"
          >
            Learn more
          </a>
        </div>

        <div className="animate-slidein ... flex flex-col justify-between p-5 border rounded shadow-sm hover:bg-teal-50">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-12 h-12 text-purple-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Data Decryption</h6>
            <p className="mb-3 text-sm text-gray-900">
             Effortlessly decrypt your encrypted data with our user-friendly decryption tools.
            </p>
          </div>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-400 hover:text-purple-800"
          >
            Learn more
          </a>
        </div>

        <div className="animate-slidein ...  flex flex-col justify-between p-5 border rounded shadow-sm hover:bg-teal-50">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-12 h-12 text-purple-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Encryption Best Practices</h6>
            <p className="mb-3 text-sm text-gray-900">
            Follow these best practices to ensure your data remains secure and protected.
            </p>
          </div>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-400 hover:text-purple-800"
          >
            Learn more
          </a>
        </div>

      </div>
    </div>
  );
};