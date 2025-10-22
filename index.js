// Elementos para programação assíncrona 

// • Função assíncrona não bloqueia execução
// • Palavras reservadas async e await
// • Palavra reservada then e função de callback
// • Retorno como Promise

const somar = async (a, b) => a + b;

const imprimir_soma = async (a, b) => {
      let valor = await somar(a, b);
      console.log(valor);
      return "Processo Concluido";
}

imprimir_soma(1, 2).then(
      (retorno) => console.log(retorno));

const dividir = (a, b) => {
      const promise = new Promise((resolve,
            reject) => {
            if (b == 0) { reject("Divisao por zero"); }
            else { resolve(a / b); }
      });
      return promise;
}
for (let i = 2; i >= -2; i--)
      dividir(10, i).then((x) => console.log(x))

            .catch((error) => console.log(error));