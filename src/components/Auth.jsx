import React, { useState } from 'react'
import { saveToLS, loadFromLS } from '../utils'

export default function Auth({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    let users = loadFromLS('users', [])
    if (isLogin) {
      const user = users.find(u => u.email===email && u.password===password)
      if (!user) {
        setError('Credenciales inválidas')
        return
      }
      onLogin(user)
    } else {
      if (users.find(u => u.email===email)) {
        setError('El correo ya existe')
        return
      }
      const newUser = { id:Date.now(), email, password, username, firstName, lastName }
      users.push(newUser)
      saveToLS('users', users)
      onLogin(newUser)
    }
  }

  return (
    <div className="card stack">
      <h2>{isLogin? 'Iniciar sesión':'Registrarse'}</h2>
      <form onSubmit={handleSubmit} className="stack">
        {!isLogin && <>
          <input className="input" placeholder="Usuario" value={username} onChange={e=>setUsername(e.target.value)} required />
          <div style={{display:'flex', gap:8}}>
            <input className="input" placeholder="Nombre" value={firstName} onChange={e=>setFirstName(e.target.value)} required />
            <input className="input" placeholder="Apellido" value={lastName} onChange={e=>setLastName(e.target.value)} required />
          </div>
        </>}
        <input className="input" type="email" placeholder="Correo" value={email} onChange={e=>setEmail(e.target.value)} required />
        <input className="input" type="password" placeholder="Clave" value={password} onChange={e=>setPassword(e.target.value)} required />
        <button className="btn btn-primary">{isLogin?'Entrar':'Crear cuenta'}</button>
      </form>
      <button className="btn btn-link" onClick={()=>setIsLogin(!isLogin)}>
        {isLogin? '¿No tienes cuenta? Regístrate':'¿Ya tienes cuenta? Inicia sesión'}
      </button>
      {error && <p className="muted" style={{color:'red'}}>{error}</p>}
    </div>
  )
}
