//import Component UI
import FadeUpMotion from "../../../../UI/FreeMotions/FadeUpMotion";
import CommentSection from "../../../../UI/Details_Page/Section LEFT/ReviewsSection/ReviewsSection";

//import Component NEW
import AuthorCard from "../Section Right/AuthorCard";
import HeroSection from "./HeroSection";
import MetaBar from "./MetaBar/MetaBar";
import PostBody from "./PostBody/PostBody";

//import motion
import { motion } from "framer-motion";

export default function SectionLeft({ BlogDataDetails, FilterTag }) {
  return (
    <section className="text-(--primary-pera)">
      {/* HeroSection ==> OK */}
      <FadeUpMotion>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 50, y: 0 }}
          transition={{ duration: 2 }}
        >
          <HeroSection {...BlogDataDetails} />
        </motion.div>
      </FadeUpMotion>

      {/* ////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////// */}

      {/* MetaBar ==> OK */}
      <FadeUpMotion>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 10 }}
          transition={{ delay: 0.5 }}
        >
          <MetaBar BlogDataDetails={BlogDataDetails} />
        </motion.div>
      </FadeUpMotion>

      {/* ////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////// */}

      {/* PostBody ==> OK ==> is IS NOT Tags */}
      <FadeUpMotion>
        <PostBody {...BlogDataDetails} FilterTag={FilterTag} />
      </FadeUpMotion>

      {/* ////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////// */}

      {/* AuthorCard ==> ok */}
      <FadeUpMotion>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <AuthorCard {...BlogDataDetails?.details?.author} />
        </motion.div>
      </FadeUpMotion>

      {/* ////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////// */}

      {/* CommentSection => Ok */}
      <FadeUpMotion>
        <CommentSection
          key={BlogDataDetails?.id}
          initialReviews={BlogDataDetails?.details?.reviews}
          tourId={BlogDataDetails?.id}
          title={"Comments"}
        />
      </FadeUpMotion>
    </section>
  );
}
