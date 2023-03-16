import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { IResponseGithubRepository } from './models/response-github.model';

@Injectable()
export class GithubService {
  private readonly logger = new Logger(GithubService.name);
  constructor(private http: HttpService) {}
  async getRepositories(): Promise<IResponseGithubRepository[]> {
    const { data } = await firstValueFrom(
      this.http
        .get<IResponseGithubRepository[]>(
          'https://api.github.com/users/DannielNavas/repos',
        )
        .pipe(
          catchError((err: AxiosError) => {
            this.logger.error(err.response.data);
            throw 'Error in getRepositories';
          }),
        ),
    );
    return data;
  }
}
