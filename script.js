document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    
    if (name && email && phone && service && date && time) {
        alert('Booking submitted successfully! We will contact you soon.');
        // In a real app, send data to server
    } else {
        alert('Please fill in all required fields.');
    }
});