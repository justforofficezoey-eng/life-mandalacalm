import { plantLibrary } from "./plantLibrary";


export function composeGarden(days:any[]) {


  const seed =
    days
      .map((d:any)=>d.text || "")
      .join("")
      .length;


  const offset =
    seed % 25;



  const positions = [

    {
      x:210 + offset,
      y:40
    },

    {
      x:350,
      y:130 + offset
    },

    {
      x:330 - offset,
      y:300
    },

    {
      x:210,
      y:390 - offset
    },

    {
      x:70 + offset,
      y:300
    },

    {
      x:50,
      y:130
    },

    {
      x:210,
      y:210
    }

  ];



  const elements = days.map(

    (day:any,index:number)=>{


      const plant =
        plantLibrary[
          day.plant || "seed"
        ];



      return {

        ...plant,


        x:
        positions[index]?.x || 210,


        y:
        positions[index]?.y || 210,


        size:
        index===6
        ? 210
        : 120 + (index % 3) * 10,


        rotate:
        (seed + index * 37) % 360,


        opacity:.92,


        day:index + 1,


        mood:day.mood,


        text:day.text


      };


    }

  );



  return {


    title:

    "我的七日生命曼陀罗",


    elements


  };


}
