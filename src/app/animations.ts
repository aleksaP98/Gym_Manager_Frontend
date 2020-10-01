import {animate,style,transition,state,trigger} from "@angular/animations";


export let fade =  trigger('fade',[
    transition("void=>*",[
        style({
            opacity : 0
        }),
        animate(2000)
    ])
  ])
export let flyInLeft = trigger('flyInLeft',[
    transition('void =>*',[
        style({
            transform:"translateX(-120px)",
            opacity:0
        }),
        animate(1150)
    ])
])
export let flyInTop = trigger('flyInTop',[
    transition('void =>*',[
        style({
            transform:"translateY(-120px)",
            opacity:0
        }),
        animate(1150)
    ])
])