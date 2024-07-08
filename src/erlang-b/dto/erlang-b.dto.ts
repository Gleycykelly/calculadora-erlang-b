import { IsOptional } from 'class-validator';

export class ErlangBDto {
  @IsOptional()
  probabilidadeDeBloqueio: number;

  @IsOptional()
  numeroDeCanais: number;

  @IsOptional()
  intensidadeDeTrafego: number;
}
