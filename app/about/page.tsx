import Image from 'next/image'

const founders = [
  {
    name: 'Tiffany Cruz',
    role: 'Co-Founder & CEO',
    image: '/tiffany.webp?height=400&width=400',
    bio: 'Tiffany Cruz is a visionary leader with over 15 years of experience in multiple industries. Her passion for making AI accessible to underserved industries drives the mission of Build the Door.'
  },
  {
    name: 'Elon Zito',
    role: 'Co-Founder & CTO',
    image: '/elon.webp?height=400&width=400',
    bio: 'Elon Zito is a renowned technologist with a track record of developing cutting-edge AI solutions. His expertise in AI integration and scalable architecture forms the backbone of Build the Door\'s innovative products.'
  }
]

export default function About() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">About Build the Door</h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
            We're on a mission to democratize AI technology, bringing its power to everyday businesses and underserved industries.
          </p>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Founders</h2>
          <div className="mt-10 space-y-20 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-20">
            {founders.map((founder) => (
              <div key={founder.name} className="sm:flex">
                <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
                  <Image
                    src={founder.image || "/placeholder.svg"}
                    alt={founder.name}
                    width={200}
                    height={200}
                    className="rounded-lg object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{founder.name}</h3>
                  <p className="mt-1 text-md font-medium text-indigo-600">{founder.role}</p>
                  <p className="mt-2 text-base text-gray-500">{founder.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Mission</h2>
          <p className="mt-4 text-xl text-gray-500">
            At Build the Door, we believe that true innovation happens when advanced technology is made accessible to all, not just those with deep tech resources or expertise. Our mission is to simplify AI, making it practical, affordable, and truly transformative for the industries that need it most.
          </p>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Approach</h2>
          <p className="mt-4 text-xl text-gray-500">
            We focus on building SaaS products that solve real-world problems without adding unnecessary complexity. Our intuitive solutions help you streamline processes, uncover new revenue streams, and stay ahead of the curve—all without requiring a team of data scientists.
          </p>
        </div>
      </div>
    </div>
  )
}

