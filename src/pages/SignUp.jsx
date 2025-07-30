import { useEffect, useRef } from "react";

function SignUp(){
    const signCard = useRef();
    const signCardTitle = useRef();
    const signCardForm = useRef()

    useEffect(() => {
        signCard.current.style.height = '100%';
        setTimeout(() => {
            signCardTitle.current.style.opacity = 1;
            signCardForm.current.style.opacity = 1;
        }, 600);
    }, [])
    
    return <div className="h-full relative flex items-end">
        <div ref={signCard} className="relative w-full h-[340px] transition-all duration-500 flex items-center justify-center overflow-hidden">
            <div ref={signCardTitle} className="flex opacity-0 absolute top-0 h-[250px] w-full flex-col justify-center items-center transition-all duration-200 selection:bg-white/0 cursor-context-menu">
                <h2 className="text-5xl font-semibold mb-[20px]">Your Email</h2>
                <p className="text-center text-zinc-500 font-semibold text-[14px] tracking-[0.5px] leading-[17px]">Please create your password <br /> and save your memory</p>
            </div>

            <div ref={signCardForm} className="opacity-0 flex border w-full absolute bottom-0 h-[calc(100vh-250px)] flex-col items-center justify-center gap-[5px] text-white">
                {/* <label htmlFor="" className="text-white/60 tracking-[0.5px] selection:bg-white/0">Email</label>
                <input type="email" placeholder="Enter your email" className="bg-white/25 outline-none py-2 px-4 w-[70%] text-center mb-5 rounded-[20px] shadow text-white placeholder:text-zinc-200" />

                <label htmlFor="" className="text-white/60 tracking-[0.5px] selection:bg-white/0">Password</label>
                <input type="password" placeholder="Create your password" className="bg-white/25 outline-none py-2 px-4 w-[70%] text-center mb-5 rounded-[20px] shadow text-white placeholder:text-zinc-200" />

                <button className="text-[60px] w-[60px] h-[60px] text-white shadow-md cursor-pointer rounded-full flex justify-center items-center transition-all duration-300 active:duration-150 active:scale-95">
                    <i className="fa-brands fa-telegram"></i>
                </button> */}
            </div>
            
            <div className="absolute flex flex-col items-center top-[250px] z-[-1] bg-[#3A9EDB] w-[1600px] h-[1600px] rounded-full pt-20">
                <label htmlFor="" className="text-white/60 tracking-[0.5px] selection:bg-white/0">Email</label>
                <input type="email" placeholder="Enter your email" className="bg-white/25 outline-none py-2 px-14 text-center mb-5 rounded-[20px] shadow text-white placeholder:text-zinc-200" />

                <label htmlFor="" className="text-white/60 tracking-[0.5px] selection:bg-white/0">Password</label>
                <input type="password" placeholder="Create your password" className="bg-white/25 outline-none py-2 px-14 text-center mb-5 rounded-[20px] shadow text-white placeholder:text-zinc-200" />

                <button className="text-[60px] w-[60px] h-[60px] text-white shadow-md cursor-pointer rounded-full flex justify-center items-center transition-all duration-300 active:duration-150 active:scale-95">
                    <i className="fa-brands fa-telegram"></i>
                </button>
            </div>

        </div>
    </div>
}

export default SignUp;