// 已迁移到 dailyArtworkEngine.ts
// 保留此文件避免旧引用报错

export type MandalaDesign = {
  center:{
    size:number;
    color:string;
  };

  petals:any[];
};


export function createMandala(){

  return {

    center:{
      size:20,
      color:"#D8C7B0"
    },

    petals:[]

  };

}
