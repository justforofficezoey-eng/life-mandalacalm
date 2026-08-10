"use client";

import { useState } from "react";


export default function GardenCanvas({
  garden
}:any){


  const elements =
    garden?.elements || [];


  const [selected,setSelected] =
    useState<any>(null);



  return (

    <div

      style={{

        width:560,

        height:560,

        margin:"40px auto",

        position:"relative",

        overflow:"hidden",

        borderRadius:"50%",


        background:

        "radial-gradient(circle,#fff8df,#e1e7d9)",


        boxShadow:

        "0 50px 120px rgba(60,50,30,.18), inset 0 0 80px rgba(255,255,255,.6)"

      }}

    >



      <div

        style={{

          position:"absolute",

          inset:100,

          borderRadius:"50%",


          background:

          "radial-gradient(circle,rgba(255,240,180,.8),transparent)",


          animation:

          "softGlow 8s ease-in-out infinite"

        }}

      />



      {
        elements.map(

          (e:any,i:number)=>(


            <img

              key={i}

              src={e.image}

              alt="life mandala"


              onClick={()=>setSelected(e)}


              style={{

                position:"absolute",

                left:e.x,

                top:e.y,

                width:e.size,


                opacity:e.opacity,


                cursor:"pointer",


                transform:

                `rotate(${e.rotate}deg)`,


                filter:

                "drop-shadow(0 25px 35px rgba(60,50,30,.18))",


                transition:"all .8s ease"

              }}

            />

          )

        )
      }




      {
        selected &&

        <div

          onClick={()=>setSelected(null)}

          style={{

            position:"absolute",

            inset:0,


            background:"rgba(250,245,230,.9)",


            backdropFilter:"blur(12px)",


            zIndex:20,


            display:"flex",

            flexDirection:"column",

            justifyContent:"center",

            alignItems:"center",

            textAlign:"center",

            padding:40

          }}

        >

          <h2>
            Day {selected.day}
          </h2>


          <h3>
            {selected.mood}
          </h3>


          <p>

            {selected.text}

          </p>


          <small>
            点击关闭
          </small>


        </div>

      }



    </div>

  );

}
