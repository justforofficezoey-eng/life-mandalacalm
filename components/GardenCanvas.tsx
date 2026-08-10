"use client";


export default function GardenCanvas({
garden
}:any){



const elements =
garden?.elements || [];



return (


<div

style={{

width:620,

height:620,

margin:"50px auto",

position:"relative",

borderRadius:"50%",


background:

"radial-gradient(circle,#fff8df,#dfe7d7)",


boxShadow:

"0 40px 100px rgba(60,50,30,.2)"

}}

>



<div

style={{

position:"absolute",

inset:0,

display:"flex",

justifyContent:"center",

alignItems:"center",

flexDirection:"column",

fontFamily:"serif",

color:"#716954"

}}

>


<div

style={{

fontSize:24,

letterSpacing:8

}}

>

此刻

</div>



<div

style={{

marginTop:15,

fontSize:14

}}

>

{

new Date()

.toLocaleString()

}

</div>


</div>





{

elements.map(

(e:any,i:number)=>(


<div

key={i}

style={{

position:"absolute",

left:

e.x,

top:

e.y,

textAlign:"center"

}}

>


<img

src={e.image}

style={{

width:e.size || 100,


filter:

"drop-shadow(0 20px 25px rgba(60,50,30,.18))"


}}

/>



<div

style={{

marginTop:8,

fontSize:12,

fontFamily:"serif",

color:"#777"

}}

>

{

e.localTime ||

""

}

</div>


</div>



)

)


}



</div>


);


}
