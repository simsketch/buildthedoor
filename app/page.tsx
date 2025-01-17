import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">Welcome to</span>
          <span className="block text-indigo-600">Build the Door</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Empowering businesses with straightforward, user-friendly AI tools for underserved industries.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <Link href="/products" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
              Our Products
            </Link>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <Link href="/contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Innovative AI Solutions for Real-World Challenges
        </h2>
        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col items-center">
            <h3 className="mt-6 text-lg font-medium text-gray-900">Simplified AI Integration</h3>
            <p className="mt-2 text-base text-gray-500 text-center">
              Our advanced AI technology is designed for seamless integration, enhancing operational efficiency across various business sectors.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="mt-6 text-lg font-medium text-gray-900">Industry-Specific Solutions</h3>
            <p className="mt-2 text-base text-gray-500 text-center">
              We deliver tailored AI tools that address the unique challenges faced by underserved industries, driving innovation where it's needed most.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="mt-6 text-lg font-medium text-gray-900">Accelerated Growth</h3>
            <p className="mt-2 text-base text-gray-500 text-center">
              Our AI-powered tools streamline processes, uncover new revenue streams, and provide a competitive edge in rapidly evolving markets.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-24 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Forge Your Path to Success
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          Harness the power of AI to create new opportunities and drive your business forward.
        </p>
        <div className="mt-8">
          <Link href="/products" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
            Explore Our Solutions
            <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  )
}

