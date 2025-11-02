import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  const aboutData = {
    name: 'Ezra Helfand',
    bio: `Comfortable with React and Python; currently exploring Racket.`,
    interests: ['Creative Coding', 'Graphic Design', 'Problem Solving']
  }

  return (
    <div>
      <Navbar />
      <main className="container">
        <header>
          <Hero name={aboutData.name} />
        </header>

        <section id="about" className="section">
          <About {...aboutData} />
        </section>

        <div className="divider" />

        <section id="projects" className="section">
          <Projects />
        </section>

        <div className="divider" />

        <section id="experience" className="section">
          <Experience />
        </section>

        <div className="divider" />

        <section id="contact" className="section">
          <Contact />
        </section>

        <footer>
          © {new Date().getFullYear()} Ezra Helfand
        </footer>
      </main>
    </div>
  )
}
