import React, { useEffect } from 'react'
import { fetchUser } from './userThunk'
import { clearUser } from './userSlice'
import { useDispatch, useSelector } from 'react-redux';
function Api() {
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector((state) => state.users);
    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);
    const handleRefresh = () => {
        dispatch(fetchUser());
    }
    const handleClear = () => {
        dispatch(clearUser());
    }
    return (
        <div>
            <h1>User List</h1>
            <button onClick={handleRefresh}>Refresh</button>
            <button onClick={handleClear}>Clear</button>
            {loading && <p>Loading users...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

            <table style={{ border: "2px solid black", padding: "5px",margin:'auto',marginTop:'20px' }}>
                <tr style={{ border: "2px solid black", padding: "5px" }}>
                    <th style={{ border: "2px solid black", padding: "5px" }}>Name</th>
                    <th style={{ border: "2px solid black", padding: "5px" }}>Email</th>
                </tr>

              
                {users.map(e =>
                    <tr >
                        <td style={{ border: "1px solid black", padding: "5px" }}>{e.name}</td>
                        <td style={{ border: "1px solid black", padding: "5px" }}>{e.email}</td>
                    </tr>
                )}
            </table>

    

        </div>
    )
}
export default Api; 