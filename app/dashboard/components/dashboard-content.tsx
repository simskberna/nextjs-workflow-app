"use client";
import CustomCard from "./custom-card";
import { Task,Tab } from "@/types/dashboard";
import { Edit, Trash2, List, Grid3X3 } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { useState } from "react";

const Dashboard = () => {

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
  const [tabs,setTabs] = useState<Tab[]>([
      {title:'All',isActive:true},
      {title:'In Progress',isActive:false},
      {title:'Done',isActive:false}
  ])
    const [displayType,setDisplayType] = useState<string>('grid')
    const handleActiveTab = (tab: Tab) => {
        setTabs(tabs.map((t) =>
            t.title === tab.title
                ? { ...t, isActive: true }
                : { ...t, isActive: false }
        ));
    };
  const handleDisplayChange = (e: React.MouseEvent<HTMLButtonElement>) => {
      const display: string = (e.target as HTMLButtonElement)?.value;
      setDisplayType(display);
  }

    return (
    <>
      <div
        className="mobile-col-desktop-row flex w-full items-end justify-center px-[20px]"
      >
        <div
          className="mobile-col-desktop-row flex xs:w-full lg:w-[50%] justify-center items-end"
        >
          <h1 style={{ fontSize: 24 }}>Boards</h1>
          <div
            className="tabs gap-[15px] m-flex-start bg-red w-full flex justify-end items-end"
          >
              {tabs.map((tab:Tab) => (
                  <Button
                      key={tab.title}
                      onClick={() => handleActiveTab(tab)}
                      className={`shadow-none text-tab-foreground p-[10px] bg-transparent hover:bg-[#8d8d8d0d] rounded-[10px]
                          ${tab.isActive && `bg-[#8d8d8d0d] shadow shadow-inner-bottom shadow-[#FF6200]`}`}>
                            {tab.title}
                  </Button>
              ))}

          </div>
        </div>
        <div
          className="m-flex-start w-full gap-4 flex justify-end items-end"
        >
            <Button
                  value='grid'
                  onClick={handleDisplayChange}
                  className={`${displayType === 'grid' ? 'text-tab-foreground' : 'text-[#828282]'} p-0 !bg-transparent !shadow-none`}>
                <Grid3X3 /> Grid
            </Button>
            <Button
                value='list'
                onClick={handleDisplayChange}
                className={`${displayType === 'list' ? 'text-tab-foreground' : 'text-[#828282]'} p-0 !bg-transparent !shadow-none`}>
                <List /> List
            </Button>
        </div>
      </div>
      <div
        style={{
          display: displayType === 'grid' ? "grid" : "block",
          gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))",
          gap: "16px",
          padding: "16px",
        }}
      >
        {tasks.map((task: Task) => (
          <CustomCard
              className={`${displayType === 'list' && 'mb-4'}`}
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
