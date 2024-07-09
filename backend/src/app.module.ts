import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ErlangBModule } from './erlang-b/erlang-b.module';

@Module({
  imports: [ErlangBModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
