document.addEventListener('DOMContentLoaded', function () {
    const itemSelect = document.getElementById('itemSelect');
    const quantityInput = document.getElementById('quantity');
    const calculateBtn = document.getElementById('calculateBtn');
    const result = document.getElementById('result');

    calculateBtn.addEventListener('click', function () {
        const selectedItem = itemSelect.value;
        const quantity = parseFloat(quantityInput.value);

        // Define water footprint values for selected items (you can expand this)
        const waterFootprints = {
            shower: 70.0,
            toilet: 6.0,
            dishwashing: 20.0,
            laundry: 80.0,
            // Add more items here
        };

        if (waterFootprints[selectedItem] !== undefined && !isNaN(quantity)) {
            const waterFootprint = waterFootprints[selectedItem];
            const totalWaterFootprint = waterFootprint * quantity;
            result.textContent = `Total Water Footprint for ${selectedItem}: ${totalWaterFootprint.toFixed(2)} liters`;
        } else {
            result.textContent = 'Invalid input. Please check your selection and quantity.';
        }
    });
});
