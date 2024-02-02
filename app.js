function toggleMenu() {
    var links = document.querySelector('.links');
    var cross = document.querySelector('.cross');

    if (links.style.display === 'flex') {
        links.style.display = 'none';
        cross.style.display = 'none';
    } else {
        links.style.display = 'flex';
        cross.style.display = 'block';
    }
}
