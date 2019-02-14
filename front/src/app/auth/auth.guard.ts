// import { Injectable } from '@angular/core';
// import {
//   CanActivate,
//   ActivatedRouteSnapshot,
//   RouterStateSnapshot,
//   Router
// } from '@angular/router';
// import { Observable } from 'rxjs';
// import { MatSnackBar } from '@angular/material';

// @Injectable()
// export class AuthGuard implements CanActivate {
//   constructor(private snackBar: MatSnackBar, private router: Router) {}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<boolean> | Promise<boolean> | boolean {
//     if (sessionStorage.getItem('USER')) {
//       return true;
//     } else {
//       this.snackBar.open('Access denied', 'OK', {
//         duration: 3000
//       });
//       this.router.navigate(['auth/login']);
//       return false;
//     }
//   }
// }
