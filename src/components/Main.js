import { Link } from "react-router-dom";

export default function Main() {
    return (
        <div className="container w-full h-screen flex items-center justify-center flex-col p-5">
            <h1 className="text-4xl font-bold rajdhani-semibold capitalize"> start test</h1>
            <Link to={'/test/1'} className="px-10 py-4 my-5 bg-blue-700 hover:bg-blue-600 text-white text-lg font-semibold rounded-lg capitalize ">start</Link>
        </div>
    )
}
