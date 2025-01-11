import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useContext, useEffect, useState } from 'react'
import { AppContent } from '../../../context/AppContext'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function DeleteFlashcardModal(props) {
  let [isOpen, setIsOpen] = useState(true)
  const {backendUrl} = useContext(AppContent)
  const navigate = useNavigate();

  function closeModal() {
    setIsOpen(false)
    props.setOpenModal(false);
  }

  function openModal() {
    setIsOpen(true)
  }

  const deleteFlashcard = async () => {
    const flashcardId = props.flashcardId
    if (!flashcardId) {
        toast.error("Flashcard Id not found")
        return;
    }
    try {
        const flashcardId = props.flashcardId
        const {data} = await axios.post(backendUrl + "/api/user/delete-flashcards-by-id",{flashcardId})

        if (!data) throw new Error("Something went wrong");
        if (!data.success) throw new Error(data.message);
        toast.success(data.message);
        navigate("../dashboard");

    } catch(error) {
        toast.error(error);
    }
  }

  useEffect(() => {
    props.openModal ? openModal() : closeModal();
  },[props.openModal])
  

  return (
    <>


      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl   bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Delete this Flashcard?
                  </Dialog.Title>
                  <div className=" flex flex-col items-center justify-around mt-4">
                    <p className="my-2">Are you sure you want to delete this flashcard? Deleting this flashcard cannot be reversed and thus unaccessable in the future.</p>
                    <div className="flex items-center justify-around w-full">
                        <button onClick={closeModal} className="bg-slate-300 px-4 py-2 rounded-md active:bg-slate-200 hover:active:scale-95">Cancel</button>
                        <button onClick={deleteFlashcard} className="bg-slate-300 px-4 py-2 rounded-md active:bg-slate-200 hover:active:scale-95 text-red-500">Delete</button>
                    </div>
                    
                  </div>


                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
