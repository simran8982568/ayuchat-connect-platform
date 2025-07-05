
import React from 'react';
import { MessageSquare, Send, Users, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const QuickActions = () => {
  const actions = [
    {
      title: 'Send Broadcast',
      description: 'Send messages to multiple contacts',
      icon: Send,
      color: 'bg-blue-500',
    },
    {
      title: 'New Template',
      description: 'Create message template',
      icon: MessageSquare,
      color: 'bg-green-500',
    },
    {
      title: 'Add Contacts',
      description: 'Import or add new contacts',
      icon: Users,
      color: 'bg-purple-500',
    },
    {
      title: 'Build Chatbot',
      description: 'Create automated flows',
      icon: Plus,
      color: 'bg-orange-500',
    },
  ];

  return (
    <div className="ayuchat-card">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-4">
        {actions.map((action, index) => (
          <Button
            key={index}
            variant="ghost"
            className="h-auto p-4 flex flex-col items-start space-y-2 hover:bg-gray-50 border border-gray-100 rounded-lg"
          >
            <div className={`w-8 h-8 ${action.color} rounded-lg flex items-center justify-center`}>
              <action.icon className="w-4 h-4 text-white" />
            </div>
            <div className="text-left">
              <p className="font-medium text-gray-900">{action.title}</p>
              <p className="text-sm text-gray-500">{action.description}</p>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};
