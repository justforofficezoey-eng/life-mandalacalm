"use client";

import { useState } from "react";


export default function MemoryNode({
  item,
  index
}:any){


  const [open,setOpen]=useState(false);



  return (

    <>

      <button

      onClick={()=>setOpen(true)}

      style={{

        position:"absolute",

        left:item.x,

        top:item.y,

        width:item.size,

        height:item.size,

        borderRadius:"50%",

        border:"none",

        cursor:"pointer",

        background:

        "rgba(150,170,130,.75)",


        boxShadow:

        "0 10px 35px rgba(60,50,30,.15)",


        animation:

        `memoryPulse ${5+index}s ease-in-out infinite`

      }}

      >

        <span

        style={{

          color:"#fff",

          fontSize:12

        }}

        >

          {index+1}

        </span>


      </button>





      {

      open &&


      <div

      onClick={()=>setOpen(false)}

      style={{

        position:"fixed",

        inset:0,

        zIndex:100,

        background:

        "rgba(248,244,233,.92)",

        display:"flex",

        justifyContent:"center",

        alignItems:"center",

        padding:30

      }}

      >



        <div

        onClick={(e)=>e.stopPropagation()}

        style={{

          maxWidth:450,

          padding:40,

          borderRadius:35,

          background:"#fffaf0",

          textAlign:"center",

          boxShadow:

          "0 30px 80px rgba(60,50,30,.12)"

        }}

        >


          <div

          style={{

            fontSize:12,

            letterSpacing:3,

            color:"#999"

          }}

          >

            {item.localTime}

          </div>



          <p

          style={{

            marginTop:30,

            fontFamily:

            "Georgia,'Noto Serif SC',serif",

            fontSize:18,

            lineHeight:2

          }}

          >

            {item.text}

          </p>



          <div

          style={{

            marginTop:25,

            fontSize:13,

            color:"#999"

          }}

          >

            {item.mood}
            <SelfReflection

day={item}

/>

          </div>



        </div>



      </div>


      }



    </>

  );

}
