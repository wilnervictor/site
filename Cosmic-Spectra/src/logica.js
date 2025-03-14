function entrou1(){
let a = window.document.getElementById('m42')
a.style.transform = "scale(1.1)";
a.style.transition = "transform 0.5s"
a.style.boxShadow = "4px 4px 8px rgba(0, 0, 0, 0.616)"; 
}
function saiu1(){
let a = window.document.getElementById('m42')   
a.style.transform = "scale(1)"; 
a.style.boxShadow = "none"; 
}

function entrou() {
    let a = document.getElementById('marte');
    a.src = "src/imagem/rover1.jpg";
    a.style.transition = "transform 3s"; 
}

function saiu() {
    let a = document.getElementById('marte');
    a.src = "src/imagem/marte1.jpg";
    a.style.transition = "transform 3s"; 
}
function entrou2() {
    let a = document.getElementById('james');
    a.src = "https://www.nasa.gov/wp-content/uploads/2022/06/main_image_deep_field_smacs0723-1280.jpg";
    a.style.transition = "transform 3s"; 
}

function saiu2() {
    let a = document.getElementById('james');
    a.src = "https://www.nasa.gov/wp-content/uploads/2023/03/otis_to_iis-1.jpg";
    a.style.transition = "transform 3s"; 
}

