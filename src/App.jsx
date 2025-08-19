import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Auth from './components/Auth'
import PostForm from './components/PostForm'
import PostList from './components/PostList'
import { loadFromLS } from './utils'

export default function App() {
  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    setPosts(loadFromLS('posts', []))
  },[])

  return (
    <div>
      <Navbar user={user} onLogout={()=>setUser(null)} />
      <div className="container">
        {user? <PostForm user={user} onPost={setPosts} /> : <Auth onLogin={setUser} />}
        <PostList posts={posts} />
      </div>
    </div>
  )
}
