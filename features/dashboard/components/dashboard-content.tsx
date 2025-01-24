"use client";
import { useState } from "react";
import Board from "../pages/board/page";
type Props = {};

const Dashboard = (props: Props) => {
  const [tabs, setTabs] = useState([
    { name: "Board", component: <Board />, isActive: true },
    { name: "List", component: <Board />, isActive: false },
    { name: "Calender", component: <Board />, isActive: false },
  ]);
  return <div>Dashboard</div>;
};
export default Dashboard;
