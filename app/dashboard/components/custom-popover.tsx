import { Button } from "@/app/components/ui/button";
import { Popover, PopoverContent } from "@/app/components/ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import React from "react";
type Option = {
  ic?: React.ReactNode;
  title: string;
};
type Props = {
  icon?: React.ReactNode;
  options?: Array<Option>;
};

const CustomPopover = (props: Props) => {
  return (
    <Popover>
      <PopoverTrigger>{props.icon}</PopoverTrigger>
      <PopoverContent style={{ background: "#5a5a5a", width: 100 }}>
        {props.options?.map((opt: Option, id) => (
          <div
            key={`${opt.title}-id`}
            style={{
              padding: 0,
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              gap: 4,
              color: "white",
            }}
          >
            {opt.ic} {opt.title}
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
};

export default CustomPopover;
