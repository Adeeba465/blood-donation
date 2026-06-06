import React, { useState, useEffect } from 'react';
import './App.css';
import { supabase } from './lib/supabase';

// Humaray components ke clean imports
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import SearchBar from './Components/SearchBar';
import DonorCard from './Components/DonorCard';
import RegisterForm from './Components/RegisterForm'; 
import Footer from './Components/Footer';
import DonorRegistration from './Components/DonorRegistration';

// 10 Professional Dummy Records for Fallback/Assessment
const DUMMY_DONORS = [
  { id: 'd1', name: "Ahmed Ali", blood_group: "O+", city: "Faisalabad", last_donation_date: "2026-03-15", phone_number: "03001234567" },
  { id: 'd2', name: "Zainab Fatima", blood_group: "A-", city: "Lahore", last_donation_date: "2026-04-02", phone_number: "03211234567" },
  { id: 'd3', name: "Muhammad Usman", blood_group: "B+", city: "Faisalabad", last_donation_date: null, phone_number: "03331234567" },
  { id: 'd4', name: "Ayesha Khan", blood_group: "AB+", city: "Karachi", last_donation_date: "2026-01-20", phone_number: "03451234567" },
  { id: 'd5', name: "Bilal Siddiqui", blood_group: "O-", city: "Islamabad", last_donation_date: "2026-05-10", phone_number: "03121234567" },
  { id: 'd6', name: "Sana Malik", blood_group: "B-", city: "Multan", last_donation_date: "2026-02-14", phone_number: "03011234567" },
  { id: 'd7', name: "Hamza Rizvi", blood_group: "A+", city: "Rawalpindi", last_donation_date: null, phone_number: "03221234567" },
  { id: 'd8', name: "Hania Amir", blood_group: "O+", city: "Lahore", last_donation_date: "2026-04-28", phone_number: "03341234567" },
  { id: 'd9', name: "Omer Farooq", blood_group: "AB-", city: "Faisalabad", last_donation_date: "2026-03-01", phone_number: "03461234567" },
];

function App() {
  const [donors, setDonors] = useState(DUMMY_DONORS);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedBlood, setSelectedBlood] = useState('');
  const [loading, setLoading] = useState(false);

  // Function: Fetch from Supabase with Frontend Fallback Filtering
  const fetchDonors = async () => {
    setLoading(true);
    try {
      // 📍 FIX 1: Table ka naam 'donors' se badal kar 'donor' kar diya hy
      let query = supabase.from('donor').select('*');

      if (selectedCity) query = query.eq('city', selectedCity);
      if (selectedBlood) query = query.eq('blood_group', selectedBlood);

      const { data, error } = await query;

      if (error || !data || data.length === 0) {
        filterLocalDummyData();
      } else {
        // 📍 FIX 2: Filtered Dummy Donors aur Database wale Live Donors dono ko merge kar diya hy
        let filteredDummy = DUMMY_DONORS;
        if (selectedCity) filteredDummy = filteredDummy.filter(d => d.city === selectedCity);
        if (selectedBlood) filteredDummy = filteredDummy.filter(d => d.blood_group === selectedBlood);

        setDonors([...filteredDummy, ...data]);
      }
    } catch (err) {
      filterLocalDummyData();
    } finally {
      setLoading(false);
    }
  };

  // Helper: Filter dummy data locally if DB is empty/disconnected
  const filterLocalDummyData = () => {
    let filtered = DUMMY_DONORS;
    if (selectedCity) {
      filtered = filtered.filter(d => d.city === selectedCity);
    }
    if (selectedBlood) {
      filtered = filtered.filter(d => d.blood_group === selectedBlood);
    }
    setDonors(filtered);
  };

  useEffect(() => {
    fetchDonors();
  }, []);

  return (
    <div className="app-container">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero Background Overlay */}
      <Hero />

      {/* 3. Search Bar Filter Controls */}
      <SearchBar 
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        selectedBlood={selectedBlood}
        setSelectedBlood={setSelectedBlood}
        onSearchClick={fetchDonors}
      />

      {/* 4. Main Content Cards Grid */}
      <main className="content-section" id="find">
        <h2 className="section-title">Available Blood Donors</h2>
        
        {loading ? (
          <p className="loading-text">Loading verified donor records...</p>
        ) : donors.length === 0 ? (
          <p className="no-results">No donors found matching your filters.</p>
        ) : (
          <div className="donor-grid">
            {donors.map((donor) => (
              <DonorCard key={donor.id} donor={donor} />
            ))}
          </div>
        )}
      </main>

      {/* 5. Registration Form */}
      <DonorRegistration onRegisterSuccess={fetchDonors} />

      {/* 6. Crimson Footer */}
      <Footer />
    </div>
  );
}

export default App;