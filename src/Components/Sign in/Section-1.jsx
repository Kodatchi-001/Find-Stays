import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Sign_In() {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [loginFormValidation, setLoginFormValidation] = useState({ email: true, password: true });
    const [credentialsMatch, setCredentialsMatch] = useState({ emailMatch: true, passwordMatch: true });
    const navigat = useNavigate();

    /*------------------- Handlers -------------------*/
    const handleLoginEmailChange = e => setLoginEmail(e.target.value);
    const handleLoginPasswordChange = e => setLoginPassword(e.target.value);

    /*----------------- Local Storage ----------------*/
    const users = JSON.parse(localStorage.getItem('users')) || [];
    /*------------------- Login Validation -------------------*/
    const validateLogin = () => {
        setLoginFormValidation({
            email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginEmail.trim()),
            password: loginPassword.length > 0,
        });
        if (!loginFormValidation.email || !loginFormValidation.password) { return }
        if (users.some(info => info.userEmail == loginEmail && info.userPassword == loginPassword)) {
            setCredentialsMatch({ emailMatch: true, passwordMatch: true });
            localStorage.setItem('currentUserEmail', loginEmail);
            navigat('/Register')
            setLoginEmail('')
            setLoginPassword('')
            return;
        } else {
            setCredentialsMatch({ emailMatch: false, passwordMatch: false });
        }
    };
    return (
        <section className="w-full h-screen flex p-2 items-center flex-col lg:flex-row bg-gray relative">
            <div className="w-[55%] h-full bg-login rounded-2xl lg:flex hidden"></div>
            <div className="w-full h-[8.5vh] flex items-center gap-5 px-4 lg:hidden absolute mt-4">
                <Link to="/">
                    <i class='bx bx-chevron-left p-2 text-[1.3rem] font-bold cursor-pointer hover:bg-black hover:text-white border border-[#a5a5a5] rounded-full'></i>
                </Link>
                <div className="w-full h-full flex items-center gap-2">
                    <h1 className="text-lg text-[#a5a5a5]">Home</h1>
                    <div className="p-[0.4rem] scale-50 bg-black rounded-full"></div>
                    <h1 className={`text-lg`}>Sign In</h1>
                </div>
            </div>
            <div className="w-full lg:w-[45%] h-full lg:h-full flex justify-center items-center">
                {/* <!-- Login --> */}
                <div className={`w-full sm:w-4/6 lg:w-5/6 h-4/6 lg:h-5/6 lg:py-28 px-4 xl:px-20`}>
                    <div className="w-full h-full flex flex-col items-center justify-center lg:justify-start gap-8 lg:gap-5">
                        <div className="flex flex-col items-center gap-2">
                            <h1 className="text-4xl font-bold">Sign In</h1>
                            <p className="text-gray">Sign In to explore our hotel offers.</p>
                        </div>
                        <div className="w-full flex flex-col items-center gap-1">
                            {/* <!-- Email Login --> */}
                            <input type="email" className="w-full rounded-lg px-5 py-3 mt-1" placeholder="Email" value={loginEmail} onChange={handleLoginEmailChange} />
                            <div className="w-full flex gap-3">
                                {!loginFormValidation.email && (
                                    <div className="flex items-center gap-1 text-red-500">
                                        <i className='bx bx-error-circle'></i>
                                        <h1 className="w-full text-sm">Enter a valid email</h1>
                                    </div>
                                )}
                                {loginFormValidation.email ? !credentialsMatch.emailMatch && (
                                    <div className="flex items-center gap-1 text-red-500">
                                        <i className='bx bx-error-circle'></i>
                                        <h1 className="w-full text-sm">Email not found</h1>
                                    </div>
                                ) : null}
                            </div>
                            {/* <!-- Password Login --> */}
                            <input type="password" className="w-full rounded-lg px-5 py-3 mt-1" placeholder="Password" value={loginPassword} onChange={handleLoginPasswordChange} />
                            <div className="w-full flex gap-3">
                                {!loginFormValidation.password && (
                                    <div className="flex items-center gap-1 text-red-500">
                                        <i className='bx bx-error-circle'></i>
                                        <h1 className="w-full text-sm">Enter a valid password</h1>
                                    </div>
                                )}
                                {loginFormValidation.password ? !credentialsMatch.passwordMatch && (
                                    <div className="flex items-center gap-1 text-red-500">
                                        <i className='bx bx-error-circle'></i>
                                        <h1 className="w-full text-sm">Password not found</h1>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                        <div className="w-full flex flex-col items-center gap-3">
                            <button className="w-full py-3 text-lg bg-black text-white rounded-xl duration-500 hover:bg-green-500" onClick={validateLogin}>
                                Sign In
                            </button>
                            <Link to="/Sign-Up">Don't have an account?<span className="ml-1 text-gray cursor-pointer">Sign Up</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
