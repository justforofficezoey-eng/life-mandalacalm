import { plantLibrary } from "./plantLibrary";


export function composeGarden(days: any[]) {

  const elements:any[] = [];

  const dayCount = days.length;


  if(dayCount >= 1){
    elements.push({
      ...plantLibrary.seed,
      x:180,
      y:180,
      size:120
    });
  }


  if(dayCount >= 2){
    elements.push({
      ...plantLibrary.root,
      x:130,
      y:260,
      size:180
    });
  }


  if(dayCount >= 3){
    elements.push({
      ...plantLibrary.leaf,
      x:70,
      y:100,
      size:180
    });
  }


  if(dayCount >= 4){
    elements.push({
      ...plantLibrary.branch,
      x:160,
      y:80,
      size:220
    });
  }


  if(dayCount >= 5){
    elements.push({
      ...plantLibrary.flower,
      x:130,
      y:120,
      size:260
    });
  }


  if(dayCount >= 6){

    elements.push({
      ...plantLibrary.forest,
      x:260,
      y:280,
      size:160
    });


    elements.push({
      ...plantLibrary.vine,
      x:20,
      y:20,
      size:430
    });

  }


  if(dayCount >= 7){

    elements.push({
      ...plantLibrary.light,
      x:190,
      y:150,
      size:100
    });

  }


  return {

    title:"七日生命曼陀罗",

    elements

  };

}
