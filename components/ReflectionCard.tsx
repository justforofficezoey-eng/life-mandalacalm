"use client";

export default function ReflectionCard({
  mood,
  text,
  onClose
}:any){


  const reflections:any = {


    "开始了":
    "万物都有自己的时节。种子并不急着成为森林，它只是先落在土里。",


    "缓一缓":
    "有时候，停留不是停滞，而是在听见内心更微弱的声音。",


    "傻乐中":
    "那些不需要理由的快乐，是生命偷偷赠予你的光。",


    "还能忍":
    "坚持是一种力量，也是一种提醒：记得拥抱正在坚持的自己。",


    "想一想":
    "思考让人回到内心，在喧闹之外寻找自己的方向。",


    "顺其自然":
    "河流从不催促自己抵达，它只是不断流向远方。",


    "谢谢今天":
    "感恩不是忘记困难，而是在经历之后依然愿意看见美好。"

  };



  return (

    <div

    style={{

      position:"fixed",

      inset:0,

      zIndex:100,

      background:

      "rgba(245,240,228,.92)",


      backdropFilter:"blur(15px)",


      display:"flex",

      justifyContent:"center",

      alignItems:"center",

      padding:30

    }}

    >


      <div

      style={{

        maxWidth:450,

        width:"100%",


        background:"#fffaf0",


        borderRadius:35,

        padding:"45px 35px",

        textAlign:"center",

        boxShadow:

        "0 40px 100px rgba(70,60,40,.18)"

      }}

      >



        <div

        style={{

          fontFamily:

          "serif",

          fontSize:14,

          letterSpacing:5,

          color:"#999"

        }}

        >

          今日一隅

        </div>



        <h2

        style={{

          marginTop:30,

          fontFamily:

          "serif",

          fontWeight:400,

          fontSize:32

        }}

        >

          {mood}

        </h2>



        <p

        style={{

          marginTop:25,

          lineHeight:2.2,

          color:"#666",

          fontSize:16

        }}

        >

          {reflections[mood] ||

          "这一刻，被时间轻轻收藏。"}

        </p>



        {

          text &&


          <div

          style={{

            marginTop:30,

            padding:25,

            borderRadius:25,

            background:"#f3eee1",

            fontFamily:"serif",

            lineHeight:2,

            color:"#555"

          }}

          >

            「{text}」

          </div>

        }



        <button

        onClick={onClose}

        style={{

          marginTop:35,

          padding:"14px 45px",

          borderRadius:40,

          border:"none",

          background:"#596451",

          color:"#fff",

          fontSize:15

        }}

        >

          继续回望

        </button>



      </div>


    </div>

  );

}
