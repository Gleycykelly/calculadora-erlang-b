import { Controller, Post, Body } from '@nestjs/common';
import { ErlangBService } from './erlang-b.service';
import { ErlangBDto } from './dto/erlang-b.dto';

@Controller('erlang-b')
export class ErlangBController {
  constructor(private readonly erlangBService: ErlangBService) {}

  @Post('calcular-probabilidade-de-bloqueio')
  probabilidadeDeBloqueio(@Body() erlangBDto: ErlangBDto) {
    console.log(erlangBDto);
    return this.erlangBService.probabilidadeDeBloqueio(
      erlangBDto.trafegoErlangs,
      erlangBDto.N,
    );
  }

  @Post('calcular-quantidade-de-usuarios')
  quantidadedeUsuarios(@Body() erlangBDto: ErlangBDto) {
    return this.erlangBService.quantidadedeUsuarios(erlangBDto);
  }
}
