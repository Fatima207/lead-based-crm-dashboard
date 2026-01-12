import "./list.scss";
import Sidebar from "../../Component/sidebar/Sidebar";
import Navbar from "../../Component/navbar/Navbar";
import Datatable from "../../Component/datatable/Datatable";
import { useState } from "react";
import { userRows } from "../../datatablesource";

const List = () => {
  // 🔹 READ (initial data)
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("users")) || userRows
  );

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />

        {/* 🔹 PASS DATA & SETTER */}
        <Datatable rows={data} setRows={setData} />
      </div>
    </div>
  );
};

export default List;
