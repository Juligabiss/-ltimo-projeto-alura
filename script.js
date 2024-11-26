document.addEventListener("DOMContentLoaded", () => {
    const passos = document.querySelectorAll(".passo");
    const botoesProximo = document.querySelectorAll(".btn-proximo");

    function alternarPasso(atual, proximo) {
        const passoAtual = document.getElementById(`passo-${atual}`);
        const passoProximo = document.getElementById(`passo-${proximo}`);

        if (passoAtual) passoAtual.classList.remove("ativo");
        if (passoProximo) passoProximo.classList.add("ativo");
    }

    botoesProximo.forEach((botao) => {
        botao.addEventListener("click", () => {
            const passoAtual = botao.closest(".passo").id.split("-")[1];
            const proximoPasso = botao.getAttribute("data-proximo");

            alternarPasso(passoAtual, proximoPasso);
        });
    });
});
