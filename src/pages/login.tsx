import indeedLogo from '../assets/logos/indeed-logo.svg';
import googleLogo from '../assets/logos/google.svg';
import githubLogo from '../assets/logos/github.svg';

function Login() {
  return (
    <div className=" w-full h-screen pt-20 flex flex-col bg-gray-100 justify-start items-center">
      <img src={indeedLogo} width={145} height={38} alt={'logo'} />

      <div className="w-[31%] h-4/5 mt-8 border border-gray-400 flex flex-col justify-start items-start bg-white rounded-lg">
        <h1 className="mx-5 mt-7 text-xl font-bold">
          Ready to take the next step?
        </h1>
        <p className="text-lg mx-5 my-2">Create an account or sign in.</p>
        <p className="text-xs mx-5">
          By creating an account or logging in, you understand and agree to{' '}
          {"Indeed's"} Terms. You also acknowledge our Cookie and Privacy
          policies.
        </p>
        <div
          className="flex items-center w-11/12 h-12 rounded-lg mx-auto text-center border-gray-300 border mt-5 justify-center cursor-pointer hover:bg-slate-100 transition-all"
          // onClick={() => signIn('google')}
        >
          <div className="mt-[0.32rem] ml-5">
            <img src={googleLogo} width={20} height={20} alt={'logo'} />
          </div>
          <p className="mx-auto pr-14 font-semibold">Sign in with Google</p>
        </div>
        <div
          className="flex items-center w-11/12 h-12 rounded-lg mx-auto text-center border-gray-300 border mt-5 justify-center cursor-pointer hover:bg-slate-100 transition-all"
          // onClick={() => signIn('github')}
        >
          <div className="mt-[0.32rem] ml-5">
            <img src={githubLogo} width={20} height={20} alt={'logo'} />
          </div>
          <p className="mx-auto pr-14 font-semibold">Sign in with Github</p>
        </div>
        {/* <div className="flex items-center w-11/12 h-12 rounded-lg mx-auto text-center border-gray-300 border mt-5 justify-center cursor-pointer hover:bg-slate-100 transition-all">
            <div className="mt-[0.32rem] ml-5">
              <Image src="/facebook.svg" width={20} height={20} alt={'logo'} />
            </div>
            <p className="mx-auto pr-14 font-semibold">Sign in with Facebook</p>
          </div>

          <div className="font-mt_black mt-8 border-b border-b-slate-300 leading-[0.01em] text-center mx-auto w-11/12 text-sm">
            <span className="bg-white w-1/2 px-4 text-slate-700">or</span>
          </div>

          <div className="font-bold text-lg mx-5 mt-5">Email Address</div>
          <input
            type="text"
            className="mx-5 w-11/12 h-10 rounded-lg border-gray-800 border mt-2"
          />
          <button className="mx-5 w-11/12 h-12 rounded-lg  flex my-4  justify-center items-center bg-blue-700 text-white hover:bg-blue-900 transition-all font-bold focus:outline-hidden ">
            Continue <ImArrowRight2 className="ml-2 mt-1 fill-white" />
          </button> */}
      </div>
    </div>
  );
}

export default Login;
