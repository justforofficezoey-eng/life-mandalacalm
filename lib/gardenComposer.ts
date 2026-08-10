import { plantLibrary } from "./plantLibrary";


export function composeGarden(days:any[]) {


const positions = [

{x:180,y:30},

{x:310,y:110},

{x:310,y:270},

{x:180,y:350},

{x:50,y:270},

{x:50,y:110},

{x:180,y:180}

];



const elements = days.map(

(day:any,index:number)=>{


const plant =
plantLibrary[day.plant || "seed"];



return {


...plant,


x:positions[index]?.x || 180,

y:positions[index]?.y || 180,


size:
index===6 ? 190 : 130,


day:index+1,


mood:day.mood,


text:day.text,


opacity:.9


};


}

);



return {

title:"我的七日生命曼陀罗",

elements

};


}
