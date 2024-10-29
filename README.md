# 🎂 Sistema de Pedidos de Bolos em JavaScript

Este projeto demonstra a **implementação de herança em JavaScript** usando funções construtoras para simular um sistema de pedidos de bolos. A estrutura do código envolve três funções principais: `Produto`, `Bolos` e `Pedido`, cada uma representando diferentes abstrações do sistema.

## 🛠️ Estrutura do Código

### 1. **Produto**
A função `Produto` é a **classe base**, responsável por definir os atributos comuns como:
- **nome**: O nome do produto.
- **valor**: O preço do produto.

### 2. **Bolos**
A função `Bolos` herda de `Produto` e adiciona atributos específicos para bolos, como:
- **sabor**: Sabor do bolo.
- **tamanho**: Tamanho do bolo em centímetros.
- **camadas**: Número de camadas do bolo.
- **recheio**: Tipo de recheio utilizado.

### 3. **Pedido**
A função `Pedido` herda de `Bolos` e adiciona informações do cliente e contato:
- **nomeCliente**: Nome do cliente que fez o pedido.
- **telefone**: Telefone de contato do cliente.

---

## 📦 Exemplo de Uso

```javascript
const bentoCake = new Pedido('Alvin', 64999999999, 'Beto Cake', 40, 'chocolate', 10, 2, 'nutella');
const boloM = new Pedido('Amanda', 62992655557, 'Bolo Médio', 187, 'morango', 20, 3, 'ninho');
const boloG = new Pedido('Fernanda', 61997969893, 'Bolo Grande', 225, 'baunilha', 20, 3, 'chocolate');

console.log(bentoCake);
console.log(boloM);
console.log(boloG);
```

### **Saída no Console:**
```javascript
Pedido {
  nome: 'Beto Cake',
  valor: 'R$ 40,00',
  sabor: 'chocolate',
  tamanho: '10 cm',
  camadas: 2,
  recheio: 'nutella',
  nomeCliente: 'Alvin',
  telefone: 64999999999
}
Pedido {
  nome: 'Bolo Médio',
  valor: 'R$ 187,00',
  sabor: 'morango',
  tamanho: '20 cm',
  camadas: 3,
  recheio: 'ninho',
  nomeCliente: 'Amanda',
  telefone: 62992655557
}
Pedido {
  nome: 'Bolo Grande',
  valor: 'R$ 225,00',
  sabor: 'baunilha',
  tamanho: '20 cm',
  camadas: 3,
  recheio: 'chocolate',
  nomeCliente: 'Fernanda',
  telefone: 61997969893
}
```

---

## 🚀 Como Executar o Projeto

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```
2. **Navegue até o diretório do projeto**:
   ```bash
   cd nome-do-repositorio
   ```
3. **Abra o arquivo principal em seu editor** e execute o código no console do navegador ou usando **Node.js**:
   ```bash
   node nome-do-arquivo.js
   ```

---

## 🌱 Conceitos Aplicados

- **Herança com funções construtoras**: `Bolos` e `Pedido` utilizam `Produto` como classe base.
- **Composição de objetos**: As instâncias de `Pedido` contêm dados tanto do cliente quanto do bolo.
- **Organização de código**: Cada função é responsável por atributos específicos da aplicação.

---

## 📂 Estrutura do Repositório

```
📦 nome-do-repositorio
 ┣ 📜 README.md
 ┣ 📜 index.js (ou nome-do-arquivo.js)
```

---

## 📋 Como Contribuir

1. **Fork o repositório**.
2. Crie uma **branch** com sua feature:
   ```bash
   git checkout -b minha-feature
   ```
3. **Commit suas alterações**:
   ```bash
   git commit -m 'Adiciona minha feature'
   ```
4. **Faça o push para a branch**:
   ```bash
   git push origin minha-feature
   ```
5. Abra um **Pull Request**.

---

## 📝 Licença

Este projeto é livre para uso. Sinta-se à vontade para modificar e utilizar conforme necessário.

---
