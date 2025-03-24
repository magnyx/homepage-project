export function listaDeDesejos () {
    let lista = ["Piano Casio Vermelho", "desejo 2"];


    let mainContainer = document.getElementById('lista-de-desejos');

    lista.forEach(element => {
        let itemLista = document.createElement('div');
        itemLista.textContent = `${element}`;
        mainContainer.appendChild(itemLista);
    });   

}