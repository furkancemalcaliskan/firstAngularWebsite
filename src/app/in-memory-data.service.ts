import { Injectable } from '@angular/core';
import { InMemoryDbService, ParsedRequestUrl, RequestInfoUtilities } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    const users = [
      {id: 11, firstName: 'furkan', lastName: 'caliskan', email: 'furkan@test.com', password: '12345'}
    ];
    return {users};
  }

  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    let newUrl = url.replace(/api\/users\/SignUp/, '/api/users/');
    newUrl = url.replace(/api\/users\/Login/, '/api/users/');
    const parsed = utils.parseRequestUrl(newUrl);
    console.log(`parseRequestUrl override of '${url}':`,parsed);
    return parsed;
  }

  post(reqInfo: RequestInfo) {
    console.log(reqInfo);
  }

}
