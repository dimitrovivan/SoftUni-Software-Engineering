import {getDomElement} from './init.js';
import getTemplate from './template.js';

const avaiablePathLocations = [
    "/home",
    "/register",
    "/login" ,
    "/logout" ,
    "/create-offer",
    "/edit-offer"
];

function routerMap(pathName) {

    let template;
    console.log(pathName);

    switch(pathName) {

      case '/home': 
        break;

    }

    return template;

}

function hasCurrentMapLocation(pathName) {

    return avaiablePathLocations.some(key => key === pathName);
 
 }
 
 function redirect(pathName) {
     router(pathName);
 }
 
 function router(pathName) {
 
     if(!hasCurrentMapLocation(pathName)) return;
 
     history.pushState({}, '', pathName);
 
     let htmlResult = routerMap(pathName);

     getDomElement["root"].innerHTML = htmlResult;
 
 }

 export {router, hasCurrentMapLocation, redirect};