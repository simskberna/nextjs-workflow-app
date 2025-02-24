import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Expand, EllipsisVerticalIcon } from "lucide-react";
import React from "react";
import CustomPopover from "./custom-popover";
import {cn} from "@/lib/utils";
import {useDraggable, useDroppable} from "@dnd-kit/core";

type Props = {
  status: string;
  title: string;
  tag: string;
  id: string;
  className?: string;
  dotOptions?: Array<{
    ic?: React.ReactNode;
    title: string;
  }>;
};

const CustomCard = (props: Props) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: props?.id
    })
    const statusFormatted = props.status?.replaceAll('_','')
    const style = transform ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
        border:'1px solid white',
        zIndex:50
    } : undefined;

  return (
    <Card
        ref={setNodeRef}
        {...listeners}
        {...attributes}
        style={style}
        className={cn('bg-custom_card border border-custom_card-border drop-shadow-lg rounded-3xl', props?.className)}
    >
      <CardHeader className='w-full flex flex-row items-center justify-between gap-1.5'
      >
        <div className="w-full">
          <CardTitle
              className={`max-w-[100px] rounded-[20px] text-[12px] font-normal text-center`}
              style={{
                  backgroundColor: `hsl(var(--card-status-${statusFormatted}-background))`,
                  color: `hsl(var(--card-status-${statusFormatted}-foreground))`,
              }}
          >
            {props.status}
          </CardTitle>
        </div>
        <CardContent
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
            padding: 0,
            margin: 0,
          }}
        >
          <div
            style={{
              padding: 0,
              display: "flex",
              gap: 20,
              color: "white",
              background: "transparent",
            }}
          >
            <Expand width={17} height={17} className="text-foreground" />
            <CustomPopover
              options={props.dotOptions}
              icon={<EllipsisVerticalIcon width={17} height={17} className="text-foreground"/>}
            />
          </div>
        </CardContent>
      </CardHeader>
      <CardContent className="bg-custom_card_inner"
        style={{
          paddingTop: 5,
          margin: 10,
          borderRadius: 24,
        }}
      >
        <div className="inner-top flex flex-col items-start justify-start">
          <span>{props.title}</span>
          <span style={{ opacity: 0.5 }}>{props.tag}</span>
        </div>
      </CardContent>
    </Card>
  );
};
export default CustomCard;
