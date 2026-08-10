"use client";

import { useState } from "react";

import {
  saveDay,
  getDays
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



    if(days.length >= 1){

      setGarden(
        composeGarden(days)
      );

    }


    setMood("");

    setText("");

  }



  const currentDays =
    getDays();



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

        letterSpacing:5,

        color:"#3f4438"

      }}

      >

        Life Mandala

      </h1>




      <p

      style={{

        color:"#777",

        marginTop:10,

        marginBottom:45

      }}

      >

        每一天，留下一点属于自己的痕迹

      </p>




      <section>


        <h3

        style={{

          fontWeight:400

        }}

        >

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

              padding:"14px 22px",

              borderRadius:30,


              border:

              mood===m[1]

              ?

              "2px solid #69735d"

              :

              "1px solid #ddd",


              background:

              mood===m[1]

              ?

              "#e2e8d7"

              :

              "rgba(255,255,255,.55)",


              cursor:"pointer",

              fontSize:15

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

          marginTop:30,

          width:"90%",

          maxWidth:450,

          height:120,

          padding:20,

          borderRadius:22,

          border:"1px solid #ddd",

          background:"rgba(255,255,255,.75)",

          fontSize:16,

          outline:"none"

        }}

        />




        <br/>




        <button

        onClick={save}


        style={{

          marginTop:25,

          padding:"15px 50px",

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



      </section>





      <section

      style={{

        marginTop:80

      }}

      >



      {

        currentDays.length < 7

        ?


        <div>


          <h2

          style={{

            fontWeight:400,

            color:"#555"

          }}

          >

            曼陀罗正在形成中

          </h2>



          <p

          style={{

            color:"#888",

            lineHeight:1.8

          }}

          >

            已留下

            {" "}

            {currentDays.length}

            {" "}

            / 7 个生命碎片

            <br/>

            每一天都会留下一个位置

          </p>



          <div

          style={{

            margin:"40px auto",

            width:230,

            height:230,

            borderRadius:"50%",


            background:

            "radial-gradient(circle,#fff1c9,#dce5d6)",


            display:"flex",

            justifyContent:"center",

            alignItems:"center",

            fontSize:50

          }}

          >

            🌱

          </div>



        </div>



        :



        <div>


          <h2

          style={{

            fontWeight:400

          }}

          >

            你的七日生命曼陀罗

          </h2>



          <GardenCanvas

          garden={

            garden ||

            composeGarden(currentDays)

          }

          />


        </div>


      }



      </section>



    </main>

  );

}
