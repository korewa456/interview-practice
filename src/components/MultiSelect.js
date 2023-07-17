import React, { useEffect, useState } from "react";
import states from "./states.json";

export default function MultiSelect() {
  const [isOpen, setIsOpen] = useState(true);
  const [number, setNumber] = useState(0);
  const [selected, setSelected] = useState(
    states.map(() => {
      return false;
    })
  );

  const handleChange = (idx) => {
    const temp = [...selected];
    temp[idx] = !temp[idx];
    setSelected(temp);
  };

  const handleSelectAll = (e) => {
    setSelected(
      states.map(() => {
        return e.target.checked;
      })
    );
  };

  useEffect(() => {
    const ClickOutSide = () => {
      setIsOpen(false);
    };

    document.addEventListener("click", ClickOutSide);
  });

  useEffect(() => {
    let temp = 0;
    selected.map((item) => {
      if (item) {
        temp += 1;
      }
    });

    setNumber(temp);
  }, [selected]);

  return (
    <div>
      <div className="flex flex-col h-screen items-center mt-6 space-y-3">
        <h1 className="text-4xl">Multi Select</h1>
        <div
          className="border-2 border-slate-200 rounded-md cursor-pointer px-4 py-2 hover:bg-slate-100"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
        >
          {number > 0 ? `${number} Selcted` : "--Select States--"}
        </div>
        {isOpen ? (
          <div
            className="grid grid-cols-3 border-2 shadow-lg rounded-md gap-5 p-5"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div>
              <input type="checkbox" onChange={handleSelectAll} />
              <label>Select All</label>
            </div>

            {states.map((state, idx) => (
              <div key={`${idx}-select`} className="">
                <input
                  key={`${state.abbreviation}-checkbox`}
                  type="checkbox"
                  checked={selected[idx]}
                  onChange={() => {
                    handleChange(idx);
                  }}
                />
                <label key={state.abbreviation}>{state.name}</label>
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}

        <div></div>
      </div>
    </div>
  );
}
