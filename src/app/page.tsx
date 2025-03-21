"use client";
import { getTimeAgo } from "@/features/contents/getTimeAgo";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IArticle } from "./articles/[contentID]/page";

export default function Home() {
  const [headerContent, setHeaderContent] = useState([]);
  const [todayStory, setTodayStory] = useState([]);
  const [contentFeed, setContentFeed] = useState([]);
  const [filteredFeed, setFilteredFeed] = useState([]);
  const [filteredButtonValue, setFilteredButtonValue] = useState("Latest");
  const filterBar = ["Latest", "Games", "Movies", "TV", "PlayStation", "Xbox", "Nintendo", "PC", "Tech"];

  const fetchHeaderContent = async () => {
    try {
      const responseHeaderContent = await axios.get(`/api/contents/get-header`);
      setHeaderContent(responseHeaderContent.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchTodayStory = async () => {
    try {
      const responseTodayStory = await axios.get(`/api/contents/get-today`);
      setTodayStory(responseTodayStory.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchContentFeed = async () => {
    try {
      const responseContentFeed = await axios.get(`/api/contents/get-content-feed`);
      setContentFeed(responseContentFeed.data);
      setFilteredFeed(responseContentFeed.data);
    } catch (error) {
      console.error(error);
    }
  };

  const filterContentFeed = (filterValue: string) => {
    if (filterValue === filterBar[0]) {
      setFilteredFeed(contentFeed);
      setFilteredButtonValue(filterBar[0]);
    } else {
      const filtered = contentFeed.filter((content: IArticle) => content.tag === filterValue.toLowerCase());
      setFilteredFeed(filtered);
      setFilteredButtonValue(filterValue);
    }
  };

  useEffect(() => {
    fetchHeaderContent();
    fetchTodayStory();
    fetchContentFeed();
  }, []);

  return (
    <div className='min-h-[500px] mt-16 flex flex-col justify-center max-w-full sm:mx-[120px]'>
      {/* test carousel homepage header */}
      <div className='grid grid-cols-[repeat(4,minmax(204px,240px))] carousel-center max-w-full gap-6 px-6 md:px-0 my-[18px] overflow-x-auto sm:overflow-hidden'>
        {headerContent.length === 0
          ? // Skeleton loader
            [...Array(4)].map((_, index) => (
              <article key={index} className='animate-pulse'>
                <div className='block border-transparent border rounded-md overflow-hidden'>
                  <div className='aspect-[204/340] min-w-[204px] relative bg-gray-200 rounded-md'>
                    {/* Text overlay skeleton */}
                    <div className='absolute bottom-0 w-full min-h-max box-border'>
                      <div className='p-3 w-full h-full top-0 block box-border relative'>
                        <div className='absolute w-full h-full inset-0 bg-gray-300/75'></div>
                        <div className='h-4 bg-gray-300 rounded w-3/4 mb-2 relative'></div>
                        <div className='h-4 bg-gray-300 rounded w-1/2 relative'></div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))
          : // Actual content
            headerContent.map((content: IArticle, index: number) => (
              <article className='' key={index}>
                <Link
                  href={`/articles/${content.objectId}`}
                  className='block border-transparent border rounded-md overflow-hidden'>
                  <figure className='aspect-[204/340] min-w-[204px] relative'>
                    <Image
                      src={content.thumbnail_imgUrl}
                      alt='thumbnail-img'
                      layout='responsive'
                      width={204}
                      height={340}
                      objectFit='cover'
                    />
                    <div className='absolute bottom-0 w-full min-h-max box-border'>
                      <div className='p-3 w-full h-full top-0 block box-border relative'>
                        <div
                          className={`absolute w-full h-full inset-0 ${
                            index === 2 ? 'bg-[#38827F]/75' : index === 3 ? 'bg-[#9B59B6]/75' : 'bg-[#68000d]/75'
                          } opacity 0.25s ease-in`}></div>
                        <figcaption className='font-black text-wrap text-[18px] text-white relative'>
                          {content.title}
                        </figcaption>
                      </div>
                    </div>
                  </figure>
                </Link>
              </article>
            ))}
      </div>
      {/* text today stories */}
      <section title='today-top-stories' className='my-[18px]'>
        <div title='page-content' className='max-w-full flex flex-col gap-y-6 px-6 sm:px-0'>
          <div title='title-bar' className='flex justify-start text-[30px] font-extrabold'>
            <h2>{`Today's Top Stories`}</h2>
          </div>
          <div className='carousel carousel-center max-w-full space-x-6 px-6 sm:px-0 my-[18px] scroll-smooth snap-x snap-mandatory'>
            {todayStory.length === 0
              ? // Skeleton loader
                [...Array(4)].map((_, index) => (
                  <div key={index} className='snap-start animate-pulse'>
                    <div className='grid grid-rows-[min-content_auto] grid-flow-row h-full gap-y-3'>
                      <div className=''>
                        <div className='relative min-w-[282px] min-h-[159px] aspect-[282/159] overflow-hidden bg-gray-200 rounded-md'>
                          {/* Image placeholder */}
                        </div>
                      </div>
                      <div className='w-[282px] min-h-[39px] text-[13px] font-bold flex flex-col gap-y-2'>
                        {/* Text placeholders */}
                        <div className='h-4 bg-gray-200 rounded w-full'></div>
                        <div className='h-4 bg-gray-200 rounded w-4/5'></div>
                      </div>
                    </div>
                  </div>
                ))
              : // Actual content
                todayStory.map((story: IArticle, index: number) => (
                  <Link href={`/articles/${story.objectId}`} key={index} className='snap-start'>
                    <div className='grid grid-rows-[min-content_auto] grid-flow-row h-full gap-y-3'>
                      <div className=''>
                        <span className='relative min-w-[282px] min-h-[159px] aspect-[282/159] overflow-hidden'>
                          <Image
                            src={story.thumbnail_imgUrl}
                            alt='thumbnail-img'
                            width={282}
                            height={159}
                            className='rounded-md'
                          />
                        </span>
                      </div>
                      <div className='w-[282px] min-h-[39px] text-[13px] font-bold flex flex-col'>
                        <span className='w-full whitespace-normal'>{story.title}</span>
                      </div>
                    </div>
                  </Link>
                ))}
          </div>
        </div>
      </section>

      {/* news grid */}
      <section title='homepage-grid' className='max-w-full h-full'>
        <section title='grid-heading'>
          {/* Filter heading remains static */}
          <div title='filter-heading' className='w-full h-full px-6 md:px-0'>
            <h2 className='font-black text-[30px] m-[36px_0_18px]'>{filteredButtonValue} News</h2>
          </div>
          <div title='page-content-filter' className='pl-6 md:pl-0 w-full h-full'>
            {/* Filter bar skeleton */}
            <div
              title='filter-bar'
              className='p-[1px] flex gap-x-1 items-center overflow-x-auto pb-2 -mb-2 *:py-3 *:px-9 *:flex *:justify-center *:items-center *:h-11 [&>a>div]:text-[13px]'>
              {filterBar.map((filter: string, index: number) => (
                <button
                  key={index}
                  onClick={() => filterContentFeed(filter)}
                  className={`cursor-pointer ${
                    index === 0
                      ? 'rounded-tl-full rounded-bl-full'
                      : index === filterBar.length - 1
                      ? 'rounded-tr-full rounded-br-full'
                      : ''
                  } ${
                    filterBar[index] === filteredButtonValue
                      ? 'text-black font-semibold bg-[#F6F8F7]'
                      : 'text-[#F6F8F7] font-semibold bg-[#303643]'
                  } 
                  `}>
                  <div>{filter}</div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section title='grid-break' className='w-full h-full my-6 box-border'></section>

        <div title='content-feed-grid-wrapper' className=''>
          <section title='content-feed-grid' className='w-full h-full m-[0_auto] px-6 md:px-0 box-border'>
            <section title='main-content' className='box-border'>
              {filteredFeed.length === 0
                ? // Skeleton loader for content feed
                  [...Array(5)].map((_, index) => (
                    <div
                      key={index}
                      className={`${
                        index === 0 ? 'pb-[18px]' : 'py-[18px]'
                      } border-b border-[rgba(138, 147, 153, 0.25)]`}>
                      <div className='grid grid-cols-[auto_1fr] gap-x-3 items-center animate-pulse'>
                        {/* Image skeleton */}
                        <div className='relative w-[139px] sm:w-[240px] aspect-video rounded-[6px] overflow-hidden bg-gray-200' />

                        {/* Text skeleton */}
                        <div className='flex flex-col gap-y-1.5 box-border'>
                          <div className='h-3 bg-gray-200 rounded w-1/4' />
                          <div className='h-4 bg-gray-200 rounded w-full' />
                          <div className='h-4 bg-gray-200 rounded w-4/5' />
                        </div>
                      </div>
                    </div>
                  ))
                : // Actual content
                  filteredFeed.map((content: IArticle, index: number) => (
                    <div
                      title='content-item'
                      className={`${
                        index === 0 ? 'pb-[18px]' : 'py-[18px]'
                      } border-b border-[rgba(138, 147, 153, 0.25)]`}
                      key={index}>
                      <Link
                        href={`/articles/${content.objectId}`}
                        className='grid grid-cols-[auto_1fr] gap-x-3 items-center'>
                        <div
                          title='item-thumbnail'
                          className='relative w-[139px] sm:w-[240px] aspect-video rounded-[6px] overflow-hidden'>
                          <Image
                            src={content.thumbnail_imgUrl}
                            width={240}
                            height={135}
                            priority={index === 0}
                            objectFit='cover'
                            alt='thumbnail-img'
                            className='rounded-md'
                          />
                        </div>
                        <div title='item-details' className='flex flex-col gap-y-1.5 box-border'>
                          <div
                            title='item-publish-date'
                            className='text-[9px] md:text-[12px] font-bold uppercase block'>
                            {getTimeAgo(content.created.toString())}
                          </div>
                          <span
                            title='item-title'
                            className='block text-[13px] md:text-[16px] md:hover:underline font-bold line-clamp-2'>
                            {content.title}
                          </span>
                        </div>
                      </Link>
                    </div>
                  ))}
            </section>
          </section>
        </div>
      </section>
    </div>
  );
}
