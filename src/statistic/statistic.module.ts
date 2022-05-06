import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { StatisticController } from './statistic.controller';
import { StatisticService } from './statistic.service';

@Module({
  imports: [HttpModule],
  controllers: [StatisticController],
  providers: [StatisticService],
})
export class StatisticModule {}
