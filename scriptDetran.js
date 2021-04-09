function verificar(){
    let veloAtual = document.querySelector('input#txtvelocAtual');
    let res = document.querySelector('div#res');
    let veloc = Number(veloAtual.value);
    if(veloAtual.value.length <=0){
        alert('[Erro] campo vazio ou inválido. São permitidos somente números');  
    }else{
        let cintOk = document.getElementsByName('rdcin');
        let cnhOk = document.getElementsByName('rdcnh');
        var img = document.createElement('img'); // coo let nao da certo 
        img.setAttribute('id','foto');
        if(veloc<=80 && cintOk[0].checked && cnhOk[0].checked){
            res.style.color = 'blue'
            res.innerHTML =`<strong><bold>Parabéns nenhuma infração de trânsito.</bold></strong> <p>Diraja com cuidado e sempre obdeça as leis de trânsito</p>`
        }
        if(veloc > 80){
            res.style.color = 'red';
            img.setAttribute('src','infracao.png');
            res.innerHTML = `<p><strong>Multado!</strong></p><p> *Excesso de Velocidade</p>`
             if(veloc > 80 && cintOk[1].checked){
                 img.setAttribute('src','/assets1/guincho.png');
                res.innerHTML = `<p><strong>Multa Gravíssima!</strong></p> *Excesso de velocidade,  <p>*Falta de uso de cinto de segurança geram multa e apreenção do veiculo</p>`
        }
            } if(veloc <= 80 && cintOk[1].checked){
                res.style.color = 'red';
                img.setAttribute('src','/assets1/multa2.jpg');
                res.innerHTML= `<p><strong>Multado!</strong><p>*Falta de uso do cinto de segurança</P>`
            } if(veloc <= 80 && cnhOk[1].checked){
                res.style.color = 'red';
                img.setAttribute('src','/assets1/multa.png');
                res.innerHTML = `<strong>Multado!</strong><p> *Conduzindo veiculo sem CNH</p>`
            } if(veloc <= 80 && cintOk[1].checked && cnhOk[1].checked){
                res.style.color = 'red';
                img.setAttribute('src','/assets1/multa3.jpg');
                res.innerHTML = `<strong>Multa Grave!</strong><p>*Conduzindo veiculo sem CNH,  *Falta de uso do cinto de segurança</p>`
            } if(veloc > 80 && cnhOk[1].checked){
                img.setAttribute('src','/assets1/multa4.jpg');
                res.innerHTML = `<strong>Multa Grave!</strong><p>*Excesso de Velocidade,  *Conduzindo veiculo sem CNH</p>`;
            } if(veloc > 80 && cintOk[1].checked && cnhOk[1].checked){
                img.setAttribute('src','/assets1/blitz.png');
                res.innerHTML = `<p><strong>Multa Gravíssima!</strong><p> *Excesso de velocidade,  *Conduzir veiculo sem CNH,  *Falta de uso de cinto de segurança, gera multa e apreenção do veiculo e condução a uma delegacia mais próxima</p></p>`
            }
           
        } res.appendChild(img).style.img ='center';
}