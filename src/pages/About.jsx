import PageHeader from '../components/PageHeader'
import StatsSection from '../components/StatsSection'
import { FiCheckCircle } from 'react-icons/fi'

const VALUES = [
  'Patient safety above all else',
  'Clinical efficacy in every treatment',
  'Continuous improvement in healthcare delivery',
  'Compassionate, personalized patient care',
]

export default function About() {
  return (
    <>
      <PageHeader
        title="About Ratna Hospital"
        subtitle="Precision care, personalized for you"
      />

      <section className="py-20">
        <div className="container-x grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary-light">
              Who We Are
            </span>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              A Trusted Multi-Specialty Hospital
            </h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              RATNA Hospital is a trusted multi-specialty hospital in Odisha,
              providing an extensive range of treatment options for patients
              with simple and complex health conditions. Our mission is to enhance
              health outcomes through precision medicine, where each
              treatment plan is meticulously tailored to the individual's
              unique pathophysiology and clinical needs.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              Our core values revolve around the principles of patient
              safety, clinical efficacy, and a commitment to continuous
              improvement in all aspects of healthcare delivery.
            </p>
          </div>
          <div className="rounded-2xl bg-primary/5 p-8">
            <h3 className="mb-4 text-xl font-semibold text-gray-900">
              Our Core Values
            </h3>
            <ul className="space-y-3">
              {VALUES.map((value) => (
                <li key={value} className="flex items-start gap-3">
                  <FiCheckCircle className="mt-1 shrink-0 text-primary" />
                  <span className="text-gray-700">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <StatsSection />

      <section className="py-20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-primary-light">
              Our Commitment
            </span>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              We Maintain the Highest Standards of Cleanliness
            </h2>
            <p className="mt-4 text-gray-600">
              At Ratna Hospital, maintaining a pristine and hygienic
              environment is paramount to ensuring the safety and well-being
              of our patients, staff, and visitors. We adhere to rigorous
              cleanliness protocols, including regular disinfection of all
              surfaces, meticulous hand hygiene, and proper waste disposal
              procedures.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
