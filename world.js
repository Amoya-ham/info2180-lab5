document.addEventListener("DOMContentLoaded", function () {
  var lookupButton = document.getElementById("lookup");
  var countryInput = document.getElementById("country");
  var result = document.getElementById("result");

  lookupButton.addEventListener("click", function () {
    var country = countryInput.value.trim();

    fetch("world.php?country=" + encodeURIComponent(country))
      .then(function (response) {
        return response.text();
      })
      .then(function (data) {
        result.innerHTML = data;
      })
      .catch(function (error) {
        result.innerHTML = "<p>Something went wrong.</p>";
      });
  });
});
