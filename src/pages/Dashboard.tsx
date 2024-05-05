import Sidebar from "../components/Sidebar"
import LineChart from "../components/LineChart"
import WorldMap from "../components/WorldMap"

// Define Dashboard Component
const Dashboard = () => {
    //Render layout of Dashboard
    return (
        <div className="md:flex md:h-screen">
            <Sidebar />
            <div className="md:overflow-auto w-full">
                <LineChart />
                <WorldMap />
            </div>
        </div>
    )
}

export default Dashboard