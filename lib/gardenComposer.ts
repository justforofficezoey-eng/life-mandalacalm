export function composeGarden(
days:any[]
){


return {

title:
"你的七日花园",


elements:
days.map(
d=>d.artwork
)

};


}
