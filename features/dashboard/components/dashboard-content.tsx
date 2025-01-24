"use client";
import { useState } from "react";
import Board from "../pages/board/page";
import CustomCard from "./custom-card";
import { Task } from "@/types/dashboard";
import { Edit, Trash2 } from "lucide-react";

const Dashboard = () => {
  const [tabs, setTabs] = useState([
    { name: "Board", component: <Board />, isActive: true },
    { name: "List", component: <Board />, isActive: false },
    { name: "Calender", component: <Board />, isActive: false },
  ]);
  const tasks: Task[] = [
    { status: "in progress", title: "Test 1", tag: "#1234" },
    { status: "completed", title: "Test 2", tag: "#5678" },
    { status: "on hold", title: "Test 3", tag: "#9101" },
    { status: "pending", title: "Test 4", tag: "#1122" },
    { status: "in progress", title: "Test 5", tag: "#3344" },
    { status: "completed", title: "Test 6", tag: "#5566" },
    { status: "pending", title: "Test 7", tag: "#7788" },
    { status: "on hold", title: "Test 8", tag: "#9900" },
    { status: "in progress", title: "Test 9", tag: "#2233" },
    { status: "completed", title: "Test 10", tag: "#4455" },
  ];
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))",
        gap: "16px",
        padding: "16px",
      }}
    >
      {tasks.map((task: Task) => (
        <CustomCard
          key={task.tag}
          {...task}
          dotOptions={[
            {
              ic: <Edit width={16} height={16} color="#2d1968" />,
              title: "Edit",
            },
            {
              ic: <Trash2 width={20} height={20} color="#af3e3e" />,
              title: "Delete",
            },
          ]}
        />
      ))}
    </div>
  );
};
export default Dashboard;
