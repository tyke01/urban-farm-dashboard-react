import { Sparkline } from "../components";

import {
  SparklineAreaData,
  PieChartData,
  MineralPieChartData,
  PowerLineChartData,
  PowerLinePrimaryXAxis,
  PowerLinePrimaryYAxis,
  
} from "../dummy";

import { UseStateContext } from "../contexts/ContextProvider";

import { BsThermometerHalf, BsWind } from "react-icons/bs"
import { WiHumidity } from "react-icons/wi"

import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  PieSeries,
  Inject,
  AccumulationDataLabel,
  Tooltip,
  AccumulationTooltip,
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Category,
  DataLabel,
  LineSeries,
  Legend,
} from "@syncfusion/ej2-react-charts";

function Home() {
  const { currentColor } = UseStateContext();
  return (
    <main className="bg-main-dark-bg p-5 mx-10 my-20 rounded-lg overflow-x-hidden flex flex-col relative items-center justify-center">
      <div className=" flex flex-wrap lg:flex-nowrap justify-center gap-10">
        {/*  */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-10">
            <p className="text-xl text-slate-900 dark:text-gray-400 uppercase">
              Growth Rate
            </p>
            <Sparkline
              currentColor="white"
              id="line-sparkline"
              type="Line"
              height="80px"
              width="250px"
              data={SparklineAreaData}
              color={currentColor}
            />
          </div>
          <div className="flex flex-col gap-10 items-center">
            
            <div className=" bg-dark1-bg p-4 flex items-center justify-center rounded-lg text-white">
              <div className=" flex flex-col">
                <p>Temperature</p>
                <p style={{color: currentColor}}>21 deg</p>
              </div>
              <div className="text-4xl">
                <BsThermometerHalf />
              </div>
            </div>

            <div  className=" bg-dark1-bg p-4 flex gap-5 items-center justify-center rounded-lg text-white">
              <div className="flex flex-col">
                <p>Humidity</p>
                <p style={{color: currentColor}}>45.8 %</p>
              </div>
              <div className="text-4xl">
                <WiHumidity />
              </div>
            </div>

            <div  className=" bg-dark1-bg p-4 flex gap-5 items-center justify-center rounded-lg text-white">
              <div className="flex flex-col">
                <p>Air Quality</p>
                <p style={{color: currentColor}}>500 PPM</p>
              </div>
              <div className="text-4xl">
                <BsWind />
              </div>
            </div>



          </div>
        </div>

        <div className="absolute h-[720px] w-[1px] bg-white left-[400px]"></div>
        {/*  */}
        <div>
          <p className="text-xl text-center text-slate-900 dark:text-gray-400 mb-6 uppercase">
            Plant condition
          </p>

          <div className="flex flex-col  items-center">
            {/* ----------------- Water content --------------------- */}
            <div className="flex items-center">
              <div className="flex flex-col items-center ">
                <p className="text-sm text-gray-300">water level</p>
                <div className=" flex items-center justify-center w-[200px] h-[200px]">
                  <AccumulationChartComponent
                    id="charts"
                    legendSettings={{
                      visible: true,
                    }}
                    tooltip={{ enable: true }}
                    enableBorderOnMouseMove={false}
                    margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
                    center="0"
                  >
                    <Inject
                      services={[
                        AccumulationDataLabel,
                        Tooltip,
                        PieSeries,
                        AccumulationTooltip,
                      ]}
                    />
                    <AccumulationSeriesCollectionDirective>
                      <AccumulationSeriesDirective
                        dataSource={PieChartData}
                        xName="x"
                        yName="y"
                        innerRadius="70%"
                        startAngle="360"
                        endAngle="340"
                        radius="50%"
                      ></AccumulationSeriesDirective>
                    </AccumulationSeriesCollectionDirective>
                  </AccumulationChartComponent>
                </div>
              </div>
              {/*---------------- mineral content -----------------------*/}
              <div className="flex flex-col items-center">
                <p className="text-sm text-gray-300">Mineral Level</p>
                <div className=" h-[200px] w-[200px] flex items-center justify-center">
                  <AccumulationChartComponent
                    id="charts-1"
                    legendSettings={{
                      visible: true,
                    }}
                    tooltip={{ enable: true }}
                    enableBorderOnMouseMove={false}
                    margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
                  >
                    <Inject
                      services={[
                        AccumulationDataLabel,
                        Tooltip,
                        PieSeries,
                        AccumulationTooltip,
                      ]}
                    />
                    <AccumulationSeriesCollectionDirective>
                      <AccumulationSeriesDirective
                        dataSource={MineralPieChartData}
                        xName="x"
                        yName="y"
                        innerRadius="70%"
                        startAngle="360"
                        endAngle="180"
                        radius="50%"
                      ></AccumulationSeriesDirective>
                    </AccumulationSeriesCollectionDirective>
                  </AccumulationChartComponent>
                </div>
              </div>
            </div>
            {/* --------------------- Power Consumption ----------------- */}
            <div className=" flex flex-col items-center">
              <p className="text-sm text-gray-300 mb-10">Power consumption</p>
              <div>
                <ChartComponent
                  id="charts-2"
                  width="350px"
                  height="400px"
                  primaryXAxis={PowerLinePrimaryXAxis}
                  primaryYAxis={PowerLinePrimaryYAxis}
                >
                  <Inject
                    services={[
                      LineSeries,
                      Legend,
                      Tooltip,
                      DataLabel,
                      Category,
                    ]}
                  />
                  <SeriesCollectionDirective>
                    <SeriesDirective
                      dataSource={PowerLineChartData}
                      xName="x"
                      yName="yval"
                      width={3}
                      name="Power Consumption"
                      type="Line"
                    ></SeriesDirective>
                  </SeriesCollectionDirective>
                  
                </ChartComponent>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
