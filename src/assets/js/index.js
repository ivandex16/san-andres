// $(document).ready(() => {
//   $("#header").load("./components/navBar.html");
//   $("#content_main").load("./pages/home.html");
//   $("#footer").load("./components/footer.html");

//   console.log("se cargo el contenido");
//   const contentMain = document.getElementById("content_main");
//   if (contentMain) {
//     const observer = new MutationObserver((mutations) => {
//       mutations.forEach((mutations) => {
//         console.log("cambio detectado:", mutations);
//         if ($("#content_main").find("#historia").length > 0) {
//           //color de la fuente del navbar si es la otra pagina difernete al home
//           console.log("cambio de color");
//           //$(".dd-menu").css("color", "gray");
//           $(".nav-item a").css("color", "gray");
//         } else {
//           // $(".dd-menu").css("color", "");
//           $(".nav-item a").removeAttr("style");
//         }
//       });
//     });
//     observer.observe(contentMain, { childList: true, subtree: true });
//   } else {
//     console.log("no se detecto el cambio");
//   }
// });

// $(document).on("click", ".menu-link", (event) => {
//   console.log("event", event);
//   event.preventDefault();
//   var page = $(event.currentTarget).attr("href");
//   console.log("page", page);
//   if (page && page.trim() !== "") {
//     console.log(page);
//     $("#content_main").load(page, (response, status, xhr) => {
//       if (status == "error") {
//         var msg = "Sorry but there was an error: ";
//         console.log(msg + xhr.status + " " + xhr.statusText);
//       } else {
//         console.log("Page loaded successfully");
//       }
//     });
//   } else {
//     console.log("Page not found");
//   }
// });

$(document).ready(() => {
  // Cargar componentes iniciales
  $("#header").load("./components/navBar.html", () => {
    $(".menu-link").on("click", function (event) {
      event.preventDefault(); // Previene el comportamiento predeterminado
      const page = $(this).attr("href"); // Ruta de la página
      console.log(`page: ${page}`);

      $(".menu-link").parent().removeClass("active"); // Elimina la clase active de todos los elementos
      $(".menu-link")
        .parent()
        .parent()
        .parent()
        .children()
        .removeClass("active");

      $(this).parent().addClass("active"); // Agrega la clase active al elemento clicado
      $(this).parent().parent().parent().children().addClass("active");
      // $(this).siblings().removeClass("active"); // Elimina la clase active de los hermanos
      const padre = $(this).parent().parent().parent().children();

      console.log("padre", padre);
      if (page && page.trim() !== "") {
        console.log(`Cargando página: ${page}`);
        $("#content_main").load(page, () => {
          ajustarEstiloNavbar(page); // Ajusta estilos tras la carga
        });
      }
    });
  });

  $("#content_main").load("./pages/home.html", () => {
    ajustarEstiloNavbar("./pages/home.html"); // Ajusta estilos en la carga inicial
  });

  $("#footer").load("./components/footer.html");

  // Función para manejar el estilo del navbar
  const ajustarEstiloNavbar = (page) => {
    var header_navbar = $(".navbar-area");

    var logo = $(".navbar-brand img"); // Definir logo fuera del bloque if/else para que sea accesible

    $(window).off("scroll");
    var sticky = header_navbar.offset().top; // Usar .offset().top para obtener la posición superior
    if (page.includes("home.html")) {
      console.log("Estamos en la página Home. Restaurando estilo.");
      $(".nav-item a").removeClass("nav-items-alternativo");

      $(window).on("scroll", function () {
        if ($(window).scrollTop() > sticky) {
          header_navbar.addClass("sticky");
          logo.attr("src", "assets/images/logo/san-andres-logo.png");
        } else {
          header_navbar.removeClass("sticky");
          logo.attr("src", "assets/images/logo/san-andres-logo-white.png");
        }

        // Mostrar u ocultar el botón de "back-to-top"
        var $backToTop = $(".scroll-top");
        if ($backToTop.length) {
          if ($(window).scrollTop() > 50) {
            $backToTop.css("display", "flex");
          } else {
            $backToTop.css("display", "none");
          }
        }
      });
    } else {
      console.log("Estamos en otra página. Ajustando el color.");
      $(".nav-item a").addClass("nav-items-alternativo");

      // Asegurar que la imagen del logo siempre sea la misma
      // Asegurar que la imagen del logo siempre sea la misma
      logo.attr("src", "assets/images/logo/san-andres-logo.png");

      // Mantener el evento scroll activo
      var sticky = header_navbar.offset().top;
      $(window).on("scroll", function () {
        if ($(window).scrollTop() > sticky) {
          header_navbar.addClass("sticky");
        } else {
          header_navbar.removeClass("sticky");
          // Aquí no cambiamos la imagen del logo
        }

        // Mostrar u ocultar el botón de "back-to-top"
        var $backToTop = $(".scroll-top");
        if ($backToTop.length) {
          if ($(window).scrollTop() > 50) {
            $backToTop.css("display", "flex");
          } else {
            $backToTop.css("display", "none");
          }
        }
      });
    }
  };

  const ejecutarLogicaPorPaginas = (page) => {
    if (page.includes("plantas.html")) {
      console.log("Ejecutando lógica para plantas.html");
      inciarLogicaPlantas(); // Lógica específica para plantas
    } else if (page.includes("historia_geografia.html")) {
      console.log("Ejecutando lógica para historia.html");
      //$("#historia").addClass("active"); // Resalta alert("Ejecutando lógica para historia.html");
      // inciarLogicaHistoria(); // Lógica específica para historia
    } else if (page.includes("contacto.html")) {
      console.log("Ejecutando lógica para contacto.html");
      //inciarLogicaContacto(); // Lógica específica para contacto
    } else if (page.includes("noticias.html")) {
      console.log("Ejecutando lógica para noticias.html");
      //inciarLogicaNoticias(); // Lógica específica para noticias
    }
  };
});
