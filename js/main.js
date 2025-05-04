// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Mobile Menu Toggle
if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.innerHTML = navLinks.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
}

// Property Data (placeholder)
const properties = [
    {
      id: 1,
      title: "Luxury Villa in Beverly Hills",
      price: "$2,450,000",
      address: "Beverly Hills, CA",
      beds: 5,
      baths: 6,
      sqft: 6500,
      type: "house",
      purpose: "buy",
      image: "images/property1.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Modern Apartment in Manhattan",
      price: "$1,250,000",
      address: "New York, NY",
      beds: 3,
      baths: 2,
      sqft: 1800,
      type: "apartment",
      purpose: "buy",
      image: "images/property2.jpg",
      featured: true
    },
    {
      id: 3,
      title: "Downtown Office Space",
      price: "$3,500/month",
      address: "Chicago, IL",
      size: "5000 sq ft",
      type: "commercial",
      purpose: "rent",
      image: "images/property3.jpg",
      featured: true
    },
    {
      id: 4,
      title: "Suburban Family Home",
      price: "$450,000",
      address: "Austin, TX",
      beds: 4,
      baths: 3,
      sqft: 2800,
      type: "house",
      purpose: "buy",
      image: "images/property4.jpg"
    },
    {
      id: 5,
      title: "Retail Space for Lease",
      price: "$8,000/month",
      address: "Miami, FL",
      size: "3500 sq ft",
      type: "commercial",
      purpose: "rent",
      image: "images/property5.jpg"
    },
    {
      id: 6,
      title: "Beachfront Rental",
      price: "$15,000/month",
      address: "Malibu, CA",
      beds: 6,
      baths: 5,
      sqft: 4200,
      type: "house",
      purpose: "rent",
      image: "images/property6.jpg"
    }
  ];

// Render Featured Properties
function renderFeaturedProperties() {
    const featuredContainer = document.querySelector('.featured .properties-grid');
    const listingsContainer = document.querySelector('.listings-grid .properties-grid');
    const similarContainer = document.querySelector('.similar-properties .properties-grid');
    
    const featuredProperties = properties.filter(property => property.featured);
    const allProperties = properties;
    const similarProperties = properties.slice(0, 3); // Just for demo
    
    if (featuredContainer) {
        featuredContainer.innerHTML = featuredProperties.map(property => `
            <div class="property-card">
                <a href="property.html?id=${property.id}">
                    <div class="property-image">
                        <img src="${property.image}" alt="${property.title}">
                    </div>
                    <div class="property-info">
                        <div class="property-price">${property.price}</div>
                        <h3>${property.title}</h3>
                        <div class="property-address">${property.address}</div>
                        <div class="property-features">
                            <span><i class="fas fa-bed"></i> ${property.beds} Beds</span>
                            <span><i class="fas fa-bath"></i> ${property.baths} Baths</span>
                            <span><i class="fas fa-ruler-combined"></i> ${property.sqft} sq ft</span>
                        </div>
                    </div>
                </a>
            </div>
        `).join('');
    }
    
    if (listingsContainer) {
        listingsContainer.innerHTML = allProperties.map(property => `
            <div class="property-card">
                <a href="property.html?id=${property.id}">
                    <div class="property-image">
                        <img src="${property.image}" alt="${property.title}">
                    </div>
                    <div class="property-info">
                        <div class="property-price">${property.price}</div>
                        <h3>${property.title}</h3>
                        <div class="property-address">${property.address}</div>
                        <div class="property-features">
                            <span><i class="fas fa-bed"></i> ${property.beds} Beds</span>
                            <span><i class="fas fa-bath"></i> ${property.baths} Baths</span>
                            <span><i class="fas fa-ruler-combined"></i> ${property.sqft} sq ft</span>
                        </div>
                    </div>
                </a>
            </div>
        `).join('');
    }
    
    if (similarContainer) {
        similarContainer.innerHTML = similarProperties.map(property => `
            <div class="property-card">
                <a href="property.html?id=${property.id}">
                    <div class="property-image">
                        <img src="${property.image}" alt="${property.title}">
                    </div>
                    <div class="property-info">
                        <div class="property-price">${property.price}</div>
                        <h3>${property.title}</h3>
                        <div class="property-address">${property.address}</div>
                        <div class="property-features">
                            <span><i class="fas fa-bed"></i> ${property.beds} Beds</span>
                            <span><i class="fas fa-bath"></i> ${property.baths} Baths</span>
                            <span><i class="fas fa-ruler-combined"></i> ${property.sqft} sq ft</span>
                        </div>
                    </div>
                </a>
            </div>
        `).join('');
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderFeaturedProperties();
    
    // Close mobile menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });
});


// Add these new functions to main.js
function filterProperties(filters) {
    return properties.filter(property => {
      const matchesPurpose = !filters.purpose || property.purpose === filters.purpose;
      const matchesLocation = !filters.location || 
        property.address.toLowerCase().includes(filters.location.toLowerCase());
      const matchesType = !filters.type || property.type === filters.type;
      const matchesPrice = !filters.price || checkPriceRange(property.price, filters.price);
      
      return matchesPurpose && matchesLocation && matchesType && matchesPrice;
    });
  }
  
  function checkPriceRange(propertyPrice, range) {
    const priceNum = parseInt(propertyPrice.replace(/[^\d]/g, ''));
    
    switch(range) {
      case '100k': return priceNum < 200000;
      case '200k': return priceNum >= 200000 && priceNum < 300000;
      case '300k': return priceNum >= 300000;
      default: return true;
    }
  }
  
  function setupSearchTabs() {
    const tabs = document.querySelectorAll('.search-tabs button');
    tabs.forEach(tab => {
      tab.addEventListener('click', function() {
        tabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        const filters = {
          purpose: this.dataset.purpose,
          location: document.querySelector('input[name="location"]').value,
          type: document.querySelector('select[name="type"]').value,
          price: document.querySelector('select[name="price"]').value
        };
        
        const filtered = filterProperties(filters);
        renderProperties(filtered);
      });
    });
  }
  
  function setupSearchForm() {
    const form = document.querySelector('.search-fields');
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const filters = {
          purpose: document.querySelector('.search-tabs button.active').dataset.purpose,
          location: this.querySelector('input[name="location"]').value,
          type: this.querySelector('select[name="type"]').value,
          price: this.querySelector('select[name="price"]').value
        };
        
        const filtered = filterProperties(filters);
        renderProperties(filtered);
      });
    }
  }
  
  // Update the DOMContentLoaded event listener
  document.addEventListener('DOMContentLoaded', () => {
    renderFeaturedProperties();
    setupSearchTabs();
    setupSearchForm();
    
    // ... keep existing mobile menu code ...
  });