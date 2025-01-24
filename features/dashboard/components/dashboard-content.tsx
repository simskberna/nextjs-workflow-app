"use client";
import { useState } from "react";
import Board from "../pages/board/page";
import CustomCard from "./custom-card";
import { Task } from "@/types/dashboard";
import { Edit, Trash2, List, Grid3X3, Grid } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "flex-end",
          justifyContent: "space-between",
          paddingLeft: 20,
          paddingRight: 20,
        }}
        className="mobile-col-desktop-row"
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
          className="mobile-col-desktop-row"
        >
          <h1 style={{ fontSize: 24 }}>Boards</h1>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              gap: 10,
            }}
            className="tabs m-flex-start"
          >
            <Button
              style={{
                padding: 0,
                background: "transparent",
                boxShadow: "none",
                color: "white",
              }}
            >
              Button 1
            </Button>
            <Button
              style={{
                padding: 0,
                background: "transparent",
                boxShadow: "none",
                color: "white",
              }}
            >
              Button 2
            </Button>
            <Button
              style={{
                padding: 0,
                background: "transparent",
                boxShadow: "none",
                color: "white",
              }}
            >
              Button 3
            </Button>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 20,
          }}
          className="m-flex-start"
        >
          <Button
            style={{
              padding: 0,
              color: "white",
              background: "transparent",
              boxShadow: "unset",
            }}
          >
            <List /> List
          </Button>
          <Button
            style={{
              padding: 0,
              color: "white",
              background: "transparent",
              boxShadow: "unset",
            }}
          >
            <Grid3X3 /> Grid
          </Button>
        </div>
      </div>
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
    </>
  );
};
export default Dashboard;
