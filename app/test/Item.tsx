import { Reorder, useDragControls } from "framer-motion";
import React from "react";

const Item = ({ item }: { item: number }) => {
  const controls = useDragControls();
  return (
    <Reorder.Item
      value={item}
      key={item}
      dragControls={controls}
      dragListener={false}
    >
      <div className="bg-gray-600 text-white p-8 rounded-xl w-[250px]">
        <div
          className="p-5 rounded-full bg-red-700"
          onPointerDown={(e) => controls.start(e)}
        >
          drag
        </div>
        {item}
      </div>
    </Reorder.Item>
  );
};

export default Item;
