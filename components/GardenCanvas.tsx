"use client";


export default function GardenCanvas({
garden
}:any){


const elements =
garden?.elements || [];



return (

<div

style={{

width:460,

height:460,

borderRadius:60,

overflow:"hidden",

position:"relative",

background:

"linear-gradient(145deg,#faf4ea,#e9eee5)",


boxShadow:

"0 30px 90px rgba(80,70,50,.15)"

}}

>



{/* 柔光 */}

<div

style={{

position:"absolute",

width:220,

height:220,

left:120,

top:100,

background:

"radial-gradient(circle,#fff4cf,transparent)",

opacity:.7

}}

/>




{

elements.map(

(e:any,i:number)=>(


<img

key={i}

src={e.image}

style={{

position:"absolute",

width:

e.size || 180,


left:

e.x || 140,


top:

e.y || 140,


transform:

`rotate(${e.rotate || 0}deg)`,


opacity:

e.opacity || .9,


filter:

"drop-shadow(0 20px 25px rgba(80,70,50,.15))",


animation:

"floatPlant 8s ease-in-out infinite"

}}

/>


)

)

}




</div>


)

}
