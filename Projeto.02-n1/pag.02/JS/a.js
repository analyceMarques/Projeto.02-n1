let count = 3;
//variavel que recebe 3 pra comecar 
    const countd = document.getElementById('contador');
    // busca o contador (id)

    const cont = setInterval(() => {
    // função → O que você quer executar repetidamente;

    // tempo → Intervalo entre cada execução (em milissegundos, 1000 ms = 1 segundo).

      count--;
      if (count > 0) {
        countd.textContent = count;
      // o textContent muda o html
      } else if (count === 0) {
        countd.textContent = 'GO!';
      } else {
        clearInterval(cont);
        // Aqui pode iniciar o jogo
        // Exemplo: window.location.href = "jogo.html";
        window.location.href="../pag.03/pag3.html"
      }
    }, 1000); // troca a cada 1 segundo