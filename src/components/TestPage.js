import { Link, useNavigate, useParams } from "react-router-dom";
import questions from '../assets/questions.json';
import { useContext, useEffect, useState } from "react";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi'
import { DataContext } from "../context/DataContext";

export default function TestPage() {

    const param = useParams();

    const [data, setData] = useState([]);
    const [n, setN] = useState(param.q);
    const [ans, setAns] = useState(null);
    const { subData, setSubData } = useContext(DataContext);
    const navigate = useNavigate();

    useEffect(() => {
        questions.map((q) => {
            if (q.q_no == param.q) {
                setData(q);
                setN(q.q_no);
            }
        })
    }, [param])

    function handle(e) {
        let v = e.target.value;
        setAns(v);
    }

    function next() {

        let sd = {
            q_no: n,
            question: data?.question,
            answer: data?.answer,
            subAns: ans
        }

        setSubData([...subData, sd]);

        if (parseInt(n) == questions?.length) {
            submit();
        }
    }

    function submit() {
        if (subData) {
            navigate('/result')
        }
    }

    return (
        <div className="container w-full h-screen flex flex-col items-center justify-center p-5">

            <h1 className=" text-2xl md:text-3xl font-semibold rajdhani-semibold text-center">Q.{n} {data?.question}</h1>

            <div className="container w-full flex items-center justify-center my-10 h-2/5">

                <div className="container lg:w-6/12 my-12 mx-auto flex">
                    {data?.options?.map((option, i) => (
                        <div key={i} className="flex w-6/12 gap-3 text-xl md:text-2xl items-center justify-center font-semibold rajdhani-semibold">
                            <input type="radio" onClick={handle} name="ans" value={option} id="ans" /> {option}
                        </div>
                    ))}
                </div>

            </div>

            <div className="container w-full items-center justify-center flex">

                {
                    n > 1 ?
                        <Link className="text-sm md:text-lg font-semibold text-white bg-blue-700 hover:bg-blue-600 p-2 md:px-8 md:py-4 rounded-lg mx-auto capitalize flex gap-3 items-center justify-center" to={`/test/${n - 1}`} ><HiArrowNarrowLeft size={25} />previous</Link>
                        :
                        null
                }

                {
                    n < questions?.length ?
                        ans ? <Link onClick={() => { next() }} className="text-sm md:text-lg font-semibold text-white bg-blue-700 hover:bg-blue-600 p-2 md:px-8 md:py-4 rounded-lg mx-auto capitalize flex gap-3 items-center justify-center" to={`/test/${parseInt(n) + 1}`} >submit & next<HiArrowNarrowRight size={25} /></Link>
                            : <p className="text-yellow-500 text-xl text-center rajdhani-semibold">select any one answer to submit.</p>
                        :
                        <button onClick={() => { next() }} className="text-sm md:text-lg font-semibold text-white bg-blue-700 hover:bg-blue-600 p-2 md:px-8 md:py-4 rounded-lg mx-auto capitalize flex gap-3 items-center justify-center">submit</button>
                }

            </div>

        </div>
    )
}
