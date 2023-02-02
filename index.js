$(document).ready(function () {
  $("header button").click(() => $("form").slideDown());
  $("form").on("submit", (event) => event.preventDefault());
  $("form .cancelar").click(() => $("form").slideUp());
});
