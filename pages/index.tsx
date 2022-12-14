import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Landing from "../components/Landing";
import { sanityClient, urlFor } from "../sanity";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import About from "../components/About";
import Therapists from "../components/Therapists";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Navbar from "./../components/Navbar";

interface Props {
  posts: Post[];
}

export default function ({ posts }: Props) {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Online mobile massage services in London. Hayati Mobile Massage located in London with excellent services of therapist with experstise in healing of body and mind. "
        />

        <title>Hayati Mobile Massage </title>
        <link rel="icon" href="/logo-transparent.svg" />
      </Head>

      <div className="relative h-[200vh]">
        <video
          id="myVideo"
          muted
          autoPlay
          loop
          className="object-cover h-full  opacity-90 "
        >
          <source src="/landingBg.mp4" type="video/mp4" />
        </video>

        <div className="content ">
          <Landing />
        </div>
      </div>

      <section className="relative z-40 space-y-10 -mt-[100vh] min-h-screen text-color  ">
        <About />
      </section>
      <Therapists posts={posts} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "therapist"]{
    _id,
    title,
    slug,
    overview,
  poster,
}`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};
