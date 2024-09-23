import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function AuthSection() {
    const [fullName, setFullName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [formValidation, setFormValidation] = useState({ name: true, email: true, password: true });
    /*-------------------------*/
    const [passwordStrengthLevel, setPasswordStrengthLevel] = useState(true);
    const [isCardchange, setisCardchange] = useState(true);
    /*-------------------------*/
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [loginFormValidation, setLoginFormValidation] = useState({ email: true, password: true });
    const [credentialsMatch, setCredentialsMatch] = useState({ emailMatch: true, passwordMatch: true });
    const navigat = useNavigate()

    /*------------------- Handlers -------------------*/
    const handleFullNameChange = e => setFullName(e.target.value);
    const handleUserEmailChange = e => setUserEmail(e.target.value);
    const handleUserPasswordChange = e => setUserPassword(e.target.value);
    const handleLoginEmailChange = e => setLoginEmail(e.target.value);
    const handleLoginPasswordChange = e => setLoginPassword(e.target.value);

    /*----------------- Toggle ----------------*/
    const ChangeCrads = _ => isCardchange ? setisCardchange(false) : setisCardchange(true);

    /*----------------- Local Storage ----------------*/
    const users = JSON.parse(localStorage.getItem('users')) || [];
    // console.log(JSON.parse(localStorage.getItem('users')));

    /*----------------- Account Creation ----------------*/
    const createAccount = () => {
        setFormValidation({ name: fullName.trim() !== "", email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail.trim()), password: userPassword.length > 0 });

        if (!formValidation.name && !formValidation.email && !formValidation.password) {
            return;
        }

        if (users.some(info => info.userEmail == userEmail || info.userPassword == userPassword)) {
            alert('Cet compt est déjà utilisé !');
            return;
        }

        users.push({ fullName, userEmail, userPassword, reservations: [] });
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUserEmail', userEmail);
        alert('Compte créé avec succès !');

        setFullName('');
        setUserEmail('');
        setUserPassword('');
        setPasswordStrengthLevel(true);
    };

    /*------------------- Login Validation -------------------*/
    const validateLogin = () => {
        setLoginFormValidation({ email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginEmail.trim()), password: loginPassword.length > 0, });

        if (!loginFormValidation.email || !loginFormValidation.password) {
            return;
        }
        if (users.some(info => info.userEmail == loginEmail && info.userPassword == loginPassword)) {
            setCredentialsMatch({ emailMatch: true, passwordMatch: true });
            localStorage.setItem('currentUserEmail', loginEmail);
            navigat('/Register')
            return;
        } else {
            setCredentialsMatch({ emailMatch: false, passwordMatch: false });
        }
    };

    /*------------------- Password Strength Check -------------------*/
    useEffect(() => {
        switch (userPassword.length) {
            case 3:
                setPasswordStrengthLevel('Weak');
                break;
            case 6:
                setPasswordStrengthLevel('Medium');
                break;
            case 10:
                setPasswordStrengthLevel('Strong');
                break;
            default:
                break;
        }
    }, [userPassword]);
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
                    <h1 className={`text-lg ${!isCardchange ? 'flex' : 'hidden'}`}>Sign Up</h1>
                    <h1 className={`text-lg ${isCardchange ? 'flex' : 'hidden'}`}>Sign In</h1>
                </div>
            </div>
            <div className="w-full lg:w-[45%] h-full lg:h-full flex justify-center items-center">
                {/* <!-- Login --> */}
                <div className={`w-full sm:w-4/6 lg:w-5/6 h-4/6 lg:h-5/6 lg:py-28 px-4 xl:px-20 ${!isCardchange ? 'flex' : 'hidden'}`}>
                    <div className="w-full h-full flex flex-col items-center justify-center lg:justify-start gap-8 lg:gap-5">
                        <div className="flex flex-col items-center gap-2">
                            <h1 className="text-4xl font-bold">Sign Up</h1>
                            <p className="text-gray">Sign Up to explore our hotel offers.</p>
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
                                Sign Up
                            </button>
                            <h1>Don't have an account?<span className="ml-1 text-gray cursor-pointer" onClick={ChangeCrads}>Sign In</span></h1>
                        </div>
                    </div>
                </div>
                {/* <!-- Sign In --> */}
                <div className={`w-full sm:w-4/6 lg:w-5/6 h-4/6 lg:h-5/6 lg:py-28 px-4 xl:px-20 ${isCardchange ? 'flex' : 'hidden'}`}>
                    <div className="w-full h-full flex flex-col items-center justify-center lg:justify-start gap-8 lg:gap-5">
                        <div className="flex flex-col items-center gap-2">
                            <h1 className="text-4xl font-bold">Sign In</h1>
                            <p className="text-gray">Sign in to explore our hotel offers.</p>
                        </div>
                        <div className="w-full flex flex-col items-center gap-1">
                            {/* <!-- Full Name Sign In --> */}
                            <input type="text" className={`w-full rounded-lg px-5 py-3 border border-transparent`} placeholder="Full Name" value={fullName} onChange={handleFullNameChange} />
                            {!formValidation.name && (
                                <div className="w-1/2 lg:w-full flex items-center gap-1 text-red-500">

                                    <i className='bx bx-error-circle'></i>
                                    <h1 className="w-full text-sm">Enter your full name</h1>
                                </div>
                            )}
                            {/* <!-- Email Sign In --> */}
                            <input type="email" className="w-full rounded-lg px-5 py-3 mt-1" placeholder="Email" value={userEmail} onChange={handleUserEmailChange} />
                            {!formValidation.email && (
                                <div className="w-1/2 lg:w-full flex items-center gap-1 text-red-500">
                                    <i className='bx bx-error-circle'></i>
                                    <h1 className="w-full text-sm">Enter a valid email</h1>
                                </div>
                            )}
                            {/* <!-- Password Sign In --> */}
                            <input type="password" className="w-full rounded-lg px-5 py-3 mt-1" placeholder="Password" value={userPassword} onChange={handleUserPasswordChange} />
                            <div className="w-full flex justify-between gap-2">
                                {!formValidation.password && (
                                    <div className="w-1/2 lg:w-full flex items-center gap-1 text-red-500">
                                        <i className='bx bx-error-circle'></i>
                                        <h1 className="w-full text-sm">Enter a valid password</h1>
                                    </div>
                                )}
                                <div className={`flex items-center gap-1 text-red-500 ${passwordStrengthLevel === 'Weak' ? 'flex' : "hidden"}`}>
                                    <i className='bx bx-error'></i>
                                    <h1 className="w-full">Weak</h1>
                                </div>
                                <div className={`flex items-center gap-1 text-yellow-500 ${passwordStrengthLevel === 'Medium' ? 'flex' : "hidden"}`}>
                                    <i className='bx bx-search-alt-2'></i>
                                    <h1 className="w-full">Medium</h1>
                                </div>
                                <div className={`flex items-center gap-1 text-green-500 ${passwordStrengthLevel === 'Strong' ? 'flex' : "hidden"}`}>
                                    <i className='bx bx-check-shield'></i>
                                    <h1 className="w-full">Strong</h1>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-col items-center gap-3">
                            <button className="w-full py-3 text-lg bg-black text-white rounded-xl duration-500 hover:bg-green-500" onClick={createAccount}>
                                Sign In
                            </button>
                            <h1>Already have an account?<span className="ml-1 text-gray cursor-pointer" onClick={ChangeCrads}>Sign Up</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
