import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorite,
  addUser,
  removeUser,
  setFavoriteUser,
} from "./store/couter";
export default function Danhba() {
  const [user, setUser] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    if (name === "username") setUser(value);
    else setPhoneNumber(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const handleAddUser = () => {
    if (user !== "" && phoneNumber !== "") {
      dispatch(addUser({ user, phoneNumber }));
      setUser("");
      setPhoneNumber("");
    } else return;
  };

  const handleRemoveUser = (id) => {
    dispatch(removeUser(id));
  };

  const handleRemoveFavoriteUser = (id) => {
    dispatch(addToFavorite(id));
  };

  const handleFavorite = (id) => {
    dispatch(addToFavorite(id));
  };

  const handleSetFavoriteUser = (filter) => {
    dispatch(setFavoriteUser(filter));
  };

  const users = useSelector((state) => {
    const { items, filter } = state.users;
    if (filter === "all") return items;
    else return items.filter((user) => user.favorite);
    return items;
  });

  return (
    <div>
      <div className="container col-4">
        <h2 className="text-center">Danh bạ</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Tên người dùng
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={user}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Số điện thoại
            </label>
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleInputChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleAddUser}
          >
            Thêm
          </button>
        </form>
        <ul className="mt-3 list-unstyled d-flex justify-content-between">
          <li className="">
            <button
              className="btn btn-success"
              onClick={() => handleSetFavoriteUser("all")}
            >
              Tất cả danh bạ
            </button>
          </li>
          <li className="">
            <button
              className="btn btn-success"
              onClick={() => handleSetFavoriteUser("favorite")}
            >
              Danh bạ ưa thích
            </button>
          </li>
        </ul>
      </div>

      <table
        className="text-center mt-3"
        style={{ width: "700px", margin: "auto" }}
      >
        <tr>
          <th>Tên người dùng</th>
          <th>Số điện thoại</th>
          <th>Thêm vào danh bạ ưa thích</th>
          <th>Xoá dữ liệu</th>
        </tr>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.user}</td>
            <td>{user.phoneNumber}</td>
            <td>
              {user.favorite ? (
                <button
                  className="btn btn-primary"
                  onClick={() => handleRemoveFavoriteUser(user.id)}
                >
                  Xoá khỏi ưa thích
                </button>
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={() => handleFavorite(user.id)}
                >
                  Thêm vào ưa thích
                </button>
              )}
            </td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => handleRemoveUser(user.id)}
              >
                Xoá
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
