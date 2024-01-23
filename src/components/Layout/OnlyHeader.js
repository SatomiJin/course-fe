import HeaderComponent from "../Header/HeaderComponent/HeaderComponent";
function OnlyHeader({ children }) {
  return (
    <div className="default-layout-container">
      {/* <HeaderHome /> */}
      <HeaderComponent />
      {children}
    </div>
  );
}

export default OnlyHeader;
