import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class NavigationService {

  public goToUrl(url: string): void {
    this.router.navigateByUrl(url);
  }

  public goToHome(): void {
    this.goToUrl('/welcome'); // TODO: Change back to '/', but ask Silvan why it's not working
  }

  public goToDashboard(): void {
    this.goToUrl('/dashboard');
  }

  constructor(private router: Router) {
  }
}
