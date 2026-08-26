import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="container-x flex flex-col items-center justify-center gap-4 py-32 text-center">
      <h1 className="text-6xl font-extrabold text-primary">404</h1>
      <p className="text-lg text-gray-600">Page not found.</p>
      <Link
        to="/"
        className="rounded-full bg-primary px-6 py-3 font-semibold text-white hover:bg-primary-dark"
      >
        Back to Home
      </Link>
    </section>
  )
}
