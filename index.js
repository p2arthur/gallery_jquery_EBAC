$(document).ready(function () {
  $("header button").click(() => $("form").slideDown());
  $("form").on("submit", (event) => {
    event.preventDefault();
    const newImageUrl = $("#new-image-url").val();
    console.log(newImageUrl);
    const newImageTemplate = `
    <li>
      <img src="${newImageUrl}" alt="pintura de um gato">
      <div class="image-overlay">
        <a title="ver imagem em tamanho real" href="${newImageUrl}" target="_blank">Ver imagem em tamanhoreal</a>
      </div>
    </li>`;
    $(newImageTemplate).appendTo("ul");
    $(newImageTemplate).fadeIn();
    $("#new-image-url").val(" ");
  });

  $("form .cancelar").click(() => $("form").slideUp());
});
