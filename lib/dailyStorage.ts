export type DailyFragment = {

  date:string;

  mood:string;

  text:string;

  plant:string;

};


const KEY = "life-mandala-days";



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
