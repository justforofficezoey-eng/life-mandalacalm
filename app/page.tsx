"use client";

import { useState } from "react";

import {
  saveDay,
  getDays
} from "../lib/dailyStorage";

import {
  createDailyArtwork
} from "../lib/dailyArtworkEngine";

import {
  composeGarden
} from "../lib/gardenComposer";

import GardenCanvas
from "../components/GardenCanvas";


export default function Home(){


  const [text,setText] =
    useState("");


  const [garden,setGarden] =
    useState<any>(null);



  function create(){


    if(!text){

      return;

    }


    const day =
      getDays().length + 1;



    const artwork =
      createDailyArtwork(
        text,
        day
      );



    const days =
      saveDay({

        date:
        new Date()
        .toISOString(),

        text,

        artwork

      });



    if(days.length === 7){

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

      background:"#f4efe5",

      padding:"60px",

      textAlign:"center"

    }}

    >


      <h1>
        Life Mandala
      </h1>


      <p>
        留下今天的一笔
      </p>



      <textarea

      value={text}

      onChange={
        e=>setText(e.target.value)
      }


      placeholder="任何东西都可以..."


      style={{

        width:"350px",

        height:"120px",

        padding:"20px",

        borderRadius:"20px"

      }}


      />



      <br />


      <button

      onClick={create}


      style={{

        marginTop:"20px",

        padding:"15px 40px",

        borderRadius:"40px"

      }}

      >

        保存今天

      </button>



      {
        garden &&

        <>

        <h2>
          {garden.title}
        </h2>


        <GardenCanvas
          garden={garden}
        />

        </>

      }


    </main>

  );

}
