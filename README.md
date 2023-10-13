# Food Explorer API

Bem-vindo ao Food Explorer API, um projeto desenvolvido no programa Explorer da Rocketseat. Esta API é dedicada à exploração e gerenciamento de informações de um restaurante. Aqui estão os principais recursos e tecnologias envolvidas no projeto:

## Funcionalidades

1. **Adicionar Pratos:** Adicione novos pratos à base de dados, incluindo detalhes como nome, ingredientes, imagens, descrição e categoria.

2. **Excluir Pratos:** Remova pratos existentes da base de dados.

3. **Editar Pratos:** Faça alterações nos detalhes dos pratos, como nome, ingredientes, imagens, descrição e categoria.

4. **Pesquisar por Nome e Ingrediente:** Realize buscas eficientes por alimentos com base no nome ou ingredientes.

5. **Cadastro de Usuários:** Utilize JWT (JSON Web Tokens) e cookies para autenticação segura e gerenciamento de usuários.

6. **Upload de Imagens:** Permita o envio e armazenamento de imagens associadas aos pratos.

7. **Personas Admin e Customer:** Distinção entre diferentes níveis de acesso, como administrador (Admin) e cliente (Customer).

## Tecnologias Utilizadas

- **Node.js:** Ambiente de execução JavaScript do lado do servidor.

- **JavaScript:** Linguagem de programação principal para a lógica do aplicativo.

- **Express:** Framework web para Node.js, facilitando o desenvolvimento de APIs.

- **pm2:** Gerenciador de processos para Node.js.

- **SQLite:** Banco de dados leve e eficiente para armazenamento de dados.

- **knex:** ORM, utilizado para interagir com o banco de dados.

- **Jest:** Framework de testes para garantir a qualidade do código.
  
## Como Iniciar

1. **Instalação de Dependências:**
``npm isntall``
2. **Configuração do Banco de Dados:**
``npm run migrate``
3. **Iniciar o Servidor de desenvolvimento:**
``npm run dev``
4. **Iniciar o Servidor:**
``npm start``
5. **Executar Testes:**
``npm run test``

## Funcionalidades a serem Adicionadas

1. **Sistema de Favoritos:** Usuários podem marcar alimentos como favoritos para fácil acesso posterior.

2. **Pedidos:** Introduza a capacidade de fazer pedidos, incluindo informações como alimentos selecionados, quantidade e detalhes adicionais.

3. **Histórico de Pedidos:** Mantenha um histórico dos pedidos anteriores, permitindo aos usuários revisitar suas escolhas passadas.

4. **Testes:** Aumento da cobertura dos testes unitários.

# Documentação das requisições
### Criar Novo Usuário

**Endpoint:** `POST /users`

```http
POST /users
Content-Type: application/json

{
  "name": "Nome do Usuário",
  "email": "usuario@email.com",
  "password": "senha123"
}
```
### Criar Nova Sessão (Login)
Autentica um usuário e retorna um token JWT para autorização subsequente.

**Endpoint:**  `POST /sessions`

```http
POST /sessions
Content-Type: application/json

{
  "email": "usuario@email.com",
  "password": "senha123"
}
```

### Verificação de Usuário Validado

Retorna uma resposta de sucesso se o usuário autenticado estiver validado no sistema.

**Endpoint:** `GET /users/validated`

```http
GET /users/validated
Authorization: Bearer [TOKEN_JWT]
```

### Criar Novo Produto

**Endpoint:** `POST /products`

```http
POST /products
Content-Type: application/json

{
  "name": "Produto Novo",
  "type": "Tipo do Produto",
  "description": "Descrição do Produto",
  "price": 19.99,
  "ingredients": ["Ingrediente 1", "Ingrediente 2"]
}
```

### Excluir Produto

**Endpoint:** `DELETE /products/:id`
```http
DELETE /products/1
```

### Atualizar Produto
Os dados a serem atualizados são opcionais, podendo ser um ou todos.

**Endpoint:** `PUT /products/:id`

```http
PUT /products/1
Content-Type: application/json

{
  "name": "Novo Nome do Produto",
  "type": "Novo Tipo do Produto",
  "description": "Nova Descrição do Produto",
  "price": 29.99,
  "ingredients": ["Ingrediente Novo 1", "Ingrediente Novo 2"]
}
```

### Mostrar Detalhes do Produto
Retorna detalhes de um produto específico.

**Endpoint:** `GET /products/:id`

```http
GET /products/1
```

### Listar Produtos
Nome ou tipo do produto pode ser passado como parâmetros.

**Endpoint:** `GET /products`

```http
GET /products?name=Produto Novo
```

### Atualizar Imagem do Produto

**Endpoint:** `PATCH /products/:id/image`

```http
PATCH /products/1/image
Content-Type: multipart/form-data
Authorization: Bearer [TOKEN_JWT]

[Arquivo da Imagem]
```
