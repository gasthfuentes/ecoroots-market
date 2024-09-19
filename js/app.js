// Bienvenida personalizada a EcoRoots Market
let nombreUsuario = prompt("¡Bienvenido a EcoRoots Market! Tu tienda de productos naturales y sustentables. ¿Cuál es tu nombre?");
alert("Hola " + nombreUsuario + ", en EcoRoots Market creemos en el poder de conectar consumidores con productores responsables.");

// Productos disponibles
alert("En EcoRoots Market ofrecemos:\n1. Miel Orgánica\n2. Café de Comercio Justo\n3. Quinoa Andina");
let opcionProducto = prompt(nombreUsuario + ", ¿qué producto te interesa? (Escribe 1, 2 o 3)");

function mostrarProductoSeleccionado(opcion) {
    if (opcion === "1") {
        return "Has seleccionado Miel Orgánica. Cosechada de manera sostenible por apicultores locales, respetando el ecosistema de las abejas.";
    } else if (opcion === "2") {
        return "Has seleccionado Café de Comercio Justo. Este café es cultivado sin químicos por comunidades indígenas, asegurando un trato justo a los productores.";
    } else if (opcion === "3") {
        return "Has seleccionado Quinoa Andina. Un súper alimento proveniente de cooperativas de agricultura ancestral que respetan la biodiversidad.";
    } else {
        return "Opción no válida. Por favor selecciona 1, 2 o 3.";
    }
}

alert(mostrarProductoSeleccionado(opcionProducto));

// Calcular el total de la compra
let totalCompra = 0;

if (opcionProducto === "1") {
    totalCompra += 15.99;
} else if (opcionProducto === "2") {
    totalCompra += 12.50;
} else if (opcionProducto === "3") 
    totalCompra += 10.00;

alert(nombreUsuario + ", el total de tu compra en EcoRoots Market es de $" + totalCompra + ".");

// Preguntar si desea agregar más productos
let agregarMas = prompt("¿Te gustaría agregar más productos a tu compra, " + nombreUsuario + "? (si/no)");

if (agregarMas === "si") 
    alert("Volvamos a ver los productos disponibles en EcoRoots Market.");
    let nuevoProducto = prompt("Escribe 1 para Miel Orgánica, 2 para Café de Comercio Justo o 3 para Quinoa Andina.");
    
    if (nuevoProducto === "1") {
        totalCompra += 15.99;
    } else if (nuevoProducto === "2") {
        totalCompra += 12.50;
    } else if (nuevoProducto === "3") {
        totalCompra += 10.00;
    
    alert("Tu nuevo total es: $" + totalCompra + ".");
} else {
    alert("Gracias por tu compra, " + nombreUsuario + ". En EcoRoots Market estamos comprometidos con el bienestar de las personas y el planeta.");
}

// Descuento por compras superiores a $30 y mensaje de responsabilidad social
if (totalCompra > 30) {
    let descuento = 5;
    totalCompra -= descuento;
    alert("¡Felicidades " + nombreUsuario + "! Como agradecimiento por apoyar productos sustentables, aplicamos un descuento de $5. Tu nuevo total es: $" + totalCompra + ".");
} else {
    alert("Gracias por apoyar nuestra misión en EcoRoots Market. Recuerda que cada compra impacta positivamente en las comunidades productoras.");
}

// Función para calcular envío y reforzar el compromiso con el medio ambiente
const calcularEnvio = (total) => {
    return total > 50 ? 0 : 5;
};

let costoEnvio = calcularEnvio(totalCompra);
if (costoEnvio === 0) {
    alert("¡Disfruta de envío gratuito por apoyar productos que cuidan el planeta, " + nombreUsuario + "!");
} else {
    alert("El costo de envío es de $" + costoEnvio + ". Cada envío en EcoRoots Market compensa las emisiones de carbono.");
    totalCompra += costoEnvio;
}

alert("Tu total final, con envío incluido, es: $" + totalCompra + ". ¡Gracias por ser parte del cambio en EcoRoots Market!");

// Array de productos disponibles con descripciones que resaltan el comercio justo y la sustentabilidad
let productos = [
    { nombre: "Miel Orgánica", precio: 15.99, descripcion: "Producida por apicultores locales que respetan la biodiversidad." },
    { nombre: "Café de Comercio Justo", precio: 12.50, descripcion: "Cultivado sin químicos por comunidades indígenas." },
    { nombre: "Quinoa Andina", precio: 10.00, descripcion: "Proveniente de cooperativas que siguen prácticas agrícolas ancestrales." }
];

// Mostrar productos
let verMas = prompt(nombreUsuario + ", ¿quieres conocer más sobre los productos de EcoRoots Market? (si/no)");

if (verMas === "si") {
    productos.forEach(producto => {
        alert("Producto: " + producto.nombre + "\nPrecio: $" + producto.precio + "\nDescripción: " + producto.descripcion);
    });
    alert("Gracias por explorar nuestros productos, " + nombreUsuario + ". ¡Te esperamos pronto en EcoRoots Market!");
} else {
    alert("Gracias por tu compra, " + nombreUsuario + ". En EcoRoots Market estamos comprometidos con un futuro más sostenible.");
}