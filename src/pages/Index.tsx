
import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, Shield, Skull, Target, Check } from 'lucide-react';

const Index = () => {
  const [activeWeapon, setActiveWeapon] = useState('POOLCUEX');
  const [activeSkin, setActiveSkin] = useState('WEAPON WRENCH LV1');
  const [effectsEnabled, setEffectsEnabled] = useState(true);
  
  useEffect(() => {
    // A simple animation for the weapon selection to simulate a game interface
    const timeout = setTimeout(() => {
      document.querySelectorAll('.weapon-item, .skin-item').forEach(el => {
        el.classList.add('visible');
      });
    }, 100);
    
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="game-container">
      <div className="top-header">
        <div className="logo">
          <div className="logo-icon">HF</div>
          <div className="title">
            <h1>CHANGE SKINS</h1>
            <p>Change weapon skins</p>
          </div>
        </div>
        
        <div className="weapon-select">
          <div className="weapon-select-text">
            <p>WEAPON SELECT</p>
            <p>POOLCUEX</p>
          </div>
          <div className="weapon-icon">
            <img src="/placeholder.svg" alt="Weapon" width="20" height="20" />
          </div>
        </div>
        
        <div className="account-icon">A</div>
      </div>
      
      <div className="main-content">
        <div className="weapons-list">
          <div className="dropdown-select">
            <p>ALL Weapons</p>
            <ChevronDown size={16} />
          </div>
          
          <div className={`weapon-item ${activeWeapon === 'REVOLVER' ? 'active' : ''}`} onClick={() => setActiveWeapon('REVOLVER')}>
            <div className="weapon-item-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 16.5l-7-3.5 7-3.5M14 7.5l7 3.5-7 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="weapon-item-details">
              <p>Weapon Skin</p>
              <p>REVOLVER MK2</p>
            </div>
          </div>
          
          <div className={`weapon-item ${activeWeapon === 'POOLCUEX' ? 'active' : ''}`} onClick={() => setActiveWeapon('POOLCUEX')}>
            <div className="weapon-item-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4h16v16H4z" stroke="#0a98e8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="weapon-item-details">
              <p>Weapon Skin</p>
              <p>POOLCUEX</p>
            </div>
          </div>
          
          <div className={`weapon-item ${activeWeapon === 'POOLCUEX2' ? 'active' : ''}`} onClick={() => setActiveWeapon('POOLCUEX2')}>
            <div className="weapon-item-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4h16v16H4z" stroke="#0a98e8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="weapon-item-details">
              <p>Weapon Skin</p>
              <p>POOLCUEX</p>
            </div>
          </div>
          
          <div className={`weapon-item ${activeWeapon === 'KNUCKLE' ? 'active' : ''}`} onClick={() => setActiveWeapon('KNUCKLE')}>
            <div className="weapon-item-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="8" stroke="#ffa53d" strokeWidth="1.5"/>
              </svg>
            </div>
            <div className="weapon-item-details">
              <p>Weapon Skin</p>
              <p>KNUCKLE</p>
            </div>
          </div>
          
          <div className={`weapon-item ${activeWeapon === 'DAGGERFX' ? 'active' : ''}`} onClick={() => setActiveWeapon('DAGGERFX')}>
            <div className="weapon-item-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4v16M7 9l5-5 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="weapon-item-details">
              <p>Weapon Skin</p>
              <p>DAGGERFX</p>
            </div>
          </div>
          
          <div className={`weapon-item ${activeWeapon === 'KNIFE' ? 'active' : ''}`} onClick={() => setActiveWeapon('KNIFE')}>
            <div className="weapon-item-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 21l9-9M5 3l7 7-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="weapon-item-details">
              <p>Weapon Skin</p>
              <p>KNIFE</p>
            </div>
          </div>
          
          {[...Array(6)].map((_, index) => (
            <div className="empty-slot" key={index}>Empty</div>
          ))}
        </div>
        
        <div className="weapon-display">
          <div className="weapon-image-container">
            <div className="weapon-image-bg"></div>
            <img 
              src="/lovable-uploads/0c82f783-e5fa-4756-b6a8-60574b7aaa6a.png" 
              alt="Wrench weapon" 
              className="weapon-image"
            />
          </div>
          
          <div className="weapon-name">WEAPON WRENCH LV1</div>
          
          <div className="info-section">
            <div className="info-header">
              <div className="info-dot"></div>
              <p>INFORMATION</p>
            </div>
            <div className="info-content">
              This is a wrench for both delicate and strong damage. It is a weapon with strong damage and beautiful skin effects.
            </div>
          </div>
          
          <div className="stats">
            <div className="stat-item">
              <div className="stat-icon active">
                <Shield size={20} color="#ff6464" />
              </div>
              <p className="stat-percentage">100.0%</p>
              <p className="stat-label">Defense</p>
            </div>
            
            <div className="stat-item">
              <div className="stat-icon inactive">
                <Skull size={20} color="rgba(255, 255, 255, 0.6)" />
              </div>
              <p className="stat-percentage">50.0%</p>
              <p className="stat-label">Damage</p>
            </div>
            
            <div className="stat-item">
              <div className="stat-icon inactive">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2v20M17 4l-5-2-5 2" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="stat-percentage">20.0%</p>
              <p className="stat-label">Attack</p>
            </div>
            
            <div className="stat-item">
              <div className="stat-icon inactive">
                <Target size={20} color="rgba(255, 255, 255, 0.6)" />
              </div>
              <p className="stat-percentage">0.0%</p>
              <p className="stat-label">Accuracy</p>
            </div>
          </div>
        </div>
        
        <div className="skins-list">
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search weapon skins" 
              className="search-input"
            />
            <Search size={18} className="search-icon" />
          </div>
          
          <div className={`skin-item ${activeSkin === 'POOLCUEX (Default)' ? 'active' : ''}`} onClick={() => setActiveSkin('POOLCUEX (Default)')}>
            <div className="skin-item-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4" width="16" height="16" rx="2" stroke="#ffa53d" strokeWidth="1.5"/>
              </svg>
            </div>
            <div className="skin-item-details">
              <p className="skin-item-name">POOLCUEX (Default)</p>
              <div className="skin-item-status">
                <span className="status-dot default"></span>
                <p className="status-text default">Default skin</p>
              </div>
            </div>
          </div>
          
          <div className={`skin-item ${activeSkin === 'WEAPON WRENCH LV1' ? 'active' : ''}`} onClick={() => setActiveSkin('WEAPON WRENCH LV1')}>
            <div className="skin-item-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="#46e637" strokeWidth="1.5"/>
              </svg>
            </div>
            <div className="skin-item-details">
              <p className="skin-item-name">WEAPON WRENCH LV1</p>
              <div className="skin-item-status">
                <span className="status-dot equipped"></span>
                <p className="status-text equipped">Equipped</p>
              </div>
            </div>
          </div>
          
          <div className={`skin-item ${activeSkin === 'WEAPON WRENCH V2' ? 'active' : ''}`} onClick={() => setActiveSkin('WEAPON WRENCH V2')}>
            <div className="skin-item-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="#38a1ff" strokeWidth="1.5"/>
              </svg>
            </div>
            <div className="skin-item-details">
              <p className="skin-item-name">WEAPON WRENCH V2</p>
              <div className="skin-item-status">
                <span className="status-dot ready"></span>
                <p className="status-text ready">Ready to use</p>
              </div>
            </div>
          </div>
          
          <div className={`skin-item ${activeSkin === 'WEAPON WRENCH V3' ? 'active' : ''}`} onClick={() => setActiveSkin('WEAPON WRENCH V3')}>
            <div className="skin-item-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="#ff5555" strokeWidth="1.5"/>
              </svg>
            </div>
            <div className="skin-item-details">
              <p className="skin-item-name">WEAPON WRENCH V3</p>
              <div className="skin-item-status">
                <span className="status-dot unavailable"></span>
                <p className="status-text unavailable">Not available</p>
              </div>
            </div>
          </div>
          
          {[...Array(7)].map((_, index) => (
            <div className="empty-slot" key={index}>Empty</div>
          ))}
        </div>
      </div>
      
      <div className="footer">
        <div className="footer-left">Action button for changing weapons</div>
        
        <div className="effects-toggle">
          <p>Try effects</p>
          <div 
            className={`toggle-track ${effectsEnabled ? 'active' : ''}`}
            onClick={() => setEffectsEnabled(!effectsEnabled)}
          >
            <div className="toggle-thumb"></div>
          </div>
        </div>
        
        <button className="confirm-button">
          <span>Confirm</span>
          <div className="confirm-button-icon">
            <Check size={14} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Index;
