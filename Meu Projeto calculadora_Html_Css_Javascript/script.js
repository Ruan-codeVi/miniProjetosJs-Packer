class Calculadora {
    constructor(visualizacaoOperacaoTextElement, operacaoAtualTextElement) {
        this.visualizacaoOperacaoTextElement = visualizacaoOperacaoTextElement;
        this.operacaoAtualTextElement = operacaoAtualTextElement;
        this.limpar();

    }
    // criando as funções
    limpar() {
        this.operacaoAtual = '';
        this.visualizacaoOperacao = '';
        this.operacao = undefined;
    }
    delete() {
        this.operacaoAtual = this.operacaoAtual.toString().slice(0, -1); // toString e slice sao classes do javascript
    }
    acrescentarNum(num) {
        //if (num === '.' && this.operacaoAtual.incluir('.')) return
        this.operacaoAtual = this.operacaoAtual.toString() + num.toString();
    }
    escolherOperacao(operacao) {
        if (this.operacaoAtual === '')
            return;
        if (this.visualizacaoOperacao !== '') {
            this.calcular;
        }
        this.operacao = operacao;
        this.visualizacaoOperacao = this.operacaoAtual;
        this.operacaoAtual = '';
    }
    calcular() {
        let calculo;
        const prev = parseFloat(this.visualizacaoOperacao);
        const operAtl = parseFloat(this.operacaoAtual);
        if (isNaN(prev) || isNaN(operAtl))
            return;
        switch (this.operacao) {
            case '+':
                calculo = prev + operAtl;
                break;
            case '/':
                calculo = prev / operAtl;
                break;
            case '-':
                calculo = prev - operAtl;
                break;
            case '*':
                calculo = prev * operAtl;
                break;
            default:
                return;
        }
        this.operacaoAtual = calculo;
        this.operacao = undefined;
        this.visualizacaoOperacao = '';
    }
    pegarNumTela(num) {
        const stringNum = num.toString();
        const interacaoNum = parseFloat(stringNum.split('.')[0]);
        const decimalNum = stringNum.split('.')[1];
        let interacaoDisplay;
        if (isNaN(interacaoNum)) {
            interacaoDisplay = '';

        } else {
            interacaoDisplay = interacaoNum.toLocaleString('en', { maximoFracionalMum: 0 });
        } if (decimalNum != null) {
            return `${interacaoDisplay}.${decimalNum}`;
        } else {
            return interacaoDisplay;
        }
    }
    atualizacaoTela() {
        this.operacaoAtualTextElement.innerText =
            this.pegarNumTela(this.operacaoAtual);
        if (this.operacao != null) {
            this.visualizacaoOperacaoTextElement.innerText =
                `${this.pegarNumTela(this.visualizacaoOperacao)} ${this.operacao}`;
        }
        else {
            this.visualizacaoOperacaoTextElement.innerText = '';
        }
    }
}
const numButtons = document.querySelectorAll('[data-num]')
const operacaoButtons = document.querySelectorAll('[data-operacao]')
const equacaoButton = document.querySelector('[data-equacao]')
const deleteButton = document.querySelector('[data-delete]')
const limparTudoButton = document.querySelector('[data-limpar-tudo]')
const visualizacaoOperacaoTextElement = document.querySelector('[data-visualizacao-operacao]')
const operacaoAtualTextElement = document.querySelector('[data-operacao-atual]')
const calculadora = new Calculadora(visualizacaoOperacaoTextElement, operacaoAtualTextElement) 
numButtons.forEach(button =>{
    button.addEventListener('click',() =>       {
        calculadora.acrescentarNum(button.innerText)
        calculadora.atualizacaoTela()
    })
})
operacaoButtons.forEach(button =>{
    button.addEventListener('click',() =>       {
        calculadora.escolherOperacao(button.innerText)
        calculadora.atualizacaoTela()
    })
})

equacaoButton.addEventListener('click', button =>{
    calculadora.calcular()
    calculadora.atualizacaoTela()
})
limparTudoButton.addEventListener('click', button =>{
    calculadora.limpar()
    calculadora.atualizacaoTela()
})
deleteButton.addEventListener( 'click', button =>{
    calculadora.delete()
    calculadora.atualizacaoTela()

} )