//Async regresa una promesa

let getNombre1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Gustavo");
        }, 3000);
    });
}

let getSaludo = async () => {
    let nombre = await getNombre1();
    return `hola ${ nombre }`
}

getSaludo().then(nombre => {
    console.log(nombre);
}).catch(e => {
    console.log("ERRO", e)
});

