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
    useState<number | null>(null);



  const themes = [

    {
      title:"开始",
      idea:"存在",
      question:"如果今天只是属于你的时间，你想留下什么？",
      options:[
        "一个新的尝试",
        "一个小小愿望",
        "一个想保护的东西"
      ]
    },


    {
      title:"感受",
      idea:"接纳",
      question:"这个感受想告诉你什么？",
      options:[
        "我需要休息",
        "我需要被理解",
        "我需要改变"
      ]
    },


    {
      title:"连接",
      idea:"关系",
      question:"今天什么让你感觉和世界产生联系？",
      options:[
        "一个人",
        "一件小事",
        "一个瞬间"
      ]
    },


    {
      title:"力量",
      idea:"选择",
      question:"你坚持的东西，值得继续吗？",
      options:[
        "值得",
        "需要调整",
        "我要重新选择"
      ]
    },


    {
      title:"变化",
      idea:"流动",
      question:"如果允许自己改变，你想放下什么？",
      options:[
        "压力",
        "过去",
        "别人的期待"
      ]
    },


    {
      title:"理解",
      idea:"回望",
      question:"你想对这几天的自己说什么？",
      options:[
        "谢谢你坚持",
        "慢一点也可以",
        "继续相信自己"
      ]
    },


    {
      title:"成为",
      idea:"整合",
      question:"这七天，你看见了自己的哪一部分？",
      options:[
        "勇气",
        "柔软",
        "新的方向"
      ]
    }

  ];




  return (

    <div

    style={{

      maxWidth:650,

      margin:"80px auto",

      padding:20,

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

        不是寻找答案。

        <br/>

        而是在七天里，更了解自己。

      </p>





      {

        days.map(

          (day:any,index:number)=>{


            const theme =
            themes[index];



            return (

            <div

            key={index}

            style={{

              marginTop:40,

              padding:30,

              borderRadius:30,

              background:

              "rgba(255,252,243,.8)",

              boxShadow:

              "0 20px 60px rgba(70,60,40,.08)"

            }}

            >



              <small

              style={{

                color:"#999",

                letterSpacing:3

              }}

              >

                DAY {index+1}

              </small>




              <h2

              style={{

                fontWeight:400

              }}

              >

                {day.mood}

              </h2>



              <h3

              style={{

                color:"#78806c",

                fontWeight:400

              }}

              >

                {theme.idea}

              </h3>




              <p

              style={{

                lineHeight:2

              }}

              >

                {theme.question}

              </p>





              <div>

              {

                theme.options.map(

                  (option:string)=>(


                    <button

                    key={option}

                    onClick={()=>{

                      setAnswers({

                        ...answers,

                        [index]:option

                      });

                      setActive(index);

                    }}


                    style={{

                      margin:6,

                      padding:"10px 18px",

                      borderRadius:25,

                      border:"1px solid #ddd",

                      background:

                      answers[index]===option

                      ?

                      "#dfe8d5"

                      :

                      "white"

                    }}

                    >

                      {option}

                    </button>


                  )

                )

              }

              </div>



            </div>

            )

          }

        )

      }





      {

        days.length===7 &&


        <div

        style={{

          marginTop:80,

          textAlign:"center"

        }}

        >


          <h2

          style={{

            fontWeight:400

          }}

          >

            你的七日生命曼陀罗

          </h2>



          <p

          style={{

            lineHeight:2,

            color:"#777"

          }}

          >

            七个瞬间，

            <br/>

            七次与你自己的相遇。

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
