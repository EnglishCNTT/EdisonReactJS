import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "./store/student";

export default function AddStudent() {
  const [student, setStudent] = useState("");
  const dispatch = useDispatch();

  const handleAddStudent = () => {
    if (student !== "") {
      dispatch(addStudent(student));
      setStudent("");
    } else return;
  };
  return (
    <div className="container col-3">
      <h4 className="text-center">Quản lý sinh viên</h4>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-3">
          <label htmlFor="inputStudent" className="form-label">
            Thêm sinh viên
          </label>
          <input
            type="text"
            className="form-control"
            id="inputStudent"
            placeholder="Nhập tên sinh viên"
            value={student}
            onChange={(e) => setStudent(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleAddStudent}
        >
          Xác nhận
        </button>
      </form>
    </div>
  );
}
