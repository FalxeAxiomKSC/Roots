-- Sustainability infrastructure additions to the Roots schema

-- Circular economy: resource sharing between communities
CREATE TABLE IF NOT EXISTS shared_resources (
    id SERIAL PRIMARY KEY,
    community_id INTEGER REFERENCES intentional_communities(id) ON DELETE CASCADE,
    resource_type VARCHAR(100) NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    availability_status VARCHAR(50) DEFAULT 'available',
    quantity_available INTEGER DEFAULT 1,
    sharing_terms TEXT,
    contact_info VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Impact tracking: measure the real effect of funded projects
CREATE TABLE IF NOT EXISTS impact_metrics (
    id SERIAL PRIMARY KEY,
    cooperative_id INTEGER REFERENCES cooperatives(id) ON DELETE CASCADE,
    community_id INTEGER REFERENCES intentional_communities(id) ON DELETE SET NULL,
    metric_type VARCHAR(100) NOT NULL,
    metric_value DECIMAL(15,2),
    unit VARCHAR(50),
    measurement_date DATE NOT NULL,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Audit log for data retention compliance
CREATE TABLE IF NOT EXISTS data_audit_log (
    id SERIAL PRIMARY KEY,
    action VARCHAR(50) NOT NULL,
    table_name VARCHAR(100) NOT NULL,
    records_affected INTEGER,
    performed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    performed_by VARCHAR(100) DEFAULT 'system'
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_shared_resources_community ON shared_resources(community_id);
CREATE INDEX IF NOT EXISTS idx_shared_resources_type ON shared_resources(resource_type);
CREATE INDEX IF NOT EXISTS idx_shared_resources_status ON shared_resources(availability_status);
CREATE INDEX IF NOT EXISTS idx_impact_metrics_cooperative ON impact_metrics(cooperative_id);
CREATE INDEX IF NOT EXISTS idx_impact_metrics_type ON impact_metrics(metric_type);
CREATE INDEX IF NOT EXISTS idx_impact_metrics_date ON impact_metrics(measurement_date);
CREATE INDEX IF NOT EXISTS idx_data_audit_action ON data_audit_log(action);
CREATE INDEX IF NOT EXISTS idx_data_audit_date ON data_audit_log(performed_at);

-- Updated at triggers
CREATE TRIGGER update_shared_resources_updated_at BEFORE UPDATE ON shared_resources
    FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_impact_metrics_updated_at BEFORE UPDATE ON impact_metrics
    FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

-- Retention policy view
CREATE OR REPLACE VIEW retention_dashboard AS
SELECT
    'applications' AS table_name,
    COUNT(*) AS total_rows,
    COUNT(*) FILTER (WHERE status = 'draft') AS draft_count,
    COUNT(*) FILTER (WHERE applied_at < NOW() - INTERVAL '1 day' AND status = 'draft') AS expired_drafts,
    MIN(applied_at) AS oldest_record,
    MAX(applied_at) AS newest_record
FROM applications
UNION ALL
SELECT
    'matches',
    COUNT(*),
    COUNT(*) FILTER (WHERE is_notified = true),
    NULL,
    MIN(created_at),
    MAX(created_at)
FROM matches;
