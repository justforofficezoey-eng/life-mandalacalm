"use client";

import { useState } from "react";


export default function MandalaSignature({
  days,
  onSave
}:any){


  const [title,setTitle]=useState("");

  const [name,setName]=useState("");



  return (

    <div

    style={{

      margin:"80px auto",

      maxWidth:520,

      padding:45,

      borderRadius:40,

      background:

      "rgba(255,250,240,.8)",

      boxShadow:

      "0 30px 90px rgba(70,60,40,.12)",

      textAlign:"center"

    }}

    >



      <div

      style={{

        fontFamily:

        "Georgia,'Noto Serif SC',serif",

        letterSpacing:6,

        color:"#918875",

        fontSize:13

      }}

      >

        A MEMORY OF TIME

      </div>



      <h1

      style={{

        marginTop:30,

        fontFamily:

        "Georgia,'Noto Serif SC',serif",

        fontWeight:400,

        letterSpacing:4,

        fontSize:32

      }}

      >

        给这一段时间一个名字

      </h1>




      <p

      style={{

        lineHeight:2,

        color:"#777",

        fontFamily:

        "Georgia,'Noto Serif SC',serif"

      }}

      >

        有些经历，

        <br/>

        不需要被定义。

        <br/>

        但值得被留下。

      </p>





      <input

      value={title}

      onChange={e=>setTitle(e.target.value)}

      placeholder="例如：八月的风 / 慢慢生长"

      style={{

        width:"100%",

        marginTop:30,

        padding:16,

        borderRadius:20,

        border:"1px solid #ddd",

        background:"#fff",

        textAlign:"center",

        fontFamily:"serif"

      }}

      />





      <input

      value={name}

      onChange={e=>setName(e.target.value)}

      placeholder="留下一个署名"

      style={{

        width:"100%",

        marginTop:15,

        padding:16,

        borderRadius:20,

        border:"1px solid #ddd",

        background:"#fff",

        textAlign:"center",

        fontFamily:"serif"

      }}

      />





      <button

      onClick={()=>onSave({

        title,

        name,

        createdAt:

        new Date().toISOString(),

        days

      })}

      style={{

        marginTop:35,

        padding:"15px 50px",

        borderRadius:40,

        border:"none",

        background:"#596451",

        color:"#fff",

        letterSpacing:2

      }}

      >

        留下这一枚时间

      </button>



    </div>

  );

}
