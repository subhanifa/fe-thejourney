
import { Dialog, Transition} from '@headlessui/react'
import { Fragment, useRef, useContext } from 'react'
import { RegisteredContext } from '../../contexts/AuthContext'
import { ModalContext } from '../../contexts/ModalContext'
import LoginModal from './LoginModal'
import RegisterModal from './RegisterModal'

export default function Modal(props) {
    const [open, setOpen] = useContext(ModalContext)
    const [registered, setRegistered] = useContext(RegisteredContext)

    const cancelButtonRef = useRef(null)
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={() => setOpen(!open)}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >
                    <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                    &#8203;
                    </span>
                    <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >

                    <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-fit">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-3 sm:py-8 z-20">
                            <div className="mt-3 text-center space-y-5 sm:mt-0 sm:mx-4 sm:py-4">            

                                {/* {props.children}    */}
                                {registered ? <LoginModal/> : <RegisterModal/> }

                            </div>
                        </div>
                    </div>

                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
