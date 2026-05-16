import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { applicationApi, matchApi } from '../api/client';

function Applications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('list'); // 'list' or 'create'
  const [formData, setFormData] = useState({
    cooperative_id: '',
    funding_source_id: '',
    community_id: '',
    status: 'draft',
    cover_letter: '',
    project_proposal: '',
    budget_details: {},
    supporting_documents: []
  });

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const response = await applicationApi.getAll();
      setApplications(response.data);
    } catch (error) {
      console.error('Failed to fetch applications:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, send to API and handle response
    console.log('Submitting application:', formData);
    alert('Application submitted successfully!');
    setView('list');
    fetchApplications();
  };

  const getStatusBadge = (status) => {
    const colors = {
      draft: 'bg-gray-100 text-gray-800',
      submitted: 'bg-blue-100 text-blue-800',
      under_review: 'bg-yellow-100 text-yellow-800',
      approved: 'bg-green-100 text-green-800',
      rejected: 'bg-red-100 text-red-800',
      awarded: 'bg-purple-100 text-purple-800'
    };
    return `<span class="px-3 py-1 rounded-full text-sm font-medium ${colors[status] || 'bg-gray-100'}">${status}</span>`;
  };

  if (loading) {
    return (
      <div className="applications-loading">
        <div className="spinner"></div>
        <p>Loading applications...</p>
      </div>
    );
  }

  if (view === 'create') {
    return (
      <div className="create-application">
        <div className="page-header">
          <h1>Create New Application</h1>
          <button onClick={() => setView('list')} className="back-button">
            ← Back to Applications
          </button>
        </div>

        <form onSubmit={handleSubmit} className="application-form">
          <div className="form-section">
            <h2>Application Details</h2>
            <div className="form-group">
              <label>Funding Source *</label>
              <select
                required
                value={formData.funding_source_id}
                onChange={(e) => setFormData({ ...formData, funding_source_id: e.target.value })}
              >
                <option value="">Select a funding source...</option>
                {/* Would populate from API */}
                <option value="1">Green Communities Grant</option>
                <option value="2">Solar Energy Initiative</option>
                <option value="3">Sustainable Infrastructure Fund</option>
              </select>
            </div>

            <div className="form-group">
              <label>Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              >
                <option value="draft">Draft</option>
                <option value="submitted">Submitted</option>
                <option value="under_review">Under Review</option>
              </select>
            </div>
          </div>

          <div className="form-section">
            <h2>Project Information</h2>
            <div className="form-group">
              <label>Project Proposal *</label>
              <textarea
                required
                rows={8}
                value={formData.project_proposal}
                onChange={(e) => setFormData({ ...formData, project_proposal: e.target.value })}
                placeholder="Describe your project, goals, and impact..."
              />
            </div>

            <div className="form-group">
              <label>Cover Letter</label>
              <textarea
                rows={4}
                value={formData.cover_letter}
                onChange={(e) => setFormData({ ...formData, cover_letter: e.target.value })}
                placeholder="Brief introduction and why this funding is needed..."
              />
            </div>
          </div>

          <div className="form-section">
            <h2>Budget Details</h2>
            <div className="form-group">
              <label>Budget Breakdown (JSON format)</label>
              <textarea
                rows={6}
                value={JSON.stringify(formData.budget_details, null, 2)}
                onChange={(e) => setFormData({ ...formData, budget_details: JSON.parse(e.target.value) || {} })}
                placeholder='{"materials": 50000, "labor": 30000, "equipment": 20000}'
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-button">
              Submit Application
            </button>
            <button type="button" onClick={() => setView('list')} className="cancel-button">
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="applications">
      <div className="page-header">
        <h1>Applications</h1>
        <button onClick={() => setView('create')} className="primary-button">
          + New Application
        </button>
      </div>

      <div className="applications-list">
        {applications.map((app) => (
          <div key={app.id} className="application-card">
            <div className="application-header">
              <div className="application-info">
                <h3>{app.funding_source_name || app.funding_source_id}</h3>
                <p className="application-cooperative">
                  {app.cooperative_name || 'Your Cooperative'}
                </p>
              </div>
              {getStatusBadge(app.status)}
            </div>

            <div className="application-meta">
              <span>Applied: {new Date(app.applied_at).toLocaleDateString()}</span>
              {app.won_amount && (
                <span className="won-amount">
                  Won: {new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD'
                  }).format(app.won_amount)}
                </span>
              )}
            </div>

            <p className="application-status">
              Status: <span className="status-highlight">{app.status}</span>
            </p>

            <div className="application-actions">
              <Link to={`/applications/${app.id}`} className="view-button">
                View Details
              </Link>
              {app.status === 'draft' && (
                <button onClick={() => setView('create')} className="edit-button">
                  Edit
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {applications.length === 0 && (
        <div className="no-applications">
          <div className="no-applications-icon">📝</div>
          <p>No applications yet</p>
          <button onClick={() => setView('create')} className="create-button">
            Create Your First Application
          </button>
        </div>
      )}
    </div>
  );
}

export default Applications;
