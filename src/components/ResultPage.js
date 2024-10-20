import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import {FaCheck} from 'react-icons/fa'
import {RxCross2} from 'react-icons/rx'
import { useNavigate } from 'react-router-dom';

export default function ResultPage() {

    const { subData ,setSubData} = useContext(DataContext);
    const navigate = useNavigate();

    function again(){
        setSubData([]);
        navigate('/test/1');
    }

    return (
        <div className="container w-full h-screen overflow-y-auto p-2">

            <table className="table-auto w-full mx-auto">
                <thead>
                    <tr>
                        <th className='p-3 py-5 text-lg text-center border-b border-b-black'>#</th>
                        <th className='p-3 py-5 text-lg text-center border-b border-b-black'>question</th>
                        <th className='p-3 py-5 text-lg text-center border-b border-b-black'>answer</th>
                        <th className='p-3 py-5 text-lg text-center border-b border-b-black'>submitted answer</th>
                        <th className='p-3 py-5 text-lg text-center border-b border-b-black'>result</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        subData?.map((d, i) => {
                            return (
                                <tr>
                                    <td className='p-3 py-5 text-gray-700 border-b border-b-black text-center text-lg font-semibold'>{d?.q_no}</td>
                                    <td className='p-3 py-5 text-gray-700 border-b border-b-black text-center text-lg font-semibold'>{d?.question}</td>
                                    <td className='p-3 py-5 text-gray-700 border-b border-b-black text-center text-lg font-semibold'>{d?.answer}</td>
                                    <td className='p-3 py-5 text-gray-700 border-b border-b-black text-center text-lg font-semibold'>{d?.subAns}</td>
                                    <td className='p-3 py-5 text-gray-700 border-b border-b-black text-center text-lg font-semibold'>
                                        {
                                            d?.answer == d?.subAns ? <FaCheck size={20} className='text-green-500'/>:
                                            <RxCross2 size={20} className='text-red-400' />
                                        }
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>

            <button onClick={() => { again() }} className="text-sm my-16 md:text-lg font-semibold text-white bg-blue-700 hover:bg-blue-600 p-2 md:px-8 md:py-4 rounded-lg mx-auto capitalize flex gap-3 items-center justify-center">take test again</button>

        </div>
    )

}
