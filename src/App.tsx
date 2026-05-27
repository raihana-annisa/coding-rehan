import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

/* ---------------- LOADING SCREEN ---------------- */
const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-sky-50 dark:bg-[#050b1a] overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0">
        <div className="absolute w-[600px] h-[600px] bg-sky-300/30 blur-[160px] top-[-200px] left-[-200px]" />
        <div className="absolute w-[500px] h-[500px] bg-cyan-300/20 blur-[160px] bottom-[-200px] right-[-200px]" />
      </div>

      {/* CONTENT */}
      <div className="relative flex flex-col items-center justify-center">

        {/* LOTTIE (FORCE INSTANT START) */}
        <div className="w-64 h-64">
          <DotLottieReact
            key="lottie-loading"
            src="https://lottie.host/53df07ce-bea4-48ec-9588-711585ca2d8d/Ry7hcBbjfW.lottie"
            loop
            autoplay
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        {/* TEXT */}
        <div className="text-center mt-4">
          <h1 className="text-lg md:text-xl font-semibold text-sky-600 dark:text-sky-200">
            Loading Portfolio ✨
          </h1>

          <p className="text-xs md:text-sm text-sky-500/70 dark:text-sky-300/60 mt-1">
            preparing something beautiful...
          </p>
        </div>

      </div>
    </div>
  );
};

/* ---------------- APP ---------------- */
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // paksa browser render 1 frame dulu biar animasi langsung start
    requestAnimationFrame(() => {
      setReady(true);
    });

    // loading duration (boleh kamu kecilin kalau mau cepat)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const showLoading = isLoading || !ready;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>

          {/* LOADING OVERLAY (tidak remount, jadi Lottie gak restart) */}
          {showLoading && <LoadingScreen />}

          {/* MAIN APP */}
          <div
            className={`
              transition-opacity duration-500
              ${!showLoading ? "opacity-100" : "opacity-0 pointer-events-none"}
            `}
          >
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>

        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;