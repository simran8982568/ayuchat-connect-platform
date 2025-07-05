
import React, { useState } from 'react';
import { Plus, Settings, CheckCircle, XCircle, ExternalLink, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Integration = () => {
  const [integrations, setIntegrations] = useState([
    {
      id: 1,
      name: 'Shopify',
      description: 'Sync orders and customer data from your Shopify store',
      status: 'Connected',
      category: 'E-commerce',
      icon: '🛒',
      features: ['Order notifications', 'Customer sync', 'Abandoned cart recovery']
    },
    {
      id: 2,
      name: 'Google Sheets',
      description: 'Export contacts and analytics to Google Sheets',
      status: 'Connected',
      category: 'Productivity',
      icon: '📊',
      features: ['Contact export', 'Analytics export', 'Real-time sync']
    },
    {
      id: 3,
      name: 'Zapier',
      description: 'Connect with 5000+ apps through Zapier automation',
      status: 'Available',
      category: 'Automation',
      icon: '⚡',
      features: ['Workflow automation', 'Trigger actions', 'Multi-app connections']
    },
    {
      id: 4,
      name: 'Calendly',
      description: 'Send appointment reminders and confirmations',
      status: 'Available',
      category: 'Scheduling',
      icon: '📅',
      features: ['Appointment reminders', 'Booking confirmations', 'Rescheduling alerts']
    }
  ]);

  const [webhooks, setWebhooks] = useState([
    {
      id: 1,
      name: 'Message Received',
      url: 'https://api.yoursite.com/webhook/message',
      status: 'Active',
      events: ['message.received', 'message.read']
    },
    {
      id: 2,
      name: 'Campaign Status',
      url: 'https://api.yoursite.com/webhook/campaign',
      status: 'Active',
      events: ['campaign.sent', 'campaign.delivered']
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Connected':
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Available':
        return 'bg-blue-100 text-blue-800';
      case 'Error':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Connected':
      case 'Active':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'Error':
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Integrations</h1>
          <p className="text-gray-600 mt-1">Connect AyuChat with your favorite tools and services</p>
        </div>
        <Button className="ayuchat-button">
          <Plus className="w-4 h-4 mr-2" />
          Browse Integrations
        </Button>
      </div>

      {/* Integration Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">12</p>
            <p className="text-sm text-gray-600">Active Integrations</p>
          </div>
        </Card>
        <Card className="p-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-600">24</p>
            <p className="text-sm text-gray-600">Available Integrations</p>
          </div>
        </Card>
        <Card className="p-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">3</p>
            <p className="text-sm text-gray-600">Active Webhooks</p>
          </div>
        </Card>
        <Card className="p-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-600">1,234</p>
            <p className="text-sm text-gray-600">API Calls Today</p>
          </div>
        </Card>
      </div>

      {/* Connected Integrations */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Integrations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {integrations.map((integration) => (
            <div key={integration.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{integration.icon}</div>
                  <div>
                    <h4 className="font-medium text-gray-900">{integration.name}</h4>
                    <p className="text-sm text-gray-500">{integration.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {getStatusIcon(integration.status)}
                  <Badge className={getStatusColor(integration.status)}>
                    {integration.status}
                  </Badge>
                </div>
              </div>
              
              <div className="mb-4">
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                  {integration.category}
                </span>
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">Features:</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  {integration.features.map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="flex space-x-2">
                {integration.status === 'Connected' ? (
                  <>
                    <Button variant="outline" size="sm">
                      <Settings className="w-4 h-4 mr-1" />
                      Configure
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                      Disconnect
                    </Button>
                  </>
                ) : (
                  <Button size="sm" className="ayuchat-button">
                    Connect
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* API & Webhooks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* API Console */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">API Console</h3>
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-900">API Key</span>
                <Button variant="ghost" size="sm">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
              <code className="text-xs text-gray-600 break-all">ak_live_1234567890abcdef...</code>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">1,234</p>
                <p className="text-xs text-gray-500">Requests Today</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">99.8%</p>
                <p className="text-xs text-gray-500">Success Rate</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <ExternalLink className="w-4 h-4 mr-2" />
                API Documentation
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Settings className="w-4 h-4 mr-2" />
                Manage API Keys
              </Button>
            </div>
          </div>
        </Card>

        {/* Webhooks */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Webhooks</h3>
            <Button size="sm" className="ayuchat-button">
              <Plus className="w-4 h-4 mr-1" />
              New Webhook
            </Button>
          </div>
          
          <div className="space-y-4">
            {webhooks.map((webhook) => (
              <div key={webhook.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">{webhook.name}</span>
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(webhook.status)}
                    <Badge className={getStatusColor(webhook.status)}>
                      {webhook.status}
                    </Badge>
                  </div>
                </div>
                
                <p className="text-xs text-gray-500 mb-2 break-all">{webhook.url}</p>
                
                <div className="flex flex-wrap gap-1">
                  {webhook.events.map((event, index) => (
                    <span key={index} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      {event}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-2 mt-3">
                  <Button variant="ghost" size="sm">
                    <Settings className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-red-600">
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Popular Integrations */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Integrations</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'WordPress', icon: '🌐', category: 'CMS' },
            { name: 'HubSpot', icon: '🎯', category: 'CRM' },
            { name: 'Slack', icon: '💬', category: 'Communication' },
            { name: 'WooCommerce', icon: '🛍️', category: 'E-commerce' },
          ].map((item, index) => (
            <div key={index} className="text-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
              <div className="text-2xl mb-2">{item.icon}</div>
              <h4 className="font-medium text-gray-900 text-sm">{item.name}</h4>
              <p className="text-xs text-gray-500">{item.category}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Integration;
