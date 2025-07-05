
import React from 'react';
import { MessageSquare, Send, User, Clock } from 'lucide-react';

export const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: 'message',
      title: 'New message from John Doe',
      time: '2 minutes ago',
      icon: MessageSquare,
      color: 'text-blue-500',
    },
    {
      id: 2,
      type: 'campaign',
      title: 'Campaign "Holiday Sale" sent to 1,250 contacts',
      time: '1 hour ago',
      icon: Send,
      color: 'text-green-500',
    },
    {
      id: 3,
      type: 'contact',
      title: 'New contact added: Sarah Wilson',
      time: '3 hours ago',
      icon: User,
      color: 'text-purple-500',
    },
    {
      id: 4,
      type: 'template',
      title: 'Template "Welcome Message" approved',
      time: '1 day ago',
      icon: Clock,
      color: 'text-orange-500',
    },
  ];

  return (
    <div className="ayuchat-card">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3">
            <div className={`w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center`}>
              <activity.icon className={`w-4 h-4 ${activity.color}`} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">{activity.title}</p>
              <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
