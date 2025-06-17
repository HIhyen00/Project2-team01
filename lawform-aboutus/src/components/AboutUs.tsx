import React from "react";
import '../index.css';

const AboutUs = () => {
    return (
        <div>
            <div className="bg-gray-100">
                <div className="max-w-4xl mx-auto px-4 py-8 grid grid-cols-2 gap-30 ">
                    <div className="flex flex-col items-start justify-center space-y-4">
                        <div className="font-bold text-4xl animate-fade-in-up">회사소개</div>
                        <div className="text-gray-500 text-sm animate-fade-in-up">대한민국 1등 법률문서자동작성 플랫폼</div>
                    </div>
                    <div className="content-center">
                        <div
                            className="w-90 h-80 bg-blue-500 rounded flex items-center justify-center cent animate-fade-in-up-delay">
                            <span className="text-white text-3xl">사진</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-2xl font-bold mb-4 underline">Vision</div>
                <div className="text-xl font-bold mb-4 w-4/5"><span className="text-blue-500">법(Lex) 친구(Amicus)</span>라는
                    뜻을 가진<span className="text-blue-500"> 아미쿠스렉스</span>는 일상에서 누구에게나 필요한 법의 가치가 모두에게 실현될 수 있는 세상을 만들고자
                    탄생했습니다.
                </div>
                <div className="inline-block rounded-lg w-full">
                    <div className="flex items-center justify-between gap-4 p-4">
                        <button
                            className="w-65 h-65 bg-blue-400 rounded-full flex flex-col items-center justify-center text-base font-bold border text-white"
                        >
                            <span className="font-extrabold text-3xl pb-3">1st</span>
                            <span> 특허받은 법률문서 자동작성</span>
                            <span> 플랫폼을 운영하는</span>
                            <span> 국내 선두</span>
                            <span> 리걸테크 기업입니다.</span>
                        </button>
                        <button
                            className="w-65 h-65 bg-blue-400 rounded-full flex flex-col items-center justify-center text-base font-bold border text-white"
                        >
                            <span className="font-extrabold text-3xl pb-3">Convenience</span>
                            <span>일상 언어로도</span>
                            <span>쉽게 소통할 수 있는</span>
                            <span>법률AI 서비스를 제공합니다.</span>
                        </button>
                        <button
                            className="w-65 h-65 bg-blue-400 rounded-full flex flex-col items-center justify-center text-base font-bold border text-white"
                        >
                            <span className="font-extrabold text-3xl pb-3">Trust</span>
                            <span>법조경력 20년 이상의</span>
                            <span>전문 변호사팀이 설계한</span>
                            <span>원스톱 서비스로 고객님의</span>
                            <span>시간과 비용을 절감합니다.</span>
                        </button>
                    </div>
                </div>
                <div className="text-2xl font-bold mb-4 underline">Brand</div>
                <div className="text-xl font-bold mb-4 w-4/5 flex flex-col">
                    <div><span className="text-blue-500">로폼</span>이란, <span className="text-blue-500"> 아미쿠스렉스</span>의
                        <span className="text-blue-500"> 대표 브랜드</span>입니다.
                    </div>
                    <div>
                        법의 가치를 누구나 누릴 수 있는 세상을, 법률 문제 해결의 핵심 수단인 법률문서를 통해 구현해 나간다는 비전을 담고 있습니다.
                    </div>
                </div>

                <div className="bg-gray-100 inline-block rounded-lg my-2 w-full">
                    <div className="p-4 text-sm rounded-lg font-bold">
                        <b className="text-red-500">! </b>로코코드는 법무법인이나 법률사무소가 아니며, 법적 자문이나 법률 사무 서비스 등을 제공하지 않습니다.
                    </div>
                </div>
                <div className="bg-gray-100 inline-block rounded-lg my-2 w-full">
                    <div className="p-4 text-sm rounded-lg font-bold">
                        <b className="text-red-500">! </b>서비스 도입문의 외 일반 문의는 1대1 문의를 통해 접수해주세요.
                    </div>
                </div>
                <div className="justify-items-center mt-5">
                    <div className="content-center">
                        <div
                            className="w-100 h-20 bg-blue-500 rounded flex items-center justify-center">
                            <span className="text-white text-3xl">사진</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-blue-400">
                <div className="max-w-4xl mx-auto px-4 py-8 grid grid-cols-3 gap-30 h-96">
                    <div className="flex flex-col content-center justify-center items-center gap-2">
                        <div
                            className="w-20 h-20 bg-blue-500 rounded flex items-center justify-center">
                            <span className="text-white text-3xl">사진</span>
                        </div>
                        <div>
                            <span className="text-white text-3xl">20,000</span><span
                            className="text-white text-xl">여개</span>
                        </div>
                        <div>
                            <span className="text-white text-xl">이상의 </span><span
                            className="text-white text-xl font-bold">동종문서 분석</span>
                        </div>
                    </div>
                    <div className="flex flex-col content-center justify-center items-center gap-2">
                        <div
                            className="w-20 h-20 bg-blue-500 rounded flex items-center justify-center">
                            <span className="text-white text-3xl">사진</span>
                        </div>
                        <div>
                            <span className="text-white text-3xl">20,000,000</span><span
                            className="text-white text-xl">여개</span>
                        </div>
                        <div>
                            <span className="text-white text-xl">이상의 </span><span
                            className="text-white text-xl font-bold">실제 사례 적용</span>
                        </div>
                    </div>
                    <div className="flex flex-col content-center justify-center items-center gap-2">
                        <div
                            className="w-20 h-20 bg-blue-500 rounded flex items-center justify-center">
                            <span className="text-white text-3xl">사진</span>
                        </div>
                        <div>
                            <span className="text-white text-3xl">100,000</span><span
                            className="text-white text-xl">여개</span>
                        </div>
                        <div>
                            <span className="text-white text-xl">이상의 </span><span
                            className="text-white text-xl font-bold"> 판례 분석</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-2xl font-bold mb-4 underline">History</div>
                <div className="grid grid-cols-12 items-start">
                    <div className="col-span-2 text-3xl text-blue-500 font-extrabold">2025</div>
                    <div className="col-span-10 space-y-4">
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-1 text-base font-bold text-black">06</div>
                            <div className="col-span-11 text-base font-bold text-gray-400">로코코 프로젝트 시작</div>
                        </div>
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-1 text-base font-bold text-black">05</div>
                            <div className="col-span-11 text-base font-bold text-gray-400">과수원 프로젝트 시작</div>
                        </div>
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-1 text-base font-bold text-black">04</div>
                            <div className="col-span-11 text-base font-bold text-gray-400">자바 수업 시작</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100">
                <div className="max-w-4xl mx-auto px-4 py-8">
                    <div className="text-2xl font-bold mb-4 underline">Press</div>
                    <div className="grid grid-cols-3">
                        <div className="flex flex-col text-gray-400 text-xs">
                            <div>
                                법률신문
                            </div>
                            <div>
                                2023-11-30 ~ 2020-02-20
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="font-bold text-3xl">
                                로폼, 국내 대표 법률문서 자동화 서비스로 소개
                            </div>
                            <div>
                                누구나 손쉽게 필요한 법률문서를 작성할 수 있는 특허 기술 보유
                            </div>
                        </div>
                        <div
                            className="w-90 h-80 bg-blue-500 rounded flex items-center justify-center">
                            <span className="text-white text-3xl">사진</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AboutUs