let amigosLista=[];
const htmlListaNome = document.getElementById('listaAmigos');
const itensListaNome = document.createElement('li');

function adicionarAmigo()
    {
        let amigoNome = document.querySelector('input').value
        amigosLista.push(amigoNome);
        const itensListaNome = document.createElement('li');
        itensListaNome.textContent=amigoNome;
        htmlListaNome.appendChild(itensListaNome);
        console.log(amigosLista);
    }