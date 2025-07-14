// Chat Service
// This file handles all WhatsApp chat-related API calls and logic

import apiClient from '../api/apiClient';

export interface Message {
  id: string;
  content: string;
  timestamp: string;
  sender: 'user' | 'agent';
  type: 'text' | 'image' | 'document';
  status: 'sent' | 'delivered' | 'read';
}

export interface Conversation {
  id: string;
  contactName: string;
  contactPhone: string;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  status: 'open' | 'closed' | 'pending';
  assignedAgent?: string;
}

export const chatService = {
  // Get all conversations
  getConversations: async (): Promise<Conversation[]> => {
    const response = await apiClient.get('/chats/conversations');
    return response.data;
  },

  // Get messages for a conversation
  getMessages: async (conversationId: string): Promise<Message[]> => {
    const response = await apiClient.get(`/chats/${conversationId}/messages`);
    return response.data;
  },

  // Send message
  sendMessage: async (conversationId: string, content: string, type: string = 'text'): Promise<Message> => {
    const response = await apiClient.post(`/chats/${conversationId}/messages`, {
      content,
      type,
    });
    return response.data;
  },

  // Assign conversation to agent
  assignConversation: async (conversationId: string, agentId: string): Promise<void> => {
    await apiClient.patch(`/chats/${conversationId}/assign`, { agentId });
  },

  // Update conversation status
  updateConversationStatus: async (conversationId: string, status: string): Promise<void> => {
    await apiClient.patch(`/chats/${conversationId}/status`, { status });
  },
};