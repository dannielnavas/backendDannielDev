import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import { IResponseDevTo } from './models/response-devtools';
import { IResponseGithub } from './models/response-github';

@Injectable()
export class StatisticService {
  constructor(private http: HttpService) {}

  async getDataDevTo(): Promise<IResponseDevTo[]> {
    const config = { 'api-key': 'p8euw9mGdAf7VvN9vmA5rWsb' };
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
    const { public_repos, followers, public_gists } = githubData;

    const data = [
      {
        name: 'Articulos publicados',
        quantity: post,
      },
      {
        name: 'Visitas a los post',
        quantity: views,
      },
      {
        name: 'Reacciones',
        quantity: reactions,
      },
      {
        name: 'Github Repos',
        quantity: public_repos,
      },
      {
        name: 'Followers Github',
        quantity: followers,
      },
      {
        name: 'Github Gists',
        quantity: public_gists,
      },
    ];

    return data;
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
