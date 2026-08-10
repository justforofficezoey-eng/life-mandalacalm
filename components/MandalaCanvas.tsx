"use client";

import { MandalaDesign } from "../lib/mandalaEngine";


type Props = {
  design: MandalaDesign;
};


export default function MandalaCanvas({
  design
}: Props) {


  const petals = design.petals;



  return (

    <div
      style={{
        width:"360px",
        height:"360px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
      }}
    >


      <svg
        width="360"
        height="360"
        viewBox="0 0 360 360"
      >


        <defs>

          <radialGradient id="seed">

            <stop
              offset="0%"
              stopColor="#E8D8B0"
            />

            <stop
              offset="100%"
              stopColor="#C9A96E"
              stopOpacity="0.2"
            />

          </radialGradient>


        </defs>




        {/* 外层水纹 */}

        <circle

          cx="180"
          cy="180"
          r="145"

          fill="none"

          stroke="#9FB7B0"

          strokeOpacity="0.25"

          strokeWidth="1"

        />


        <circle

          cx="180"
          cy="180"
          r="125"

          fill="none"

          stroke="#C9A96E"

          strokeOpacity="0.2"

          strokeWidth="1"

        />





        {/* 植物生长线 */}

        {
          petals.map(
            (petal,index)=>{


              const angle =
                petal.angle *
                Math.PI /
                180;



              const length =
                45 +
                petal.size;



              const x =
                180 +
                Math.cos(angle)
                *
                length;



              const y =
                180 +
                Math.sin(angle)
                *
                length;




              return (

                <g
                key={index}
                >


                  {/* 花瓣 */}

                  <ellipse

                    cx={x}

                    cy={y}

                    rx="18"

                    ry={
                      35 +
                      petal.size/2
                    }


                    fill={
                      petal.color
                    }


                    opacity="0.45"


                    transform={

                    `
                    rotate(
                    ${petal.angle}
                    ${x}
                    ${y}
                    )
                    `

                    }

                  />



                  {/* 生长线 */}

                  <path

                    d={`
                    M180 180
                    Q
                    ${(180+x)/2}
                    ${(180+y)/2-20}
                    ${x}
                    ${y}
                    `}

                    fill="none"

                    stroke={
                      petal.color
                    }

                    strokeOpacity="0.5"

                  />


                </g>

              );


            }
          )

        }




        {/* 生命种子 */}

        <circle

          cx="180"

          cy="180"

          r={
            design.center.size
          }

          fill="url(#seed)"

        />




        {/* 中心留白 */}

        <circle

          cx="180"

          cy="180"

          r="8"

          fill="#F8F4EC"

        />



      </svg>



    </div>

  );

}
