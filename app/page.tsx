
"use client";

import { useState } from "react";

export default function Home() {
  const [emotion, setEmotion] = useState("");
  const [diary, setDiary] = useState("");
  const [started, setStarted] = useState(false);

  const colors = [
    { name: "海洋蓝 🌊", value: "#4da6ff" },
    { name: "火焰红 🔥", value: "#ff6666" },
    { name: "森林绿 🌱", value: "#66cc99" },
    { name: "星夜紫 🌙", value: "#9966ff" },
    { name: "黄金光 ☀️", value: "#d4af37" },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle,#3b2a5a,#120b22)",
        color: "white",
        padding: "40px",
        textAlign: "center",
        fontFamily: "serif",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          letterSpacing: "4px",
        }}
      >
        ✨ Life Mandala ✨
      </h1>

      <p style={{ fontSize: "20px" }}>
        每一次呼吸，都是生命创造的艺术。
      </p>

      <section style={{ marginTop: "50px" }}>
        <h2>你的灵魂今天是什么颜色？</h2>

        <div>
          {colors.map((c) => (
            <button
              key={c.name}
              onClick={() => setEmotion(c.value)}
              style={{
                margin: "8px",
                padding: "12px 20px",
                borderRadius: "30px",
                border: "none",
                cursor: "pointer",
              }}
            >
              {c.name}
            </button>
          ))}
        </div>
      </section>

      <section style={{ marginTop: "50px" }}>
        <h2>🌬 呼吸仪式</h2>

        <div
          onClick={() => setStarted(!started)}
          style={{
            width: "180px",
            height: "180px",
            margin: "30px auto",
            borderRadius: "50%",
            background: emotion || "#d4af37",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "22px",
            cursor: "pointer",
            transition: "2s",
            transform: started
              ? "scale(1.3)"
              : "scale(1)",
          }}
        >
          {started ? "呼吸中..." : "开始呼吸"}
        </div>
      </section>


      <section style={{ marginTop: "50px" }}>
        <h2>📖 今日生命日记</h2>

        <textarea
          value={diary}
          onChange={(e)=>setDiary(e.target.value)}
          placeholder="写下今天的感受..."
          style={{
            width:"80%",
            height:"120px",
            borderRadius:"15px",
            padding:"15px",
            fontSize:"16px"
          }}
        />
      </section>


      <button
        style={{
          marginTop:"40px",
          padding:"18px 40px",
          borderRadius:"40px",
          background:"#d4af37",
          border:"none",
          fontSize:"20px",
          cursor:"pointer"
        }}
        onClick={()=>{
          alert(
            "你的生命曼陀罗正在生成 ✨\n\n今日情绪："+emotion+
            "\n\n记录："+diary
          )
        }}
      >
        生成我的生命曼陀罗
      </button>

    </main>
  );
}
