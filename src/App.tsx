
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Inbox from "./pages/Inbox";
import ChatbotBuilder from "./pages/ChatbotBuilder";
import Templates from "./pages/Templates";
import Campaigns from "./pages/Campaigns";
import Contacts from "./pages/Contacts";
import Analytics from "./pages/Analytics";
import Integration from "./pages/Integration";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/chatbot" element={<ChatbotBuilder />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/integration" element={<Integration />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
