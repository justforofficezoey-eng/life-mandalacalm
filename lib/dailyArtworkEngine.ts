export type ArtworkElement = {

  type:string;

  color:string;

  position:{
    x:number;
    y:number;
  };

  size:number;

  rotation:number;

};



export function createDailyArtwork(
 text:string,
 day:number
):ArtworkElement{


 const seed =
 text.split("")
 .reduce(
 (a,c)=>a+c.charCodeAt(0),
 0
 )
 +
 day * 97;



 const plants=[

 "lotus",
 "orchid",
 "fern",
 "cherry",
 "vine",
 "wildflower",
 "leaf"

 ];



 const colors=[

 "#D8C7B0",
 "#A7BFA3",
 "#D7A6A0",
 "#B8C8D8",
 "#C8B07A",
 "#879B76"

 ];



 return {

  type:
  plants[
   seed %
   plants.length
  ],


  color:
  colors[
   seed %
   colors.length
  ],


  position:{

   x:
   20+
   seed%60,


   y:
   20+
   (seed*3)%60

  },


  size:
  40+
  seed%60,


  rotation:
  seed%360


 };

}
