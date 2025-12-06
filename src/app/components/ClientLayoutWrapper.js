'use client';

import { useEffect, useState, Suspense } from 'react';
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import Header from './Header';
import ErrorBoundary from './ErrorBoundary';
import ScrollToTop from './ScrollToTop';

// Simple loading component
const LoadingScreen = () => (
  <div className="loading-container bg-white flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-600"></div>
  </div>
);

export default function ClientLayoutWrapper({ children }) {
  const [isMounted, setIsMounted] = useState(false);

  // --- ADDED THIS USEEFFECT ---
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Prevent hydration mismatch by showing loader until client-side mount
  if (!isMounted) return <LoadingScreen />;

  return (
    <ErrorBoundary>
      <Header />
      <Suspense fallback={<LoadingScreen />}>
        <main className="w-full min-h-[70vh] bg-background pt-0 pb-0">
          {children}
        </main>
      </Suspense>
      <Footer />
      <WhatsAppButton phoneNumber="+919879110368" />
      <ScrollToTop />
    </ErrorBoundary>
  );
}