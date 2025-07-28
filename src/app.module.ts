import { Module } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AppController } from './app.controller';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AppService } from './app.service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Type } from 'class-transformer';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Postagem } from './postagem/entities/postagem.entity';
import { PostagemModule } from './postagem/postagem.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '2639',
      database: 'db_blogpessoal',
      entities: [Postagem],
      synchronize: true,
    }),
    PostagemModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
