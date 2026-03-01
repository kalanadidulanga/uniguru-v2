"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { Play, ArrowRight, Youtube } from "lucide-react";

// Define types for the YouTube API response
interface VideoSnippet {
    title: string;
    description: string;
    thumbnails: {
        medium: {
            url: string;
        };
        high: {
            url: string;
        };
    };
    publishedAt: string;
}

interface Video {
    id: {
        videoId: string;
    };
    snippet: VideoSnippet;
}

const LatestNews = () => {
    const [videos, setVideos] = useState<Video[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [displayCount, setDisplayCount] = useState(6);
    const itemsPerLoad = 6;

    useEffect(() => {
        const fetchVideos = async () => {
            const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || '';
            const channelId = 'UCeEkbPAUP38Y6NfqLy9zo-A'; // Uniguru Channel ID
            const maxResults = 50; // Fetch more videos to allow load more functionality

            if (!apiKey) {
                setIsLoading(false);
                setVideos(null);
                return;
            }

            setIsLoading(true);
            try {
                const response = await axios.get(
                    `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`
                );

                const items = response?.data?.items;
                if (response?.status === 200 && Array.isArray(items) && items.length > 0) {
                    setVideos(items);
                } else {
                    setVideos(null);
                }
            } catch (error) {
                console.error('Error fetching YouTube videos:', error);
                setVideos(null);
            } finally {
                setIsLoading(false);
            }
        };

        fetchVideos();
    }, []);

    // Fallback data if API fails or key is missing (for development/demo)
    const fallbackVideos = [
        {
            id: { videoId: "demo1" },
            snippet: {
                title: "Study in UK: Complete Guide for International Students 2024",
                description: "Everything you need to know about studying in the UK.",
                thumbnails: {
                    medium: { url: "/images/reviews/1.jpg" }, // Placeholder
                    high: { url: "/images/reviews/1.jpg" }
                },
                publishedAt: "2024-01-15T10:00:00Z"
            }
        },
        {
            id: { videoId: "demo2" },
            snippet: {
                title: "How to Secure a Full Scholarship in Canada",
                description: "Tips and tricks to get fully funded scholarships.",
                thumbnails: {
                    medium: { url: "/images/reviews/2.jpg" }, // Placeholder
                    high: { url: "/images/reviews/2.jpg" }
                },
                publishedAt: "2024-02-20T14:30:00Z"
            }
        },
        {
            id: { videoId: "demo3" },
            snippet: {
                title: "Student Visa Interview Questions & Answers",
                description: "Prepare for your visa interview with these common questions.",
                thumbnails: {
                    medium: { url: "/images/reviews/3.jpg" }, // Placeholder
                    high: { url: "/images/reviews/3.jpg" }
                },
                publishedAt: "2024-03-10T09:15:00Z"
            }
        }
    ];

    const displayVideos = (videos && videos.length > 0) ? videos : fallbackVideos;

    const SECTION_BG_URL =
        "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=2070&q=80";

    return (
        <section
            className="relative min-h-[600px] py-20 sm:py-24 lg:py-28 font-sans overflow-hidden"
            aria-labelledby="latest-news-heading"
        >
            {/* Background image – London theme */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
                style={{ backgroundImage: `url(${SECTION_BG_URL})` }}
                aria-hidden
            />

            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" aria-hidden />

            <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 sm:px-5 lg:px-6 xl:px-8 2xl:px-10">
                {/* Header – clean style */}
                <header className="text-center mb-12 sm:mb-14 lg:mb-16">
                    <p className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase mb-3">
                        From Our Channel
                    </p>
                    <h2
                        id="latest-news-heading"
                        className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white tracking-tight leading-tight"
                    >
                        Latest News & Resources
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed mx-auto">
                        Expert advice, student stories, and the latest updates on studying abroad.
                    </p>
                    <Link
                        href="https://www.youtube.com/@Uniguru_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-[#1a3b85] text-white font-semibold hover:bg-[#152d6b] transition-colors border-r border-[#D4AF37] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                        aria-label="Visit Uniguru YouTube channel"
                    >
                        <Youtube className="w-5 h-5" />
                        <span>Visit YouTube Channel</span>
                    </Link>
                </header>

                {/* Video cards – glass style, gold accent, bento feel */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {isLoading ? (
                        [1, 2, 3, 4, 5, 6].map((i) => (
                            <div
                                key={i}
                                className="rounded-2xl overflow-hidden bg-white/20 backdrop-blur-sm animate-pulse aspect-[4/3] w-full"
                            />
                        ))
                    ) : displayVideos.length > 0 ? (
                        displayVideos.slice(0, displayCount).map((video, index) => {
                            const isFallback = String(video.id.videoId).startsWith("demo");
                            const href = isFallback
                                ? "https://www.youtube.com/@Uniguru_"
                                : `https://www.youtube.com/watch?v=${video.id.videoId}`;
                            const thumbUrl =
                                video.snippet.thumbnails.high?.url ||
                                video.snippet.thumbnails.medium?.url;
                            const isFeatured = index === 0;
                            const publishedDate = new Date(video.snippet.publishedAt).toLocaleDateString("en-US", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                            });
                            return (
                                <Link
                                    key={video.id.videoId || index}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group flex flex-col h-full rounded-2xl overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-white/80 transition-all duration-300 ${
                                        isFeatured
                                            ? "bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgba(26,59,133,0.12)] hover:shadow-[0_20px_50px_rgba(26,59,133,0.18)] hover:-translate-y-1.5"
                                            : "bg-white/90 backdrop-blur-md shadow-[0_4px_24px_rgba(26,59,133,0.08)] hover:shadow-[0_16px_40px_rgba(26,59,133,0.14)] hover:-translate-y-1"
                                    }`}
                                    aria-label={`Watch: ${video.snippet.title}`}
                                >
                                    <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl bg-[#1a3b85]/5">
                                        {thumbUrl ? (
                                            <Image
                                                src={thumbUrl}
                                                alt={video.snippet.title}
                                                fill
                                                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        ) : null}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a3b85]/80 via-[#1a3b85]/20 to-transparent group-hover:from-[#1a3b85]/90 transition-colors duration-300" aria-hidden />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#D4AF37] text-[#1a3b85] flex items-center justify-center shadow-[0_4px_20px_rgba(212,175,55,0.4)] group-hover:scale-110 group-hover:shadow-[0_8px_28px_rgba(212,175,55,0.5)] transition-all duration-300" aria-hidden>
                                                <Play size={26} fill="currentColor" className="ml-0.5 sm:ml-1" />
                                            </div>
                                        </div>
                                        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                                            <span className="text-xs font-semibold uppercase tracking-wider text-white/90 drop-shadow-sm">
                                                {publishedDate}
                                            </span>
                                            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] group-hover:gap-2 transition-all">
                                                Watch
                                                <ArrowRight className="w-3.5 h-3.5" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col flex-1 p-5 sm:p-6 bg-white/50 group-hover:bg-white/70 transition-colors duration-300">
                                        <h3 className="text-lg sm:text-xl font-semibold text-[#1a3b85] mb-2 line-clamp-2 group-hover:text-[#152d6b] transition-colors">
                                            {video.snippet.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm line-clamp-3 flex-1 leading-relaxed">
                                            {video.snippet.description}
                                        </p>
                                    </div>
                                </Link>
                            );
                        })
                    ) : (
                        <div className="col-span-full text-center py-16 rounded-2xl bg-white/80 backdrop-blur-sm text-[#1a3b85] font-medium">
                            No videos available at the moment.
                        </div>
                    )}
                </div>

                {/* Load More Button */}
                {displayVideos.length > displayCount && (
                    <div className="flex justify-center mt-12 sm:mt-14 lg:mt-16">
                        <button
                            onClick={() => setDisplayCount(displayCount + itemsPerLoad)}
                            className="px-8 py-3 rounded-full bg-[#D4AF37] text-[#1a3b85] font-semibold hover:bg-[#C49B2E] transition-colors shadow-lg hover:shadow-[0_8px_24px_rgba(212,175,55,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black/40 focus-visible:ring-[#D4AF37]"
                            aria-label="Load more videos"
                        >
                            Load More
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default LatestNews;
