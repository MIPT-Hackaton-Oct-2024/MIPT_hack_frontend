import { Img, Text } from "./..";
import React from "react";

export default function Header({ ...props }) {
    return (
        <header
            {...props}
            className={'${props.className} flex sm:flex-col justify-between items-center gap-5 px-[118px] py-[22px] 1g:px-8 md:px-5 sm:p-4 bg-light_blue-800'}
        >
            <Img src="images/img_image_3.png" alt="Header Image" className="h-[100px] w-[10%] object-contain md:w-full" />
            <ul className="flex flex-wrap gap-[82px] 1g:gap-5 md:gap-5">
            <li>
                <a href="#" className="lg:text-[30px] md:text-[30px] sm:text-[28px]">
                    <Text as="p" className="text-[36px] font-normal text-white-a700"> 
                        Данные
                    </Text>
                </a>
            </li>
            <li>
                <a href="#" className="lg:text-[30px] md:text-[30px] sm:text-[28px]">
                    <Text as="p" className="text-[36px] font-normal text-white-a700">
                        Кластеризация
                    </Text>
                </a>
            </li>
            <li>
                <a href="#" className="lg:text-[30px] md:text-[30px] sm:text-[28px]">
                    <Text as="p" className="text-[36px] font-normal text-white-a700">
                        Лотирование
                    </Text>
                </a>
            </li>
        </ul>
        <Img src="images/img_header_logo.png" alt="Header Logo" className="h-[102px] w-[102px] object-contain" />    
    </header>
    );
}