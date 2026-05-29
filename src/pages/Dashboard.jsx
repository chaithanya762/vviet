import { useState } from 'react'
import { 
  Users, BookOpen, Calendar, Bell, 
  Shield, Award, LogOut 
} from 'lucide-react'

const stats = [
  { label: 'Total Students', value: '2,847', icon: Users, color: 'from-blue-500 to-blue-700' },
  { label: 'Active Courses', value: '124', icon: BookOpen, color: 'from-purple-500 to-purple-700' },
  { label: 'Events Today', value: '8', icon: Calendar, color: 'from-emerald-500 to-emerald-700' },
  { label: 'Threats Blocked', value: '23', icon: Shield, color: 'from-red-500 to-red-700' },
]

const notifications = [
  { text: 'New assignment posted in Data Structures', time: '2m ago', type: 'course' },
  { text: 'Suspicious login attempt blocked', time: '15m ago', type: 'security' },
  { text: 'Hackathon registrations open!', time: '1h ago', type: 'event' },
  { text: 'Your attendance is at 87%', time: '3h ago', type: 'alert' },
]

export default function Dashboard() {
  const [active, setActive] = useState('Dashboard')

  const navItems = ['Dashboard', 'Courses', 'Attendance', 'Events', 'Security', 'Profile']

  return (
    <div className="min-h-screen bg-slate-950 flex">
      
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 border-r border-white/10 flex flex-col p-6">
        <div className="mb-10">
          <div className="text-2xl font-bold text-white">VVIET</div>
          <div className="text-blue-400 text-xs tracking-widest uppercase">Smart Campus</div>
        </div>

        <nav className="flex flex-col gap-1 flex-1">
          {navItems.map(item => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition ${
                active === item 
                  ? 'bg-blue-600 text-white' 
                  : 'text-white/50 hover:text-white hover:bg-white/5'
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

        <button className="flex items-center gap-2 text-white/30 hover:text-white text-sm px-4 py-3 rounded-xl hover:bg-white/5 transition">
          <LogOut size={16} /> Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">Good Morning, Student 👋</h1>
            <p className="text-white/40 text-sm mt-1">Thursday, 29 May 2026 • VVIET Campus</p>
          </div>
          <div className="relative">
            <Bell size={22} className="text-white/50 hover:text-white cursor-pointer" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">4</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
          {stats.map(({ label, value, icon: Icon, color }) => (
            <div key={label} className="bg-slate-900 border border-white/10 rounded-2xl p-5">
              <div className={`w-10 h-10 rounded-xl bg-linear-to-br ${color} flex items-center justify-center mb-4`}>
                <Icon size={18} className="text-white" />
              </div>
              <div className="text-2xl font-bold text-white">{value}</div>
              <div className="text-white/40 text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-3 gap-4">
          
          {/* Notifications */}
          <div className="col-span-2 bg-slate-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Bell size={16} className="text-blue-400" /> Live Notifications
            </h2>
            <div className="space-y-3">
              {notifications.map((n, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/5">
                  <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                    n.type === 'security' ? 'bg-red-400' :
                    n.type === 'event' ? 'bg-emerald-400' :
                    n.type === 'alert' ? 'bg-yellow-400' : 'bg-blue-400'
                  }`} />
                  <div className="flex-1">
                    <p className="text-white/80 text-sm">{n.text}</p>
                    <p className="text-white/30 text-xs mt-0.5">{n.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* XP / Gamification */}
          <div className="bg-slate-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Award size={16} className="text-yellow-400" /> Your XP
            </h2>
            <div className="text-center py-4">
              <div className="text-5xl font-bold text-yellow-400">750</div>
              <div className="text-white/40 text-sm mt-1">Campus Points</div>
              <div className="mt-4 bg-white/10 rounded-full h-2">
                <div className="bg-yellow-400 h-2 rounded-full" style={{width: '75%'}}></div>
              </div>
              <div className="text-white/30 text-xs mt-2">750 / 1000 to next rank</div>
              <div className="mt-4 bg-yellow-400/10 border border-yellow-400/20 rounded-xl p-3">
                <div className="text-yellow-400 font-semibold text-sm">🏆 Gold Scholar</div>
                <div className="text-white/40 text-xs mt-1">Top 15% of campus</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}