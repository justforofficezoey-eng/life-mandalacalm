"use client";

import { useState } from "react";


export default function GardenCanvas({
  garden
}: any) {


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

        borderRadius:"50%",


        overflow:"hidden",


        background:

        `
        radial-gradient(
          circle at center,
          #fff8df 0%,
          #f2ead8 45%,
          #dce4d5 100%
        )
        `,


        boxShadow:

        `
        0 50px 120px rgba(70,60,40,.18),
        inset 0 0 80px rgba(255,255,255,.5)
        `,


        border:

        "1px solid rgba(120,100,70,.15)"


      }}

    >



      {/* 中心柔光 */}

      <div

        style={{

          position:"absolute",

          inset:100,

          borderRadius:"50%",


          background:

          `
          radial-gradient(
          circle,
          rgba(255,245,200,.8),
          transparent 70%
          )
          `,


          animation:

          "softGlow 8s ease-in-out infinite"

        }}

      />




      {/* 植物层 */}

      {
        elements.map(

          (e:any,i:number)=>(


            <img

              key={i}

              src={e.image}

              alt="life fragment"


              onClick={()=>setSelected(e)}


              style={{


                position:"absolute",


                left:e.x,


                top:e.y,


                width:e.size,


                cursor:"pointer",


                opacity:e.opacity || .95,


                transform:

                `
                rotate(${e.rotate || 0}deg)
                `,


                filter:

                `
                drop-shadow(
                0 25px 35px
                rgba(60,50,30,.18)
                )
                `,


                transition:

                "all .6s ease"



              }}


            />

          )

        )
      }




      {/* 点击记录 */}

      {
        selected &&

        <div

          onClick={()=>setSelected(null)}

          style={{


            position:"absolute",

            inset:0,


            background:

            "rgba(250,245,230,.88)",


            backdropFilter:

            "blur(10px)",


            display:"flex",

            flexDirection:"column",

            justifyContent:"center",

            alignItems:"center",


            padding:40,


            textAlign:"center",


            zIndex:10


          }}

        >


          <h2>

          Day {selected.day}

          </h2>


          <p>

          {selected.mood}

          </p>


          <p

          style={{

            maxWidth:280,

            lineHeight:1.8

          }}

          >

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
