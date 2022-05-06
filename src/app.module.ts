import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatisticModule } from './statistic/statistic.module';

@Module({
  imports: [StatisticModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
