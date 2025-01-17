import { Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function TouchGuides() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">TouchGuides</h1>
      <p className="mt-4 text-xl text-gray-500">
        Interactive AI tour guide for museums and historical sites
      </p>
      <div className="mt-8 text-gray-700">
        <p className="mb-4">TouchGuides brings history to life with its innovative AI-powered tour guide system. Our solution offers:</p>
        <ul className="mt-4 space-y-4">
          {[
            'Personalized tours based on visitor interests',
            'Multi-language support for international visitors',
            'Interactive Q&A capabilities',
            'Integration with augmented reality for immersive experiences',
            'Analytics to help curators improve exhibit engagement'
          ].map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
              <span className="ml-3">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">How TouchGuides Works</h2>
        <div className="mt-6 prose prose-indigo">
          <p>TouchGuides uses advanced natural language processing and machine learning to create an interactive, personalized experience for museum and historical site visitors. Our AI adapts to each user's interests, knowledge level, and preferred learning style.</p>
          <h3>Key Features:</h3>
          <ul>
            <li>Personalized Tours: Tailors the tour experience based on visitor preferences and real-time interactions.</li>
            <li>Multilingual Support: Provides tours in multiple languages, breaking down language barriers for international visitors.</li>
            <li>Interactive Q&A: Allows visitors to ask questions and receive detailed, contextually relevant answers in real-time.</li>
            <li>Augmented Reality Integration: Enhances the physical exhibits with digital overlays, bringing history to life.</li>
            <li>Engagement Analytics: Provides valuable insights to curators about visitor behavior and exhibit popularity.</li>
          </ul>
        </div>
      </div>
      <div className="mt-12">
        <Link href="/contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
          Get Started with TouchGuides
          <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  )
}

