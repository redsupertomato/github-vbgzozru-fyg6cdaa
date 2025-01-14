import React from 'react'
import { Check, CreditCard, Activity, Users, Clock, AlertCircle } from 'lucide-react'

const plans = [
  {
    name: 'Basic',
    price: '$29',
    description: 'Perfect for small teams getting started',
    features: [
      'Up to 5 agents',
      '1,000 calls per month',
      'Basic analytics',
      'Email support',
      '5GB storage'
    ]
  },
  {
    name: 'Professional',
    price: '$99',
    description: 'Ideal for growing businesses',
    features: [
      'Up to 20 agents',
      '5,000 calls per month',
      'Advanced analytics',
      'Priority support',
      '25GB storage',
      'Custom reports',
      'API access'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations with specific needs',
    features: [
      'Unlimited agents',
      'Unlimited calls',
      'Enterprise analytics',
      '24/7 dedicated support',
      'Unlimited storage',
      'Custom integration',
      'SLA guarantee',
      'On-premise option'
    ]
  }
]

const usageStats = [
  {
    name: 'Active Agents',
    value: '18/20',
    icon: Users,
    percentage: 90,
    alert: true
  },
  {
    name: 'Monthly Calls',
    value: '3,450/5,000',
    icon: Activity,
    percentage: 69,
    alert: false
  },
  {
    name: 'Storage Used',
    value: '15.5/25 GB',
    icon: Clock,
    percentage: 62,
    alert: false
  }
]

const Subscription = () => {
  return (
    <div className="p-6 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Subscription</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <CreditCard size={20} />
          <span>Manage Billing</span>
        </button>
      </div>

      <div className="bg-[#1F2937] rounded-lg p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Current Plan Usage</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {usageStats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.name} className="bg-[#374151] rounded-lg p-4">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <Icon size={20} className="text-blue-400" />
                    <span className="text-white">{stat.name}</span>
                  </div>
                  {stat.alert && (
                    <AlertCircle size={20} className="text-yellow-400" />
                  )}
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="w-full bg-[#1F2937] rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        stat.percentage > 80 ? 'bg-yellow-400' : 'bg-blue-500'
                      }`}
                      style={{ width: `${stat.percentage}%` }}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative bg-[#1F2937] rounded-lg p-6 ${
              plan.popular ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                Most Popular
              </span>
            )}
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold text-white mb-2">{plan.price}</div>
              <p className="text-gray-400">{plan.description}</p>
            </div>
            <ul className="space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-gray-300">
                  <Check size={16} className="text-green-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              className={`w-full mt-6 px-4 py-2 rounded-lg transition-colors ${
                plan.popular
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-[#374151] text-white hover:bg-[#4B5563]'
              }`}
            >
              {plan.name === 'Enterprise' ? 'Contact Sales' : 'Upgrade Plan'}
            </button>
          </div>
        ))}
      </div>

      <div className="bg-[#1F2937] rounded-lg p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Billing History</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-400 border-b border-gray-700">
                <th className="pb-3">Date</th>
                <th className="pb-3">Description</th>
                <th className="pb-3">Amount</th>
                <th className="pb-3">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-gray-700">
                <td className="py-3">Mar 1, 2024</td>
                <td>Professional Plan - Monthly</td>
                <td>$99.00</td>
                <td className="text-green-400">Paid</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-3">Feb 1, 2024</td>
                <td>Professional Plan - Monthly</td>
                <td>$99.00</td>
                <td className="text-green-400">Paid</td>
              </tr>
              <tr>
                <td className="py-3">Jan 1, 2024</td>
                <td>Professional Plan - Monthly</td>
                <td>$99.00</td>
                <td className="text-green-400">Paid</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Subscription