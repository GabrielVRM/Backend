## Backend

> node: é um ambiente de execução de JavaScript baseado no motor V8 do Google Chrome. Ele permite que os desenvolvedores criem aplicativos de rede escaláveis e de alta performance, utilizando JavaScript tanto no lado do cliente quanto no lado do servidor.

> express: é um framework web minimalista e flexível para Node.js, utilizado para criar aplicativos web e APIs de forma rápida e eficiente. muito util para realizar Request e Response!!

> gitignore: ignorar arquivos ao jogar no github, como o Node_Modules, já que não preciso armazenar ele ou salvar.

> nodemon: fica observando as modificações, para reiniciar sozinho!!

- nodmon --save-dev

## Rotas e Métodos HTTP

> o que é?

# Route Params

- !OBS: Valores obrigatorios

> conseguimos passar um parametro dentro de uma rota
> https:localhost/message/5: o 5 é um parametro!

<code>
 app.get('/message/:id', (req, res) => {  
  });
</code>
* ! req.params.id: consigo capturar o parametro colocado no meu endpoint

# Query Params

- !OBS: Valores Opcionais

> https:localhost/users?page=2&limit=10
> Inserir chave e valor no endpoint

# Metodos de Requisições:

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
