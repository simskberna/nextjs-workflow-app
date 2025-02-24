"use client";

import { Task, Board, Column as ColumnType } from "@/types/dashboard";
import { List, Grid3X3 } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import dynamic from "next/dynamic";

const Column = dynamic(() => import('@/app/dashboard/components/column'), { ssr: false });

const INITIAL_TASKS: Task[] = [
    { id: '1', status: "IN_PROGRESS", title: "Test 1", tag: "#1234" },
    { id: '2', status: "COMPLETED", title: "Test 2", tag: "#5678" },
    { id: '3', status: "ON_HOLD", title: "Test 3", tag: "#9101" },
    { id: '4', status: "BLOCKED", title: "Test 4", tag: "#1122" },
    { id: '5', status: "IN_PROGRESS", title: "Test 5", tag: "#3344" },
    { id: '6', status: "COMPLETED", title: "Test 6", tag: "#5566" },
    { id: '7', status: "BLOCKED", title: "Test 7", tag: "#7788" },
    { id: '8', status: "ON_HOLD", title: "Test 8", tag: "#9900" },
    { id: '9', status: "IN_PROGRESS", title: "Test 9", tag: "#2233" },
    { id: '10', status: "COMPLETED", title: "Test 10", tag: "#4455" },
    { id: '11', status: "TO_DO", title: "Test 11", tag: "#4456" },
    { id: '12', status: "IN_PROGRESS", title: "Test 12", tag: "#4457" },
    { id: '13', status: "IN_PROGRESS", title: "Test 13", tag: "#4458" },
];

const Dashboard = () => {
    const [mounted, setMounted] = useState(false);
    const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
    const [displayType, setDisplayType] = useState<string>('grid');
    const [boards, setBoards] = useState<Board[]>([
        { title: 'All', isActive: true },
        { title: 'Board 1', isActive: false },
        { title: 'Board 2', isActive: false }
    ]);

    const statusList: ColumnType[] = [
        { id: 'TO_DO', title: 'to do' },
        { id: 'IN_PROGRESS', title: 'in progress' },
        { id: 'COMPLETED', title: 'completed' },
        { id: 'ON_HOLD', title: 'on hold' },
        { id: 'BLOCKED', title: 'blocked' },
    ];

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleActiveTab = (tab: Board) => {
        setBoards(boards.map((t) =>
            t.title === tab.title ? { ...t, isActive: true } : { ...t, isActive: false }
        ));
    };

    const handleDisplayChange = (e: React.MouseEvent<HTMLButtonElement>) => {
        const display: string = (e.target as HTMLButtonElement)?.value;
        setDisplayType(display);
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        if (!over) return;
        const taskId = active.id as string;
        const newTaskStatus = over.id as Task['status'];

        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === taskId ? { ...task, status: newTaskStatus } : task
            )
        );
    };

    if (!mounted) {
        return null;
    }

    return (
        <>
            <div className="mobile-col-desktop-row flex w-full items-end justify-center px-[20px]">
                <div className="mobile-col-desktop-row flex xs:w-full lg:w-[50%] justify-center items-end">
                    <h1 style={{ fontSize: 24 }}>Boards</h1>
                    <div className="boards gap-[15px] m-flex-start bg-red w-full flex justify-end items-end">
                        {boards.map((tab: Board) => (
                            <Button
                                key={tab.title}
                                onClick={() => handleActiveTab(tab)}
                                className={`shadow-none text-tab-foreground p-[10px] bg-transparent hover:bg-[#8d8d8d0d] rounded-[10px]
                    ${tab.isActive && `bg-[#8d8d8d0d] shadow shadow-inner-bottom shadow-[#FF6200]`}`}
                            >
                                {tab.title}
                            </Button>
                        ))}
                    </div>
                </div>
                <div className="m-flex-start w-full gap-4 flex justify-end items-end">
                    <Button
                        value='grid'
                        onClick={handleDisplayChange}
                        className={`${displayType === 'grid' ? 'text-tab-foreground' : 'text-[#828282]'} p-0 !bg-transparent !shadow-none`}
                    >
                        <Grid3X3 /> Grid
                    </Button>
                    <Button
                        value='list'
                        onClick={handleDisplayChange}
                        className={`${displayType === 'list' ? 'text-tab-foreground' : 'text-[#828282]'} p-0 !bg-transparent !shadow-none`}
                    >
                        <List /> List
                    </Button>
                </div>
            </div>

            <div className={cn('max-w-full m-2 mt-10 gap-4 overflow-x-sroll', displayType === 'list' ? 'grid grid-cols-1' : 'grid grid-cols-5')}>
                <DndContext onDragEnd={handleDragEnd}>
                    {statusList.map((column) => (
                        <Column
                            key={column.id}
                            column={column}
                            tasks={tasks.filter((task) => task.status === column.id)}
                            displayType={displayType}
                        />
                    ))}
                </DndContext>
            </div>
        </>
    );
};

export default Dashboard;
