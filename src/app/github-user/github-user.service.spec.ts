// import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { GithubUserService } from './github-user.service';

describe('GithubUserService', () => {
  let service: GithubUserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(GithubUserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be return Github User info of @KevinDavilaDev', () => {
    const expectedResponse = {
      name: 'Kevin Davila Benavides',
      photo: 'https://avatars.githubusercontent.com/u/56242609?v=4',
      location: 'Perú',
      followers: 21,
    };

    const responseObject = {
      login: 'kevindaviladev',
      id: 56242609,
      node_id: 'MDQ6VXNlcjU2MjQyNjA5',
      avatar_url: 'https://avatars.githubusercontent.com/u/56242609?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/kevindaviladev',
      html_url: 'https://github.com/kevindaviladev',
      followers_url: 'https://api.github.com/users/kevindaviladev/followers',
      following_url:
        'https://api.github.com/users/kevindaviladev/following{/other_user}',
      gists_url: 'https://api.github.com/users/kevindaviladev/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/kevindaviladev/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/kevindaviladev/subscriptions',
      organizations_url: 'https://api.github.com/users/kevindaviladev/orgs',
      repos_url: 'https://api.github.com/users/kevindaviladev/repos',
      events_url:
        'https://api.github.com/users/kevindaviladev/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/kevindaviladev/received_events',
      type: 'User',
      site_admin: false,
      name: 'Kevin Davila Benavides',
      company: null,
      blog: '',
      location: 'Perú',
      email: null,
      hireable: true,
      bio: 'Frontend developer.\r\nAmante de Angular, Postgresql y las ranas.',
      twitter_username: 'kevindaviladev',
      public_repos: 29,
      public_gists: 0,
      followers: 21,
      following: 0,
      created_at: '2019-10-07T03:17:31Z',
      updated_at: '2022-02-13T21:01:37Z',
    };

    service.getUser('kevindaviladev').subscribe((res) => {
      console.log(res);
      expect(res).toEqual(expectedResponse);
    });

    const req = httpMock.expectOne(
      'https://api.github.com/users/kevindaviladev'
    );

    req.flush(responseObject);
  });
});
