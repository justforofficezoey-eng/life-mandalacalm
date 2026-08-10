"use client";

import { useState } from "react";

import GardenCanvas from "./GardenCanvas";


export default function SevenDayStory({
  days,
  garden
}:any){


  const [answers,setAnswers] =
    useState<any>({});


  const [active,setActive] =
    useState(0);



  const themes = [

    {
      title:"开始",
      word:"存在",
      question:
      "如果今天只是属于你的时间，你想留下什么？",
      options:[
        "一个新的尝试",
        "一个真实的感受",
        "一个想完成的愿望",
        "只是安静存在"
      ]
    },


    {
      title:"感受",
      word:"接纳",
      question:
      "这个情绪正在提醒你什么？",
      options:[
        "我需要休息",
        "我需要表达",
        "我需要改变",
        "我只是想被看见"
      ]
    },


    {
      title:"连接",
      word:"关系",
      question:
      "今天有没有一个瞬间，让你感觉和世界产生联系？",
      options:[
        "一个人",
        "一个地方",
        "一件小事",
        "自己的内心"
      ]
    },


    {
      title:"力量",
      word:"选择",
      question:
      "你正在坚持的事情，值得继续吗？",
      options:[
        "值得",
        "需要调整",
        "我还不知道",
        "我想放下"
      ]
    },


    {
      title:"变化",
      word:"流动",
      question:
      "如果允许自己改变，你想放下什么？",
      options:[
        "压力",
        "害怕",
        "过去",
        "别人期待"
      ]
    },


    {
      title:"回望",
      word:"理解",
      question:
      "你想对七天前的自己说什么？",
      options:[
        "谢谢你坚持",
        "慢一点也没关系",
        "你已经很好",
        "继续探索"
      ]
    },


    {
      title:"整合",
      word:"成为",
      question:
      "这七天，你看见了自己的哪一部分？",
      options:[
        "力量",
        "温柔",
        "勇气",
        "新的方向"
      ]
    }

  ];




  function choose(value:string){

    setAnswers({

      ...answers,

      [active]:value

    });


  }





  return (

    <div

    style={{

      maxWidth:650,

      margin:"80px auto",

      padding:"20px",

      color:"#3f4438"

    }}

    >



      <h1

      style={{

        textAlign:"center",

        fontWeight:400,

        letterSpacing:5

      }}

      >

        七日生命旅程

      </h1>



      <p

      style={{

        textAlign:"center",

        color:"#777",

        lineHeight:2

      }}

      >

        七天不是改变自己。

        <br/>

        是重新认识自己。

      </p>





      <div

      style={{

        marginTop:50,

        background:"rgba(255,252,243,.8)",

        borderRadius:35,

        padding:35

      }}

      >



      <div

      style={{

        color:"#999",

        letterSpacing:3

      }}

      >

        DAY {active+1}

      </div>




      <h2

      style={{

        fontWeight:400

      }}

      >

        {themes[active].title}

      </h2>




      <p

      style={{

        color:"#66705b"

      }}

      >

        {themes[active].word}

      </p>





      <h3

      style={{

        fontWeight:400,

        lineHeight:1.8

      }}

      >

        {themes[active].question}

      </h3>




      {

        themes[active].options.map(

          (item:string)=>(


          <button

          key={item}

          onClick={()=>choose(item)}

          style={{

            display:"block",

            width:"100%",

            margin:"12px 0",

            padding:15,

            borderRadius:25,


            border:

            answers[active]===item

            ?

            "2px solid #66705b"

            :

            "1px solid #ddd",


            background:

            answers[active]===item

            ?

            "#e4ead8"

            :

            "#fff"

          }}

          >

            {item}

          </button>


          )

        )

      }




      <div

      style={{

        marginTop:35,

        display:"flex",

        justifyContent:"space-between"

      }}

      >


      <button

      disabled={active===0}

      onClick={()=>setActive(active-1)}

      >

        上一天

      </button>




      <button

      disabled={active===6}

      onClick={()=>setActive(active+1)}

      >

        下一天

      </button>


      </div>



      </div>






      {

        active===6 &&


        <div

        style={{

          marginTop:70,

          textAlign:"center"

        }}

        >

          <h2

          style={{

            fontWeight:400

          }}

          >

            你的七日曼陀罗

          </h2>



          <p

          style={{

            lineHeight:2,

            color:"#777"

          }}

          >

            七天留下的，

            <br/>

            不只是记录。

            <br/>

            是你与自己相遇的轨迹。

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
