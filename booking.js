document.getElementById('bookingForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        carModel: document.getElementById('carModel').value,
        date: document.getElementById('date').value
    };

    // Simulating an API call
    console.log('Form submitted:', formData);

    alert('Booking submitted successfully!');
});
