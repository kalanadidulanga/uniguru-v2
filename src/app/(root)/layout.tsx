import FooterV2 from "@/components/footer/FooterV2";
import HeaderV2 from "@/components/header/HeaderV2";
import React from "react";

export const maxDuration = 60; // Increase Vercel function timeout to 60 seconds

const layout = ({ children }: any) => {
    return (
        <>
            <HeaderV2 />
            {children}
            <FooterV2 />
        </>
    );
};

export default layout;
