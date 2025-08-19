import React, { useState } from 'react'
import { saveToLS, loadFromLS } from '../utils'

export default function PostForm({ user, onPost }) {
  const [text, setText] = useState('')

  const handlePost = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    let posts = loadFromLS('posts', [])
    const newPost = { id:Date.now(), text, author:user.username || user.email, createdAt:new Date().toISOString() }
    posts.unshift(newPost)
    saveToLS('posts', posts)
    setText('')
    onPost(posts)
  }

  return (
    <form onSubmit={handlePost} className="card stack">
      <textarea className="textarea" placeholder="Escribe un post..." value={text} onChange={e=>setText(e.target.value)} />
      <button className="btn btn-primary">Publicar</button>
    </form>
  )
}
