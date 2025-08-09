import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Postagem } from '../entities/postagem.entity';
//import { PostagemService } from './postagem.service';
import { PostagemController } from '../controllers/postagem.controller';
import { PostagemService } from './postagem.service';

@Module({
  imports: [TypeOrmModule.forFeature([Postagem])],
  controllers: [PostagemController],
  providers:[PostagemService],
  exports: [],
})
export class PostagemModule {}
