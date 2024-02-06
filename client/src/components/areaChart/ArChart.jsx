import "./areaChart.scss";
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip } from "recharts";

const ArChart = () => {
  const data = [
    { month: "septembre", demandes: 395 },
    { month: "octobre", demandes: 452 },
    { month: "novembre", demandes: 503 },
    { month: "décembre", demandes: 389 },
    { month: "janvier", demandes: 256 },
    { month: "février", demandes: 214 },
    { month: "mars", demandes: 182 },
    { month: "avril", demandes: 327 },
    { month: "mai", demandes: 294 },
    { month: "juin", demandes: 162 },
    { month: "juillet", demandes: 63 },
  ];

  return (
    <div className="areaChart">
      <div className="title">
        Évolution des inscriptions d'étudiants par mois
      </div>
      <AreaChart
        width={1000}
        height={290}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="demandes" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="month" />
        <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="demandes"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#demandes)"
        />
      </AreaChart>
    </div>
  );
};

export default ArChart;
