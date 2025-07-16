
import React from 'react';
import { MessageSquare, Send, Users, Plus } from 'lucide-react';
import { Button } from '@/components/shared/ui/button';

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
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, index) => (
          <Button
            key={index}
            variant="ghost"
            className="h-auto p-3 flex flex-col items-start space-y-2 hover:bg-gray-50 border border-gray-100 rounded-lg text-left"
          >
            <div className={`w-8 h-8 ${action.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
              <action.icon className="w-4 h-4 text-white" />
            </div>
            <div className="flex flex-col space-y-1 min-w-0 w-full">
              <p className="font-medium text-gray-900 text-sm truncate">{action.title}</p>
              <p className="text-xs text-gray-500 leading-tight">{action.description}</p>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};
