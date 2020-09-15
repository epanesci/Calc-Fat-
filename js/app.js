
const cargarOpciones = (sexo) => {
    const datesComplete = (init, end, initial) => {
        let listado = '';
        for (i = init; i < end; i++) {
            listado += (i === initial) ? `<option selected = "true" value="${i}">${i}</option>` : `<option value="${i}">${i}</option>`;
        }
        return listado;
    }
    let init = 0;
    let end = 300;
    let initial = 0;
    opciones.forEach(element => {
        switch (element) {
            case 'peso': initial = 70; break;
            case 'altura': initial = 170; break;
            case 'cintura': initial = 70; break;
            case 'cadera': initial = 100; break;
            case 'cuello': initial = 35; break;
            case 'edad': initial = 35; break;
        }
        if (sexo === 'men' && element != 'cuello' && element != 'edad') {
            initial += 20;
        }
        document.getElementById(element).innerHTML = datesComplete(init, end, initial);
    });

}

let sexoSelector = document.getElementById('sexo');
let opciones = ['peso', 'altura', 'cadera', 'cintura', 'cuello', 'edad'];

cargarOpciones('woman');



sexoSelector.addEventListener('change', () => {

    document.querySelector('.caderaBox').style.display = (sexoSelector.checked) ? 'none' : 'block';
    let sexo = (sexoSelector.checked) ? 'men' : 'woman';
    cargarOpciones(sexo);
});

document.getElementById('calcular').addEventListener('click', () => {
    const calcularGrasa = (info,sexo) => {
       if (sexo === 'men'){
           return (Math.floor((495 / (1.0324 - 0.19077 * (Math.log10(info[3] - info[4])) + 0.15456 * (Math.log10(info[1]))) - 450) * 100) / 100);
       } 
       else {
           return (Math.floor((495 / (1.29579 - 0.35004 * (Math.log10(info[3]+info[2] - info[4])) + 0.22100 * (Math.log10(info[1]))) - 450) * 100) / 100);
       }
        
    };
    let info = [];
    opciones.forEach(element => {
         info.push(parseInt(document.getElementById(element).value));
    });
    let sexo = (sexoSelector.checked) ? 'men' : 'woman';
    let porcGrasa = calcularGrasa(info,sexo);
    let kgGrasa = info[0] * porcGrasa /100;
    let kgMagro = info[0] - kgGrasa;
    console.log(porcGrasa + '%');
    console.log(kgGrasa + 'KG');
    console.log(kgMagro + 'KG');
    
});

