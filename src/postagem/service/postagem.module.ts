import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Postagem } from '../entities/postagem.entity';
import { PostagemService } from './postagem.service';
import { PostagemController } from '../controllers/postagem.controller';
import { TemaModule } from '../../tema/tema.module';


@Module({
  imports: [TypeOrmModule.forFeature([Postagem]), TemaModule],
  providers: [PostagemService],
  controllers: [PostagemController],
 // exports: [PostagemService]
})
export class PostagemModule {}

