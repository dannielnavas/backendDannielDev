import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import { IResponseDevTo } from './models/response-devtools';
import { IResponseGithub } from './models/response-github';

@Injectable()
export class StatisticService {
  constructor(private http: HttpService) {}

  async getDataDevTo(): Promise<IResponseDevTo[]> {
    const config = { 'api-key': process.env.DEVTO_API_KEY };
    const data = await lastValueFrom(
      this.http
        .get('https://dev.to/api/articles/me/published', {
          headers: config,
        })
        .pipe(map((res) => res.data)),
    );
    return data;
  }

  getStatistic(devtoData: IResponseDevTo[], githubData: IResponseGithub): any {
    const views = devtoData.reduce((acc, cur) => acc + cur.page_views_count, 0);
    const reactions = devtoData.reduce(
      (acc, cur) => acc + cur.positive_reactions_count,
      0,
    );
    const post = devtoData.length;
    const { public_repos, followers, following, public_gists } = githubData;
    return {
      views,
      reactions,
      post,
      public_repos,
      followers,
      following,
      public_gists,
    };
  }

  async getDataGithub(): Promise<IResponseGithub> {
    const datos = await lastValueFrom(
      this.http
        .get('https://api.github.com/users/DannielNavas')
        .pipe(map((res) => res.data)),
    );
    return datos;
  }
}
