export default function Navbar() {
  const items = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ]
  return (
    <nav className="nav">
      <div className="container flex items-center justify-between">
        <a href="#" className="py-3 font-semibold text-brand text-lg">EH</a>
        <div className="flex items-center">
          {items.map((it) => (
            <a key={it.href} href={it.href} className="px-3 py-3 text-sm text-gray-700 hover:text-brand transition-colors uppercase tracking-wide">{it.label}</a>
          ))}
        </div>
      </div>
    </nav>
  )
}
