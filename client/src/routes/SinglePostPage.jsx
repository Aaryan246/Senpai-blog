import Image from "../components/Image";
import { Link } from "react-router-dom";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque,
            nostrum.
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">John doe</Link>
            <span>on</span>
            <Link className="text-blue-800">Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam dicta
            aperiam reiciendis excepturi quo incidunt voluptatibus eos nostrum
            exercitationem voluptates, voluptatem quasi labore iure enim,
            suscipit saepe, animi ducimus omnis eum unde corporis non facere.
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src="postImg.jpeg" w="600" className="rounded-3xl" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-12">
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            esse, ipsa debitis placeat blanditiis, distinctio enim ea harum
            numquam natus aut dolores assumenda nemo atque. Expedita deserunt
            ipsam est quo maxime sequi nemo ea minima, unde suscipit autem quam,
            blanditiis, explicabo incidunt? Reprehenderit, ullam. Vero
            doloremque eos illum? Sunt, corrupti.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            esse, ipsa debitis placeat blanditiis, distinctio enim ea harum
            numquam natus aut dolores assumenda nemo atque. Expedita deserunt
            ipsam est quo maxime sequi nemo ea minima, unde suscipit autem quam,
            blanditiis, explicabo incidunt? Reprehenderit, ullam. Vero
            doloremque eos illum? Sunt, corrupti.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            esse, ipsa debitis placeat blanditiis, distinctio enim ea harum
            numquam natus aut dolores assumenda nemo atque. Expedita deserunt
            ipsam est quo maxime sequi nemo ea minima, unde suscipit autem quam,
            blanditiis, explicabo incidunt? Reprehenderit, ullam. Vero
            doloremque eos illum? Sunt, corrupti.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            esse, ipsa debitis placeat blanditiis, distinctio enim ea harum
            numquam natus aut dolores assumenda nemo atque. Expedita deserunt
            ipsam est quo maxime sequi nemo ea minima, unde suscipit autem quam,
            blanditiis, explicabo incidunt? Reprehenderit, ullam. Vero
            doloremque eos illum? Sunt, corrupti.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            esse, ipsa debitis placeat blanditiis, distinctio enim ea harum
            numquam natus aut dolores assumenda nemo atque. Expedita deserunt
            ipsam est quo maxime sequi nemo ea minima, unde suscipit autem quam,
            blanditiis, explicabo incidunt? Reprehenderit, ullam. Vero
            doloremque eos illum? Sunt, corrupti.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            esse, ipsa debitis placeat blanditiis, distinctio enim ea harum
            numquam natus aut dolores assumenda nemo atque. Expedita deserunt
            ipsam est quo maxime sequi nemo ea minima, unde suscipit autem quam,
            blanditiis, explicabo incidunt? Reprehenderit, ullam. Vero
            doloremque eos illum? Sunt, corrupti.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            esse, ipsa debitis placeat blanditiis, distinctio enim ea harum
            numquam natus aut dolores assumenda nemo atque. Expedita deserunt
            ipsam est quo maxime sequi nemo ea minima, unde suscipit autem quam,
            blanditiis, explicabo incidunt? Reprehenderit, ullam. Vero
            doloremque eos illum? Sunt, corrupti.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            esse, ipsa debitis placeat blanditiis, distinctio enim ea harum
            numquam natus aut dolores assumenda nemo atque. Expedita deserunt
            ipsam est quo maxime sequi nemo ea minima, unde suscipit autem quam,
            blanditiis, explicabo incidunt? Reprehenderit, ullam. Vero
            doloremque eos illum? Sunt, corrupti.
          </p>
        </div>
        <div className="px-4 sticky h-max top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="userImg.jpeg"
                className="w-12 h-12 rounded-full object-cover"
                w="48"
                h="48"
              />
              <Link className="text-blue-800">John Doe</Link>
            </div>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
            </div>
          </div>
          <PostMenuActions />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline" to="/test">
              All
            </Link>
            <Link className="underline" to="/test">
              Web Design
            </Link>
            <Link className="underline" to="/test">
              Development
            </Link>
            <Link className="underline" to="/test">
              Databases
            </Link>
            <Link className="underline" to="/test">
              Search Engines
            </Link>
            <Link className="underline" to="/test">
              Marketing
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default SinglePostPage;
