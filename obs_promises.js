// const { Observable, observable, async } = require('rxjs');
// const { filter } = require('rxjs/operators');

// const doSomething = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('valor 3');
//         }, 3000)
//     });
// }

// const doSomething$ = () => {
//     return new Observable(observer => {
//         observer.next('valor 1 $');
//         observer.next('valor 2 $');
//         observer.next('valor 3 $');
//         observer.next(null);
//         setTimeout(() => {
//             observer.next('valor 4 $');
//         }, 5000)
//         setTimeout(() => {
//             observer.next(null);
//         }, 6000)
//         setTimeout(() => {
//             observer.next('valor 5  vs null');
//         }, 10000)
//     });
// }

// (async () => {
//     const rsp = await doSomething();
//     console.log(rsp);
// })();

// (() => {
//     const obs$ = doSomething$();
//     obs$
//     .pipe(
//         filter(value => value !== null )
//     )
//     .subscribe(rsp => {
//         console.log(rsp);
//     })
// })();

// Promesas 
// Emite un solo valor  / simplicidad

// Observable
// stream de datos (puede emitir multiples valores )
// Esposible escuchar const: eventos, responsive, fetchs
// Se pueden cancelar
