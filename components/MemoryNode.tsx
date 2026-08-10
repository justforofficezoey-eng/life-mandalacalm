"use client";

import { useState } from "react";

import SelfReflection from "./SelfReflection";
import LiteraryEcho from "./LiteraryEcho";


export default function MemoryNode({
  item,
  index
}: any) {


  const [open, setOpen] = useState(false);



  return (

    <>

      {/* 曼陀罗上的节点 */}

      <button

        onClick={() => setOpen(true)}

        style={{

          position:"absolute",

          left:item.x || 0,

          top:item.y || 0,

          width:item.size || 60,

          height:item.size || 60,

          borderRadius:"50%",

          border:"none",

          cursor:"pointer",

          background:

            item.mood === "开心"

            ?

            "rgba(214,170,90,.8)"

            :

            item.mood === "疲惫"

            ?

            "rgba(130,145,125,.8)"

            :

            "rgba(150,165,135,.8)",


          boxShadow:

            "0 15px 40px rgba(60,50,30,.18)",


          animation:

            `memoryPulse ${5 + index}s ease-in-out infinite`,

        }}

      >

        <span

          style={{

            color:"#fff",

            fontSize:12,

            opacity:.9

          }}

        >

          {index + 1}

        </span>


      </button>





      {

        open && (

          <div

            onClick={() => setOpen(false)}

            style={{

              position:"fixed",

              inset:0,

              zIndex:200,

              background:

                "rgba(245,241,230,.94)",

              display:"flex",

              justifyContent:"center",

              alignItems:"center",

              padding:30

            }}

          >



            <div

              onClick={(e)=>

                e.stopPropagation()

              }

              style={{

                width:"100%",

                maxWidth:500,

                maxHeight:"88vh",

                overflowY:"auto",

                padding:40,

                borderRadius:35,

                background:"#fffaf0",

                boxShadow:

                  "0 35px 100px rgba(50,40,30,.15)",

                fontFamily:

                  "Georgia,'Noto Serif SC',serif",

                color:"#625d50"

              }}

            >



              {/* 日期 */}

              <div

                style={{

                  fontSize:12,

                  letterSpacing:3,

                  color:"#aaa"

                }}

              >

                {

                  item.localTime ||

                  item.date ||

                  "某一天"

                }

              </div>





              {/* 用户原话 */}

              <div

                style={{

                  marginTop:30,

                  fontSize:20,

                  lineHeight:2,

                  color:"#514c42"

                }}

              >

                {item.text}

              </div>





              {/* 情绪 */}

              {

                item.mood && (

                  <div

                    style={{

                      marginTop:18,

                      color:"#999",

                      fontSize:13,

                      letterSpacing:2

                    }}

                  >

                    {item.mood}

                  </div>

                )

              }







              {/* 自我回应 */}

              <div

                style={{

                  marginTop:35

                }}

              >

              {

                item.reflection

                ?

                (

                  <div

                    style={{

                      padding:25,

                      borderRadius:25,

                      background:"#f4efe3",

                      lineHeight:2,

                    }}

                  >

                    <div

                      style={{

                        fontSize:11,

                        letterSpacing:3,

                        color:"#aaa",

                        marginBottom:12

                      }}

                    >

                      后来，我写给自己的话

                    </div>


                    {item.reflection.text}


                  </div>

                )


                :

                (

                  <SelfReflection

                    day={item}

                  />

                )

              }


              </div>







              {/* 文学回响 */}

              <LiteraryEcho

                mood={item.mood}

              />







              {/* 返回 */}

              <button

                type="button"

                onClick={() => setOpen(false)}

                style={{

                  marginTop:35,

                  padding:"12px 35px",

                  borderRadius:30,

                  border:

                    "1px solid rgba(100,90,70,.18)",

                  background:"transparent",

                  color:"#716b5e",

                  cursor:"pointer",

                  fontFamily:

                    "Georgia,'Noto Serif SC',serif"

                }}

              >

                回到我的曼陀罗

              </button>



            </div>


          </div>

        )

      }


    </>

  );

}
