# 🎲 **Desafio Alura + Oracle ONE** - Sorteador de Amigos

## 📌 Sobre o Projeto

Este projeto foi desenvolvido como parte do **Programa ONE (Oracle Next Education)** em parceria com a **Alura**, como desafio de conclusão do módulo de JavaScript. O objetivo era criar um sorteador de nomes funcional utilizando conceitos fundamentais de JavaScript.

## ✨ Funcionalidades Implementadas

### ✅ **Requisitos do Desafio**
- [x] Adicionar nomes a uma lista
- [x] Realizar sorteio aleatório
- [x] Exibir resultado do sorteio
- [x] Validar entrada vazia

### 🎯 **Extras Implementados**
- Visualização da lista de participantes
- Esconder/Mostrar elementos dinamicamente
- Feedback visual para o usuário

## 🛠️ Tecnologias Utilizadas
- ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black) JavaScript puro
- ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white) HTML5 semântico
- ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white) CSS3 básico

## 📝 Como Funciona

```javascript
// Array para armazenar os nomes
let amigosLista = [];

// Função para adicionar amigos
function adicionarAmigo() {
    let amigoNome = document.querySelector('input').value;
    if(amigoNome.trim() !== '') {
        // Lógica de adição...
    } else {
        alert("Campo vazio!");
    }
}

// Função para sortear
function sortearAmigo() {
    if(amigosLista.length > 0) {
        // Lógica de sorteio...
    }
}
```

## 🚀 Como Executar

1. Clone o repositório
2. Abra o arquivo `index.html` no navegador
3. Adicione nomes e clique em "Sortear"

## 📚 Aprendizados do Desafio

- Manipulação de arrays
- Trabalho com DOM
- Validação de inputs
- Geração de números aleatórios
- Manipulação de atributos HTML

## 🔗 Links Úteis

- [Oracle ONE](https://www.oracle.com/br/education/oracle-next-education/)
- [Alura](https://www.alura.com.br)
- [Trilha Front-end ONE](https://www.alura.com.br/imersao-javascript)

---
