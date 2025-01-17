'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-white shadow">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <span className="sr-only">Build the Door</span>
              <Image
                src="/logo.svg"
                alt="Build the Door"
                width={200}
                height={50}
                priority
              />
            </Link>
          </div>
          <div className="hidden lg:block">
            <div className="ml-10 space-x-8">
              <Link href="/about" className="text-base font-medium text-gray-500 hover:text-gray-900">
                About
              </Link>
              <Link href="/products" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Products
              </Link>
              <Link href="/contact" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Contact
              </Link>
            </div>
          </div>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-900">
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="pt-2 pb-4 space-y-1">
              <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                About
              </Link>
              <Link href="/products" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Products
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

