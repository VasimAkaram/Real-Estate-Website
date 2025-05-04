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
        type: "House",
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
        type: "Apartment",
        image: "images/property2.jpg",
        featured: true
    },
    {
        id: 3,
        title: "Waterfront Condo in Miami",
        price: "$950,000",
        address: "Miami, FL",
        beds: 2,
        baths: 2,
        sqft: 1500,
        type: "Condo",
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
        type: "House",
        image: "images/property4.jpg",
        featured: false
    },
    {
        id: 5,
        title: "Downtown Loft",
        price: "$750,000",
        address: "Chicago, IL",
        beds: 2,
        baths: 1,
        sqft: 1200,
        type: "Condo",
        image: "images/property5.jpg",
        featured: false
    },
    {
        id: 6,
        title: "Beachfront Property",
        price: "$3,200,000",
        address: "Malibu, CA",
        beds: 6,
        baths: 5,
        sqft: 4200,
        type: "House",
        image: "images/property6.jpg",
        featured: false
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