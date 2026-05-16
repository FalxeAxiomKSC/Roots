import React from 'react';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-hero">
        <div className="landing-content">
          <h1 className="landing-title">
            <span className="title-highlight">Sustainable</span>
            <br />
            <span className="title-main">Funding</span>
            <br />
            <span className="title-emoji">🌱</span>
          </h1>
          <p className="landing-subtitle">
            Connect cooperatives with funding opportunities. Build intentional communities. Create lasting impact.
          </p>
          <div className="landing-buttons">
            <button className="primary-button">
              Get Started
            </button>
            <button className="secondary-button">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="landing-features">
        <h2>How It Works</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🏢</div>
            <h3>Create Your Profile</h3>
            <p>Describe your cooperative and funding needs</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Get Matched</h3>
            <p>Our AI finds perfect funding opportunities</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📝</div>
            <h3>Apply & Track</h3>
            <p>Submit applications and monitor progress</p>
          </div>
        </div>
      </div>

      <div className="landing-stats">
        <div className="stat-item">
          <div className="stat-number">100+</div>
          <div className="stat-label">Funding Sources</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">500+</div>
          <div className="stat-label">Cooperatives</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">95%</div>
          <div className="stat-label">Match Accuracy</div>
        </div>
      </div>

      <div className="landing-sustainability">
        <h2>Sustainability Features</h2>
        <div className="sustainability-features">
          <div className="sustainability-feature">
            <div className="feature-details">
              <h3>🌱 Carbon-Aware Hosting</h3>
              <p>System automatically runs during low-carbon electricity periods to minimize environmental impact</p>
            </div>
          </div>
          <div className="sustainability-feature">
            <div className="feature-details">
              <h3>🔄 Circular Economy</h3>
              <p>Resource sharing between communities enables sustainable resource management</p>
            </div>
          </div>
          <div className="sustainability-feature">
            <div className="feature-details">
              <h3>📊 Impact Tracking</h3>
              <p>Measure real-world environmental and community impact of funded projects</p>
            </div>
          </div>
          <div className="sustainability-feature">
            <div className="feature-details">
              <h3>⚡ Energy Efficiency</h3>
              <p>Optimized infrastructure and caching reduce compute power consumption</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
