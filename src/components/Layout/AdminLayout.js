import NavBar from "../Menu/NavBar";

function AdminLayout({ children }) {
  return (
    <div className="admin-layout-container" style={{ display: "flex" }}>
      <NavBar />
      {children}
    </div>
  );
}

export default AdminLayout;
