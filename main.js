const results = [];

/* Array de opciones */
const options = [
  {
    tipo: "auto",
    getQuote: (age) => (age < 25 ? 500 : 300),
  },
  {
    tipo: "vida",
    getQuote: (age) => (age < 30 ? 1000 : 800),
  },
  {
    tipo: "hogar",
    getQuote: (age) => (age < 40 ? 1200 : 1000),
  },
];

/* Save Storage */
function saveResultsToLocalStorage() {
  localStorage.setItem("insuranceResults", JSON.stringify(results));
}
/* Show Storage */
function loadResultsFromLocalStorage() {
  const storedResults = localStorage.getItem("insuranceResults");
  if (storedResults) {
    results.push(...JSON.parse(storedResults));
    
    /* Mostrar items */
    results.forEach((result) => {
      let li = document.createElement("li");
      resultItem.appendChild(li);
      li.textContent = `Tipo de Seguro: ${result["Tipo de Seguro"]} ,  Valor:${result["Valor"]}`;
    });
  }
}

loadResultsFromLocalStorage();

/* Obtener el valor del seguro */
function getValue() {
  const age = document.getElementById("age").value;
  let insuranceType = document.getElementById("insuranceType").value;
  const quoteResult = document.getElementById("quoteResult");

  if (insuranceType !== "seleccione una opcion") {
    let selectedOption = options.find(
      (option) => option.tipo === insuranceType,
    );
    if (selectedOption) {
      /* Buscar opciones en la lista */
      let quote = selectedOption.getQuote(age); //Obtener valor de la cuota elegida.

      results.push({
        "Tipo de Seguro": insuranceType,
        Valor: quote,
      });

      // Llama a la función para guardar resultados en localStorage
      saveResultsToLocalStorage();
    }
  } else {
    /* Mostrar Error en caso de que no se seleccione nada en el dropwodwn */
    const message = document.getElementById("message");
    message.textContent = "Por favor, Seleccione un tipo de seguro";
  }
  /* Mostarar resultados de cada item */
  var resultItem = document.getElementById("resultItem");
  /* Limpar la lista (ul) antes de mostarar cada item */
  resultItem.innerHTML = "";

  results.forEach((result) => {
    let li = document.createElement("li");
    resultItem.appendChild(li);
    li.textContent = `Tipo de Seguro: ${result["Tipo de Seguro"]} ,  Valor:${result["Valor"]}`;
  });
}

/* Evento on submit */
document
  .getElementById("insuranceForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    getValue();
  });