import { plantLibrary } from "./plantLibrary";


export function composeGarden(days:any[]) {


  const count = days.length;


  // 用文字数量制造不同组合
  const seed =
    days
      .map((d:any)=>d.text || "")
      .join("")
      .length;


  const rotate =
    seed % 360;


  const elements = [];


  // 外圈藤蔓

  elements.push({

    ...plantLibrary.vine,

    x:10,

    y:10,

    size:440,

    rotate:rotate

  });



  // 森林底层

  elements.push({

    ...plantLibrary.forest,

    x:120,

    y:250,

    size:220,

    opacity:.8

  });



  // 根

  elements.push({

    ...plantLibrary.root,

    x:130,

    y:250,

    size:190

  });



  // 叶片环绕

  elements.push({

    ...plantLibrary.leaf,

    x:40,

    y:90,

    size:180,

    rotate:45

  });


  elements.push({

    ...plantLibrary.leaf,

    x:250,

    y:90,

    size:180,

    rotate:-45

  });



  // 中心主花

  elements.push({

    ...plantLibrary.flower,

    x:100,

    y:90,

    size:280

  });



  // 枝条

  elements.push({

    ...plantLibrary.branch,

    x:130,

    y:180,

    size:240

  });



  // 最终光

  if(count>=7){

    elements.push({

      ...plantLibrary.light,

      x:150,

      y:110,

      size:160

    });

  }



  return {


    title:

    "我的七日生命曼陀罗",


    elements

  };


}
