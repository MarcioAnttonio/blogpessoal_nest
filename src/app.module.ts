// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AppController } from './app.controller';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AppService } from './app.service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Type } from 'class-transformer';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './postagem/entities/postagem.entity';
import { PostagemModule } from './postagem/service/postagem.module';
import { Tema } from './tema/entities/tema.entity';
import { TemaModule } from './tema/tema.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '2639',
      database: 'db_blogpessoal',
      entities: [Postagem, Tema],
      synchronize: true,
    }),
    PostagemModule,
    TemaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
