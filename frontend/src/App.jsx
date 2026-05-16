import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Dashboard from './pages/dashboard/Dashboard';
import FundingSources from './pages/FundingSources';
import Applications from './pages/Applications';
import Matches from './pages/Matches';
import Navigation from './components/navigation/Navigation';
import LandingPage from './pages/LandingPage';

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return user ? children : <Navigate to="/" replace />;
}

function AppContent() {
  const { user } = useAuth();

  if (!user) {
    return <LandingPage />;
  }

  return (
    <div className="app">
      <Navigation />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/funding-sources" element={<FundingSources />} />
        <Route path="/funding-sources/new" element={<div className="page">Funding Source Form (Coming Soon)</div>} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/applications/create" element={<Applications />} />
        <Route path="/applications/:id" element={<div className="page">Application Details (Coming Soon)</div>} />
        <Route path="/matches/:cooperativeId" element={<Matches />} />
        <Route path="/communities" element={<div className="page">Community Planner (Coming Soon)</div>} />
        <Route path="/cooperatives" element={<div className="page">Cooperative Management (Coming Soon)</div>} />
        <Route path="/cooperatives/new" element={<div className="page">Create Cooperative (Coming Soon)</div>} />
        <Route path="/cooperatives/:id" element={<div className="page">Cooperative Details (Coming Soon)</div>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;
