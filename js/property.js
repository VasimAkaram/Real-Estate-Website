// Property Details Page
document.addEventListener('DOMContentLoaded', () => {
    // Get property ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const propertyId = urlParams.get('id');
    
    // Find the property in our data
    const property = properties.find(p => p.id === parseInt(propertyId));
    
    if (property && document.querySelector('.property-header')) {
        // Update property details
        document.querySelector('.property-header h1').textContent = property.title;
        document.querySelector('.property-price').textContent = property.price;
        
        // Update main image
        document.getElementById('main-image').src = property.image;
        document.getElementById('main-image').alt = property.title;
        
        // Update thumbnails (for demo, we're using the same image)
        const thumbnails = document.querySelectorAll('.thumbnail');
        thumbnails.forEach(thumb => {
            thumb.src = property.image;
            thumb.alt = property.title + ' thumbnail';
        });
        
        // Thumbnail click event
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function() {
                // Remove active class from all thumbnails
                thumbnails.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked thumbnail
                this.classList.add('active');
                
                // Update main image
                document.getElementById('main-image').src = this.src;
            });
        });
    }
    
    // Contact Agent Button
    const contactBtn = document.querySelector('.agent-card .btn');
    if (contactBtn) {
        contactBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Thank you for your interest! An agent will contact you shortly.');
        });
    }
    
    // Schedule Visit Form
    const visitForm = document.querySelector('.schedule-visit form');
    if (visitForm) {
        visitForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Visit scheduled successfully! We will confirm your appointment shortly.');
            this.reset();
        });
    }
});