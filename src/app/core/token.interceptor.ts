import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor{
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(localStorage.getItem('access_token') != null){
            request = request.clone({
                setHeaders:{
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`
                }
            });
        }
        return next.handle(request);
    }
}