import { Module, Post } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Tema } from "../entities/tema.entity";
import { TemaController } from "../controllers/tema.controller";
import { TemaService } from "./tema.service";
import { PostagemModule } from "../../postagem/service/postagem.module";

@Module({
  imports: [TypeOrmModule.forFeature([Tema])],
  controllers: [TemaController],
  providers: [TemaService],
  exports: [TemaService]
})
export class TemaModule {}