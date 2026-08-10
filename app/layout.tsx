import type { Metadata } from "next";
import { Ma_Shan_Zheng, Noto_Serif_SC } from "next/font/google";
import "./globals.css";


const brush = Ma_Shan_Zheng({

  weight:"400",

  subsets:["latin"],

  variable:"--font-brush"

});


const serif = Noto_Serif_SC({

  weight:["300","400","500"],

  subsets:["latin"],

  variable:"--font-serif"

});


export const metadata: Metadata = {

  title:"生命花园",

  description:
  "记录时间，回应自己。"

};



export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {


  return (

    <html lang="zh-CN">

      <body

        className={`${brush.variable} ${serif.variable}`}

      >

        {children}

      </body>

    </html>

  );

}
