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

// import {createHttpObservable} from '../common/util';


@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  ngOnInit() {

    const http$ = Observable.create(
     ( observer: any )=> {
        fetch('/api/courses').then(response => {
          return response.json();
        }).then(body => {
          observer.next(body);
          observer.complete();
        })
          .catch(err => {
            observer.error(err);
          });
      }
    );

    http$.subscribe(
      (courses: any) => console.log(courses),
      noop,
      () => console.log('completed')
    )
  }


}






