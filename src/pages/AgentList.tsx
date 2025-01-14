import React, { useState } from 'react'
import { Search, Filter } from 'lucide-react'
import AgentCard from '../components/AgentCard'

interface Agent {
  id: string
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

const mockAgents: Agent[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
    name: 'Sarah Johnson',
    role: 'Sales',
    language: 'Spanish',
    phone: '+1 (212) 555-8901',
    stats: {
      totalCallTime: 156,
      completedLeads: 45,
      incomingCalls: 78,
      outgoingCalls: 92
    }
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    name: 'Michael Chen',
    role: 'Customer Service',
    language: 'Mandarin',
    phone: '+1 (415) 555-3456',
    stats: {
      totalCallTime: 142,
      completedLeads: 38,
      incomingCalls: 65,
      outgoingCalls: 85
    }
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
    name: 'Emma Wilson',
    role: 'Secretary',
    language: 'French',
    phone: '+1 (305) 555-7890',
    stats: {
      totalCallTime: 168,
      completedLeads: 52,
      incomingCalls: 89,
      outgoingCalls: 104
    }
  }
]

const AgentList = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredAgents = mockAgents.filter(agent =>
    agent.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div className="relative flex-1 max-w-xl">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search agents..."
            className="w-full pl-10 pr-4 py-2 bg-[#1F2937] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#1F2937] text-white rounded-lg hover:bg-gray-700">
          <Filter size={20} />
          <span>Filter</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAgents.map((agent) => (
          <AgentCard key={agent.id} {...agent} />
        ))}
      </div>
    </div>
  )
}

export default AgentList