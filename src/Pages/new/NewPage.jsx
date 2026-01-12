import "./new.scss";
import Sidebar from "../../Component/sidebar/Sidebar";
import Navbar from "../../Component/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const NewPage = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  console.log(file);

  return (
    <>
      <div className="new">
        <Sidebar />
        <div className="newContainer">
          <Navbar />
          <div className="top">
            <h1>{title}</h1>
          </div>
          <div className="bottom">
            <div className="left">
              <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : "https://static.vecteezy.com/system/resources/previews/000/610/111/original/human-icon-logo-design-template-vector-illustration.jpg"
                }
                alt=""
              />
            </div>
            <div className="right">
              <form action="">
                <div className="formInput">
                  <label htmlFor="file">
                    Image: <DriveFolderUploadOutlinedIcon className="icon" />
                  </label>
                  <input
                    type="file"
                    id="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    style={{ display: "none" }}
                  />
                </div>

                {inputs.map((input) => (
                  <div className="formInput" key={input.id}>
                    <label htmlFor="">{input.label}</label>
                    <input type={input.type} placeholder={input.placeholder} />
                  </div>
                ))}

                {/* <div className="formInput">
                  <label>Username</label>
                  <input type="text" placeholder="John_doe"/>
                </div>
                <div className="formInput">
                  <label>Name and SurName</label>
                  <input type="text" placeholder="John_doe"/>
                </div>
                <div className="formInput">
                  <label>Email</label>
                  <input type="email" placeholder="abc@gmail.com"/>
                </div>
                <div className="formInput">
                  <label>Phone</label>
                  <input type="phone" placeholder="+91 123456789"/>
                </div>
                <div className="formInput">
                  <label>Password</label>
                  <input type="password"/>
                </div>
                <div className="formInput">
                  <label>Address</label>
                  <input type="text" placeholder="Enter your Address"/>
                </div>
                <div className="formInput">
                  <label>Country</label>
                  <input type="text" placeholder="USA"/>
                </div> */}
                <button>Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewPage;
