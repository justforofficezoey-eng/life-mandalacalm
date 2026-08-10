export function composeGarden(days:any[]){

  if(!days || days.length===0){

    return {

      elements:[]

    };

  }



  const total = days.length;



  const elements = days.map(

    (day:any,index:number)=>{


      const angle =

      (Math.PI * 2 * index) / total;



      const radius =

      170 + index * 8;



      return {


        // 保留用户真实记录

        text:

        day.text || "",


        mood:

        day.mood || "",


        localTime:

        day.localTime || "",


        date:

        day.date || "",



        // 视觉位置

        x:

        260 +

        Math.cos(angle) *

        radius,



        y:

        260 +

        Math.sin(angle) *

        radius,



        // 大小根据文字长度变化

        size:

        70 +

        Math.min(

          (day.text?.length || 0) * 2,

          50

        ),



        opacity:

        0.75 + index * 0.03,



        rotate:

        index * 18,



        // 暂时保留图片字段

        // 后面替换成真正生命地图元素

        image:

        day.image ||

        "/seed.png"


      };

    }

  );



  return {


    createdAt:

    new Date().toISOString(),



    count:

    total,



    elements


  };

}
