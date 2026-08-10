"use client";


function Flower({
x,
y,
size,
color,
delay
}:any){


return (

<g

style={{

animation:
`bloom 5s ease-in-out infinite`,

animationDelay:
`${delay}s`,

transformOrigin:
`${x}px ${y}px`

}}

>


{

Array.from({
length:6
})
.map((_,i)=>(


<ellipse

key={i}

cx={x}

cy={y-size}

rx={size/3}

ry={size}

fill={color}

opacity=".65"

transform={`
rotate(
${i*60}
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

r={size/4}

fill="#e8cfa0"

/>


</g>


)

}




function Leaf({
x,
y,
size,
color,
delay
}:any){


return (

<ellipse

cx={x}

cy={y}

rx={size/3}

ry={size}

fill={color}

opacity=".55"

style={{

animation:
"wind 6s ease-in-out infinite",

animationDelay:
`${delay}s`,

transformOrigin:
`${x}px ${y}px`

}}


/>

)

}




function Glow(){


return (

<circle

cx="215"

cy="215"

r="100"

fill="#fff3cf"

style={{

animation:
"softGlow 5s infinite"

}}

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

overflow:"hidden",

background:

"linear-gradient(135deg,#f8f2e8,#e7eee2)",


boxShadow:

"0 20px 60px rgba(80,70,50,.12)"

}}

>


<svg

width="430"

height="430"

viewBox="0 0 430 430"

>



<Glow />



<circle

cx="215"

cy="215"

r="160"

fill="none"

stroke="#cbbf9f"

opacity=".25"

/>



{

garden.elements.map(

(e:any,i:number)=>{


const angle =
(i /
garden.elements.length)
*
Math.PI
*
2;



const radius =
70+i*18;



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
e.size/4;



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

delay={i}

/>

);



return (

<Flower

key={i}

x={x}

y={y}

size={size}

color={e.color}

delay={i}

/>

);


}

)

}



<circle

cx="215"

cy="215"

r="8"

fill="#d6b77a"

/>



</svg>


</div>


)

}
