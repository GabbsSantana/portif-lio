document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.botao-download').forEach(botao => {
      botao.addEventListener('click', () => {
        const texto = botao.querySelector('.texto');
        const loading = botao.querySelector('.loading');
        let porcentagem = 0;
  
        botao.classList.add('baixando');
        texto.textContent = 'Baixando...';
        loading.textContent = '0%';
  
        // Animação de porcentagem subindo
        const intervalo = setInterval(() => {
          porcentagem += 5;
          loading.textContent = `${porcentagem}%`;
  
          if (porcentagem >= 100) {
            clearInterval(intervalo);
            loading.textContent = '';
            texto.textContent = 'Concluído!';
            botao.classList.remove('baixando');
            botao.querySelector('.check').style.opacity = 1;
  
            // Fazer o download
            const arquivo = botao.getAttribute('data-arquivo');
            const link = document.createElement('a');
            link.href = arquivo;
            link.download = '';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
  
            // Resetar botão
            setTimeout(() => {
              texto.textContent = 'Download CV';
              botao.querySelector('.check').style.opacity = 0;
            }, 3000);
          }
        }, 100); // Atualiza a cada 100ms até 100%
      });
    });
  });
  