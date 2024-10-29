# Projeto Bolos

Este projeto consiste em uma implementação simples de uma estrutura de classes para representar diferentes tipos de bolos e suas características. Utilizamos funções construtoras em JavaScript para criar uma hierarquia de bolos, permitindo a criação de diferentes variantes, como bolos decorados e bento cakes.

## Estrutura do Projeto

### Funções Construtoras

- **Bolos**: A função base que define os atributos comuns a todos os bolos, como sabor e recheio.
 
- **bentoCake**: Herda os atributos de `Bolos` e adiciona características específicas, como se é um presente e a quantidade de docinhos.

- **boloDecorado**: Também herda de `Bolos`, mas inclui atributos como o número de camadas e a decoração do bolo.

### Exemplo de Uso

```javascript
const cliente1 = new bentoCake('Chocolate', 'nutella', false, 6);
const cliente2 = new boloDecorado('Baunilha', 'ninho com morango', 2, 'Frozen');
const cliente3 = new bentoCake('Baunilha', 'chocolate', true, 3);

console.log(cliente1);
console.log(cliente2);
console.log(cliente3);
```

### Resultados

Ao criar instâncias das funções construtoras, você pode visualizar os diferentes tipos de bolos e suas características no console.

## Instalação

Para executar o projeto localmente, siga estas etapas:

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/projeto-bolos.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd projeto-bolos
   ```
3. Abra o arquivo JavaScript no seu editor de preferência e execute no seu ambiente JavaScript.

## Contribuições

Contribuições são bem-vindas! Se você tiver ideias para novas funcionalidades ou melhorias, sinta-se à vontade para abrir um pull request ou issue.
