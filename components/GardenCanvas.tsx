"use client";

import { useMemo } from "react";


export default function GardenCanvas({
  garden
}:any){


  const elements =
  garden?.elements || [];



  const arranged =
  useMemo(()=>{


    const radius = 175;


    return elements.map(

      (e:any,i:number)=>{


        const angle =

        (Math.PI * 2 * i)

        /

        elements.length;



        return {

          ...e,

          x:

          260 +

          Math.cos(angle)

          *

          radius

          -

          (e.size || 100)/2,


          y:

          260 +

          Math.sin(angle)

          *

          radius

          -

          (e.size || 100)/2,


          rotate:

          angle * 180 / Math.PI

        };


      }

    );


  },[elements]);






  return (

    <div


    style={{

      width:620,

      height:620,

      margin:"60px auto",

      position:"relative",

      borderRadius:"50%",


      background:

      "radial-gradient(circle,#fff9e8 0%,#e6eadc 60%,#d8ddce 100%)",



      boxShadow:

      "0 50px 120px rgba(70,60,40,.18), inset 0 0 100px rgba(255,255,255,.8)",


      overflow:"hidden"

    }}

    >




      <div

      style={{

        position:"absolute",

        inset:160,

        borderRadius:"50%",


        background:

        "radial-gradient(circle,rgba(255,236,170,.9),transparent 70%)",


        animation:

        "softGlow 8s infinite ease-in-out"

      }}

      />





      <div

      style={{

        position:"absolute",

        inset:0,

        display:"flex",

        alignItems:"center",

        justifyContent:"center",

        fontFamily:"serif",

        color:"#766f58",

        letterSpacing:5,

        fontSize:20

      }}

      >

        七日之印

      </div>






      {

        arranged.map(

          (e:any,i:number)=>(


          <img

          key={i}

          src={e.image}


          alt="life mandala"


          style={{

            position:"absolute",

            left:e.x,

            top:e.y,


            width:e.size || 100,


            opacity:e.opacity || .9,


            transform:

            `rotate(${e.rotate}deg)`,



            filter:

            "drop-shadow(0 25px 30px rgba(60,50,30,.2))",



            animation:

            `mandalaFloat ${8+i}s ease-in-out infinite`


          }}


          />


          )

        )

      }



    </div>

  );

}
