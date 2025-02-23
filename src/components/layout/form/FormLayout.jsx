import { Link } from "react-router-dom";
import logo from "../../../assets/darkLogo.png";
import { MdPlayArrow } from "react-icons/md";

const FormLayout = ({ children, signIn }) => {
  return (
    <div className="m-3 h-[calc(100vh-24px)] flex flex-col gap-6 items-center justify-center">
      <img src={logo} alt="dark logo" className="w-32" />
      <div className="w-full sm:w-[500px] border border-black/10 rounded-md p-5 flex gap-3 flex-col items-center justify-center shadow-sm">
        <div className="self-start font-semibold text-3xl mb-3">
          {signIn ? "Sign In" : "Create Account"}
        </div>

        {children}

        <div className="font-medium">
          {signIn ? (
            <p>
              Don&apos;t have an account ?{" "}
              <Link to="/signup" className="text-primary">
                Sign Up
              </Link>
            </p>
          ) : (
            <p>
              Already have an account ?{" "}
              <Link to="/signin" className="text-primary">
                Sign In
              </Link>
            </p>
          )}
        </div>

        <div className="font-medium">
          <span>By continuing, you agree to Amazon’s </span>
          <span className="text-secondary underline cursor-pointer">
            Conditions of Use and Privacy Notice
          </span>
        </div>

        <div className="pb-5 border-b border-black/10 w-full flex items-center self-start gap-1 cursor-pointer">
          <MdPlayArrow />
          <span className="text-secondary font-medium">Need help?</span>
        </div>

        <div className="w-full self-start">
          <p className="font-semibold">Buying for work?</p>
          <p className="text-secondary font-medium">Shop on Amazon Business</p>
        </div>
      </div>
      <hr className="w-full border-0 h-[3px] bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-4 text-secondary font-medium">
          <p className="text-sm">Conditions of Use</p>
          <p className="text-sm">Privacy Notice</p>
          <p className="text-sm">Help</p>
        </div>
        <p className="text-sm">
          © 1996-2023, Amazon.com, Inc. or its affiliates
        </p>
      </div>
    </div>
  );
};

export default FormLayout;
