export function composeGarden(
days:any[]
){


 return {


 elements:
 days.map(
 d=>d.artwork
 ),


 title:
 "你的七日花园"


 };


}
