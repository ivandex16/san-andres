



$(document).ready(() => {
  $("#header").load("./components/navBar.html");
  $("#content_main").load("./pages/home.html");
  $("#footer").load("./components/footer.html");

  
   console.log("se cargo el contenido");
    const contentMain = document.getElementById("content_main");
    if (contentMain) {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutations) => {
          console.log('cambio detectado:', mutations)
          if ($("#content_main").find("#historia").length > 0) {
            //color de la fuente del navbar si es la otra pagina difernete al home
            console.log("cambio de color");
             //$(".dd-menu").css("color", "gray");
            $(".nav-item a").css("color", "gray");
          } else {
            // $(".dd-menu").css("color", "");
           $(".nav-item a").removeAttr("style");
          }
        })
      })
      observer.observe(contentMain, { childList: true, subtree: true });
    }else {
      console.log("no se detecto el cambio");
    }
 
});

$(document).on("click", ".menu-link", (event) => {
  event.preventDefault();
  var page = $(event.currentTarget).attr("href");

  if (page && page.trim() !== "") {
    console.log(page);
    $("#content_main").load(page, (response, status, xhr) => {
      if (status == "error") {
        var msg = "Sorry but there was an error: ";
        console.log(msg + xhr.status + " " + xhr.statusText);
      } else {
        console.log("Page loaded successfully");
      }
    });
  } else {
    console.log("Page not found");
  }
});
