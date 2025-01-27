document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('input[type="text"]');
    const videoItems = document.querySelectorAll('.item');

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        videoItems.forEach(item => {
            const title = item.querySelector('h3').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                item.style.display = 'block'; // Show matching items
            } else {
                item.style.display = 'none'; // Hide non-matching items
            }
        });
    });


    videoItems.forEach(item => {
        item.addEventListener('click', function() {
            alert('Video clicked: ' + item.querySelector('h3').textContent);
        });
    });

    const subscribeButtons = document.querySelectorAll('.subscribe-btn');
    subscribeButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent triggering the video click event
            alert('Subscribed to: ' + button.previousElementSibling.querySelector('h3').textContent);
        });
    });
});
