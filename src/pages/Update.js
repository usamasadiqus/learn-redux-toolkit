import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./../UserReducer";

const Update = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const existingUser = users.filter((user) => user.id === Number(id));

  const { name, email } = existingUser[0];

  const [uname, setUname] = useState(name);
  const [uemail, setUemail] = useState(email);

  const handleUpdate = (e) => {
    e.preventDefault();

    dispatch(updateUser({ id, name: uname, email: uemail }));

    navigate("/");
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Update User</h3>
        <form onSubmit={(e) => handleUpdate(e)}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Name"
              value={uname}
              onChange={(e) => setUname(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
              value={uemail}
              onChange={(e) => setUemail(e.target.value)}
            />
          </div>
          <br />
          <button className="btn btn-info">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
