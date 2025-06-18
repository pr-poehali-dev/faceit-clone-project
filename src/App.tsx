import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <div className="dark">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route
              path="/login"
              element={
                <div className="min-h-screen flex items-center justify-center">
                  <h1 className="text-2xl">Steam Login - В разработке</h1>
                </div>
              }
            />
            <Route
              path="/tournaments"
              element={
                <div className="min-h-screen flex items-center justify-center">
                  <h1 className="text-2xl">Турниры - В разработке</h1>
                </div>
              }
            />
            <Route
              path="/leaderboards"
              element={
                <div className="min-h-screen flex items-center justify-center">
                  <h1 className="text-2xl">Рейтинги - В разработке</h1>
                </div>
              }
            />
            <Route
              path="/stats"
              element={
                <div className="min-h-screen flex items-center justify-center">
                  <h1 className="text-2xl">Статистика - В разработке</h1>
                </div>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </div>
);

export default App;
