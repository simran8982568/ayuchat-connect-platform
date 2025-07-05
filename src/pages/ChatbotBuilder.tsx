
import React, { useState } from 'react';
import { Plus, Play, Save, Settings, Zap, MessageSquare, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const ChatbotBuilder = () => {
  const [flows, setFlows] = useState([
    { id: 1, name: 'Welcome Flow', status: 'active', triggers: 3, responses: 12 },
    { id: 2, name: 'Support Bot', status: 'draft', triggers: 2, responses: 8 },
    { id: 3, name: 'Order Tracking', status: 'active', triggers: 1, responses: 5 },
  ]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Chatbot Builder</h1>
          <p className="text-gray-600 mt-1">Create and manage automated conversation flows</p>
        </div>
        <Button className="ayuchat-button">
          <Plus className="w-4 h-4 mr-2" />
          New Flow
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Flows</p>
              <p className="text-2xl font-bold text-gray-900">6</p>
            </div>
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-green-600" />
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Triggers</p>
              <p className="text-2xl font-bold text-gray-900">24</p>
            </div>
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-blue-600" />
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Users Engaged</p>
              <p className="text-2xl font-bold text-gray-900">1,234</p>
            </div>
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-purple-600" />
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg. Response Time</p>
              <p className="text-2xl font-bold text-gray-900">2.3s</p>
            </div>
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-orange-600" />
            </div>
          </div>
        </Card>
      </div>

      {/* Flow Builder */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Flow List */}
        <div className="lg:col-span-2">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Flows</h3>
            <div className="space-y-4">
              {flows.map((flow) => (
                <div key={flow.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
                        <MessageSquare className="w-4 h-4 text-teal-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{flow.name}</h4>
                        <p className="text-sm text-gray-500">
                          {flow.triggers} triggers • {flow.responses} responses
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        flow.status === 'active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {flow.status}
                      </span>
                      <Button variant="ghost" size="sm">
                        <Play className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Settings className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Visual Flow Builder Preview */}
        <div className="lg:col-span-1">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Flow Builder</h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                  <span className="text-sm font-medium text-teal-700">Welcome Trigger</span>
                </div>
                <p className="text-xs text-teal-600">When user says "hello"</p>
              </div>
              
              <div className="flex justify-center">
                <div className="w-px h-8 bg-gray-300"></div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium text-blue-700">Send Message</span>
                </div>
                <p className="text-xs text-blue-600">"Hi! How can I help you today?"</p>
              </div>
              
              <div className="flex justify-center">
                <div className="w-px h-8 bg-gray-300"></div>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-sm font-medium text-purple-700">Quick Replies</span>
                </div>
                <p className="text-xs text-purple-600">Support • Sales • Other</p>
              </div>
            </div>
            
            <Button className="w-full mt-4 ayuchat-button">
              <Plus className="w-4 h-4 mr-2" />
              Add Block
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ChatbotBuilder;
