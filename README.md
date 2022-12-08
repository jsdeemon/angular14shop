# Store
https://www.youtube.com/watch?v=Kbauf9IgsC4 
50 minutes

npm i @angular/cli@14.2.1 

new project 
ng new store 

ng new store --routing --skip-tests --minimal 



adding angular material 

ng add @angular/material 


import modules 

install tailwind css 
https://tailwindcss.com/docs/guides/angular 

npm install -D tailwindcss postcss autoprefixer 
creating a config file

npx tailwindcss init 

tailwind.config.js 

generate component 
ng g c products-header 

cd services
generate neww service 
ng g s cart

need to import service 
add
app.module.ts -> providers -> CartService

Fake store API
cd services 
ng g s store

 content: ["./src/**/*.{html,ts}"],

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
