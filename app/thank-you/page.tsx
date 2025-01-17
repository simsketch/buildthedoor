import Link from 'next/link'

export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="mt-6 text-3xl font-extrabold text-gray-900">
            Thank You!
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Your message has been successfully submitted. We'll get back to you as soon as possible.
          </p>
        </div>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
} 