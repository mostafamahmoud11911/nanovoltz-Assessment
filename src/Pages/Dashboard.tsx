import Cards from "../Components/Cards/Cards";
import ChartCarts from "../Components/Charts/ChartCarts";
import ChartLayout from "../Components/Charts/ChartLayout";
import Table from "../Components/Table/Table";


export default function Dashboard() {
    return (
        <>
            <ChartLayout />
            <Cards />
            <Table />
            <ChartCarts />
        </>
    )
}
