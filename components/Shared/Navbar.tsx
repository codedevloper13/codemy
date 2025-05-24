"use client"
import React from 'react'
import { SidebarTrigger } from '../ui/sidebar';
import { BellRing, LogIn, Search } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

export function Navbar() {
  return (
    <div className="flex justify-between p-4 border-b bg-white h-16 items-center">
      <SidebarTrigger />
      <div className="flex gap-4 items-center">
        <div className="flex items-center border  rounded-lg px-2.5 py-1.5 bg-white">
          <Search className="h-4 w-4 mr-2 text-primary" />
          <Input
            type="search"
            placeholder="Search"
            className="w-full border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-white"
          />
        </div>
        <Button variant={"outline"}>
          <BellRing />
        </Button>
        <SignedOut>
          <SignInButton>
            <Button>
              <LogIn />
              Sign in
            </Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
