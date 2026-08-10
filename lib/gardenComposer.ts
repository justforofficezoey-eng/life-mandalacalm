import { plantLibrary } from "./plantLibrary";


export function composeGarden(days:any[]) {


const positions = [

  {x:180,y:20,rotate:0},       // Day1 上

  {x:300,y:100,rotate:45},     // Day2 右上

  {x:300,y:260,rotate:90},     // Day3 右下

  {x:180,y:340,rotate:135},    // Day4 下

  {x:60,y:260,rotate:180},     // Day5 左下

  {x:60,y:100,rotate:225},     // Day6 左上

  {x:180,y:180,rotate:0}       // Day7 中心

];



const elements =
days.map(

(day:any,index:number)=>{


const plant =
plantLibrary[
  day.plant || "seed"
];



return {


...plant,


x:
positions[index]?.x || 180,


y:
positions[index]?.y || 180,


size:
index===6 ? 180 : 130,


rotate:
positions[index]?.rotate || 0,


opacity:.9


};


}

);



return {


title:"我的七日生命曼陀罗",


elements


};


}
