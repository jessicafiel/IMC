seuPeso= prompt("Digite seu peso: ").replace(',','.');
suaAltura= prompt("Digite sua altura: ").replace(',','.');
iMC=seuPeso/(suaAltura*suaAltura);
document.write("Seu IMC é: "+ iMC);

if(iMC < 17) {
  document.write(" Muito abaixo do peso");
} else if (iMC >= 17 && iMC < 19) {
  document.write(" Abaixo do peso");
} else if (iMC >= 19 && iMC < 25) {
  document.write(" Peso normal");
} else if (iMC >= 25 && iMC < 30) {
  document.write(" Acima do peso");
} else if (iMC >= 30 && iMC < 35) {
  document.write(" Obesidade I");
} else if(iMC >= 35 && iMC < 40) {
  document.write(" Obesidade II");
} 

   