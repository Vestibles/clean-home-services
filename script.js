document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const message = document.getElementById('message').value;
    
    if (name && email && phone && service && date && time) {
        const subject = encodeURIComponent('Cleaning Booking Request');
        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nDate: ${date}\nTime: ${time}\nMessage: ${message}`
        );
        const mailtoLink = `mailto:success_vault@outlook.com?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
    } else {
        alert('Please fill in all required fields.');
    }
});