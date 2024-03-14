# Backend

> node: é um ambiente de execução de JavaScript baseado no motor V8 do Google Chrome. Ele permite que os desenvolvedores criem aplicativos de rede escaláveis e de alta performance, utilizando JavaScript tanto no lado do cliente quanto no lado do servidor.

> express: é um framework web minimalista e flexível para Node.js, utilizado para criar aplicativos web e APIs de forma rápida e eficiente. muito util para realizar Request e Response!!

> gitignore: ignorar arquivos ao jogar no github, como o Node_Modules, já que não preciso armazenar ele ou salvar.

> nodemon: fica observando as modificações, para reiniciar sozinho!!

- nodemon --save-dev

# Rotas e Métodos HTTP

> o que é?

### Route Params

- !OBS: Valores obrigatorios

> conseguimos passar um parametro dentro de uma rota
> https:localhost/message/5: o 5 é um parametro!

<code>
 app.get('/message/:id', (req, res) => {  
  });
</code>
* ! req.params.id: consigo capturar o parametro colocado no meu endpoint

### Query Params

- !OBS: Valores Opcionais

> https:localhost/users?page=2&limit=10
> Inserir chave e valor no endpoint

### Metodos de Requisições:

- - padrões para se comunicar com a API

- GET - leitura
- POST - criação
- PUT - atualização
- DELETE - deleção
- PATCH - atualização parcial

Requisição com GET
app.get('/', (req, res) => {  
});

- - Requisição via Body.params

- !padrão para receber as requisições: JSON
  <code>
  app.use(express.json());
  </code>

> utilizando o insominia para fazer requisições post

 <code>
 app.post('/users', (req, res) => {
 const { name, email } = req.body;
 res.send({ name, email });
 });
</code>

## Estrutura do Projeto

- src
  -- server.js
  -- routes.js
  -- controlles.js
  -- utils.js
  ---- database sqlite migrations

### server

> ponto de entrada da aplicação
> manda a requisição a rota certa

### routes

> requisições que vem do server passam pelas rotas
> indentifica qual controller vai ser utilizado

### controllers

> responsavel por processar as requisições!
> parte inteligente da aplicação!

### Http Codes - status code

> na faixa do 100: informativo, a solicitação foi aceita ou está sendo processada!
 <code>
 res.status(201).json({ name, email });
 </code>

> na faixa do 200: sucesso, algum tipo de sucesso de requisição!
<code>
res.status(201).json({ name, email });
</code>

> na faixa do 300: redirecionamento
<code>
res.status(300).json({ name, email });
</code>

> na faixa do 400: erro do cliente, não autorizado, pagína não encontrada
<code>
res.status(400).json({ name, email });
</code>

> na faixa do 500: erro do servidor, interno.
<code>
res.status(500).json({ name, email });
</code>

### middlewares

o que é?

> O middleware é um tipo de segurança, ele faz um check-up da requisição feita pelo cliente antes que a requisição vá até a função (controller)
> ele intercepta o dado!

conceitos:

- Executar qualquer código
- Fazer mudanças nos objetos de solicitação-reposta
- Encerrar o ciclo de solicitação-reposta
- Chamar o proximo middleware na pilha

<code>
function myMiddleware(req, res, next) {
  console.log('voce passou pelo middleware');
  if (!req.body.isAdmin) res.json({ message: 'user unautrorized' });
  next();
}
</code>

### Utils

> Tratamento de exceções, erros que não forma mapeados ainda

> Estartegia para que nenhum erro inoportuno tire nossa aplicação do ar!!

