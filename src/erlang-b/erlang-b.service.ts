import { Injectable } from '@nestjs/common';
import { ErlangBDto } from './dto/erlang-b.dto';

@Injectable()
export class ErlangBService {
  probabilidadeDeBloqueio(erlangBDto: ErlangBDto) {}

  quantidadedeUsuarios(erlangBDto: ErlangBDto) {}
}
