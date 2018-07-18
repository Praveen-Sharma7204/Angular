import {
  Injectable
} from '@angular/core';
import {
  HttpModule, RequestOptions
} from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import {
  Http,
  Headers,
  Response
} from '@angular/http';
@Injectable()
export class ServerService {
  userData = [];
  courseData = [];
  editedUser = {};
  quizData;
  quizFlag = 0;
  constructor(private http: Http) {
  }
  getCourses() {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.get('http://ec2-13-232-184-91.ap-south-1.compute.amazonaws.com:8080/api/course')
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      );
  }
  getUsers() {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.get('http://ec2-13-232-184-91.ap-south-1.compute.amazonaws.com:8080/api/users')
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      );
  }
    // <-- GET QUIZ CATEGORY -->
getQuiz() {
  const headers = new Headers({
      'Content-Type': 'application/json'
  });
  return this.http.get('http://ec2-13-232-184-91.ap-south-1.compute.amazonaws.com:8080/api/quiz/category')
  .map(
    (response: Response) => {
      const data = response.json();
      return data;
    }
  );
}

getAllQuiz() {
  const headers = new Headers({
      'Content-Type': 'application/json'
  });
  return this.http.get('http://ec2-13-232-184-91.ap-south-1.compute.amazonaws.com:8080/api/quiz')
  .map(
    (response: Response) => {
      const data = response.json();
      return data;
    }
  );
}

  editUser(id) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.put('http://ec2-13-232-184-91.ap-south-1.compute.amazonaws.com:8080/api/users/' + id, this.editedUser, options).map(
      (response: Response) => {
        const data = response.json();
        return data;
      }
    );
  }
}
