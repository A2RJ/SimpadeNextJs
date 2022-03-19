export default function Coba() {
  return (
    <>
      {/* <section className="body-font relative w-full bg-white px-8 text-gray-700">
        <div className="container mx-auto flex max-w-7xl flex-col flex-wrap items-center justify-between py-5 md:flex-row">
          <a
            href="#_"
            className="relative z-10 flex w-auto select-none items-center text-2xl font-extrabold leading-none text-black"
          >
            tails.
          </a>
          <nav className="top-0 left-0 z-0 -ml-0 flex h-full w-full items-center justify-center space-x-5 py-5 text-base md:absolute md:-ml-5 md:py-0">
            <a
              href="#_"
              className="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900"
            >
              <span className="block">Home</span>
            </a>
            <a
              href="#_"
              className="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900"
            >
              <span className="block">Features</span>
            </a>
            <a
              href="#_"
              className="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900"
            >
              <span className="block">Pricing</span>
            </a>
            <a
              href="#_"
              className="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900"
            >
              <span className="block">Blog</span>
              <span className="absolute bottom-0 left-0 -mb-1 inline-block h-0.5 w-full overflow-hidden">
                <span className="absolute inset-0 inline-block h-full w-full transform bg-gray-900" />
              </span>
            </a>
          </nav>
          <div className="relative z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end">
            <a
              href="#"
              className="whitespace-no-wrap inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-base font-medium leading-6 text-gray-600 shadow-sm hover:bg-gray-50 focus:shadow-none focus:outline-none"
            >
              Sign in
            </a>
            <span className="inline-flex rounded-md shadow-sm">
              <a
                href="#"
                className="whitespace-no-wrap inline-flex items-center justify-center rounded-md border border-blue-700 bg-blue-600 px-4 py-2 text-base font-medium leading-6 text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Sign up
              </a>
            </span>
          </div>
        </div>
      </section> */}

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto max-w-6xl items-center px-4  sm:px-20 md:px-32 lg:px-16">
          <div className="-mx-3 flex flex-wrap items-center">
            <div className="lg:order-0 order-1 w-full px-3 lg:w-1/2">
              <div className="w-full lg:max-w-md">
                <h2 className="font-heading mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                  Jam-packed with all the tools you need to succeed!
                </h2>
                <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">
                  {/* It's never been easier to build a business of your own. Our */}
                  tools will help you with the following:
                </p>
                <ul>
                  <li className="flex items-center space-x-4 py-2 xl:py-3">
                    <svg
                      className="h-8 w-8 text-pink-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                      />
                    </svg>
                    <span className="font-medium text-gray-500">
                      Faster Processing and Delivery
                    </span>
                  </li>
                  <li className="flex items-center space-x-4 py-2 xl:py-3">
                    <svg
                      className="h-8 w-8 text-yellow-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                    <span className="font-medium text-gray-500">
                      Out of the Box Tracking and Monitoring
                    </span>
                  </li>
                  <li className="flex items-center space-x-4 py-2 xl:py-3">
                    <svg
                      className="h-8 w-8 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <span className="font-medium text-gray-500">
                      100% Protection and Security for Your App
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="order-0 mb-12 w-full px-3 lg:order-1 lg:mb-0 lg:w-1/2">
              {/* <img
                className="mx-auto sm:max-w-sm lg:max-w-full"
                src="https://cdn.devdojo.com/images/november2020/feature-graphic.png"
                alt="feature image"
              /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
