import NavBarHome from "../../Components/navBarHome";
import SideBar from "../../Components/sideBar";
function Home() {
    return(
        <div className=" h-screen flex">
                <SideBar />
                <div className="flex-grow">
                    <NavBarHome />
                </div>
            
        </div>
    )
}

export default Home;