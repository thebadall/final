document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const imageGrid = document.getElementById('imageGrid');

    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value;
        if (searchTerm.trim() !== '') {
            searchImages(searchTerm);
        }
    });

    function searchImages(searchTerm) {
        const apiKey = 'wSg3PXqLLhbRMrnTdGGg1P8KuunEmfyPEFOCsaTI0TY';
        const apiUrl = `https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=${apiKey}&per_page=12`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                displayImages(data.results);
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    function displayImages(images) {
        imageGrid.innerHTML = '';
        images.forEach(image => {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');

            const img = document.createElement('img');
            img.src = image.urls.small;
            img.alt = image.alt_description;

            gridItem.appendChild(img);
            imageGrid.appendChild(gridItem);
        });
    }
});
