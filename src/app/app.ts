import 'reflect-metadata' // permite usar as decorations
import express from 'express'
import route from '../routes'
import '../database' // isso vai chamar a conexão com o banco de dados.

class App {
  app: any

  constructor() {
    this.app = express()
    this.app.use(express.json())

    this.routes()
  }

  routes() {
    this.app.use(route)
  }
}
export default new App().app