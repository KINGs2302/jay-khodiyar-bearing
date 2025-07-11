import React from "react";

export default function AboutLayout({ children }) {
    return (
        <div className="about-layout">
            <main>{children}</main>
        </div>
    );
}