import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import SendBtn from "../animations/SendBtn";

function SignIn(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const signCard = useRef();
    const signCardTitle = useRef();
    const signCardForm = useRef();
    const signBack = useRef();

    const handleSignIn = async () => {
        if(!email || !password) {
            return alert('Email va parolni to\'ldiring!');
        }

        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert('Kirish muvaffaqiyatli!');
            navigate('/chat')
        }catch (err){
            alert('Xatolik: ' + err.message);
        }
    }


    useEffect(() => {
        signCard.current.style.height = '100%';
        setTimeout(() => {
            signCardTitle.current.style.opacity = 1;
            signCardForm.current.style.opacity = 1;
            signBack.current.style.opacity = 1;
        }, 600);
    }, []);
    
    return <div className="h-full relative flex items-end">
        <NavLink to={'/'} ref={signBack} className="opacity-0 absolute text-[#3A9EDB] text-[22px] top-[22px] left-[22px] z-2 transition-all duration-100 active:scale-85">
            <i className="fa-solid fa-arrow-left"></i>
        </NavLink>
        <div ref={signCard} className="relative w-full h-[340px] transition-all duration-500 flex items-center justify-center overflow-hidden">
            <div ref={signCardTitle} className="flex opacity-0 absolute top-0 h-[250px] w-full flex-col justify-center items-center transition-all duration-200 selection:bg-white/0 cursor-context-menu">
                <h2 className="text-5xl font-semibold mb-[20px]">Log In</h2>
                <p className="text-center text-zinc-500 font-semibold text-[14px] tracking-[0.5px] leading-[17px]">Please create your password <br /> and save your memory</p>
            </div>
            
            <div className="absolute top-[250px] bg-[#3A9EDB] w-[1600px] h-[1600px] rounded-full flex justify-center">
                <div ref={signCardForm} className="opacity-0 w-[330px] h-[calc(100vh-250px)] flex flex-col items-center justify-center">
                    <label htmlFor="" className="text-white mb-1 tracking-[0.5px] selection:bg-white/0">Email</label>
                    <input type="email" placeholder="Enter your email" value={email} onChange={(e)=> setEmail(e.target.value)} className="bg-white/25 outline-none py-2 px-4 w-full text-center mb-5 rounded-[20px] shadow text-white placeholder:text-zinc-200" />

                    <label htmlFor="" className="text-white mb-1 tracking-[0.5px] selection:bg-white/0">Password</label>
                    <input type="password" placeholder="Create your password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-white/25 outline-none py-2 px-4 w-full text-center rounded-[20px] shadow text-white placeholder:text-zinc-200" />

                    <button onClick={handleSignIn} className="mt-5 text-[60px] w-full h-[60px] text-white shadow-md cursor-pointer rounded-full flex justify-center items-center transition-all duration-300 active:duration-150 active:scale-95">
                        <SendBtn title={'Log In'} />
                    </button>
                </div>
            </div>
            
        </div>
    </div>
}

export default SignIn;