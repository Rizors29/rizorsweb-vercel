import { FaEye } from "react-icons/fa6";
import { useEffect, useState } from "react";

function Views({ id }) {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const viewedKey = `viewed-${id}`;

    async function handleViews() {
      if (!localStorage.getItem(viewedKey)) {
        const res = await fetch(`/api/views?id=${id}`, {
          method: "POST",
        });

        const data = await res.json();
        setViews(data.views);

        localStorage.setItem(viewedKey, "true");
      } else {
        const res = await fetch(`/api/views?id=${id}`);
        const data = await res.json();
        setViews(data.views);
      }
    }

    handleViews();
  }, [id]);

  return (
    <div className="mt-2 flex items-center gap-2 ms-0 md:ms-120 animate-slide-up text-white">
      <FaEye />
      <span>{views} views</span>
    </div>
  );
}

export default Views;