import { trigger, state, transition, animate, style } from '@angular/animations';

//fade in and fade out reutilisé
export let fade = trigger('fade', [

    state('void', style({ opacity: 0 })),

    transition('void => * , * => void', [

        animate(2000)
    ])

]);