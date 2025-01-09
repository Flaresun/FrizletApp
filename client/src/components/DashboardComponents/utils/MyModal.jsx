import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useContext, useEffect, useState } from 'react'
import { AppContent } from '../../../context/AppContext'

export default function MyModal(props) {
  let [isOpen, setIsOpen] = useState(true)

  const {theme, setTheme} = useContext(AppContent);
  
  setTheme()

const setLightMode = () => {
  localStorage.setItem("theme", true);
  setTheme((prev) => true);
}

const setDarkMode = () => {
  localStorage.setItem("theme", false);
  setTheme((prev) => false);
}

  function closeModal() {
    setIsOpen(false)
    props.setOpenModal(false);
  }

  function openModal() {
    setIsOpen(true)
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Theme
                  </Dialog.Title>
                  <div className="mt-2 flex items-center justify-around">
                    <button onClick={setLightMode} className="bg-slate-300 px-4 py-2 rounded-md active:bg-slate-200 hover:active:scale-95">Light Mode</button>
                    <button onClick={setDarkMode} className="bg-slate-300 px-4 py-2 rounded-md active:bg-slate-200 hover:active:scale-95">Dark Mode </button>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Exit
                    </button>
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
