async function buscarUsuarios() {
  const status = document.getElementById("status");
  const lista = document.getElementById("lista");

  status.textContent = "Carregando...";
  status.className = "loading";
  lista.innerHTML = "";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Erro na requisição");
    }

    const usuarios = await response.json();

    status.textContent = "";

    usuarios.forEach(usuario => {
      const div = document.createElement("div");
      div.className = "user";
      div.innerHTML = `
        <strong>${usuario.name}</strong><br>
        Email: ${usuario.email}<br>
        Cidade: ${usuario.address.city}
      `;
      lista.appendChild(div);
    });

  } catch (error) {
    status.textContent = "Erro ao carregar usuários";
    status.className = "error";
  }
}
