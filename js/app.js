let opciones = ['peso', 'altura', 'cadera', 'cintura', 'cuello', 'edad'];

const initHTML = () => {
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
    document.getElementById('app').innerHTML = `<form>
       <div class = "row  m-auto justify-content-center ">
            <div class = "col-10 p-0 m-0 ">
                <label>Sexo</label>
                <select class="custom-select " name="sexo" id="sexo">
                    <option value="woman">M</option>
                    <option value="men">H</option>
                </select>
            </div>
            <div class = "col-10 p-0 m-0 ">
                <label >Peso</label>
                <select class="custom-select " name="peso" id="peso">

                </select>
            </div>
            <div class = "col-10 p-0 m-0 ">
                <label>Altura</label>
                <select class=" custom-select " name="altura" id="altura">

                </select>
            </div>
            <div class = "col-10 p-0 m-0 ">
                <label>Cintura</label>
                <select class="  custom-select " name="cintura" id="cintura">

                </select>
            </div>
            <div class = "col-10 p-0 m-0 " id="caderaBox">
                <label >Cadera</label>
                <select class=" custom-select " name="cadera" id="cadera">

                </select>
            </div>

            <div class = "col-10 p-0 m-0 ">
                <label >Cuello</label>
                <input type="range" class="pt-2 custom-range w-25" min="25" max="45" id="cuello">
                <label class="bg-white px-1" id="rangevalue" for="cuello">35</label>
            </div>    
            <div class = "col-10 p-0 m-0 ">
                <label>Edad</label>
                <select class="custom-select " name="edad" id="edad">

                </select>
            </div>


        <button class="btn btn-outline-dark mx-auto mt-3" id="calcular">Calcular</button>`
    
  
    let sexoSelector = document.getElementById('sexo');

    cargarOpciones(sexoSelector.value);
    sexoSelector.addEventListener('change', () => {
        document.getElementById('caderaBox').style.display = (sexoSelector.value === 'men') ? 'none' : 'block';
        cargarOpciones(sexoSelector.value);
    });
    let range = document.getElementById('cuello');
    range.addEventListener('mousemove', () => {
        document.getElementById('rangevalue').innerText = range.value;
    })
    range.addEventListener('touchmove', () => {
        document.getElementById('rangevalue').innerText = range.value;
    })
    document.getElementById('calcular').addEventListener('click', () => {
        viewResults();
    });
}
const viewResults = () => {
    const calcularGrasa = (info, sexo) => {
        if (sexo === 'men') {
            return (Math.floor((495 / (1.0324 - 0.19077 * (Math.log10(info[3] - info[4])) + 0.15456 * (Math.log10(info[1]))) - 450) * 100) / 100);
        }
        else {
            return (Math.floor((495 / (1.29579 - 0.35004 * (Math.log10(info[3] + info[2] - info[4])) + 0.22100 * (Math.log10(info[1]))) - 450) * 100) / 100);
        }

    };
    let info = [];
    opciones.forEach(element => {
        info.push(parseInt(document.getElementById(element).value));
    });
    let sexoSelector = document.getElementById('sexo');

    let porcGrasa = calcularGrasa(info, sexoSelector.value);
    let kgGrasa = info[0] * porcGrasa / 100;
    let kgMagro = info[0] - kgGrasa;
  

    document.getElementById('app').innerHTML = `  
    
    <div class = "results text-center">
    <h2>Porcentaje Grasa</h2>
    <h4 class = "text-center">${porcGrasa} %</h4>
    <h2>Peso Grasa</h2>
    <h4 class = "text-center">${Math.trunc(kgGrasa*100)/100} KG</h4>
    <h2>Peso Magro</h2>
    <h4 class = "text-center">${Math.trunc(kgMagro * 100) / 100} KG</h4>
    <button class="btn btn-outline-dark" id="volver">Volver</button>
    </div>`;
    

    document.getElementById('volver').addEventListener('click', () => {
        initHTML();
    });
}

initHTML();






