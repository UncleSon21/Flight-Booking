const bookingForm = document.getElementById('bookingForm');
const resultsDiv = document.getElementById('results');

bookingForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const from = this.from.value;
    const to = this.to.value;
    const date = this.date.value;

    // Assuming a function called `searchFlights` to fetch flight details
    const flights = searchFlights(from, to, date);

    displayResults(flights);
});

function displayResults(flights) {
    resultsDiv.innerHTML = '';

    if (flights.length === 0) {
        resultsDiv.innerHTML = '<p>No flights available for the selected route and date.</p>';
        return;
    }

    const table = document.createElement('table');
    table.innerHTML = `
        <tr>
            <th>Flight Number</th>
            <th>Departure</th>
            <th>Arrival</th>
            <th>Price</th>
        </tr>
    `;
    
    flights.forEach(flight => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${flight.flightNumber}</td>
            <td>${flight.departure}</td>
            <td>${flight.arrival}</td>
            <td>${flight.price}</td>
        `;
        table.appendChild(row);
    });

    resultsDiv.appendChild(table);
}

function searchFlights(from, to, date) {
    // This is a placeholder function, you would need to implement actual logic to search for flights
    // For demonstration purposes, it returns a static array of flights
    return [
        { flightNumber: 'ABC123', departure: '10:00', arrival: '12:00', price: '$200' },
        { flightNumber: 'DEF456', departure: '14:00', arrival: '16:00', price: '$250' }
    ];
}
