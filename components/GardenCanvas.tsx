"use client";

import { useState } from "react";


export default function GardenCanvas({
  garden
}:any){


  const elements = garden?.elements || [];

  const [selected,setSelected] =
  useState<any>(null);



  function moodColor(mood:string){

    if(mood?.includes("开心"))
      return "#e8c56d";

    if(mood?.includes("疲惫"))
      return "#a9b7c6";

    if(mood?.includes("思考"))
      return "#8d89b8";

    if(mood?.includes("说不清"))
      return "#b8a58a";

    return "#91aa7b";

  }



  return (

    <div

    style={{

      width:620,

      height:620,

      maxWidth:"90vw",

      maxHeight:"90vw",

      margin:"60px auto",

      position:"relative",

      borderRadius:"50%",

      background:

      "radial-gradient(circle,#fff8e8,#e1e7d8)",

      boxShadow:

      "0 40px 100px rgba(60,50,30,.15)",

      overflow:"hidden"

    }}

    >



      {/* 中心 */}

      <div

      style={{

        position:"absolute",

        inset:0,

        display:"flex",

        justifyContent:"center",

        alignItems:"center",

        flexDirection:"column",

        fontFamily:"Georgia,serif",

        color:"#716957"

      }}

      >

        <div

        style={{

          fontSize:28,

          letterSpacing:8

        }}

        >

          此刻

        </div>


        <div

        style={{

          marginTop:15,

          fontSize:12,

          opacity:.7

        }}

        >

          {new Date().toLocaleString()}

        </div>


      </div>





      {/* 时间节点 */}

      {

      elements.map(

        (e:any,i:number)=>(


          <button

          key={i}

          onClick={()=>setSelected(e)}

          style={{

            position:"absolute",

            left:e.x,

            top:e.y,

            width:e.size,

            height:e.size,

            borderRadius:"50%",

            border:"none",

            cursor:"pointer",

            background:

            moodColor(e.mood),

            opacity:.75,

            boxShadow:

            "0 15px 35px rgba(50,40,30,.15)",

            transition:"all .5s"

          }}

          >


          <span

          style={{

            fontSize:11,

            color:"#fff",

            fontFamily:"serif"

          }}

          >

          {i+1}

          </span>


          </button>


        )

      )

      }





      {/* 回忆 */}

      {

      selected &&


      <div

      onClick={()=>setSelected(null)}

      style={{

        position:"absolute",

        inset:0,

        background:

        "rgba(250,246,235,.94)",

        zIndex:10,

        display:"flex",

        justifyContent:"center",

        alignItems:"center",

        flexDirection:"column",

        padding:40,

        textAlign:"center",

        fontFamily:"Georgia,serif",

        color:"#575143"

      }}

      >


        <div

        style={{

          fontSize:12,

          letterSpacing:3

        }}

        >

          {selected.localTime}

        </div>



        <p

        style={{

          marginTop:35,

          lineHeight:2.3,

          fontSize:18

        }}

        >

          「{selected.text}」

        </p>



        <small

        style={{

          marginTop:30,

          color:"#999"

        }}

        >

          再次经过这一刻

        </small>


      </div>


      }


    </div>


  );

}
