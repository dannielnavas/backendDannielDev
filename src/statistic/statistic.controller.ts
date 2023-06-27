import { Controller, Get, NotFoundException } from '@nestjs/common';
import { IResponseDevTo } from './models/response-devtools';
import { IResponseGithub } from './models/response-github';
import { StatisticService } from './statistic.service';

@Controller('statistic')
export class StatisticController {
  constructor(private statisticService: StatisticService) {}

  @Get('/')
  async getDataStatistics() {
    const devto: IResponseDevTo[] = await this.statisticService.getDataDevTo();
    const github: IResponseGithub = await this.statisticService.getDataGithub();
    if (!devto || !github)
      throw new NotFoundException('we could not find any data ');
    return this.statisticService.getStatistic(devto, github);
  }
}
