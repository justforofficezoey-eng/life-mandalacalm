"use client";


export default function GardenCanvas({
garden
}:any){


const elements =
garden?.elements || [];


return (

<div

style={{

width:520,

height:520,

margin:"0 auto",

position:"relative",

borderRadius:"50%",

overflow:"hidden",

background:

"radial-gradient(circle,#faf5e8,#dfe5d7)",


boxShadow:

"0 40px 100px rgba(70,60,40,.2)"

}}

>


<div

style={{

position:"absolute",

inset:80,

borderRadius:"50%",

background:

"radial-gradient(circle,rgba(255,245,200,.7),transparent)"

}}

/>



{

elements.map(

(e:any,i:number)=>(


<img

key={i}

src={e.image}

alt="mandala"

style={{

position:"absolute",

left:e.x,

top:e.y,

width:e.size,


opacity:e.opacity || .95,


transform:

`rotate(${e.rotate || 0}deg)`,


filter:

"drop-shadow(0 20px 30px rgba(60,50,30,.18))"


}}

/>


)

)

}



</div>

)

}
