"use client";

import MemoryNode from "./MemoryNode";


export default function GardenCanvas({
  garden
}: any) {


  const elements = garden?.elements || [];



  return (

    <section

    style={{

      margin:"70px auto",

      textAlign:"center"

    }}

    >


      <div

      style={{

        marginBottom:35,

        fontFamily:

        "Georgia,'Noto Serif SC',serif",

        color:"#756e5d",

        letterSpacing:3,

        fontSize:18

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

        overflow:"hidden",

        background:

        "radial-gradient(circle,#fffaf0,#e4eadc)",

        boxShadow:

        "0 40px 100px rgba(70,60,40,.12)"

      }}

      >





        {/* 时间连接线 */}

        <svg

        width="620"

        height="620"

        style={{

          position:"absolute",

          inset:0,

          opacity:.25

        }}

        >

        {

        elements.map(

          (e:any,i:number)=>{


            const next =

            elements[i+1];



            if(!next)

            return null;



            return (

              <line

              key={i}

              x1={e.x + e.size/2}

              y1={e.y + e.size/2}

              x2={next.x + next.size/2}

              y2={next.y + next.size/2}

              stroke="#9c987f"

              strokeWidth="1"

              />

            )

          }

        )

        }

        </svg>







        {/* 中心 */}

        <div

        style={{

          position:"absolute",

          inset:0,

          display:"flex",

          justifyContent:"center",

          alignItems:"center",

          flexDirection:"column",

          pointerEvents:"none",

          fontFamily:

          "Georgia,'Noto Serif SC',serif",

          color:"#716b5c"

        }}

        >



          <div

          style={{

            fontSize:30,

            letterSpacing:6

          }}

          >

            我在这里

          </div>



          <div

          style={{

            marginTop:15,

            fontSize:12,

            color:"#aaa"

          }}

          >

            {elements.length}

            {" "}

            个留下的瞬间

          </div>


        </div>







        {/* 记忆节点 */}

        {

        elements.map(

          (e:any,i:number)=>(


            <MemoryNode

            key={i}

            item={e}

            index={i}

            />


          )

        )

        }



      </div>





    </section>

  );

}
