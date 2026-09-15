//import Component UI
import SwiperSlideImgs from "../../../../../UI/Details_Page/Section LEFT/HeroSection/SwiperSlideImgs";
import FadeUpMotion from "../../../../../UI/FreeMotions/FadeUpMotion";

//import Component NEW
import Title from "./Title";
import Description from "./Description";
import Blockquote from "./Blockquote";
import Tags from "./Tags";

//import motion
import { motion } from "framer-motion";

export default function PostBody({ title, details, FilterTag }) {
  const firstTwoDescriptions = details?.postBody?.description?.slice(0, 3);

  const thirdDescription = details?.postBody?.description[2];

  const fourthDescription = details?.postBody?.description[3];

  return (
    <div className="mt-5">
      {/* Title ==> OK */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.1, duration: 0.4 },
        }}
      >
        <Title title={title} />
      </motion.h1>

      {/* ////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////// */}

      {/* Description ==> OK */}
      <FadeUpMotion>
        {firstTwoDescriptions?.map((item) => (
          <motion.p
            key={item.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.1, duration: 0.4 },
            }}
          >
            <Description item={item} />
          </motion.p>
        ))}
      </FadeUpMotion>

      {/* ////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////// */}

      {/* Blockquote ==> OK */}
      <FadeUpMotion>
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.1, duration: 0.4 },
          }}
        >
          <Blockquote {...details?.postBody?.blockquote} />
        </motion.section>
      </FadeUpMotion>

      {/* ////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////// */}

      {/* Description ==> OK */}
      <FadeUpMotion>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.1, duration: 0.4 },
          }}
        >
          <Description item={thirdDescription} />
        </motion.p>
      </FadeUpMotion>

      {/* ////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////// */}

      {/* Double Images ==> OK */}
      <FadeUpMotion>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.1, duration: 0.4 },
          }}
          className="my-8"
        >
          <SwiperSlideImgs SwiperSlideImgs={details?.postBody?.gallery} />
        </motion.div>
      </FadeUpMotion>

      {/* ////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////// */}

      {/* Description ==> OK */}
      <FadeUpMotion>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.1, duration: 0.4 },
          }}
        >
          <Description item={fourthDescription} />
        </motion.p>
      </FadeUpMotion>

      {/* ////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////// */}

      {/* Tags ==> NO */}
      <FadeUpMotion>
        <Tags tags={details?.postBody?.tags} FilterTag={FilterTag} />
      </FadeUpMotion>
    </div>
  );
}
