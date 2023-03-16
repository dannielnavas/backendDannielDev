import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatisticModule } from './statistic/statistic.module';
import { ConfigModule } from '@nestjs/config';
import { GithubModule } from './github/github.module';
import { DevtopostModule } from './devtopost/devtopost.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local'],
    }),
    StatisticModule,
    GithubModule,
    DevtopostModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
