"use client";


function Lotus({
x,y,size,color
}:any){

return (

<g>

{
Array.from({
length:10
})
.map((_,i)=>(

<ellipse

key={i}

cx={x}

cy={y-size/2}

rx={size/4}

ry={size}

fill={color}

opacity=".65"

transform={`
rotate(
${i*36}
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

fill="#F4DCA8"

/>

</g>

)

}





function Flower({
x,y,size,color
}:any){

return (

<g>

{
Array.from({
length:6
})
.map((_,i)=>(

<circle

key={i}

cx={
x+
Math.cos(i)
*size
}

cy={
y+
Math.sin(i)
*size
}

r={
size/2
}

fill={color}

opacity=".7"

/>

))

}

</g>

)

}




function Leaf({
x,y,size,color
}:any){

return (

<ellipse

cx={x}

cy={y}

rx={size/2}

ry={size}

fill={color}

opacity=".6"

/>

)

}




export default function GardenCanvas({
garden
}:any){



return (

<div

style={{

width:420,

height:420,

borderRadius:40,

overflow:"hidden",

background:
"linear-gradient(#18251f,#526b59)"

}}

>


<svg

width="420"

height="420"

viewBox="0 0 420 420"

>



<circle

cx="210"

cy="210"

r="160"

fill="none"

stroke="#eee0c5"

opacity=".2"

/>



{
garden.elements.map(
(e:any,i:number)=>{


const x =
100+
e.position.x*3;


const y =
80+
e.position.y*3;



if(
e.type==="lotus"
)

return (

<Lotus

key={i}

x={x}

y={y}

size={e.size/2}

color={e.color}

/>

);



if(
e.type==="fern"||
e.type==="vine"
)

return (

<Leaf

key={i}

x={x}

y={y}

size={e.size/3}

color={e.color}

/>

);



return (

<Flower

key={i}

x={x}

y={y}

size={e.size/4}

color={e.color}

/>

);



}

)

}


<circle

cx="210"

cy="210"

r="8"

fill="#fff1d0"

/>


</svg>


</div>


)

}
