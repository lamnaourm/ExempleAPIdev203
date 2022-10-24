import React, { useState } from "react";
import User from "./User";

const ListUsers = (props) => {
  const [activeId, setActiveId] = useState(0);

  return (
    <div>
      {props.users.map((user) => (
        <User
          key={user.id}
          user={user}
          changeActiveId={() => setActiveId(user.id)}
          activeId={activeId}
        />
      ))}
    </div>
  );
};

export default ListUsers;
