```tsx
"use client";

import { useState } from "react";


type SelfReflectionProps = {
  day: any;
  observation?: string;
  onSave?: (reflection: {
    text: string;
    createdAt: string;
  }) => void;
};


export default function SelfReflection({
  day,
  observation,
  onSave
}: SelfReflectionProps) {

  const [open, setOpen] = useState(false);

  const [text, setText] = useState("");

  const [saved, setSaved] = useState(false);


  if (!day) {
    return null;
  }


  function saveReflection() {

    const value = text.trim();

    if (!value) return;


    const reflection = {

      text: value,

      createdAt:
        new Date().toISOString()

    };


    setSaved(true);

    onSave?.(reflection);

  }


  function closeReflection() {

    setOpen(false);

  }


  return (

    <section

      style={{

        marginTop:35,

        fontFamily:
          "Georgia,'Noto Serif SC',serif",

        color:"#625d50"

      }}

    >


      {/* 观察 */}

      {

        observation && (

          <div

            style={{

              padding:"22px 24px",

              borderRadius:24,

              background:
                "rgba(255,250,240,.72)",

              lineHeight:2,

              fontSize:15,

              color:"#756f62"

            }}

          >

            {observation}

          </div>

        )

      }



      {/* 进入回应 */}

      {

        !saved && (

          <button

            type="button"

            onClick={() => setOpen(true)}

            style={{

              marginTop:18,

              padding:"11px 22px",

              borderRadius:30,

              border:
                "1px solid rgba(110,100,80,.18)",

              background:"transparent",

              color:"#716b5e",

              cursor:"pointer",

              fontFamily:
                "Georgia,'Noto Serif SC',serif"

            }}

          >

            我想回应这件事

          </button>

        )

      }



      {/* 已保存 */}

      {

        saved && (

          <div

            style={{

              marginTop:22,

              padding:"22px 24px",

              borderRadius:24,

              background:"#f4f0e5",

              lineHeight:2

            }}

          >

            <div

              style={{

                fontSize:11,

                letterSpacing:2,

                color:"#aaa",

                marginBottom:10

              }}

            >

              你后来写给自己的话

            </div>


            <div

              style={{

                fontSize:16,

                color:"#625d50"

              }}

            >

              {text}

            </div>


          </div>

        )

      }



      {/* 回应窗口 */}

      {

        open && !saved && (

          <div

            style={{

              marginTop:22,

              padding:"28px",

              borderRadius:28,

              background:"#fffaf4",

              boxShadow:
                "0 15px 45px rgba(70,60,40,.06)"

            }}

          >

            <div

              style={{

                fontSize:12,

                letterSpacing:2,

                color:"#aaa",

                marginBottom:18

              }}

            >

              给那时候的自己

            </div>


            <div

              style={{

                fontSize:14,

                lineHeight:2,

                color:"#8a8477",

                marginBottom:20

              }}

            >

              不需要解释得很好。

              <br />

              想说什么，就写什么。

            </div>



            <textarea

              value={text}

              onChange={(e) =>
                setText(e.target.value)
              }

              autoFocus

              placeholder="例如：现在回头看，我才发现那时候真的很累。"

              style={{

                width:"100%",

                minHeight:130,

                boxSizing:"border-box",

                padding:"18px",

                borderRadius:20,

                border:
                  "1px solid rgba(110,100,80,.16)",

                outline:"none",

                resize:"vertical",

                background:"#fffdf8",

                color:"#5f594d",

                fontFamily:
                  "Georgia,'Noto Serif SC',serif",

                fontSize:15,

                lineHeight:2

              }}

            />



            <div

              style={{

                display:"flex",

                justifyContent:"center",

                gap:10,

                marginTop:18

              }}

            >

              <button

                type="button"

                onClick={closeReflection}

                style={{

                  padding:"9px 20px",

                  borderRadius:25,

                  border:"none",

                  background:"transparent",

                  color:"#999",

                  cursor:"pointer"

                }}

              >

                先不写

              </button>


              <button

                type="button"

                onClick={saveReflection}

                disabled={!text.trim()}

                style={{

                  padding:"10px 24px",

                  borderRadius:25,

                  border:"none",

                  background:
                    text.trim()
                      ? "#626b59"
                      : "#d8d7cf",

                  color:"#fff",

                  cursor:
                    text.trim()
                      ? "pointer"
                      : "default"

                }}

              >

                留下这句话

              </button>

            </div>

          </div>

        )

      }

    </section>

  );

}
```
