import clsx from "clsx";
import React from "react";

type data = {
  title: String;
  value: number;
  height: number;
};
const dataArray: data[] = [
  { title: "Item One", value: 23, height: 150 },
  { title: "Item Two", value: 45, height: 200 },
  { title: "Item Three", value: 12, height: 120 },
  { title: "Item Four", value: 67, height: 180 },
  { title: "Item Five", value: 34, height: 160 },
  { title: "Item Six", value: 78, height: 220 },
  // { title: "Item Seven", value: 56, height: 190 },
  // { title: "Item Eight", value: 89, height: 240 },
];
const BentoGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-2 m-10">
      {dataArray.map(({ title, value }, i) => {
        return (
          <div
            key={i}
            className={clsx(
              "bg-accent p-4 text-white rounded-xl flex flex-col items-center justify-center",
              i == 1 ? "col-span-2" : "",
              i == 4 || i == 2 ? "row-span-2" : ""
            )}
          >
            <h2>{title}</h2>
            <p>{value}</p>
          </div>
        );
      })}
    </div>
  );
};
export default BentoGrid