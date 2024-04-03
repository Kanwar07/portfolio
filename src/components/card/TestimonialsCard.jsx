import React from "react";

function TestimonialsCard({ _id, name, image, position, review }) {
  return (
    <div key={_id} className="bg-[#ddd0c8] h-[450px] text-black rounded-xl">
      <div className="h-56 bg-[#323232;] flex justify-center items-center rounded-xl">
        <img src={image.url} alt={name} className="h-44 w-44 rounded-full" />
      </div>

      <div className="flex flex-col items-center justify-center gap-4 p-4">
        <p className="text-xl font-semibold">{position}</p>
        <p className="text-center">{review}</p>
      </div>
    </div>
  );
}

export default TestimonialsCard;
