function calculate() {
  let height = Number(document.querySelector("input#height").value);
  let weight = Number(document.querySelector("input#weight").value);
  let imcResult = weight / (height * height);

  if (imcResult <= 18.5) {
    res.innerHTML = `Seu IMC é: <strong>${imcResult.toFixed(
      1
    )}</strong></br>Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.`;
  } else if (imcResult <= 24.5) {
    res.innerHTML = `Seu IMC é: <strong>${imcResult.toFixed(
      1
    )}</strong></br>Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.`;
  } else if (imcResult <= 29.9) {
    res.innerHTML = `Seu IMC é: <strong>${imcResult.toFixed(
      1
    )}</strong></br>Já é uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda.

    `;
  } else if (imcResult <= 39.9) {
    res.innerHTML = `Seu IMC é: <strong>${imcResult.toFixed(
      1
    )}</strong></br>Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde.`;
  } else if (imcResult >= 40) {
    res.innerHTML = `Seu IMC é: <strong>${imcResult.toFixed(
      1
    )}</strong></br>Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente.

    `;
  }
}
