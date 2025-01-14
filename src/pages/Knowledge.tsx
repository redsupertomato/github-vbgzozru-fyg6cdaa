import React, { useState } from 'react'
import { Search, Book, Phone, Users, MessageSquare, Briefcase, ChevronRight, Star } from 'lucide-react'

interface Article {
  id: string
  title: string
  category: string
  description: string
  author: string
  date: string
  readTime: string
  rating: number
}

const categories = [
  { name: 'Getting Started', icon: Book, count: 12 },
  { name: 'Call Scripts', icon: Phone, count: 8 },
  { name: 'Customer Service', icon: Users, count: 15 },
  { name: 'Sales Techniques', icon: Briefcase, count: 10 },
  { name: 'Communication', icon: MessageSquare, count: 9 },
]

const mockArticles: Article[] = [
  {
    id: '1',
    title: 'Best Practices for Customer Engagement',
    category: 'Customer Service',
    description: 'Learn the essential techniques for engaging customers effectively and building lasting relationships.',
    author: 'Sarah Johnson',
    date: '2024-03-14',
    readTime: '5 min',
    rating: 4.8
  },
  {
    id: '2',
    title: 'Handling Difficult Customer Conversations',
    category: 'Communication',
    description: 'A comprehensive guide to managing challenging customer interactions professionally.',
    author: 'Michael Chen',
    date: '2024-03-13',
    readTime: '8 min',
    rating: 4.9
  },
  {
    id: '3',
    title: 'Sales Conversion Techniques',
    category: 'Sales Techniques',
    description: 'Proven strategies to improve your sales conversion rates and close more deals.',
    author: 'Emma Wilson',
    date: '2024-03-12',
    readTime: '6 min',
    rating: 4.7
  }
]

const Knowledge = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredArticles = mockArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = !selectedCategory || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-white">Knowledge Base</h1>
        <div className="relative w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full pl-10 pr-4 py-2 bg-[#1F2937] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-white mb-4">Categories</h2>
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name === selectedCategory ? null : category.name)}
                className={`w-full flex items-center justify-between p-4 rounded-lg transition-colors ${
                  category.name === selectedCategory
                    ? 'bg-blue-600 text-white'
                    : 'bg-[#1F2937] text-gray-300 hover:bg-[#374151]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon size={20} />
                  <span>{category.name}</span>
                </div>
                <span className="text-sm bg-[#374151] px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </button>
            )
          })}
        </div>

        <div className="lg:col-span-3 space-y-6">
          {filteredArticles.map((article) => (
            <div key={article.id} className="bg-[#1F2937] rounded-lg p-6 hover:bg-[#374151] transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-sm text-blue-400">{article.category}</span>
                  <h3 className="text-xl font-semibold text-white mt-1">{article.title}</h3>
                </div>
                <button className="p-2 hover:bg-[#4B5563] rounded-lg transition-colors">
                  <ChevronRight className="text-gray-400" size={20} />
                </button>
              </div>
              <p className="text-gray-400 mb-4">{article.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-400">
                <div className="flex items-center gap-4">
                  <span>By {article.author}</span>
                  <span>•</span>
                  <span>{new Date(article.date).toLocaleDateString()}</span>
                  <span>•</span>
                  <span>{article.readTime} read</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="text-yellow-400 fill-yellow-400" size={16} />
                  <span>{article.rating.toFixed(1)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Knowledge