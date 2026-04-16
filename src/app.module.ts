import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './categoria/entities/categoria.entity';
import { CategoriaModule } from './categoria/categoria.module';

@Module({
  imports: [
      TypeOrmModule.forRoot({ //configuração do banco de dados
      type: 'mysql', //tipo do banco de dados
      host: 'localhost', //endereço do banco de dados
      port: 3306, //porta do banco de dados
      username: 'root', //  usuário do banco de dados
      password: 'root', //senha do banco de dados
      database: 'db_farmacia', //nome do banco de dados
      entities: [Categoria], //entidades do banco de dados
      synchronize: true, //sincroniza o banco de dados com as entidades, deve ser false em produção
    }),

    CategoriaModule,

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
