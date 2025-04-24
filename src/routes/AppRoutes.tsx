import { Routes, Route } from "react-router-dom";

import Index from "../pages/Index";
import Features from "../pages/Features";
import HowItWorks from "../pages/HowItWorks";
import Pricing from "../pages/Pricing";
import About from "../pages/About";
import Contact from "../pages/Contact";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import DashboardPreview from "../pages/DashboardPreview";
import NotFound from "../pages/NotFound";
import StudyAgent from "../pages/StudyAgent";
import SmartCalendar from "../pages/SmartCalendar";
import QuizGenerator from "../pages/QuizGenerator";
import ContentSummarizer from "../pages/ContentSummarizer";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/features" element={<Features />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard-preview" element={<DashboardPreview />} />
      <Route path="/study-agent" element={<StudyAgent />} />
      <Route path="/smart-calendar" element={<SmartCalendar />} />
      <Route path="/quiz-generator" element={<QuizGenerator />} />
      <Route path="/content-summarizer" element={<ContentSummarizer />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
