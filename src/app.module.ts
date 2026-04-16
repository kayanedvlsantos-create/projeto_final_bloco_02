import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriaModule } from './categoria/categoria.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
      TypeOrmModule.forRoot({ //configuração do banco de dados
      type: 'mysql', //tipo do banco de dados
      host: 'localhost', //endereço do banco de dados
      port: 3306, //porta do banco de dados
      username: 'root', //  usuário do banco de dados
      password: 'root', //senha do banco de dados
      database: 'db_farmacia', //nome do banco de dados
      entities: [], //entidades do banco de dados
      synchronize: true, //sincroniza o banco de dados com as entidades, deve ser false em produção
    }),

    CategoriaModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
