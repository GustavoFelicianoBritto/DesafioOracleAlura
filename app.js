let amigosLista=[];
const htmlListaNome = document.getElementById('listaAmigos');
const itensListaNome = document.createElement('li');
const resultado = document.getElementById('resultado');

function adicionarAmigo()
    {
        let amigoNome = document.querySelector('input').value
        if(amigoNome.trim() !== '')
            {
                htmlListaNome.removeAttribute('hidden');
                amigoNome = amigoNome.trim();
                amigosLista.push(amigoNome);
                const itensListaNome = document.createElement('li');
                itensListaNome.textContent=amigoNome;
                htmlListaNome.appendChild(itensListaNome);
                console.log(amigosLista);
            }
            else
                {
                    alert("Campo vazio!");
                }
    }


function sortearAmigo()
    {
        if(amigosLista.length>0)
        {
            let numero = parseInt(Math.random() * amigosLista.length);
            console.log(numero);
            console.log(amigosLista[numero]);
            htmlListaNome.setAttribute('hidden','');
            resultado.innerHTML="Amigo sorteado: "+amigosLista[numero]+""
        }
        

        
    }