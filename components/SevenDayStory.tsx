"use client";

import { useState } from "react";

import GardenCanvas from "./GardenCanvas";


export default function SevenDayStory({
  days,
  garden
}:any){


  const [active,setActive]=useState(0);

  const [answers,setAnswers]=useState<any>({});


  const chapters=[

    {
      title:"一 · 种子",
      theme:"开始",
      question:
      "今天，你愿意为自己留下什么？",
      options:[
        "一个新的念头",
        "一个真实的感受",
        "一个未完成的愿望",
        "只是安静存在"
      ],
      quote:
      "每一个开始，都曾经只是一个微小的念头。"
    },


    {
      title:"二 · 风",
      theme:"感受",
      question:
      "此刻的情绪，想告诉你什么？",
      options:[
        "我需要休息",
        "我需要表达",
        "我需要改变",
        "我需要被理解"
      ],
      quote:
      "风不会留下形状，却改变了树的方向。"
    },


    {
      title:"三 · 河流",
      theme:"连接",
      question:
      "今天，什么与你产生了联系？",
      options:[
        "一个人",
        "一个地方",
        "一件小事",
        "自己的内心"
      ],
      quote:
      "没有生命是一座孤岛。"
    },


    {
      title:"四 · 根",
      theme:"力量",
      question:
      "你正在坚持的事情，是否仍然值得？",
      options:[
        "值得继续",
        "需要调整",
        "我还在寻找",
        "我想放下"
      ],
      quote:
      "根向下生长，并不是因为失败，而是在寻找力量。"
    },


    {
      title:"五 · 秋叶",
      theme:"变化",
      question:
      "如果允许自己改变，你想放下什么？",
      options:[
        "压力",
        "恐惧",
        "过去",
        "别人眼中的自己"
      ],
      quote:
      "离开旧的形状，生命才有新的空间。"
    },


    {
      title:"六 · 月光",
      theme:"回望",
      question:
      "你想对七天前的自己说什么？",
      options:[
        "谢谢你坚持",
        "慢一点也可以",
        "你已经很好",
        "继续探索"
      ],
      quote:
      "温柔地回望，也是成长的一部分。"
    },


    {
      title:"七 · 圆",
      theme:"成为",
      question:
      "这一周，你看见了自己的哪一部分？",
      options:[
        "力量",
        "温柔",
        "勇气",
        "新的方向"
      ],
      quote:
      "圆不是结束，而是一种回到自己的方式。"
    }

  ];



  const chapter=chapters[active];



  return (

    <div

    style={{

      maxWidth:680,

      margin:"80px auto",

      padding:20,

      color:"#3d4037"

    }}

    >



      <h1

      style={{

        textAlign:"center",

        fontFamily:"serif",

        fontWeight:400,

        letterSpacing:6,

        fontSize:38

      }}

      >

        七日生命手稿

      </h1>



      <p

      style={{

        textAlign:"center",

        color:"#777",

        lineHeight:2

      }}

      >

        七天，

        <br/>

        不是为了改变自己。

        <br/>

        是为了重新遇见自己。

      </p>




      <div

      style={{

        marginTop:60,

        padding:40,

        borderRadius:40,

        background:"#fffaf0",

        boxShadow:

        "0 30px 80px rgba(70,60,40,.1)"

      }}

      >



        <div

        style={{

          fontFamily:"serif",

          color:"#999",

          letterSpacing:4

        }}

        >

          {chapter.title}

        </div>



        <h2

        style={{

          fontFamily:"serif",

          fontWeight:400,

          marginTop:25

        }}

        >

          {chapter.theme}

        </h2>



        <p

        style={{

          lineHeight:2,

          fontSize:18

        }}

        >

          {chapter.question}

        </p>



        {

          chapter.options.map(

            (o:string)=>(


            <button

            key={o}

            onClick={()=>{

              setAnswers({

                ...answers,

                [active]:o

              })

            }}

            style={{

              display:"block",

              width:"100%",

              margin:"14px 0",

              padding:16,

              borderRadius:30,

              border:

              answers[active]===o

              ?

              "2px solid #596451"

              :

              "1px solid #ddd",

              background:

              answers[active]===o

              ?

              "#e5eadc"

              :

              "#fff"

            }}

            >

              {o}

            </button>


            )

          )

        }



        <p

        style={{

          marginTop:35,

          fontFamily:"serif",

          color:"#777",

          lineHeight:2

        }}

        >

          {chapter.quote}

        </p>




        <div

        style={{

          marginTop:40,

          display:"flex",

          justifyContent:"space-between"

        }}

        >

          <button

          disabled={active===0}

          onClick={()=>setActive(active-1)}

          >

            回望

          </button>


          <button

          disabled={active===6}

          onClick={()=>setActive(active+1)}

          >

            继续前行

          </button>


        </div>


      </div>





      {

        active===6 &&


        <div

        style={{

          marginTop:80,

          textAlign:"center"

        }}

        >

          <h2

          style={{

            fontFamily:"serif",

            fontWeight:400

          }}

          >

            七日之印

          </h2>



          <p

          style={{

            color:"#777",

            lineHeight:2

          }}

          >

            这不是一幅生成的图像。

            <br/>

            是七个时刻，

            <br/>

            共同留下的回声。

          </p>



          {

            garden &&

            <GardenCanvas

            garden={garden}

            />

          }



        </div>

      }



    </div>

  );

}
