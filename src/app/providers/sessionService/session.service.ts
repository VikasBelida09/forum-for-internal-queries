import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { SessionStorageService } from 'angular-web-storage';

@Injectable({
  providedIn: 'root'
})
export class SessionService  implements Resolve<any> {
  constructor(public session: SessionStorageService) {}

  resolve(): Observable<any> {
    return Observable.of(this.session.get("1")).delay(2000);
  }
}