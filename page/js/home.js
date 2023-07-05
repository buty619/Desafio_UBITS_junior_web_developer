// como puedes observar tenemos la informacion de nuestro plan incompleta vamos a solucioanr este inconveniente

const init = async () => {
  // 1. llama la API con la siguiente URL https://buty619.github.io/pricing.json donde traera
  // toda la información de url para luego inyectarla en nuestro HTML, para esto primero
  // realiza una petición GET para obtener dicha data.
  // NOTA: puedes abrir la url en tu navegador para ver la estructura de la información obtenida.

  const url = "https://buty619.github.io/pricing.json";
  const jsonData = await fetch(url);
  const { basic, eco, pro, business } = await jsonData.json();
  // 2. luego de obtenida la información de los planes se debe inyectar los valores obtenidos
  // en el html de cada card de los posibles planes a comprar.
  // 2.1 primero se debe obtener el elemento card del plan basic para esto puedes usar su clase (validalo en el HTML)
  const basicCard = document.querySelector(".pricing-card.basic");
  // 2.1.1 del elemento obtenido selecciona el titulo e inyecta el valor obtenido de la API
  const basicCardTitle = basicCard.querySelector(".plan-title");
  basicCardTitle.innerHTML = basic.name;
  // 2.1.2 del elemento card obtenido selecciona el precio e inyecta el valor obtenido de la API ten en cuenta que
  // el componente del precio esta compuesto por los tags de small y span valida esto al momento de inyectar
  // el valor obtenido de la llamada a la API
  const basicCardPrice = basicCard.querySelector(".price-title");
  const basicCardPriceSpan = basicCardPrice.querySelector("span");
  basicCardPriceSpan.innerHTML = basic.price;
  // 2.1.3  ahora inyecta el valor del descuento de este plan en el span que se encuentra dentro del elemento
  // con clase `badge-box`.
  const basicCardDiscount = basicCard.querySelector(".badge-box");
  const basicCardDiscountSpan = basicCardDiscount.querySelector("span");
  basicCardDiscountSpan.innerHTML = `Save ${basic.discount}`;
  // 2.1.4 por ultimo completa la informacion de las caracteristicas del plan para esto tambien ten en cuenta
  // la estructura del HTML asi como la estructura de la información donde se encuentra las caracteristicas del plan.
  // NOTA: para este paso te recomendamos obtener un array con los elementos li y recorrerlos agregando las caracteristicas
  // del plan
  const basicCardList = basicCard.querySelector("ul");
  const basicCardElementList = basicCardList.querySelectorAll("li");
  [...basicCardElementList].map(
    (element, i) => (element.innerHTML = basic.characteristics[i])
  );
  // 2.2 sigue los pasos anteriormente mencionados para llenar la información de cada uno de los planes,
  // esto lo puedes hacer realizando el proceso para cada card o realizando una iteración que te permita
  // re utilizar el codigo inplementado para la primera card, cualquiera de las dos soluciones es valida
  // sin embargo que intivo a que pruebes tus conocimientos y trates de solucionar esta parte del reto
  // utilizando un metodo de iteración sobre la data obtenida en la API.
  const apiData = { basic, eco, pro, business };
  Object.entries(apiData).map(([section, data]) => {
    const card = document.querySelector(`.pricing-card.${section}`);
    const cardTitle = card.querySelector(".plan-title");
    cardTitle.innerHTML = data.name;
    const cardPrice = card.querySelector(".price-title");
    const cardPriceSpan = cardPrice.querySelector("span");
    cardPriceSpan.innerHTML = data.price;
    const cardDiscount = card.querySelector(".badge-box");
    const cardDiscountSpan = cardDiscount.querySelector("span");
    cardDiscountSpan.innerHTML = `Save ${data.discount}`;
    const cardList = card.querySelector("ul");
    const cardElementList = cardList.querySelectorAll("li");
    [...cardElementList].map(
      (element, i) => (element.innerHTML = data.characteristics[i])
    );
  });
  // 3. Agrega una accion a los botones de cada card que nos dirija la pagina `/payment` donde
  // envies como query params el nombre del plan y el precio. ejemplo: /payment.html?name='basic'&price='$6.95'
  // al igual que el paso anterior esto lo puedes hacer de manera indivudual o recorriendo a una iteración
  // sobre la información obtenida
  Object.entries(apiData).map(([section, data]) => {
    const card = document.querySelector(`.pricing-card.${section}`);
    const cardButton = card.querySelector(".buy-now");
    cardButton.href = `/payment.html?name=${data.name}&price=$${data.price}`;
  });
};

// se inicializa el script

init();
