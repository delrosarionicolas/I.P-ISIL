function getValueInputTriangle() {
    let inputValueA = document.getElementById("sideA").value;
    let inputValueB = document.getElementById("sideB").value;
    let inputValueC = document.getElementById("sideC").value;
    let sum = parseInt(inputValueA) + parseInt(inputValueB) + parseInt(inputValueC);
    document.getElementById("valueInputTriangle").innerHTML = "El perímetro del triángulo es " + sum;
}

function getValueInputSquare() {
    let inputValues = document.getElementById("sides").value;
    let multiplication = parseInt(inputValues) * 4;
    document.getElementById("valueInputSquare").innerHTML = "El perímetro del cuadrado es " + multiplication;
}

function getValueInputRectangle() {
    let inputValueHorizontal = document.getElementById("sidesHorizontals").value;
    let inputValueVetical = document.getElementById("sidesVeticals").value;
    let rectangle = parseInt(inputValueHorizontal) * 2 + parseInt(inputValueVetical) * 2
    document.getElementById("valueInputRectangle").innerText = "El perímetro del rectángulo es " + rectangle;
}