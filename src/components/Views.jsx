import { FaEye } from "react-icons/fa6";
import { useEffect, useState } from "react";

function Views({ id }) {
  const [views, setViews] = useState(0);

  useEffect(() => {
    fetch(`/api/views?id=${id}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => setViews(data.views));
  }, [id]);

  return (
    <div className="mt-2 flex items-center gap-2 ms-0 md:ms-120 animate-slide-up text-white">
      <FaEye />
      <span>{views} views</span>
    </div>
  );
}

export default Views;
