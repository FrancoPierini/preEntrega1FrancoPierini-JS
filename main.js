alert('Bienvenido El Shopping del Mueble');

let carrito = {
    interior: [],
    exterior: []
};

function tomardatos() {
    let nombre = prompt('Ingrese su nombre');
    let apellido = prompt('Ahora ingrese su apellido');
    let Nombrecompleto = nombre + ' ' + apellido;
    alert('Hola estimado, '+ Nombrecompleto)
    return Nombrecompleto;
}

function elegirMueble() {
    let Nombrecompleto = tomardatos();
    let continuar = true;

    while (continuar) {
        let tipomueble = prompt('Ingrese "int" si necesita muebles de interior, Ingrese "ext" si necesita muebles de exterior').toLowerCase();
        let mueble = {};

        mueble.tipo = prompt('Mencione en que madera le gustaria su mueble ');
        mueble.tamaño = prompt('Ingrese que tamaño le gustaria');
        mueble.color = prompt('Mencione el color que desea)');

        switch (tipomueble) {
            case 'int':
                carrito.interior.push(mueble);
                alert('Agrego un mueble de interior a su carrito ' + Nombrecompleto);
                break;
            case 'ext':
                carrito.exterior.push(mueble);
                alert('Agrego un mueble de exterior ' + Nombrecompleto);
                break;
            default:
                alert('Opción incorrecta, reintente nuevamente');
                continue;
        }

        continuar = confirm('Desea seguir agregando muebles a su compra, ' + Nombrecompleto + '?');
    }

    console.log('Muebles de Interior:', carrito.interior);
    console.log('Muebles de Exterior:', carrito.exterior);
    alert('Revisa la consola para ver el listado de prendas.');
}

elegirMueble();