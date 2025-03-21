
document.addEventListener('DOMContentLoaded', function() {
  // Elements
  const weaponItems = document.querySelectorAll('.weapon-item');
  const skinItems = document.querySelectorAll('.skin-item');
  const toggleTrack = document.querySelector('.toggle-track');
  const confirmButton = document.querySelector('.confirm-button');
  const searchInput = document.querySelector('.search-input');
  const dropdownSelect = document.querySelector('.dropdown-select');
  const weaponImageContainer = document.querySelector('.weapon-image-container');
  const weaponName = document.querySelector('.weapon-name');
  const infoContent = document.querySelector('.info-content');
  
  // Stats data for different skins
  const weaponStats = {
    'WEAPON WRENCH LV1': {
      defense: '100.0%',
      damage: '50.0%',
      attack: '20.0%',
      accuracy: '0.0%',
      description: 'This is a wrench for both delicate and strong damage. It is a weapon with strong damage and beautiful skin effects.'
    },
    'WEAPON WRENCH V2': {
      defense: '80.0%',
      damage: '70.0%',
      attack: '30.0%',
      accuracy: '10.0%',
      description: 'An upgraded version of the wrench with improved damage and attack capabilities.'
    },
    'WEAPON WRENCH V3': {
      defense: '60.0%',
      damage: '90.0%',
      attack: '40.0%',
      accuracy: '20.0%',
      description: 'The ultimate wrench weapon with maximum damage potential but reduced defense.'
    },
    'POOLCUEX (Default)': {
      defense: '70.0%',
      damage: '60.0%',
      attack: '60.0%',
      accuracy: '30.0%',
      description: 'Standard poolcue with balanced stats. A reliable weapon for beginners.'
    }
  };
  
  // Initialize weapon hover effect
  initWeaponHover();
  
  // Weapon selection
  weaponItems.forEach(item => {
    item.addEventListener('click', function() {
      // Remove active class from all weapon items
      weaponItems.forEach(el => el.classList.remove('active'));
      
      // Add active class to clicked item
      this.classList.add('active');
      
      // Update weapon display (in a real game, would load the appropriate weapon model)
      const weaponType = this.getAttribute('data-weapon');
      console.log(`Selected weapon: ${weaponType}`);
      
      // Play selection sound effect (simulated)
      playSound('select');
    });
  });
  
  // Skin selection
  skinItems.forEach(item => {
    item.addEventListener('click', function() {
      // Remove active class from all skin items
      skinItems.forEach(el => el.classList.remove('active'));
      
      // Add active class to clicked item
      this.classList.add('active');
      
      // Update weapon display with selected skin
      const skinName = this.getAttribute('data-skin');
      weaponName.textContent = skinName;
      
      // Update stats based on selected skin
      if (weaponStats[skinName]) {
        updateWeaponStats(skinName);
      }
      
      // Play selection sound effect (simulated)
      playSound('select');
      
      // Add a visual feedback effect to the weapon image
      weaponImageContainer.classList.add('effect-flash');
      setTimeout(() => {
        weaponImageContainer.classList.remove('effect-flash');
      }, 300);
    });
  });
  
  // Toggle effects
  toggleTrack.addEventListener('click', function() {
    this.classList.toggle('active');
    
    // Play toggle sound (simulated)
    playSound('toggle');
    
    // In a real game, would enable/disable particle effects
    const effectsEnabled = this.classList.contains('active');
    console.log(`Effects ${effectsEnabled ? 'enabled' : 'disabled'}`);
    
    // Visual feedback on the weapon display
    if (effectsEnabled) {
      weaponImageContainer.style.animation = 'pulse 3s ease-in-out infinite';
    } else {
      weaponImageContainer.style.animation = 'none';
    }
  });
  
  // Confirm button
  confirmButton.addEventListener('click', function() {
    // Add click animation
    this.classList.add('clicked');
    
    // Play confirmation sound (simulated)
    playSound('confirm');
    
    // In a real game, would save the selected skin and return to the game
    const selectedSkin = document.querySelector('.skin-item.active').getAttribute('data-skin');
    console.log(`Confirmed selection: ${selectedSkin}`);
    
    // Show a temporary "Saved" message
    const originalText = this.querySelector('span').textContent;
    this.querySelector('span').textContent = 'Saved!';
    
    // Reset the button after a short delay
    setTimeout(() => {
      this.classList.remove('clicked');
      this.querySelector('span').textContent = originalText;
    }, 1000);
  });
  
  // Search functionality
  searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    
    skinItems.forEach(item => {
      const skinName = item.querySelector('.skin-item-name').textContent.toLowerCase();
      if (skinName.includes(searchTerm)) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  });
  
  // Dropdown functionality (simplified)
  dropdownSelect.addEventListener('click', function() {
    // In a real game, would open a dropdown with weapon categories
    console.log('Dropdown clicked');
    this.classList.toggle('active');
    
    // Play UI sound effect (simulated)
    playSound('click');
  });
  
  // Function to update weapon stats on the UI
  function updateWeaponStats(skinName) {
    const stats = weaponStats[skinName];
    document.querySelector('.stats .stat-item:nth-child(1) .stat-percentage').textContent = stats.defense;
    document.querySelector('.stats .stat-item:nth-child(2) .stat-percentage').textContent = stats.damage;
    document.querySelector('.stats .stat-item:nth-child(3) .stat-percentage').textContent = stats.attack;
    document.querySelector('.stats .stat-item:nth-child(4) .stat-percentage').textContent = stats.accuracy;
    infoContent.textContent = stats.description;
    
    // Highlight the stat with the highest value
    const statItems = document.querySelectorAll('.stat-icon');
    statItems.forEach(item => item.classList.remove('active'));
    
    // Find the highest stat
    const statValues = [
      { index: 0, value: parseFloat(stats.defense) },
      { index: 1, value: parseFloat(stats.damage) },
      { index: 2, value: parseFloat(stats.attack) },
      { index: 3, value: parseFloat(stats.accuracy) }
    ];
    
    const highestStat = statValues.reduce((prev, current) => 
      (prev.value > current.value) ? prev : current
    );
    
    statItems[highestStat.index].classList.add('active');
  }
  
  // Simulate sound effects (in a real game, would use actual sound files)
  function playSound(type) {
    console.log(`Playing sound: ${type}`);
    // In a real implementation, would play actual sound files
    // For example: new Audio('/sounds/${type}.mp3').play();
  }
  
  // Add hover effect for weapon image
  function initWeaponHover() {
    weaponImageContainer.addEventListener('mousemove', function(e) {
      const boundingRect = this.getBoundingClientRect();
      const x = (e.clientX - boundingRect.left) / boundingRect.width - 0.5;
      const y = (e.clientY - boundingRect.top) / boundingRect.height - 0.5;
      
      // Subtle tilt effect based on mouse position
      const image = this.querySelector('.weapon-image');
      image.style.transform = `rotate(30deg) perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
    });
    
    weaponImageContainer.addEventListener('mouseleave', function() {
      // Reset position when mouse leaves
      const image = this.querySelector('.weapon-image');
      image.style.transform = 'rotate(30deg)';
    });
  }
  
  // Add extra visual effect for the game-like experience
  function addGameEffects() {
    // Create a subtle glow effect on the page
    const container = document.createElement('div');
    container.classList.add('ambient-light');
    document.body.appendChild(container);
    
    // Randomly create "particles" to simulate a game environment
    setInterval(() => {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.opacity = Math.random() * 0.3 + 0.1;
      particle.style.animationDuration = `${Math.random() * 2 + 1}s`;
      
      container.appendChild(particle);
      
      // Remove the particle after animation completes
      setTimeout(() => {
        particle.remove();
      }, 3000);
    }, 200);
  }
  
  // Initialize game effects
  addGameEffects();
  
  // Add CSS for additional effects
  const style = document.createElement('style');
  style.textContent = `
    .effect-flash {
      animation: flash 0.3s ease-out !important;
    }
    
    @keyframes flash {
      0% { filter: brightness(1); }
      50% { filter: brightness(1.5); }
      100% { filter: brightness(1); }
    }
    
    .ambient-light {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: -1;
    }
    
    .particle {
      position: absolute;
      width: 3px;
      height: 3px;
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      pointer-events: none;
      animation: float 2s linear infinite;
    }
    
    @keyframes float {
      0% { transform: translateY(0); opacity: 0; }
      50% { opacity: 0.5; }
      100% { transform: translateY(-20px); opacity: 0; }
    }
    
    .clicked {
      transform: scale(0.95);
    }
  `;
  document.head.appendChild(style);
});
