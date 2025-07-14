
import React, { useState } from 'react';
import { Plus, Play, Pause, BarChart3, Users, Send, Calendar } from 'lucide-react';
import { Button } from '@/components/shared/ui/button';
import { Card } from '@/components/shared/ui/card';
import { Badge } from '@/components/shared/ui/badge';

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      name: 'Holiday Sale 2024',
      template: 'Holiday Offer',
      status: 'Active',
      sent: 2450,
      delivered: 2398,
      read: 1876,
      clicked: 234,
      scheduled: '2024-01-15 10:00',
      audience: 2500
    },
    {
      id: 2,
      name: 'Product Launch',
      template: 'New Product',
      status: 'Scheduled',
      sent: 0,
      delivered: 0,
      read: 0,
      clicked: 0,
      scheduled: '2024-01-20 14:00',
      audience: 1200
    },
    {
      id: 3,
      name: 'Customer Survey',
      template: 'Feedback Request',
      status: 'Completed',
      sent: 1800,
      delivered: 1756,
      read: 1345,
      clicked: 678,
      scheduled: '2024-01-10 09:00',
      audience: 1800
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Scheduled':
        return 'bg-blue-100 text-blue-800';
      case 'Completed':
        return 'bg-gray-100 text-gray-800';
      case 'Paused':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Active':
        return <Play className="w-4 h-4" />;
      case 'Scheduled':
        return <Calendar className="w-4 h-4" />;
      case 'Completed':
        return <BarChart3 className="w-4 h-4" />;
      case 'Paused':
        return <Pause className="w-4 h-4" />;
      default:
        return <Send className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Campaigns</h1>
          <p className="text-gray-600 mt-1">Create and manage WhatsApp broadcast campaigns</p>
        </div>
        <Button className="ayuchat-button">
          <Plus className="w-4 h-4 mr-2" />
          New Campaign
        </Button>
      </div>

      {/* Campaign Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Campaigns</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">24</p>
              <p className="text-xs text-green-600 mt-1">+3 this month</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-lg flex items-center justify-center">
              <Send className="w-6 h-6 text-teal-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Messages Sent</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">156K</p>
              <p className="text-xs text-green-600 mt-1">+12% this month</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Delivery Rate</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">98.2%</p>
              <p className="text-xs text-green-600 mt-1">+0.5% this month</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg. CTR</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">12.4%</p>
              <p className="text-xs text-green-600 mt-1">+2.1% this month</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </Card>
      </div>

      {/* Campaign List */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Recent Campaigns</h3>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">All</Button>
            <Button variant="outline" size="sm">Active</Button>
            <Button variant="outline" size="sm">Scheduled</Button>
            <Button variant="outline" size="sm">Completed</Button>
          </div>
        </div>

        <div className="space-y-4">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(campaign.status)}
                    <h4 className="text-lg font-medium text-gray-900">{campaign.name}</h4>
                  </div>
                  <Badge className={getStatusColor(campaign.status)}>
                    {campaign.status}
                  </Badge>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <BarChart3 className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Play className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Template</p>
                  <p className="font-medium text-gray-900">{campaign.template}</p>
                </div>
                <div>
                  <p className="text-gray-500">Audience</p>
                  <p className="font-medium text-gray-900">{campaign.audience.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-gray-500">Sent</p>
                  <p className="font-medium text-gray-900">{campaign.sent.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-gray-500">Delivered</p>
                  <p className="font-medium text-gray-900">{campaign.delivered.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-gray-500">Read</p>
                  <p className="font-medium text-gray-900">{campaign.read.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-gray-500">Clicked</p>
                  <p className="font-medium text-gray-900">{campaign.clicked.toLocaleString()}</p>
                </div>
              </div>

              {campaign.status !== 'Completed' && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500">
                    Scheduled: {campaign.scheduled}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 text-center">
          <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Send className="w-6 h-6 text-teal-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Broadcast Campaign</h3>
          <p className="text-gray-600 text-sm mb-4">Send messages to multiple contacts at once</p>
          <Button className="ayuchat-button w-full">Create Broadcast</Button>
        </Card>

        <Card className="p-6 text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Scheduled Campaign</h3>
          <p className="text-gray-600 text-sm mb-4">Schedule messages for future delivery</p>
          <Button variant="outline" className="w-full">Schedule Campaign</Button>
        </Card>

        <Card className="p-6 text-center">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <BarChart3 className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">A/B Test Campaign</h3>
          <p className="text-gray-600 text-sm mb-4">Test different messages to optimize performance</p>
          <Button variant="outline" className="w-full">Create A/B Test</Button>
        </Card>
      </div>
    </div>
  );
};

export default Campaigns;
