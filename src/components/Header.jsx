import { useEffect, useState } from "react";
import { AiFillYoutube, AiOutlineSearch } from "react-icons/ai";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Header() {
  const { keyword } = useParams();
  const [text, setText] = useState("");
  const navigate = useNavigate(); // 코드상에서 동적으로 이동할때 사용함
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setText("");
    navigate(`/videos/${text}`);
  };
  useEffect(() => setText(keyword || ""), [keyword]);
  return (
    <header className="flex w-full p-4 text-2xl border-b border-zinc-600 mb-4 ">
      <Link to="/" className="flex items-center ">
        <AiFillYoutube className="text-brand text-4xl" />
        <h1 className="font-bold ml-2 text-3xl">Youtube</h1>
      </Link>
      <form onSubmit={handleSubmit} className="flex w-full justify-center">
        <input
          type="text"
          value={text}
          onChange={handleChange}
          className=" w-7/12 p-2 outline-none bg-black text-gray-50"
          placeholder="Search..."
        />
        <button className="bg-zinc-600 px-4">
          <AiOutlineSearch />
        </button>
      </form>
    </header>
  );
}
