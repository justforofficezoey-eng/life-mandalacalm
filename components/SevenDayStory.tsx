"use client";

import { useState } from "react";

import GardenCanvas from "./GardenCanvas";
import MandalaSignature from "./MandalaSignature";


export default function SevenDayStory({
  days,
  garden
}:any){


  const [active,setActive] = useState(0);

  const [answers,setAnswers] = useState<any>({});

  const [showSignature,setShowSignature] = useState(false);



  const chapters = [

    {
      title:"一 · 种子",
      theme:"开始",
      question:"今天，你愿意留下什么？",
      options:[
        "一个新的念头",
        "一个真实感受",
        "一个未完成的愿望",
        "一段安静时间"
      ],
      quote:"每一种生命，都从一个微小的开始出现。"
    },


    {
      title:"二 · 风",
      theme:"感受",
      question:"今天的情绪，想告诉你什么？",
      options:[
        "需要休息",
        "需要表达",
        "需要改变",
        "需要被理解"
      ],
      quote:"风没有形状，却改变了树的方向。"
    },


    {
      title:"三 · 河流",
      theme:"连接",
      question:"今天，你与什么相遇？",
      options:[
        "一个人",
        "一个地方",
        "一件小事",
        "自己的内心"
      ],
      quote:"每一次相遇，都留下看不见的痕迹。"
    },


    {
      title:"四 · 根",
      theme:"力量",
      question:"你正在守护什么？",
      options:[
        "一个梦想",
        "一种关系",
        "自己的平静",
        "未来的方向"
      ],
      quote:"根扎向黑暗，是为了靠近更深的光。"
    },


    {
      title:"五 · 秋叶",
      theme:"变化",
      question:"你愿意放下什么？",
      options:[
        "压力",
        "恐惧",
        "过去",
        "别人的期待"
      ],
      quote:"离开旧的形状，生命才有新的空间。"
    },


    {
      title:"六 · 月光",
      theme:"回望",
      question:"你想对过去的自己说什么？",
      options:[
        "谢谢坚持",
        "慢一点",
        "你已经很好",
        "继续探索"
      ],
      quote:"温柔地回望，也是向前。"
    },


    {
      title:"七 · 圆",
      theme:"此刻",
      question:"这一段时间，让你看见了什么？",
      options:[
        "力量",
        "温柔",
        "勇气",
        "新的方向"
      ],
      quote:"圆不是结束，而是回到自己的方式。"
    }

  ];



  const chapter = chapters[active];



  return (

    <main

    style={{

      maxWidth:700,

      margin:"60px auto",

      padding:25,

      color:"#444"

    }}

    >


      <h1

      style={{

        textAlign:"center",

        fontFamily:"Georgia,serif",

        fontWeight:400,

        letterSpacing:6

      }}

      >

        七日生命手稿

      </h1>



      <p

      style={{

        textAlign:"center",

        lineHeight:2,

        color:"#777",

        fontFamily:"serif"

      }}

      >

        七天不是为了改变自己。

        <br/>

        是为了重新遇见经过自己的时间。

      </p>





      {

      !showSignature &&


      <section

      style={{

        marginTop:50,

        padding:40,

        borderRadius:35,

        background:"#fffaf0"

      }}

      >



        <div

        style={{

          fontFamily:"serif",

          color:"#999",

          letterSpacing:3

        }}

        >

          {chapter.title}

        </div>



        <h2

        style={{

          fontFamily:"serif",

          fontWeight:400

        }}

        >

          {chapter.theme}

        </h2>



        <p

        style={{

          fontSize:18,

          lineHeight:2

        }}

        >

          {chapter.question}

        </p>



        {

        chapter.options.map(

          (item:string)=>(


          <button

          key={item}

          onClick={()=>{

            setAnswers({

              ...answers,

              [active]:item

            })

          }}


          style={{

            width:"100%",

            margin:"10px 0",

            padding:16,

            borderRadius:30,

            background:

            answers[active]===item

            ?

            "#e4eadc"

            :

            "#fff",

            border:"1px solid #ddd"

          }}

          >

            {item}

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

          display:"flex",

          justifyContent:"space-between",

          marginTop:40

        }}

        >


          <button

          disabled={active===0}

          onClick={()=>setActive(active-1)}

          >

            回望

          </button>




          {

          active < 6 ?


          <button

          onClick={()=>setActive(active+1)}

          >

            继续前行

          </button>


          :


          <button

          onClick={()=>setShowSignature(true)}

          >

            打开时间留下的形状

          </button>


          }



        </div>


      </section>

      }





      {

      showSignature &&


      <section

      style={{

        marginTop:60,

        textAlign:"center"

      }}

      >



        <h2

        style={{

          fontFamily:"serif",

          fontWeight:400

        }}

        >

          时间留下的形状

        </h2>



        <p

        style={{

          lineHeight:2,

          color:"#777"

        }}

        >

          七个瞬间，

          <br/>

          慢慢形成了一种属于你的形状。

        </p>



        {

        garden &&

        <GardenCanvas

        garden={garden}

        />

        }





        <MandalaSignature

        days={days}

        onSave={(work:any)=>{


          localStorage.setItem(

            "mandala-work",

            JSON.stringify(work)

          );


        }}

        />


      </section>


      }


    </main>

  );

}
