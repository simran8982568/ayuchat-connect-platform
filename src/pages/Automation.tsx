import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/shared/ui/card';
import { Button } from '@/components/shared/ui/button';
import { Badge } from '@/components/shared/ui/badge';
import { Switch } from '@/components/shared/ui/switch';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/shared/ui/dialog';
import { Input } from '@/components/shared/ui/input';
import { Label } from '@/components/shared/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/shared/ui/select';
import { Plus, Play, Pause, Edit, Trash2, Zap, MessageSquare, UserPlus, Tag, Clock } from 'lucide-react';

const Automation = () => {
  const [automations, setAutomations] = useState([
    {
      id: 1,
      name: 'Welcome New Subscribers',
      description: 'Send welcome message when contact is added',
      trigger: 'Contact Added',
      actions: ['Send Template', 'Add Tag'],
      status: 'active',
      runs: 124,
      success_rate: 98.5
    },
    {
      id: 2,
      name: 'Cart Abandonment',
      description: 'Remind customers about abandoned cart after 1 hour',
      trigger: 'Tag Applied: cart_abandoned',
      actions: ['Wait 1 Hour', 'Send Template'],
      status: 'active',
      runs: 56,
      success_rate: 87.2
    },
    {
      id: 3,
      name: 'Follow Up Sequence',
      description: 'Follow up with leads after form submission',
      trigger: 'Form Submitted',
      actions: ['Send Template', 'Wait 3 Days', 'Send Template'],
      status: 'paused',
      runs: 89,
      success_rate: 92.1
    }
  ]);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedAutomation, setSelectedAutomation] = useState(null);

  const triggerTypes = [
    { icon: UserPlus, name: 'Contact Added', description: 'When a new contact is added' },
    { icon: Tag, name: 'Tag Applied', description: 'When a specific tag is applied' },
    { icon: MessageSquare, name: 'Message Received', description: 'When contact sends a message' },
    { icon: Clock, name: 'Time Based', description: 'Schedule based triggers' }
  ];

  const actionTypes = [
    { icon: MessageSquare, name: 'Send Template', description: 'Send WhatsApp template message' },
    { icon: Tag, name: 'Add Tag', description: 'Apply tag to contact' },
    { icon: Clock, name: 'Wait', description: 'Add delay between actions' },
    { icon: UserPlus, name: 'Assign Agent', description: 'Assign conversation to team member' }
  ];

  const toggleAutomation = (id: number) => {
    setAutomations(automations.map(automation => 
      automation.id === id 
        ? { ...automation, status: automation.status === 'active' ? 'paused' : 'active' }
        : automation
    ));
  };

  const handleEditAutomation = (automation: any) => {
    setSelectedAutomation(automation);
    setShowEditModal(true);
  };

  const handleDeleteAutomation = (id: number) => {
    if (window.confirm('Are you sure you want to delete this automation?')) {
      setAutomations(automations.filter(automation => automation.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Automation</h1>
          <p className="text-gray-600 mt-1">Create automated workflows to engage your customers</p>
        </div>
        <Dialog open={showCreateModal} onOpenChange={setShowCreateModal}>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              Create Automation
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Automation</DialogTitle>
              <DialogDescription>
                Set up automated workflows with triggers and actions to engage your contacts.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label>Automation Name</Label>
                <Input placeholder="Enter automation name" />
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Input placeholder="Describe what this automation does" />
              </div>
              <div className="space-y-2">
                <Label>Trigger</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select trigger" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="contact-added">Contact Added</SelectItem>
                    <SelectItem value="tag-applied">Tag Applied</SelectItem>
                    <SelectItem value="message-received">Message Received</SelectItem>
                    <SelectItem value="time-based">Time Based</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Action</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select action" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="send-template">Send Template</SelectItem>
                    <SelectItem value="add-tag">Add Tag</SelectItem>
                    <SelectItem value="wait">Add Delay</SelectItem>
                    <SelectItem value="assign-agent">Assign Agent</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Delay (optional)</Label>
                <Input placeholder="e.g., 1 hour, 2 days" />
              </div>
              <div className="flex justify-end space-x-2 pt-4">
                <Button variant="outline" onClick={() => setShowCreateModal(false)}>Cancel</Button>
                <Button onClick={() => setShowCreateModal(false)}>Create Automation</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Automations</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Runs</p>
                <p className="text-2xl font-bold text-gray-900">1,247</p>
              </div>
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Play className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Success Rate</p>
                <p className="text-2xl font-bold text-gray-900">94.2%</p>
              </div>
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Messages Sent</p>
                <p className="text-2xl font-bold text-gray-900">3,456</p>
              </div>
              <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Automation Builder Quick Start */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Start - Automation Builder</CardTitle>
          <CardDescription>Drag and drop workflow components to create powerful automations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Trigger Types</h4>
              <div className="space-y-2">
                {triggerTypes.map((trigger, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <trigger.icon className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{trigger.name}</p>
                      <p className="text-xs text-gray-600">{trigger.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Action Types</h4>
              <div className="space-y-2">
                {actionTypes.map((action, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div className="h-8 w-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <action.icon className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{action.name}</p>
                      <p className="text-xs text-gray-600">{action.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Existing Automations */}
      <Card>
        <CardHeader>
          <CardTitle>Your Automations</CardTitle>
          <CardDescription>Manage and monitor your automated workflows</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {automations.map((automation) => (
              <div key={automation.id} className="border rounded-lg p-4 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <h3 className="font-semibold text-gray-900">{automation.name}</h3>
                      <Badge variant={automation.status === 'active' ? 'default' : 'secondary'}>
                        {automation.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{automation.description}</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                      <span>Trigger: {automation.trigger}</span>
                      <span>•</span>
                      <span>Actions: {automation.actions.join(', ')}</span>
                      <span>•</span>
                      <span>{automation.runs} runs</span>
                      <span>•</span>
                      <span>{automation.success_rate}% success</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch 
                      checked={automation.status === 'active'}
                      onCheckedChange={() => toggleAutomation(automation.id)}
                    />
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleEditAutomation(automation)}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleDeleteAutomation(automation.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Edit Automation Modal */}
      <Dialog open={showEditModal} onOpenChange={setShowEditModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Automation</DialogTitle>
            <DialogDescription>
              Update your automation settings and configuration.
            </DialogDescription>
          </DialogHeader>
          {selectedAutomation && (
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label>Automation Name</Label>
                <Input defaultValue={selectedAutomation.name} />
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Input defaultValue={selectedAutomation.description} />
              </div>
              <div className="space-y-2">
                <Label>Trigger</Label>
                <Input defaultValue={selectedAutomation.trigger} />
              </div>
              <div className="space-y-2">
                <Label>Actions</Label>
                <Input defaultValue={selectedAutomation.actions.join(', ')} />
              </div>
              <div className="flex justify-end space-x-2 pt-4">
                <Button variant="outline" onClick={() => setShowEditModal(false)}>Cancel</Button>
                <Button onClick={() => setShowEditModal(false)}>Save Changes</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Automation;
