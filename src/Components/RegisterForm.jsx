import React, { useState } from 'react';
import { supabase } from '../lib/supabase'; // 👈 Src/lib folder ka exact verified path
import '../App.css';

function RegisterForm({ onRegisterSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    blood_group: 'A+',
    city: 'Faisalabad',
    phone_number: '',
    last_donation_date: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      // 📍 Aapki table ka naam humne 'donord' handle kiya hai local testing ke liye
      const { data, error } = await supabase
        .from('donor') 
        .insert([
          {
            name: formData.name,
            blood_group: formData.blood_group,
            city: formData.city,
            phone_number: formData.phone_number,
            last_donation_date: formData.last_donation_date || null
          }
        ]);

      if (error) throw error;

      setMessage('🎉 Successfully Registered as a Donor!');
      setFormData({
        name: '',
        blood_group: 'A+',
        city: 'Faisalabad',
        phone_number: '',
        last_donation_date: ''
      });
      
      if (onRegisterSuccess) onRegisterSuccess(); 
    } catch (error) {
      console.error(error);
      setMessage('❌ Registration failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="register-section" id="register">
      <div className="register-container">
        <h2 className="register-title">Register as a Blood Donor</h2>
        <p className="register-subtitle">Your small effort can save a precious life.</p>
        
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-grid">
            <div className="form-group">
              <label>Full Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label>Blood Group</label>
              <select name="blood_group" value={formData.blood_group} onChange={handleChange}>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>

            <div className="form-group">
              <label>City</label>
              <select name="city" value={formData.city} onChange={handleChange}>
                <option value="Faisalabad">Faisalabad</option>
                <option value="Lahore">Lahore</option>
                <option value="Karachi">Karachi</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Multan">Multan</option>
                <option value="Rawalpindi">Rawalpindi</option>
              </select>
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input 
                type="tel" 
                name="phone_number" 
                value={formData.phone_number} 
                onChange={handleChange} 
                required 
                placeholder="e.g. 03001234567"
              />
            </div>

            <div className="form-group full-width">
              <label>Last Donation Date (Optional)</label>
              <input 
                type="date" 
                name="last_donation_date" 
                value={formData.last_donation_date} 
                onChange={handleChange} 
              />
            </div>
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Registering...' : 'Register Now'}
          </button>
        </form>

        {message && <p className="form-message">{message}</p>}
      </div>
    </section>
  );
}

export default RegisterForm;