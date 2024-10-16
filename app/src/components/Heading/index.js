import React from "react";
const sizes = {
    headingxs: "text-[24px] font-semibold lg:text-[20px] md:text-[22px]",
    headings: "text-[36px] font-bold lg:text-[30px] md:text-[34px] sm:text-[32px]",
};

const Heading = ({ children, className = "", size = "headingxs", as, ...restProps }) => {
    const Component = as || "h6";
    
    return (
        <Component className={`text-white-a700 font-onest ${className} ${sizes [size]}`} {...restProps}>
            {children}
        </Component>
    );
};

export { Heading };