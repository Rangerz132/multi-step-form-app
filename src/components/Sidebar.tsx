import SidebarMobile from "../assets/images/bg-sidebar-mobile.svg";
import SidebarDesktop from "../assets/images/bg-sidebar-desktop.svg";

const Sidebar = () => {
  return (
    <div>
      <img src={SidebarMobile} alt={"Sidebar"} className="w-screen md:hidden" />
      <img
        src={SidebarDesktop}
        alt={"sidebar"}
        className="w-full h-full hidden md:flex"
      />
    </div>
  );
};

export default Sidebar;
