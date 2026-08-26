import PageHeader from '../components/PageHeader'
import DoctorCard from '../components/DoctorCard'
import { DOCTORS } from '../data/siteData'

export default function Doctors() {
  return (
    <>
      <PageHeader
        title="Meet Our Doctors"
        subtitle="Experienced specialists dedicated to your well-being"
      />

      <section className="py-20">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DOCTORS.map((doctor) => (
            <DoctorCard key={doctor.name} {...doctor} />
          ))}
        </div>
      </section>
    </>
  )
}
