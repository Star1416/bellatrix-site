
// Animação de entrada das seções //
const sections = document.querySelectorAll('section');

const observerOptions = {
    threshold: 0.1,
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }

    });
}, observerOptions);

sections.forEach(section => {
    section.classList.add('fade-in-section');
    sectionObserver.observe(section);
});



//Barra de progresso de leitura (scroll)//
// Mostra ao usuário o quanto da página ele já rolou//
const progressBar = document.getElementById('scroll-progress');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    if (progressBar) {
        progressBar.style.width = scrollPercent + '%';
    }
});



// FORMULÁRIO DE PATROCÍNIO //

const formulario = document.querySelector("form");

const overlay = document.getElementById("sucesso-overlay");
const fecharOverlay = document.getElementById("fechar-overlay");
const dataEnvio = document.getElementById("data-envio");

formulario.addEventListener("submit", function(event){

    // impede o recarregamento da página
    event.preventDefault();

    // pega data e hora atual
    const agora = new Date();

    dataEnvio.textContent =
        "Solicitação registrada em: " +
        agora.toLocaleDateString("pt-BR") +
        " às " +
        agora.toLocaleTimeString("pt-BR");

    // mostra o overlay
    overlay.classList.add("ativo");

    // limpa os campos
    formulario.reset();
});


// Fechar overlay

fecharOverlay.addEventListener("click", () => {
    overlay.classList.remove("ativo");
});

