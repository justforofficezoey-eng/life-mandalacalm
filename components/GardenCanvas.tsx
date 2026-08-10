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

        width:600,

        height:600,

        margin:"50px auto",

        position:"relative",

        overflow:"hidden",

        borderRadius:"50%",


        background:

        `
        radial-gradient(
          circle,
          #fff9e8 0%,
          #f1ead8 45%,
          #d8e2d3 100%
        )
        `,


        boxShadow:

        `
        0 60px 120px rgba(70,60,40,.18),
        inset 0 0 100px rgba(255,255,255,.8)
        `,


      }}

    >



      {/* 中心生命光 */}

      <div

        style={{

          position:"absolute",

          left:"50%",

          top:"50%",

          width:260,

          height:260,


          transform:

          "translate(-50%,-50%)",


          borderRadius:"50%",


          background:

          `
          radial-gradient(
          circle,
          rgba(255,240,190,.8),
          transparent 70%
          )
          `,


          animation:

          "softGlow 7s ease-in-out infinite"

        }}

      />




      {/* 曼陀罗碎片 */}

      {

        elements.map(

          (e:any,i:number)=>(


            <div

              key={i}


              onClick={()=>setSelected(e)}


              style={{

                position:"absolute",


                left:e.x,


                top:e.y,


                animation:

                `
                floatPlant 
                ${7+i}s 
                ease-in-out 
                infinite
                `,


                cursor:"pointer"


              }}

            >



              <img

                src={e.image}


                alt="mandala"


                style={{

                  width:e.size || 130,


                  opacity:.92,


                  transform:

                  `
                  rotate(${e.rotate || 0}deg)
                  `,


                  filter:

                  `
                  drop-shadow(
                  0 35px 45px
                  rgba(60,50,30,.2)
                  )
                  `,


                  transition:

                  "all 1s ease"

                }}

              />


            </div>


          )

        )

      }




      {/* 点击查看 */}

      {

      selected &&


      <div

        onClick={()=>setSelected(null)}


        style={{

          position:"absolute",

          inset:0,


          zIndex:20,


          background:

          "rgba(250,245,230,.94)",


          backdropFilter:

          "blur(15px)",


          display:"flex",

          flexDirection:"column",

          justifyContent:"center",

          alignItems:"center",


          padding:50,


          textAlign:"center"


        }}

      >



        <div

        style={{

          fontSize:12,

          letterSpacing:4,

          color:"#999"

        }}

        >

          DAY {selected.day}

        </div>



        <h2

        style={{

          fontWeight:400,

          color:"#3f4438"

        }}

        >

          {selected.mood}

        </h2>



        <p

        style={{

          maxWidth:300,

          lineHeight:2,

          color:"#555"

        }}

        >

          {selected.text ||

          "这一刻，被轻轻留下。"}

        </p>



      </div>


      }



    </div>

  );

}
