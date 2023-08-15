document.addEventListener("DOMContentLoaded", function () {
    const movieList = document.getElementById("movie-list");
    const addMovieForm = document.getElementById("add-movie-form");

    addMovieForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const titleInput = document.getElementById("title");
        const genreInput = document.getElementById("genre");

        const title = titleInput.value;
        const genre = genreInput.value;

        if (title.trim() !== "" && genre.trim() !== "") {
            const movieItem = document.createElement("li");
            movieItem.classList.add("list-group-item");
            movieItem.innerHTML = `<strong>${title}</strong> - ${genre}`;
            movieList.appendChild(movieItem);

            titleInput.value = "";
            genreInput.value = "";
        }
    });
});

