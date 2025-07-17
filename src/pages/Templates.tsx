
import React, { useState } from 'react';
import { Plus, Search, Filter, CheckCircle, Clock, XCircle, Edit, Eye, X } from 'lucide-react';
import { Button } from '@/components/shared/ui/button';
import { Input } from '@/components/shared/ui/input';
import { Card } from '@/components/shared/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/shared/ui/dialog';
import { Badge } from '@/components/shared/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/shared/ui/select';
import { Textarea } from '@/components/shared/ui/textarea';

const Templates = () => {
  const [templates, setTemplates] = useState([
    {
      id: 1,
      name: 'order_confirmation',
      category: 'Utility',
      status: 'Approved',
      language: 'English',
      created: '2024-01-15',
      usage: 1234,
      body: 'Hello {{1}}, thank you for your order #{{2}}. We have received your payment and will ship your items soon.',
      footer: 'Track your order from your account.',
      header: 'Order Confirmation',
      buttons: [{ type: 'url', text: 'View Order', url: 'https://example.com/order/{{2}}' }]
    },
    {
      id: 2,
      name: 'welcome_message',
      category: 'Marketing',
      status: 'Pending',
      language: 'English',
      created: '2024-01-14',
      usage: 856,
      body: 'Welcome to our platform {{1}}! We are excited to have you on board.',
      footer: 'Need help? Contact our support team.',
      header: 'Welcome!',
      buttons: [{ type: 'quick_reply', text: 'Get Started' }]
    },
    {
      id: 3,
      name: 'otp_verification',
      category: 'Authentication',
      status: 'Approved',
      language: 'English',
      created: '2024-01-13',
      usage: 2341,
      body: 'Your OTP for verification is {{1}}. This code is valid for 10 minutes.',
      footer: 'Do not share this code with anyone.',
      header: 'Verification Code',
      buttons: []
    },
    {
      id: 4,
      name: 'holiday_offer',
      category: 'Marketing',
      status: 'Rejected',
      language: 'English',
      created: '2024-01-12',
      usage: 0,
      body: '🎉 Happy Holidays {{1}}! Enjoy flat 25% OFF on all products. Offer valid till {{2}}.',
      footer: 'Limited time offer!',
      header: 'Holiday Special Offer',
      buttons: [{ type: 'url', text: 'Shop Now', url: 'https://example.com/sale' }]
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [newTemplate, setNewTemplate] = useState({
    name: '',
    category: '',
    language: 'English',
    header: '',
    body: '',
    footer: '',
    buttons: []
  });

  const exampleTemplates = [
    {
      name: 'appointment_reminder',
      category: 'Utility',
      body: 'Hi {{1}}, this is a reminder for your appointment with Dr. {{2}} on {{3}} at {{4}}.',
      footer: 'Please be on time.',
      buttons: [{ type: 'url', text: 'Reschedule', url: 'https://example.com/reschedule' }]
    },
    {
      name: 'payment_reminder',
      category: 'Utility',
      body: 'Dear {{1}}, your payment of ₹{{2}} is due on {{3}}. Please pay to avoid service interruption.',
      buttons: [{ type: 'url', text: 'Pay Now', url: 'https://example.com/pay' }]
    },
    {
      name: 'feedback_request',
      category: 'Utility',
      body: 'Hi {{1}}, we hope your experience with our service was great! Please take a moment to share your feedback.',
      buttons: [{ type: 'url', text: 'Give Feedback', url: 'https://example.com/feedback' }]
    }
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || template.status === statusFilter;
    const matchesCategory = categoryFilter === 'All' || template.category === categoryFilter;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Approved':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'Pending':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'Rejected':
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Message Templates</h1>
          <p className="text-gray-600 mt-1">Create and manage WhatsApp message templates</p>
        </div>
        <Dialog open={showCreateModal} onOpenChange={setShowCreateModal}>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              New Template
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New WhatsApp Template</DialogTitle>
              <DialogDescription>
                Create a reusable message template for campaigns, reminders, and more.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Template Name</label>
                  <Input
                    placeholder="e.g., order_confirmation"
                    value={newTemplate.name}
                    onChange={(e) => setNewTemplate({...newTemplate, name: e.target.value})}
                  />
                  <p className="text-xs text-gray-500 mt-1">Use lowercase letters, no spaces (use _ or -)</p>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <Select value={newTemplate.category} onValueChange={(value) => setNewTemplate({...newTemplate, category: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Marketing">📢 Marketing</SelectItem>
                      <SelectItem value="Utility">📦 Utility</SelectItem>
                      <SelectItem value="Authentication">🔐 Authentication</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Header (Optional)</label>
                <Input
                  placeholder="e.g., Order Update"
                  value={newTemplate.header}
                  onChange={(e) => setNewTemplate({...newTemplate, header: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Body Message</label>
                <Textarea
                  placeholder="e.g., Hello {{1}}, your order #{{2}} has been shipped."
                  rows={4}
                  value={newTemplate.body}
                  onChange={(e) => setNewTemplate({...newTemplate, body: e.target.value})}
                />
                <p className="text-xs text-gray-500 mt-1">Use {`{{1}}`}, {`{{2}}`}, etc. for variables</p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Footer (Optional)</label>
                <Input
                  placeholder="e.g., Thank you for shopping with us."
                  value={newTemplate.footer}
                  onChange={(e) => setNewTemplate({...newTemplate, footer: e.target.value})}
                />
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setShowCreateModal(false)}>Cancel</Button>
                <Button onClick={() => {
                  if (newTemplate.name && newTemplate.category && newTemplate.body) {
                    const template = {
                      id: templates.length + 1,
                      ...newTemplate,
                      status: 'Pending',
                      language: 'English',
                      created: new Date().toISOString().split('T')[0],
                      usage: 0,
                      buttons: []
                    };
                    setTemplates([...templates, template]);
                    setNewTemplate({ name: '', category: '', language: 'English', header: '', body: '', footer: '', buttons: [] });
                    setShowCreateModal(false);
                  }
                }}>
                  Submit for Approval
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">12</p>
            <p className="text-sm text-gray-600">Total Templates</p>
          </div>
        </Card>
        <Card className="p-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">8</p>
            <p className="text-sm text-gray-600">Approved</p>
          </div>
        </Card>
        <Card className="p-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-yellow-600">3</p>
            <p className="text-sm text-gray-600">Pending</p>
          </div>
        </Card>
        <Card className="p-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-red-600">1</p>
            <p className="text-sm text-gray-600">Rejected</p>
          </div>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card className="p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search templates by name or keyword..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Status</SelectItem>
              <SelectItem value="Approved">Approved</SelectItem>
              <SelectItem value="Pending">Pending</SelectItem>
              <SelectItem value="Rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Categories</SelectItem>
              <SelectItem value="Marketing">Marketing</SelectItem>
              <SelectItem value="Utility">Utility</SelectItem>
              <SelectItem value="Authentication">Authentication</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      {/* Templates List */}
      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-900">Template Name</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Category</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Language</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Usage</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Created</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTemplates.map((template) => (
                <tr key={template.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div className="font-medium text-gray-900">{template.name}</div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      {template.category}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(template.status)}
                      <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(template.status)}`}>
                        {template.status}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-600">{template.language}</td>
                  <td className="py-4 px-4 text-gray-600">{template.usage.toLocaleString()}</td>
                  <td className="py-4 px-4 text-gray-600">{template.created}</td>
                  <td className="py-4 px-4">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => {
                        setSelectedTemplate(template);
                        setShowViewModal(true);
                      }}
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Example Templates */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Example Templates</h3>
        <p className="text-gray-600 mb-6">Ready-to-use templates for common business scenarios</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {exampleTemplates.map((template, index) => (
            <div key={index} className="border rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">{template.name.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h4>
              <Badge className="mb-3" variant="outline">{template.category}</Badge>
              <p className="text-sm text-gray-600 mb-3">{template.body}</p>
              {template.footer && <p className="text-xs text-gray-500 mb-3">{template.footer}</p>}
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={() => {
                  setNewTemplate({
                    name: template.name,
                    category: template.category,
                    language: 'English',
                    header: '',
                    body: template.body,
                    footer: template.footer || '',
                    buttons: template.buttons || []
                  });
                  setShowCreateModal(true);
                }}
              >
                Use This Template
              </Button>
            </div>
          ))}
        </div>
      </Card>

      {/* View Template Modal */}
      <Dialog open={showViewModal} onOpenChange={setShowViewModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Template Details</DialogTitle>
            <DialogDescription>
              Full details of the selected WhatsApp template
            </DialogDescription>
          </DialogHeader>
          {selectedTemplate && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600">Template Name</label>
                  <p className="text-gray-900">{selectedTemplate.name}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">Category</label>
                  <Badge variant="outline">{selectedTemplate.category}</Badge>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600">Status</label>
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(selectedTemplate.status)}
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(selectedTemplate.status)}`}>
                      {selectedTemplate.status}
                    </span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">Usage Count</label>
                  <p className="text-gray-900">{selectedTemplate.usage.toLocaleString()}</p>
                </div>
              </div>
              {selectedTemplate.header && (
                <div>
                  <label className="block text-sm font-medium text-gray-600">Header</label>
                  <p className="text-gray-900">{selectedTemplate.header}</p>
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-600">Body Message</label>
                <div className="bg-gray-50 p-3 rounded border">
                  <p className="text-gray-900">{selectedTemplate.body}</p>
                </div>
              </div>
              {selectedTemplate.footer && (
                <div>
                  <label className="block text-sm font-medium text-gray-600">Footer</label>
                  <p className="text-gray-900">{selectedTemplate.footer}</p>
                </div>
              )}
              {selectedTemplate.buttons && selectedTemplate.buttons.length > 0 && (
                <div>
                  <label className="block text-sm font-medium text-gray-600">Buttons</label>
                  <div className="space-y-2">
                    {selectedTemplate.buttons.map((button, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                        <span>{button.text}</span>
                        <Badge variant="secondary">{button.type}</Badge>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className="flex justify-end">
                <Button variant="outline" onClick={() => setShowViewModal(false)}>Close</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Templates;
