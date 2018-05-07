import { animate, query, sequence, stagger, style, transition, trigger } from '@angular/animations';

export const animations = {
    slideDown: trigger('slideDown', [
        transition('void => *', [
            style({ transform: 'translateY(-100%)' }),
            animate('1s'),
        ]),
        transition('* => void', [
            style({ transform: 'translateY(-100%)' }),
            animate('1s'),
        ]),
    ]),
    rowAnimation: trigger('rowAnimation', [
        transition(':enter', [
            style({ height: '*', opacity: '0', transform: 'translateX(-550px)', 'box-shadow': 'none' }),
            sequence([
                animate('.2s ease', style({ height: '*', opacity: '.2', transform: 'translateX(0)', 'box-shadow': 'none' })),
                animate('.2s ease', style({ height: '*', opacity: 1, transform: 'translateX(0)' })),
            ]),
        ]),
        transition(':leave', [
            style({ height: '*', opacity: '1', 'box-shadow': 'none' }),
            sequence([
                animate('.2s ease', style({ height: '*', opacity: 1, transform: 'translateY(0)', 'box-shadow': 'none' })),
                animate('.2s ease', style({ height: '*', opacity: '0.2', transform: 'translateY(-30px)' })),
            ]),
        ]),
    ]),
    routerAnimation: trigger('routerAnimation', [
        transition(':enter', [
            style({
                height: '*',
                width: '*',
                opacity: '0',
                transform: 'translateX(-100%)',
                // 'box-shadow': 'none',
                position: 'absolute',
                top: '64px',
                left: 0,
                right: 0,
                bottom: 0,
                overflowX: 'hidden',
            }),
            animate('0.7s cubic-bezier(.35, 0, .25, 1)', style({ height: '*', width: '*', opacity: 1, transform: 'translateX(0)' })),
        ]),
        // transition(':leave', [
        //     style({
        //         height: '*',
        //         width: '*',
        //         opacity: '1',
        //         transform: 'translateX(0%)',
        //         // 'box-shadow': 'none',
        //         position: 'absolute',
        //         top: '64px',
        //         left: 0,
        //         right: 0,
        //         bottom: 0,
        //     }),
        //     animate('0.5s cubic-bezier(.35, 0, .25, 1)', style({ height: '*', width: '*', opacity: 0, transform: 'translateX(100%)' })),
        // ]),
    ]),
    routerTopAnimation: trigger('routerTopAnimation', [
        transition(':enter', [
            style({
                height: '*',
                width: '*',
                opacity: '0',
                transform: 'translateY(-100%)',
                // 'box-shadow': 'none',
                position: 'absolute',
                top: '64px',
                left: 0,
                right: 0,
                bottom: 0,
                overflowX: 'hidden',
            }),
            animate('0.8s cubic-bezier(.35, 0, .25, 1)', style({ height: '*', width: '*', opacity: 1, transform: 'translateY(0)' })),
        ]),
        // transition(':leave', [
        //     style({
        //         height: '*',
        //         width: '*',
        //         opacity: '1',
        //         transform: 'translateY(0%)',
        //         // 'box-shadow': 'none',
        //         position: 'absolute',
        //         top: '64px',
        //         left: 0,
        //         right: 0,
        //         bottom: 0,
        //     }),
        //     animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ height: '*', width: '*', opacity: 0, transform: 'translateX(100%)' })),
        // ]),
    ]),
    // keyframes: trigger('keyframes', [
    //     transition('* => move',
    //         animate('2000ms', keyframes([
    //             style({ transform: 'translateX(0)    rotateY(0)', offset: 0 }),
    //             style({ transform: 'translateX(50%)  rotateY(90deg)', offset: 0.33 }),
    //             style({ transform: 'translateY(-75%) rotateY(180deg)', offset: 0.66 }),
    //             style({ transform: 'translateX(-100%)', offset: 1.0 })
    //         ])
    //         ))
    // ]),

    buttons: trigger('buttons', [
        transition('* => *', [
            query('a', style({ transform: 'translateX(-100%)' })),
            query('a', stagger('5000ms', [
                animate('900ms 1s', style({ transform: 'translateX(0)' })),
            ])),
        ]),
    ]),
};
