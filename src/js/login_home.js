document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let valid = true;

    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("successMessage").textContent = "";

    // validacao do email
    if (!email) {
        document.getElementById("emailError").textContent = "O campo de e-mail não pode estar vazio.";
        valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailError").textContent = "Por favor, insira um e-mail válido.";
        valid = false;
    }

    // validação da senha
    if (!password) {
        document.getElementById("passwordError").textContent = "O campo de senha não pode estar vazio.";
        valid = false;
    } else if (password.length < 6) {
        document.getElementById("passwordError").textContent = "A senha deve ter pelo menos 6 caracteres.";
        valid = false;
    }

    // Se validado, mostra a mensagem de sucesso
    if (valid) {
        document.getElementById("successMessage").textContent = "Login realizado com sucesso!";
    }
});
