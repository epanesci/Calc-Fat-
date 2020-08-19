
const cargaInicial = () => {
    let listadoDePesos = '';
    for (i = 30; i<200 ; i++){
        listadoDePesos += (i === 90) ? `<option selected = "true" value="${i}">${i}</option>` : `<option value="${i}">${i}</option>`;
    }
    let listadoDeAlturas = '';
    for (i = 140; i<240 ; i++){
    listadoDeAlturas += (i===190) ? `<option  selected = "true" value="${i}">${i}</option>`:`<option value="${i}">${i}</option>`;
    }
    let listadoDeCinturas = '';
    for (i = 50; i<200 ; i++){
    listadoDeCinturas += (i===90) ?  `<option selected = "true" value="${i}">${i}</option>` : `<option value="${i}">${i}</option>`;
    }
    let listadoDeCaderas = '';
    for (i = 50; i<200 ; i++){
    listadoDeCaderas += (i===90) ?  `<option selected = "true" value="${i}">${i}</option>` : `<option value="${i}">${i}</option>`;
    }
    let listadoDeCuellos = '';
    for (i = 25; i<60 ; i++){
    listadoDeCuellos += (i===45) ? `<option selected = "true" value="${i}">${i}</option>`: `<option value="${i}">${i}</option>`;
    }
    let listadoDeEdades = '';
    for (i = 18; i<90 ; i++){
    listadoDeEdades += (i===45) ? `<option selected = "true" value="${i}">${i}</option>`: `<option value="${i}">${i}</option>`;
    }
    document.getElementById('peso').innerHTML = listadoDePesos;
    document.getElementById('altura').innerHTML = listadoDeAlturas;
    document.getElementById('cintura').innerHTML = listadoDeCinturas;
    document.getElementById('cadera').innerHTML = listadoDeCaderas;
    document.getElementById('cuello').innerHTML = listadoDeCuellos;
    document.getElementById('edad').innerHTML = listadoDeEdades;
}


cargaInicial();
let peso = document.getElementById('peso').value;
let altura = document.getElementById('altura').value;
let cintura = document.getElementById('cintura').value;
let cadera = document.getElementById('cadera').value;
let cuello = document.getElementById('cuello').value;
let sexoSelector = document.getElementById('sexo');
let caderaSelector = document.querySelector('.caderaBox');
sexo.addEventListener('click', () => {
  
    caderaSelector.style.display = (sexoSelector.value === 'hombre') ? 'none' :'block';
    
});
document.getElementById('calcular').addEventListener('click', () => {
    
    
    let edad = 32; 
  
    let porcGrasa = Math.floor((495/(1.0324-0.19077*(Math.log10(cintura-cuello))+0.15456*(Math.log10(altura)))-450)*100)/100;
    
    let kgGrasa = peso * porcGrasa /100;
    let kgMagro = peso - kgGrasa;
    console.log(porcGrasa + '%');
    console.log(kgGrasa + 'KG');
    console.log(kgMagro + 'KG');
    
});



