import { Request, response, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { CEPRepository } from '../../database/repository/cepRepository'
import api from '../../services/api'

class cepController {

  async index(req: Request, res: Response) {
    const { CEP } = req.body

    const cep = getCustomRepository(CEPRepository)
    const cepExists = await cep.findOne({ CEP })

    if (!cepExists) {
      try {
        const { data } = await api.get(`/${CEP}/json`)

        const result = cep.create({
          CEP,
          municipio: data.localidade,
          bairro: data.bairro,
          logradouro: data.logradouro
        })

        await cep.save(result)

        return res.json({
          municipio: data.localidade,
          bairro: data.bairro,
          logradouro: data.logradouro
        })
      } catch (err) {
        return res.json({
          error: err.message
        })
      }

    }

    return res.json({
      municipio: cepExists.municipio,
      bairro: cepExists.bairro,
      logradouro: cepExists.logradouro
    })
  }
}

export default new cepController