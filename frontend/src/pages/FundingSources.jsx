import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fundingSourceApi } from '../api/client';

function FundingSources() {
  const [fundingSources, setFundingSources] = useState([]);
  const [filteredSources, setFilteredSources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    type: 'all',
    minAmount: 0,
    maxAmount: 1000000,
    focusArea: 'all'
  });

  useEffect(() => {
    fetchFundingSources();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filters, fundingSources]);

  const fetchFundingSources = async () => {
    try {
      const response = await fundingSourceApi.getAll();
      setFundingSources(response.data);
      setFilteredSources(response.data);
    } catch (error) {
      console.error('Failed to fetch funding sources:', error);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    setFilteredSources(
      fundingSources.filter(source => {
        const matchesType = filters.type === 'all' || source.funding_type === filters.type;
        const matchesMin = !filters.minAmount || source.amount_max >= filters.minAmount;
        const matchesMax = !filters.maxAmount || source.amount_min <= filters.maxAmount;
        return matchesType && matchesMin && matchesMax;
      })
    );
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const getFundingTypeIcon = (type) => {
    const icons = {
      grant: '💰',
      loan: '🏦',
      equity: '📈',
      technical_assistance: '🔧'
    };
    return icons[type] || '💰';
  };

  if (loading) {
    return (
      <div className="funding-sources-loading">
        <div className="spinner"></div>
        <p>Loading funding sources...</p>
      </div>
    );
  }

  return (
    <div className="funding-sources">
      <div className="funding-header">
        <h1>Funding Sources</h1>
        <Link to="/funding-sources/new" className="primary-button">
          + Add New Funding Source
        </Link>
      </div>

      {/* Filters */}
      <div className="filters-bar">
        <div className="filter-group">
          <label>Type:</label>
          <select
            value={filters.type}
            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
          >
            <option value="all">All Types</option>
            <option value="grant">Grants</option>
            <option value="loan">Loans</option>
            <option value="equity">Equity</option>
            <option value="technical_assistance">Technical Assistance</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Min Amount:</label>
          <input
            type="number"
            value={filters.minAmount}
            onChange={(e) => setFilters({ ...filters, minAmount: parseInt(e.target.value) || 0 })}
            placeholder="0"
          />
        </div>

        <div className="filter-group">
          <label>Max Amount:</label>
          <input
            type="number"
            value={filters.maxAmount}
            onChange={(e) => setFilters({ ...filters, maxAmount: parseInt(e.target.value) || 1000000 })}
            placeholder="1M"
          />
        </div>

        <div className="filter-group">
          <label>Focus Area:</label>
          <select
            value={filters.focusArea}
            onChange={(e) => setFilters({ ...filters, focusArea: e.target.value })}
          >
            <option value="all">All Areas</option>
            <option value="sustainability">Sustainability</option>
            <option value="community-development">Community Development</option>
            <option value="renewable-energy">Renewable Energy</option>
            <option value="agriculture">Agriculture</option>
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div className="results-count">
        Showing {filteredSources.length} of {fundingSources.length} funding sources
      </div>

      {/* Funding Sources List */}
      <div className="funding-list">
        {filteredSources.map((source) => (
          <div key={source.id} className="funding-card">
            <div className="funding-card-header">
              <div className="funding-type-icon">{getFundingTypeIcon(source.funding_type)}</div>
              <div className="funding-card-info">
                <h3>{source.name}</h3>
                <p className="funding-aid-group">{source.aid_group_name}</p>
              </div>
              <span className="funding-badge">{source.funding_type}</span>
            </div>

            <p className="funding-description">{source.description}</p>

            <div className="funding-amount">
              <span className="amount-label">Available:</span>
              <span className="amount-value">
                {formatCurrency(source.amount_min)} - {formatCurrency(source.amount_max)}
              </span>
            </div>

            <div className="funding-details">
              {source.interest_rate && (
                <span className="detail-item">Interest: {source.interest_rate}%</span>
              )}
              {source.term_months && (
                <span className="detail-item">Term: {source.term_months} months</span>
              )}
              {source.deadline && (
                <span className="detail-item deadline">Deadline: {new Date(source.deadline).toLocaleDateString()}</span>
              )}
            </div>

            <div className="funding-actions">
              <Link to={`/funding-sources/${source.id}`} className="view-button">
                View Details
              </Link>
              <Link to={`/applications/create?fundingSource=${source.id}`} className="apply-button">
                Apply Now
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filteredSources.length === 0 && (
        <div className="no-results">
          <div className="no-results-icon">🔍</div>
          <p>No funding sources match your filters</p>
          <button onClick={resetFilters} className="reset-button">
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}

function resetFilters() {
  // Implementation would be handled by the parent component
  console.log('Reset filters');
}

export default FundingSources;
