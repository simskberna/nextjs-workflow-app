'use client'
import LineChart from  "@/app/components/ui/line-chart"

const Overview = () => {
    return (
      <div className='p-4 h-auto w-full'>
          <div className='h-[400px] w-full bg-chart_custom rounded-[30px]'>
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
                              "y": 60
                          },
                          {
                              "x": "Apr",
                              "y": 100
                          },
                          {
                              "x": "May",
                              "y": 20
                          },

                      ]
                  }
              ]}/></div>
      </div>
    )
};
export default Overview;
