import { Module } from '@nestjs/common';
import { ErlangBService } from './erlang-b.service';
import { ErlangBController } from './erlang-b.controller';

@Module({
  controllers: [ErlangBController],
  providers: [ErlangBService],
})
export class ErlangBModule {}
