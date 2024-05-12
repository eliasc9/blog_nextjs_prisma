'use client'

import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { useState } from "react";

export default function PostDeleteConfirmDialog({ postId, children } : { postId?: number, children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  return (
    <>
      <button className="px-1 underline font-bold text-xs text-red-700 hover:text-red-500" onClick={open}>Delete?{/* (postId {postId})*/}</button>

      <Transition appear show={isOpen}>
        <Dialog as="div" className="relative z-10 focus:outline-none" onClose={close}>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black bg-opacity-50">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-md bg-white p-6 border">
                  <DialogTitle as="h3" className="mb-1.5 text-xl font-bold tracking-tight">
                    Confirm Post Deletion?
                  </DialogTitle>
                  <p className="text-neutral-950 font-extralight">
                    Are you sure you want to delete this post? This action cannot be undone.
                  </p>
                  <div className="mt-4 flex flex-row space-x-2">
                    <Button
                      className="pr-2 font-bold text-xm hover:text-neutral-700 underline"
                      onClick={close}
                    >
                      Cancel
                    </Button>
                    <Button>
                    {children}
                    </Button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
