
"use client";

import { MandalaDesign } from "../lib/mandalaEngine";


type Props = {
  design: MandalaDesign;
};


export default function MandalaCanvas({
  design
}: Props) {


  return (

    <div
      style={{
        width:"320px",
        height:"320px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
      }}
    >

      <svg
        width="300"
        height="300"
        viewBox="0 0 300 300"
      >


        {/* 中心 */}

        <circle
          cx="150"
          cy="150"
          r={design.center.size}
          fill={design.center.color}
          opacity="0.8"
        />



        {/* 七日花瓣 */}

        {
        design.petals.map(
          (petal,index)=>{


            const x =
            150 +
            Math.cos(
              petal.angle *
              Math.PI /
              180
            )
            *
            90;



            const y =
            150 +
            Math.sin(
              petal.angle *
              Math.PI /
              180
            )
            *
            90;



            return (

              <g
              key={index}
              >


                <circle

                cx={x}

                cy={y}

                r={
                  petal.size / 3
                }

                fill={
                  petal.color
                }

                opacity="0.75"

                />



                <circle

                cx={x}

                cy={y}

                r={
                  petal.size / 6
                }

                fill="#ffffff"

                opacity="0.35"

                />


              </g>

            );


          })

        }



        {/* 外环 */}

        <circle

        cx="150"

        cy="150"

        r="125"

        fill="none"

        stroke="#C9A96E"

        strokeOpacity="0.3"

        />


      </svg>


    </div>

  );
}
