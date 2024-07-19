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
    document.addEventListener('click', evt => {
      console.log({evt})
    })
    let counter = 0;
    setInterval(() => {
      console.log({counter});
      counter++;
    }, 1000);

    setTimeout(() => {
      console.log(' ... finished');
    }, 3000)
  }


}





