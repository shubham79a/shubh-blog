"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Menu, MenuIcon, MenuSquare } from 'lucide-react';

import { ModeToggle } from './theme-btn';
import LoadingBar from 'react-top-loading-bar';
import { usePathname } from 'next/navigation';


const Navbar = () => {
    const [progress, setProgress] = useState(0)
    const pathname = usePathname()

    useEffect(() => {
        setProgress(30)

        setTimeout(() => {
            setProgress(70)
        }, 100)

        setTimeout(() => {
            setProgress(100)
        }, 800)

    }, [pathname])

    useEffect(() => {
        setTimeout(() => {
            setProgress(0)
        }, 900);
    }, [])


    return (
        <nav className=" p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-10">
            <LoadingBar
                color='#f11946'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />
            <div className="container mx-auto flex justify-between items-center ">
                <Link href="/"> <div className="text-lg font-bold">
                    ShubhBlog
                </div></Link>
                <div className={`md:flex space-x-4 hidden items-center`}>
                    <Link href="/" className="hover:text-blue-500 hover:shine hover:font-bold">
                        Home
                    </Link>
                    <Link href="/about" className="hover:text-blue-500 hover:shine hover:font-bold">
                        About
                    </Link>
                    <Link href="/blog" className="hover:text-blue-500 hover:shine hover:font-bold">
                        Blog
                    </Link>
                    <Link href="/contact" className="hover:text-blue-500 hover:shine hover:font-bold">
                        Contact
                    </Link>
                    <div className='flex items-center'>
                        <Button className="mx-1" variant="outline">Signup</Button>
                        <Button className="mx-1" variant="outline">Login</Button>
                        <ModeToggle className="mx-1" />
                    </div>
                </div>
                <div className="md:hidden items-center " >
                    <Sheet>
                        <span className='mx-2'>
                            <ModeToggle />
                        </span>
                        <SheetTrigger>
                            <MenuIcon className='pt-1' />
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle className="font-bold my-4">ShubhBlog</SheetTitle>
                                <SheetDescription>
                                    <div className="flex flex-col gap-6 text-center">
                                        <Link href="/">
                                            Home
                                        </Link>
                                        <Link href="/about">
                                            About
                                        </Link>
                                        <Link href="/blog">
                                            Blog
                                        </Link>
                                        <Link href="/contact">
                                            Contact
                                        </Link>
                                        <div>
                                            <Button className="mx-1 text-xs" variant="outline">Signup</Button>
                                            <Button className="mx-1 text-xs" variant="outline">Login</Button>
                                        </div>
                                    </div>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>

            </div>

        </nav >
    );
};

export default Navbar;
