import { useState } from 'react'
import ProjectModal from './ProjectModal.jsx'

const DATA = [
  {
    title: 'Battleship',
    summary: 'Classic Battleship game with grid setup, ship placement, and turn logic',
    long: 'Classic Battleship game. Features a responsive grid, ship placement rules, hit/miss feedback, basic AI for the opponent, and clean UI.',

  },
  {
    title: 'Python Drawing App',
    summary: 'Pygame drawing tool with brush sizes, colors, eraser, and export.',
    long: 'A simple creative tool written in Python using Pygame. Supports multiple brush sizes, color palette selection, an eraser, and saving the canvas.',

  }
]

export default function Projects() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)

  const openModal = (p) => { setSelected(p); setOpen(true) }
  const closeModal = () => { setOpen(false); setSelected(null) }

  return (
    <div>
      <h2>Projects</h2>
      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        {DATA.map((p) => (
          <button key={p.title} className="card text-left bg-white border-0 hover:shadow-md" onClick={() => openModal(p)}>
            <h3 className="text-brand text-lg font-semibold">{p.title}</h3>
            <p className="text-gray-700 mt-2">{p.summary}</p>
            <span className="mt-3 inline-block text-sm text-brand">Read more →</span>
          </button>
        ))}
      </div>

      <ProjectModal open={open} onClose={closeModal} project={selected || {}} />
    </div>
  )
}
