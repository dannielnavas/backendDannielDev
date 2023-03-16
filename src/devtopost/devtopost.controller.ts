import { Controller, Get, Param, Query, Res } from '@nestjs/common';
import { DevtopostService } from './devtopost.service';

@Controller('api/v1/devto')
export class DevtopostController {
  constructor(private devtopostService: DevtopostService) {}
  @Get('articles/:username')
  async getPost(
    @Res() res,
    @Param('username') username: string,
    @Query('limit') limit = 0,
  ) {
    console.log('--'.repeat(20));
    console.log('Articles ', limit);
    console.log('--'.repeat(20));
    let articles = await this.devtopostService.getArticles(username);
    if (limit > 0) {
      articles = articles.slice(0, limit);
    }
    return res.status(200).json({
      count: articles.length,
      articles,
    });
  }
}
