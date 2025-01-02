import { Link } from "react-router-dom";
import Image from "./Image";

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      <div className="md:hidden xl:block xl:w-1/3">
        <Image
          src="postImg.jpeg"
          className="rounded-2xl object-cover"
          w={"735"}
        />
      </div>
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link className="text-4xl font-semibold" to="/test">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          alias!
        </Link>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>Written by</span>
          <Link className="text-blue-800">John Doe</Link>
          <span>on</span>
          <Link className="text-blue-800">Web Design</Link>
          <span>2 days ago</span>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic aperiam
          delectus perferendis sed? Impedit vel adipisci, numquam expedita illum
          rem.
        </p>
        <Link to="/test" className="text-blue-800 underline text-sm">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
