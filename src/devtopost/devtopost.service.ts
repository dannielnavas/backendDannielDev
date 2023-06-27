import { HttpService } from '@nestjs/axios';
import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { GithubService } from 'src/github/github.service';
import { IResponseDevTo } from 'src/statistic/models/response-devtools';

@Injectable()
export class DevtopostService {
  private readonly logger = new Logger(GithubService.name);
  constructor(private http: HttpService) {}
  async getArticles(username: string): Promise<IResponseDevTo[]> {
    const { data } = await firstValueFrom(
      this.http
        .get<IResponseDevTo[]>(
          `https://dev.to/api/articles?username=${username}`,
        )
        .pipe(
          catchError((err: AxiosError) => {
            this.logger.error(err.response.data);
            throw new NotFoundException('Error in getArticles');
          }),
        ),
    );
    return data;
  }
}
