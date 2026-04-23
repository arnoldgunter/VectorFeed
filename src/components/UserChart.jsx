import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from "recharts";

const UserChart = ({ userVector }) => {
  const data = Object.entries(userVector || {})
    .map(([tag, value]) => ({
      tag,
      value: Math.max(0, value),
    }))
    .sort((a, b) => b.value - a.value); // stärkste zuerst

  return (
    <div style={{ width: "90%", height: "80%" }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{ top: 20, right: 20, left: 0, bottom: 60 }}
        >
          <CartesianGrid stroke="#2a2a2a" vertical={false} />

          <XAxis
            dataKey="tag"
            angle={-90}
            textAnchor="end"
            interval={0}
            tick={{ fill: "#aaa", fontSize: 12}}
          />

          <YAxis tick={{ fill: "#666", fontSize: 12 }} />

          <Tooltip />

          <Bar dataKey="value" fill="#4f46e5" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserChart;
