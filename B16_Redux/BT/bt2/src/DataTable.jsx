import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSubject, removeStudent, removeSubject } from "./store/student";

export default function DataTable() {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students);

  const handleRemoveStudent = (studentId) => {
    dispatch(removeStudent(studentId));
    console.log(studentId);
  };

  const handleAddSubject = (studentId, subject) => {
    if (subject !== "") {
      dispatch(addSubject({ studentId, subject }));
    }
  };

  const handleRemoveSubject = (studentId, subjectId) => {
    dispatch(removeSubject({ studentId, subjectId }));
  };

  const onSubmit = (e, studentId) => {
    e.preventDefault();
    const subject = e.target.elements.subject.value;
    handleAddSubject(studentId, subject);
    e.target.reset();
  };

  return (
    <div className="container mt-3 col-8">
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Tên sinh viên</th>
            <th scope="col">Môn học</th>
            <th scope="col">Tuỳ chọn</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            return (
              <tr key={student.id}>
                <th scope="row">{student.id}</th>
                <td>{student.name}</td>
                <td>
                  <form action="" onSubmit={(e) => onSubmit(e, student.id)}>
                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label">
                        Thêm môn học
                      </label>
                      <div>
                        <div className="d-flex justify-content-between">
                          <input
                            type="text"
                            className="form-control"
                            id="subject"
                            name="subject"
                            placeholder="Nhập môn học"
                            style={{ width: "300px" }}
                          />
                          <button type="submit" className="btn btn-primary">
                            Xác nhận
                          </button>
                        </div>
                      </div>
                      <ul className="mt-2 list-unstyled">
                        {student.subjects.map((subject) => {
                          return (
                            <li
                              key={subject.id}
                              className="d-flex justify-content-between mb-2"
                            >
                              {subject.subject}
                              <button
                                className="btn btn-secondary"
                                onClick={() =>
                                  handleRemoveSubject(student.id, subject.id)
                                }
                              >
                                Xoá môn
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </form>
                </td>
                <td>
                  <p style={{ marginBottom: "10px" }}>
                    Ấn vào đây để xoá sinh viên
                  </p>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleRemoveStudent(student.id)}
                  >
                    Xoá sinh viên
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
