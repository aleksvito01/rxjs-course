import {Observable} from "rxjs";

export function createHttpObservable(url: string): Observable<any> {
  return Observable.create(
    (observer: any) => {
      fetch(url).then(response => {
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
}
