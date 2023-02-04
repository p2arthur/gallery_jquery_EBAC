$(document).ready(function () {
  $("header button").click(() => $("form").slideDown());
  $("form .cancelar").click(() => $("form").slideUp());
  $("form").on("submit", (event) => {
    event.preventDefault();
    const newImageUrl = $("#new-image-url").val();
    console.log(newImageUrl);
    const newImageTemplate = $(`
    <li style="display: none">
   
    <img src="${newImageUrl}" alt="pintura de um gato">
    <div class="image-overlay">
      <a title="ver imagem em tamanho real" href="${newImageUrl}" target="_blank">Ver imagem tamanhoreal</a>
    </div>
    
    </li>`);
    $(newImageTemplate).appendTo("ul");
    $(newImageTemplate).fadeIn();
    $("#new-image-url").val("");
  });
});

function logName(Name, age) {
  console.log(Name, age);
  console.log(1234567889000099);
  console.log(typeof "a" === string);
}
