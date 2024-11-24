import { useState } from "react";
import "./css/style.css";

import axios from 'axios'
// import { useDispatch } from "react-redux";

// import { addCode } from "../../context/Slicer/AddCode";

const Mo3alemPage = () => {

  const [numOfCode, setNumOfCode] = useState()

  const sendCode = (nums) => {
    axios.post('https://mawgod.vercel.app/api', { nums: nums || 1 }).then(res => {
      return res
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <>
      <div className="mo3alem-page">
        <div className="mostatel">
          <section>
            <h1>انشئ الكود</h1>
            <input type="text" name="" id="" placeholder="اكتب عدد الطلاب" onChange={(e) => setNumOfCode(e.target.value)} />
            <button onClick={() => {
              sendCode(numOfCode)
            }}>إنشاء</button>
          </section>
        </div>
      </div>
    </>
  );
};

export default Mo3alemPage;
