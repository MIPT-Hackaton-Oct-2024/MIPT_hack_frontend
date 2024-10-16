import { Text, Heading, Img } from "../../components";
import React from "react";

export default function DataProcessingSection() {
    return (
        <>
            {/* data processing section */}
            <div>
                <div className="flex flex-col items-center bg-light_blue-800 px-14 py-[58px] shadow-xs md:p-5 sm:p-4">
                    <div className="mx-auto mb-3.5 flex w-full max-w-[1668px] flex-col items-start">
                        <div className="flex flex-col items-start self-stretch">
                            <Text
                                size="textmd"
                                as="p"
                                className="text-[80px] font-normal text-white-a700 lg:text-[48px] md:text-[48px]"
                            >
                                Данные
                            </Text>
                            <Heading
                                size="headings"
                                as="h1"
                                className="ml-[136px] mt-[54px] text-[36px] font-bold text-white-a700 lg:text-[30px] md:ml-0 md:text-[30px] sm: text-[28px]"
                            >    
                                Обрабатываемые заявки
                            </Heading>
                            {/* <Img
                                src="images/img_image_2.png"
                                alt="Secondary Image"
                                className="ml-[136px] mt-[18px] h-[320px] w-[90%] object-contain md:ml-0"
                            /> */}
                        </div>
                        <Heading
                            size="headings"
                            as="h2"
                            className="m]-[136px] mt-12 text-[36px] font-bold text-white-a700 lg:text-[30px] md:ml-0 md:text-[30px] sm:text-[28px]"
                        >
                            Необрабатываемые заявки (ошибка в данных)
                        </Heading>
                        <div className="ml-[136px] mt-[26px] h-[200px] w-[90%] bg-blue_gray-100 md:ml-0"/>
                        <Text
                            size="textxs"
                            as="p"
                            className="m]-[136px] mt-[26px] text-[24px] font-normal leading-[30px] text-white-a700 lg: text-[20px] md:m1-0"
                        >
                            <>
                                Если вам важны необработанные заявки, исправье ошибки и загрузите новые данныеб
                                <br />
                                иначе лотирование будет проводиться только для обрабатываемых заявок.
                            </>
                        </Text>
                    </div>
                </div>
            </div>
        </>
    );
}