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
        <ul class="list-unstyled p-0 m-0">
            <li>
                <label>Sexo</label>
                <select class="custom-select custom-select-sm" name="sexo" id="sexo">
                    <option value="woman">Mujer</option>
                    <option value="men">Hombre</option>
                </select>
            </li>
            <li >
                <label >Peso</label>
                <select class=" custom-select custom-select-sm" name="peso" id="peso">

                </select>
            </li>
            <li>
                <label>Altura</label>
                <select class=" custom-select custom-select-sm" name="altura" id="altura">

                </select>
            </li>
            <li>
                <label>Cintura</label>
                <select class="  custom-select custom-select-sm" name="cintura" id="cintura">

                </select>
            </li>
            <li class="caderaBox">
                <label >Cadera</label>
                <select class=" custom-select custom-select-sm " name="cadera" id="cadera">

                </select>
            </li>

            <li>
                <label >Cuello</label>
                <input type="range" class="pt-2custom-range w-25" min="25" max="45" id="cuello">
                    <label class="bg-white" id="rangevalue" for="cuello">35</label>
                </li>
                <li>
                    <label>Edad</label>
                    <select class=" d-inline custom-select custom-select-sm" name="edad" id="edad">

                    </select>
                </li>
            </ul>
            </form>

        <button class="btn btn-outline-dark" id="calcular">Calcular</button>`
    
  
    let sexoSelector = document.getElementById('sexo');

    cargarOpciones(sexoSelector.value);
    sexoSelector.addEventListener('change', () => {

        document.querySelector('.caderaBox').style.display = (sexoSelector.value === 'men') ? 'none' : 'block';

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
  

    document.getElementById('app').innerHTML = `  <label>${porcGrasa}%</label> 
    <label>${kgGrasa}KG</label>
    <label>${kgMagro}KG</label>
    <button class="btn btn-outline-dark" id="volver">volver</button>`;

    document.getElementById('volver').addEventListener('click', () => {
        initHTML();
    });
}

initHTML();






