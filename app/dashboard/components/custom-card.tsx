import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Expand, EllipsisVerticalIcon } from "lucide-react";
import React from "react";
import CustomPopover from "./custom-popover";

type Props = {
  status: string;
  title: string;
  tag: string;
  dotOptions?: Array<{
    ic?: React.ReactNode;
    title: string;
  }>;
};

const CustomCard = (props: Props) => {
  return (
    <Card className='bg-custom_card border border-custom_card-border drop-shadow-lg rounded-3xl'
    >
      <CardHeader className='w-full flex flex-row items-center justify-between gap-1.5'
      >
        <div className="w-full">
          <CardTitle
            style={{
              maxWidth: "80px",
              backgroundColor: "rgb(0, 208,255,10%)",
              color: "rgb(0, 208,255,100%)",
              borderRadius: 20,
              fontSize: 12,
              fontWeight: "400",
              textAlign: "center",
              padding: 5,
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
      <CardContent  className="bg-custom_card_inner"
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
