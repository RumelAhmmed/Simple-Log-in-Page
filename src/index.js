// Get the modal element by its ID
var modal = document.getElementById('myModal');
// Get the image inside the modal
var img = document.querySelector('.modal-body img');
// Function to display the modal with the specified image source
function openModal(imageSrc) {
    img.src = imageSrc; // Set the image source
    modal.style.display = 'block'; // Display the modal
}
// Function to close the modal
function closeModal() {
    modal.style.display = 'none'; // Hide the modal
}
// Close the modal if the user clicks outside the modal
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
};
// closeModal();
