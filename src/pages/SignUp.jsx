import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import SendBtn from "../animations/SendBtn";

function SignUp(){
    const signCard = useRef();
    const signCardTitle = useRef();
    const signCardForm = useRef();
    const signBack = useRef();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        signCard.current.style.height = '100%';
        setTimeout(() => {
            signCardTitle.current.style.opacity = 1;
            signCardForm.current.style.opacity = 1;
            signBack.current.style.opacity = 1;
        }, 600);
    }, []);

    const handleSignUp = async () => {
        if(!email || !password) {
            return alert("Email va parol to'ldirilmagan!");
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Ro'yxatdan o'tdingiz!");
            navigate('/chat');
        }catch (err){
            alert('Xatolik: ' + err.message);
        }
    }
    
    return <div className="h-full relative flex items-end">
        <NavLink to={'/'} ref={signBack} className="opacity-0 absolute text-[#3A9EDB] text-[22px] top-[22px] left-[22px] z-2 transition-all duration-100 active:scale-85">
            <i className="fa-solid fa-arrow-left"></i>
        </NavLink>
        <div ref={signCard} className="relative w-full h-[340px] transition-all duration-500 flex items-center justify-center overflow-hidden">
            <div ref={signCardTitle} className="flex opacity-0 absolute top-0 h-[250px] w-full flex-col justify-center items-center transition-all duration-200 selection:bg-white/0 cursor-context-menu">
                <h2 className="text-5xl font-semibold mb-[20px]">Sign Up</h2>
                <p className="text-center text-zinc-500 font-semibold text-[14px] tracking-[0.5px] leading-[17px]">
                    Agar avval ro'yxatdan o'tgan bo'lsangiz <br /> <b>Log In</b> ga o'ting
                </p>
            </div>
            
            <div className="absolute top-[250px] bg-[#3A9EDB] w-[1600px] h-[1600px] rounded-full flex justify-center">
                <div ref={signCardForm} className="opacity-0 w-[330px] h-[calc(100vh-250px)] flex flex-col items-center justify-center">
                    <label htmlFor="" className="text-white mb-1 tracking-[0.5px] selection:bg-white/0">Email</label>
                    <input type="email" placeholder="Enter your email" value={email} onChange={(e)=> setEmail(e.target.value)} className="bg-white/25 outline-none py-2 px-4 w-full text-center mb-5 rounded-[20px] shadow text-white placeholder:text-zinc-200" />

                    <label htmlFor="" className="text-white mb-1 tracking-[0.5px] selection:bg-white/0">Password</label>
                    <input type="password" placeholder="Create your password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-white/25 outline-none py-2 px-4 w-full text-center rounded-[20px] shadow text-white placeholder:text-zinc-200" />

                    
                    {/* <NavLink to="/signin" className="mt-3 text-white underline">
                        <LogInAni />
                    </NavLink> */}

                    <button onClick={handleSignUp} className="mt-5 text-[60px] w-full h-[60px] text-white shadow-md cursor-pointer rounded-full flex justify-center items-center transition-all duration-300 active:duration-150 active:scale-95">
                        <SendBtn title={'Sign Up'} />
                    </button>

                    <NavLink to={'/signin'} className="mt-3 font-semibold text-[17px]">👉🏻 Log in 👈🏻</NavLink>
                </div>
            </div>
            
        </div>
    </div>
}

export default SignUp;