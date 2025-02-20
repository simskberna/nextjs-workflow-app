'use client'
import LineChart from  "@/app/components/ui/line-chart"
import { TrendingUp } from "lucide-react";

const Overview = () => {
    //!TODO dummy data will be replaced with dynamic real data later
    return (
      <div className='p-4 h-auto w-full'>
          <div className='h-[500px] w-full bg-chart_custom rounded-[30px] pb-16'>
              <div className='flex w-fit gap-2 items-center justify-start pl-8 pt-8'>
                  <TrendingUp/>
                  <label>Growth Chart</label>
              </div>
              <LineChart data={[
                  {
                      "id": "japan",
                      "color": "hsl(52, 70%, 50%)",
                      "data": [
                          {
                              "x": "Jan",
                              "y": 25
                          },
                          {
                              "x": "Feb",
                              "y": 75
                          },
                          {
                              "x": "Mar",
                              "y": 50
                          },
                          {
                              "x": "Apr",
                              "y": 100
                          },
                          {
                              "x": "May",
                              "y": 25
                          },

                      ]
                  },
                  {
                      "id": "germany",
                      "color": "hsl(52, 70%, 50%)",
                      "data": [
                          {
                              "x": "Jan",
                              "y": 50
                          },
                          {
                              "x": "Feb",
                              "y": 100
                          },
                          {
                              "x": "Mar",
                              "y": 75
                          },
                          {
                              "x": "Apr",
                              "y": 25
                          },
                          {
                              "x": "May",
                              "y": 35
                          },

                      ]
                  }
              ]}/></div>
      </div>
    )
};
export default Overview;
