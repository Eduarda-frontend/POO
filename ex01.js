function Produto (nome, valor){
    this.nome = nome;
    this.valor = `R$${valor},00`
}

function Bolos (nome, valor, sabor, tamanho, camadas, recheio){
    Produto.call (this, nome, valor);
    this.sabor = sabor;
    this.tamanho = `${tamanho} cm`
    this.camadas = camadas;
    this.recheio = recheio;
}

function Pedido(nomeCliente, telefone, nome, valor, sabor, tamanho, camadas, recheio){
    this.nomeCliente = nomeCliente;
    this.telefone = telefone;
    Bolos.call(this, nome, valor, sabor, tamanho, camadas, recheio);

}

const bentoCake = new Pedido ('Alvin', 64999999999,'Beto Cake', 40, 'chocolate', 10, 2, 'nutella');
const boloM = new Pedido ('Amanda', 62992655557 ,'Bolo médio',187, 'morango', 20, 3, 'ninho');
const boloG = new Pedido ('Fernanda', 61997969893, 'Bolo Grande',225, 'baunilha', 20, 3, 'chocolate');

console.log(bentoCake);
console.log(boloM);
console.log(boloG);