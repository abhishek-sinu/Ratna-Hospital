import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { FiStar } from 'react-icons/fi'

export default function Feedback() {
  const [rating, setRating] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHeader
        title="Patient Feedback"
        subtitle="Your experience helps us serve you better"
      />

      <section className="py-20">
        <div className="container-x mx-auto max-w-2xl">
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
          >
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                required
                type="text"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Rate Your Experience
              </label>
              <div className="flex gap-1 text-2xl text-amber-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setRating(star)}
                    aria-label={`${star} star`}
                  >
                    <FiStar
                      className={star <= rating ? 'fill-amber-400' : ''}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Your Feedback
              </label>
              <textarea
                required
                rows={5}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-primary py-3 font-semibold text-white transition hover:bg-primary-dark"
            >
              Submit Feedback
            </button>

            {submitted && (
              <p className="rounded-lg bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                Thank you for sharing your feedback with Ratna Hospital!
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  )
}
