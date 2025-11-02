export default function Hero({ name }) {
  return (
    <div className="flex flex-col items-start gap-4">
  <h1 className="leading-tight">{name}</h1>
      <p className="text-gray-600 max-w-2xl">
        Portfolio
      </p>
      <div className="flex gap-3">
        <a href="#projects" className="btn">View my work</a>
        <a href="#contact" className="btn-outline">Get in touch</a>
      </div>
    </div>
  )
}
