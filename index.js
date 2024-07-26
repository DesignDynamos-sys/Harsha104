// JavaScript to toggle the user dropdown menu
document.getElementById('user-info').addEventListener('click', function() {
    var dropdown = document.getElementById('user-dropdown');
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
});
