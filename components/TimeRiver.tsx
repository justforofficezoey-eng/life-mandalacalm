"use client";

export default function TimeRiver({
  days,
  onClose
}:any){


  return (

    <div

    style={{

      position:"fixed",

      inset:0,

      zIndex:80,

      background:

      "rgba(248,244,233,.96)",

      backdropFilter:"blur(16px)",

      overflowY:"auto",

      padding:"70px 25px"

    }}

    >


      <div

      style={{

        maxWidth:620,

        margin:"0 auto",

        textAlign:"center",

        color:"#554f42"

      }}

      >



        <div

        style={{

          fontFamily:

          "Georgia,'Noto Serif SC',serif",

          letterSpacing:8,

          fontSize:13,

          color:"#918875"

        }}

        >

          THE TRACE OF TIME

        </div>



        <h1

        style={{

          marginTop:35,

          fontFamily:

          "Georgia,'Noto Serif SC',serif",

          fontWeight:400,

          letterSpacing:5,

          fontSize:36

        }}

        >

          光阴经过的地方

        </h1>




        <p

        style={{

          marginTop:35,

          lineHeight:2.3,

          fontFamily:

          "Georgia,'Noto Serif SC',serif",

          color:"#777"

        }}

        >

          这里收藏的，

          <br/>

          不是七天。

          <br/>

          是七个曾经被你认真感受过的瞬间。

        </p>





        <div

        style={{

          marginTop:70

        }}

        >



        {

          days.map(

            (day:any,i:number)=>(


            <article

            key={i}

            style={{

              padding:"40px 25px",

              marginBottom:35,

              borderRadius:30,

              background:

              "rgba(255,252,244,.7)",

              boxShadow:

              "0 20px 50px rgba(80,70,50,.06)"

            }}

            >



              <div

              style={{

                fontFamily:

                "Georgia,'Noto Serif SC',serif",

                fontSize:13,

                letterSpacing:3,

                color:"#978c75"

              }}

              >

                {day.localTime}

              </div>



              <h2

              style={{

                marginTop:22,

                fontFamily:

                "Georgia,'Noto Serif SC',serif",

                fontWeight:400,

                fontSize:25

              }}

              >

                {day.mood}

              </h2>




              {

                day.text &&

                <p

                style={{

                  marginTop:25,

                  lineHeight:2.4,

                  fontFamily:

                  "Georgia,'Noto Serif SC',serif",

                  fontSize:16,

                  color:"#625c50"

                }}

                >

                  「{day.text}」

                </p>

              }





              <div

              style={{

                marginTop:30,

                fontSize:12,

                color:"#aaa",

                letterSpacing:2

              }}

              >

                第 {i+1} 次停留

              </div>



            </article>


            )

          )

        }



        </div>





        <button

        onClick={onClose}

        style={{

          marginTop:30,

          marginBottom:50,

          padding:"15px 55px",

          borderRadius:40,

          border:"none",

          background:"#5c6455",

          color:"#fff",

          fontSize:14,

          letterSpacing:2

        }}

        >

          回到那片生长之中

        </button>



      </div>


    </div>

  );

}
