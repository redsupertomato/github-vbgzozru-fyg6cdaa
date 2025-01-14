import React from 'react'
import { Users, PhoneCall, Clock, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react'

const StatCard = ({ title, value, icon: Icon, trend, trendValue }: {
  title: string
  value: string | number
  icon: React.ElementType
  trend: 'up' | 'down'
  trendValue: string
}) => (
  <div className="bg-[#1F2937] rounded-lg p-6">
    <div className="flex justify-between items-start mb-4">
      <div className="p-2 bg-[#374151] rounded-lg">
        <Icon className="h-6 w-6 text-blue-400" />
      </div>
      <div className={`flex items-center ${trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
        {trend === 'up' ? <ArrowUpRight className="h-4 w-4 mr-1" /> : <ArrowDownRight className="h-4 w-4 mr-1" />}
        <span>{trendValue}</span>
      </div>
    </div>
    <h3 className="text-lg text-gray-400 mb-2">{title}</h3>
    <p className="text-2xl font-bold text-white">{value}</p>
  </div>
)

const Chart = () => (
  <div className="bg-[#1F2937] rounded-lg p-6">
    <h3 className="text-xl font-semibold text-white mb-4">Call Activity</h3>
    <div className="h-64 flex items-end justify-between gap-2">
      {[65, 45, 75, 50, 85, 70, 90].map((height, index) => (
        <div key={index} className="w-full">
          <div 
            className="bg-blue-500 rounded-t-sm" 
            style={{ height: `${height}%` }}
          ></div>
        </div>
      ))}
    </div>
    <div className="flex justify-between mt-4 text-gray-400">
      <span>Mon</span>
      <span>Tue</span>
      <span>Wed</span>
      <span>Thu</span>
      <span>Fri</span>
      <span>Sat</span>
      <span>Sun</span>
    </div>
  </div>
)

const RecentActivity = () => (
  <div className="bg-[#1F2937] rounded-lg p-6">
    <h3 className="text-xl font-semibold text-white mb-4">Recent Activity</h3>
    <div className="space-y-4">
      {[
        { time: '2 min ago', action: 'New lead assigned to Sarah Johnson', type: 'lead' },
        { time: '15 min ago', action: 'Michael Chen completed a call', type: 'call' },
        { time: '1 hour ago', action: 'Emma Wilson updated lead status', type: 'update' },
        { time: '2 hours ago', action: 'New campaign started', type: 'campaign' },
      ].map((activity, index) => (
        <div key={index} className="flex items-center gap-4 text-gray-300">
          <div className="w-16 text-sm text-gray-400">{activity.time}</div>
          <div>{activity.action}</div>
        </div>
      ))}
    </div>
  </div>
)

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <div className="text-gray-400">
          {new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Agents"
          value="24"
          icon={Users}
          trend="up"
          trendValue="+12.5%"
        />
        <StatCard
          title="Total Calls"
          value="1,234"
          icon={PhoneCall}
          trend="up"
          trendValue="+8.2%"
        />
        <StatCard
          title="Avg. Call Duration"
          value="5m 42s"
          icon={Clock}
          trend="down"
          trendValue="-2.1%"
        />
        <StatCard
          title="Conversion Rate"
          value="64.8%"
          icon={TrendingUp}
          trend="up"
          trendValue="+5.4%"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Chart />
        </div>
        <div>
          <RecentActivity />
        </div>
      </div>
    </div>
  )
}

export default Dashboard