import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { saveAs } from "file-saver";
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Home = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(`https://uplodify.onrender.com/user`);
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`https://uplodify.onrender.com/user/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        const updatedUsers = users.filter((user) => user._id !== id);
        setUsers(updatedUsers);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDownload=(data)=>{
    try{
      saveAs(data);
    }
    catch (error) {
      console.log(error);
    }
  }

  
  return (
    <>
    <Navbar/>
    <div className="container"> 
    <div className="row">
      {users?.map((user) => {
       var type=user.avatar.split(".");
       const res=type[type.length-1]
        type[type.length-1]=res==="mp4"?"jpg":res
        const source=type.join(".")
        
       
          return (
          
            <div className="col-md-3 card text-white bg-dark  me-4 mt-2 p-0 card-columns"  key={user._id}>
              <img src={source} alt="" width={"100%"} height={350} />
              <div className="p-2">
                <h3>{user.name}</h3>
                <div className="d-flex justify-content-between align-items-center">
                  <h5>{res==="mp4"?"Video":"Image"}</h5>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(user._id)}
                  >Delete
                  </button>
                </div>
                <br></br>
                <div className="d-flex justify-content-between align-items-center">
                <h5><a  className="btn btn-light" onClick={() => handleDownload(user.avatar)}>Download</a></h5>
                <CopyToClipboard text={user.shortUrl} className="btn btn-light">
                    <button   onClick={() => alert("The Short_URL has been copied")}>Short_URL</button>
                 </CopyToClipboard>
                </div>
              </div>
              </div>
              
          )
      }
      )}
    </div>
    </div>
    </>
  );
};

export default Home;

