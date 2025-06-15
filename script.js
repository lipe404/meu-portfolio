document.addEventListener("DOMContentLoaded", function () {
  // Neste parte do código, eu configuro a navegação ativa para destacar o link da página atual.
  // Isso melhora a usabilidade, permitindo que os usuários saibam em qual página estão.
  const setActiveNavLink = () => {
    const currentPage =
      window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach((link) => {
      const linkPage = link.getAttribute("href").split("/").pop();
      if (linkPage === currentPage) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
      } else {
        link.classList.remove("active");
        link.removeAttribute("aria-current");
      }
    });
  };
  setActiveNavLink();

  // Nesta parte do código, eu configuro o formulário de contato para validar os campos e simular o envio.
  // Isso é importante para garantir que os usuários recebam feedback imediato sobre o status do envio.
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