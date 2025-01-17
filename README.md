# Build The Door

A modern web application built with Next.js that showcases AI solutions and services. The site features a responsive design, contact forms, and product information pages.

## Tech Stack

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- Web3Forms for form handling

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/buildthedoor.git
cd buildthedoor
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
buildthedoor/
├── app/                    # Next.js app directory
│   ├── components/        # Reusable React components
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── products/         # Product pages
│   ├── thank-you/        # Form submission thank you page
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── public/               # Static files
└── package.json          # Project dependencies and scripts
```

## Features

- Modern, responsive design
- Server-side rendering with Next.js
- Contact form with form validation
- Product showcase pages
- About page
- Tailwind CSS for styling

## Development

### Code Style

- Follow TypeScript best practices
- Use functional components with hooks
- Implement responsive design using Tailwind CSS classes
- Keep components modular and reusable

### Building for Production

```bash
npm run build
# or
yarn build
```

The build will be created in the `.next` folder.

To start the production server:
```bash
npm start
# or
yarn start
```

## Contact Form

The contact form uses Web3Forms as the backend service. Make sure to:
1. Replace the access key in the contact form with your own Web3Forms access key
2. Test the form submission in development
3. Verify the thank you page redirect works correctly

## License

This project is licensed under the MIT License - see the LICENSE file for details. 