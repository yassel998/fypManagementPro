import "./lineChart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const LineChartBox = ({ data, xDataKey, yDataKey, titel }) => {
  return (
    <div className="lineChart">
      <div className="title">{titel}</div>
      <ResponsiveContainer width="100%" height={285}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="students" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="rgb(142, 85, 64)"
                stopOpacity={0.8}
              />
              <stop offset="95%" stopColor="rgb(142, 85, 64)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey={xDataKey} stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey={yDataKey}
            stroke="rgb(142, 85, 64)"
            fillOpacity={1}
            fill="url(#students)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartBox;
