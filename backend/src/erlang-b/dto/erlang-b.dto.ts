import { IsOptional } from 'class-validator';

export class ErlangBDto {
  @IsOptional()
  A: number;

  @IsOptional()
  N: number;

  @IsOptional()
  Pb: number;
}
