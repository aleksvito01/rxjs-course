import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {
  concat,
  fromEvent,
  interval,
  noop,
  observable,
  Observable,
  of,
  timer,
  merge,
  Subject,
  BehaviorSubject,
  AsyncSubject,
  ReplaySubject, count
} from 'rxjs';
import {delayWhen, filter, map, take, timeout} from 'rxjs/operators';
import {createHttpObservable} from "../common/util";

// import {createHttpObservable} from '../common/util';


@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  ngOnInit() {

    const http$ = createHttpObservable('/api/courses');
    const courses$ = http$.pipe(
      map((res: any) => res['payload'])
    )
    courses$.subscribe(
        (courses: any) => console.log(courses),
        noop,
        () => console.log('completed')
      )
  }


}






