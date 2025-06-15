document.addEventListener('DOMContentLoaded', function() {

    // --- 1. Navegação Ativa ---
    // Adiciona uma classe 'active' ao link de navegação da página atual.
    const setActiveNavLink = () => {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html'; // Pega o nome do arquivo da URL
        const navLinks = document.querySelectorAll('nav ul li a');

        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href').split('/').pop();
            if (linkPage === currentPage) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page'); // Para acessibilidade
            } else {
                link.classList.remove('active');
                link.removeAttribute('aria-current');
            }
        });
    };
    setActiveNavLink();

    // --- 2. Ano Atual no Rodapé (Opcional) ---
    // Atualiza o ano no elemento com id 'current-year'.
    const setCurrentYear = () => {
        const yearSpan = document.getElementById('current-year');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    };
    setCurrentYear(); // Chame se você adicionar o rodapé com o span

    // --- 3. Manipulação do Formulário de Contato ---
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Previne o envio padrão do formulário

            // Validação Simples (HTML5 'required' já faz bastante)
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();

            if (!nome || !email || !mensagem) {
                formStatus.textContent = 'Por favor, preencha todos os campos obrigatórios.';
                formStatus.className = 'status-error'; // Para estilização
                return; // Interrompe se a validação falhar
            }
            
            // Simulação de envio de formulário
            // Em um projeto real, aqui você faria uma requisição AJAX para um backend
            // ou usaria um serviço como Formspree, Netlify Forms, etc.
            formStatus.textContent = 'Enviando mensagem...';
            formStatus.className = 'status-loading';

            setTimeout(() => {
                // Simula uma resposta de sucesso
                formStatus.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso. (Simulação)`;
                formStatus.className = 'status-success';
                contactForm.reset(); // Limpa o formulário após o envio "bem-sucedido"

                // Remove a mensagem de status após alguns segundos
                setTimeout(() => {
                    formStatus.textContent = '';
                    formStatus.className = '';
                }, 5000);

            }, 2000); // Simula um pequeno atraso de rede
        });
    }

    // --- Ideias para funcionalidades futuras (descomente e implemente se desejar) ---

    // Efeito "máquina de escrever" para um título específico
    /*
    const typeWriter = (elementId, text, speed = 150) => {
        const element = document.getElementById(elementId);
        if (!element) return;
        element.textContent = ''; // Limpa o conteúdo inicial
        let i = 0;
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    };
    // Exemplo de uso (chame para o h1 da página principal, por exemplo):
    // if (document.querySelector('body main section#sobre-mim h1')) { // Verifique se o elemento existe na página atual
    //    typeWriter(document.querySelector('body main section#sobre-mim h1').id, "Felipe Toledo"); // Precisa de ID no H1
    // }
    */

    // Animação suave ao rolar para âncoras (se você adicionar links internos)
    /*
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    */
});

// Adicione este CSS ao seu style.css para a navegação ativa e status do formulário:
/*
nav ul li a.active {
    color: var(--color-primary-yellow); / Cor de destaque para o link ativo /
    text-shadow: 0 0 10px var(--color-primary-yellow), 0 0 20px var(--color-primary-yellow);
    position: relative;
}

nav ul li a.active::after { / Opcional: um sublinhado ou outro indicador /
    content: '';
    position: absolute;
    bottom: -2px; / Ajuste conforme necessário /
    left: 50%;
    transform: translateX(-50%);
    width: 60%; / Largura do indicador /
    height: 2px;
    background-color: var(--color-primary-yellow);
    border-radius: 1px;
}

#form-status {
    margin-top: 15px;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    font-weight: bold;
}

.status-success {
    background-color: rgba(72, 251, 170, 0.2); / Verde claro com transparência /
    color: #009900; / Verde escuro /
    border: 1px solid #009900;
}

.status-error {
    background-color: rgba(255, 107, 129, 0.2); / Rosa/vermelho claro com transparência /
    color: #cc0000; / Vermelho escuro /
    border: 1px solid #cc0000;
}

.status-loading {
    background-color: rgba(72, 219, 251, 0.2); / Ciano claro com transparência /
    color: var(--color-heading);
    border: 1px solid var(--color-primary-cyan);
}
*/