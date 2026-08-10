"use client";


const echoes:any = {

  疲惫:[

    {
      quote:"行到水穷处，坐看云起时。",
      author:"王维",
      note:"有时候，不必急着寻找出口。停下来，也是一种抵达。"
    },

    {
      quote:"山重水复疑无路，柳暗花明又一村。",
      author:"陆游",
      note:"有些变化，正在你还看不见的地方发生。"
    }

  ],


  孤独:[

    {
      quote:"独坐幽篁里，弹琴复长啸。",
      author:"王维",
      note:"一个人的时候，也可以拥有完整的世界。"
    },

    {
      quote:"海内存知己，天涯若比邻。",
      author:"王勃",
      note:"真正的理解，不会因为距离消失。"
    }

  ],


  迷茫:[

    {
      quote:"莫听穿林打叶声，何妨吟啸且徐行。",
      author:"苏轼",
      note:"不确定的路上，也可以慢慢走。"
    }

  ],


  开心:[

    {
      quote:"偷得浮生半日闲。",
      author:"李涉",
      note:"这些小小的快乐，也值得被认真保存。"
    }

  ],


  平静:[

    {
      quote:"采菊东篱下，悠然见南山。",
      author:"陶渊明",
      note:"真正的安宁，不一定来自远方。"
    }

  ],


  默认:[

    {
      quote:"且将新火试新茶，诗酒趁年华。",
      author:"苏轼",
      note:"眼前这一刻，本身就值得被留下。"
    }

  ]

};



function getEcho(mood:string){

  const list =
    echoes[mood]
    ||
    echoes.默认;


  return list[
    Math.floor(
      Math.random()*list.length
    )
  ];

}




export default function LiteraryEcho({

  mood

}:any){


  const echo =
    getEcho(mood);



  return (

    <div

      style={{

        marginTop:30,

        paddingTop:25,

        borderTop:
        "1px solid rgba(120,110,90,.12)",

        fontFamily:
        "Georgia,'Noto Serif SC',serif",

        color:"#716b5e"

      }}

    >

      <div

        style={{

          fontSize:12,

          letterSpacing:3,

          color:"#aaa",

          marginBottom:18

        }}

      >

        一句话，与此刻相遇

      </div>



      <div

        style={{

          fontSize:19,

          lineHeight:2,

          fontStyle:"italic"

        }}

      >

        “{echo.quote}”

      </div>



      <div

        style={{

          marginTop:8,

          fontSize:13,

          color:"#999"

        }}

      >

        —— {echo.author}

      </div>



      <div

        style={{

          marginTop:18,

          fontSize:14,

          lineHeight:2,

          color:"#777"

        }}

      >

        {echo.note}

      </div>


    </div>

  );

}
