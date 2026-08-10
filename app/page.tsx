
"use client";

import { useEffect, useRef, useState } from "react";

export default function CreateMandala() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);

  const [listening, setListening] = useState(false);
  const [energy, setEnergy] = useState(20);
  const [message, setMessage] = useState(
    "欢迎回来，让你的声音创造属于你的生命曼陀罗。"
  );

  // 女性声音引导
  function speak(text: string) {
    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = "zh-CN";
    speech.rate = 0.85;
    speech.pitch = 1.25;

    const voices = window.speechSynthesis.getVoices();

    const female =
      voices.find(v =>
        v.name.includes("Female")
      ) || voices.find(v =>
        v.lang.includes("zh")
      );

    if (female) {
      speech.voice = female;
    }

    window.speechSynthesis.speak(speech);
  }


  async function startListening() {

    speak(
      "欢迎回来。请慢慢呼吸。当你准备好，让你的声音创造属于你的曼陀罗。"
    );


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

    setMessage(
      "正在感受你的声音频率..."
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

      ctx.translate(
        300,
        300
      );


      const size =
        90 + energy * 1.5;


      for(let i=0;i<36;i++){

        ctx.rotate(
          Math.PI / 18
        );


        ctx.beginPath();

        ctx.arc(
          0,
          0,
          size,
          0,
          Math.PI*2
        );


        ctx.strokeStyle =
        `hsla(
          ${40+i*5},
          70%,
          70%,
          0.35
        )`;


        ctx.lineWidth =
          2;


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
          n=>total+=n
        );


        const value =
          total/data.length;


        setEnergy(
          Math.min(value,100)
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
      color:"#5b4566",
      background:
      "linear-gradient(#fff8f0,#eadcf5)"
    }}
    >


      <h1>
        🌸 Voice Mandala
      </h1>


      <p>
        你的声音，是生命创造的第一道光。
      </p>


      <p
      style={{
        fontSize:"14px",
        opacity:.7
      }}
      >
        🔒 声音只用于实时生成，不会保存或上传。
      </p>



      <canvas
      ref={canvasRef}
      style={{
        borderRadius:"50%",
        margin:"30px auto",
        background:
        "rgba(255,255,255,.25)"
      }}
      />



      <h3>
        {message}
      </h3>



      {!listening &&

      <button
      onClick={startListening}
      style={{
        padding:"16px 40px",
        borderRadius:"40px",
        border:"none",
        background:"#d8b56a",
        color:"white",
        fontSize:"18px"
      }}
      >
        🎤 开始聆听
      </button>

      }


      {listening &&
      <div>

        <h2>
          🌬 请跟随呼吸
        </h2>

        <p>
          吸气 4 秒 · 停留 4 秒 · 呼气 6 秒
        </p>

      </div>
      }


    </main>

  );
}
