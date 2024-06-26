"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Link from "next/link";
import Footer from "@/components/shared/footer";

export default function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          SnapSite
        </div>
        <div className="font-extralight text-center text-base md:text-4xl dark:text-neutral-200 py-4">
          Capture and visualize any website instantly with just a URL
        </div>
        <Link href={"/form"}>
          <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
            Paste URL
          </button>
        </Link>
        <Footer />
      </motion.div>
    </AuroraBackground>
  );
}