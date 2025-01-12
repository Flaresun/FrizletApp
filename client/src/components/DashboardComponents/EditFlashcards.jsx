import React, { useContext, useState, useEffect } from 'react'
import LeftPanel from '../../components/DashboardComponents/LeftPanel'
import Navbar from '../../components/DashboardComponents/Navbar'
import { AppContent } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { FaRegTrashCan } from "react-icons/fa6";
import {toast} from "react-toastify";
import axios from "axios"

const EdtFlashcards = () => {


    const [cardArray, setCardArray] = useState(new Array(5));
    const [deletedCards, setDeletedCards] = useState([])
    let cardIndexCount = 0;

    const {leftPanel,setLeftPanel, backendUrl, userData} = useContext(AppContent);

    const params = new URLSearchParams(window.location.search);
    const [flashcardId,setFlashcardId] = useState(params.get('q'));
    const [flashcardData, setFlashcardData] = useState([])
    const navigate = useNavigate();

    const getDataById = async () => {

        if (!flashcardId) return;

        try {
            const {data} = await axios.post(backendUrl + "/api/user//get-flashcards-by-id", {flashcardId})
            if (!data) toast.error("Data not found");
            if (!data.success) throw new Error("Flashcard Not Found")
            setFlashcardData(data.data);
        } catch (error) {
            toast.error(error.message);
            navigate("../dashboard")
            
        }
    }
      
    addEventListener("resize", (e) => {
        if (e.target.innerWidth > 768) {
        setLeftPanel(false);
        }
    });

    setTimeout(() => {
        document.querySelectorAll("#termTextArea").forEach((e) => {
        e.style.height = `${e.scrollHeight}px`
        e.addEventListener("input", (event)=> {
            if (event.inputType === "deleteContentBackward" || event.inputType === "deleteContentForward") {
            event.target.style.height = "50%";
            }
            event.target.style.height = `${event.target.scrollHeight}px`
            
        })
        })
    },500)

    setTimeout(() => {
        document.querySelectorAll("#defTextArea").forEach((e) => {
        e.style.height = `${e.scrollHeight}px`
        e.addEventListener("input", (event)=> {
            if (event.inputType === "deleteContentBackward" || event.inputType === "deleteContentForward") {
            event.target.style.height = "50%";
            }
            event.target.style.height = `${event.target.scrollHeight}px`
            
        })
        })
    },500)

    setTimeout(() => {
        document.querySelectorAll("#cardDesc").forEach((e) => {
        e.style.height = `${e.scrollHeight}px`
        e.addEventListener("input", (event)=> {
            if (event.inputType === "deleteContentBackward" || event.inputType === "deleteContentForward") {
            event.target.style.height = "50%";
            }
            event.target.style.height = `${event.target.scrollHeight}px`
            
        })
        })
    },500)
    


    const addCard = () => {
        setCardArray((prev) => new Array(prev.length +1))
    }
    const deleteCard = (key) => {
        setDeletedCards([...deletedCards, parseInt(key)])
        cardIndexCount +=1
        //setCardArray((prev) => prev.filter((_,index) => index !== key ))
    }

    let skipped = 0;
    const numSkipped = (index) => {
        if (deletedCards.includes(index)) {
        skipped +=1
        return false
        }
        return true
    }

    const updateCards = async () => {
        // Check that the user has elements in these values before creating 
        const title = document.querySelectorAll("#cardTitle")[0].value;
        const description = document.querySelectorAll("#cardDesc")[0].value;
        const terms = []
        const definitions = []

        // Get and Validate the data needed to create flashcard
        document.querySelectorAll("#termTextArea").forEach((value,i) => {
        if (value.value !== "") terms.push(value.value)
        })
        document.querySelectorAll("#defTextArea").forEach((value,i) => {
        if (value.value !== "") definitions.push(value.value)
        })

        if (!title || !description) {
        return toast.error("Title & Description Required")
        }
        if (terms.length ===0 || definitions.length === 0 ) {
        return toast.error("At least one Term and Definition Required")
        }

        try {
            const {data} = await axios.post(backendUrl + "/api/user/update-flashcard-by-id", {flashcardId, title, description, terms, definitions})
            
            if (!data) {
                throw new Error("Error")
            }
            if (!data.success) {
                throw new Error(data.message)
            }
            toast.success(data.message);    
            navigate("/dashboard")

            } catch (error) {
                console.log(error)
                return toast.error(error.message);
        }
    }

    useEffect(() => {
        getDataById();
    },[flashcardId])


    if (flashcardData.length === 0) return;
    return (
        <div className='flex px-[2rem] lg:px-[3rem] p-[3rem] lg:p-[2rem]  justify-center'>

            <div className="hidden md:flex items-center justify-between mr-10 ">
            <LeftPanel/>
            </div>

            <div className="flex flex-col w-full max-h-full mx-40 ">
            <Navbar search={false} message={false}/> 
            {leftPanel ? 
                <div id="panel" className=" h-[93vh] flex md:hidden items-center justify-center max-w-full"><LeftPanel /> </div>
                
            : 
                (
                <div className="flex flex-col items-center justify-center dark:text-slate-200">
                    <h1 className="flex items-center justify-center text-5xl mb-10">Edit Your Flashcard</h1>

                    <div className="flex items-center justify-center flex-col w-full text-center">
                    <input defaultValue={flashcardData.title} name="" id="cardTitle" className='max-w-full w-full outline-none bg-transparent border mb-5  py-1 px-2' placeholder='Enter Flashcard Title' required/>
                    <textarea defaultValue={flashcardData.description} name="" id="cardDesc" className='outline-none w-full bg-transparent border  h-[25%] sm:h-[50%] resize-none overflow-hidden py-1 px-2' placeholder='Enter Flashcard Description' required/>

                    </div>


                    <div id="cards" className=" grid grid-cols-1 gap-10 sm:gap-20 mt-20 w-full ">

                    {cardArray.fill(0).map((_, index) => numSkipped(index) && (

                    
                        <div  key={index} className="flex flex-col ">
                            <div className="flex items-center justify-between">
                                <p className="">{(index+1 - skipped)}</p>
                                <div onClick={() => deleteCard(index)} className="flex cursor-pointer">
                                <FaRegTrashCan />
                                </div>
                                
                            </div>
                            <div className="flex flex-col sm:flex-row">
                                <textarea defaultValue={flashcardData.terms[index]} id={`termTextArea`} type="text" className='outline-none md:w-full bg-transparent border-b resize-none mb-5 sm:mb-0 overflow-hidden h-[25%] sm:h-[50%]'  placeholder='Enter Term'/>
                                <textarea defaultValue={flashcardData.definitions[index]} id={`defTextArea`} type="text" className='outline-none md:w-full bg-transparent border-b text-wrap sm:ml-10 resize-none overflow-hidden  h-[25%] sm:h-[50%]' placeholder='Enter Definition'/>
                            </div>

                        </div>
                    ))}
                
                    </div>
                    <button onClick={addCard}className="mt-10 p-5 w-full border text-slate-300 dark:text-slate-800 dark:bg-slate-400 bg-slate-700 rounded-md active:scale-95">Add a Card</button>

                    <button onClick={updateCards} className="flex float-end items-end justify-end mt-10 px-10 py-2 border text-slate-300 dark:text-slate-800 dark:bg-slate-400 bg-slate-700 rounded-md active:scale-95">Save Edit</button>

                </div>
                )
            
            }
            
            </div>
        
        </div>
    )
}

export default EdtFlashcards