# Projeto: URL Shortener 

## Introdução
Este projeto é um Encurtador de URLs desenvolvido com base no curso da DIO (Digital Innovation One). O objetivo deste projeto é permitir que os usuários possam encurtar URLs longas, gerando uma versão curta que redireciona para a URL original. O projeto foi desenvolvido utilizando as tecnologias Node.js, Express.js e MongoDB.

## Funcionalidades

### 1. Encurtar URL
- Método: POST
- Endpoint: `/shorten`
- Descrição: Este endpoint recebe uma URL original e gera uma versão curta que pode ser usada para redirecionamento posterior.
- Parâmetros:
  - `originURL` (string): A URL original que será encurtada.
- Resposta de Sucesso:
  - Código de status: 200
  - Corpo da resposta: Objeto JSON contendo os dados da URL encurtada, incluindo o hash, a URL original e a URL curta gerada.
- Resposta de Erro:
  - Código de status: 400
  - Corpo da resposta: Objeto JSON contendo uma mensagem de erro.

### 2. Redirecionar URL
- Método: GET
- Endpoint: `/:hash`
- Descrição: Este endpoint recebe um hash correspondente à URL curta e redireciona o usuário para a URL original.
- Parâmetros:
  - `hash` (string): O hash da URL curta.
- Resposta de Sucesso:
  - Código de status: 302 (Redirecionamento temporário)
  - Redirecionamento: O usuário é redirecionado para a URL original correspondente ao hash.
- Resposta de Erro:
  - Código de status: 400
  - Corpo da resposta: Objeto JSON contendo uma mensagem de erro.

## Configuração do Projeto

### 1. Requisitos
- Node.js (versão 12 ou superior)
- MongoDB (instância local ou remota)

### 2. Instalação
1. Clone o repositório do projeto: `git clone https://github.com/seu-usuario/encurtador-url.git`
2. Acesse a pasta do projeto: `cd encurtador-url`
3. Instale as dependências: `npm install`

### 3. Configuração do Banco de Dados
1. Abra o arquivo `config/Constants.js`.
2. No campo `MONGO_CONNECTION`, insira a URL de conexão com o banco de dados MongoDB. Exemplo: `mongodb://localhost:27017/encurtador-url`

### 4. Inicialização do Servidor
1. Execute o comando: `npm start`
2. O servidor será iniciado na porta 5000.
3. Verifique a mensagem "Express Listening!" no console para confirmar que o servidor está em execução.

## Uso da API

Para utilizar a API do Encurtador de URLs, você pode fazer solicitações HTTP para os endpoints descritos anteriormente. Abaixo está um exemplo de solicitação usando o Insomnia, com a imagem da hello kitty bailarina.

### Encurtar uma URL


  - Método: POST
  - URL: `http://localhost:5000/shorten`
  - Cabeçalhos: 
    - `Content-Type: application/json`
  - Corpo da solicitação (JSON):
    ```json
    {
      "originURL": "https://www.desenhosinfantis.com/Imagens/hello-kitty-bailarina.jpg"
    }
    ```

- Exemplo de resposta de sucesso:
  ```json
  {
    "hash": "7RAJEjuVn",
    "shortURL": "http://localhost:5000/7RAJEjuVn",
    "originURL": "https://www.desenhosinfantis.com/Imagens/hello-kitty-bailarina.jpg",
    "_id": "64ace7ac438fbb6ab045a668",
    "__v": 0
  }
  ```

Exemplo de resposta de erro ao adicionar um caractere inválido na URL encurtada:

{
  "error": "URL não encontrada"
}

### 2. Redirecionar para uma URL original

- No navegador, acesse `http://localhost:5000/7RAJEjuVn`, substituindo "7RAJEjuVn" pelo hash da URL curta gerada anteriormente.

Lembre-se de substituir `http://localhost:5000` pela URL da sua própria instância da aplicação, caso tenha feito alguma modificação na configuração.

Certifique-se de que o servidor esteja em execução e que você tenha feito a solicitação corretamente, incluindo os cabeçalhos necessários (como `Content-Type: application/json` no caso do método POST).

Em caso de erros, verifique se a URL informada é válida e se a conexão com o servidor está estabelecida corretamente.

## Conclusão

E assim chegamos ao final do nosso Encurtador de URLs! Foi uma jornada incrível aprender e desenvolver essa aplicação. Me diverti muito explorando as possibilidades do Node.js, Express.js e MongoDB.

O Encurtador de URLs é uma ferramenta poderosa para simplificar aqueles links gigantescos e difíceis de lembrar. Com apenas alguns cliques, você pode gerar uma versão curta e amigável da sua URL original.

Ao longo do projeto, aprendi  conceitos como rotas, controladores e modelos. Aprendi também como configurar o banco de dados MongoDB e como lidar com solicitações de encurtamento e redirecionamento de URLs. Foi uma experiência enriquecedora que ampliou meus conhecimentos em desenvolvimento web.


 Se você tiver dúvidas ou sugestões de como posso melhorar, sinta-se à vontade para me contatar! :smile:


