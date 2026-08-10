"use client";

import { useState } from "react";
import { saveDay } from "../lib/dailyStorage";


export default function DailyEntry({
  onSave
}:any){


  const [text,setText]=useState("");

  const [mood,setMood]=useState("平静");



  const moods=[

    "平静",

    "开心",

    "疲惫",

    "思考",

    "说不清"

  ];



  function submit(){


    if(!text.trim()) return;


    const days = saveDay({

      text,

      mood,

      date:new Date().toISOString()

    });


    onSave?.(days);


    setText("");

  }



  return (

    <div

    style={{

      maxWidth:600,

      margin:"50px auto",

      padding:30,

      textAlign:"center"

    }}

    >



      <h1

      style={{

        fontFamily:

        "Georgia,'Noto Serif SC',serif",

        fontWeight:400,

        letterSpacing:6,

        color:"#5f594c"

      }}

      >

        此刻

      </h1>




      <p

      style={{

        marginTop:25,

        lineHeight:2,

        color:"#888",

        fontFamily:"serif"

      }}

      >

        写下一些东西。

        <br/>

        不必完整。

        <br/>

        它会留在这里。

      </p>




      <textarea

      value={text}

      onChange={e=>setText(e.target.value)}

      placeholder="想到什么，就写什么"

      style={{

        marginTop:35,

        width:"100%",

        height:170,

        padding:22,

        borderRadius:25,

        border:"1px solid #ddd",

        fontFamily:

        "Georgia,'Noto Serif SC',serif",

        fontSize:16,

        lineHeight:2,

        resize:"none",

        background:"#fffdf7"

      }}

      />





      <div

      style={{

        marginTop:25

      }}

      >

      {

      moods.map(item=>(


        <button

        key={item}

        onClick={()=>setMood(item)}

        style={{

          margin:5,

          padding:"10px 20px",

          borderRadius:30,

          border:"1px solid #ddd",

          background:

          mood===item

          ?

          "#e7eadc"

          :

          "#fff",

          color:"#666"

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

        padding:"14px 55px",

        borderRadius:40,

        border:"none",

        background:"#5e6756",

        color:"#fff",

        letterSpacing:2

      }}

      >

        保存

      </button>



    </div>

  );

}
