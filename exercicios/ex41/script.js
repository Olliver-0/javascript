function verificarNumeroPar(numero) {
  return new Promise((resolve, reject) => {
    console.log(`(async/await) Verificando o número ${numero}...`);
    setTimeout(() => {
      if (numero % 2 === 0) {
        resolve(`✅ Sucesso! O número ${numero} é par.`);
      } else {
        reject(`❌ Erro! O número ${numero} é ímpar.`);
      }
    }, 1500);
  });
}

async function executarVerificacao(numero) {
  try {
    console.log("Tentando a verificação...");

    const resultado = await verificarNumeroPar(numero);
    
    console.log(resultado);

  } catch (erro) {
    console.log("O bloco CATCH capturou o seguinte erro:");
    console.error(erro);
  } finally {
    console.log("------------------------");
  }
}


executarVerificacao(10);
executarVerificacao(7);