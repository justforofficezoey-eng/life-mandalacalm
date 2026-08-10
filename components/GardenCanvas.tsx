"use client";


function Flower({
x,
y,
size,
color,
rotation
}:any){


const petals =
Array.from({length:8});


return (

<g

transform={`
rotate(${rotation}
${x}
${y})
`}

>


{

petals.map((_,i)=>(

<ellipse

key={i}

cx={x}

cy={y-size/2}

rx={size/5}

ry={size/2}

fill={color}

opacity="0.75"

transform={`
rotate(
${i*45}
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

r={size/6}

fill="#F6D7A7"

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

rx={size/2}

ry={size}

fill={color}

opacity="0.65"

transform={`
rotate(${rotation}
${x}
${y})
`}

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

"linear-gradient(135deg,#192820,#415545)"

}}

>


<svg

width="420"

height="420"

viewBox="0 0 420 420"

>



{/* 月光 */}

<circle

cx="210"

cy="210"

r="160"

fill="none"

stroke="#d8c8a8"

opacity="0.15"

/>



{

garden.elements.map(

(e:any,i:number)=>{


const x=
80+
(e.position.x*2.5)
+
i*8;


const y=
80+
(e.position.y*2.5);



const size=
e.size/2;



if(

e.type==="leaf"
||
e.type==="fern"
||
e.type==="vine"

){


return (

<Leaf

key={i}

x={x}

y={y}

size={size}

color={e.color}

rotation={e.rotation}

/>

)


}



return (

<Flower

key={i}

x={x}

y={y}

size={size}

color={e.color}

rotation={e.rotation}

/>

)



}

)

}



{/* 中心光 */}

<circle

cx="210"

cy="210"

r="12"

fill="#fff1cf"

/>



</svg>


</div>

)

}
