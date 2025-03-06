$(document).ready(() => {
  $("#header").load("./components/navBar.html");
  $("#content_main").load("./pages/home.html");
  $("#footer").load("./components/footer.html")
})

$(document).on("click", ".menu-link", (event) => {
   
  event.preventDefault();
  var page = $(event.currentTarget).attr("href");

  if (page && page.trim() !== "") {
      console.log(page);
        $("#content_main").load(page, (response, status, xhr) => {
            if (status == "error") {
            var msg = "Sorry but there was an error: ";
            console.log(msg + xhr.status + " " + xhr.statusText);
          }else {
            console.log("Page loaded successfully");
          }
        });

  }else {
    console.log("Page not found");
  }


}
)
