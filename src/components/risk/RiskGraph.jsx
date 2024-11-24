import React from "react";
import { TrendingUp } from "lucide-react";
import {
  AreaChart,
  CartesianGrid,
  XAxis,
  Tooltip,
  Area,
} from "recharts";
import { thresholds } from "../../data/healthMetrics";

const chartData = [
    { month: "Enero", colesterol: thresholds.colesterolTotal.risk, glucosa: thresholds.glucosa.risk },
    { month: "Febrero", colesterol: thresholds.colesterolTotal.alarm, glucosa: thresholds.glucosa.alarm },
    { month: "Marzo", colesterol: thresholds.colesterolTotal.risk, glucosa: thresholds.glucosa.risk },
    { month: "Abril", colesterol: thresholds.colesterolTotal.alarm, glucosa: thresholds.glucosa.alarm },
    { month: "Mayo", colesterol: thresholds.colesterolTotal.risk, glucosa: thresholds.glucosa.risk },
    { month: "Junio", colesterol: thresholds.colesterolTotal.alarm, glucosa: thresholds.glucosa.alarm },
  ];

const RiskGraph = () => {
    return (
        
      <div className="bg-white shadow-sm rounded-[30px] p-6 border-gray-200">
        <header className="mb-4">
          <h2 className="text-lg font-bold text-text-color-general">Analíticas</h2>
          <p className="text-sm text-text-color-soft">
            Mostrando los valores de los útimos 6 meses
          </p>
        </header>
        <div>
          <AreaChart
            width={1000} 
            height={400} 
            data={chartData}
            margin={{ top: 20, right: 40, left: 20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              tickFormatter={(value) => value.slice(0, 3)}
              className="text-text-color-soft"
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                borderRadius: "8px",
                border: "1px solid rgba(0, 62, 55, 0.25)",
                padding: "8px",
              }}
              cursor={{ fill: "rgba(0, 62, 55, 0.1)" }}
            />
            <Area
              type="monotone"
              dataKey="colesterol"
              stackId="1"
              stroke="var(--tw-colors-medium-soft-green)" 
              fill="rgba(0, 62, 55, 0.5)" 
            />
            <Area
              type="monotone"
              dataKey="glucosa"
              stackId="1"
              stroke="var(--tw-colors-medium-soft-green)" 
              fill="rgba(255, 69, 65, 0.40)"
            />
          </AreaChart>
        </div>
        <footer className="mt-4">
          <div className="flex w-full items-start gap-2 text-sm text-text-color-general">
            <div className="grid gap-2">
              <div className="flex items-center gap-2 font-medium leading-none">
              Tendencia al alza del 5.2% este mes <TrendingUp className="h-4 w-4" />
              </div>
              <div className="flex items-center gap-2 leading-none text-text-color-soft">
                Enero - Marzo 2024
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  };
  
  export default RiskGraph;