"use client";
import { useState, useRef } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef(null);

  useGSAP(() => {
    if (isOpen && drawerRef.current) {
      gsap.fromTo(
        drawerRef.current,
        { x: "100%" },
        { x: "0%", duration: 0.35, ease: "power2.out" }
      );
    }
  }, [isOpen]); 

  const handleClose = () => {
    if (drawerRef.current) {
      gsap.to(drawerRef.current, {
        x: "100%",
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => setIsOpen(false),
      });
    }
  };

  return (
    <div className="relative z-50">
      <button
        className="flex flex-col gap-[4.5px] cursor-pointer z-30 relative"
        onClick={() => setIsOpen(true)}
        aria-label="Open mobile menu"
      >
        <div className="w-6 h-1 bg-light-blue rounded-sm"></div>
        <div className="w-6 h-1 bg-light-blue rounded-sm"></div>
        <div className="w-6 h-1 bg-light-blue rounded-sm"></div>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={handleClose}
          />
          <div
            ref={drawerRef}
            className="fixed right-0 top-0 h-full w-72 bg-dark-gray text-white z-50 shadow-lg px-6 py-8 flex flex-col gap-6"
          >
            <button
              onClick={handleClose}
              className="self-end text-light-blue"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
            <nav className="flex flex-col gap-6 text-lg font-body">
              <Link href="/" onClick={handleClose}>Home</Link>
              <Link href="/activity" onClick={handleClose}>Activity</Link>
              <a href="#films" onClick={handleClose}>Films</a>
              <Link href="/members" onClick={handleClose}>Members</Link>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
