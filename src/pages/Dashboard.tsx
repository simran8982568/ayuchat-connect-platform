
import React from 'react';
import { StatsCard } from '@/components/pagewise/dashboard/StatsCard';
import { QuickActions } from '@/components/pagewise/dashboard/QuickActions';
import { RecentActivity } from '@/components/pagewise/dashboard/RecentActivity';
import { MessageSquare, Users, Send, BarChart3 } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="ayuchat-gradient rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome to AyuChat! 👋</h1>
        <p className="text-teal-100">
          Manage your WhatsApp Business communications, automate conversations, and grow your business.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Messages"
          value="12,584"
          change="+12% from last month"
          changeType="positive"
          icon={MessageSquare}
        />
        <StatsCard
          title="Active Contacts"
          value="3,247"
          change="+8% from last month"
          changeType="positive"
          icon={Users}
        />
        <StatsCard
          title="Campaigns Sent"
          value="156"
          change="+24% from last month"
          changeType="positive"
          icon={Send}
        />
        <StatsCard
          title="Response Rate"
          value="68.5%"
          change="+5.2% from last month"
          changeType="positive"
          icon={BarChart3}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="lg:col-span-1">
          <QuickActions />
        </div>

        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <RecentActivity />
        </div>
      </div>

      {/* Setup Guide */}
      <div className="ayuchat-card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Getting Started</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-sm text-gray-600">Connect your WhatsApp Business Account</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            </div>
            <span className="text-sm text-gray-600">Create your first message template</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            </div>
            <span className="text-sm text-gray-600">Import your contact list</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
