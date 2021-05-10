# API CONSULTAR CEP

* A API tem a finalidade de buscar os dados de Bairro, Município e Logradouro do CEP selecionado através da consulta à API https://viacep.com.br e retornar as informações como resposta da requisição e  salvar em um banco de dados. Caso o CEP exista no banco de dados as informações serão retiradas do mesmo

### Ferramentas
  * NodeJS
  * ExpressJS
  * TypeORM
  * Typecript
  * SQLite

## Como usar

O valor do CEP é enviado no corpo da requisição, no formato: 
<code> {
  "CEP":000000000;
  }</code>
* O valor do cep deve ser escrito no formato demostrado acima: como número. Não pode ser como string e não deve conter caracteres especiais

## Rotas

* POST : http://localhost:3333/

## Iniciando a API
<code> yarn dev</code>
ou
<code>npm run dev</code>
