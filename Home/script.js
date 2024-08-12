// script.js

document.addEventListener('DOMContentLoaded', function() {
    const poRequests = [
        { s_no: 1, order_id: 'ORD001', status: 'Pending', order_details: 'Detail A' },
        { s_no: 2, order_id: 'ORD002', status: 'Shipped', order_details: 'Detail B' },
        { s_no: 3, order_id: 'ORD003', status: 'Delivered', order_details: 'Detail C' }
    ];

    const tableBody = document.querySelector('#po-requests-table tbody');

    poRequests.forEach((request, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${request.s_no}</td>
            <td>${request.order_id}</td>
            <td><button onclick="viewStatus(${index})">View</button></td>
            <td><button onclick="viewDetails(${index})">Status</button></td>
        `;

        tableBody.appendChild(row);
    });
});

function viewStatus(index) {
    // Navigate to status page with specific data
    window.location.href = `../StatusPage/statuspage.html`;
}

function viewDetails(index) {
    // Navigate to order details page with specific data
    window.location.href = `../Order_Details/index.html`;
}
