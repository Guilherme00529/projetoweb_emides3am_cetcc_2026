function cadastrar() {
    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let telefone = document.getElementById("telefone").value;
    let email = document.getElementById("email").value;


    if (nome === "" || cpf === "" || telefone === "" || email === "") {
        alert("Preencha todos os campos!");
        return;
    }

  
    let lista = document.getElementById("lista");
    let item = document.createElement("li");

    item.innerHTML = `
        Nome: ${nome} | 
        CPF: ${cpf} | 
        Telefone: ${telefone} | 
        Email: ${email}
    `;

    lista.appendChild(item);


    document.getElementById("nome").value = "";
    document.getElementById("cpf").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("email").value = "";
}