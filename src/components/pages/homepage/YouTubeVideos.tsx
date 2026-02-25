"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedSVG from '@/components/myComponents/AnimatedSVG';

// Define types for the YouTube API response
interface VideoSnippet {
    title: string;
    description: string;
    thumbnails: {
        medium: {
            url: string;
        };
    };
}

interface Video {
    id: {
        videoId: string;
    };
    snippet: VideoSnippet;
}

const YouTubeVideos: React.FC = () => {
    const [videos, setVideos] = useState<Video[] | null>(null); // Set state type to Video[]
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchVideos = async () => {
            setIsLoading(true);
            const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || ''; // Fetch from env variable
            const channelId = 'UCeEkbPAUP38Y6NfqLy9zo-A'; // Replace with your Channel ID
            const maxResults = 4;

            try {
                const response = await axios.get(
                    `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`
                );

                if (response?.status === 200) {
                    // console.log(response);
                    setVideos(response?.data?.items);
                }
            } catch (error) {
                console.error('Error fetching YouTube videos:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchVideos();
    }, []);

    return (
        <>
            {isLoading || !videos ? (
                <div className=' w-full flex items-center justify-center'>
                    <AnimatedSVG className=" w-36 h-auto flex flex-col lg:flex-row gap-14" />
                </div>
            ) : (
                <div className=" w-full h-auto flex flex-col lg:flex-row gap-14">
                    <div className=' w-full h-auto flex flex-col gap-5 lg:w-2/5'>
                        <Link
                            href={`https://www.youtube.com/watch?v=${videos[0]?.id.videoId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className=' w-full h-auto '
                        >
                            <Image
                                width={500}
                                height={300}
                                src={videos[0]?.snippet.thumbnails.medium.url}
                                alt={videos[0]?.snippet.title}
                                className=' w-full h-auto rounded-lg overflow-hidden object-cover object-center'
                            />
                        </Link>
                        <div className=' bg-[#F4C467] textlg rounded-full text-center py-2 px-4 max-w-28'>Video</div>
                        <a
                            href={`https://www.youtube.com/watch?v=${videos[0]?.id.videoId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <p className='text-lg md:text-xl font-semibold'>{videos[0]?.snippet.title}</p>
                        </a>
                        <p className='text-my-gray2 text-base'>{videos[0]?.snippet.description}</p>
                        <a
                            href={`https://www.youtube.com/watch?v=${videos[0]?.id.videoId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        ><p className='text-my-gray2 text-base underline'>Read More</p></a>
                    </div>
                    <div className=" flex flex-col w-full lg:w-3/5 gap-8">
                        {videos.slice(1).map((video) => (
                            <div key={video.id.videoId} className="flex flex-col sm:flex-row w-full h-auto gap-3">
                                <a
                                    href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className=' min-w-72'
                                >
                                    <Image
                                        width={500}
                                        height={300}
                                        src={video.snippet.thumbnails.medium.url}
                                        alt={video.snippet.title}
                                        className=' w-full h-auto rounded-lg overflow-hidden object-cover object-center'
                                    />
                                </a>
                                <div className=' flex flex-col gap-2'>
                                    <h3 className='text-base md:text-lg font-semibold'>{video.snippet.title}</h3>
                                    <p className='text-my-gray2 text-sm'>{video.snippet.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default YouTubeVideos;