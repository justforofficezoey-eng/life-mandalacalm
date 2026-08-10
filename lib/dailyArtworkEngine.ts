export type ArtworkElement = {
  type: string;
  color: string;
  position: {
    x:number;
    y:number;
  };
  size:number;
  detail:number;
};


export function createDailyArtwork(
  text:string,
  day:number
):ArtworkElement {


  const seed =
    text.length * 17 +
    day * 31;


  const plants = [

    "lotus",
    "orchid",
    "fern",
    "cherry_blossom",
    "wild_flower",
    "vine",
    "moss"

  ];


  const colors = [

    "#D8C3A5",
    "#A8BFA3",
    "#D9A6A0",
    "#B7C9D6",
    "#C8B08A",
    "#8FA58B"

  ];


  return {

    type:
      plants[
        seed %
        plants.length
      ],


    color:
      colors[
        seed %
        colors.length
      ],


    position:{

      x:
      20 +
      ((seed * 13) % 60),


      y:
      20 +
      ((seed * 29) % 60)

    },


    size:
    30 +
    (seed % 40),



    detail:
    seed % 100

  };

}
