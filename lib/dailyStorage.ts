export type DailyFragment = {

  date:string;

  mood:string;

  text:string;

  plant:string;

  reflection?:string;

};



const KEY =
"life-mandala-days";





export function saveDay(
  day:DailyFragment
){


  if(
    typeof window === "undefined"
  ){

    return [];

  }



  const old =

    JSON.parse(

      localStorage.getItem(KEY)

      ||

      "[]"

    );



  const updated = [

    ...old,

    day

  ].slice(-7);



  localStorage.setItem(

    KEY,

    JSON.stringify(updated)

  );



  return updated;


}






export function saveReflection(
  index:number,
  answer:string
){


  if(
    typeof window === "undefined"
  ){

    return;

  }



  const days =

    JSON.parse(

      localStorage.getItem(KEY)

      ||

      "[]"

    );



  if(days[index]){

    days[index].reflection = answer;

  }



  localStorage.setItem(

    KEY,

    JSON.stringify(days)

  );


}







export function getDays(){


  if(
    typeof window === "undefined"
  ){

    return [];

  }



  return JSON.parse(

    localStorage.getItem(KEY)

    ||

    "[]"

  );


}
