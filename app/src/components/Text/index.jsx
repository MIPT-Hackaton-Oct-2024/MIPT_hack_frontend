import React from "react";

const sizes = {
    textxs: "text-[24px] font-normal not-italic lg: text-[20px] md:text-[22px]",
    texts: "text-[36px] font-normal not-italic lg:text-[30px] md:text-[34px] sm:text-[32px]",
    textmd: "text-[80px] font-normal not-italic lg:text-[80px] md:text-[48px]",
};

const Text = ({children, className, as, size = "texts", ...restProps }) => {
    const Component = as || "p";

    return (
        <Component className={'text-white-a700 font-onest ${className} ${sizes[size]}'} {...restProps}>
            {children}
        </Component>
    );
};

export { Text };