import { Max } from "class-validator";
import {v4 as uuid} from 'uuid'
import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("databaseCEP") // normalmente é o nome do conjunto ou tables que vamos usar
export default class CEP {
  @PrimaryGeneratedColumn("uuid")// Gera automaticamente um uuid para cada usuário criado
  id: string
  @Column()//indico qual o campo que é uma coluna
  @Max(9)
  CEP: number
  @Column()
  municipio: string
  @Column()
  bairro: string
  @Column()
  logradouro: string
  @CreateDateColumn()
  created_at: Date
  @CreateDateColumn()
  updated_at: Date

  @BeforeInsert()
  criarUUID(){
    if(!this.id){
      this.id = uuid()
    }
  }
}