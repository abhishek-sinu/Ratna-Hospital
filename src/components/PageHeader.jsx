export default function PageHeader({ title, subtitle }) {
  return (
    <section className="bg-gradient-to-r from-primary-dark via-primary to-primary-light py-16 text-center text-white">
      <div className="container-x">
        <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>
        {subtitle && <p className="mt-3 text-white/80">{subtitle}</p>}
      </div>
    </section>
  )
}
