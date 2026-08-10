import {
plantLibrary
}
from "./plantLibrary";


export function composeGarden(days:any[]){


const plants=[];



days.forEach(
(day,index)=>{


const base =
plantLibrary[
(index + day.artwork.size)
%
Object.keys(plantLibrary).length
];



plants.push({

...base,

x:
80+
index*35,


y:
100+
(index%3)*50,


size:
150+
index*10,


rotate:
index*18,


opacity:
0.75+

index*0.03


});


}

);



return {


title:
"你的七日花园",


elements:plants


};


}
