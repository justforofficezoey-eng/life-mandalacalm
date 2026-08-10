"use client";

import { useState } from "react";

import {
  saveDay
} from "../lib/dailyStorage";

import GardenCanvas
from "../components/GardenCanvas";

import {
  composeGarden
}
from "../lib/gardenComposer";



export default function Home(){


  const [mood,setMood] =
    useState("");


  const [text,setText] =
    useState("");


  const [garden,setGarden] =
    useState<any>(null);



  const moods = [

    ["🌱","开始了","seed"],

    ["🌿","缓一缓","leaf"],

    ["🌸","傻乐中","flower"],

    ["🔥","还能忍","branch"],

    ["🌙","想一想","root"],

    ["🌊","顺其自然","vine"],

    ["☀️","谢谢今天","light"]

  ];



  function save(){


    const plant =
      moods.find(
        m=>m[1]===mood
      )?.[2]
      ||
      "seed";



    const days =
      saveDay({

        date:
        new Date().toISOString(),

        mood,

        text,

        plant

      });



    if(days.length===7){

      setGarden(
        composeGarden(days)
      );

    }


    setText("");

  }



  return (


    <main

      style={{

        minHeight:"100vh",

        background:
        "linear-gradient(180deg,#faf5ea,#e7ede0)",

        padding:"60px 20px",

        textAlign:"center"

      }}

    >


      <h1

        style={{

          fontSize:42,

          fontWeight:400,

          letterSpacing:4,

          color:"#3f4438"

        }}

      >

        Life Mandala

      </h1>



      <p

        style={{

          color:"#777",

          marginBottom:40

        }}

      >

        每一天，留下一点属于自己的痕迹

      </p>




      <div

        style={{

          maxWidth:600,

          margin:"0 auto"

        }}

      >


        <h3>

          今天的一个瞬间

        </h3>



        <div>


        {

          moods.map(m=>(


            <button

              key={m[1]}

              onClick={()=>setMood(m[1])}


              style={{

                margin:8,

                padding:"14px 20px",

                borderRadius:30,

                border:

                mood===m[1]

                ?

                "2px solid #7c806d"

                :

                "1px solid #ddd",


                background:

                mood===m[1]

                ?

                "#e5eadb"

                :

                "rgba(255,255,255,.5)",


                fontSize:16,

                cursor:"pointer"

              }}

            >

              {m[0]} {m[1]}

            </button>


          ))

        }


        </div>



        <textarea

          value={text}

          onChange={
            e=>setText(e.target.value)
          }


          placeholder="写下一句话，也可以什么都不写"


          style={{

            marginTop:35,

            width:"90%",

            height:120,

            borderRadius:20,

            border:"1px solid #ddd",

            padding:20,

            fontSize:16,

            background:"rgba(255,255,255,.7)"

          }}

        />



        <br/>



        <button

          onClick={save}


          style={{

            marginTop:25,

            padding:"14px 45px",

            borderRadius:40,

            border:"none",

            background:"#66705b",

            color:"#fff",

            fontSize:16,

            cursor:"pointer"

          }}

        >

          收下今天

        </button>



      </div>




      {

        garden &&

        <div

          style={{

            marginTop:70

          }}

        >

          <h2

          style={{

            fontWeight:400

          }}

          >

            你的七日生命曼陀罗

          </h2>


          <GardenCanvas
            garden={garden}
          />


        </div>

      }



    </main>

  );


}
