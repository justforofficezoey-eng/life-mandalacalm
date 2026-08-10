import { mandalaSymbols } from "./mandalaSymbols";


export function generateMandala(text:string){

  const lower =
    text.toLowerCase();



  const matches:any[] = [];



  Object.values(mandalaSymbols)
  .forEach(symbol=>{


    const found =
      symbol.keywords.some(
        word =>
        lower.includes(word)
      );


    if(found){

      matches.push(symbol);

    }

  });



  // 如果没有匹配

  if(matches.length===0){

    return {

      title:
      "未命名的生命花园",


      colors:[
        "月光白",
        "淡紫"
      ],


      element:
      "未知的花种",


      shape:
      "缓慢展开的圆",


      message:
      "此刻的你，正在形成属于自己的图案。"

    };

  }





  // 合并颜色

  const colors =
    Array.from(
      new Set(
        matches.flatMap(
          item=>item.color
        )
      )
    );



  const elements =
    matches.map(
      item=>item.element
    );



  const shapes =
    matches.map(
      item=>item.shape
    );



  const messages =
    matches.map(
      item=>item.message
    );



  return {


    title:
    createTitle(matches),


    colors,


    element:
    elements.join(" + "),


    shape:
    shapes[0],


    message:
    createMirror(messages)

  };


}





function createTitle(matches:any[]){

  if(
    matches.some(
      x=>x.element==="种子"
    )
  ){

    return "正在生长的生命花园";

  }


  if(
    matches.some(
      x=>x.element==="月光"
    )
  ){

    return "月光下的内在花园";

  }


  return "今日生命曼陀罗";

}





function createMirror(messages:string[]){

  return (

    "我听见你的文字里，" +

    messages.join(" ") +

    " "

  );

}
