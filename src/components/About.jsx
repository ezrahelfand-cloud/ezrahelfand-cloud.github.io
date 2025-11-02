export default function About({ name, bio, interests = [] }) {
  return (
    <div>
      <h2 className="text-brand">About</h2>
      <p className="mt-2 text-gray-700">{bio}</p>
      {interests.length > 0 && (
        <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
          {interests.map((i) => <li key={i}>• {i}</li>)}
        </ul>
      )}
    </div>
  )
}
