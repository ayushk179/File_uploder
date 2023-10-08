import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";


const AddUser = () => {
  
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    image: "",
  });
  const handleChange = (name) => (e) => {
    const value = name === "image" ? e.target.files[0] : e.target.value;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async () => {
    try { 
      if(data.image=="" || data.name==""){
        alert("Required Fields Not Provided");
        navigate('/');
      }
      else{
        let formData = new FormData();
        formData.append("image", data.image);
         formData.append("name", data.name);

      const res = await fetch(`https://uplodify.onrender.com/user`, {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setData({ name: "", image: "" });
        navigate('/');
      }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar/>
      <div className="container"> 
      <div style={{ maxWidth: 500, margin: "auto" }}>
      
        <div className="mb-3">
          <input
            className="form-control"
            placeholder="Enter name"
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange("name")}
            required
            input/>
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="file"
            accept="image/*,video/*"
            name="image"
            onChange={handleChange("image")}
            required
          />
        </div>
        <div className="text-center">
          <button className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
        
      </div>
     </div>
    </>
    );
};

export default AddUser;