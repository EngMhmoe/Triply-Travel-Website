//import React ICons
import {
  FaStar,
  FaHeart,
  FaReply,
  FaThumbsUp,
  FaThumbsDown,
  FaClock,
} from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";

//import framer-motion
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import FadeUpMotion from "../../../FreeMotions/FadeUpMotion";

export default function ReviewList({
  reviews,
  visible,
  setActiveReply,
  toggleAction,
  activeReply,
  replyText,
  setReplyText,
  addReply,
  //////////////////////////
  title,
}) {
  return (
    <section className="space-y-10">
      <h1 className="font-semibold text-2xl text-(--primary-color) text-shadow-lg text-shadow-black/10  mb-10">
        {title === "Comments" ? "Comments" : "Showing"}{" "}
        <span className="text-(--primary-pera)">
          ({Math.min(visible, reviews?.length)})
        </span>{" "}
        {title === "Comments" ? null : "Reviews"}
      </h1>

      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}

      {reviews?.slice(0, visible).map((rev, index) => (
        <FadeUpMotion>
          <motion.div
            key={rev.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-5 border border-black/10 shadow rounded-3xl flex flex-col gap-3 text-(--primary-pera) ${
              index % 2 ? "sm:ml-15" : ""
            }`}
          >
            <section className="w-full flex md:flex-row flex-col  items-center gap-4">
              <img
                src={`https://i.pravatar.cc/150?u=${rev.name}`}
                alt={rev.name}
                className="w-20 h-20 rounded-full"
              />

              {/* //////////////////////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////////////////////// */}

              {/* Header */}
              <div className="flex justify-between w-full">
                <div className="flex flex-col gap-1">
                  <h4 className="font-semibold text-xl text-(--primary-color2)">
                    {rev.name}
                  </h4>
                  {/* //////////////////////////////////////////////////////////////// */}
                  {/* //////////////////////////////////////////////////////////////// */}
                  <div className="flex items-center gap-2 text-md text-black/60">
                    <FaClock className="text-(--primary-color) text-lg" />
                    {new Date(rev.time).toLocaleString()}
                    {/* {rev.time} */}
                  </div>
                </div>

                {/* //////////////////////////////////////////////////////////////// */}
                {/* //////////////////////////////////////////////////////////////// */}

                {title === "Comments" ? null : (
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar
                        key={star}
                        className={
                          star <= Math.round(rev.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                )}
              </div>
            </section>

            {/* //////////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////// */}

            <div className="flex-1">
              {/* Text */}
              <p className="mt-2 text-md">{rev.description}</p>

              {/* //////////////////////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////////////////////// */}

              {/* Actions */}
              <div className="flex items-center justify-between gap-5 mt-5">
                <button
                  onClick={() => setActiveReply(rev.id)}
                  className="flex items-center gap-1.5 font-bold hover:text-(--primary-color2) cursor-pointer duration-1000"
                >
                  <FaReply className="text-(--primary-color2)" /> Reply
                </button>

                {/* //////////////////////////////////////////////////////////////// */}
                {/* //////////////////////////////////////////////////////////////// */}

                <section className="flex items-center gap-5">
                  <button
                    onClick={() => toggleAction(rev.id, "like")}
                    className={`flex items-center gap-1 cursor-pointer ${
                      rev.userActions?.liked ? "text-blue-500" : ""
                    }`}
                  >
                    <FaThumbsUp /> {rev.likes}
                  </button>

                  {/* //////////////////////////////////////////////////////////////// */}
                  {/* //////////////////////////////////////////////////////////////// */}

                  <button
                    onClick={() => toggleAction(rev.id, "dislike")}
                    className={`flex items-center gap-1 cursor-pointer ${
                      rev.userActions?.disliked ? "text-(--primary-color2)" : ""
                    }`}
                  >
                    <FaThumbsDown /> {rev.dislikes}
                  </button>

                  {/* //////////////////////////////////////////////////////////////// */}
                  {/* //////////////////////////////////////////////////////////////// */}

                  <button
                    onClick={() => toggleAction(rev.id, "heart")}
                    className={`flex items-center gap-1 cursor-pointer ${
                      rev.userActions?.loved ? "text-(--primary-color)" : ""
                    }`}
                  >
                    <FaHeart /> {rev.hearts}
                  </button>
                </section>
              </div>

              {/* //////////////////////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////////////////////// */}

              {/* Reply Input */}
              <AnimatePresence>
                {activeReply === rev.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 10, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4"
                  >
                    <input
                      value={replyText[rev.id] || ""}
                      onChange={(e) =>
                        setReplyText({
                          ...replyText,
                          [rev.id]: e.target.value,
                        })
                      }
                      className="border border-black/25 focus:outline-(--primary-color2) p-2.5 rounded-xl w-full"
                      placeholder="Write reply..."
                    />

                    {/* //////////////////////////////////////////////////////////////// */}
                    {/* //////////////////////////////////////////////////////////////// */}

                    <button
                      onClick={() => addReply(rev.id)}
                      className="flex items-center gap-2.5 mt-4 bg-(--primary-pera) hover:bg-(--primary-color) shadow-md shadow-black/50 duration-1000 cursor-pointer text-white px-5 py-1.5 rounded-4xl rounded-bl-none"
                    >
                      Send Reply
                      <BsFillSendFill />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* //////////////////////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////////////////////// */}

              {/* Replies */}
              {rev.replies?.map((reply) => (
                <div
                  key={reply.id}
                  className="
      ml-10
      mt-5
      p-3
      rounded-3xl
      bg-(--secondary-color)
      border
      flex flex-col gap-1
    "
                >
                  <section className="flex justify-between items-center">
                    {" "}
                    <h4 className="font-bold text-(--primary-color)">
                      {reply.name}
                    </h4>
                    <div className="flex items-center justify-end gap-2 text-md text-black/60">
                      <FaClock className="text-(--primary-color2) text-sm" />
                      {new Date(rev.time).toLocaleString()}
                    </div>
                  </section>

                  <p className="mt-3.5 ml">{reply.message}</p>
                </div>
              ))}
            </div>

            {/* //////////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////// */}

            {rev.replies?.length === 0 && (
              <p className="opacity-50 mt-3.5">No replies yet</p>
            )}
          </motion.div>
        </FadeUpMotion>
      ))}
    </section>
  );
}
