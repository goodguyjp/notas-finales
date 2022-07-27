var nombre = prompt("Ingrese su nombre", "");
var carrera = prompt ("Ingrese Carrera", "");

var nombreMateria = prompt("Ingrese nombre de la materia 1", "");
var nombreMateria2 = prompt("Ingrese nombre de la materia 2", "");

var notaUnoMateriaUno = prompt("Ingrese nota 1 de la materia 1");
var notaDosMateriaUno = prompt("Ingrese nota 2 de la materia 1");
var notaTresMateriaUno = prompt("Ingrese nota 3 de la materia 1");
var promedioUno = (parseInt(notaUnoMateriaUno) + parseInt(notaDosMateriaUno) + parseInt(notaTresMateriaUno)) / 3;

var notaUnoMateriaDos = prompt("Ingrese la nota 1 de la materia 2");
var notaDosMateriaDos = prompt("Ingrese la nota 2 de la materia 2");
var notaTresMateriaDos = prompt("Ingrese la nota 3 de la materia 2");
var promedioDos = (parseInt(notaUnoMateriaDos) + parseInt(notaDosMateriaDos) + parseInt(notaTresMateriaDos)) / 3;


document.write(

`
<section class="container">
        <h1>Notas Finales</h1>
        <p>Nombre: ${nombre} </p>
        <p>Carrera: ${carrera}</p>

        <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Ramo</th>
                <th scope="col">Nota 1</th>
                <th scope="col">Nota 2</th>
                <th scope="col">Nota3</th>
                <th scope="col">Promedio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">${nombreMateria}</th>
                <td>${notaUnoMateriaUno}</td>
                <td>${notaDosMateriaUno}</td>
                <td>${notaTresMateriaUno}</td>
                <td>${promedioUno.toFixed(2)}</td>
              </tr>
              <tr>
                <th scope="row">${nombreMateria2}</th>
                <td>${notaUnoMateriaDos}</td>
                <td>${notaDosMateriaDos}</td>
                <td>${notaTresMateriaDos}</td>
                <td>${promedioDos.toFixed(2)}</td>
              </tr>
             
            </tbody>
          </table>
    </section>
`

)