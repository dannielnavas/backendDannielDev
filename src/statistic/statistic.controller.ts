import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { IResponseDevTo } from './models/response-devtools';
import { IResponseGithub } from './models/response-github';
import { StatisticService } from './statistic.service';

@Controller('statistic')
export class StatisticController {
  statistic: any;

  constructor(private statisticService: StatisticService) {}

  @Get('/')
  async getDataStatistics(@Res() res) {
    const devto: IResponseDevTo[] = await this.statisticService.getDataDevTo();
    const github: IResponseGithub = await this.statisticService.getDataGithub();
    return res
      .status(HttpStatus.OK)
      .json(this.statisticService.getStatistic(devto, github));
  }
}
