import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from "rxjs/Observable";

@Injectable()
export class LoadService {
    private _animate = new BehaviorSubject(false);

    constructor() {}

    getObservable(): Observable<any> {
        return this._animate.asObservable();
    }

    public animate(value: boolean) {
        this._animate.next(value);
    }
}
