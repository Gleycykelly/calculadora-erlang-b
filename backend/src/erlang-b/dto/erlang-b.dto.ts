import { IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ErlangBDto {
  @ApiProperty({
    description: 'Tráfego (Erlangs)',
  })
  @IsOptional()
  trafegoErlangs: number;

  @ApiProperty({
    description: 'Número Linhas (N)',
  })
  @IsOptional()
  N: number;

  @ApiProperty({
    description: 'Probabilidade de bloqueio',
  })
  @IsOptional()
  Pb: number;
}
