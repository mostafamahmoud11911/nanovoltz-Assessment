import Cards from "../Components/Cards/Cards";
import ChartCards from "../Components/Charts/ChartCards";
import ChartLayout from "../Components/Charts/ChartLayout";
import Table from "../Components/Table/Table";


export default function Dashboard() {
    return (
        <div className="flex flex-col gap-6">
            <ChartLayout />
            <Cards />
            <Table />
            <ChartCards />
        </div>
    )
}
