import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  Users,
  BookOpen,
  Database,
  MessageSquare,
  UserCheck,
  CreditCard,
  Info,
  Building2
} from 'lucide-react'

const Sidebar = () => {
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/' },
    { icon: <Users size={20} />, label: 'Agent List', path: '/agents' },
    { icon: <BookOpen size={20} />, label: 'Knowledge', path: '/knowledge' },
    { icon: <Database size={20} />, label: 'Lead Data', path: '/leads' },
    { icon: <MessageSquare size={20} />, label: 'Campaign', path: '/campaign' },
    { icon: <UserCheck size={20} />, label: 'Call Log', path: '/calls' },
    { icon: <Users size={20} />, label: 'Team', path: '/team' },
    { icon: <CreditCard size={20} />, label: 'Subscription', path: '/subscription' },
    { icon: <Info size={20} />, label: 'Information', path: '/information' },
  ]

  return (
    <div className="w-64 min-h-screen bg-[#111827] text-gray-300 p-4">
      <div className="flex items-center gap-3 mb-8 px-2">
        <Building2 className="h-8 w-8" />
        <h1 className="text-xl font-bold text-white">World Wide Inc.</h1>
      </div>
      
      <nav className="space-y-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-gray-800 text-white'
                  : 'hover:bg-gray-800 hover:text-white'
              }`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar