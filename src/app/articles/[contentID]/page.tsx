"use client";
import { formatTimestamp } from "@/features/articles/timestamp";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import * as React from "react";
import { IoChatbubbleEllipsesOutline, IoPeople, IoPersonCircleSharp } from "react-icons/io5";
import Image from "next/image";
import { getTimeAgo } from "@/features/contents/getTimeAgo";
import { CiCamera } from "react-icons/ci";
import { HiOutlineGif } from "react-icons/hi2";
import { TbCircleDashed } from "react-icons/tb";
import IGN_Logo from "@/component/IGN_Logo.component";

export interface IArticle {
  title: string;
  subTitle: string;
  contentText: string;
  authorName: string;
  thumbnail_imgUrl: string;
  category: string;
  created: number;
  updated: number;
  image: string;
  tag: string;
  objectId: string;
}

export default function ArticleDetailPage() {
  const params = useParams();
  const [article, setArticle] = React.useState<IArticle | null>(null);
  const [ignRecommend, setIGNRecommend] = React.useState([]);

  const fetchArticle = async () => {
    try {
      const responseArticle = await axios.get(`/api/article_detail/${params.contentID}`);
      console.log(responseArticle);
      setArticle(responseArticle.data);
    } catch (error) {
      console.error("Error:", error);
    }

    return;
  };

  const fetchIGNRecommend = async () => {
    try {
      const responseRecommends = await axios.get(`/api/contents/get-ign-recommend`);
      console.log(responseRecommends);
      setIGNRecommend(responseRecommends.data);
    } catch (error) {
      console.error("Error:", error);
    }

    return;
  };

  React.useEffect(() => {
    if (params.contentID) {
      fetchArticle();
      fetchIGNRecommend();
    }
  }, [params.contentID]);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }

  return (
    <main className="max-w-full sm:mx-[120px] max-sm:mt-20 flex flex-col justify-center">
      <div title="commerce-disclosure"></div>
      <div title="adsunit-wrapper"></div>
      <div title="page-header"></div>
      <div title="page-header" className="m-[48px_0_24px] px-4">
        <h1 className="mb-3 text-[#f6f8f7] text-[34px] sm:text-[48px] font-black leading-[1.2] tracking-[-0.015em] box-border">
          {article.title}
        </h1>
        <h2 className="mt-[18px] text-[#d3ddd9] text-[18px] sm:text-[22px] leading-[1.25] tracking-[-0.01em] box-border">
          {article.subTitle}
        </h2>
        <div></div>
      </div>
      <output title="box-wrapper" className="block my-[18px] max-sm:px-4">
        <figure className="leading-[1]">
          <div className="relative w-full max-w-[657px] mx-auto" style={{ aspectRatio: "657 / 368" }}>
            <Image
              src={article.thumbnail_imgUrl.split("?")[0]}
              alt="img"
              className="rounded-md"
              fill
              sizes="(max-width: 640px) 364px, 657px"
              style={{ objectFit: "cover" }}
            />
          </div>
        </figure>
      </output>
      <div title="page-content-info" className="mt-3 h-full w-full max-w-5xl px-6 box-border">
        <section>
          <div className="flex flex-col items-start gap-y-1.5 sm-max:flex-wrap box-border">
            <div title="article-authors" className="flex flex-row items-center gap-x-1.5 text-[#d3ddd9]">
              <section title="author-avatars" className="flex flex-row-reverse ml-2 justify-center items-center">
                <div className="w-[21px] h-[21px] ml-[-8px] relative aspect-square overflow-hidden rounded-[50%]">
                  <IoPersonCircleSharp className="w-full h-full" />
                </div>
              </section>
              <div title="caption" className="uppercase text-[11px] font-bold">
                {`By: `}
                <Link href="" className="underline">
                  {article.authorName}
                </Link>
              </div>
            </div>
            <div title="divider max-sm:hidden w-full mb-4"></div>
            <div
              title="article-author-caption"
              className="uppercase text-[11px] max-sm:mt-4 leading-[1.35] tracking-[0.03em] font-bold box-border text-[#d3ddd9] sm-max:m-[18px_0_24px] ">
              {"Updated:"}
              {"Mar 7, 2025 5:04 AM"}
            </div>
          </div>
          <div title="divider"></div>
        </section>
        <div className="border-b border-[#8a9399]/40 mt-[18px] w-full"></div>
      </div>
      <div className="sm:relative sm:grid sm:grid-cols-[calc(100%_-_324px)_300px]">
        <div>
          <div title="article-content" className="w-full h-max m-[0_auto] px-6">
            <div title="side-by-side" className="sm:max:flex flex-col">
              <div title="article-content" className="mb-9">
                <section title="article-subtitle" className="">
                  <section title="article-page" className="py-4 overflow-hidden text-ellipsis">
                    <p className="text-[#f6f8f7] text-[17px] leading-[1.7]">{article.contentText}</p>
                    <div title="accent-divider" className="my-6 border-white/80 border-b w-full"></div>
                    <p title="authors-detail" className="my-3 overflow-hidden text-ellipsis">
                      <em className="italic font-normal leading-[1.7]">
                        {article.authorName}
                        {` is the IGN commerce manager in charge of finding the best gaming and tech
                        deals every day. When Eric isn't hunting for deals for other people at work, he's hunting for
                        deals for himself during his free time.`}
                      </em>
                    </p>
                  </section>
                </section>
                <div
                  title="caption"
                  className="my-6 uppercase text-[11px] text-[#bbc4c4] leading-[1.35] tracking-[0.03em] font-bold">
                  <div title="original-posted" className="border-b border-[#8a9399]/40 mb-[18px] w-full"></div>
                  Originally posted: {formatTimestamp(article.created)}
                </div>
                <div className="sm:w-full sm:flex sm:justify-center">
                  <div
                    title="subsribe-to-ign-deals"
                    className="bg-transparent shadow-[0_0_3px_rgba(0,0,0,0.75),0_17px_24px_rgba(0,0,0,0.3)] w-[364px] h-[463px] rounded-2xl p-6">
                    <div className="flex flex-col gap-3">
                      <Image
                        src="https://assets-prd.ignimgs.com/2023/06/14/061423-1686774937918.jpg"
                        width={316}
                        height={178}
                        alt="img"
                        className="w-full block object-cover rounded-xl aspect-video"
                      />
                      <div title="subscribe-form" className="flex flex-col gap-y-2 w-full">
                        <div className="font-bold text-[22px] leading-[1.25] tracking-[-0.01em] block">
                          Subscribe to IGN Deals
                        </div>
                        <div className="text-[13px] leading-[1.5] tracking-[0.005em]">
                          Get Hand Picked Savings Delivered to Your Inbox
                        </div>
                        <div className="*:text-[#0070D1] *:whitespace-nowrap *:underline">
                          By subscribing you confirmed that you are 16 years of age or older and you agree to our{" "}
                          <a href="">Term of Use</a> and <a href="">Privacy Policy</a>
                        </div>
                        <div title="input" className="flex flex-col gap-2">
                          <div title="email-input">
                            <input
                              type="text"
                              placeholder="Enter Email Address"
                              name="email"
                              className="w-full inline-block p-3 border border-[#f6f8f7] text-[#f6f8f7] outline-none text-[16px] rounded-md bg-[#283044] h-auto leading-[1.15]"
                            />
                          </div>
                          <button className="whitespace-nowrap text-[16px] text-[#181c25] bg-white font-bold cursor-pointer text-center center rounded-2xl leading-[1.125] p-[12px_32px]">
                            Sign Up!
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div title="comments" className="mt-3 px-6">
            <div className="flex flex-col">
              <div title="bottom-content" className="order-2">
                <div title="conversation" className="min-h-auto my-[25px]">
                  <div title="conversation-header" className="min-w-[250px] relative">
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col w-full float-left">
                        <div
                          title="conversation-title"
                          className="border-b border-[#302f2f] flex items-center justify-between">
                          <button
                            type="button"
                            className="mb-[-1px] py-[9px] text-center outline-none flex items-baseline whitespace-nowrap text-ellipsis overflow-hidden max-w-full bg-transparent">
                            <span className="flex items-center w-full justify-center text-start whitespace-nowrap">
                              <h2 className="min-h-[30px] text-start text-[21px] text-white whitespace-nowrap leading-[1.5] font-bold tracking-normal ">
                                Conversation
                                <span className="ml-[9px] leading-[1.5em] text-[15px] text-[#86A3B0] tracking-normal">
                                  (6)
                                </span>
                              </h2>
                            </span>
                          </button>
                          <div title="viewing-indicator" className="flex items-center">
                            <div className="text-[15px] mx-[5px] flex items-center justify-center w-[1em] h-[1em]">
                              <IoPeople className="text-[#35B940]" />
                            </div>
                            <span className="text-[13px] leading-[1.5em] text-[#86A3B0]">20</span>
                          </div>
                        </div>
                        <h3 className="mt-[15px]">
                          <span>
                            <p className="text-[16px] leading-[30px] text-[#86A3B0]">
                              {`Have fun. Don't be mean. Feel free to criticize ideas, not people. Report bad behavior.`}
                            </p>
                          </span>
                          <Link href="" className="text-[16px] text-[#bf1313] underline leading-[30px]">
                            Read our 2025 community guidelines.
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div title="conversation">
                    <div title="empty" className="w-full mt-[15px]"></div>
                    <div title="input" className="px-[15px]">
                      <label className="input w-full h-min-[44px] bg-[#373E44]">
                        <input type="text" className="grow" placeholder="Be the first to comment..." />
                        <kbd className="flex items-center justify-center h-full aspect-square">
                          <CiCamera className="text-[1.5em] text-white/40" />
                        </kbd>
                        <kbd className="flex items-center justify-center h-full aspect-auto">
                          <HiOutlineGif className="text-[1.5em] text-white/40" />
                        </kbd>
                      </label>
                    </div>
                    <div title="conversation-comment">
                      <div className="p-[60px] flex flex-col items-center justify-center gap-2.5">
                        <div className="w-[60px] h-[60px] overflow-hidden [overflow-clip-margin:content-box] rounded-full bg-[#F0F1F1] flex justify-center items-center">
                          <IoChatbubbleEllipsesOutline className="h-[50%] w-[50%] text-[#C1C2C2]" />
                        </div>
                        <span className="font-bold text-[15px] leading-[1.5em] text-[#A9ABB0] text-center">
                          No one seems to have shared their thoughts on this topic yet
                        </span>
                        <span className="text-[15px] leading-[1.5em] text-[#A9ABB0] text-center">
                          Leave a comment so your voice will be heard first.
                        </span>
                      </div>
                    </div>
                    <div
                      title="conversation-footer"
                      className="py-[15px] mt-[15px] flex flex-end justify-between border-t border-[#302f2f]">
                      <span className="text-[12px] flex items-center">
                        <Link href="" className="flex items-center text-[#A9ABB0]">
                          <TbCircleDashed className="mr-[3px]" />
                          OpenWeb
                        </Link>
                      </span>
                      <span className="ml-[5px] min-w-0 flex flex-[1_0_auto] justify-end">
                        <div className="text-[12px] leading-[1.5] text-[#A9ABB0] *:m-[3px]">
                          <Link href="">Terms</Link>
                          <span>|</span>
                          <Link href="">Privacy</Link>
                          <span>|</span>
                          <Link href="">Feedback</Link>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div title="ign-recommend" className="mt-3 px-6 sm:sticky sm:right-0 sm:top-0">
          <h3
            title="ign-recommend-headline"
            className="mb-[18px] text-center text-[18px] text-[#f6f8f7] font-black leading-[1.25] tracking-[-0.01em]">
            <div className="flex w-full pl-3 justify-center">
              <IGN_Logo />
            </div>
            Recommends
          </h3>
          <div title="ign-recommend-items" className="flex flex-col">
            {ignRecommend.map((item: IArticle, index: number) => (
              <div
                title="content-item"
                className={`${
                  index === 0 ? "pb-[18px]" : "py-[18px]"
                } max-sm:border-b max-sm:border-[rgba(138, 147, 153, 0.25)]`}
                key={index}>
                <Link href="" className="max-sm:grid max-sm:grid-cols-[1.2fr_2fr] flex flex-col gap-x-3 items-center">
                  <div title="item-thumbnail" className="w-full aspect-video relative">
                    <Image
                      src={item.thumbnail_imgUrl}
                      width={139}
                      height={78}
                      layout="responsive"
                      objectFit="cover"
                      alt="thumbnail-img"
                      className="rounded-md"
                    />
                  </div>
                  <div title="item-details" className="flex flex-col gap-y-1.5 box-border">
                    <div title="item-publish-date" className="sm:hidden text-[9px] font-bold uppercase block">
                      {getTimeAgo(item.created.toString())}
                    </div>
                    <span
                      title="item-title"
                      className="mt-2 block text-[13px] sm:text-[16px] sm:hover:underline font-bold line-clamp-2">
                      {item.title}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
