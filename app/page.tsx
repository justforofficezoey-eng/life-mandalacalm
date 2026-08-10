"use client";

import { useState } from "react";

import {
  saveDay,
  getDays
} from "../lib/dailyStorage";

import GardenCanvas
from "../components/GardenCanvas";

import ReflectionCard
from "../components/ReflectionCard";

import LifeTrajectory
from "../components/LifeTrajectory";

import SevenDayStory
from "../components/SevenDayStory";

import {
  composeGarden
}
from "../lib/gardenComposer";



export default function Home(){


  const [mood,setMood]=useState("");

  const [text,setText]=useState("");

  const [reflection,setReflection]=useState<any>(null);

  const [garden,setGarden]=useState<any>(null);



  const moods=[

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

      date:new Date().toISOString(),

      mood,

      text,

      plant

    });



    setGarden(

      composeGarden(days)

    );



    setReflection({

      mood,

      text

    });



    setMood("");

    setText("");

  }




  const days=getDays();





  return (

    <main

    style={{

      minHeight:"100vh",

      background:

      "linear-gradient(180deg,#faf5ea,#e4eadc)",

      padding:"60px 20px",

      textAlign:"center"

    }}

    >



      <h1

      style={{

        fontWeight:400,

        letterSpacing:5

      }}

      >

        Life Mandala

      </h1>



      <p

      style={{

        color:"#777"

      }}

      >

        每一天，留下一点属于自己的痕迹

      </p>





      {

        days.length < 7 &&

        <>

        <h3

        style={{

          marginTop:60,

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

              border:"1px solid #ddd",

              background:

              mood===m[1]

              ?

              "#e1e8d8"

              :

              "#fff"

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

        placeholder="写下一句话，也可以只是停留"

        style={{

          marginTop:30,

          width:"90%",

          maxWidth:450,

          height:120,

          padding:20,

          borderRadius:20

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

          color:"#fff"

        }}

        >

          收下今天

        </button>





        <h2

        style={{

          marginTop:80,

          fontWeight:400

        }}

        >

          曼陀罗正在形成中

        </h2>



        <p>

        已留下 {days.length}/7 个生命碎片

        </p>


        </>

      }





      {

        days.length >= 7 &&


        <>


        <SevenDayStory

        days={days}

        garden={

          garden ||

          composeGarden(days)

        }

        />



        <LifeTrajectory

        days={days}

        />



        <GardenCanvas

        garden={

          garden ||

          composeGarden(days)

        }

        />


        </>


      }





      {

        reflection &&


        <ReflectionCard

        mood={reflection.mood}

        text={reflection.text}

        onClose={

          ()=>setReflection(null)

        }

        />

      }




    </main>

  );

}
