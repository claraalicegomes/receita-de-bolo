// Aguarda o documento ser totalmente carregado
document.addEventListener("DOMContentLoaded", function() {
    
    // Seleciona o botão pelo ID
    const botao = document.getElementById("btn-alerta");
    
    // Adiciona o evento de clique
    botao.addEventListener("click", function() {
        alert("Bom apetite! Prepare o café!");
    });

});