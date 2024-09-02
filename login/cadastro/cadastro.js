// Variável para armazenar usuários
let users = [];

// Função de cadastro
let registeredUsers = [];

function register() {
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    if (email && name && password) {
        const user = { email, name, password };
        
        // Adiciona o novo usuário à variável global registeredUsers
        registeredUsers.push(user);
        
        alert('Usuário cadastrado com sucesso!');
        console.log(registeredUsers); // Exibe os usuários cadastrados no console

        // Redireciona para a página de login
        window.location.href = "../login.html";
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}