import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const data = createContext();

function Contextdata({ children }) {
  const [aboutdata, setaboutdata] = useState({});
  const [skilldata, setskilldata] = useState({});
  const [projects, setprojects] = useState({});
  const [services, setservices] = useState({});
  const [testimonials, settestimonials] = useState({});
  const [video, setvideo] = useState({});
  const [socialhandles, setsocialhandles] = useState({});
  const [burgermenu, setburgermenu] = useState(false);

  useEffect(() => {
    const fetchdata = () => {
      axios
        .get(
          "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
        )
        .then(function (response) {
          setaboutdata(response.data.user.about);
          setskilldata(response.data.user.skills);
          setprojects(response.data.user.projects);
          setservices(response.data.user.services);
          setvideo(response.data.user.youtube);
          settestimonials(response.data.user.testimonials);
          setsocialhandles(response.data.user.social_handles);
          console.log(response.data.user.youtube);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    fetchdata();
  }, []);

  return (
    <data.Provider
      value={{
        aboutdata,
        skilldata,
        projects,
        services,
        video,
        testimonials,
        socialhandles,
        burgermenu,
        setburgermenu,
      }}
    >
      {children}
    </data.Provider>
  );
}

export default Contextdata;
