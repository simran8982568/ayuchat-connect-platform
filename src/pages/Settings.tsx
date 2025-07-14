
import React, { useState } from 'react';
import { Save, User, Bell, Shield, CreditCard, Phone, Globe, Key } from 'lucide-react';
import { Button } from '@/components/shared/ui/button';
import { Input } from '@/components/shared/ui/input';
import { Card } from '@/components/shared/ui/card';
import { Switch } from '@/components/shared/ui/switch';
import { Badge } from '@/components/shared/ui/badge';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'whatsapp', name: 'WhatsApp', icon: Phone },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'billing', name: 'Billing', icon: CreditCard },
    { id: 'api', name: 'API', icon: Key },
  ];

  const TabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Profile Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <Input defaultValue="Admin User" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input defaultValue="admin@ayuchat.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <Input defaultValue="AyuChat Inc." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <Input defaultValue="+1 (555) 123-4567" />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Preferences</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Language</p>
                    <p className="text-sm text-gray-500">Choose your preferred language</p>
                  </div>
                  <select className="border border-gray-300 rounded-md px-3 py-2">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Timezone</p>
                    <p className="text-sm text-gray-500">Set your local timezone</p>
                  </div>
                  <select className="border border-gray-300 rounded-md px-3 py-2">
                    <option>UTC-8 (Pacific)</option>
                    <option>UTC-5 (Eastern)</option>
                    <option>UTC+0 (GMT)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        );

      case 'whatsapp':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">WhatsApp Business Account</h3>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-medium text-green-800">Connected</span>
                </div>
                <p className="text-sm text-green-700">Your WhatsApp Business Account is connected and verified</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
                  <Input defaultValue="AyuChat Support" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <div className="flex items-center space-x-2">
                    <Input defaultValue="+1 (555) 987-6543" />
                    <Badge className="bg-green-100 text-green-800">Verified</Badge>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business Category</label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                    <option>Software/Technology</option>
                    <option>E-commerce</option>
                    <option>Customer Service</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Display Name</label>
                  <Input defaultValue="AyuChat" />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Business Profile</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">About</label>
                  <textarea 
                    className="w-full border border-gray-300 rounded-md px-3 py-2" 
                    rows={3}
                    defaultValue="WhatsApp API solution for businesses. Get help with your orders and support."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                  <Input defaultValue="https://ayuchat.com" />
                </div>
              </div>
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Email Notifications</h3>
              <div className="space-y-4">
                {[
                  { name: 'New Messages', desc: 'Get notified when you receive new messages' },
                  { name: 'Campaign Updates', desc: 'Notifications about campaign status and performance' },
                  { name: 'System Updates', desc: 'Important updates about AyuChat platform' },
                  { name: 'Security Alerts', desc: 'Login attempts and security-related notifications' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Push Notifications</h3>
              <div className="space-y-4">
                {[
                  { name: 'Browser Notifications', desc: 'Show notifications in your browser' },
                  { name: 'Sound Alerts', desc: 'Play sound for new messages' },
                  { name: 'Desktop Notifications', desc: 'Show desktop notifications' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                    <Switch defaultChecked={index < 2} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Password</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                  <Input type="password" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                  <Input type="password" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                  <Input type="password" />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Two-Factor Authentication</h3>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                <p className="text-sm text-yellow-800">Two-factor authentication is not enabled. Enable it for better security.</p>
              </div>
              <Button className="ayuchat-button">Enable 2FA</Button>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Active Sessions</h3>
              <div className="space-y-3">
                {[
                  { device: 'Chrome on MacOS', location: 'San Francisco, CA', current: true },
                  { device: 'Safari on iPhone', location: 'San Francisco, CA', current: false },
                ].map((session, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{session.device}</p>
                      <p className="text-sm text-gray-500">{session.location}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {session.current && <Badge className="bg-green-100 text-green-800">Current</Badge>}
                      {!session.current && <Button variant="ghost" size="sm" className="text-red-600">Revoke</Button>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'billing':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Current Plan</h3>
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Free Plan</h4>
                    <p className="text-gray-500">1,000 messages per month</p>
                  </div>
                  <Button className="ayuchat-button">Upgrade Plan</Button>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">250</p>
                    <p className="text-sm text-gray-500">Messages Used</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">750</p>
                    <p className="text-sm text-gray-500">Messages Remaining</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">12</p>
                    <p className="text-sm text-gray-500">Days Left</p>
                  </div>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-teal-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Method</h3>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="text-gray-500">No payment method on file</p>
                <Button variant="outline" className="mt-2">Add Payment Method</Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Billing History</h3>
              <div className="text-center py-8">
                <p className="text-gray-500">No billing history available</p>
              </div>
            </div>
          </div>
        );

      case 'api':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">API Keys</h3>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">Production Key</span>
                    <Badge className="bg-green-100 text-green-800">Active</Badge>
                  </div>
                  <code className="text-sm text-gray-600 break-all">ak_live_1234567890abcdef...</code>
                  <div className="flex space-x-2 mt-2">
                    <Button variant="ghost" size="sm">Copy</Button>
                    <Button variant="ghost" size="sm" className="text-red-600">Revoke</Button>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">Test Key</span>
                    <Badge className="bg-blue-100 text-blue-800">Test</Badge>
                  </div>
                  <code className="text-sm text-gray-600 break-all">ak_test_abcdef1234567890...</code>
                  <div className="flex space-x-2 mt-2">
                    <Button variant="ghost" size="sm">Copy</Button>
                    <Button variant="ghost" size="sm" className="text-red-600">Revoke</Button>
                  </div>
                </div>
              </div>
              
              <Button className="ayuchat-button">
                <Key className="w-4 h-4 mr-2" />
                Generate New Key
              </Button>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">API Usage</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-gray-900">1,234</p>
                  <p className="text-sm text-gray-500">Requests Today</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-gray-900">45,678</p>
                  <p className="text-sm text-gray-500">Requests This Month</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Rate Limits</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Requests per minute</span>
                  <span className="font-medium text-gray-900">100</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Requests per hour</span>
                  <span className="font-medium text-gray-900">5,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Requests per day</span>
                  <span className="font-medium text-gray-900">100,000</span>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-1">Manage your account settings and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-3">
          <Card className="p-4">
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 text-left rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? 'bg-teal-50 text-teal-700 border-r-2 border-teal-500'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span className="font-medium">{tab.name}</span>
                </button>
              ))}
            </nav>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-9">
          <Card className="p-6">
            <TabContent />
            
            <div className="flex justify-end mt-6 pt-6 border-t border-gray-200">
              <Button className="ayuchat-button">
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;
