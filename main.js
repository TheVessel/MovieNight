<script>
    const API_KEY = 'c3fd81ffd17a72709195d6fbb779b268'; // Replace with your TMDb API key
    const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

    $('#suggest-button').on('click', function() {
        $.getJSON(API_URL)
            .done(function(data) {
                if (data.results.length > 0) {
                    const movie = data.results[0];
                    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
                    const overview = movie.overview;
                    const trailerUrl = 'https://www.youtube.com/watch?v='; // Placeholder

                    $('#poster').attr('src', posterUrl);
                    $('#synopsis').text(overview || 'No synopsis available.');
                    $('#actors').text('Actors information not available.');
                    $('#trailer-button').attr('data-url', trailerUrl);
                    $('#movie-details').show();
                } else {
                    alert('No movies found.');
                }
            })
            .fail(function(jqXHR, textStatus, errorThrown) {
                console.error('Error fetching data:', textStatus, errorThrown);
                alert('Failed to fetch movie data. Please check the console for more details.');
            });
    });

    $('#trailer-button').on('click', function() {
        const trailerUrl = $(this).attr('data-url');
        if (trailerUrl) {
            window.open(trailerUrl, '_blank');
        } else {
            alert('No trailer available.');
        }
    });
</script>
