import React from "react";

type User = {
    id: number;
    name: string;
    email: string;
};

const dummyUsers: User[] = [
    { id: 1, name: "Alice Smith", email: "alice@example.com" },
    { id: 2, name: "Bob Johnson", email: "bob@example.com" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com" },
];

type UserListProps = {
    users?: User[];
};

const UserList: React.FC<UserListProps> = (props) => {
    const { users = dummyUsers } = props;
    return (
            <ul>
                {users.map((user, index) => (
                    <li key={index} style={{ marginBottom: "10px" }}>
                        <div><strong>{user.userName}</strong></div>
                        <div><em>{user.email}</em></div>
                    </li>
                ))}
            </ul>
    );
};

export default UserList;