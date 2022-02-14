import { of } from 'rxjs';

export class GitHubUserServiceMock {
  getUser(username: string) {
    return of({
      name: 'Kevin Davila',
      photo: 'https://avatars.githubusercontent.com/u/56242609?v=4',
      location: 'Perú',
      followers: 21,
    });
  }
}
