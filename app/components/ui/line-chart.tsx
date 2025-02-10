import { ResponsiveLine } from '@nivo/line'
import { useState, useEffect } from 'react'

interface LineChartProps {
    data: {
        id: string;
        data: { x: string | number; y: number }[];
        color: string;
    }[];
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
    const [ theme, setTheme ] = useState<string>('light');

    useEffect(() => {
        setTheme(document.body.getAttribute("data-theme") || 'light');
    },[])
    const gridLineColor = theme === 'dark' ? 'rgba(240, 240, 240, 0.09)' : 'rgba(0, 0, 0, 0.1)';
    const labelColor = theme === 'dark' ? '#A3A3A3' : '#3D3D3D';

    //!!todo change the legend colors when the theme is dark bc it does look like it appears right now
    
    return (
        <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false,
            }}
            yFormat=" >-.2f"
            curve="cardinal"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legendOffset: 36,
                legendPosition: 'middle',
                truncateTickAt: 0,
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legendOffset: -40,
                legendPosition: 'middle',
                truncateTickAt: 0,
            }}
            enableGridX={false}
            colors={{ scheme: 'category10' }}
            lineWidth={3}
            pointSize={2}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={5}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabel="data.yFormatted"
            pointLabelYOffset={-12}
            enableTouchCrosshair={true}
            useMesh={true}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1,
                            },
                        },
                    ],
                },
            ]}
            theme={{
                axis: {
                    ticks: {
                        text: {
                            fill: labelColor,
                        },
                    },
                },
                grid: {
                    line: {
                        stroke: gridLineColor,
                        strokeWidth: 1,
                    }
                },
            }}
        />
    )
}

export default LineChart