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
import Contact from "../components/Contact";

interface Props {
  posts: Post[];
}

export default function ({ posts }: Props) {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Online massage services in London. Mystical massage service in London with excellent services of therapist with ecperstise in healing. "
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <title>Mystic Massage London</title>
        <link rel="icon" href="/logo-color.svg" />
      </Head>
      <div className="relative h-[200vh]">
        <video
          id="myVideo"
          autoPlay
          muted
          loop
          className="object-cover h-full  opacity-90 "
        >
          <source src="/landingBg.mp4" type="video/mp4" />
        </video>

        <div className="content ">
          <Header />
          <Landing />
        </div>
      </div>

      <section className="relative z-40 space-y-10 -mt-[100vh] min-h-screen text-color  ">
        <About />
      </section>
      <Therapists posts={posts} />
      <Contact></Contact>
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
