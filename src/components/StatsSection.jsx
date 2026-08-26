import { STATS } from '../data/siteData'

export default function StatsSection() {
  return (
    <section className="bg-primary-dark py-12 text-white">
      <div className="container-x grid grid-cols-2 gap-8 text-center md:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <p className="text-3xl font-extrabold sm:text-4xl">
              {stat.value}
              {stat.suffix}
            </p>
            <p className="mt-1 text-sm text-white/80">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
