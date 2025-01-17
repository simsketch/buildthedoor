import Link from 'next/link'
import { ArrowRight, Tent, LibraryIcon as Museum, Zap, Users, TrendingUp } from 'lucide-react'

const products = [
  {
    name: 'CampsiteIQ',
    description: 'AI-powered campsite management and booking system',
    icon: Tent,
    href: '/products/campsiteiq',
    features: [
      'Dynamic pricing optimization',
      'Automated reservation management',
      'Predictive maintenance scheduling',
      'Customer preference analysis',
      'Real-time occupancy tracking'
    ]
  },
  {
    name: 'TouchGuides',
    description: 'Interactive AI tour guide for museums and historical sites',
    icon: Museum,
    href: '/products/touchguides',
    features: [
      'Personalized tour experiences',
      'Multi-language support',
      'Interactive Q&A capabilities',
      'Augmented reality integration',
      'Visitor engagement analytics'
    ]
  },
]

const benefits = [
  {
    title: 'Advanced AI Integration',
    description: 'Seamlessly incorporate cutting-edge AI technology into your existing operations.',
    icon: Zap,
  },
  {
    title: 'Industry-Specific Solutions',
    description: 'Tailored AI tools designed to address the unique challenges of underserved industries.',
    icon: Users,
  },
  {
    title: 'Accelerated Growth',
    description: 'Unlock new revenue streams and gain a competitive edge in rapidly evolving markets.',
    icon: TrendingUp,
  },
]

export default function Products() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="/placeholder.svg?height=400&width=1600"
            alt="AI Technology"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-75" aria-hidden="true"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">AI-Powered Solutions</h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Discover our suite of advanced AI tools designed to revolutionize operations in underserved industries. 
            Build the Door's products bring the power of artificial intelligence to your fingertips.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Our Products</h2>
        <p className="mt-4 text-xl text-gray-500">
          Cutting-edge AI solutions designed to transform your business operations.
        </p>
        <div className="mt-12 grid gap-16 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
          {products.map((product) => (
            <div key={product.name} className="border rounded-lg shadow-sm p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <product.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                  <p className="mt-1 text-gray-500">{product.description}</p>
                </div>
              </div>
              <ul className="mt-6 space-y-4">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">{feature}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href={product.href} className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                  Learn more
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits section */}
        <div className="mt-32">
          <h2 className="text-3xl font-extrabold text-gray-900">The Build the Door Advantage</h2>
          <p className="mt-4 text-xl text-gray-500">
            Our AI solutions offer unique benefits that set us apart in the industry.
          </p>
          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex flex-col items-start">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <benefit.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">{benefit.title}</h3>
                <p className="mt-2 text-base text-gray-500">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA section */}
        <div className="mt-32 bg-indigo-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">Ready to transform your business?</span>
                <span className="block">Start with Build the Door today.</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-indigo-200">
                Our team of experts is ready to help you implement AI solutions that will revolutionize your operations and drive growth.
              </p>
              <a
                href="/contact"
                className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-indigo-600 hover:bg-indigo-50"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
            <img
              className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
              src="/placeholder.svg?height=600&width=800"
              alt="App screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

