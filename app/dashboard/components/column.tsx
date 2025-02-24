import React from 'react';
import { Column as ColumnType, Task } from "@/types/dashboard";
import CustomCard from "@/app/dashboard/components/custom-card";
import { Edit, Trash2 } from "lucide-react";
import { useDroppable} from "@dnd-kit/core";

interface ColumnProps {
    column:ColumnType,
    tasks: Task[],
    displayType: string,
}

const Column = ({ column, tasks, displayType }: ColumnProps) => {

    const { setNodeRef, isOver } = useDroppable({
        id:column.id,
    })

    const columnStyles = isOver
        ? {
            border: "2px solid hsl(var(--accent))",
            backgroundColor: "hsl(var(--sidebar-accent))",
            transition: "background-color 0.3s ease, border 0.3s ease",
            padding: "5px",
            borderRadius: "15px",
        }
        : {};

    return (
        <div ref={setNodeRef} className='flex flex-col gap-2' style={{...columnStyles}}>
            <label>{column?.title}</label>
            {tasks.map((task: Task) =>
                (
                    <CustomCard
                        className={`${displayType === 'list' && 'mb-4'}`}
                        key={task.tag}
                        {...task}
                        dotOptions={[
                            {
                                ic: <Edit width={16} height={16} color="#2d1968"/>,
                                title: "Edit",
                            },
                            {
                                ic: <Trash2 width={20} height={20} color="#af3e3e"/>,
                                title: "Delete",
                            },
                        ]}
                    />
                )
            )}
        </div>
    );
};

export default Column
