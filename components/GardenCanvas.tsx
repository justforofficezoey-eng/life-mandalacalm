"use client";

import { useState } from "react";


export default function GardenCanvas({
  garden
}: any) {


  const elements = garden?.elements || [];

  const [selected, setSelected] = useState<any>(null);



  function moodColor(mood:string){

    if(mood?.includes("开心"))
      return "#d8b56a";

    if(mood?.includes("疲惫"))
      return "#aebbc8";

    if(mood?.includes("思考"))
      return "#9a94bb";

    if(mood?.includes("说不清"))
      return "#b9a98d";

    return "#98ae86";

  }



  return (

    <section

    style={{

      margin:"70px auto",

      textAlign:"center"

    }}

    >


      <div

      style={{

        marginBottom:30,

        fontFamily:

        "Georgia,'Noto Serif SC',serif",

        color:"#77705e"

      }}

      >

        这些日子，你留下的东西

      </div>



      <div

      style={{

        width:620,

        height:620,

        maxWidth:"90vw",

        maxHeight:"90vw",

        margin:"0 auto",

        position:"relative",

        borderRadius:"50%",

        background:

        "radial-gradient(circle,#fffaf0,#e5eadf)",

        boxShadow:

        "0 35px 90px rgba(70,60,40,.12)"

      }}

      >



        {/* 中心 */}

        <div

        style={{

          position:"absolute",

          inset:0,

          display:"flex",

          justifyContent:"center",

          alignItems:"center",

          flexDirection:"column",

          color:"#756e5d",

          fontFamily:

          "Georgia,'Noto Serif SC',serif"

        }}

        >

          <div

          style={{

            fontSize:26,

            letterSpacing:5

          }}

          >

            我在这里

          </div>


          <div

          style={{

            marginTop:12,

            fontSize:12,

            opacity:.6

          }}

          >

            {new Date().toLocaleString()}

          </div>


        </div>





        {

        elements.map(

          (e:any,i:number)=>(


          <button

          key={i}

          onClick={()=>setSelected(e)}

          style={{

            position:"absolute",

            left:e.x,

            top:e.y,

            width:e.size || 80,

            height:e.size || 80,

            borderRadius:"50%",

            border:"none",

            cursor:"pointer",

            background:moodColor(e.mood),

            opacity:.75,

            boxShadow:

            "0 12px 30px rgba(50,40,30,.15)",

            transition:"transform .4s"

          }}

          >

            <span

            style={{

              color:"#fff",

              fontSize:12

            }}

            >

              {i+1}

            </span>


          </button>


          )

        )

        }




        {

        selected &&


        <div

        onClick={()=>setSelected(null)}

        style={{

          position:"absolute",

          inset:0,

          background:

          "rgba(250,247,238,.96)",

          borderRadius:"50%",

          display:"flex",

          justifyContent:"center",

          alignItems:"center",

          flexDirection:"column",

          padding:50,

          zIndex:5,

          color:"#5d584c",

          fontFamily:

          "Georgia,'Noto Serif SC',serif"

        }}

        >


          <div

          style={{

            fontSize:12,

            letterSpacing:2,

            color:"#999"

          }}

          >

            {selected.localTime || ""}

          </div>



          <p

          style={{

            marginTop:35,

            lineHeight:2.2,

            fontSize:17

          }}

          >

            {selected.text}

          </p>



          <div

          style={{

            marginTop:30,

            fontSize:12,

            color:"#aaa"

          }}

          >

            那天的你，曾这样想过。

          </div>


        </div>


        }


      </div>



    </section>

  );

}
