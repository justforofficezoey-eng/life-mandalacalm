"use client";

import { useState } from "react";
import SelfReflection from "./SelfReflection";


export default function MemoryNode({
  item,
  index
}: any) {


  const [open, setOpen] = useState(false);



  return (

    <>

      {/* 记忆节点 */}

      <button

        onClick={() => setOpen(true)}

        style={{

          position:"absolute",

          left:item.x,

          top:item.y,

          width:item.size || 60,

          height:item.size || 60,

          borderRadius:"50%",

          border:"none",

          cursor:"pointer",

          background:

            "rgba(150,170,130,.75)",

          boxShadow:

            "0 12px 35px rgba(60,50,30,.18)",

          animation:

            `memoryPulse ${5 + index}s ease-in-out infinite`

        }}

      >

        <span

          style={{

            color:"#fff",

            fontSize:12

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

              zIndex:100,

              background:

                "rgba(248,244,233,.94)",

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

                maxWidth:480,

                maxHeight:"85vh",

                overflowY:"auto",

                padding:40,

                borderRadius:35,

                background:"#fffaf0",

                boxShadow:

                  "0 30px 80px rgba(60,50,30,.12)",

                fontFamily:

                  "Georgia,'Noto Serif SC',serif",

                color:"#625d50"

              }}

            >



              {/* 时间 */}

              <div

                style={{

                  fontSize:12,

                  letterSpacing:3,

                  color:"#aaa"

                }}

              >

                {item.localTime ||

                 item.date ||

                 ""}

              </div>





              {/* 原始记录 */}

              <div

                style={{

                  marginTop:30,

                  fontSize:18,

                  lineHeight:2,

                }}

              >

                {item.text}

              </div>





              {/* 情绪 */}

              {

                item.mood && (

                  <div

                    style={{

                      marginTop:20,

                      color:"#999",

                      fontSize:13

                    }}

                  >

                    {item.mood}

                  </div>

                )

              }





              {/* 分隔 */}

              <div

                style={{

                  height:1,

                  background:"#eee5d8",

                  margin:"35px 0"

                }}

              />





              {/* 用户回应 */}

              {

                item.reflection ? (


                  <div

                    style={{

                      padding:25,

                      borderRadius:25,

                      background:"#f5f0e5",

                      lineHeight:2

                    }}

                  >

                    <div

                      style={{

                        fontSize:12,

                        color:"#aaa",

                        letterSpacing:2,

                        marginBottom:15

                      }}

                    >

                      后来，我这样回应自己

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





              <button

                onClick={() => setOpen(false)}

                style={{

                  marginTop:30,

                  padding:"10px 30px",

                  borderRadius:30,

                  border:

                    "1px solid rgba(100,90,70,.15)",

                  background:"transparent",

                  color:"#777",

                  cursor:"pointer"

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
