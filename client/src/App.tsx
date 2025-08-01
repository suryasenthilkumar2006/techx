import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import SponsorshipSection from "./pages/sections/SponsersSection";// fix path if needed

// inside your component's return:
<SponsorshipSection />

import NotFound from "@/pages/not-found";

import { Option } from "@/pages/Option";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Option} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
