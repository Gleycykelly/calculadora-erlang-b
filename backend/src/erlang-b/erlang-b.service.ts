import { Injectable } from '@nestjs/common';
import { ErlangBDto } from './dto/erlang-b.dto';

@Injectable()
export class ErlangBService {
  probabilidadeDeBloqueio(erlangBDto: ErlangBDto) {
    let numerador =
      Math.pow(erlangBDto.A, erlangBDto.N) / this.fatorial(erlangBDto.N);

    let denominador = this.somatorio(erlangBDto.A, erlangBDto.N);

    return numerador / denominador;
  }

  quantidadedeUsuarios(erlangBDto: ErlangBDto) {}

  fatorial(numero: number) {
    let resultado = 1;

    for (let i = 1; i <= numero; i++) {
      resultado *= i;
    }
    return resultado;
  }

  somatorio(a, n) {
    let resultado = 0;
    for (let i = 1; i <= n; i++) {
      resultado += Math.pow(a, i) / this.fatorial(i);
    }

    return resultado;
  }
}
