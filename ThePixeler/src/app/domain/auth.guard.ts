import { inject } from "@angular/core";
import {CanActivateFn, Router } from "@angular/router";

export const authGuardMain: CanActivateFn = () => {
    const router = inject(Router)

    const loggedIn = sessionStorage.getItem("LoggedIn") === "true"

    if(loggedIn)
        return true
    else {
        router.navigate([''])
        return false
    }
    
}

export const authGuardLogin: CanActivateFn = () => {
    const router = inject(Router)

    const loggedOut = sessionStorage.getItem("LoggedIn") === "true"

    if(loggedOut){
        router.navigate(['/main'])
        return false
    }
    else 
        return true
    
}