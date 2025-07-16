
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

      {/* Subscription Status */}
      <div className="ayuchat-card">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Subscription Status</h3>
        <p className="text-gray-600 text-sm mb-4">Your current plan and usage</p>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-900">Plan:</span>
            <span className="text-sm text-gray-600">Pro Plan</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-900">Messages Remaining:</span>
            <span className="text-sm text-gray-600">8,750</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-900">Plan expires on:</span>
            <span className="text-sm text-gray-600">March 15, 2024</span>
          </div>
          <div className="pt-2">
            <button className="ayuchat-button w-full text-sm">
              Upgrade Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
