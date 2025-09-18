import BarChartCard from "./BarChart";
import LineChart from "./LineChart";


export default function ChartLayout() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <LineChart />
            <BarChartCard />
        </div>
    )
}
