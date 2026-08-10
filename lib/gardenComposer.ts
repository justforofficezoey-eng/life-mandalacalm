import { ArtworkElement } 
from "./dailyArtworkEngine";


export type GardenArtwork = {

 elements:ArtworkElement[];

 title:string;

};



export function composeGarden(
days:ArtworkElement[]
):GardenArtwork{


 return {


  elements:days,


  title:
  generateTitle(days)


 };


}



function generateTitle(
days:ArtworkElement[]
){


 const names=[

 "七日花园",
 "隐秘森林",
 "七日自然诗",
 "生命花谱",
 "未命名的花园"

 ];


 return names[
   days.length %
   names.length
 ];

}
