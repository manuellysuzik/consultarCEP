import { Router } from 'express'
import cepController from './app/controllers/cepController'

const route = Router()

route.post("/", cepController.index)

export default route