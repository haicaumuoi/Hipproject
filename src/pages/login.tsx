import indeedLogo from '../assets/logos/logo.png';
import googleLogo from '../assets/logos/google.svg';
import githubLogo from '../assets/logos/github.svg';

function Login() {
  return (
    <div className=" w-full h-screen pt-20 flex flex-col bg-gray-100 justify-start items-center">
      <img src={indeedLogo} alt={'logo'} className="w-20" />

      <div className="w-[31%] h-fit pb-10 mt-8 border border-gray-400 flex flex-col justify-start items-start bg-white rounded-lg">
        <h1 className="mx-5 mt-7 text-xl font-bold">
          Ready to take the next step?
        </h1>
        <p className="text-lg mx-5 my-2">Create an account or sign in.</p>
        <p className="text-xs mx-5">
          By creating an account or logging in, you understand and agree to{' '}
          {"Hipproject's"} Terms. You also acknowledge our Cookie and Privacy
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
      </div>
    </div>
  );
}

export default Login;
