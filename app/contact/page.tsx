'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', phone: '', company: '', message: '' })
  }

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-indigo-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="/placeholder.svg?height=400&width=1600"
            alt="Contact us"
          />
          <div className="absolute inset-0 bg-indigo-800 opacity-75" aria-hidden="true"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Get in Touch</h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            Ready to revolutionize your business with AI? Our team of experts is here to guide you through the process and answer any questions you may have.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-3 lg:gap-x-8">
          <div className="space-y-8">
            <h2 className="text-3xl font-extrabold text-gray-900">Contact Information</h2>
            <p className="text-lg text-gray-500">
              Reach out to us through any of the following channels. We're always ready to discuss how our AI solutions can benefit your business.
            </p>
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                <span className="ml-3 text-base text-gray-900">info@buildthedoor.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                <span className="ml-3 text-base text-gray-900">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                <span className="ml-3 text-base text-gray-900">123 AI Street, Tech City, TC 12345</span>
              </div>
            </div>
          </div>
          <form action="https://api.web3forms.com/submit" method="POST" className="lg:col-span-2">
            <input type="hidden" name="access_key" value="20109da6-d15c-4108-8462-c51d68b8ef2b" />
            <input type="hidden" name="subject" value="Build the Door - New Contact Form Submission" />
            <input type="hidden" name="redirect" value="https://buildthedoor.com/thank-you" />
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <div className="mt-1">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  Company
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="organization"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

