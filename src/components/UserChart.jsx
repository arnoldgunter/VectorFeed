import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import useFeed from "../hooks/useFeed";

const UserChart = () => {
  const { userVector } = useFeed();

  const data = Array.isArray(userVector)
    ? userVector.map((value, index) => ({
        subject: `Vector ${index + 1}`,
        A: value,
      }))
    : Object.entries(userVector || {}).map(([subject, A]) => ({
        subject,
        A,
      }));

  const maxValue = Math.max(1, ...data.map((item) => item.A));

  return (
    <ResponsiveContainer width="100%" height={500}>
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="100%"
        data={data}
        margin={{
          top: 10,
          left: 10,
          right: 10,
          bottom: 10,
        }}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis domain={[0, maxValue]} tickCount={5} />
        <Radar
          name="User"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default UserChart;
