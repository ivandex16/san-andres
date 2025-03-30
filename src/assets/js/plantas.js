function inciarLogicaPlantas() {
  // Lógica para manejar la carga de plantas
  function crearCards(titulo, texto, imgSrc, imgAlt) {
    const componente = `
       <div class="col ">
    <div class="card plantas-estilos">
      <img src=${imgSrc} class="card-img-top" alt=${imgAlt}>
      <div class="card-body">
        <h5 class="card-title">${titulo}</h5>
        <p class="card-text">${texto}</p>
      </div>
    </div>
  </div>
      `;

    $("#containerPlants").append(componente);
  }

  // Cargar componentes iniciales
  crearCards(
    "Cactus de Navidad",
    "Aunque es originario de Brasil, el cactus de Navidad recibe su nombre dado que florece en otoño e invierno, siendo el invierno la época que coincide con Navidad en el hemisferio norte del planeta. El cactus de navidad es una planta epífita porque se aloja en el tronco de los árboles. Por sus bellas flores, es muy indicado para decoración, sobre todo de interior.",
    "./assets/images/especies/plantas/cactusNavidad.webp",
    "Cactus de Navidad"
  );

  crearCards(
    "Helecho nido de pájaro",
    "El helecho nido de pájaro es uno de los más populares en la decoración de interiores. Esto se debe a que es bastante más resistente que otras variedades, por lo que podrás asegurarte un compañero por varios años. En la naturaleza, el helecho nido de pájaro crece sobre las ramas y troncos de otros árboles, allí donde haga sombra. Las hojas de esta especie pueden llegar a medir hasta un metro de largo una vez desplegadas.",
    "./assets/images/especies/plantas/helecho.webp",
    "Helecho nido de pájaro"
  );

  crearCards(
    "Drácena",
    "El fruto de la drácena es un alimento fundamental para la dieta de varias especies de lémures. Aunque las flores de esta planta no son excesivamente vistosas, la coloración de sus hojas la hace una especie apreciada para el cultivo en jardines.",
    "./assets/images/especies/plantas/dracena.webp",
    "Drácena"
  );

  crearCards(
    "Lechero",
    "El lechero es una planta originaria de América y ampliamente extendida por todo el mundo. En muchos países, está considerada como maleza, ya que crece en muchos tipos de climas y suelos, infectando algunas plantaciones. Posee un tallo erguido de color rojo en el ápice y flores muy pequeñas con brácteas alrededor. Todas las partes desprenden una savia lechosa.",
    "./assets/images/especies/plantas/lechero.webp",
    "Lechero"
  );

  crearCards(
    "Cirtodeira",
    "Una delicada planta cultivada como ornamental, la cirtodeira es una popular especie propia de climas cálidos y tropicales. Existen numerosas variedades de la especie, dada su popularidad. Las hojas pueden variar de color verde a bronce, rojo o marrón, con bordes o venas plateados, y sus flores pueden ser rosas, naranjas, amarillas, lavanda o blancas.",
    "./assets/images/especies/plantas/cirtodeira.webp"
  );

  crearCards(
    "Duranta",
    "El duranta es una especie muy atractiva y valorada en jardinería por su abundante floración. De porte arbustivo, el duranta es muy utilizado para formar setos, aunque también es apta para cultivar en macetas e, incluso, en bonsái. La floración se da durante los períodos calurosos del año y suele ser muy abundante, además de aromática.",
    "./assets/images/especies/plantas/duranta.webp",
    "Duranta"
  );

  crearCards(
    "Crotón de jardín",
    "La crotón de jardín es un poco delicada en su cuidado. Una vez sembrada, se debe esperar dos años para cambiar su maceta. Necesita humedad y es frágil a los cambios bruscos del clima, los cuales provocan la caída de sus hojas. Las hojas necesitan gran iluminación para mantener sus colores vívidos.",
    "./assets/images/especies/plantas/croton.webp",
    "Crotón de jardín"
  );

  crearCards(
    "Palmera enana",
    "La palmera enana es una palmera comúnmente usada como planta ornamental en parques y jardines, dada la facilidad de su cultivo: soporta bien la sequía, las pestes y diferentes tipos de suelo. Produce grandes racimos de frutos parecidos a los dátiles. Su nombre es muy antiguo: ya Plinio el Viejo (siglo I) en su Historia Natural habla de estas 'palmeras-phoenix'.",
    "./assets/images/especies/plantas/palmera.webp",
    "Palmera enana"
  );

  crearCards(
    "Cosmos",
    "Muy apreciadas por las las mariposas, las cosmos son sin embargo una especie peligrosamente invasiva, ya identificada como tal por los Estados Unidos en 1996. También atrae a un gran número de aves y se la conoce como Mata piojos.",
    "./assets/images/especies/plantas/cosmos.webp",
    "Cosmos"
  );
}
