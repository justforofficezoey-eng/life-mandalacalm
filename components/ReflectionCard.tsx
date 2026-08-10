"use client";


function analyzeText(text:string){

  const results=[];


  const words=[

    {
      key:"累",
      value:"最近的记录里出现了疲惫的感觉。"
    },

    {
      key:"等待",
      value:"你似乎正在经历一段需要耐心的时间。"
    },

    {
      key:"改变",
      value:"你正在关注某些变化。"
    },

    {
      key:"谢谢",
      value:"你注意到了生活中的一些珍贵部分。"
    },

    {
      key:"害怕",
      value:"你愿意把不容易表达的部分留下。"
    },

    {
      key:"开心",
      value:"你记录了一些让自己停留的瞬间。"
    }

  ];



  words.forEach(item=>{

    if(text.includes(item.key)){

      results.push(item.value);

    }

  });



  if(results.length===0){

    results.push(

      "这句话被保存下来，成为你此刻经验的一部分。"

    );

  }


  return results;

}





export default function ReflectionCard({

  text

}:any){


  const reflections =

  analyzeText(text);



  return (

    <div

    style={{

      margin:"35px auto",

      maxWidth:420,

      padding:30,

      borderRadius:30,

      background:"#fffaf0",

      color:"#655f52",

      fontFamily:

      "Georgia,'Noto Serif SC',serif",

      lineHeight:2,

      boxShadow:

      "0 20px 60px rgba(60,50,30,.08)"

    }}

    >


      <div

      style={{

        fontSize:12,

        color:"#999",

        letterSpacing:2,

        marginBottom:20

      }}

      >

        一个小小的回望

      </div>



      {

      reflections.map(

        (item:string,index:number)=>(

          <p

          key={index}

          style={{

            margin:"12px 0"

          }}

          >

            {item}

          </p>

        )

      )

      }



    </div>

  );

}
