document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.querySelector('#orderDetailsTable tbody');
    const generateInvoiceBtn = document.getElementById('generateInvoiceBtn');
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    const homeBtn = document.getElementById('homeBtn');

    // Sample data
    const orderDetails = [
        { id: 1, itemName: 'Item A', units: Math.floor(Math.random() * 100) + 1 },
        { id: 2, itemName: 'Item B', units: Math.floor(Math.random() * 100) + 1 },
        { id: 3, itemName: 'Item C', units: Math.floor(Math.random() * 100) + 1 }
    ];

    orderDetails.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.itemName}</td>
            <td>${item.units}</td>
        `;
        tableBody.appendChild(row);
    });

    generateInvoiceBtn.addEventListener('click', () => {
        overlay.classList.add('show');
        popup.classList.add('show');
    });

    homeBtn.addEventListener('click', () => {
        window.location.href = '../Home/index.html';
    });

    overlay.addEventListener('click', () => {
        overlay.classList.remove('show');
        popup.classList.remove('show');
    });
});
