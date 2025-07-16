import React, { useState } from 'react';
import { Plus, Search, Filter, Upload, Users, UserPlus, Tag } from 'lucide-react';
import { Button } from '@/components/shared/ui/button';
import { Input } from '@/components/shared/ui/input';
import { Card } from '@/components/shared/ui/card';
import { Badge } from '@/components/shared/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/shared/ui/dialog';
import { Label } from '@/components/shared/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/shared/ui/select';

const Contacts = () => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: 'John Doe',
      phone: '+1 (555) 123-4567',
      email: 'john.doe@example.com',
      tags: ['Customer', 'VIP'],
      lastMessage: '2024-01-15',
      status: 'Active',
      source: 'Website'
    },
    {
      id: 2,
      name: 'Sarah Wilson',
      phone: '+1 (555) 987-6543',
      email: 'sarah.wilson@example.com',
      tags: ['Lead', 'Interested'],
      lastMessage: '2024-01-14',
      status: 'Active',
      source: 'Facebook'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      phone: '+1 (555) 456-7890',
      email: 'mike.johnson@example.com',
      tags: ['Customer'],
      lastMessage: '2024-01-13',
      status: 'Inactive',
      source: 'Import'
    },
    {
      id: 4,
      name: 'Emma Davis',
      phone: '+1 (555) 321-0987',
      email: 'emma.davis@example.com',
      tags: ['Prospect', 'Hot Lead'],
      lastMessage: '2024-01-16',
      status: 'Active',
      source: 'Referral'
    }
  ]);

  const [showAddContact, setShowAddContact] = useState(false);
  const [showImport, setShowImport] = useState(false);
  const [showTags, setShowTags] = useState(false);
  const [showBulkActions, setShowBulkActions] = useState(false);

  const getStatusColor = (status: string) => {
    return status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800';
  };

  const downloadTemplate = () => {
    const csvContent = "Name,Phone,Email,Tags\nJohn Doe,+1234567890,john@example.com,Customer;VIP\n";
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contacts_template.csv';
    a.click();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Contacts</h1>
          <p className="text-gray-600 mt-1">Manage your customer contacts and leads</p>
        </div>
        <div className="flex space-x-2">
          <Dialog open={showImport} onOpenChange={setShowImport}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Upload className="w-4 h-4 mr-2" />
                Import
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Import Contacts</DialogTitle>
                <DialogDescription>
                  Upload contacts from CSV or Excel files to add them to your contact list.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label>Download Template</Label>
                  <Button variant="outline" onClick={downloadTemplate} className="w-full">
                    Download CSV Template
                  </Button>
                </div>
                <div className="space-y-2">
                  <Label>Upload File</Label>
                  <Input type="file" accept=".csv,.xlsx,.xls" />
                </div>
                <div className="flex justify-end space-x-2 pt-4">
                  <Button variant="outline" onClick={() => setShowImport(false)}>Cancel</Button>
                  <Button onClick={() => setShowImport(false)}>Import Contacts</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          
          <Dialog open={showAddContact} onOpenChange={setShowAddContact}>
            <DialogTrigger asChild>
              <Button className="ayuchat-button">
                <Plus className="w-4 h-4 mr-2" />
                Add Contact
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Contact</DialogTitle>
                <DialogDescription>
                  Enter contact details to add them to your contact list.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label>Name</Label>
                  <Input placeholder="Enter contact name" />
                </div>
                <div className="space-y-2">
                  <Label>Phone Number</Label>
                  <Input placeholder="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input type="email" placeholder="contact@example.com" />
                </div>
                <div className="space-y-2">
                  <Label>Tags</Label>
                  <Input placeholder="Enter tags (comma separated)" />
                </div>
                <div className="space-y-2">
                  <Label>Source</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select source" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="website">Website</SelectItem>
                      <SelectItem value="facebook">Facebook</SelectItem>
                      <SelectItem value="instagram">Instagram</SelectItem>
                      <SelectItem value="referral">Referral</SelectItem>
                      <SelectItem value="manual">Manual Entry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex justify-end space-x-2 pt-4">
                  <Button variant="outline" onClick={() => setShowAddContact(false)}>Cancel</Button>
                  <Button onClick={() => setShowAddContact(false)}>Add Contact</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Contact Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Contacts</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">3,247</p>
              <p className="text-xs text-green-600 mt-1">+156 this month</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-teal-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Contacts</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">2,891</p>
              <p className="text-xs text-green-600 mt-1">89% active rate</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg flex items-center justify-center">
              <UserPlus className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">New This Week</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">47</p>
              <p className="text-xs text-green-600 mt-1">+23% vs last week</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
              <UserPlus className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Tagged Contacts</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">1,456</p>
              <p className="text-xs text-blue-600 mt-1">45% tagged</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
              <Tag className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card className="p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search contacts by name, phone, or email..."
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>
      </Card>

      {/* Contacts List */}
      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-900">Contact</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Phone</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Tags</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Source</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Last Message</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div>
                      <div className="font-medium text-gray-900">{contact.name}</div>
                      <div className="text-sm text-gray-500">{contact.email}</div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-600">{contact.phone}</td>
                  <td className="py-4 px-4">
                    <div className="flex flex-wrap gap-1">
                      {contact.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(contact.status)}`}>
                      {contact.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-600">{contact.source}</td>
                  <td className="py-4 px-4 text-gray-600">{contact.lastMessage}</td>
                  <td className="py-4 px-4">
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Contact Management Tools */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 text-center">
          <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Upload className="w-6 h-6 text-teal-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Import Contacts</h3>
          <p className="text-gray-600 text-sm mb-4">Upload contacts from CSV or Excel files</p>
          <Button 
            className="ayuchat-button w-full"
            onClick={() => setShowImport(true)}
          >
            Import Now
          </Button>
        </Card>

        <Card className="p-6 text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Tag className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Manage Tags</h3>
          <p className="text-gray-600 text-sm mb-4">Organize contacts with custom tags</p>
          <Dialog open={showTags} onOpenChange={setShowTags}>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full">Manage Tags</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Manage Contact Tags</DialogTitle>
                <DialogDescription>
                  Create and organize tags to categorize your contacts.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label>Create New Tag</Label>
                  <div className="flex space-x-2">
                    <Input placeholder="Tag name" />
                    <Button>Add Tag</Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Existing Tags</Label>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Customer</Badge>
                    <Badge variant="secondary">VIP</Badge>
                    <Badge variant="secondary">Lead</Badge>
                    <Badge variant="secondary">Prospect</Badge>
                    <Badge variant="secondary">Hot Lead</Badge>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </Card>

        <Card className="p-6 text-center">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Users className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Bulk Actions</h3>
          <p className="text-gray-600 text-sm mb-4">Perform actions on multiple contacts</p>
          <Dialog open={showBulkActions} onOpenChange={setShowBulkActions}>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full">Bulk Actions</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Bulk Actions</DialogTitle>
                <DialogDescription>
                  Perform actions on multiple selected contacts.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label>Select Action</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose action" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="add-tag">Add Tag</SelectItem>
                      <SelectItem value="remove-tag">Remove Tag</SelectItem>
                      <SelectItem value="update-status">Update Status</SelectItem>
                      <SelectItem value="export">Export Selected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Tag (if applicable)</Label>
                  <Input placeholder="Enter tag name" />
                </div>
                <div className="flex justify-end space-x-2 pt-4">
                  <Button variant="outline" onClick={() => setShowBulkActions(false)}>Cancel</Button>
                  <Button onClick={() => setShowBulkActions(false)}>Apply Action</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </Card>
      </div>
    </div>
  );
};

export default Contacts;