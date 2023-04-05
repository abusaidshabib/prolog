import React, { useEffect, useState } from 'react';
import { createContext } from "react";

export const ApiDataContext = createContext()

const ApiContext = ({ children }) => {
  const [datas, setData] = useState();

  useEffect(() => {
    fetch("https://prolog-backend-abusaidshabib.vercel.app/mostviews")
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  console.log(datas)

  const value = {
    datas
  }

  return (
    <ApiDataContext.Provider value={value}>
      {children}
    </ApiDataContext.Provider>
  );
};

export default ApiContext;
