import type { ReactNode } from "react";

import "../styles/story.css";


interface StoryLayoutProps {

    children: ReactNode;

}



export default function StoryLayout({

    children,

}: StoryLayoutProps) {


    return (

        <main className="story-layout">

            {children}

        </main>

    );

}