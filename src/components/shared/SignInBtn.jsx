import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SignInBtn = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      {user ? (
        <div className="flex gap-2 items-center">
          <span className="text-gray-400">
            hello, {`${user.name.substring(0, 12)}...`}
          </span>
        </div>
      ) : (
        <Link to="/signin">
          Hello,{" "}
          <span className="font-bold hover:text-primary duration-200">
            sign in
          </span>
        </Link>
      )}
    </>
  );
};

export default SignInBtn;
