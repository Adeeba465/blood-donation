import React from 'react';
import '../App.css';

const DonorCard = ({ donor }) => {
  // Helper to safely format dates if available
  const formatDate = (dateString) => {
    if (!dateString) return 'Never / Available';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="donor-card">
      {/* Light pink top section displaying core profile context */}
      <div className="card-inside">
        <div className="card-header-row">
          <h3 className="donor-name">{donor.name}</h3>
          <span className="blood-badge">{donor.blood_group}</span>
        </div>
        
        <p className="donor-meta">📍 <strong>City:</strong> {donor.city}</p>
        <p className="donor-meta text-muted">
          📅 <strong>Last Donated:</strong> {formatDate(donor.last_donation_date)}
        </p>
      </div>
      
      {/* Deep Red / Crimson Bottom Section for instant utility */}
      <div className="card-bottom">
        <span className="status-label">Active Donor</span>
        <a href={`tel:${donor.phone_number}`} className="call-btn">
          📞 Call Now
        </a>
      </div>
    </div>
  );
};

export default DonorCard;