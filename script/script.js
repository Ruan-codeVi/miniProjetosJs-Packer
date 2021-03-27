

function contar(){
    let inicio = document.querySelector('input#txtInicio');
    let passo = document.querySelector('input#txtPasso');
    let fim = document.querySelector('input#txtFim');
    let res = document.querySelector('div#res');
    
    if(inicio.value.length ==0 || passo.value.length == 0|| fim.value.length ==0){
        alert("[Erro] Verifique se os campos estão preenchidos");
    } else{
        res.innerHTML = ('Contando..');
        let i = Number(inicio.value);
        let p = Number(passo.value);
        let f = Number(fim.value);
        if(p<=0){
            alert("Campo Passo inválido ou vazio!.  Considerando Passo 1");
            p = 1
        }
        if(i<f){ // se inicio for menor que fim, incrementa
            for(let cont = i; cont <= f; cont += p){
                res.innerHTML += ` ${cont}  \u{1F449}`;
            } 
        
        } else{ // se inico for maior que fim, decrementa
            for(let cont = i; cont >= f; cont -= p){
                res.innerHTML += ` ${cont} \u{1F449}`;
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
  
} function carregarHora(){
var hora = document.getElementById('hora');
var min = document.getElementById('min');
var tempo = document.getElementById('tempo');
var dia = new Date();
var hora = dia.getHours();
var min = dia.getMinutes();
if(hora<10){
    hora = `0${hora}`
}if(min<10){
    min = `0${min}`
}
tempo.style.color = 'white'
tempo.style.fontSize = '25pt'
tempo.style.textAlign = 'center';
tempo.innerHTML = `<p>Horas ${hora}: ${min}</p> `
}