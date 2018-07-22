import React from 'react';

const CreateUser = (props) => {
    return (
        <div>
            <table>
                <thead></thead>
                <tbody>
                    <tr>
                        <td><p>User:</p></td>
                        <td><input type='text' onChange={props.changeUserFormInput.bind(this, 'user')}/></td>
                    </tr>
                    <tr>
                        <td><p>Password:</p></td>
                        <td><input type='password' onChange={props.changeUserFormInput.bind(this, 'password')}/></td>
                    </tr>
                </tbody>
            </table>
            <button onClick={props.addUser}>Add User</button>
        </div>
    );
};

export default CreateUser;