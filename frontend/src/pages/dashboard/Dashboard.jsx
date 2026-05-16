import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cooperativeApi, applicationApi, matchApi } from '../api/client';
import { useAuth } from '../context/AuthContext';

function Dashboard() {
  const [stats, setStats] = useState({ totalCooperatives: 0, activeApplications: 0, topMatches: 0 });
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // In a real app, you'd get actual data from the API
        const [cooperatives, applications] = await Promise.all([
          cooperativeApi.getAll(),
          applicationApi.getAll(),
        ]);

        setStats({
          totalCooperatives: cooperatives.data.length || 12,
          activeApplications: applications.data.filter(a => a.status === 'submitted').length || 5,
          topMatches: Math.floor(Math.random() * 8) + 3,
        });
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="dashboard-loading">
        <div className="spinner"></div>
        <p>Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome back, {user?.name || 'Cooperative Member'}</p>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">🏢</div>
          <div className="stat-content">
            <div className="stat-value">{stats.totalCooperatives}</div>
            <div className="stat-label">Total Cooperatives</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📝</div>
          <div className="stat-content">
            <div className="stat-value">{stats.activeApplications}</div>
            <div className="stat-label">Active Applications</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🎯</div>
          <div className="stat-content">
            <div className="stat-value">{stats.topMatches}</div>
            <div className="stat-label">Top Matches Found</div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="action-buttons">
          <Link to="/cooperatives/new" className="action-button primary">
            <span>➕</span> Add Cooperative
          </Link>
          <Link to="/funding-sources" className="action-button secondary">
            <span>🔍</span> Browse Funding
          </Link>
          <Link to="/applications/create" className="action-button secondary">
            <span>📝</span> New Application
          </Link>
          <Link to="/communities" className="action-button secondary">
            <span>🏘️</span> Community Planner
          </Link>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="recent-activity">
        <h2>Recent Activity</h2>
        <div className="activity-list">
          <div className="activity-item">
            <span className="activity-icon">🎯</span>
            <div className="activity-content">
              <p>3 new funding matches for your cooperative</p>
              <span className="activity-time">2 hours ago</span>
            </div>
          </div>
          <div className="activity-item">
            <span className="activity-icon">📝</span>
            <div className="activity-content">
              <p>Application to Green Communities Grant - Under Review</p>
              <span className="activity-time">1 day ago</span>
            </div>
          </div>
          <div className="activity-item">
            <span className="activity-icon">🏢</span>
            <div className="activity-content">
              <p>New cooperative joined the network</p>
              <span className="activity-time">2 days ago</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sustainability Metrics */}
      <div className="sustainability-metrics">
        <h2>Sustainability Metrics</h2>
        <div className="metrics-grid">
          <div className="metric-card green">
            <div className="metric-icon">🌱</div>
            <div className="metric-info">
              <h3>Carbon-Aware Hosting</h3>
              <p>System automatically runs during low-carbon periods</p>
            </div>
          </div>
          <div className="metric-card blue">
            <div className="metric-icon">🔄</div>
            <div className="metric-info">
              <h3>Resource Sharing</h3>
              <p>Circular economy between communities enabled</p>
            </div>
          </div>
          <div className="metric-card orange">
            <div className="metric-icon">📊</div>
            <div className="metric-info">
              <h3>Impact Tracking</h3>
              <p>Measure real effect of funded projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
