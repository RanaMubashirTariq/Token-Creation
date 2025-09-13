'use client'
import Image from "next/image";
import HeaderSubsection from "./screens/HeaderSubsection/HeaderSubsection";
import FeaturesSubsection from "./screens/FeaturesSubsection/FeaturesSubsection";
import SolutionsAndBlogSubsection from "./screens/SolutionsAndBlogSubsection/SolutionsAndBlogSubsection";
import FooterSubsection from "./screens/FooterSubsection/FooterSubsection";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full overflow-hidden bg-[#151515]"
    >
             <HeaderSubsection/>

             <motion.div 
               id="about"
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               viewport={{ once: true }}
             >
             <FeaturesSubsection/>
             </motion.div>
             <motion.div 
               id="technology"
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               viewport={{ once: true }}
             >
             <SolutionsAndBlogSubsection/>
             </motion.div>
             <motion.div 
               id="term"
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               viewport={{ once: true }}
             >
             <FooterSubsection/>
             </motion.div>
    </motion.div>
  );
}
