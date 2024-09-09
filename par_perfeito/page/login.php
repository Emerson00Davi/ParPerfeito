<!DOCTYPE html>
<php lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/login.css">
    <title>Par Perfeito</title>
</head>
<body>
    <div class="container">
        <div class="navbar">
            <a href="index.php"> <img src="https://media-public.canva.com/tzILQ/MACy90tzILQ/6/t.png" class="logo"> </a>

            <nav>
                <ul>
                    <li> <a href="index.php">Início</a></li>
                    <li> <a href="cadastro.php">Cadastro</a></li>
                    <li> <a href="pacotes.php">Pacotes</a></li>
                    <li> <a href="login.php">Login</a></li>
                    <img src="img/menu.png" class="menu-icon">
                </ul>
            </nav>
        </div>
        

        <div class="row">
            <div class="col">
                <div class="card4 carda">
                    <h3> LOGIN </h3>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" class="pct" placeholder="Digite seu email">
                    <br>
                    <label for="password">Senha:</label>
                    <input type="password" id="password" name="password" class="pct" placeholder="Digite sua senha">
                    <span class="eye-icon" onclick="togglePassword()">👁️</span>
                    <br>
                    <br>
                    <center><button class="custom-button"> <h5>‎ ‎ ‎  Entrar</h5> <span class="arrow">→</span></button></center>
                </div>    
            </div>

            <img src="img/cupido.png" class="espelhado" alt="cupido">
        </div>

    </div>

<script>
    function togglePassword() {
        const passwordField = document.getElementById("password");
        const eyeIcon = document.querySelector(".eye-icon");
        if (passwordField.type === "password") {
            passwordField.type = "text";
            eyeIcon.textContent = "🙈";
        } else {
            passwordField.type = "password";
            eyeIcon.textContent = "👁️";
        }
    }
</script>

</body>
</php>
