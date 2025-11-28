const botao = document.getElementById("modo-btn");
const body = document.body;

if (localStorage.getItem('tema') === 'dark') {
    body.classList.add('dark');
    botao.textContent = "◐";
}

botao.addEventListener("click", () => {

    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        botao.textContent = "◐";
        localStorage.setItem('tema', 'dark');
    } else {
        botao.textContent = "◐";
        localStorage.setItem('tema', 'light');
    }
});
