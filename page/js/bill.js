// 1. primero se debe obtener los valores del nombre del ususario, el nombre del plan y precio del
// plan comprado de las query params e inyectarlos en el HTML.

// 1.1 obtener de los query params los valores del nombre y precio del plan comprado para esto
// se puede utilizar el metodo URLSearchParams y el window.location.search
const urlParams = ...;
const userName = ...;
const planName = ...;
const planPrice = ...;

const init = async () => {
  // 1.2 inyecta los valores obtenidos en los `container_bill`.
  const userNameElement = ...;
  const planNameElement = ...;
  const priceElement = ...;
  const priceTotalElement = ...;

  // 1.3 inyecta la fecha actual en la fecha de la factura
  const actualDate = ...;
  const month = ...;
  const year = ...;
  const day = ...;
};

init();
