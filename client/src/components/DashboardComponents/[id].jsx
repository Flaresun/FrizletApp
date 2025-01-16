import React, { useContext, useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import { AppContent } from '../../context/AppContext';
import { toast } from 'react-toastify';
import LeftPanel from '../../components/DashboardComponents/LeftPanel';
import Navbar from '../../components/DashboardComponents/Navbar';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import DeleteFlashcardModal from './utils/DeleteFlashcardModal';
import "./FlashcardFlip.css";
const id = () => {

    const params = new URLSearchParams(window.location.search);
    const [flashcardId,setFlashcardId] = useState(params.get('q'));
    const [flashcardData, setFlashcardData] = useState([])
    const navigate = useNavigate();
    const {backendUrl,userData} = useContext(AppContent);
    const itemSize = 30; 
    const {leftPanel,setLeftPanel} = useContext(AppContent);
    const [start, setStart] = useState(1);
    const [showTerms, setShowTerms] = useState(false);
    const [isFlashcardFront, setIsFlashccardFront] = useState(true);
    const [menu, setMenu] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    addEventListener("resize", (e) => {
        if (e.target.innerWidth > 768) {
        setLeftPanel(false);
        }
    });
    const {email} = userData;

    useEffect(() => {
        setInterval(async() => {
            try {
                const time = 1/60
                const {data} = await axios.post(backendUrl + "/api/user/add-hour-time-by-email",{email,time})
            } catch (error) {
                console.log(error);
            }            
        },1000*60*1) // Every 1 minutes on this page, save the time 
    },[])
   

    const getDataById = async () => {
        if (!flashcardId) return;

        try {
            const {data} = await axios.post(backendUrl + "/api/user/get-flashcards-by-id", {flashcardId})
            if (!data) toast.error("Data not found");
            if (!data.success) throw new Error("Flashcard Not Found")                
            setFlashcardData(data.data);
            // Update the last opened date 

            const updateResult = await axios.post(backendUrl + "/api/user/update-last-opened-date", {flashcardId})
        } catch (error) {
            toast.error(error.message);
            navigate("../dashboard")
            
        }
    }

    addEventListener("mousedown", (e) => {
        !e.target.classList.contains("modal") && !(e.target.nodeName === "path") && setMenu(false) 
    })

    const toggleSlide = (value) => {
        if (start === 1 && value===-1) return;
        if (start === flashcardData.terms.length && value===1) return
        setStart((prev) => prev+value);
        setIsFlashccardFront(true);


        // Animation
        const divElement = document.getElementById('card-flip')
        if (value ===1) {
            // Right animation
            divElement.classList.add('translate-x-[100px]')
            setTimeout(() => {
                divElement.classList.remove('translate-x-[100px]');
            },50)
        } else {
            // Left animation
            divElement.classList.add('translate-x-[-100px]')
            setTimeout(() => {
                divElement.classList.remove('translate-x-[-100px]');
            },50)
        }

    }
    
    useEffect(() => {
        getDataById();
    },[flashcardId])

    if (flashcardData.length === 0) return;
    return (
        <div className='flex px-[2rem] lg:px-[3rem] p-[3rem] lg:p-[2rem] dark:text-slate-300 '>

            <div className="sticky top-0 hidden md:flex items-center justify-between mr-10 ">
                <LeftPanel/>
            </div>            

            {deleteModal && 
                <DeleteFlashcardModal openModal = {deleteModal} setOpenModal={setDeleteModal} flashcardId={flashcardData._id}/>
            }
            
            <div className="flex flex-col w-full max-h-full">
                <Navbar search={false} message={false}/> 
                {leftPanel ? 
                    <div id="panel" className=" h-[93vh] flex md:hidden items-center justify-center max-w-full"><LeftPanel /> </div>
                    
                : 
                    (
                    <div className="flex flex-col items-center justify-center ">

                        <div className="flex items-center justify-around w-full text-center mt-5 sm:mt-0 mb-10">
                            <h1 className="flex items-center justify-center text-2xl sm:text-4xl">{flashcardData.title}</h1>
                            <div onClick={() => setMenu((prev) => !prev)} className="flex cursor-pointer relative">
                                <RxHamburgerMenu size={itemSize} className='modal'/>
                                
                                {menu && (
                                    <div className="modal flex flex-col absolute bg-slate-500 top-10 px-4 py-2 left-[-60px] sm:left-[-40px] rounded-md items-start text-slate-300 z-[8]">
                                        <div onClick={() => setDeleteModal((prev) => !prev)} className="modal w-full flex flex-row items-center justify-around text-center cursor-pointer p-2 hover:bg-slate-400 rounded-md text-red-500">
                                            <MdDelete size={20} className='modal '/>
                                            <p className="modal  ml-5 ">Delete</p>
                                        </div>
                                        <div onClick={() => navigate(`../edit-flashcards/id?q=${flashcardData._id}`)} className="modal  w-full flex flex-row items-center justify-around text-center cursor-pointer p-2 hover:bg-slate-400 rounded-md ">
                                            < MdEdit className='modal '/>
                                            <p className="modal  ml-5">Edit</p>
                                        </div>
                                    </div>
                                )}

                            </div>
                            
                        </div>

                         {/** MAIN CONTENT */}
                        <div className="flip-card flex w-full items-center justify-center sm:w-2/3 h-full">
                            <div onClick={() => setIsFlashccardFront((prev) => !prev)} id='card-flip' className={`flip-card-inner flex w-full h-[50vh] rounded-md dark:bg-slate-400  dark:bg-opacity-20 shadow-lg  ease-in-out`}>
                                {isFlashcardFront ? (
                                <div className="relative  flex h-full items-center justify-center text-center text-4xl w-full cursor-pointer ">
                                    <p className="text-sm absolute top-0 left-0 p-2" >Front</p>
                                    <h1 className="">{flashcardData.terms[start-1]}</h1>
                                </div>
                                ) : (
                                <div className="card-back flex items-center justify-center text-center text-4xl w-full cursor-pointer ">
                                    <h1 className="">{flashcardData.definitions[start-1]}</h1>
                                </div>
                                )}

                            </div>
                        </div>
                        <div className="flex items-center my-10">
                            <button onClick={() => toggleSlide(-1)} className="left-arrow flex border rounded-full px-4 py-2 cursor-pointer hover:bg-slate-400 active:scale-95 transition-all"><FaArrowLeft size={itemSize}/></button>
                            <div className="flex px-5 text-xl font-semibold">
                                <h1 className="">{start}/{flashcardData.terms.length}</h1>
                            </div>
                            <button onClick={() => toggleSlide(1)} className="right-arrow flex border rounded-full px-4 py-2 cursor-pointer hover:bg-slate-400 active:scale-95 transition-all"><FaArrowRight size={itemSize}/></button>      
                        </div>

                        <div className="flex  my-10">
                            <button onClick={() => setShowTerms((prev) => !prev)} className="bg-slate-300 hover:bg-slate-200 dark:bg-slate-600 px-4 py-2 rounded-md hover:dark:bg-slate-500 active:scale-95 transition-all">Show Terms</button>
                        </div>


                    {showTerms && (

                        <div className="flex flex-col">
                            {new Array(flashcardData.terms.length).fill(0).map((value, index) => (
                            <div key={index} className="flex bg-slate-300 dark:bg-slate-500 items-center font-medium text-center w-[70vw] mb-5 rounded-md">
                                <div className="flex w-1/3 sm:w-1/5 p-2">{flashcardData.terms[index]}</div>
                                <div className="h-10 w-[1px] bg-slate-900"></div>
                                <div className="flex w-2/3 sm:w-2/3 p-2">{flashcardData.definitions[index]}</div>
                             </div>  
                            ))}
                                                     
                        </div>
                    )}

                        
                       

                        
                    
                    </div>
                    )
                
                }
                
            </div>     
        </div>
    )
}

export default id