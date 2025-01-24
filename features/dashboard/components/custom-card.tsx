import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    <Card
      style={{
        background: "#1C1C1C",
        borderRadius: 24,
        border: "1px solid #ffffff3d",
      }}
    >
      <CardHeader
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 5,
        }}
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
            <Expand width={17} height={17} />
            <CustomPopover
              options={props.dotOptions}
              icon={<EllipsisVerticalIcon width={17} height={17} />}
            />
          </div>
        </CardContent>
      </CardHeader>
      <CardContent
        style={{
          paddingTop: 5,
          margin: 10,
          borderRadius: 24,
          background: "#242424",
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
