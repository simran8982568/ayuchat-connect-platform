
import React from 'react';
import { Search, Filter, MoreVertical, Phone, Video } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Inbox = () => {
  const conversations = [
    {
      id: 1,
      name: 'John Doe',
      lastMessage: 'Thanks for the quick response!',
      time: '2 min ago',
      unread: 2,
      status: 'online',
      avatar: 'JD'
    },
    {
      id: 2,
      name: 'Sarah Wilson',
      lastMessage: 'Can you send me the product catalog?',
      time: '1 hour ago',
      unread: 0,
      status: 'offline',
      avatar: 'SW'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      lastMessage: 'I\'d like to place an order',
      time: '3 hours ago',
      unread: 1,
      status: 'online',
      avatar: 'MJ'
    }
  ];

  return (
    <div className="h-[calc(100vh-8rem)] flex bg-white rounded-xl border border-gray-200 overflow-hidden">
      {/* Conversations List */}
      <div className="w-1/3 border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Conversations</h2>
            <Button variant="ghost" size="sm">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search conversations..."
              className="pl-10 bg-gray-50 border-0"
            />
          </div>
        </div>

        {/* Conversation List */}
        <div className="flex-1 overflow-y-auto">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white font-medium">
                    {conversation.avatar}
                  </div>
                  {conversation.status === 'online' && (
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {conversation.name}
                    </p>
                    <p className="text-xs text-gray-500">{conversation.time}</p>
                  </div>
                  <p className="text-sm text-gray-500 truncate mt-1">
                    {conversation.lastMessage}
                  </p>
                </div>
                {conversation.unread > 0 && (
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-xs text-white font-medium">
                      {conversation.unread}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-200 bg-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white font-medium">
                JD
              </div>
              <div>
                <h3 className="font-medium text-gray-900">John Doe</h3>
                <p className="text-sm text-gray-500">Online • Last seen 2 min ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Phone className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Video className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 bg-gray-50 overflow-y-auto">
          <div className="space-y-4">
            {/* Incoming message */}
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center text-white text-sm">
                JD
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm max-w-xs">
                <p className="text-sm text-gray-900">Hi! I'm interested in your product catalog. Can you share it with me?</p>
                <p className="text-xs text-gray-500 mt-1">10:30 AM</p>
              </div>
            </div>

            {/* Outgoing message */}
            <div className="flex items-start space-x-2 flex-row-reverse">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-sm">
                You
              </div>
              <div className="bg-teal-600 text-white rounded-lg p-3 shadow-sm max-w-xs">
                <p className="text-sm">Sure! I'll send you our latest catalog right away. It includes all our new products for this season.</p>
                <p className="text-xs text-teal-100 mt-1">10:32 AM</p>
              </div>
            </div>

            {/* Incoming message */}
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center text-white text-sm">
                JD
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm max-w-xs">
                <p className="text-sm text-gray-900">Thanks for the quick response!</p>
                <p className="text-xs text-gray-500 mt-1">10:35 AM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="p-4 bg-white border-t border-gray-200">
          <div className="flex items-center space-x-2">
            <Input
              type="text"
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button className="ayuchat-button">
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
