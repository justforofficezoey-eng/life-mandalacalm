"use client";

import { useState } from "react";
import { generateMandala } from "../lib/generateMandala";


export default function Home() {

  const [text,setText] = useState("");
  const [result,setResult] = useState<any>(null);


  function create(){

    const data =
      generateMandala(text);

    setResult(data);

  }



  return (

    <main
    style={{
      minHeight:"100vh",
      padding:"40px",
      textAlign:"center",
      background:
      "linear-gradient(#fff8f0,#eee2f7)",
      color:"#59445f"
    }}
    >


      <h1>
        🌸 Life Mandala
      </h1>


      <p>
        每个人的生命，
        都有自己的图案。
      </p>


      <textarea

      value={text}

      onChange={
        e=>setText(e.target.value)
      }

      placeholder="
      留下一点今天的痕迹...
      一句话也可以。
      "

      style={{

        width:"80%",
        height:"150px",
        padding:"20px",
        borderRadius:"20px",
        border:"none",
        fontSize:"18px"

      }}

      />


      <br/>


      <button

      onClick={create}

      style={{

        marginTop:"25px",
        padding:"16px 45px",
        borderRadius:"40px",
        border:"none",
        background:"#d5b36a",
        color:"white",
        fontSize:"18px"

      }}

      >

      ✨ 创造我的曼陀罗

      </button>



      {
      result &&

      <section
      style={{
        marginTop:"50px",
        maxWidth:"700px",
        marginLeft:"auto",
        marginRight:"auto"
      }}
      >

      <h2>
        {result.title}
      </h2>


      <p>
        {result.message}
      </p>


      <h3>
        🌸 曼陀罗元素
      </h3>


      <p>
        颜色：
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


      </section>

      }


    </main>

  );
}
