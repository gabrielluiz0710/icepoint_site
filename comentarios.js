// Função para carregar as avaliações do Google
function loadGoogleReviews(placeId) {
    const reviewsContainer = document.getElementById('reviews-container');
    // Substitua 'YOUR_API_KEY' pelo seu próprio chave de API do Google Places
    const apiKey = 'AIzaSyA8peuLBRqcghUCQ-GCf0_ZACYyGwYY_Xc';
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${apiKey}`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          const reviews = data.result.reviews;
          reviews.forEach(review => {
            const reviewElement = document.createElement('div');
            reviewElement.classList.add('review');

            const reviewerElement = document.createElement('div');
            reviewerElement.classList.add('reviewer');
            reviewerElement.textContent = review.author_name;

            const ratingElement = document.createElement('div');
            ratingElement.classList.add('rating');
            ratingElement.textContent = '⭐'.repeat(review.rating);

            const textElement = document.createElement('div');
            textElement.textContent = review.text;

            reviewElement.appendChild(reviewerElement);
            reviewElement.appendChild(ratingElement);
            reviewElement.appendChild(textElement);

            reviewsContainer.appendChild(reviewElement);
          });
        })
        .catch(error => {
          console.error('Error fetching reviews:', error);
        });
    }

    // Chame a função passando o ID do local (place ID) do Google
    loadGoogleReviews('ChIJtZbKt4HPupQRNvCfvu4DthI');