import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";

// Initialize React Query client for data fetching and caching
const queryClient = new QueryClient();

const App = () => (
  // Provide React Query context to entire app
  <QueryClientProvider client={queryClient}>
    {/* TooltipProvider supplies tooltip context and styling */}
    <TooltipProvider>
      {/* Routing provider for client-side navigation */}
      <BrowserRouter>
        <Routes>
          {/* Home page route */}
          <Route path="/" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
