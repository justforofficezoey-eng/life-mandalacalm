"use client";


function PetalFlower({
x,
y,
size,
color
}:any){


return (

<g>


{
Array.from({
length:5
}).map((_,i)=>(

<ellipse

key={i}

cx={x}

cy={y-size/1.8}

rx={size/3}

ry={size/1.15}

fill={color}

opacity="0.65"

transform={`
rotate(
${i*72}
${x}
${y}
)
`}

/>

))

}



<circle

cx={x}

cy={y}

r={size/5}

fill="#E8CFA0"

/>


</g>

)

}





function Orchid({
x,
y,
size,
color
}:any){


return (

<g>


<path

d={`
M${x} ${y}

C
${x-30} ${y-size}
${x+30} ${y-size*2}
${x} ${y-size*3}

`}

stroke={color}

strokeWidth="3"

fill="none"

opacity="0.8"

/>



<circle

cx={x}

cy={y-size*3}

r={size/2}

fill={color}

opacity=".7"

/>


</g>

)

}





function Leaf({
x,
y,
size,
color,
rotation
}:any){


return (

<ellipse

cx={x}

cy={y}

rx={size/3}

ry={size}

fill={color}

opacity=".55"

transform={`
rotate(
${rotation}
${x}
${y}
)
`}

/>

)

}





function Glow(){

return (

<circle

cx="210"

cy="210"

r="90"

fill="#fff7df"

opacity=".35"

/>

)

}





export default function GardenCanvas({

garden

}:any){



return (

<div

style={{

width:430,

height:430,

borderRadius:50,

background:"#F7F1E7",

boxShadow:
"0 20px 60px rgba(80,70,50,.12)",

overflow:"hidden"

}}

>


<svg

width="430"

height="430"

viewBox="0 0 430 430"

>


<Glow />



{/* 生命环纹 */}

<circle

cx="215"

cy="215"

r="160"

fill="none"

stroke="#CFC4AA"

opacity=".25"

/>



{

garden.elements.map(

(e:any,i:number)=>{


const angle =
(i/ garden.elements.length)
*
Math.PI
*
2;



const radius =
80+
i*12;



const x =
215+
Math.cos(angle)
*
radius;



const y =
215+
Math.sin(angle)
*
radius;



const size =
e.size/3;



if(
e.type==="orchid"
)

return (

<Orchid

key={i}

x={x}

y={y}

size={size}

color={e.color}

/>

);



if(
e.type==="fern"
||
e.type==="vine"
)

return (

<Leaf

key={i}

x={x}

y={y}

size={size}

color={e.color}

rotation={
e.rotation
}

/>

);



return (

<PetalFlower

key={i}

x={x}

y={y}

size={size}

color={e.color}

/>

);


}

)

}



{/* 中心生命点 */}

<circle

cx="215"

cy="215"

r="7"

fill="#D6B77A"

/>


</svg>


</div>

)

}
