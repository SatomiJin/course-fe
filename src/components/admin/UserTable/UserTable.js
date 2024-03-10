import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import * as UserService from "../../../service/UserService";
import * as Constants from "../../../constant";
import AdminActions from "../AdminActions/AdminActions";
import LoadingData from "../../LoadingComponent/LoadingData/LoadingData";
import "./UserTable.scss";
function UserTable(props) {
  let user = useSelector((state) => state.user);
  let [listUser, setListUser] = useState();
  let [isLoading, setIsLoading] = useState(false);

  const handleGetAllUser = async () => {
    if (user.email && user.access_token) {
      setIsLoading(true);
      let res = await UserService.getAllUser({ email: user.email, token: user.access_token });
      if (res && res.status === "OK") {
        setListUser(res.data);
      }
    }
  };

  //useEffect
  useEffect(() => {
    if (user && user.email && user.access_token) {
      handleGetAllUser();
    }
  }, []);
  useEffect(() => {
    if (listUser && listUser.length > 0) {
      setIsLoading(false);
    }
  }, [listUser]);
  return (
    <div className="user-table-container">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Email</th>
            <th scope="col">First name</th>
            <th scope="col">Last name</th>
            <th scope="col">Phone number</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {isLoading === true ? (
            <LoadingData />
          ) : (
            listUser &&
            listUser.length > 0 &&
            listUser.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.email}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.phoneNumber}</td>
                  <td>{Constants.roleUser(item.role)}</td>
                  <td>
                    <AdminActions />
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
