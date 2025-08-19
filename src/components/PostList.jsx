import React from 'react'

export default function PostList({ posts }) {
  if (!posts.length) return <div className="card">No hay publicaciones aún.</div>
  return (
    <div className="stack">
      {posts.map(p => (
        <div key={p.id} className="card">
          <p>{p.text}</p>
          <small className="muted">— {p.author} · {new Date(p.createdAt).toLocaleString()}</small>
        </div>
      ))}
    </div>
  )
}
