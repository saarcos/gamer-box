'use client'

import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import Image from 'next/image'
export default function Page() {
    return (
        <div className="h-screen w-full flex items-center justify-center p-4 bg-black/20">
            <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-8 bg-gradient-to-br from-[#1A102B]/90 to-[#0A0015]/95 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-zinc-800">
                <div className="hidden sm:block relative w-full h-full">
                    <Image
                        src="/images/sign-in-wallpaper.jpeg"
                        alt="Background"
                        fill
                        sizes="(max-width: 768px) 0px, 50vw"
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/10" />
                </div>
                <div className="p-10 flex flex-col justify-center">
                    <h2 className="text-4xl font-bold text-white mb-8 text-center font-title drop-shadow">
                        Log in
                    </h2>
                    <SignIn.Root>  
                        <SignIn.Step name="start">
                            <Clerk.GlobalError className="block text-sm text-red-400" />
                            <div className="space-y-5 font-title">
                                <Clerk.Field name="identifier" className="space-y-2">
                                    <Clerk.Label className="text-white text-lg">Username</Clerk.Label>
                                    <Clerk.Input
                                        placeholder="Enter your username"
                                        required
                                        className="mt-2 w-full rounded-lg bg-transparent px-4 py-2 text-sm text-white ring-1 hover:ring-light-purple focus:ring-light-purple outline-none transition data-[invalid]:ring-red-400"
                                    />
                                    <Clerk.FieldError className="block text-sm text-red-400" />
                                </Clerk.Field>
                                <Clerk.Field name="password" className="space-y-2">
                                    <Clerk.Label className="text-white text-lg">Password</Clerk.Label>
                                    <Clerk.Input
                                        placeholder="Enter your password"
                                        required
                                        className="mt-2 w-full rounded-lg bg-transparent px-4 py-2 text-sm text-white ring-1 hover:ring-light-purple focus:ring-light-purple outline-none transition data-[invalid]:ring-red-400"
                                    />
                                    <Clerk.FieldError className="block text-sm text-red-400" />
                                </Clerk.Field>
                            </div>
                            <SignIn.Action
                                submit
                                className="cursor-pointer mt-6 w-full rounded-lg bg-light-purple px-4 py-2 text-white text-sm font-medium shadow-md hover:brightness-110 transition"
                            >
                                Sign In
                            </SignIn.Action>
                            <p className="text-center text-sm text-zinc-500 mt-3">
                                No account?{' '}
                                <Clerk.Link
                                    navigate="sign-up"
                                    className="text-light-purple hover:underline focus-visible:underline outline-none"
                                >
                                    Create an account
                                </Clerk.Link>
                            </p>
                        </SignIn.Step>
                    </SignIn.Root>
                </div>
            </div>
        </div>
    )
}