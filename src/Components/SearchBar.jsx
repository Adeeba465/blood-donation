import React from 'react';
import '../App.css';

const SearchBar = ({ 
  selectedCity, 
  setSelectedCity, 
  selectedBlood, 
  setSelectedBlood, 
  onSearchClick 
}) => {
  // Common lists for verification filtering
  const cities = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Multan", "Rawalpindi"];
  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  return (
    <div className="search-container">
      <div className="search-card">
        
        {/* City Filter Dropdown */}
        <div className="form-group">
          <label htmlFor="city-select">Filter by City</label>
          <select 
            id="city-select"
            value={selectedCity} 
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="">All Cities</option>
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        {/* Blood Group Filter Dropdown */}
        <div className="form-group">
          <label htmlFor="blood-select">Blood Group</label>
          <select 
            id="blood-select"
            value={selectedBlood} 
            onChange={(e) => setSelectedBlood(e.target.value)}
          >
            <option value="">All Groups</option>
            {bloodGroups.map(bg => (
              <option key={bg} value={bg}>{bg}</option>
            ))}
          </select>
        </div>

        {/* Action Button */}
        <button className="search-btn" onClick={onSearchClick}>
          🔍 Search Donors
        </button>
        
      </div>
    </div>
  );
};

export default SearchBar;