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
  editedQuiz = {};
  editedIntro = {};
  editedQuizDEL = {};
  editedGame = {};
  createQuiz = {};
  quizData;
  quizFlag = 0;
  selectCourse;
  editedModule;
  changeIntroVar;
  changeCourseIntro;
  selectedModule;
  allIntroDetails;
  quizid;
  cat: string;

  // rootURL = 'http://192.168.0.16:8080/';
  rootURL = 'http://ec2-13-232-223-210.ap-south-1.compute.amazonaws.com:8080/';
  constructor(private http: Http) {
  }
  getCourses() {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.get(this.rootURL + 'api/course')
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      );
  }
  getQuizComponent() {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.get(this.rootURL + 'api/mainquiz')
    // return this.http.get(this.rootURL + 'api/mainquiz')
    .map(
      (response: Response) => {
        console.log(response);
        // const data = JSON.parse(JSON.stringify(response));
        const data = response.json();
        console.log(data);
        return data;
      }
      );
  }
  getUsers() {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.get(this.rootURL + 'api/users')
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      );
  }
  getScores() {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.get(this.rootURL + 'api/scores')
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
    return this.http.get(this.rootURL + 'api/quiz/category')
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      );
  }
  // getmainQuiz() {
  //   const headers = new Headers({
  //     'Content-Type': 'application/json'
  //   });
  //   return this.http.get(this.rootURL + 'api/mainQuiz')
  //     .map(
  //       (response: Response) => {
  //         const data = response.json();
  //         return data;
  //       }
  //     );
  // }

  getAllQuiz() {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.get(this.rootURL + 'api/quiz')
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      );
  }

  getIntro() {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.get(this.rootURL + 'api/intro')
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      );
  }

  getIntroTitle() {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.get(this.rootURL + 'api/intro/title')
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      );
  }
  getAllGames() {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.get(this.rootURL + 'api/game')
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
    return this.http.put(this.rootURL + 'api/users/' + id, this.editedUser, options).map(
      (response: Response) => {
        const data = response.json();
        return data;
      }
    );
  }
  AddMainQuiz(data) {
    console.log(data);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.rootURL + 'api/mainQuiz', data).map(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  quizCreate(details) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.rootURL + 'api/quiz', details).map(
      (response: Response) => {
        const data = response.json();
        return data;
      }
    );
  }
  quizCreateComponent(details) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.rootURL + 'api/mainQuiz', details).map(
      (response: Response) => {
        const data = response.json();
        return data;
      }
    );
  }

  allIntro(id , introData) {
    // console.log(introData);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    // tslint:disable-next-line:max-line-length
    return this.http.post(this.rootURL + 'api/intro/edit/' + id, this.allIntroDetails, options).map(
      (response: Response) => {
        const data = response.json();
        return data;
      }
    );
  }

  editQuiz(id) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.put(this.rootURL + 'api/quiz/' + id, this.editedQuiz, options).map(
      (response: Response) => {
        const data = response.json();
        return data;
      }
    );
  }

  editQuizDEL(id) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.delete(this.rootURL + 'api/quiz/' + id).map(
      (response: Response) => {
        const data = response.json();
        return data;
      }
    );
  }

  delIntro(id) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.delete(this.rootURL + 'api/intro/' + id).map(
      (response: Response) => {
        const data = response.json();
        return data;
      }
    );
  }

  editIntro(id) {
    console.log(id);
    console.log(this.editedIntro);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.rootURL + 'api/intro/edit/' + id,
      this.editedIntro, options).map(
      (response: Response) => {
        const data = response.json();
        return data;
      });
  }

  editCourseModule(id) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    // tslint:disable-next-line:max-line-length
    return this.http.put(this.rootURL + 'api/course/module/' + id, this.editedModule, options).map(
      (response: Response) => {
        const data = response.json();
        return data;
      }
    );
  }

  changeIntroFun(id, introObject) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.put(this.rootURL + 'api/course/' + id, introObject, options).map(
      (response: Response) => {
        const data = response.json();
        return data;
      }
    );
  }
  // changequizIntroFun(id, introObject) {
  //   const headers = new Headers({ 'Content-Type': 'application/json' });
  //   const options = new RequestOptions({ headers: headers });
  //   return this.http.put(this.rootURL + 'api/main/' + id, introObject, options).map(
  //     (response: Response) => {
  //       const data = response.json();
  //       return data;
  //     }
  //   );
  // }


  editGame(id) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.put(this.rootURL + 'api/games/' + id, this.editedGame, options).map(
      (response: Response) => {
        const data = response.json();
        return data;
      }
    );
  }

  gameDEL(id) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.delete(this.rootURL + 'api/games/' + id).map(
      (response: Response) => {
        const data = response.json();
        return data;
      }
    );
  }

  changeModule(courseId, edits)  {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    console.log(edits);
    return this.http.put(this.rootURL + 'api/course/module/' + courseId + '/' + this.selectedModule, edits).map(
      (response: Response) => {
        const data = response.json();
        return data;
      }
    );
  }

  delCourse(id) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.delete(this.rootURL + 'api/course/' + id).map(
      (response: Response) => {
        const data = response.json();
        return data;
      }
    );
  }
  delModule(courseId) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.delete(this.rootURL + 'api/course/module/' + courseId + '/' + this.selectedModule)
    .map(
      (response: Response) => {
        const data = response.json();
        return data;
      }
    );
  }
  postLoginData(formdata) {
    console.log(formdata);
    return this.http.post('xxxxxxxxxxxxxxxxxx/' + '/api/client/login', formdata);

  }

  // /api/course/module/ +id +modulename
}
