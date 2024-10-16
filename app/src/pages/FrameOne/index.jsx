
import { Helmet } from "react-helmet";
import { Img, Button } from "../../components"; import Header from "../../components/Header";
import DataProcessingSection from "./DataProcessingSection"; import LottingSection from "./LottingSection";
import SupplierSection from "./SupplierSection";
import React from "react";

export default function FrameOnePage() {
    return (
        <>
            <Helmet>
                <title>Data Clustering and Bidding Management | YourCompanyName</title>
                <meta
                    name="description"
                    content="Efficiently manage your bids with our data clustering and lotting features. Correct errors for unprocessed bids and download your lotting results for optimized supplier and recipient coordi"
                />
            </Helmet>
            <div className="flex w-full flex-col gap-[350px] bg-white-a700 1g:gap-[262px] md:gap-[262px] sm: gap-[175px]"> <Header />
                <Header />
                <div className="mb-1 flex flex-col items-center">
                    <Button shape="round" className="min-w-[830px] rounded-[36px] px-[34px] sm:px-4"> 
                        Загрузить заявки
                    </Button>
                    {/* <Img
                        src="images/img_image_1.png"
                        alt="Featured Image"
                        className="mt-[250px] h-[110px] w-[12%] object-contain"
                    /> */}
                    <div className="mt-[68px] self-stretch">
                        {/* data processing section */}
                        <DataProcessingSection />

                        {/* supplier section */}
                        <SupplierSection />

                        {/* lotting section */}
                        <LottingSection />
                    </div>
                </div>
            </div>
        </>
    );
}