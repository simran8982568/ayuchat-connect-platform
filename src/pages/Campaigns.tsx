import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/shared/ui/card';
import { Button } from '@/components/shared/ui/button';
import { Badge } from '@/components/shared/ui/badge';
import { Input } from '@/components/shared/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/shared/ui/select';
import { Plus, Send, Calendar, Users, BarChart3, Play, Pause, Edit, Trash2, Clock, CheckCircle, XCircle, Filter } from 'lucide-react';

const Campaigns = () => {
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const [campaigns] = useState([
    {
      id: 1,
      name: 'Welcome Series',
      template: 'welcome_template_01',
      status: 'active',
      type: 'promotional',
      scheduled: '2024-01-15 09:00',
      recipients: 1250,
      sent: 1200,
      delivered: 1180,
      read: 890,
      clicked: 234,
      created_at: '2024-01-14',
      delivery_rate: 98.3,
      open_rate: 75.4,
      click_rate: 26.3
    },
    {
      id: 2,
      name: 'Product Launch Campaign',
      template: 'product_announcement_v2',
      status: 'completed',
      type: 'promotional',
      scheduled: '2024-01-10 14:00',
      recipients: 5600,
      sent: 5580,
      delivered: 5520,
      read: 4200,
      clicked: 1680,
      created_at: '2024-01-09',
      delivery_rate: 98.9,
      open_rate: 76.1,
      click_rate: 40.0
    },
    {
      id: 3,
      name: 'Cart Abandonment Reminder',
      template: 'cart_reminder_template',
      status: 'scheduled',
      type: 'transactional',
      scheduled: '2024-01-20 16:00',
      recipients: 890,
      sent: 0,
      delivered: 0,
      read: 0,
      clicked: 0,
      created_at: '2024-01-18',
      delivery_rate: 0,
      open_rate: 0,
      click_rate: 0
    },
    {
      id: 4,
      name: 'Flash Sale Alert',
      template: 'flash_sale_template',
      status: 'draft',
      type: 'promotional',
      scheduled: null,
      recipients: 3200,
      sent: 0,
      delivered: 0,
      read: 0,
      clicked: 0,
      created_at: '2024-01-19',
      delivery_rate: 0,
      open_rate: 0,
      click_rate: 0
    }
  ]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800"><Play className="w-3 h-3 mr-1" />Active</Badge>;
      case 'completed':
        return <Badge className="bg-blue-100 text-blue-800"><CheckCircle className="w-3 h-3 mr-1" />Completed</Badge>;
      case 'scheduled':
        return <Badge className="bg-yellow-100 text-yellow-800"><Clock className="w-3 h-3 mr-1" />Scheduled</Badge>;
      case 'draft':
        return <Badge variant="secondary"><Edit className="w-3 h-3 mr-1" />Draft</Badge>;
      case 'paused':
        return <Badge className="bg-orange-100 text-orange-800"><Pause className="w-3 h-3 mr-1" />Paused</Badge>;
      case 'failed':
        return <Badge variant="destructive"><XCircle className="w-3 h-3 mr-1" />Failed</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesStatus = selectedStatus === 'all' || campaign.status === selectedStatus;
    const matchesSearch = campaign.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         campaign.template.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">WhatsApp Campaigns</h1>
          <p className="text-gray-600 mt-1">Create, schedule, and track your WhatsApp marketing campaigns</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <BarChart3 className="w-4 h-4 mr-2" />
            Campaign Analytics
          </Button>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="w-4 h-4 mr-2" />
            Create Campaign
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Campaigns</p>
                <p className="text-2xl font-bold text-gray-900">{campaigns.length}</p>
                <p className="text-xs text-green-600 mt-1">+3 this month</p>
              </div>
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Send className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Messages Sent</p>
                <p className="text-2xl font-bold text-gray-900">
                  {campaigns.reduce((sum, c) => sum + c.sent, 0).toLocaleString()}
                </p>
                <p className="text-xs text-green-600 mt-1">98.7% delivery rate</p>
              </div>
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Reads</p>
                <p className="text-2xl font-bold text-gray-900">
                  {campaigns.reduce((sum, c) => sum + c.read, 0).toLocaleString()}
                </p>
                <p className="text-xs text-green-600 mt-1">76.2% open rate</p>
              </div>
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Clicks</p>
                <p className="text-2xl font-bold text-gray-900">
                  {campaigns.reduce((sum, c) => sum + c.clicked, 0).toLocaleString()}
                </p>
                <p className="text-xs text-green-600 mt-1">28.7% click rate</p>
              </div>
              <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Calendar className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex items-center space-x-4">
        <div className="flex-1 max-w-md">
          <Input
            placeholder="Search campaigns..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
        <Select value={selectedStatus} onValueChange={setSelectedStatus}>
          <SelectTrigger className="w-40">
            <Filter className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="scheduled">Scheduled</SelectItem>
            <SelectItem value="draft">Draft</SelectItem>
            <SelectItem value="paused">Paused</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Campaigns List */}
      <Card>
        <CardHeader>
          <CardTitle>Your Campaigns</CardTitle>
          <CardDescription>Manage and track your WhatsApp marketing campaigns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredCampaigns.map((campaign) => (
              <Card key={campaign.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{campaign.name}</h3>
                        {getStatusBadge(campaign.status)}
                        <Badge variant="outline" className="text-xs">
                          {campaign.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Template: {campaign.template}</p>
                      {campaign.scheduled && (
                        <p className="text-sm text-gray-500 mb-4">
                          <Calendar className="w-4 h-4 inline mr-1" />
                          Scheduled: {campaign.scheduled}
                        </p>
                      )}
                      
                      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Recipients</p>
                          <p className="font-medium text-gray-900">{campaign.recipients.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Sent</p>
                          <p className="font-medium text-gray-900">{campaign.sent.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Delivered</p>
                          <p className="font-medium text-gray-900">{campaign.delivered.toLocaleString()}</p>
                          {campaign.delivery_rate > 0 && (
                            <p className="text-xs text-gray-500">{campaign.delivery_rate}%</p>
                          )}
                        </div>
                        <div>
                          <p className="text-gray-600">Read</p>
                          <p className="font-medium text-gray-900">{campaign.read.toLocaleString()}</p>
                          {campaign.open_rate > 0 && (
                            <p className="text-xs text-gray-500">{campaign.open_rate}%</p>
                          )}
                        </div>
                        <div>
                          <p className="text-gray-600">Clicked</p>
                          <p className="font-medium text-gray-900">{campaign.clicked.toLocaleString()}</p>
                          {campaign.click_rate > 0 && (
                            <p className="text-xs text-gray-500">{campaign.click_rate}%</p>
                          )}
                        </div>
                        <div>
                          <p className="text-gray-600">Created</p>
                          <p className="font-medium text-gray-900">{campaign.created_at}</p>
                        </div>
                      </div>

                      {/* Performance Indicators */}
                      {campaign.sent > 0 && (
                        <div className="mt-4 grid grid-cols-3 gap-4">
                          <div className="text-center p-3 bg-blue-50 rounded-lg">
                            <p className="text-xs text-gray-600">Delivery Rate</p>
                            <p className="font-semibold text-blue-600">{campaign.delivery_rate}%</p>
                          </div>
                          <div className="text-center p-3 bg-green-50 rounded-lg">
                            <p className="text-xs text-gray-600">Open Rate</p>
                            <p className="font-semibold text-green-600">{campaign.open_rate}%</p>
                          </div>
                          <div className="text-center p-3 bg-purple-50 rounded-lg">
                            <p className="text-xs text-gray-600">Click Rate</p>
                            <p className="font-semibold text-purple-600">{campaign.click_rate}%</p>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center space-x-2 ml-4">
                      {campaign.status === 'scheduled' && (
                        <Button variant="outline" size="sm" className="text-green-600">
                          <Play className="w-4 h-4 mr-1" />
                          Start Now
                        </Button>
                      )}
                      {campaign.status === 'active' && (
                        <Button variant="outline" size="sm" className="text-orange-600">
                          <Pause className="w-4 h-4 mr-1" />
                          Pause
                        </Button>
                      )}
                      <Button variant="ghost" size="sm">
                        <BarChart3 className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Campaign Builder Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Send className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Broadcast Campaign</h3>
            <p className="text-gray-600 text-sm mb-4">Send promotional messages to segmented audience</p>
            <Button className="w-full">Create Broadcast</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Scheduled Campaign</h3>
            <p className="text-gray-600 text-sm mb-4">Schedule messages for optimal delivery times</p>
            <Button variant="outline" className="w-full">Schedule Campaign</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">A/B Test Campaign</h3>
            <p className="text-gray-600 text-sm mb-4">Test different message variants for better performance</p>
            <Button variant="outline" className="w-full">Create A/B Test</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Campaigns;