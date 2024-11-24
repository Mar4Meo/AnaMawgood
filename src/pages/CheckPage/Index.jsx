import "./css/style.css";

import scketshedBorder from '../../public/images/Skettched.png'
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

const CheckPage = () => {

  const [docPass, setDocPass] = useState();
  const [popup, setPopup] = useState(false);

  const DocPassRef = useRef()

  const Navigate = useNavigate();


  return (
    <>
      <div className="check-page">
        <div className="mostatel">

          <header>
            <span>جامعة عين شمس</span>
            <i className="fa-brands fa-teamspeak"></i>
            <span>كلية التربية النوعية</span>
          </header>

          <section>
            <form onSubmit={(e) => { e.preventDefault() }}>
              <label htmlFor="">كلمة المرور</label>
              <input type="text" placeholder="ادخل كلمة المرور الخاصة بالمُعلمين" ref={DocPassRef} onFocus={(e) => {
                e.target.placeholder = ''
              }} onBlur={(e) => { e.target.placeholder = 'ادخل كلمة المرور الخاصة بالمُعلمين' }} onChange={(e) => {
                setDocPass(e.target.value)
              }} />
              <div onClick={() => {
                if (docPass !== 'MrDoc') {
                  setPopup(true)
                } else {
                  Navigate('/mo3alem')
                }
              }}>
                <span>التحقق</span>
                <img src={scketshedBorder} alt="" width={220} />
              </div>
            </form>
          </section>

          <div className={`popup ${popup !== false ? 'show' : ''}`}>
            <div>
              <p>~ كلمة المرور خاطئة ~</p>
              <p>

                <span onClick={() => {
                  Navigate('/')
                  setPopup(false)
                }}>الرجوع</span>

                <span onClick={() => {
                  Navigate('/mo')
                  setPopup(false)
                  DocPassRef.current.focus()
                  DocPassRef.current.value = ''
                }}>أعد الكتابة</span>

              </p>
            </div>
          </div>

          <footer>
            <span>{'هام":'}</span>
            <p>هذا المحتوي خاص <span>بالمُعلمين</span> فقط</p>
            <p>+_ لا يمكنك الدخول إليه إذ كنت <span>طالباً</span> _+</p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default CheckPage;
