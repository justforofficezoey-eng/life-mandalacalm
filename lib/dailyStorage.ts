import {
ArtworkElement
}
from "./dailyArtworkEngine";



export type DayArtwork={

date:string;

text:string;

artwork:ArtworkElement;

};



const KEY="life-garden";



export function getDays(){


if(
typeof window==="undefined"
)

return [];



const data =
localStorage.getItem(KEY);



return data?
JSON.parse(data):
[];

}




export function saveDay(
item:DayArtwork
){


const days=getDays();



const result=[

...days,

item

].slice(-7);



localStorage.setItem(
KEY,
JSON.stringify(result)
);



return result;

}
