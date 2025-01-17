import { Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function CampsiteIQ() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">CampsiteIQ</h1>
      <p className="mt-4 text-xl text-gray-500">
        AI-powered campsite management and booking system
      </p>
      <div className="mt-8 text-gray-700">
        <p className="mb-4">CampsiteIQ revolutionizes the camping industry with its intelligent booking and management system. Our AI-driven solution helps campsite owners:</p>
        <ul className="mt-4 space-y-4">
          {[
            'Optimize pricing based on demand and seasonality',
            'Manage reservations and occupancy efficiently',
            'Provide personalized recommendations to campers',
            'Streamline maintenance schedules',
            'Analyze customer feedback for continuous improvement'
          ].map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
              <span className="ml-3">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">How CampsiteIQ Works</h2>
        <div className="mt-6 prose prose-indigo">
          <p>CampsiteIQ uses advanced machine learning algorithms to analyze historical booking data, weather patterns, local events, and other relevant factors to provide campsite owners with actionable insights and automated management tools.</p>
          <h3>Key Features:</h3>
          <ul>
            <li>Dynamic Pricing Engine: Automatically adjusts prices based on demand, maximizing revenue without overpricing.</li>
            <li>Smart Reservation System: Efficiently manages bookings, minimizes conflicts, and optimizes site allocation.</li>
            <li>Predictive Maintenance: Schedules maintenance tasks based on usage patterns and weather forecasts.</li>
            <li>Camper Insights: Analyzes customer preferences and behaviors to improve services and target marketing efforts.</li>
            <li>Integration Capabilities: Seamlessly connects with popular booking platforms and campsite management software.</li>
          </ul>
        </div>
      </div>
      <div className="mt-12">
        <Link href="/contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
          Get Started with CampsiteIQ
          <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  )
}

