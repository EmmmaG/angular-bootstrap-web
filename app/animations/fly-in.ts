import { trigger, state, style, transition, animate, keyframes,AnimationEntryMetadata } from '@angular/core';

export const flyIn = trigger('flyIn', [
    state('in', style({transform: 'translateX(0)'})),
    transition('void => *', [
        animate(400, keyframes([
            style({opacity: 0, transform: 'translateY(-100%)', offset: 0}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1.0})
        ]))
    ]),
    transition('* => void',[
        animate(400, keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: 0, transform: 'translateY(100%)', offset: 1.0})
        ]))
    ])

]);

export const slideInDownAnimatiion: AnimationEntryMetadata = 
            trigger('routeAnimation',[
                state('*',
                  style({
                      opacity:1,
                      transform: 'translateX(0)'
                  })),
            transition(':enter', [
                style({
                    opacity: 0,
                    transform: 'translateX(-100%)'
                }),
                animate('0.2s ease-in')
            ]),
            transition(':leave', [
                animate('0.5s ease-out', style({
                    opacity: 0,
                    transform: 'translateY(100%)'
                }))
            ])
            ]);

export const visibilityChanged = trigger('visibilityChanged', [
    state('shown', style({display:"block", transform: 'scale(1.0'})),
    state('hidden',style({display:"none", transform:'scale(0.0)'})),
    transition('void => *', animate(1000, keyframes([
        style({display: "none", transform: 'translateY(-100px)', opacity: 0}),
        style({display: "block", transform: 'translateY(0)', opacity:1})
    ]))),
    transition('* => void',animate(1000,keyframes([
        style({display:"block", transform: 'translatey(0)', opacity: 1}),
        style({display:"none", transform: 'translateY(-100px)', opacity: 0})
    ]))),
]);