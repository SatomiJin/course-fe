import HeaderComponent from "../Header/HeaderComponent/HeaderComponent";
import HomeBottomComponent from "../HomeComponent/HomeBottomComponent/HomeBottomComponent";
function DefaultLayout({ children }) {
  return (
    <div className="default-layout-container">
      {/* <HeaderHome /> */}
      <HeaderComponent />
      {children}
      <HomeBottomComponent />
    </div>
  );
}

export default DefaultLayout;
