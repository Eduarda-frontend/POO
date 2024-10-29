function Bolos (sabor, recheio){

    this.sabor = sabor;
    this.recheio = recheio;

}

function BentoCake(sabor, recheio, presente, docinhos){

    Bolos.call(this, sabor, recheio);
    this.presente = presente
    this.docinhos = docinhos;

}

function BoloDecorado(sabor, recheio, camadas, decoracao){

    Bolos.call(this, sabor, recheio);
    this.camadas = camadas;
    this.decoracao = decoracao;

}

const cliente1 = new BentoCake ('Chocolate', 'nutella', false, 6);
const cliente2 = new BoloDecorado ('Baunilha', 'ninho com morango', 2, 'Frozen');
const cliente3 = new BentoCake ('Baunilha', 'chocolate', true, 3);

console.log(cliente1);
console.log(cliente2);
console.log(cliente3);
