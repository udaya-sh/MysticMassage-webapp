import React from "react";
import { Console } from "console";
import { sanityClient, urlFor } from "../sanity";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface Props {
  posts: Post[];
}

const Therapists = ({ posts }: Props) => {
  return (
    <div
      id="therapists"
      className="relative z-40 -mt-[0vh] min-h-screen text-color  space-y-10 py-20  lg:px-[300px] bg-[#222222] "
    >
      <div className=" gap-8 text-color ">
        <h1 className="text-[50px] py-20 my-4 primary-color uppercase font-extrabold  ">
          Therapists
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
          {posts.map((post) => (
            <div className="sm:w-full md:w-[100%] md:hover:scale-105 transition-transform duration-200 ease-in-out md:mr-20 md:mb-10 md:hover:border-[1px] border-[#E65728] rounded-lg cursor-pointer overflow-hidden">
              <Swiper spaceBetween={50} slidesPerView={1}>
                {post.poster.map((resource, index) => {
                  return (
                    <SwiperSlide>
                      <img
                        src={urlFor(resource).url()!}
                        className="w-full aspect-square object-cover  "
                        alt={post.slug.current}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              <div className=" flex justify-between p-5 bg-[#252422]">
                <div>
                  <p className=" text-[20px] text-color font-extrabold capitalize  ">
                    {post.slug.current}
                  </p>
                  <p></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Therapists;

export const getServerSideProps = async () => {
  const query = `*[_type == "therapist"]{
    _id,
    title,
    slug,
    overview,
  poster,
}`;

  const posts = await sanityClient.fetch(query);

  console.log(posts);

  return {
    props: {
      posts,
    },
  };
};
