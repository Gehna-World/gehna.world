import { Data } from "../hero_animated_slider";
import React from "react";
import SliderCard from "./SliderCard";

type Props = {
  data: Data[];
};

function Slides({ data }: Props) {
  return (
    <div className=" flex w-full gap-6">
      {data.map((data) => {
        return <SliderCard key={data.img} data={data} />;
      })}
    </div>
  );
}

export default Slides;
