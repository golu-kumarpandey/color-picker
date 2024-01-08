let containerColor = document.getElementById("colorPickerContainer")
let colorHexCode = document.getElementById("selectedColorHexCode")
let main_Heading1 = document.getElementById("main_Heading1")

function chageColorGrey() {
    containerColor.style.backgroundColor = "#e0e0e0"
    colorHexCode.textContent = "#e0e0e0"
    main_Heading1.style.color = "#bb6bd9"
}

function chageColorGreen() {
    containerColor.style.backgroundColor = "#6fcf97"
    colorHexCode.textContent = "#6fcf97"
    main_Heading1.style.color = "gray"
}

function chageColorBlue() {
    containerColor.style.backgroundColor = "#56ccf2"
    colorHexCode.textContent = "#56ccf2"
    main_Heading1.style.color = "#fff"
    
}

function chageColorPink() {
    containerColor.style.backgroundColor = "#bb6bd9"
    colorHexCode.textContent = "#bb6bd9"
    main_Heading1.style.color = "gold"

} 