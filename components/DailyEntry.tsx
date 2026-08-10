"use client";

import { useState } from "react";
import { saveDay } from "../lib/dailyStorage";

export default function DailyEntry({
  onSave
}:any){

  const [text,setText]=useState("");
  const [mood,setMood]=useState("🌱 平静");


  const moods=[
    "🌱 平静",
    "🌙 思考",
    "☀️ 开心",
    "🌧 疲惫",
    "🌊 说不清"
  ];


  function submit(){

    if(!text.trim()) return;


    const days=saveDay({

      text,

      mood,

      createdAt:
      new Date().toISOString(),

    });


    onSave?.(days);


    setText("");

  }


  return (

    <div

    style={{

      maxWidth:600,

      margin:"60px auto",

      padding:35,

      textAlign:"center"

    }}

    >


      <h1

      style={{

        fontFamily:"Georgia,serif",

        fontWeight:400,

        letterSpacing:5

      }}

      >

        此刻

      </h1>


      <p

      style={{

        color:"#777",

        lineHeight:2,

        fontFamily:"serif"

      }}

      >

        留下一句话。

        <br/>

        不需要解释。

        <br/>

        时间会替你保存。

      </p>



      <textarea

      value={text}

      onChange={e=>setText(e.target.value)}

      placeholder="今天，有什么想留下？"

      style={{

        width:"100%",

        height:180,

        marginTop:30,

        padding:20,

        borderRadius:25,

        border:"1px solid #ddd",

        fontSize:16,

        lineHeight:2,

        fontFamily:"serif",

        resize:"none"

      }}

      />



      <div

      style={{

        marginTop:20

      }}

      >

      {

        moods.map(item=>(

          <button

          key={item}

          onClick={()=>setMood(item)}

          style={{

            margin:5,

            padding:"10px 18px",

            borderRadius:30,

            border:"1px solid #ddd",

            background:

            mood===item

            ?

            "#e8eadc"

            :

            "#fff"

          }}

          >

          {item}

          </button>

        ))

      }

      </div>



      <button

      onClick={submit}

      style={{

        marginTop:35,

        padding:"15px 55px",

        borderRadius:40,

        border:"none",

        background:"#596451",

        color:"#fff"

      }}

      >

        留下这一刻

      </button>



    </div>

  );

}
