const colorPicker = document.getElementById('colorPicker');
const colorDisplay = document.getElementById('colorDisplay');
const colorValue = document.getElementById('colorValue');
const copyButton = document.getElementById('copyButton');

colorPicker.addEventListener('input', () => {
    const selectedColor = colorPicker.value;
    colorDisplay.style.backgroundColor = selectedColor;
    colorValue.textContent = `Selected Color: ${selectedColor}`;
});
copyButton.addEventListener('click', () => {
    const color = colorPicker.value;
    navigator.clipboard.writeText(color).then(() => {
        alert(`Color ${color} copied to clipboard!`);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}); 
// Initial setup
document.addEventListener('DOMContentLoaded', () => { 
    const initialColor = colorPicker.value;
    colorDisplay.style.backgroundColor = initialColor;
    colorValue.textContent = `Selected Color: ${initialColor}`;
});
// Add styles for the color display and button

