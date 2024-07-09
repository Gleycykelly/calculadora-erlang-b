import { Injectable } from '@nestjs/common';
import { ErlangBDto } from './dto/erlang-b.dto';

@Injectable()
export class ErlangBService {
  probabilidadeDeBloqueio(A, N) {
    let numerador = Math.pow(A, N) / this.fatorial(N);

    let denominador = this.somatorio(A, N);

    return (numerador / denominador) * 100;
  }

  quantidadedeUsuarios(erlangBDto: ErlangBDto) {
    const passoInicial = 0.001;
    let A = 0;
    let probabilidadeBloqueio = 0;
    do {
      probabilidadeBloqueio = this.probabilidadeDeBloqueio(A, erlangBDto.N);
      console.log(probabilidadeBloqueio);
      A += passoInicial;
    } while (Math.abs(probabilidadeBloqueio - erlangBDto.Pb) > passoInicial);

    return A / erlangBDto.trafegoErlangs;
  }

  fatorial(numero: number) {
    let resultado = 1;

    for (let i = 1; i <= numero; i++) {
      resultado *= i;
    }

    return resultado;
  }

  somatorio(a, n) {
    let resultado = 0;
    for (let i = 0; i <= n; i++) {
      resultado += Math.pow(a, i) / this.fatorial(i);
    }

    return resultado;
  }
}
