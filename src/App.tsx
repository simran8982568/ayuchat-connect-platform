
import { Toaster } from "@/components/shared/ui/toaster";
import { Toaster as Sonner } from "@/components/shared/ui/sonner";
import { TooltipProvider } from "@/components/shared/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/shared/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Inbox from "./pages/Inbox";
import Automation from "./pages/Automation";
import Templates from "./pages/Templates";
import Campaigns from "./pages/Campaigns";
import Contacts from "./pages/Contacts";
import Analytics from "./pages/Analytics";
import PhoneNumbers from "./pages/PhoneNumbers";
import Billing from "./pages/Billing";
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
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/automation" element={<Automation />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/phone-numbers" element={<PhoneNumbers />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
