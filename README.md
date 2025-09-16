# Réplica da página de login da DIO
Este projeto é uma réplica da página de login oficial da [DIO](https://www.dio.me/), desenvolvida com React Hook Forms, Axios e Tailwind CSS. O objetivo foi praticar e demonstrar a integração dessas tecnologias para criar uma interface de usuário funcional e moderna.

## Tecnologias utilizadas

* **React Hook Forms**: Uma biblioteca de alto desempenho para validação de formulários em React. Ela simplifica o gerenciamento de formulários usando hooks, reduzindo o código repetitivo e melhorando a performance por meio de re-renderizações otimizadas.
* **Axios**: Um cliente HTTP baseado em promises para fazer requisições a uma API. Ele é usado aqui para simular a comunicação com um servidor, mesmo que os dados do usuário estejam armazenados em um arquivo JSON local.
* **Tailwind CSS**: Um framework CSS "utility-first" que permite a criação rápida de designs personalizados diretamente no seu HTML (ou JSX), sem precisar sair do seu código.

## Lógica do projeto

A lógica de login é simples: os usuários cadastrados estão armazenados em um arquivo JSON fixo. A aplicação verifica as credenciais do usuário em relação a esses dados estáticos. Essa abordagem foi escolhida para focar no desenvolvimento do front-end e na integração das bibliotecas selecionadas.

## Próximos passos

### Bugs para corrigir

* **Melhoria nas mensagens de erro**: A implementação atual exibe "usuário não existe" mesmo quando o e-mail está correto, mas a senha está errada. A lógica precisa ser atualizada para fornecer um feedback mais específico, como "e-mail ou senha incorretos," e mostrar "usuário não existe" apenas quando o e-mail não for encontrado no "banco de dados".

### Novas funcionalidades

* **Adicionar um footer**: O projeto atualmente não tem um rodapé. Um footer deve ser adicionado na parte inferior da página para melhorar o design e fornecer informações adicionais, como detalhes de direitos autorais ou links.

## Como executar o projeto  

1. Clone o repositório:  
```bash
git clone https://github.com/paulotruly/dio_loginPage/
```
2. Certifique-se de ter o Node.js instalado e baixe as dependências:  
```bash
npm install
```
3. Execute o projeto:  
```bash
npm run dev
```
