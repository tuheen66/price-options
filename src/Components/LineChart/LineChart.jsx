/* eslint-disable react/jsx-no-undef */
import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";

const LineChart = () => {
  const students = [
    { id: 1, name: "Alice", mathMark: 90, physicsMark: 85, chemistryMark: 95 },
    { id: 2, name: "Bob", mathMark: 80, physicsMark: 65, chemistryMark: 75 },
    { id: 3, name: "Carol", mathMark: 50, physicsMark: 65, chemistryMark: 55 },
    { id: 4, name: "Dave", mathMark: 70, physicsMark: 85, chemistryMark: 85 },
    { id: 5, name: "Eve", mathMark: 60, physicsMark: 55, chemistryMark: 55 },
    { id: 6, name: "Frank", mathMark: 70, physicsMark: 75, chemistryMark: 65 },
    { id: 7, name: "Grace", mathMark: 50, physicsMark: 65, chemistryMark: 75 },
    { id: 8, name: "Henry", mathMark: 60, physicsMark: 55, chemistryMark: 55 },
    {
      id: 9,
      name: "Isabella",
      mathMark: 70,
      physicsMark: 35,
      chemistryMark: 85,
    },
    { id: 10, name: "Jack", mathMark: 50, physicsMark: 55, chemistryMark: 65 },
  ];

  return (
    <div className='mx-12'>
      <LChart width={1000} height={400} data={students}>
        <XAxis dataKey='name' />;
        <YAxis />
        <Line dataKey='mathMark' stroke='#e67e22'></Line>;
        <Line dataKey='physicsMark' stroke='#8e44ad'></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
