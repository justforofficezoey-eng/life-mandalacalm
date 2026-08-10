"use client";


export default function GardenCanvas({

garden

}:any){



return (

<div

style={{

width:420,

height:420,

background:
"linear-gradient(#18251f,#314437)",

borderRadius:30,

overflow:"hidden"

}}

>


<svg

width="420"

height="420"

viewBox="0 0 420 420"

>



{

garden.elements.map(

(e:any,i:number)=>{


const x=
e.position.x*4.2;


const y=
e.position.y*4.2;



return (

<g key={i}>


{/* 花 */}

<ellipse

cx={x}

cy={y}

rx={e.size/3}

ry={e.size/1.5}

fill={e.color}

opacity="0.75"

transform={

`rotate(${e.rotation}
${x}
${y})`

}

/>



{/* 中心 */}

<circle

cx={x}

cy={y}

r="6"

fill="#F4DFA8"

/>



</g>


)


}

)

}



</svg>


</div>

)


}
