import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MemberModule } from './member/member.module';

@Module({
  imports: [AuthModule, MemberModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
