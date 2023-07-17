import React from "react";
import cats from "./cats.json";

export default function Cat() {
  console.log(cats);

  return (
    <div>
      <div>Cats</div>
      <div className="grid grid-cols-2 justify-items-center m-24 gap-36">
        {cats.map((cat) => (
          <div className="flex flex-col border-2 rounded-md shadow-md p-4 text-2xl gap-4 text-slate-600">
            <img src={cat.photo} alt="pet-picture" className="w-full" />
            <div> {cat.name}</div>
            <div>Species: {cat.species}</div>
            <div>Birth Year: {cat.birthYear}</div>
            <div>${cat.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
