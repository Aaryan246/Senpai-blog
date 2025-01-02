const PostMenuActions = () => {
  return (
    <div className="">
      <h1 className="mt-8 mb-4 text-sm font-medium">Actions</h1>
      <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="20px"
          height="20px"
        >
          <path
            d="M12 4C10.3 4 9 5.3 9 7v34l15-9 15 9V7c0-1.7-1.3-3-3-3H12z"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
        <span>Save this post</span>
      </div>
      <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20px"
          height="20px"
          fill="none"
          stroke="red"
          strokeWidth="2"
        >
          <rect x="7" y="8" width="10" height="12" rx="1" ry="1" fill="red" />

          <line x1="6" y1="8" x2="18" y2="8" stroke="red" strokeWidth="2" />
          <rect x="9" y="4" width="6" height="2" rx="1" ry="1" fill="red" />

          <line
            x1="10"
            y1="10"
            x2="10"
            y2="18"
            stroke="white"
            strokeWidth="1.5"
          />
          <line
            x1="14"
            y1="10"
            x2="14"
            y2="18"
            stroke="white"
            strokeWidth="1.5"
          />
        </svg>

        <span>Save this post</span>
      </div>
    </div>
  );
};

export default PostMenuActions;
