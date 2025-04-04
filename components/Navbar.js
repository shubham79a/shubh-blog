"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from './ui/button';

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';

import { ModeToggle } from './theme-btn';

const Navbar = () => {


    return (
        <nav className=" p-4 bg-background/50 sticky top-0 backdrop-blur border-b">
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
                        <Button className="mx-1" variant="outline">Login</Button>
                        <Button className="mx-1" variant="outline">Login</Button>
                        <ModeToggle className="mx-1" />
                    </div>
                </div>
                <div className="md:hidden " >
                    <Sheet>
                        <SheetTrigger>
                            <Menu />
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
                                            <Button className="mx-1 text-xs" variant="outline">Login</Button>
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
