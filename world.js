document.addEventListener("DOMContentLoaded", function () {
  var lookupButton = document.getElementById("lookup");
  var citiesButton = document.getElementById("lookup-cities");
  var countryInput = document.getElementById("country");
  var result = document.getElementById("result");

  function search(extra) {
    var country = countryInput.value.trim();
    var url = "world.php?country=" + encodeURIComponent(country) + extra;

    fetch(url)
      .then(function (response) {
        return response.text();
      })
      .then(function (data) {
        result.innerHTML = data;
      })
      .catch(function (error) {
        result.innerHTML = "<p>Something went wrong.</p>";
      });
  }

  lookupButton.addEventListener("click", function () {
    search("");
  });

  citiesButton.addEventListener("click", function () {
    search("&lookup=cities");
  });
});
