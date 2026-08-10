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

        width:580,

        height:580,

        margin:"60px auto",

        position:"relative",

        overflow:"hidden",

        borderRadius:"50%",


        background:

        `
        radial-gradient(
          circle at center,
          #fff9e8 0%,
          #f2ead8 42%,
          #dfe6d8 100%
        )
        `,


        boxShadow:

        `
        0 60px 140px rgba(70,60,40,.16),
        inset 0 0 100px rgba(255,255,255,.7)
        `,


        border:

        "1px solid rgba(120,100,70,.12)"

      }}

    >



      {/* 内在空间 */}

      <div

        style={{

          position:"absolute",

          inset:90,

          borderRadius:"50%",


          background:

          `
          radial-gradient(
          circle,
          rgba(255,240,190,.55),
          transparent 70%
          )
          `,


          animation:

          "softGlow 9s ease-in-out infinite"

        }}

      />




      {/* 曼陀罗中心 */}

      <div

        style={{

          position:"absolute",

          left:"50%",

          top:"50%",

          transform:"translate(-50%,-50%)",


          width:70,

          height:70,

          borderRadius:"50%",


          background:

          "rgba(255,250,220,.7)",


          display:"flex",

          alignItems:"center",

          justifyContent:"center",


          fontSize:28,


          boxShadow:

          "0 10px 30px rgba(80,70,40,.12)"

        }}

      >

        ✦

      </div>




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


              cursor:"pointer",


              animation:

              `floatPlant ${6+i}s ease-in-out infinite`

            }}

            >



              <img


              src={e.image}


              alt="life fragment"


              style={{

                width:e.size,


                opacity:e.opacity || .9,


                transform:

                `rotate(${e.rotate || 0}deg)`,


                filter:

                `
                drop-shadow(
                0 30px 40px
                rgba(60,50,30,.16)
                )
                `


              }}


              />


            </div>


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


        zIndex:20,


        background:

        "rgba(250,246,235,.92)",


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

          color:"#888",

          letterSpacing:3,

          fontSize:14

        }}

        >

          LIFE FRAGMENT

        </div>




        <h1

        style={{

          fontWeight:400,

          marginTop:20,

          color:"#3f4438"

        }}

        >

          Day {selected.day}

        </h1>




        <h3

        style={{

          fontWeight:400,

          color:"#66705b"

        }}

        >

          {selected.mood}

        </h3>




        <p

        style={{

          maxWidth:320,

          lineHeight:2,

          color:"#555",

          fontSize:16

        }}

        >

          {selected.text || "这一刻，被轻轻留下。"}

        </p>




        <div

        style={{

          marginTop:25,

          color:"#999",

          fontSize:13

        }}

        >

          每一个片刻，都会成为生命的一部分

        </div>



        <small

        style={{

          marginTop:35,

          color:"#aaa"

        }}

        >

          点击回到曼陀罗

        </small>



      </div>


      }



    </div>


  );


}
