

function getValue() {
    const age = parseInt(document.getElementById("age").value);
    const insuranceType = document.getElementById("insuranceType").value;
    
    
    let quote = 0;
    
    while (insuranceType !== "auto" && insuranceType !== "vida" && insuranceType !== "hogar") {
        alert("Por favor, ingrese un tipo de seguro válido (auto, vida o hogar).");
        insuranceType = document.getElementById("insuranceType").value;
    }

    switch (insuranceType) {
        case "auto":
            quote = age < 25 ? 500 : 300;
            break;
        case "vida":
            quote = age < 30 ? 1000 : 800;
            break;
            case "hogar":
            quote = age < 40 ? 1200 : 1000;
            break;
            default:

            quote = "No se pudo calcular la cotización. Tipo de seguro no válido.";
    }


    document.getElementById("quoteResult").textContent = `Su cotización para un seguro de ${insuranceType} es de $${quote}`;
}


document.getElementById("insuranceForm").addEventListener("submit", function (e) {
    e.preventDefault();
    getValue();


});