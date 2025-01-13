import React from "react";
import { Fetch } from "./utils/fetch";


export function App() {
  const data = Fetch()

  return (
    <div>
        {
          data.map((item) => {
            return <img src={item.url} alt="" />
          })
        }
    </div>
  );
}