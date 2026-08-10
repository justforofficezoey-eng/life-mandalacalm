const KEY = "life-days";


export function getDays(){

  if(typeof window === "undefined"){

    return [];

  }


  const data =
  localStorage.getItem(KEY);


  return data
  ?
  JSON.parse(data)
  :
  [];

}




export function saveDay(day:any){


  const now = new Date();



  const record = {


    ...day,


    // 真实时间

    timestamp:
    now.getTime(),


    // 完整时间

    date:
    now.toISOString(),



    // 用户当地时间

    localTime:

    now.toLocaleTimeString(

      undefined,

      {

        hour:"2-digit",

        minute:"2-digit"

      }

    ),



    // 用户所在世界时区

    timezone:

    Intl.DateTimeFormat()

    .resolvedOptions()

    .timeZone


  };




  const days = [

    ...getDays(),

    record

  ];




  localStorage.setItem(

    KEY,

    JSON.stringify(days)

  );



  return days;


}
