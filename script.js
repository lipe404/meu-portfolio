document.addEventListener("DOMContentLoaded", function () {
  // --- 1. Navegação Ativa ---
  // Adiciona uma classe 'active' ao link de navegação da página atual.
  const setActiveNavLink = () => {
    const currentPage =
      window.location.pathname.split("/").pop() || "index.html"; // Pega o nome do arquivo da URL
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach((link) => {
      const linkPage = link.getAttribute("href").split("/").pop();
      if (linkPage === currentPage) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page"); // Para acessibilidade
      } else {
        link.classList.remove("active");
        link.removeAttribute("aria-current");
      }
    });
  };
  setActiveNavLink();

  // --- 2. Manipulação do Formulário de Contato ---
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  if (contactForm && formStatus) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Previne o envio padrão do formulário

      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const mensagem = document.getElementById("mensagem").value.trim();

      if (!nome || !email || !mensagem) {
        formStatus.textContent =
          "Por favor, preencha todos os campos obrigatórios.";
        formStatus.className = "status-error";
        return;
      }

      // Simulação de envio de formulário
      formStatus.textContent = "Enviando mensagem...";
      formStatus.className = "status-loading";

      setTimeout(() => {
        // Simula uma resposta de sucesso
        formStatus.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
        formStatus.className = "status-success";
        contactForm.reset(); // Limpa o formulário após o envio "bem-sucedido"

        // Remove a mensagem de status após alguns segundos
        setTimeout(() => {
          formStatus.textContent = "";
          formStatus.className = "";
        }, 5000);
      }, 2000); // Simula um pequeno atraso de rede
    });
  }

});