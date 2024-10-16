import { Heading, GoogleMap, Text } from "../../components"
import React from "react";

export default function SupplierSection() {
    return (
        <>
            {/* supplier section */}
            <div className="mt-10 flex flex-col items-center gap-10 px-14 md: px-5 sm:px-4">
                <div className="mx-auto flex w-full max-w-[1696px] flex-col items-start gap-[30px]">
                    <Text
                        size="textmd"
                        as="p"
                        className="text-[80px] font-normal text-light_blue-800 lg:text-[48px] md:text-[48px]"
                    >    
                        Кластеризация
                    </Text>
                    <div className="mx-2 flex gap-[23px] self-stretch md:mx-0 sm: flex-col">
                        <div className="flex rounded-[20px] bg-light_blue-800 p-3.5">
                            <Heading as="h3" className="text-[24px] font-semibold text-white-a700 lg:text-[20px]">
                                Грузополучатели
                            </Heading>
                        </div>
                        <div className="h-[60px] w-[16%] rounded-[20px] border-[3px] border-solid border-light_blue-800 bg-white-a700" />
                    </div>
                </div>
                <div className="mx-auto flex w-full max-w-[1680px] justify-center">
                    <div className="relative h-[548px] w-full content-center lg:h-auto md:h-auto">                    
                        <Heading
                            as="h4"
                            className="absolute bottom-[11%] left-[20%] m-auto text-[24px] font-semibold text-light_blue-800 lg:text-[20px]"
                        >    
                            Поставщики
                        </Heading>
                    </div>
                </div>
            </div>
        </>
    );
}