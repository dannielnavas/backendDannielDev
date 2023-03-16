import { Controller, Get, Query, Res } from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('api/v1/github')
export class GithubController {
  constructor(private githubService: GithubService) {}
  @Get('repositories')
  async getDataGithub(@Res() res, @Query('limit') limit: number) {
    console.log('--'.repeat(20));
    console.log('GithubController ', limit);
    console.log('--'.repeat(20));

    const repositories = await await this.githubService.getRepositories();
    if (limit > 0) {
      const sliceRepositories = repositories.slice(0, limit);
      return res.status(200).json({
        count: sliceRepositories.length,
        repositories: sliceRepositories,
      });
    } else {
      return res.status(200).json({
        count: repositories.length,
        repositories,
      });
    }
  }
}
