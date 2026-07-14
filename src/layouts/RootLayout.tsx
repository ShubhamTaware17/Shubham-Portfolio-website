import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AnimatedBackground from '../components/layout/AnimatedBackground';
import ScrollProgress from '../components/layout/ScrollProgress';
import BackToTop from '../components/layout/BackToTop';
import CursorGlow from '../components/layout/CursorGlow';
import { pageTransition } from '../animations/variants';

export default function RootLayout() {
  const location = useLocation();

  return (
    <div id="top" className="relative min-h-screen">
      <AnimatedBackground />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />

      <main className="pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={pageTransition}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
