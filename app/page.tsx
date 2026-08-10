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
      )?.[2] || "seed";



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


    setMood("");

    setText("");

  }



  const currentDays =
    getDays();



  function icon(plant:string){

    const icons:any={

      seed:"🌱",

      leaf:"🌿",

      flower:"🌸",

      branch:"🔥",

      root:"🌙",

      vine:"🌊",

      light:"☀️"

    };


    return icons[plant] || "🌱";

  }



  return (

    <main

      style={{

        minHeight:"100vh",

        background:
        "linear-gradient(180deg,#faf5ea,#e5eadc)",

        padding:"60px 20px",

        textAlign:"center"

      }}

    >


      <h1

      style={{

        fontSize:42,

        fontWeight:400,

        letterSpacing:5

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

            "2px solid #66705b"

            :

            "1px solid #ddd",


            background:

            mood===m[1]

            ?

            "#e4ead8"

            :

            "rgba(255,255,255,.6)",


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

        marginTop:30,

        width:"90%",

        maxWidth:450,

        height:120,

        padding:20,

        borderRadius:20,

        border:"1px solid #ddd",

        fontSize:16

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

        fontSize:16

      }}

      >

        收下今天

      </button>





      <section

      style={{

        marginTop:80

      }}

      >



      {

        currentDays.length < 7

        ?


        <>

        <h2

        style={{

          fontWeight:400

        }}

        >

          曼陀罗正在形成中

        </h2>



        <p

        style={{

          color:"#888"

        }}

        >

          已留下 {currentDays.length} / 7 个生命碎片

        </p>




        <div

        style={{

          width:260,

          height:260,

          margin:"40px auto",

          borderRadius:"50%",

          position:"relative",

          background:

          "radial-gradient(circle,#fff4d0,#dce5d5)",

          boxShadow:

          "0 30px 70px rgba(70,60,40,.15)"

        }}

        >



        {

          currentDays.map(

            (day:any,index:number)=>(


              <div

              key={index}

              style={{

                position:"absolute",

                left:"50%",

                top:"50%",

                fontSize:32,


                transform:

                `rotate(${index*51}deg) translateY(-90px) rotate(-${index*51}deg)`

              }}

              >

                {icon(day.plant)}

              </div>


            )

          )

        }




        <div

        style={{

          position:"absolute",

          left:"50%",

          top:"50%",

          transform:"translate(-50%,-50%)",

          color:"#777"

        }}

        >

          {currentDays.length}/7

        </div>



        </div>


        </>


        :


        <>

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


        </>


      }



      </section>


    </main>

  );

}
