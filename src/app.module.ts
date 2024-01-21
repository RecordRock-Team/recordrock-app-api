import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MemberModule } from './member/member.module';
import { CalendarModule } from './calendar/calendar.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from './entities/Member';
import { Center } from './entities/Center';
import { CenterLogo } from './entities/CenterLogo';
import { DifficultyPerCenter } from './entities/DifficultyPerCenter';
import { Platform } from './entities/Platform';
import { Profile } from './entities/Profile';
import { RefreshTokens } from './entities/RefreshTokens';
import { TodayClear } from './entities/TodayClear';
import { WorkoutNote } from './entities/WorkoutNote';
import { WorkoutTime } from './entities/WorkoutTime';

@Module({
  imports: [
    AuthModule,
    MemberModule,
    CalendarModule,
    ConfigModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'climber',
      entities: [
        Member,
        Center,
        CenterLogo,
        DifficultyPerCenter,
        Platform,
        Profile,
        RefreshTokens,
        TodayClear,
        WorkoutNote,
        WorkoutTime,
      ],
      synchronize: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
