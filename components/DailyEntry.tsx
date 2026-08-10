"use client";

import { useState } from "react";

import { saveDay } from "../lib/dailyStorage";

import ReflectionCard from "./ReflectionCard";


export default function DailyEntry({
  onSave
}: any) {


  const [text, setText] = useState("");

  const [mood, setMood] = useState("平静");

  const [savedText, setSavedText] = useState("");

  const [saved, setSaved] = useState(false);



  const moods = [

    "平静",

    "开心",

    "疲惫",

    "思考",

    "说不清"

  ];



  function submit() {

    const value = text.trim();


    if (!value) return;



    const days = saveDay({

      text: value,

      mood,

      date: new Date().toISOString()

    });



    setSavedText(value);

    setSaved(true);

    setText("");


    onSave?.(days);

  }



  function writeAgain() {

    setSaved(false);

    setSavedText("");

  }



  return (

    <section

      style={{

        maxWidth:620,

        margin:"50px auto",

        padding:"20px",

        color:"#625d50",

      }}

    >



      {/* 标题 */}

      <div

        style={{

          textAlign:"center",

          fontFamily:

            "Georgia,'Noto Serif SC',serif",

        }}

      >

        <h1

          style={{

            margin:0,

            fontSize:30,

            fontWeight:400,

            letterSpacing:6,

          }}

        >

          此刻

        </h1>



        <p

          style={{

            marginTop:24,

            color:"#888",

            fontSize:14,

            lineHeight:2.1,

          }}

        >

          写下现在的你。

          <br />

          不必完整，也不必解释。

        </p>

      </div>





      {/* 输入区域 */}

      {

        !saved && (

          <div

            style={{

              marginTop:40,

            }}

          >



            <textarea

              value={text}

              onChange={(e) =>

                setText(e.target.value)

              }

              placeholder="想到什么，就写什么。"

              aria-label="记录此刻"

              style={{

                display:"block",

                width:"100%",

                minHeight:190,

                boxSizing:"border-box",

                padding:"24px",

                borderRadius:28,

                border:

                  "1px solid rgba(120,110,90,.18)",

                outline:"none",

                resize:"vertical",

                background:"#fffdf7",

                color:"#575246",

                fontFamily:

                  "Georgia,'Noto Serif SC',serif",

                fontSize:17,

                lineHeight:2,

                boxShadow:

                  "0 15px 45px rgba(70,60,40,.05)",

              }}

            />





            {/* 情绪 */}

            <div

              style={{

                marginTop:22,

                display:"flex",

                justifyContent:"center",

                flexWrap:"wrap",

                gap:8,

              }}

            >

              {

                moods.map((item) => (

                  <button

                    key={item}

                    type="button"

                    onClick={() =>

                      setMood(item)

                    }

                    style={{

                      padding:

                        "9px 17px",

                      borderRadius:30,

                      border:

                        "1px solid rgba(120,110,90,.18)",

                      background:

                        mood === item

                          ? "#e7eadc"

                          : "#fffdf7",

                      color:"#686255",

                      cursor:"pointer",

                      fontSize:13,

                      transition:

                        "all .25s ease",

                    }}

                  >

                    {item}

                  </button>

                ))

              }

            </div>





            {/* 保存 */}

            <div

              style={{

                textAlign:"center",

                marginTop:32,

              }}

            >

              <button

                type="button"

                onClick={submit}

                disabled={!text.trim()}

                style={{

                  padding:

                    "14px 52px",

                  borderRadius:40,

                  border:"none",

                  background:

                    text.trim()

                      ? "#626b59"

                      : "#d6d5cd",

                  color:"#fff",

                  cursor:

                    text.trim()

                      ? "pointer"

                      : "default",

                  letterSpacing:2,

                  transition:

                    "all .3s ease",

                }}

              >

                保存

              </button>

            </div>



          </div>

        )

      }





      {/* 保存后的心理镜映 */}

      {

        saved && savedText && (

          <div

            style={{

              marginTop:45,

              textAlign:"center",

              animation:

                "reflectionAppear .7s ease",

            }}

          >



            <div

              style={{

                fontFamily:

                  "Georgia,'Noto Serif SC',serif",

                fontSize:14,

                color:"#999",

                letterSpacing:2,

                marginBottom:18,

              }}

            >

              已经留下了

            </div>



            <div

              style={{

                maxWidth:480,

                margin:"0 auto",

                padding:"25px 28px",

                borderRadius:25,

                background:

                  "rgba(255,253,247,.8)",

                color:"#5d584d",

                fontFamily:

                  "Georgia,'Noto Serif SC',serif",

                fontSize:17,

                lineHeight:2.1,

              }}

            >

              「{savedText}」

            </div>



            <ReflectionCard

              text={savedText}

            />



            <button

              type="button"

              onClick={writeAgain}

              style={{

                marginTop:8,

                padding:

                  "10px 28px",

                borderRadius:30,

                border:

                  "1px solid rgba(120,110,90,.18)",

                background:"transparent",

                color:"#777164",

                cursor:"pointer",

              }}

            >

              再写一些

            </button>



          </div>

        )

      }



    </section>

  );

}
