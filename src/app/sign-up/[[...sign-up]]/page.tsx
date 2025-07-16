"use client"
import * as SignUp from '@clerk/elements/sign-up'
import Image from "next/image"
import * as Clerk from '@clerk/elements/common'

export default function Page() {
    return (
        <div className="h-screen w-full flex items-center justify-center p-4 bg-black/20">
            <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-8 bg-gradient-to-br from-[#1A102B]/90 to-[#0A0015]/95 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-zinc-800">
                <div className="p-10 flex flex-col justify-center">
                    <h2 className="text-4xl font-bold text-white mb-8 text-center font-title drop-shadow">
                        Create your account
                    </h2>
                    <SignUp.Root>
                        <SignUp.Step name="start">
                            <Clerk.GlobalError className="block text-sm text-red-400" />
                            <div className="space-y-5 font-title">
                                <Clerk.Field name="emailAddress" className="space-y-2">
                                    <Clerk.Label className="text-white text-lg">Email Address</Clerk.Label>
                                    <Clerk.Input
                                        placeholder="Enter your email address"
                                        type="email"
                                        required
                                        className="mt-2 w-full rounded-lg bg-transparent px-4 py-2 text-sm text-white ring-1 hover:ring-light-purple focus:ring-light-purple outline-none transition data-[invalid]:ring-red-400"
                                    />
                                    <Clerk.FieldError className="block text-sm text-red-400" />
                                </Clerk.Field>
                                <Clerk.Field name="username" className="space-y-2">
                                    <Clerk.Label className="text-white text-lg">Username</Clerk.Label>
                                    <Clerk.Input
                                        placeholder="Enter your username"
                                        type="text"
                                        required
                                        className="mt-2 w-full rounded-lg bg-transparent px-4 py-2 text-sm text-white ring-1 hover:ring-light-purple focus:ring-light-purple outline-none transition data-[invalid]:ring-red-400"
                                    />
                                    <Clerk.FieldError className="block text-sm text-red-400" />
                                </Clerk.Field>
                                <Clerk.Field name="password" className="space-y-2">
                                    <Clerk.Label className="text-white text-lg">Password</Clerk.Label>
                                    <Clerk.Input
                                        placeholder="Enter your password"
                                        type="password"
                                        required
                                        className="mt-2 w-full rounded-lg bg-transparent px-4 py-2 text-sm text-white ring-1 hover:ring-light-purple focus:ring-light-purple outline-none transition data-[invalid]:ring-red-400"
                                    />
                                    <Clerk.FieldError className="text-sm text-red-400" />
                                </Clerk.Field>
                            </div>

                            <SignUp.Captcha className="empty:hidden mt-4" />

                            <SignUp.Action
                                submit
                                className="cursor-pointer mt-6 w-full rounded-lg bg-light-purple px-4 py-2 text-white text-sm font-medium shadow-md hover:brightness-110 transition"
                            >
                                Sign Up
                            </SignUp.Action>

                            <p className="mt-4 text-sm text-center text-zinc-400">
                                Already have an account?{' '}
                                <Clerk.Link
                                    navigate="sign-in"
                                    className="cursor-pointer text-light-purple hover:underline focus-visible:underline outline-none"
                                >
                                    Sign in
                                </Clerk.Link>
                            </p>
                        </SignUp.Step>
                        <SignUp.Step name="verifications">
                            <SignUp.Strategy name="email_code">
                                <Clerk.Field name="code" className="space-y-2">
                                    <Clerk.Label className="text-white text-lg font-title">Email Code</Clerk.Label>
                                    <Clerk.Input
                                        placeholder="Enter the code sent to your email"
                                        required
                                        className="font-body mt-2 w-full rounded-lg bg-transparent px-4 py-2 text-sm text-white ring-1 hover:ring-light-purple focus:ring-light-purple outline-none transition data-[invalid]:ring-red-400"
                                    />
                                    <Clerk.FieldError className="block text-sm text-red-400" />
                                </Clerk.Field>
                                <SignUp.Action
                                    submit
                                    className="cursor-pointer mt-6 w-full rounded-lg bg-light-purple px-4 py-2 text-white text-sm font-medium shadow-md hover:brightness-110 transition"
                                >
                                    Finish registration
                                </SignUp.Action>
                            </SignUp.Strategy>
                        </SignUp.Step>
                    </SignUp.Root>
                </div>

                <div className="hidden sm:block relative w-full h-full">
                    <Image
                        src="/images/sign-up-wallpaper.jpg"
                        alt="Background"
                        fill
                        sizes="(max-width: 768px) 0px, 50vw"
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/20" />
                </div>
            </div>
        </div>
    )
}
