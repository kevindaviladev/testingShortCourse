import { Component } from '@angular/core';
import { GithubUserService } from './github-user.service';

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.css'],
})
export class GithubUserComponent {
  username = 'No user data';
  isButtonDisabled = false;
  constructor(private githubUserService: GithubUserService) {}

  getUserData() {
    this.githubUserService.getUser('kevindaviladev').subscribe((res) => {
      console.log(res);
      this.username = res.name;
      this.isButtonDisabled = true;
    });
  }
}
