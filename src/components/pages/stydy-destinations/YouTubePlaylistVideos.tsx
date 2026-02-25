"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import AnimatedSVG from "@/components/myComponents/AnimatedSVG";
import { Button } from "@/components/myComponents/button";

const YouTubePlaylistVideos = ({ id }: { id: string }) => {
  const [videos, setVideos] = useState<any>(null); // Set state type to Video[]
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      setIsLoading(true);
      const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || ""; // Fetch from env variable
      const playlistId = id || "PL3h6N3QJzuI2Hxe20Bo3fuMCbkgcU4JD2"; // Replace with your Playlist ID
      const maxResults = 50; // Fetch more results to ensure we have enough to sort

      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlistItems?key=${apiKey}&playlistId=${playlistId}&part=snippet&maxResults=${maxResults}`
        );

        const sortedVideos = response?.data?.items
          ?.filter((video: any) => video?.snippet?.title !== "Deleted video")
          ?.sort(
            (a: any, b: any) =>
              new Date(b?.snippet?.publishedAt).getTime() -
              new Date(a?.snippet?.publishedAt).getTime()
          )
          ?.slice(0, 3); // Take only the latest 3 videos

        setVideos(sortedVideos);
      } catch (error) {
        console.error("Error fetching YouTube playlist videos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideos();
  }, [id]);

  return (
    <>
      {isLoading || !videos ? (
        <div className=" w-full flex items-center justify-center">
          <AnimatedSVG className=" w-36 h-auto flex flex-col lg:flex-row gap-14" />
        </div>
      ) : (
        <div className=" w-full h-auto flex flex-col lg:flex-row gap-14">
          <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
            {videos.length > 0 &&
              videos.map(
                (video: any, index: number) =>
                  video?.snippet?.title !== "Deleted video" && (
                    <Link
                      key={index}
                      href={`https://www.youtube.com/watch?v=${video?.snippet.resourceId.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" w-full h-auto "
                    >
                      <Image
                        width={500}
                        height={300}
                        src={video?.snippet?.thumbnails?.medium?.url || ""}
                        alt={video?.snippet?.title || "title"}
                        className=" w-full h-auto rounded-lg overflow-hidden object-cover object-center"
                      />
                    </Link>
                  )
              )}
          </div>
        </div>
      )}
      <Link
        href={`https://www.youtube.com/playlist?list=${id}`}
        target="_blank"
        rel="noopener noreferrer"
        className=" mt-8 mx-auto"
      >
        <Button variant={"blue"} size={"lg"}>
          Visit Playlist
        </Button>
      </Link>
    </>
  );
};

export default YouTubePlaylistVideos;
