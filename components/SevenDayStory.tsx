"use client";

import GardenCanvas from "./GardenCanvas";


export default function SevenDayStory({
  days,
  garden
}:any){


  const icons:any={

    seed:"🌱",

    leaf:"🌿",

    flower:"🌸",

    branch:"🔥",

    root:"🌙",

    vine:"🌊",

    light:"☀️"

  };



  const words:any={


    "开始了":

    "一个念头被留下，新的旅程从这里开始。",


    "缓一缓":

    "你给自己留出了空间，也听见了自己的需要。",


    "傻乐中":

    "一些简单的快乐，也值得被认真保存。",


    "还能忍":

    "有些力量，不喧哗，只是在默默支撑。",


    "想一想":

    "停下来观察，本身就是一种成长。",


    "顺其自然":

    "有些答案，不需要马上出现。",


    "谢谢今天":

    "在经历之后，依然能够看见拥有。"

  };




  return (

    <div

    style={{

      maxWidth:600,

      margin:"80px auto",

      padding:"0 20px",

      color:"#3f4438"

    }}

    >



      <h1

      style={{

        fontWeight:400,

        letterSpacing:4,

        textAlign:"center"

      }}

      >

        七日生命叙事

      </h1>



      <p

      style={{

        textAlign:"center",

        color:"#777",

        lineHeight:2,

        marginBottom:60

      }}

      >

        这七天，不是一次记录。

        <br/>

        而是七个与你相遇的瞬间。

      </p>





      {

        days.map(

          (day:any,index:number)=>(


          <div

          key={index}

          style={{

            marginBottom:45,

            padding:30,

            borderRadius:30,

            background:

            "rgba(255,252,243,.75)",


            boxShadow:

            "0 20px 50px rgba(70,60,40,.08)"

          }}

          >



            <div

            style={{

              color:"#999",

              fontSize:13,

              letterSpacing:3

            }}

            >

              DAY {index+1}

            </div>



            <h2

            style={{

              fontWeight:400,

              marginTop:15

            }}

            >

              {icons[day.plant]}

              {" "}

              {day.mood}

            </h2>



            <p

            style={{

              lineHeight:2,

              color:"#666"

            }}

            >

              {day.text ||

              "这一刻，没有语言，也被轻轻留下。"}

            </p>




            <div

            style={{

              marginTop:20,

              color:"#7b806e",

              lineHeight:1.8

            }}

            >

              {words[day.mood]}

            </div>



          </div>


          )

        )

      }




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

          color:"#888",

          lineHeight:2

        }}

        >

          这些不是七张图片。

          <br/>

          它们是你经过的七个瞬间。

        </p>




        {

          garden &&

          <GardenCanvas

          garden={garden}

          />

        }


      </div>



    </div>

  );

}
