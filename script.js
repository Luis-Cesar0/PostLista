document.getElementById("formPost").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const titulo = document.getElementById("titulo").value;
    const conteudo = document.getElementById("conteudo").value;
  
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: titulo,
        body: conteudo,
        userId: 1
      })
    })
    .then(res => res.json())
    .then(postCriado => {
      // Adicionar o post criado à lista
      adicionarPostNaLista(postCriado);
  
      // Limpar o formulário
      this.reset();
    })
    .catch(err => {
      console.error("Erro ao criar post:", err);
    });
  });
  
  // Função para adicionar o post à lista de posts exibidos
  function adicionarPostNaLista(post) {
    const lista = document.getElementById("post-list");
  
    // Criar item de lista
    const item = document.createElement("li");
    item.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.body}</p>
    `;
  
    // Adicionar o novo item à lista
    lista.appendChild(item);
  }
  