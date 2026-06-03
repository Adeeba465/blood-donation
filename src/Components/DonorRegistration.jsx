// components/DonorRegistration.jsx
import React, { useState } from 'react';

const DonorRegistration = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [city, setCity] = useState('');
  const [contact, setContact] = useState('');

  const pakistanCities = ['Faisalabad', 'Lahore', 'Karachi', 'Islamabad', 'Rawalpindi', 'Multan', 'Peshawar', 'Quetta', 'Sialkot'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && bloodGroup && city) {
      if (onRegister) {
        onRegister({ name, bloodGroup, city, contact });
      }
      setName(''); setBloodGroup(''); setCity(''); setContact('');
      alert('Success! You are now registered as a lifesaver donor.');
    }
  };

  const styles = {
    section: {
      backgroundColor: '#f8fafc',
      padding: '60px 20px',
      borderTop: '1px solid #e2e8f0',
    },
    card: {
      backgroundColor: '#ffffff',
      maxWidth: '550px',
      margin: '0 auto',
      padding: '40px 30px',
      borderRadius: '16px',
      border: '1px solid #e2e8f0',
      boxShadow: '0 10px 25px -5px rgba(0,0,0,0.02)'
    },
    heading: {
      fontSize: '1.5rem',
      fontWeight: '800',
      color: '#0f172a',
      marginBottom: '8px',
      textAlign: 'center'
    },
    sub: {
      fontSize: '0.9rem',
      color: '#64748b',
      textAlign: 'center',
      marginBottom: '30px'
    },
    group: {
      marginBottom: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    },
    label: {
      fontSize: '0.85rem',
      fontWeight: '700',
      color: '#475569'
    },
    input: {
      padding: '12px 14px',
      borderRadius: '8px',
      border: '1px solid #cbd5e1',
      fontSize: '0.95rem',
      outline: 'none',
      backgroundColor: '#ffffff'
    },
    btn: {
      backgroundColor: '#10b981',
      color: '#ffffff',
      padding: '14px',
      borderRadius: '8px',
      fontWeight: '700',
      border: 'none',
      width: '100%',
      cursor: 'pointer',
      fontSize: '1rem',
      marginTop: '10px',
      boxShadow: '0 4px 12px rgba(16, 185, 129, 0.15)'
    }
  };

  return (
    <div id="registration-section" style={styles.section}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Register as a Donor</h2>
        <p style={styles.sub}></p>
        <form onSubmit={handleSubmit}>
          <div style={styles.group}>
            <label style={styles.label}>Full Name</label>
            <input type="text" required style={styles.input} placeholder="e.g. Adeeba Ashraf" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div style={styles.group}>
            <label style={styles.label}>Blood Group</label>
            <select required style={styles.input} value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)}>
              <option value="">Select</option>
              {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div style={styles.group}>
            <label style={styles.label}>City</label>
            <select required style={styles.input} value={city} onChange={(e) => setCity(e.target.value)}>
              <option value="">Select City</option>
              {pakistanCities.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div style={styles.group}>
            <label style={styles.label}>Contact Number / WhatsApp</label>
            <input type="tel" style={styles.input} placeholder="e.g. 03001234567" value={contact} onChange={(e) => setContact(e.target.value)} />
          </div>
          <button type="submit" style={styles.btn}>❤️ Complete Registration</button>
        </form>
      </div>
    </div>
  );
};

export default DonorRegistration;