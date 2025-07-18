import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/shared/ui/card';
import { Button } from '@/components/shared/ui/button';
import { Badge } from '@/components/shared/ui/badge';
import { Input } from '@/components/shared/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/shared/ui/dialog';
import { Plus, Phone, Settings, CheckCircle, AlertCircle, Search, Eye } from 'lucide-react';

const PhoneNumbers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showConfigModal, setShowConfigModal] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [phoneNumbers] = useState([
    {
      id: 1,
      number: '+1 (555) 123-4567',
      display_name: 'AyuChat Support',
      country: 'United States',
      status: 'verified',
      quality_rating: 'green',
      messaging_limit: '1000',
      messages_sent_24h: 245,
      webhook_url: 'https://api.ayuchat.com/webhook/whatsapp',
      created_at: '2024-01-15'
    },
    {
      id: 2,
      number: '+44 20 7946 0958',
      display_name: 'AyuChat UK',
      country: 'United Kingdom',
      status: 'verified',
      quality_rating: 'green',
      messaging_limit: '1000',
      messages_sent_24h: 156,
      webhook_url: 'https://api.ayuchat.com/webhook/whatsapp-uk',
      created_at: '2024-01-20'
    },
    {
      id: 3,
      number: '+91 98765 43210',
      display_name: 'AyuChat India',
      country: 'India',
      status: 'pending',
      quality_rating: 'unknown',
      messaging_limit: '250',
      messages_sent_24h: 0,
      webhook_url: 'https://api.ayuchat.com/webhook/whatsapp-in',
      created_at: '2024-01-25'
    }
  ]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'verified':
        return <Badge className="bg-green-100 text-green-800">Verified</Badge>;
      case 'pending':
        return <Badge variant="secondary">Pending Verification</Badge>;
      case 'rejected':
        return <Badge variant="destructive">Rejected</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getQualityIcon = (rating: string) => {
    switch (rating) {
      case 'green':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'yellow':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case 'red':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      default:
        return <AlertCircle className="w-5 h-5 text-gray-400" />;
    }
  };

  const filteredNumbers = phoneNumbers.filter(number =>
    number.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
    number.display_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    number.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Phone Numbers</h1>
          <p className="text-gray-600 mt-1">Manage your WhatsApp Business phone numbers</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90" onClick={() => setShowAddModal(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add Phone Number
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Numbers</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
              </div>
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Verified Numbers</p>
                <p className="text-2xl font-bold text-gray-900">2</p>
              </div>
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Messages Today</p>
                <p className="text-2xl font-bold text-gray-900">401</p>
              </div>
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Phone className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Limit</p>
                <p className="text-2xl font-bold text-gray-900">2,250</p>
              </div>
              <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Settings className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search phone numbers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Phone Numbers List */}
      <Card>
        <CardHeader>
          <CardTitle>Your Phone Numbers</CardTitle>
          <CardDescription>WhatsApp Business API phone numbers and their configuration</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {filteredNumbers.map((phoneNumber) => (
              <div key={phoneNumber.id} className="border rounded-lg p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{phoneNumber.display_name}</h3>
                      {getStatusBadge(phoneNumber.status)}
                      {getQualityIcon(phoneNumber.quality_rating)}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Phone Number</p>
                        <p className="font-medium text-gray-900">{phoneNumber.number}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Country</p>
                        <p className="font-medium text-gray-900">{phoneNumber.country}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Daily Limit</p>
                        <p className="font-medium text-gray-900">{phoneNumber.messaging_limit} messages</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Sent Today</p>
                        <p className="font-medium text-gray-900">{phoneNumber.messages_sent_24h} messages</p>
                      </div>
                      <div className="md:col-span-2">
                        <p className="text-gray-600">Webhook URL</p>
                        <p className="font-medium text-gray-900 break-all">{phoneNumber.webhook_url}</p>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center space-x-2">
                      <div className="h-2 bg-gray-200 rounded-full flex-1">
                        <div 
                          className="h-2 bg-primary rounded-full" 
                          style={{ width: `${(phoneNumber.messages_sent_24h / parseInt(phoneNumber.messaging_limit)) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-600">
                        {Math.round((phoneNumber.messages_sent_24h / parseInt(phoneNumber.messaging_limit)) * 100)}% used
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 ml-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => {
                        setSelectedNumber(phoneNumber);
                        setShowConfigModal(true);
                      }}
                    >
                      <Settings className="w-4 h-4 mr-2" />
                      Configure
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => {
                        setSelectedNumber(phoneNumber);
                        setShowDetailsModal(true);
                      }}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Setup Guide */}
      <Card>
        <CardHeader>
          <CardTitle>Setup Guide</CardTitle>
          <CardDescription>Steps to configure your WhatsApp Business phone number</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Prerequisites</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                  <span>Facebook Business Manager account</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                  <span>WhatsApp Business API access</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                  <span>Valid phone number for verification</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                  <span>Business verification documents</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Configuration Steps</h4>
              <ol className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="flex-shrink-0 w-5 h-5 bg-primary text-white rounded-full text-xs flex items-center justify-center">1</span>
                  <span>Add phone number to WhatsApp Business API</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="flex-shrink-0 w-5 h-5 bg-primary text-white rounded-full text-xs flex items-center justify-center">2</span>
                  <span>Verify phone number with SMS/Voice call</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="flex-shrink-0 w-5 h-5 bg-primary text-white rounded-full text-xs flex items-center justify-center">3</span>
                  <span>Configure webhook URL for message reception</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="flex-shrink-0 w-5 h-5 bg-primary text-white rounded-full text-xs flex items-center justify-center">4</span>
                  <span>Test message sending and receiving</span>
                </li>
              </ol>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Add Phone Number Modal */}
      <Dialog open={showAddModal} onOpenChange={setShowAddModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Phone Number</DialogTitle>
            <DialogDescription>
              Add a new WhatsApp Business phone number to your account
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Phone Number</label>
              <Input placeholder="+1 (555) 123-4567" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Display Name</label>
              <Input placeholder="Business Name" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Country</label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                <option>United States</option>
                <option>United Kingdom</option>
                <option>India</option>
                <option>Canada</option>
              </select>
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setShowAddModal(false)}>Cancel</Button>
              <Button onClick={() => setShowAddModal(false)}>Add Number</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* View Details Modal */}
      <Dialog open={showDetailsModal} onOpenChange={setShowDetailsModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Phone Number Details</DialogTitle>
            <DialogDescription>
              Complete information about this WhatsApp Business number
            </DialogDescription>
          </DialogHeader>
          {selectedNumber && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600">Phone Number</label>
                  <p className="text-gray-900">{selectedNumber.number}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">Display Name</label>
                  <p className="text-gray-900">{selectedNumber.display_name}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600">Status</label>
                  {getStatusBadge(selectedNumber.status)}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">Quality Rating</label>
                  <div className="flex items-center space-x-2">
                    {getQualityIcon(selectedNumber.quality_rating)}
                    <span className="capitalize">{selectedNumber.quality_rating}</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600">Daily Limit</label>
                  <p className="text-gray-900">{selectedNumber.messaging_limit} messages</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">Messages Sent Today</label>
                  <p className="text-gray-900">{selectedNumber.messages_sent_24h} messages</p>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Webhook URL</label>
                <div className="bg-gray-50 p-3 rounded border">
                  <p className="text-gray-900 break-all">{selectedNumber.webhook_url}</p>
                </div>
              </div>
              <div className="flex justify-end">
                <Button variant="outline" onClick={() => setShowDetailsModal(false)}>Close</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Configure Modal */}
      <Dialog open={showConfigModal} onOpenChange={setShowConfigModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Configure WhatsApp Number</DialogTitle>
            <DialogDescription>
              Follow Meta's WhatsApp Cloud API configuration steps
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-gray-900 mb-2">Step 1: Verify Phone Number</h4>
              <p className="text-sm text-gray-600 mb-3">Verify your phone number with SMS or voice call</p>
              <Button size="sm">Start Verification</Button>
            </div>
            <div className="border-l-4 border-gray-300 pl-4">
              <h4 className="font-semibold text-gray-600 mb-2">Step 2: Configure Webhook</h4>
              <p className="text-sm text-gray-500 mb-3">Set up webhook URL to receive messages</p>
              <Button size="sm" variant="outline" disabled>Configure Webhook</Button>
            </div>
            <div className="border-l-4 border-gray-300 pl-4">
              <h4 className="font-semibold text-gray-600 mb-2">Step 3: Test Messaging</h4>
              <p className="text-sm text-gray-500 mb-3">Send a test message to verify setup</p>
              <Button size="sm" variant="outline" disabled>Send Test Message</Button>
            </div>
            <div className="flex justify-end">
              <Button variant="outline" onClick={() => setShowConfigModal(false)}>Close</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PhoneNumbers;