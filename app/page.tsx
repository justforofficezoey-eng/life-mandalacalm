"use client";

import { useState } from "react";

import MandalaCanvas from "../components/MandalaCanvas";

import {
  saveFragment,
  getFragments
} from "../lib/dailyStorage";

import {
  createMandala
} from "../lib/mandalaEngine";


export default function Home(){


  const [text,setText] =
    useState("");

  const [design,setDesign] =
    useState<any>(null);



  function create(){


    if(!text){

      return;

    }


    // 保存今天碎片

    saveFragment(text);



    // 获取7天数据

    const fragments =
      getFragments();



    // 生成曼陀罗设计

    const result =
      createMandala(fragments);



    setDesign(result);



    setText("");

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

      padding:"60px 20px"

    }}

    >



      <h1

      style={{

        fontFamily:"Georgia",

        fontWeight:400,

        fontSize:"42px"

      }}

      >

        Life Mandala

      </h1>




      <p>

        留下一点今天的生命痕迹

      </p>




      <textarea

      value={text}

      onChange={
        e=>setText(e.target.value)
      }


      placeholder="任何东西都可以..."

      style={{

        marginTop:"40px",

        width:"90%",

        maxWidth:"500px",

        height:"120px",

        borderRadius:"25px",

        padding:"20px",

        border:
        "1px solid #ddd",

        fontSize:"18px"

      }}

      />




      <button

      onClick={create}

      style={{

        marginTop:"25px",

        padding:"15px 50px",

        borderRadius:"40px",

        border:"none",

        background:"#C9A96E",

        color:"white"

      }}

      >

        展开我的曼陀罗

      </button>





      {

      design &&


      <section

      style={{

        marginTop:"60px",

        textAlign:"center"

      }}

      >


        <MandalaCanvas

        design={design}

        />


        <h2>

          七日生命曼陀罗

        </h2>


        <p>

          每一个输入，
          都成为图案的一部分。

        </p>


      </section>


      }



    </main>


  );

}
