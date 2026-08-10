"use client";

import { useState } from "react";
import { generateMandala } from "../lib/generateMandala";

export default function Home() {

  const [text, setText] = useState("");
  const [result, setResult] = useState<any>(null);
  const [creating, setCreating] = useState(false);


  function createMandala(){

    if(!text.trim()) return;

    setCreating(true);

    setTimeout(()=>{

      const data =
        generateMandala(text);

      setResult(data);

      setCreating(false);

    },1800);

  }


  return (

    <main
    style={{
      minHeight:"100vh",
      background:"#F8F4EC",
      color:"#4A4038",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      padding:"70px 20px",
      fontFamily:
      "Inter, sans-serif"
    }}
    >


      <div
      style={{
        textAlign:"center",
        maxWidth:"600px"
      }}
      >


        <div
        style={{
          fontSize:"14px",
          letterSpacing:"5px",
          color:"#C9A96E",
          marginBottom:"35px"
        }}
        >
          LIFE MANDALA
        </div>



        <h1
        style={{
          fontFamily:
          "Georgia, serif",
          fontSize:"46px",
          fontWeight:400,
          margin:0
        }}
        >
          每一个瞬间
          <br/>
          都有自己的形状
        </h1>



        <p
        style={{
          marginTop:"25px",
          lineHeight:2,
          color:"#786b61"
        }}
        >
          留下一点今天的痕迹。
          <br/>
          不需要解释，只需要存在。
        </p>


      </div>




      {/* 呼吸曼陀罗 */}

      <div
      style={{
        marginTop:"55px",
        width:"180px",
        height:"180px",
        borderRadius:"50%",
        border:
        "1px solid rgba(201,169,110,0.5)",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        animation:
        "breath 4s ease-in-out infinite"
      }}
      >

        <div
        style={{
          width:"65px",
          height:"65px",
          borderRadius:"50%",
          background:
          "rgba(201,169,110,0.25)"
        }}
        />

      </div>




      <textarea

      value={text}

      onChange={
        e=>setText(e.target.value)
      }

      placeholder="
      今天的你，
      想留下什么？
      "

      style={{
        marginTop:"60px",
        width:"90%",
        maxWidth:"500px",
        height:"130px",
        padding:"25px",
        borderRadius:"25px",
        border:
        "1px solid rgba(100,80,60,0.12)",
        background:
        "rgba(255,255,255,0.45)",
        resize:"none",
        fontSize:"17px",
        outline:"none"
      }}

      />




      <button

      onClick={createMandala}

      style={{

        marginTop:"30px",
        padding:
        "15px 55px",
        borderRadius:"40px",
        border:"none",
        background:"#C9A96E",
        color:"#fff",
        fontSize:"16px",
        cursor:"pointer"

      }}

      >

      {
        creating
        ?
        "正在形成..."
        :
        "展开"
      }


      </button>





      {
      result &&

      <section

      style={{

        marginTop:"70px",
        maxWidth:"520px",
        width:"90%",
        textAlign:"center",
        padding:"40px",
        borderRadius:"30px",
        background:
        "rgba(255,255,255,0.55)"

      }}

      >


        <h2
        style={{
          fontFamily:"Georgia, serif",
          fontWeight:400
        }}
        >
          {result.title}
        </h2>


        <p
        style={{
          lineHeight:2
        }}
        >
          {result.message}
        </p>



        <div
        style={{
          marginTop:"30px",
          fontSize:"14px",
          color:"#786b61"
        }}
        >

          <p>
          色彩：
          {result.colors.join("、")}
          </p>


          <p>
          象征：
          {result.element}
          </p>


          <p>
          形态：
          {result.shape}
          </p>


        </div>


      </section>

      }



      <style jsx>{`

        @keyframes breath {

          0% {
            transform:scale(1);
            opacity:.7;
          }

          50% {
            transform:scale(1.08);
            opacity:1;
          }

          100% {
            transform:scale(1);
            opacity:.7;
          }

        }

      `}</style>



    </main>

  );
}
