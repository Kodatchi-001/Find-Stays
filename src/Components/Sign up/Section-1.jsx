import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Sign_Up() {
    const [fullName, setFullName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [formValidation, setFormValidation] = useState({ name: true, email: true, password: true });
    const [PasswordStrengthLevel, setPasswordStrengthLevel] = useState(true)
    /*-------------------------*/
    const navigat = useNavigate();
    /*------------------- Handlers -------------------*/
    const handleFullNameChange = e => setFullName(e.target.value);
    const handleUserEmailChange = e => setUserEmail(e.target.value);
    const handleUserPasswordChange = e => setUserPassword(e.target.value);
    /*----------------- Local Storage ----------------*/
    const users = JSON.parse(localStorage.getItem('users')) || [];

    /*----------------- Account Creation ----------------*/
    const createAccount = () => {
        setFormValidation({
            name: fullName.trim() !== "",
            email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail.trim()),
            password: userPassword.length > 0
        });
        if (!formValidation.name && !formValidation.email && !formValidation.password) { return }
        if (users.find(info => info.userEmail == userEmail)) {
            alert('Cet compte est déjà utilisé !');
            return;
        }
        users.push({ fullName, userEmail, userPassword, reservations: [] });
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUserEmail', userEmail);
        navigat('/Register')
        setFullName('');
        setUserEmail('');
        setUserPassword('');
        setPasswordStrengthLevel(true);
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
                    <h1 className={`text-lg`}>Sign Up</h1>
                </div>
            </div>
            <div className="w-full lg:w-[45%] h-full lg:h-full flex justify-center items-center">
                {/* <!-- Sign In --> */}
                <div className={`w-full sm:w-4/6 lg:w-5/6 h-4/6 lg:h-5/6 lg:py-28 px-4 xl:px-20`}>
                    <div className="w-full h-full flex flex-col items-center justify-center lg:justify-start gap-8 lg:gap-5">
                        <div className="flex flex-col items-center gap-2">
                            <h1 className="text-4xl font-bold">Sign Up</h1>
                            <p className="text-gray">Sign Up to explore our hotel offers.</p>
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
                                <div className={`flex items-center gap-1 text-red-500 ${PasswordStrengthLevel === 'Weak' ? 'flex' : "hidden"}`}>
                                    <i className='bx bx-error'></i>
                                    <h1 className="w-full">Weak</h1>
                                </div>
                                <div className={`flex items-center gap-1 text-yellow-500 ${PasswordStrengthLevel === 'Medium' ? 'flex' : "hidden"}`}>
                                    <i className='bx bx-search-alt-2'></i>
                                    <h1 className="w-full">Medium</h1>
                                </div>
                                <div className={`flex items-center gap-1 text-green-500 ${PasswordStrengthLevel === 'Strong' ? 'flex' : "hidden"}`}>
                                    <i className='bx bx-check-shield'></i>
                                    <h1 className="w-full">Strong</h1>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-col items-center gap-3">
                            <button className="w-full py-3 text-lg bg-black text-white rounded-xl duration-500 hover:bg-green-500" onClick={createAccount}>
                                Sign Up
                            </button>
                            <Link to="/Sign-in">Already have an account?<span className="ml-1 text-gray cursor-pointer">Sign In</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
