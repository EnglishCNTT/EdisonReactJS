import React from "react";

const UserDetails = () => {
  const userInfo = {
    userName: "ngocanh",
    email: "ngocanh15@gmail.com",
    phone: "0123456789",
  };
  console.log(userInfo);
  return (
    <div>
      <h2>User Details</h2>
      <p>Username: {userInfo?.userName}</p>
      <p>Email: {userInfo?.email}</p>
      <p>Phone: {userInfo?.phone}</p>
    </div>
  );
};

export default UserDetails;
