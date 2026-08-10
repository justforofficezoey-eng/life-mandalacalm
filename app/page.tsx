"use client";

import { useEffect, useRef, useState } from "react";

export default function CreateMandala() {

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);

  const [listening, setListening] = useState(false);
  const [energy, setEnergy] = useState(20);
  const [text, setText] = useState("");

  const messages = [
    "欢迎回来。",
    "给自己一点安静的时间。",
    "感受你的呼吸。",
    "你的声音正在创造属于你的生命曼陀罗。"
  ];


  // 打字效果
  useEffect(()=>{

    let index = 0;
    let word = "";

    const timer =
      setInterval(()=>{

        if(index < messages.length){

          word += messages[index] + "\n\n";
          setText(word);
          index++;

        }

      },1500);


    return()=>clearInterval(timer);

  },[]);



  async function startListening(){

    const stream =
      await navigator.mediaDevices.getUserMedia({
        audio:true
      });


    const context =
      new AudioContext();


    const source =
      context.createMediaStreamSource(stream);


    const analyser =
      context.createAnalyser();


    analyser.fftSize = 256;


    source.connect(analyser);

    analyserRef.current = analyser;


    setListening(true);

  }



  function stopListening(){

    setListening(false);

    setText(
      "今天先到这里。\n\n你的声音已经留下了一道生命轨迹。"
    );

  }



  useEffect(()=>{

    const canvas =
      canvasRef.current;

    if(!canvas)return;


    const ctx =
      canvas.getContext("2d");

    if(!ctx)return;


    canvas.width=600;
    canvas.height=600;


    let animation:number;


    function draw(){


      ctx.clearRect(
        0,
        0,
        600,
        600
      );


      ctx.save();

      ctx.translate(300,300);


      const radius =
        100 + energy;


      for(let i=0;i<48;i++){

        ctx.rotate(
          Math.PI/24
        );


        ctx.beginPath();


        ctx.arc(
          0,
          0,
          radius,
          0,
          Math.PI*2
        );


        ctx.strokeStyle =
        `rgba(
          210,
          170,
          100,
          0.25
        )`;


        ctx.lineWidth=2;

        ctx.stroke();

      }


      ctx.restore();



      if(analyserRef.current){

        const data =
          new Uint8Array(
            analyserRef.current.frequencyBinCount
          );


        analyserRef.current
        .getByteFrequencyData(data);


        let total=0;

        data.forEach(
          x=>total+=x
        );


        setEnergy(
          Math.min(
            total/data.length,
            100
          )
        );

      }


      animation =
      requestAnimationFrame(draw);

    }


    draw();


    return()=>{
      cancelAnimationFrame(animation);
    }


  },[energy]);




  return (

    <main
    style={{
      minHeight:"100vh",
      padding:"40px",
      textAlign:"center",
      background:
      "linear-gradient(#fff9f0,#eee0f5)",
      color:"#5d4865"
    }}
    >


      <h1>
        ✨ Life Mandala
      </h1>


      <p
      style={{
        whiteSpace:"pre-line",
        fontSize:"20px"
      }}
      >
        {text}
      </p>


      <canvas
      ref={canvasRef}
      style={{
        borderRadius:"50%",
        margin:"30px auto"
      }}
      />


      <p>
        🔒 声音只用于实时创造，不会保存。
      </p>



      {!listening ?

      <button
      onClick={startListening}
      style={{
        padding:"16px 40px",
        borderRadius:"40px",
        background:"#d8b56a",
        color:"white",
        border:"none",
        fontSize:"18px"
      }}
      >
        🎤 开始创造
      </button>

      :

      <button
      onClick={stopListening}
      style={{
        padding:"16px 40px",
        borderRadius:"40px",
        background:"#9b7aa8",
        color:"white",
        border:"none",
        fontSize:"18px"
      }}
      >
        🌙 停止创造
      </button>

      }


    </main>

  );

}
