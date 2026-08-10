"use client";

export default function LifeTrajectory({
  days
}:any){


  if(!days || days.length===0){

    return null;

  }



  const count:any = {};



  days.forEach((day:any)=>{


    const key =
      day.mood || "未知";


    count[key] =
      (count[key] || 0) + 1;


  });




  const mainMood =

    Object.keys(count)

    .sort(

      (a,b)=>

      count[b]-count[a]

    )[0];





  const icons:any={

    "开始了":"🌱",

    "缓一缓":"🌿",

    "傻乐中":"🌸",

    "还能忍":"🔥",

    "想一想":"🌙",

    "顺其自然":"🌊",

    "谢谢今天":"☀️"

  };





  const journey =

    days

    .map(

      (d:any)=>

      icons[d.mood] || "✨"

    )

    .join("  →  ");






  return (

    <div

    style={{

      marginTop:70,

      padding:"40px 30px",

      borderRadius:35,

      background:

      "rgba(255,252,243,.75)",


      boxShadow:

      "0 30px 70px rgba(70,60,40,.1)",


      textAlign:"center"

    }}

    >



      <div

      style={{

        fontSize:12,

        letterSpacing:4,

        color:"#999"

      }}

      >

        YOUR SEVEN DAY TRACE

      </div>




      <h2

      style={{

        marginTop:25,

        fontWeight:400

      }}

      >

        七日轨迹

      </h2>




      <p

      style={{

        lineHeight:2,

        color:"#666"

      }}

      >

        这七天里，

        <br/>

        你反复回到了：

      </p>




      <div

      style={{

        margin:"25px auto",

        fontSize:28

      }}

      >

        {icons[mainMood]}

      </div>



      <h3

      style={{

        fontWeight:400,

        color:"#66705b"

      }}

      >

        {mainMood}

      </h3>




      <p

      style={{

        color:"#777",

        lineHeight:2

      }}

      >

        这可能是你最近

        <br/>

        正在关注的一种生命状态。

      </p>





      <div

      style={{

        marginTop:35,

        padding:20,

        borderRadius:20,

        background:"#f3eee1",

        color:"#555",

        lineHeight:2

      }}

      >

        {journey}

      </div>





      <p

      style={{

        marginTop:35,

        color:"#999",

        lineHeight:2

      }}

      >

        曼陀罗记录的，

        <br/>

        不是结果。

        <br/>

        而是你经过自己的方式。

      </p>



    </div>

  );

}
