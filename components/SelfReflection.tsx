"use client";

import { useState } from "react";
import { saveReflection } from "../lib/dailyStorage";

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


  function save() {

    const value = text.trim();

    if (!value) return;


    const reflection = {

      text: value,

      createdAt:
        new Date().toISOString()

    };


    if (day?.id) {

      saveReflection(
        day.id,
        reflection
      );

    }


    setSaved(true);

    onSave?.(reflection);

  }


  if (!day) {

    return null;

  }


  return (

    <div

      style={{

        marginTop:20,

        fontFamily:
          "Georgia,'Noto Serif SC',serif",

        color:"#625d50"

      }}

    >

      {observation && (

        <div

          style={{

            padding:"20px 22px",

            borderRadius:22,

            background:
              "rgba(255,250,240,.75)",

            fontSize:14,

            lineHeight:2,

            color:"#777164"

          }}

        >

          {observation}

        </div>

      )}


      {!saved && !open && (

        <button

          type="button"

          onClick={() => setOpen(true)}

          style={{

            marginTop:16,

            padding:"11px 24px",

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

          我想回应这一天

        </button>

      )}


      {open && !saved && (

        <div

          style={{

            marginTop:18,

            padding:"26px",

            borderRadius:28,

            background:"#fffaf4",

            boxShadow:
              "0 15px 45px rgba(70,60,40,.06)"

          }}

        >

          <div

            style={{

              fontSize:12,

              letterSpacing:3,

              color:"#aaa",

              marginBottom:16

            }}

          >

            给那时候的自己

          </div>


          <div

            style={{

              fontSize:14,

              lineHeight:2,

              color:"#898274",

              marginBottom:18

            }}

          >

            不需要解释。

            <br />

            只是告诉那时候的自己，

            现在的你看见了什么。

          </div>


          <textarea

            autoFocus

            value={text}

            onChange={(e) =>
              setText(e.target.value)
            }

            placeholder="写一句也可以。"

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

              onClick={() => {

                setOpen(false);

                setText("");

              }}

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

              disabled={!text.trim()}

              onClick={save}

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

      )}


      {saved && (

        <div

          style={{

            marginTop:20,

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

            后来，我写给自己的话

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

      )}

    </div>

  );

}
