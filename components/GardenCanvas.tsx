"use client";

import MemoryNode from "./MemoryNode";
import TimeReflection from "./TimeReflection";



export default function GardenCanvas({
  garden
}: any) {


  const elements = garden?.elements || [];



  const days =
    garden?.days ||
    elements.map((item: any) => ({

      text: item.text || "",

      mood: item.mood || "",

      date:
        item.date ||
        item.localTime ||
        new Date().toISOString(),

    }));



  return (

    <section

      style={{

        width:"100%",

        margin:"70px auto",

        textAlign:"center",

        color:"#625d50",

      }}

    >



      {/* 标题 */}

      <div

        style={{

          marginBottom:12,

          fontFamily:

            "Georgia,'Noto Serif SC',serif",

          fontSize:20,

          fontWeight:400,

          letterSpacing:3,

        }}

      >

        这些日子，你留下的东西

      </div>



      <div

        style={{

          marginBottom:35,

          fontFamily:

            "Georgia,'Noto Serif SC',serif",

          fontSize:13,

          color:"#aaa",

          lineHeight:1.9,

        }}

      >

        不需要解释。

        <br />

        只是把它们放在这里。

      </div>





      {/* 生命地图 */}

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

            "radial-gradient(circle at center,#fffdf5 0%,#f4f0e3 48%,#e3e8dc 100%)",

          boxShadow:

            "0 35px 100px rgba(70,60,40,.12)",

        }}

      >



        {/* 非常淡的内圈 */}

        <div

          style={{

            position:"absolute",

            width:"62%",

            height:"62%",

            left:"19%",

            top:"19%",

            borderRadius:"50%",

            border:

              "1px solid rgba(120,120,95,.10)",

            pointerEvents:"none",

          }}

        />



        <div

          style={{

            position:"absolute",

            width:"38%",

            height:"38%",

            left:"31%",

            top:"31%",

            borderRadius:"50%",

            border:

              "1px solid rgba(120,120,95,.08)",

            pointerEvents:"none",

          }}

        />





        {/* 时间连接线 */}

        <svg

          width="620"

          height="620"

          viewBox="0 0 620 620"

          style={{

            position:"absolute",

            inset:0,

            width:"100%",

            height:"100%",

            pointerEvents:"none",

            opacity:.28,

          }}

        >

          {

            elements.map(

              (item:any,index:number)=>{

                const next =

                  elements[index + 1];



                if(!next) return null;



                const x1 =

                  (item.x || 0) +

                  (item.size || 60) / 2;



                const y1 =

                  (item.y || 0) +

                  (item.size || 60) / 2;



                const x2 =

                  (next.x || 0) +

                  (next.size || 60) / 2;



                const y2 =

                  (next.y || 0) +

                  (next.size || 60) / 2;



                return (

                  <line

                    key={index}

                    x1={x1}

                    y1={y1}

                    x2={x2}

                    y2={y2}

                    stroke="#9d987f"

                    strokeWidth="1"

                    strokeDasharray="2 7"

                  />

                );

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

            color:"#716b5c",

          }}

        >

          <div

            style={{

              fontSize:28,

              fontWeight:400,

              letterSpacing:6,

            }}

          >

            我在这里

          </div>



          <div

            style={{

              marginTop:14,

              fontSize:12,

              color:"#aaa",

              letterSpacing:1,

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

            (item:any,index:number)=>(

              <MemoryNode

                key={

                  item.id ||

                  `${item.date || ""}-${index}`

                }

                item={item}

                index={index}

              />

            )

          )

        }



      </div>





      {/* 时间回顾 */}

      {

        days.length >= 2 && (

          <div

            style={{

              marginTop:28,

            }}

          >

            <TimeReflection

              days={days}

            />

          </div>

        )

      }





      {/* 底部说明 */}

      <div

        style={{

          marginTop:28,

          fontFamily:

            "Georgia,'Noto Serif SC',serif",

          fontSize:12,

          color:"#aaa",

          lineHeight:2,

        }}

      >

        你不必从这里得到什么。

        <br />

        想回来的时候，再回来看看。

      </div>



    </section>

  );

}
