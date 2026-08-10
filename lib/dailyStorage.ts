import {
ArtworkElement
} from "./dailyArtworkEngine";


const KEY="life-garden";



export type DayArtwork={

 date:string;

 text:string;

 artwork:ArtworkElement;

};



export function getDays(){

 if(
 typeof window==="undefined"
 )
 return [];


 const data=
 localStorage.getItem(KEY);


 return data?
 JSON.parse(data):
 [];

}





export function saveDay(
item:DayArtwork
){


 const days=getDays();


 const updated=[

 ...days,

 item

 ].slice(-7);



 localStorage.setItem(

 KEY,

 JSON.stringify(updated)

 );


 return updated;

}
