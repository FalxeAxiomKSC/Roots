import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { matchApi, cooperativeApi, fundingSourceApi } from '../api/client';

function Matches() {
  const { cooperativeId } = useParams();
  const [matches, setMatches] = useState([]);
  const [cooperative, setCooperative] = useState(null);
  const [loading, setLoading] = useState(true);
  const [scoreThreshold, setScoreThreshold] = useState(0);

  useEffect(() => {
    fetchMatches();
  }, []);

  const fetchMatches = async () => {
    try {
      const response = await matchApi.getByCooperativeId(cooperativeId);
      setMatches(response.data);
    } catch (error) {
      console.error('Failed to fetch matches:', error);
    } finally {
      setLoading(false);
    }
  };

  const calculateImpact = (match) => {
    // Simulated impact calculation based on match quality
    return Math.floor(match.match_score * 100);
  };

  const getMatchReasons = (reasons) => {
    if (!reasons) return 'Strong alignment with cooperative objectives';
    return reasons.split(';').slice(0, 3).join(', ') + (reasons.split(';').length > 3 ? '...' : '');
  };

  if (loading) {
    return (
      <div className="matches-loading">
        <div className="spinner"></div>
        <p>Calculating matching...</p>
      </div>
    );
  }

  return (
    <div className="matches">
      <div className="matches-header">
        <h1>Matching Results</h1>
        {cooperative && (
          <p>For: {cooperative.name}</p>
        )}
      </div>

      {/* Match Scores */}
      <div className="match-scores">
        <div className="score-info">
          <span className="score-label">Match Score:</span>
          <span className="score-value">0.00 - 1.00</span>
        </div>
        <div className="score-legend">
          <div className="legend-item">
            <div className="legend-color" style={{ background: '#22c55e' }}></div>
            <span>0.6 - 1.0 (Excellent)</span>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ background: '#3b82f6' }}></div>
            <span>0.3 - 0.6 (Good)</span>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ background: '#eab308' }}></div>
            <span>0.0 - 0.3 (Fair)</span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="matches-filters">
        <div className="filter-group">
          <label>Filter by Score:</label>
          <select
            value={scoreThreshold}
            onChange={(e) => setScoreThreshold(parseFloat(e.target.value))}
          >
            <option value="0">All Scores</option>
            <option value="0.5">0.5 and above</option>
            <option value="0.6">0.6 and above</option>
            <option value="0.7">0.7 and above</option>
            <option value="0.8">0.8 and above</option>
          </select>
        </div>
      </div>

      {/* Matches List */}
      <div className="matches-list">
        {matches
          .filter(m => m.match_score >= scoreThreshold)
          .sort((a, b) => b.match_score - a.match_score)
          .map((match) => (
            <div key={match.id} className={`match-card match-${match.match_score.toFixed(2)}`}>
              <div className="match-score-badge">
                {match.match_score.toFixed(2)}
              </div>

              <div className="match-header">
                <div className="match-info">
                  <h3>{match.aid_group_name}</h3>
                  <p className="match-funding-type">{match.funding_type}</p>
                </div>

                {match.match_score >= 0.7 && (
                  <div className="match-recommendation">🎯 Highly Recommended</div>
                )}
              </div>

              <p className="match-description">{match.description}</p>

              <div className="match-amount">
                Available: {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0
                }).format(match.amount_min)}
                {' - '}
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0
                }).format(match.amount_max)}
              </div>

              <div className="match-reasons">
                <strong>Why this match:</strong>
                <p>{getMatchReasons(match.match_reasons)}</p>
              </div>

              <div className="match-impact">
                <strong>Impact Score:</strong>
                <span className="impact-value">{calculateImpact(match)}/100</span>
              </div>

              <div className="match-actions">
                <Link to={`/funding-sources/${match.id}`} className="view-button">
                  View Funding Opportunity
                </Link>
                <Link to={`/applications/create?fundingSource=${match.id}`} className="apply-button">
                  Apply Now
                </Link>
              </div>
            </div>
          ))}
      </div>

      {matches.filter(m => m.match_score >= scoreThreshold).length === 0 && (
        <div className="no-matches">
          <div className="no-matches-icon">🎯</div>
          <p>No matches found for the selected score threshold</p>
          <button onClick={() => setScoreThreshold(0)} className="reset-button">
            View All Matches
          </button>
        </div>
      )}
    </div>
  );
}

export default Matches;
