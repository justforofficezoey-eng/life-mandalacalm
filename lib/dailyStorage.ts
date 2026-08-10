export type DailyFragment = {

  id:string;

  date:string;

  text:string;

  length:number;

  symbols:string[];

  createdAt:number;

};





const STORAGE_KEY =
"life_mandala_fragments";





// 获取全部7日记录

export function getFragments():

DailyFragment[] {


  if(
    typeof window === "undefined"
  ){
    return [];
  }


  const data =
    localStorage.getItem(
      STORAGE_KEY
    );


  if(!data){
    return [];
  }


  return JSON.parse(data);

}






// 保存今天输入

export function saveFragment(
text:string
){


  const fragments =
    getFragments();



  const today =
    new Date()
    .toISOString()
    .slice(0,10);




  const fragment:DailyFragment = {

    id:
    crypto.randomUUID(),


    date:
    today,


    text:
    text,


    length:
    text.length,


    symbols:
    extractSymbols(text),


    createdAt:
    Date.now()

  };




  const updated = [

    ...fragments,

    fragment

  ]
  .slice(-7);



  localStorage.setItem(

    STORAGE_KEY,

    JSON.stringify(updated)

  );



  return fragment;

}





// 简单视觉符号提取

function extractSymbols(
text:string
):string[]{


  const symbols:string[]=[];



  if(
    text.includes("雨") ||
    text.includes("🌧")
  ){

    symbols.push("rain");

  }



  if(
    text.includes("光") ||
    text.includes("☀")
  ){

    symbols.push("light");

  }



  if(
    text.includes("爱") ||
    text.includes("❤")
  ){

    symbols.push("heart");

  }



  if(
    text.length<=2
  ){

    symbols.push("dot");

  }



  if(
    symbols.length===0
  ){

    symbols.push("unknown");

  }



  return symbols;

}
