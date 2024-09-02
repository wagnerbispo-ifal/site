// Variável para armazenar usuários
let users = [];

function register() {
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    if (email && name && password) {
        const user = { email, name, password };
        users.push(user);
        alert('Usuário cadastrado com sucesso!');
        console.log(users); // Para verificar os usuários cadastrados
    } else {
        alert('Por favor, preencha todos os campos.');
    }
    console.log(users); 
    // Armazena o usuário em uma variável (ou localStorage, se preferir)
    localStorage.setItem('users', JSON.stringify(users));
    // Redireciona para a página de sucesso
    window.location.href = "../login.html";
}