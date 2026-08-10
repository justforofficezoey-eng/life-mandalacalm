"use client";

import { useState } from "react";


export default function TimeReflection({
  days
}:any){


  const [open,setOpen]=useState(false);



  if(!days || days.length<2){

    return null;

  }



  return (

    <>

    <button

    onClick={()=>setOpen(true)}

    style={{

      marginTop:30,

      padding:"12px 35px",

      borderRadius:30,

      border:"1px solid #ddd",

      background:"#fffaf0",

      color:"#666",

      cursor:"pointer"

    }}

    >

      看看这段时间

    </button>




    {

    open &&


    <div

    onClick={()=>setOpen(false)}

    style={{

      position:"fixed",

      inset:0,

      background:

      "rgba(248,244,233,.94)",

      zIndex:200,

      display:"flex",

      justifyContent:"center",

      alignItems:"center",

      padding:30

    }}

    >


      <div

      onClick={e=>e.stopPropagation()}

      style={{

        maxWidth:500,

        width:"100%",

        background:"#fffaf0",

        padding:40,

        borderRadius:35,

        fontFamily:

        "Georgia,'Noto Serif SC',serif"

      }}

      >



        <h2

        style={{

          fontWeight:400,

          textAlign:"center"

        }}

        >

          这段时间

        </h2>



        <p

        style={{

          lineHeight:2,

          color:"#777",

          textAlign:"center"

        }}

        >

          不是总结。

          <br/>

          只是回头看看，

          <br/>

          你曾留下什么。

        </p>





        <div

        style={{

          marginTop:35

        }}

        >

        {

        days.map(

          (d:any,i:number)=>(


          <div

          key={i}

          style={{

            padding:"15px 0",

            borderBottom:

            "1px solid #eee"

          }}

          >

            <small

            style={{

              color:"#aaa"

            }}

            >

              {new Date(

                d.date

              ).toLocaleDateString()}

            </small>



            <div

            style={{

              marginTop:8

            }}

            >

              {d.text}

            </div>


          </div>


          )

        )

        }

        </div>


      </div>


    </div>


    }


    </>

  );

}
