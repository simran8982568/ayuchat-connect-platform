import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/shared/ui/card';
import { Button } from '@/components/shared/ui/button';
import { Badge } from '@/components/shared/ui/badge';
import { Progress } from '@/components/shared/ui/progress';
import { Check, CreditCard, Download, Calendar, Zap, Users, MessageSquare } from 'lucide-react';

const Billing = () => {
  const [currentPlan] = useState('pro');
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: { monthly: 29, yearly: 290 },
      description: 'Perfect for small businesses',
      features: [
        '1,000 messages/month',
        '1 phone number',
        '5 team members',
        'Basic templates',
        'Email support'
      ],
      limits: {
        messages: 1000,
        phone_numbers: 1,
        team_members: 5,
        automations: 5
      }
    },
    {
      id: 'pro',
      name: 'Pro',
      price: { monthly: 79, yearly: 790 },
      description: 'Most popular for growing businesses',
      features: [
        '5,000 messages/month',
        '3 phone numbers',
        '15 team members',
        'Advanced automation',
        'Priority support',
        'Custom templates'
      ],
      limits: {
        messages: 5000,
        phone_numbers: 3,
        team_members: 15,
        automations: 25
      },
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: { monthly: 199, yearly: 1990 },
      description: 'For large-scale operations',
      features: [
        '25,000 messages/month',
        'Unlimited phone numbers',
        'Unlimited team members',
        'Advanced analytics',
        'Dedicated support',
        'Custom integrations'
      ],
      limits: {
        messages: 25000,
        phone_numbers: 999,
        team_members: 999,
        automations: 999
      }
    }
  ];

  const currentUsage = {
    messages: 3247,
    phone_numbers: 2,
    team_members: 8,
    automations: 12
  };

  const invoices = [
    { id: 'INV-001', date: '2024-01-01', amount: 79, status: 'paid', plan: 'Pro Monthly' },
    { id: 'INV-002', date: '2023-12-01', amount: 79, status: 'paid', plan: 'Pro Monthly' },
    { id: 'INV-003', date: '2023-11-01', amount: 79, status: 'paid', plan: 'Pro Monthly' },
    { id: 'INV-004', date: '2023-10-01', amount: 79, status: 'paid', plan: 'Pro Monthly' }
  ];

  const currentPlanData = plans.find(plan => plan.id === currentPlan);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Billing & Subscription</h1>
          <p className="text-gray-600 mt-1">Manage your subscription and billing information</p>
        </div>
        <Button variant="outline">
          <CreditCard className="w-4 h-4 mr-2" />
          Update Payment Method
        </Button>
      </div>

      {/* Current Plan */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Current Plan
            <Badge className="bg-primary text-white">
              {currentPlanData?.name} Plan
            </Badge>
          </CardTitle>
          <CardDescription>Your current subscription details and usage</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Messages</span>
                <span className="text-sm font-medium">
                  {currentUsage.messages.toLocaleString()} / {currentPlanData?.limits.messages.toLocaleString()}
                </span>
              </div>
              <Progress value={(currentUsage.messages / (currentPlanData?.limits.messages || 1)) * 100} />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Phone Numbers</span>
                <span className="text-sm font-medium">
                  {currentUsage.phone_numbers} / {currentPlanData?.limits.phone_numbers}
                </span>
              </div>
              <Progress value={(currentUsage.phone_numbers / (currentPlanData?.limits.phone_numbers || 1)) * 100} />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Team Members</span>
                <span className="text-sm font-medium">
                  {currentUsage.team_members} / {currentPlanData?.limits.team_members}
                </span>
              </div>
              <Progress value={(currentUsage.team_members / (currentPlanData?.limits.team_members || 1)) * 100} />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Automations</span>
                <span className="text-sm font-medium">
                  {currentUsage.automations} / {currentPlanData?.limits.automations}
                </span>
              </div>
              <Progress value={(currentUsage.automations / (currentPlanData?.limits.automations || 1)) * 100} />
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between pt-6 border-t">
            <div>
              <p className="text-sm text-gray-600">Next billing date</p>
              <p className="font-medium">February 1, 2024</p>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline">Change Plan</Button>
              <Button variant="outline">Cancel Subscription</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pricing Plans */}
      <Card>
        <CardHeader>
          <CardTitle>Upgrade Your Plan</CardTitle>
          <CardDescription>Choose the perfect plan for your business needs</CardDescription>
          <div className="flex items-center space-x-2">
            <Button
              variant={billingCycle === 'monthly' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </Button>
            <Button
              variant={billingCycle === 'yearly' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setBillingCycle('yearly')}
            >
              Yearly (Save 17%)
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div key={plan.id} className={`relative border rounded-lg p-6 ${plan.popular ? 'border-primary ring-2 ring-primary/20' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary text-white">
                    Most Popular
                  </Badge>
                )}
                
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{plan.description}</p>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-gray-900">
                      ${billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly}
                    </span>
                    <span className="text-gray-600">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mt-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full mt-6 ${currentPlan === plan.id ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={currentPlan === plan.id}
                >
                  {currentPlan === plan.id ? 'Current Plan' : 'Upgrade'}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Usage Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Messages This Month</p>
                <p className="text-2xl font-bold text-gray-900">3,247</p>
              </div>
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Automations</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Team Members</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Next Billing</p>
                <p className="text-2xl font-bold text-gray-900">$79</p>
              </div>
              <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Calendar className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Invoice History */}
      <Card>
        <CardHeader>
          <CardTitle>Invoice History</CardTitle>
          <CardDescription>Download your previous invoices and billing statements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {invoices.map((invoice) => (
              <div key={invoice.id} className="flex items-center justify-between py-3 border-b last:border-b-0">
                <div className="flex items-center space-x-4">
                  <div>
                    <p className="font-medium text-gray-900">{invoice.id}</p>
                    <p className="text-sm text-gray-600">{invoice.plan}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="font-medium text-gray-900">${invoice.amount}</p>
                    <p className="text-sm text-gray-600">{invoice.date}</p>
                  </div>
                  <Badge variant={invoice.status === 'paid' ? 'default' : 'secondary'}>
                    {invoice.status}
                  </Badge>
                  <Button variant="ghost" size="sm">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Billing;