function relogio(){
    // Pegando os elementos Dom
    var horas = document.getElementById('horas');
    var minutos = document.getElementById('minutos');
    var segundos = document.getElementById('segundos');
    // Criando a variaveis de tempo
    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();
   // variaveis Dom recebem as variaveis de tempo   
    horas.innerHTML = h;
    minutos.innerHTML = m;
    segundos.innerHTML = s;
}
// Usando método setInterval atualizar a função relogio a cada 1 segundo
var interval = setInterval(relogio,1000);
    