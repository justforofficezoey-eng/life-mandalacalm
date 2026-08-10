"use client";

import { useState } from "react";

import DailyEntry from "../components/DailyEntry";
import GardenCanvas from "../components/GardenCanvas";

import { getDays } from "../lib/dailyStorage";
import { composeGarden } from "../lib/gardenComposer";


export default function Home(){

  const [days,setDays] = useState<any[]>([]);

  const [garden,setGarden] = useState<any>(null);


  function handleSave(newDays:any[]){

    setDays(newDays);


    if(newDays.length >= 1){

      setGarden(

        composeGarden(newDays)

      );

    }

  }



  return (

    <main

    style={{

      minHeight:"100vh",

      background:"#f7f1e7",

      padding:"40px 20px"

    }}

    >



      <DailyEntry

      onSave={handleSave}

      />




      {

      garden &&

      <section>

        <GardenCanvas

        garden={garden}

        />

      </section>

      }



    </main>

  );

}
