import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  private goals = new BehaviorSubject<any>(['Kiss a unicorn', 'Fly with dragons']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGOal(goal){
    this.goals.next(goal);
  }
}
