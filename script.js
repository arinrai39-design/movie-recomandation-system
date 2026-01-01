// Expanded array of movies with category and rating
const movies = [
    { title: "The Dark Knight", category: "Hollywood", genre: "Action", rating: 9.0, description: "A thrilling action-packed story of Batman fighting crime." },
    { title: "Inception", category: "Hollywood", genre: "Sci-Fi", rating: 8.8, description: "A mind-bending sci-fi adventure about dreams within dreams." },
    { title: "The Shawshank Redemption", category: "Hollywood", genre: "Drama", rating: 9.3, description: "A powerful drama about hope and friendship in prison." },
    { title: "Superbad", category: "Hollywood", genre: "Comedy", rating: 7.6, description: "A hilarious comedy about teenage misadventures." },
    { title: "Avengers: Endgame", category: "Hollywood", genre: "Action", rating: 8.4, description: "An epic action film with superheroes saving the world." },
    { title: "The Hangover", category: "Hollywood", genre: "Comedy", rating: 7.7, description: "A comedy about a wild bachelor party gone wrong." },
    { title: "Interstellar", category: "Hollywood", genre: "Sci-Fi", rating: 8.6, description: "A sci-fi journey through space to save humanity." },
    { title: "Forrest Gump", category: "Hollywood", genre: "Drama", rating: 8.8, description: "A heartwarming drama following an extraordinary life." },
    { title: "Dilwale Dulhania Le Jayenge", category: "Bollywood", genre: "Romance", rating: 8.1, description: "A romantic Bollywood classic about love and family." },
    { title: "3 Idiots", category: "Bollywood", genre: "Comedy", rating: 8.4, description: "A hilarious Bollywood film about friendship and education." },
    { title: "Bajrangi Bhaijaan", category: "Bollywood", genre: "Drama", rating: 8.0, description: "An emotional Bollywood story of kindness and humanity." },
    { title: "Kabir Singh", category: "Bollywood", genre: "Drama", rating: 7.1, description: "A intense Bollywood drama about love and rebellion." },
    { title: "Shabaash Mithu", category: "Bollywood", genre: "Biopic", rating: 7.5, description: "A Bollywood biopic on cricketer Mithali Raj." },
    { title: "RRR", category: "Bollywood", genre: "Action", rating: 7.8, description: "A high-octane Bollywood action film with epic fights." }
];

// Get DOM elements
const categorySelect = document.getElementById('category-select');
const ratingSelect = document.getElementById('rating-select');
const recommendBtn = document.getElementById('recommend-btn');
const clearBtn = document.getElementById('clear-btn');
const recommendationsDiv = document.getElementById('recommendations');

// Function to display recommendations
function displayRecommendations(filteredMovies) {
    recommendationsDiv.innerHTML = ''; // Clear previous results
    
    if (filteredMovies.length === 0) {
        recommendationsDiv.innerHTML = '<p>😔 No movies found matching your criteria. Try adjusting the filters!</p>';
        return;
    }
    
    filteredMovies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.className = 'movie';
        movieDiv.innerHTML = `
            <h3>${movie.title} (${movie.category})</h3>
            <p><strong>Genre:</strong> ${movie.genre}</p>
            <p class="rating"><strong>Rating:</strong> ${movie.rating}/10 ⭐</p>
            <p>${movie.description}</p>
        `;
        recommendationsDiv.appendChild(movieDiv);
    });
}

// Function to get recommendations based on filters
function getRecommendations() {
    const selectedCategory = categorySelect.value;
    const minRating = parseFloat(ratingSelect.value) || 0;
    
    // Filter movies
    let filteredMovies = movies;
    if (selectedCategory) {
        filteredMovies = filteredMovies.filter(movie => movie.category === selectedCategory);
    }
    filteredMovies = filteredMovies.filter(movie => movie.rating >= minRating);
    
    // Display results
    displayRecommendations(filteredMovies);
}

// Event listener for recommend button
recommendBtn.addEventListener('click', () => {
    if (!categorySelect.value && ratingSelect.value === '0') {
        alert('Please select at least one filter (category or rating)!');
        return;
    }
    getRecommendations();
});

// Event listener for clear button
clearBtn.addEventListener('click', () => {
    categorySelect.value = '';
    ratingSelect.value = '0';
    recommendationsDiv.innerHTML = '';
});