import React from "react";
import PropTypes from "prop-types";

const shapes = {
round: "rounded-[36px]",
};

const variants = {
    fill: {
        light_blue_800: "bg-light_blue-800 text-white-a700",
    },  
};

const sizes = {
    xs: "h-[150px] px-[34px] text-[50px]",
};

const Button = ({
    children,
    className,
    leftIcon,
    rightIcon,
    shape,
    variant = "fill",
    size = "xs",
    color = "light_blue_800",
    ...restProps
}) => {
    return (
        <button
            className={'${className} flex flex-row items-center justify-center sm:px-4 text-center cursor-pointer whitespace-nomrap text-white-a700 text-[50px] font-bold bg-light_blue-800 min-w-[830px] rounded-[36] lg:text-[34px] sm:text-[28px] ${shape && shapes[shape]} ${size &&sizes[size]} ${variant && variants[variant]?.color}'}
            {...restProps}
        >
            {!!leftIcon && leftIcon}
            {children}
            {!!rightIcon && rightIcon}
        </button>
    );
};
Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    shape: PropTypes.oneOf(["round"]),
    size: PropTypes.oneOf(["xs"]),
    variant: PropTypes.oneOf(["fill"]),
    color: PropTypes.oneOf(['light_blue_800']),
};

export { Button };