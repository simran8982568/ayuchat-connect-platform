
import React, { useState } from 'react';
import { Plus, Search, Filter, CheckCircle, Clock, XCircle, Edit } from 'lucide-react';
import { Button } from '@/components/shared/ui/button';
import { Input } from '@/components/shared/ui/input';
import { Card } from '@/components/shared/ui/card';

const Templates = () => {
  const [templates, setTemplates] = useState([
    {
      id: 1,
      name: 'Order Confirmation',
      category: 'Utility',
      status: 'Approved',
      language: 'English',
      created: '2024-01-15',
      usage: 1234
    },
    {
      id: 2,
      name: 'Welcome Message',
      category: 'Marketing',
      status: 'Pending',
      language: 'English',
      created: '2024-01-14',
      usage: 856
    },
    {
      id: 3,
      name: 'OTP Verification',
      category: 'Authentication',
      status: 'Approved',
      language: 'English',
      created: '2024-01-13',
      usage: 2341
    },
    {
      id: 4,
      name: 'Holiday Offer',
      category: 'Marketing',
      status: 'Rejected',
      language: 'English',
      created: '2024-01-12',
      usage: 0
    }
  ]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Approved':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'Pending':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'Rejected':
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Message Templates</h1>
          <p className="text-gray-600 mt-1">Create and manage WhatsApp message templates</p>
        </div>
        <Button className="ayuchat-button">
          <Plus className="w-4 h-4 mr-2" />
          New Template
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">12</p>
            <p className="text-sm text-gray-600">Total Templates</p>
          </div>
        </Card>
        <Card className="p-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">8</p>
            <p className="text-sm text-gray-600">Approved</p>
          </div>
        </Card>
        <Card className="p-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-yellow-600">3</p>
            <p className="text-sm text-gray-600">Pending</p>
          </div>
        </Card>
        <Card className="p-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-red-600">1</p>
            <p className="text-sm text-gray-600">Rejected</p>
          </div>
        </Card>
      </div>

      {/* Filters */}
      <Card className="p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search templates..."
                className="pl-10"
              />
            </div>
          </div>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
      </Card>

      {/* Templates List */}
      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-900">Template Name</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Category</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Language</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Usage</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Created</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {templates.map((template) => (
                <tr key={template.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div className="font-medium text-gray-900">{template.name}</div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      {template.category}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(template.status)}
                      <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(template.status)}`}>
                        {template.status}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-600">{template.language}</td>
                  <td className="py-4 px-4 text-gray-600">{template.usage.toLocaleString()}</td>
                  <td className="py-4 px-4 text-gray-600">{template.created}</td>
                  <td className="py-4 px-4">
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Template Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Utility Templates</h3>
          <p className="text-gray-600 text-sm mb-4">
            Order confirmations, shipping updates, appointment reminders
          </p>
          <Button variant="outline" className="w-full">Create Utility Template</Button>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Marketing Templates</h3>
          <p className="text-gray-600 text-sm mb-4">
            Promotions, announcements, product launches
          </p>
          <Button variant="outline" className="w-full">Create Marketing Template</Button>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Authentication Templates</h3>
          <p className="text-gray-600 text-sm mb-4">
            OTP verification, login alerts, security notifications
          </p>
          <Button variant="outline" className="w-full">Create Auth Template</Button>
        </Card>
      </div>
    </div>
  );
};

export default Templates;
