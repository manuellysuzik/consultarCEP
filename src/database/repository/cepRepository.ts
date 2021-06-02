import { EntityRepository, Repository } from 'typeorm';
import CEP from '../../app/models/CEP'

@EntityRepository(CEP)
class CEPRepository extends Repository<CEP>{ }

export { CEPRepository }