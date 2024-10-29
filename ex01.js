function Bolos (sabor, recheio){

    this.sabor = sabor;
    this.recheio = recheio;

}

function bentoCake(sabor, recheio, presente, docinhos){

    Bolos.call(this, sabor, recheio);
    this.presente = presente
    this.docinhos = docinhos;

}

function boloDecorado(sabor, recheio, camadas, decoracao){

    Bolos.call(this, sabor, recheio);
    this.camadas = camadas;
    this.decoracao = decoracao;

}

const cliente1 = new bentoCake ('Chocolate', 'nutella', false, 6);
const cliente2 = new boloDecorado ('Baunilha', 'ninho com morango', 2, 'Frozen');
const cliente3 = new bentoCake ('Baunilha', 'chocolate', true, 3);

console.log(cliente1);
console.log(cliente2);
console.log(cliente3);
