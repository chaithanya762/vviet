import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10 w-full max-w-md shadow-2xl">
        
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="text-4xl font-bold text-white tracking-tight">VVIET</div>
          <div className="text-blue-300 text-sm mt-1 tracking-widest uppercase">Smart Campus Portal</div>
        </div>

        {/* Form */}
        <div className="space-y-5">
          <div>
            <label className="text-white/70 text-sm mb-1 block">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@vviet.edu.in"
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-blue-400 transition"
            />
          </div>
          <div>
            <label className="text-white/70 text-sm mb-1 block">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-blue-400 transition"
            />
          </div>
          <button
            onClick={() => navigate('/dashboard')}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl transition duration-200 mt-2"
          >
            Sign In
          </button>
        </div>

        {/* Footer */}
        <p className="text-white/30 text-xs text-center mt-8">
          VVIET Smart Campus © 2026
        </p>
      </div>
    </div>
  )
}