"use client";


import {
useState
}
from "react";


import {
saveDay,
getDays
}
from "../lib/dailyStorage";


import {
createDailyArtwork
}
from "../lib/dailyArtworkEngine";


import {
composeGarden
}
from "../lib/gardenComposer";


import GardenCanvas
from "../components/GardenCanvas";




export default function Home(){


const [text,setText]=
useState("");



const [garden,setGarden]=
useState<any>(null);




function preview(){


const fake=[];



for(
let i=1;
i<=7;
i++
){


fake.push({

artwork:
createDailyArtwork(
text+i,
i
)

});


}



setGarden(
composeGarden(fake)
);


}





function save(){



const day =
getDays().length+1;



const artwork =
createDailyArtwork(
text,
day
);



const days =
saveDay({

date:
new Date()
.toISOString(),

text,

artwork

});



if(days.length===7)

setGarden(
composeGarden(days)
);



setText("");



}




return (

<main

style={{

minHeight:"100vh",

background:"#f5efe3",

padding:60,

textAlign:"center"

}}

>


<h1>
Life Mandala
</h1>


<p>
留下今天的一笔
</p>


<textarea

value={text}

onChange={
e=>setText(e.target.value)
}


placeholder="任何东西都可以"


style={{

width:350,

height:120,

padding:20,

borderRadius:20

}}

/>



<br/>


<button onClick={save}>

保存今天

</button>



<br/>


<button

onClick={preview}

style={{

marginTop:20

}}

>

预览七日花园

</button>




{
garden&&

<>

<h2>
{garden.title}
</h2>


<GardenCanvas

garden={garden}

/>


</>

}



</main>

)

}
