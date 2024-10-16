import { Button, Img, Text, GoogleMap } from "../../components";
import React from "react";

export default function LottingSection() {
    return (
        <>
            {/* lotting section */}
            <div className="mt-[258px] flex flex-col items-center gap-[746px] lg:gap-[559px] md: gap-[559px] sm:gap-[373px]">
                <div className="self-stretch">
                    <div className="flex flex-col items-start justify-center gap-[26px] bg-light_blue-800 py-[72px] pl-28 pr-14 lg:py-8 lg:pl-8 md:p-5 sm:p-4">
                        <div className="flex w-[96%] flex-col items-start gap-3.5 1g:w-full md:w-full">
                            <Text
                                size="textmd"
                                as="p"
                                className="text-[80px] font-normal text-white-a700 lg:text-[48px] md:text-[48px]"
                            >
                                Лотирование
                            </Text>
                            <div className="mx-auto flex w-full max-w-[1688px] items-start self-stretch 1g: px-5 md:flex-col md:px-5">
                                {/* <GoogleMap showMarker={false} className="h-[456px] flex-1 self-center md:self-stretch" /> */}
                                <div className="flex w-[42%] flex-col items-center md:w-full">
                                    <Text
                                        as="p"
                                        className="self-end text-[36px] font-normal text-white-a700 lg:text-[30px] md:text-[30px] sm: text-[28px]"
                                    >
                                        Выберите отображающийся лот
                                    </Text>
                                    <div className="mr-[150px] mt-[22px] h-[60px] w-[46%] self-end rounded-[20px] border-[3px] border-solid border-light_blue-800 bg-white-a700 md: mr-0" />
                                    <Text
                                        as="p"
                                        className="mt-12 text-[36px] font-normal text-white-a700 lg: text-[30px] md:text-[30px] sm:text-[28px]"
                                    >
                                        Характеристики лота
                                    </Text>
                                    <Text
                                        as="p"
                                        className="mt-10 text-[36px] font-normal leading-[45px] text-white-a700 lg: text-[30px] md:text-[30px] sm: text-[28px]"
                                    >
                                       <>
                                            Цена:
                                            <br />
                                            Число чего-нибудь: <br />
                                            Какие-нибудь метрики:
                                        </>
                                    </Text>
                                </div>
                            </div>
                        </div>
                        {/* <Img
                            src = "images/img_image_2.png"
                            alt = "Secondary Image"
                            className = "mb-3.5 ml-3 h-[320px] w-[80%] object-contain md:ml-0"
                        /> */}
                    </div>
                </div>
                <Button shape="round" className="min-w-[830px] rounded-[36px] px-[34px] sm:px-4">
                    Скачать лотирование
                </Button>
            </div>
        </>
    );
}
