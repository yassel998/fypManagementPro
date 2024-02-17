import "./widget.scss";
import { widgetsData } from "../../assets/data";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Widget = ({ type }) => {
  const data = widgetsData[type];
  const [count, setCount] = useState(0);

  useEffect(() => {
    const endpointMap = {
      headOfDeptSup: "dashboard/heads-of-department/count",
      SupProf: "dashboard/professors/count",
      SupStudent: "dashboard/students/count",
      SupActivation: "dashboard/pending-activations/count",
    };

    //get the correct endpoint for the widget type
    const endpoint = endpointMap[type];

    const fetchCount = async () => {
      try {
        const response = await axios.get(endpoint);
        setCount(response.data.num);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchCount();
  }, [type]);

  return (
    <div className="widget">
      <div className="left">
        <div className="title">{data.title}</div>
        <div className="counter">{count}</div>
        <div className="link">{data.link}</div>
      </div>
      <div className="right">{data.icon}</div>
    </div>
  );
};

export default Widget;
