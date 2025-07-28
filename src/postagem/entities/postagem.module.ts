import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Postagem } from './postagem.entity';
//import { PostagemService } from './postagem.service';
import { PostagemController } from './postagem.controller';
import { PostagemService } from './postagem.service';

@Module({
  imports: [TypeOrmModule.forFeature([Postagem])],
  controllers: [PostagemController],
  providers:[PostagemService],
  exports: [],
})
export class PostagemModule {}
