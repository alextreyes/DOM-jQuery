$(document).ready(function () {
  $("#movie-form").submit(function (e) {
    e.preventDefault();
    const title = $("#title").val();
    const rating = $("#rating").val();

    if (!title || !rating) {
      alert("Please enter both a title and a rating.");
      return;
    }

    const movieItem = $('<div class="movie-item"></div>');
    const movieInfo = $('<p class="movie-info"></p>').text(
      `Title: ${title}, Rating: ${rating}`
    );
    const removeButton = $('<button class="remove-button">Remove</button>');

    removeButton.click(function () {
      movieItem.remove();
    });

    movieItem.append(movieInfo, removeButton);

    $("#movie-list").append(movieItem);

    $("#title").val("");
    $("#rating").val("");
  });
});
