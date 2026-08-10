"use client";

export default function GardenCanvas({
  garden
}: any) {

  const elements = garden?.elements || [];


  return (

    <div

      style={{

        width: 460,

        height: 460,

        borderRadius: 80,

        overflow: "hidden",

        position: "relative",

        background:
          "linear-gradient(145deg,#faf4ea,#e6eadf)",

        boxShadow:
          "0 30px 90px rgba(80,70,50,.15)"

      }}

    >


      {/* 禅意中心光 */}

      <div

        style={{

          position:"absolute",

          width:260,

          height:260,

          left:100,

          top:90,

          background:
            "radial-gradient(circle,rgba(255,245,210,.8),transparent)",

          opacity:.8

        }}

      />


      {/* 植物层 */}

      {

        elements.map(

          (e:any,i:number)=>(

            <img

              key={i}

              src={e.image}

              alt="plant"

              style={{

                position:"absolute",

                width:e.size || 180,

                left:e.x || 140,

                top:e.y || 140,

                opacity:e.opacity || 0.95,


                transform:
                  `rotate(${e.rotate || 0}deg)`,


                filter:
                  "drop-shadow(0 20px 30px rgba(60,50,30,.18))",


                animation:
                  `floatPlant ${7+i}s ease-in-out infinite`

              }}

            />

          )

        )

      }


    </div>

  );

}
