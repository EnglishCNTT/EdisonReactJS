import React from "react";

export default function HelloWorld() {

    let name = "Cee";

    const user = {
        firstName: "Vu",
        lastName: "Ngoc Anh"
    };

    const formatName = (user) => {
        return user.firstName + " " + user.lastName;
    };
  return (
    <div>
        <div>Hello : {name} and {formatName(user)}</div>
        <div>{name === 'Cee' ? 'Hello Cee' : 'Hello ${formatUser(user)}'}</div>
        {/* <div>Nice to meet you!!</div> */}
    </div>
  );
}