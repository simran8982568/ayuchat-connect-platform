
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Inbox from "./pages/Inbox";
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
            <Route path="/chatbot" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold text-gray-900">Chatbot Builder</h1><p className="text-gray-600 mt-2">Visual flow builder coming soon...</p></div>} />
            <Route path="/templates" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold text-gray-900">Message Templates</h1><p className="text-gray-600 mt-2">Template management coming soon...</p></div>} />
            <Route path="/campaigns" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold text-gray-900">Campaigns</h1><p className="text-gray-600 mt-2">Campaign management coming soon...</p></div>} />
            <Route path="/contacts" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold text-gray-900">Contacts</h1><p className="text-gray-600 mt-2">Contact management coming soon...</p></div>} />
            <Route path="/analytics" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold text-gray-900">Analytics</h1><p className="text-gray-600 mt-2">Analytics dashboard coming soon...</p></div>} />
            <Route path="/integration" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold text-gray-900">Integrations</h1><p className="text-gray-600 mt-2">API and webhook management coming soon...</p></div>} />
            <Route path="/settings" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold text-gray-900">Settings</h1><p className="text-gray-600 mt-2">Account and billing settings coming soon...</p></div>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
