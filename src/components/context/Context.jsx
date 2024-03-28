import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const data = createContext();

function Contextdata({ children }) {
  const [aboutdata, setaboutdata] = useState({});
  const [burgermenu, setburgermenu] = useState(false);

  useEffect(() => {
    const fetchdata = () => {
      axios
        .get(
          "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
        )
        .then(function (response) {
          setaboutdata(response.data.user.about);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    fetchdata();
  }, []);

  return (
    <data.Provider value={{ aboutdata, burgermenu, setburgermenu }}>
      {children}
    </data.Provider>
  );
}

export default Contextdata;
