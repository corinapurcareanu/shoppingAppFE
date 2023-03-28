import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Router, RouteReuseStrategy } from "@angular/router";
import { Observable, of } from "rxjs";
import { UserAuthComponent } from "../_services/user.auth/user.auth/user.auth.component";
import { catchError } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private userAuthService: UserAuthComponent,
        private router: Router) {

    }
    intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        if(req.headers.get("No-Auth") === 'True') {
            return next.handle(req.clone());
        }

        const token = this.userAuthService.getToken();

        req = this.addToken(req, token);

        return next.handle(req).pipe(
            catchError((err: HttpResponse<any>) => {
                (err.status);
        
                if (err.status === 401) {
                    this.router.navigate(['/accessForbidden']);
                } else if (err.status === 403) {
                    this.router.navigate(['/accessForbidden']);
                } else {
                    throw new Error("Error");
                }
                
                return of(err);
            })
        );

    }

    private addToken(req: HttpRequest<any>, token:string) {
        return req.clone(
            {
                setHeaders: {
                    Authorization: `Bearer ` + token
                }
            }
        );
    }
}