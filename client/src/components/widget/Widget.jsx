import "./widget.scss";
import { widgetsData } from "../../assets/data";

const Widget = ({ type }) => {
  const data = widgetsData[type];
  return (
    <div className="widget">
      <div className="left">
        <div className="title">{data.title}</div>
        <div className="counter">{data.counter}</div>
        <div className="link">{data.link}</div>
      </div>
      <div className="right">{data.icon}</div>
    </div>
  );
};

export default Widget;
