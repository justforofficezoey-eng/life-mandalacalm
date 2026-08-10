export type ArtworkElement = {

type:
"lotus" |
"orchid" |
"fern" |
"vine" |
"wildflower" |
"cherry";

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
[...text]
.reduce(
(a,c)=>a+c.charCodeAt(0),
0
)
+
day*113;



const plants=[

"lotus",
"orchid",
"fern",
"vine",
"wildflower",
"cherry"

] as const;



const colors=[

"#E7C7C5",
"#A8C3A0",
"#D8B27A",
"#B8C8D8",
"#D9A6A0",
"#9AAE8A"

];



return {


type:
plants[
seed % plants.length
],


color:
colors[
seed % colors.length
],


position:{

x:
25+
(seed*7)%50,


y:
25+
(seed*11)%50

},


size:
50+
(seed%40),


rotation:
seed%360


};


}
