import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function UserDashboard() {

    const router = useRouter();
    const role = router.query.role; 



    const [data,setData]= useState();
  

    useEffect(()=>{

        fetchData();
       
    },[])
    
    const  fetchData=async()=>{
        try {
            const response = await fetch(`/api/getDatabyRole?role=${role}`);

            if (response.ok) {
              const data = await response.json();
              setData(data);
            } else {
              console.log('Failed to fetch data');
            }
          } catch (error) {
            console.log('Error:', error.message);
          }
    }

  return (
    <>
    <div className='container'>
        <div className="user-table">
              <h1>All {role} Data</h1>
              <table>
                <thead>
                  <tr>
                    <th className='role'>Role</th>
                    <th className='data'>Data</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((user) => (
                      <tr key={user?.id}>
                      <td>{user?.role}</td>
                      <td className='data'>{user?.data}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
        </div>
    </div>

    <style jsx>{`
        .container{
            text-align:center;
            padding:80px;
        }
        table {
          width: 100%;
        //   border-collapse: collapse;
        }
        .role{
            width:80px;
        }
        th,
        td {
          padding: 8px;
          border-bottom: 1px solid #ddd;
          text-align: left;
          color:black;
        }

        th {
          background-color: #f2f2f2;
          color:black;
        }
      `}</style>
    </>
  );
}
