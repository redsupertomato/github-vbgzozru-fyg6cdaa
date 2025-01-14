import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import AgentList from './pages/AgentList'
import Knowledge from './pages/Knowledge'
import LeadData from './pages/LeadData'
import Campaign from './pages/Campaign'
import CallLog from './pages/CallLog'
import Team from './pages/Team'
import Subscription from './pages/Subscription'
import Information from './pages/Information'

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-[#0F172A]">
        <Sidebar />
        <main className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/agents" element={<AgentList />} />
            <Route path="/knowledge" element={<Knowledge />} />
            <Route path="/leads" element={<LeadData />} />
            <Route path="/campaign" element={<Campaign />} />
            <Route path="/calls" element={<CallLog />} />
            <Route path="/team" element={<Team />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/information" element={<Information />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App