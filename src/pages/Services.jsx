import PageHeader from '../components/PageHeader'
import ServiceCard from '../components/ServiceCard'
import EmergencyCTA from '../components/EmergencyCTA'
import { SERVICES } from '../data/siteData'

export default function Services() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="We offer different services to improve your health"
      />

      <section className="py-20">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <EmergencyCTA />
    </>
  )
}
