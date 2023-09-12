import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      // setHeaders: {
      //   'X-Rapidapi-Key': '43e672f9e0msh35f7d879a1ce81fp1827e6jsn8d0a18ab77f5',
		  //   'X-Rapidapi-Host': 'rawg-video-games-database.p.rapidapi.com'
      // },
      setParams: {
        key: '5a3f55058e7a41afb7c83294b30fc682',
      }
    });
    return next.handle(req);
  }
}