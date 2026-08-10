"use client";


import {useState} from "react";

import {
saveDay,
getDays
}
from "../lib/dailyStorage";


import GardenCanvas
from "../components/GardenCanvas";


import {
composeGarden
}
from "../lib/gardenComposer";



export default function Home(){


const [mood,setMood]=useState("");

const [text,setText]=useState("");

const [garden,setGarden]=useState<any>(null);



const moods=[

["🌱","开始了","seed"],

["🌿","缓一缓","leaf"],

["🌸","傻乐中","flower"],

["🔥","还能忍","branch"],

["🌙","深度思考","root"],

["🌊","顺其自然","vine"],

["☀️","谢谢今天","light"]

];



function save(){


const plant =
moods.find(
m=>m[1]===mood
)?.[2]
||
"seed";



const days =
saveDay({

date:new Date().toISOString(),

mood,

text,

plant

});



if(days.length===7){

setGarden(
composeGarden(days)
);

}



setText("");

}



return (

<div

style={{

minHeight:"100vh",

background:"#f7f1e7",

padding:40,

textAlign:"center"

}}

>


<h1>
Life Mandala
</h1>


<h2>
今天的生命碎片
</h2>



<div>

{

moods.map(m=>(

<button

key={m[1]}

onClick={()=>setMood(m[1])}

style={{

margin:8,

padding:12,

borderRadius:20

}}

>

{m[0]} {m[1]}

</button>

))

}

</div>



<textarea

placeholder="留下今天的一句话"

value={text}

onChange={
e=>setText(e.target.value)
}

style={{

marginTop:30,

width:300,

height:100

}}

/>


<br/>


<button

onClick={save}

style={{

marginTop:20,

padding:"12px 30px"

}}

>

保存今日印记

</button>



{

garden &&

<div style={{marginTop:50}}>

<GardenCanvas garden={garden}/>

</div>

}



</div>

)


}
