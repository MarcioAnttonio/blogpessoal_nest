import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Postagem } from './postagem.entity';

@Injectable()
export class PostagemService {
  constructor(
    @InjectRepository(Postagem)
    private readonly postagemRepository: Repository<Postagem>,
  ) {}

  async getAll(): Promise<Postagem[]> {
    return this.postagemRepository.find();
  }
}
