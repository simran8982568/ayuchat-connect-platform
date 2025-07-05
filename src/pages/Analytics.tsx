
import React from 'react';
import { BarChart3, TrendingUp, Users, MessageSquare, Download, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const Analytics = () => {
  const messageData = [
    { name: 'Jan', sent: 4000, delivered: 3800, read: 2400 },
    { name: 'Feb', sent: 3000, delivered: 2800, read: 2210 },
    { name: 'Mar', sent: 2000, delivered: 1900, read: 1290 },
    { name: 'Apr', sent: 2780, delivered: 2600, read: 2000 },
    { name: 'May', sent: 1890, delivered: 1800, read: 1181 },
    { name: 'Jun', sent: 2390, delivered: 2200, read: 1500 },
  ];

  const campaignData = [
    { name: 'Holiday Sale', value: 35, color: '#0ea5e9' },
    { name: 'Product Launch', value: 25, color: '#8b5cf6' },
    { name: 'Customer Survey', value: 20, color: '#06b6d4' },
    { name: 'Welcome Series', value: 20, color: '#10b981' },
  ];

  const responseTimeData = [
    { time: '9 AM', avgTime: 2.3 },
    { time: '12 PM', avgTime: 1.8 },
    { time: '3 PM', avgTime: 3.2 },
    { time: '6 PM', avgTime: 2.1 },
    { time: '9 PM', avgTime: 4.5 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600 mt-1">Monitor your WhatsApp performance and engagement</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            Last 30 Days
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Messages</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">156,284</p>
              <div className="flex items-center mt-2">
                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-sm text-green-600">+12.5%</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-teal-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Delivery Rate</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">98.7%</p>
              <div className="flex items-center mt-2">
                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-sm text-green-600">+0.3%</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Read Rate</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">76.3%</p>
              <div className="flex items-center mt-2">
                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-sm text-green-600">+5.2%</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Response Rate</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">23.8%</p>
              <div className="flex items-center mt-2">
                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-sm text-green-600">+3.1%</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Message Volume Chart */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Message Volume</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={messageData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sent" fill="#0d9488" name="Sent" />
              <Bar dataKey="delivered" fill="#06b6d4" name="Delivered" />
              <Bar dataKey="read" fill="#8b5cf6" name="Read" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Campaign Performance */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Campaign Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={campaignData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {campaignData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Response Time Chart */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Average Response Time by Hour</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={responseTimeData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="avgTime" stroke="#0d9488" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* Performance Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Templates</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Order Confirmation</span>
              <span className="text-sm font-medium text-gray-900">94.2%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Welcome Message</span>
              <span className="text-sm font-medium text-gray-900">89.7%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Holiday Offer</span>
              <span className="text-sm font-medium text-gray-900">76.3%</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Peak Activity Hours</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">2 PM - 4 PM</span>
              <span className="text-sm font-medium text-gray-900">28%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">7 PM - 9 PM</span>
              <span className="text-sm font-medium text-gray-900">24%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">10 AM - 12 PM</span>
              <span className="text-sm font-medium text-gray-900">18%</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Message Types</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Text Messages</span>
              <span className="text-sm font-medium text-gray-900">67%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Media Messages</span>
              <span className="text-sm font-medium text-gray-900">23%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Interactive</span>
              <span className="text-sm font-medium text-gray-900">10%</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
