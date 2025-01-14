import React from 'react'
import { Phone, Globe, Mail, Trash, Clock, CheckCircle, PhoneIncoming, PhoneOutgoing } from 'lucide-react'

interface AgentCardProps {
  image: string
  name: string
  role: string
  language: string
  phone: string
  stats: {
    totalCallTime: number
    completedLeads: number
    incomingCalls: number
    outgoingCalls: number
  }
}

const AgentCard: React.FC<AgentCardProps> = ({
  image,
  name,
  role,
  language,
  phone,
  stats,
}) => {
  return (
    <div className="bg-[#1F2937] rounded-lg p-6 text-white">
      <div className="flex items-start justify-between mb-6">
        <div className="flex gap-4">
          <img
            src={image}
            alt={name}
            className="w-16 h-16 rounded-lg object-cover"
          />
          <div>
            <h3 className="text-xl font-semibold">{name}</h3>
            <div className="flex items-center gap-2 text-gray-400 mt-1">
              <span>{role}</span>
              <span>•</span>
              <span>{language}</span>
            </div>
            <div className="text-gray-400 mt-1">{phone}</div>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-gray-700 rounded-lg">
            <Phone size={20} />
          </button>
          <button className="p-2 hover:bg-gray-700 rounded-lg">
            <Globe size={20} />
          </button>
          <button className="p-2 hover:bg-gray-700 rounded-lg">
            <Mail size={20} />
          </button>
          <button className="p-2 hover:bg-gray-700 rounded-lg">
            <Trash size={20} className="text-red-500" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-gray-400">
            <Clock size={16} />
            <span>Total Call Time: {stats.totalCallTime} mins</span>
          </div>
          <div className="flex items-center gap-2 text-green-400">
            <CheckCircle size={16} />
            <span>Completed Leads: {stats.completedLeads}</span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-blue-400">
            <PhoneIncoming size={16} />
            <span>Incoming Calls: {stats.incomingCalls}</span>
          </div>
          <div className="flex items-center gap-2 text-purple-400">
            <PhoneOutgoing size={16} />
            <span>Outgoing Calls: {stats.outgoingCalls}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgentCard