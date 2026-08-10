import { DailyFragment } from "./dailyStorage";


export type MandalaDesign = {

  seed:number;

  center:{
    size:number;
    color:string;
  };


  petals:{
    day:number;
    angle:number;
    size:number;
    color:string;
    shape:string;
  }[];


  rotation:number;

  complexity:number;

};





// 主生成器

export function createMandala(
fragments:DailyFragment[]
):MandalaDesign {



  const seed =
    createSeed(fragments);



  const colors =
    createColorPalette(seed);



  const petals =
    fragments.map(
      (item,index)=>{


        return {

          day:index+1,


          angle:
          index *
          (360 / Math.max(
            fragments.length,
            1
          )),


          size:
          20 +
          (item.length % 50),



          color:
          colors[
            index %
            colors.length
          ],



          shape:
          chooseShape(
            item
          )

        };


      }
    );




  return {


    seed,


    center:{

      size:
      40 +
      (seed % 20),


      color:
      colors[0]

    },



    petals,



    rotation:
    30 +
    (seed % 120),



    complexity:
    Math.min(
      fragments.length / 7,
      1
    )

  };

}





// 根据内容生成随机种子

function createSeed(
fragments:DailyFragment[]
){


  let value=0;


  fragments.forEach(
    fragment=>{


      for(
        let i=0;
        i<fragment.text.length;
        i++
      ){

        value +=
        fragment.text
        .charCodeAt(i);

      }


    }
  );


  return value;

}






function createColorPalette(
seed:number
){


  const palettes=[

    [
      "#D8C3A5",
      "#A8C7C7",
      "#E8D8B0"
    ],


    [
      "#C9A96E",
      "#D9C2D8",
      "#AFC8B8"
    ],


    [
      "#B8C6DB",
      "#E5D4C0",
      "#C6B7D8"
    ],


    [
      "#E6C9A8",
      "#C8D8C0",
      "#B8B0C8"
    ]

  ];



  return palettes[
    seed %
    palettes.length
  ];

}






function chooseShape(
fragment:DailyFragment
){


  if(
    fragment.symbols.includes(
      "rain"
    )
  ){

    return "drop";

  }



  if(
    fragment.symbols.includes(
      "light"
    )
  ){

    return "sun";

  }



  if(
    fragment.symbols.includes(
      "heart"
    )
  ){

    return "flower";

  }



  if(
    fragment.symbols.includes(
      "dot"
    )
  ){

    return "circle";

  }



  return "petal";

}
