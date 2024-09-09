<? 
    $idUsuario = 0;
    $situacao_plano = false;
?>
<!DOCTYPE html>
<php lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="css/cadastro.css">
    <title>Par Perfeito</title>
</head>
<body>
    <div class="container">
        <!-- Navbar -->
        <div class="navbar">
            <a href="index.php"><img src="https://media-public.canva.com/tzILQ/MACy90tzILQ/6/t.png" class="logo"></a>
            <nav>
                <ul>
                    <li><a href="index.php">Início</a></li>
                    <li><a href="cadastro.php">Cadastro</a></li>
                    <li><a href="pacotes.php">Pacotes</a></li>
                    <li><a href="login.php">Login</a></li>
                    <img src="img/menu.png" class="menu-icon">
                </ul>
            </nav>
        </div>

        <br>
        
        <!-- Barra de navegação das etapas -->
        <div class="top-nav">
            <div id="nav-pessoal">Pessoal</div>
            <div id="nav-caracteristicas" class="inactive">Características</div>
            <div id="nav-pacote" class="inactive">Pacote</div>
            <div id="nav-pagamento" class="inactive">Pagamento</div>
        </div>

        <br>

        <!-- Formulário -->
        <div class="row">
            <div class="col">
                <div class="card5 cardc">
                    <div class="form-container">
                        <form id="multiStepForm" action="../controller/usuario_salvar.php" method="post" enctype="" >
                            <!-- Página 1: Pessoal -->
                            <div class="form-page" id="page1">
                                <center><h3>Informações Pessoais</h3></center>
                                <br>
                                <div>
                                    <input type="hidden" id="idUsuario" name="idUsuario" value="<?php echo $idUsuario?>">
                                </div>
                                <div>
                                    <input type="hidden" id="situacao_plano" name="situacao_plano" value="<?php echo $situacao_plano ?>">
                                    <
                                </div>
                                


                                <label for="name">Nome:</label>
                                <input type="text" id="name" name="nome" class="form-input" placeholder="Digite seu nome" required>

                                <label for="cpf">CPF:</label>
                                <input type="text" id="cpf" name="cpf" class="form-input" placeholder="Digite seu cpf" required>

                                <label for="email">Email:</label>
                                <input type="text" id="email" name="email" class="form-input" placeholder="Digite seu email" required>

                                <label for="senha">Senha:</label>
                                <input type="password" id= "senha" name="senha" class="form-input" placeholder="Digite sua senha" required>

                                <!-- Linha com "Turma" e "Preferência" -->
                                <div class="form-row">
                                    <div>
                                        <label for="turma">Turma:</label>
                                        <select id="turma" name="turma" class="form-input" required>
                                            <option value="">Selecione sua turma</option>
                                            <option value="DS1">DS1</option>
                                            <option value="DS2">DS2</option>
                                            <option value="DS3">DS3</option>
                                            <option value="EDI1">EDI1</option>
                                            <option value="EDI2">EDI2</option>
                                            <option value="EDI3">EDI3</option>
                                            <option value="QUI1">QUI1</option>
                                            <option value="QUI2">QUI2</option>
                                            <option value="QUI3">QUI3</option>
                                        </select>
                                    </div>
                                
                                    <div>
                                        <label for="pref">Preferência:</label>
                                        <select id="pref" name="preferencia" class="form-input" required>
                                            <option value="">Selecione</option>
                                            <option value="homens">Homens</option>
                                            <option value="mulheres">Mulheres</option>
                                            <option value="tudo">Tudo</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <div class="form-row">
                                    <!-- <div>
                                        <label for="insta">Instagram:</label>
                                        <input type="text" id="insta" name="usuario_insta" class="form-input" placeholder="Digite seu @" required>

                                    </div> -->
                                
                                    <div>
                                        <label for="data_nasc">Data de nascimento:</label>
                                        <input type="text" id="idade" name="data_nasc" class="form-input" placeholder="Digite sua data de nascimento" required>
                                    </div>
                                </div>                                
                            </div>

                            <!-- Página 2: Características -->
                            <div class="form-page" id="page2">
                                <center><h3>Características</h3></center>
                            
                                <!-- Interesses e Gostos Musicais Lado a Lado (off por enquanto) -->
                                
                                <!-- Autodescrição -->
                                 <label for="descricao">Faça uma breve autodescrição</label>
                                 <input type="text" id="descricao" name="descricao" class="form-input" placeholder="Lança a braba irmão">
                            
                                <!-- O que você procura? -->
                                <label for="interesse">O que você procura?</label>
                                <select id="interesse" name="interesse" class="form-input" required>
                                    <option value="" disabled selected>Selecione</option>
                                    <option value="Apenas Amizade">Apenas Amizade</option>
                                    <option value="Amizade Colorida">Amizade Colorida</option>
                                    <option value="Apenas Uns Beijinhos">Apenas Uns Beijinhos</option>
                                    <option value="Algo Mais Sério">Algo Mais Sério</option>
                                </select>
                            </div>
                                                      

                            <!-- Página 3: Pacote -->
                            <div class="form-page" id="page3">
                                <h3>Escolha de Pacote</h3>
                                <label for="codPlano">Pacote:</label>
                                <!-- <select id="codPlano" name="codPlano" class="form-input">
                                    <option value="1">Tá duro? Dorme!</option>
                                    <option value="2">A Bolsa Caiu!!</option>
                                    <option value="3">Tô RYCAA!!!</option>
                                </select> -->
                            </div>

                            <!-- Página 4: Pagamento -->
                            <div class="form-page" id="page4">
                                <h3>Detalhes do Pagamento</h3>
                                <label for="cardNumber">Número do Cartão:</label>
                                <input type="text" id="cardNumber" name="cardNumber" class="form-input" placeholder="Digite o número do cartão">
                                <label for="expiryDate">Data de Validade:</label>
                                <input type="text" id="expiryDate" name="expiryDate" class="form-input" placeholder="MM/AA">
                                <label for="cvv">CVV:</label>
                                <input type="text" id="cvv" name="cvv" class="form-input" placeholder="Digite o CVV">
                            </div>

                            <!-- Navegação -->
                            <div class="form-navigation">
                                <button type="button" id="prevBtn" class="nav-button" onclick="changePage(-1)">Anterior</button>
                                <button type="button" id="nextBtn" class="nav-button" onclick="changePage(1)">Próximo</button>
                                <button type="submit" id="submitBtn" class="nav-button" style="display:none;">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>    
            </div>
        </div>
    </div>
    </div>

    <script>
        let currentPage = 1;
        const totalPages = 4;

        function updateNav() {
            const navItems = ['nav-pessoal', 'nav-caracteristicas', 'nav-pacote', 'nav-pagamento'];
            navItems.forEach((item, index) => {
                document.getElementById(item).classList.toggle('inactive', index + 1 !== currentPage);
            });
        }

        function validatePage() {
            const currentPageElement = document.querySelector(`.form-page:nth-child(${currentPage})`);
            const inputs = currentPageElement.querySelectorAll("input, select, textarea");
            let isValid = true;

            inputs.forEach(input => {
                if (input.id === 'idade' && input.value < 0) {
                    input.setCustomValidity("A idade não pode ser negativa.");
                    input.reportValidity();
                    isValid = false;
                } else {
                    input.setCustomValidity(""); // Limpa qualquer mensagem de erro anterior
                }

                if (!input.checkValidity()) {
                    input.reportValidity();
                    isValid = false;
                }
            });

            return isValid;
        }

        
        function changePage(step) {
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            const submitBtn = document.getElementById('submitBtn');

            // Valida os campos antes de avançar para a próxima página
            if (step === 1 && !validatePage()) {
                return; // Se a validação falhar, não avança
            }
            
            if (step === 1 && currentPage < totalPages) {
                currentPage++;
            } else if (step === -1 && currentPage > 1) {
                currentPage--;
            }
            
            document.querySelectorAll('.form-page').forEach((page, index) => {
                page.style.display = (index + 1 === currentPage) ? 'block' : 'none';
            });

            prevBtn.style.display = (currentPage === 1) ? 'none' : 'inline-block';
            nextBtn.style.display = (currentPage === totalPages) ? 'none' : 'inline-block';
            submitBtn.style.display = (currentPage === totalPages) ? 'inline-block' : 'none';

            updateNav();
        }
        
        document.addEventListener('DOMContentLoaded', () => {
            changePage(0); //    Inicializa o formulário
        });

        document.getElementById('insta').addEventListener('input', function (event) {
            const instaField = event.target;

            if (!instaField.value.startsWith('@')) {
                instaField.value = '@' + instaField.value.replace(/^@+/, ''); // Adiciona "@" automaticamente e remove extras
            }
        });

        function validateCheckboxGroup(name) {
            const checkboxes = document.querySelectorAll(`input[name="${name}"]`);
            let isChecked = false;

            checkboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    isChecked = true;
                }
            });

            return isChecked;
        }

        // function validateForm() {
        //     const interessesValid = validateCheckboxGroup('interesses');
        //     const gostosValid = validateCheckboxGroup('gostos-musicais');
        //     const definicoesValid = validateCheckboxGroup('definicoes');

        //     // if (!interessesValid) {
        //     //     alert('Por favor, selecione ao menos uma opção em "Interesses".');
        //     //     return false;
        //     // }

        //     if (!gostosValid) {
        //         alert('Por favor, selecione ao menos uma opção em "Gostos Musicais".');
        //         return false;
        //     }

        //     if (!definicoesValid) {
        //         alert('Por favor, selecione ao menos uma opção em "Definições".');
        //     return false;
        //     }
            
        //     return true;
        // }

        // document.querySelector('form').addEventListener('submit', function(event) {
        //     if (!validateForm()) {
        //         event.preventDefault();
        //     }
        // });


    </script>
</body>
</php>
