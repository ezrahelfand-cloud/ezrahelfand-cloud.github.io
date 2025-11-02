export default function ProjectModal({ open, onClose, project }) {
  if (!open) return null
  return (
    <div className="modal" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="modal-backdrop" />
      <div className="modal-panel relative z-10 ring-1 ring-blue-50" onClick={(e) => e.stopPropagation()}>
        <h3 className="text-xl font-semibold text-brand">{project.title}</h3>
        <p className="mt-2 text-gray-700">{project.long}</p>
        {project.links?.length > 0 && (
          <div className="mt-4 flex gap-3">
            {project.links.map((l) => (
              <a key={l.href} className="btn-outline" href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
            ))}
          </div>
        )}
        <div className="mt-6 text-right">
          <button className="btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  )
}
