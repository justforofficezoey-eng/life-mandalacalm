"use client";


function Glow({
x,
y,
size
}:any){

return (

<circle

cx={x}
cy={y}
r={size}

fill="url(#glow)"

opacity="0.45"

/>

)

}





function CherryFlower({
x,
y,
size,
color
}:any){

return (

<g>


{
[0,1,2,3,4].map(i=>(

<path

key={i}

d={`
M ${x} ${y}

C
${x-size}
${y-size}
${x-size/2}
${y-size*1.8}
${x}
${y-size*1.3}

C
${x+size/2}
${y-size*1.8}
${x+size}
${y-size}
${x}
${y}

`

}

fill={color}

opacity="0.7"

transform={`
rotate(${i*72} ${x} ${y})
`}

/>

))

}


<circle

cx={x}

cy={y}

r={size/5}

fill="#e8c98b"

/>


</g>

)

}





function Branch({
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
${x-size}
${y-size}
${x+size}
${y-size*2}
${x}
${y-size*3}

`}

stroke={color}

strokeWidth="3"

fill="none"

opacity=".6"

/>


</g>

)

}





function LeafCluster({
x,
y,
size,
color
}:any){

return (

<g>

{
[-1,0,1].map((v)=>(

<ellipse

key={v}

cx={x+v*size/2}

cy={y-size}

rx={size/3}

ry={size}

fill={color}

opacity=".5"

transform={`
rotate(${v*20}
${x}
${y})
`}

/>

))

}

</g>

)

}




export default function GardenCanvas({

garden

}:any){


const elements =
garden?.elements || [];



return (

<div

style={{

width:440,

height:440,

borderRadius:60,

overflow:"hidden",

background:

"linear-gradient(135deg,#faf4e9,#edf1e7)",


boxShadow:

"0 30px 80px rgba(80,70,50,.15)"

}}

>


<svg

width="440"

height="440"

viewBox="0 0 440 440"

>


<defs>


<radialGradient id="glow">

<stop

offset="0"

stopColor="#fff4cf"

/>

<stop

offset="1"

stopColor="#fff4cf"

stopOpacity="0"

/>

</radialGradient>


</defs>



{/* 月光 */}

<Glow

x={220}

y={210}

size={120}

/>



{/* 外圈生命轮廓 */}

<circle

cx="220"

cy="220"

r="170"

fill="none"

stroke="#d8cbb0"

opacity=".25"

/>




{

elements.map(

(e:any,i:number)=>{


const positions=[


{
x:220,
y:210
},


{
x:130,
y:130
},


{
x:320,
y:140
},


{
x:120,
y:300
},


{
x:320,
y:310
},


{
x:220,
y:340
}


];



const p =
positions[i%positions.length];



const size =
45+
e.size/5;



if(
i===0
){

return (

<CherryFlower

key={i}

x={p.x}

y={p.y}

size={size}

color={e.color}

/>

)

}



if(
e.type==="vine"
||
e.type==="fern"

){

return (

<LeafCluster

key={i}

x={p.x}

y={p.y}

size={size/2}

color={e.color}

/>

)

}



return (

<Branch

key={i}

x={p.x}

y={p.y}

size={size}

color={e.color}

/>

)


}

)

}




{/* 中心种子 */}

<circle

cx="220"

cy="220"

r="8"

fill="#d6b77a"

/>


</svg>


</div>


)

}
