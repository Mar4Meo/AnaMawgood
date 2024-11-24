import { useEffect } from "react";
import "./css/style.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addCode } from "../../context/Slicer/AddCode";

const TalebPage = () => {

  const Code = useSelector(state => state.Code)

  const dispatch = useDispatch()

  useEffect(() => {
    axios.get('https://mawgod.vercel.app/api2').then(res => {
      console.log(JSON.parse(res.data.Cont).nums)
      dispatch(addCode(JSON.parse(res.data.Cont).nums))
    })
  }, [dispatch])

  return (
    <>
      <div className="taleb-page">
        <div className="mostatel">
          <section>
            <h1>عرض الكود</h1>
                <span>#{Code}</span>
          </section>
        </div>
      </div>
    </>
  );
};

export default TalebPage;
