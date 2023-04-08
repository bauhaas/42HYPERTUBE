import React, { useEffect, useState } from 'react';

export const Movie = ({ id, description, rating, title, coverImage }) => {
  return (
    <div
      key={id}
      className="flex gap-4 rounded-lg bg-slate-300 p-4 hover:bg-slate-200"
    >
      <img
        className="rounded-md md:mx-0 md:mt-0 md:mr-4"
        src={coverImage}
        alt={`Cover for ${title}`}
      />
      <div className="flex flex-col">
        <h3 className="mb-2 text-lg font-bold">{title}</h3>
        <p className="text-md mb-2 leading-relaxed">{description}</p>
        <p className="text-sm font-semibold">Note: {rating}</p>
      </div>
    </div>
  );
};
