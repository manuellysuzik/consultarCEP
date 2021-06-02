import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Users1620178856550 implements MigrationInterface {
    //Cria a tabela
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "databaseCEP", //define o nome da tabela no banco de dados
                columns: [ //define os campos da tabela, cada objeto é uma coluna
                    {
                        name: "id",
                        type: "uuid"
                    },
                    {
                        name: "CEP", // Será necessário criar um validador para esse campo em MODELS
                        type: "integer" // deve verificar os tipos de dados do banco de dados que você escolheu
                    },
                    {
                        name: "municipio",
                        type: "varchar" // No caso do SQLite é varchar
                    }, {
                        name: "bairro",
                        type: "varchar"
                    },
                    {
                        name: "logradouro",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "date",
                        default: "now()" //Seleciona o valor padrão da coluna, nesse caso é a data que é criado
                    },
                    {
                        name: "updated_at",
                        type: "date", //Tipo DATA/HORA
                        default: "now()" //Seleciona o valor padrão da coluna, nesse caso é a data que é criado
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('databaseCEP') // Quando rodar a migration para APAGAR a tabela no banco de dados
    }

}
