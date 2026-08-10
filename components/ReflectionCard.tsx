"use client";

export default function ReflectionCard({
  mood,
  text,
  onClose
}:any){


  const reflections:any = {


    "开始了":

    "每一次开始，都不是因为准备好了，而是愿意迈出第一步。",


    "缓一缓":

    "停下来不是退后，有时候安静本身就是一种前进。",


    "傻乐中":

    "那些没有理由的快乐，也是在提醒你：生命不只有目标。",


    "还能忍":

    "坚持是一种力量，也是一种提醒：别忘了照顾正在坚持的自己。",


    "想一想":

    "思考不是迷路，它是在寻找更接近自己的方向。",


    "顺其自然":

    "有些事情需要努力，有些事情需要允许它发生。",


    "谢谢今天":

    "感恩不是忽略困难，而是在困难中仍然看见拥有。"

  };



  return (

    <div

      style={{

        position:"fixed",

        inset:0,

        zIndex:100,

        background:

        "rgba(245,240,228,.92)",

        backdropFilter:

        "blur(18px)",


        display:"flex",

        justifyContent:"center",

        alignItems:"center",

        padding:30

      }}

      onClick={onClose}

    >


      <div

      onClick={e=>e.stopPropagation()}

      style={{

        maxWidth:420,

        width:"100%",

        background:

        "rgba(255,252,243,.95)",


        borderRadius:35,

        padding:"45px 35px",

        textAlign:"center",


        boxShadow:

        "0 40px 100px rgba(70,60,40,.18)"

      }}

      >



        <div

        style={{

          color:"#999",

          letterSpacing:4,

          fontSize:12

        }}

        >

          TODAY'S REFLECTION

        </div>




        <h2

        style={{

          marginTop:25,

          fontWeight:400,

          color:"#3f4438"

        }}

        >

          {mood}

        </h2>




        <p

        style={{

          lineHeight:2,

          color:"#666",

          fontSize:16

        }}

        >

          {reflections[mood] ||

          "这一刻，被轻轻留下。"}

        </p>




        {

          text &&

          <div

          style={{

            marginTop:25,

            padding:20,

            borderRadius:20,

            background:"#f3eee1",

            color:"#555",

            lineHeight:1.8

          }}

          >

            「{text}」

          </div>

        }




        <p

        style={{

          marginTop:30,

          color:"#999",

          fontSize:13

        }}

        >

          点击继续，回到你的曼陀罗

        </p>


      </div>


    </div>

  );

}
