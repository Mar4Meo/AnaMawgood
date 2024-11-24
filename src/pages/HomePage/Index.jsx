import "./css/style.css";

import mo3alemImg from "../../public/images/mo3alem.png";
import mo3alemHoverImg from "../../public/images/mo3alemhover.png";
import talebImg from "../../public/images/Taleb.png";
import talebHoverImg from "../../public/images/talebhover.png";

import { useState } from "react";

import { Link } from "react-router-dom";

// import axios from "axios";

const HomePage = () => {

  const [Revmo3alem, setRevmo3alem] = useState(true);
  const [Revtaleb, setRevtaleb] = useState(true);
  return (
    <>
      <div className="home">
        <header>
          <p>
            <span>أنا موجود</span>
            <span>إثبت حضورك</span>
            <span>بـ كود</span>
            <span>♥</span>
          </p>
        </header>
        <footer>
          <Link to={"/taleb"}>
            <div
              className="taleb-div"
              onClick={() => {
                setRevtaleb(false);
                setRevmo3alem(true);
              }}
            >
              <p>طَالب</p>
              <img
                className="taleb-img"
                src={Revtaleb == true ? talebImg : talebHoverImg}
                alt=""
              />
            </div>
          </Link>
          <Link to={"/mo"}>
            <div
              className="mo3alem-div"
              onClick={() => {
                setRevtaleb(true);
                setRevmo3alem(false);
              }}
            >
              <p>مُعلم</p>
              <img
                className="mo3alem-img"
                src={Revmo3alem == true ? mo3alemImg : mo3alemHoverImg}
                alt=""
              />
            </div>
          </Link>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
