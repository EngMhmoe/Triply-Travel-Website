//import react Hooks
import { useState, useEffect, useRef } from "react";

//import Component UI
import FadeUpMotion from "../../../FreeMotions/FadeUpMotion";

//import Components
import ReviewSummary from "./ReviewSummary";
import ReviewList from "./ReviewList";
import AddReviewFrom from "./AddReviewForm";
import LoadMore from "./LoadMore";

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

export default function ReviewsSection({ initialReviews, tourId, title }) {
  //
  const STORAGE_KEY = `tour_reviews_${tourId}`;

  //
  const [visible, setVisible] = useState(2);
  const [replyText, setReplyText] = useState({});
  const [activeReply, setActiveReply] = useState(null);

  //
  const reviewsRef = useRef(null);

  // ================= LOAD FROM LOCAL =================

  const safeParse = (data) => {
    try {
      const parsed = JSON.parse(data);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  };

  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      const parsed = safeParse(saved);
      return parsed.length ? parsed : initialReviews;
    }

    return initialReviews;
  });

  // ================= SAVE TO LOCAL =================

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
  }, [reviews, STORAGE_KEY]);

  useEffect(() => {
    setReplyText({});
    setActiveReply(null);
    setVisible(2);
  }, [tourId]);

  const toggleAction = (id, type) => {
    setReviews((prev) =>
      prev.map((rev) => {
        if (rev.id !== id) return rev;

        let updated = {
          ...rev,

          likes: rev.likes ?? 0,

          dislikes: rev.dislikes ?? 0,

          hearts: rev.hearts ?? 0,

          userActions: rev.userActions || {
            liked: false,
            disliked: false,
            loved: false,
          },
        };

        if (type === "like") {
          updated.userActions.liked = !updated.userActions.liked;

          updated.likes += updated.userActions.liked ? 1 : -1;
        }

        if (type === "dislike") {
          updated.userActions.disliked = !updated.userActions.disliked;

          updated.dislikes += updated.userActions.disliked ? 1 : -1;
        }

        if (type === "heart") {
          updated.userActions.loved = !updated.userActions.loved;

          updated.hearts += updated.userActions.loved ? 1 : -1;
        }

        return updated;
      }),
    );
  };

  // ================= ADD REPLY =================
  const addReply = (id) => {
    if (!replyText[id]?.trim()) return;

    setReviews((prev) =>
      prev.map((rev) =>
        rev.id === id
          ? {
              ...rev,

              replies: [
                ...rev.replies,

                {
                  id: Date.now(),

                  name: "You",

                  message: replyText[id],

                  time: new Date().toLocaleString(),
                },
              ],
            }
          : rev,
      ),
    );

    setReplyText((prev) => ({
      ...prev,
      [id]: "",
    }));

    setActiveReply(null);
  };

  const addReview = (review) => {
    setReviews((prev) => [
      {
        ...review,

        id: Date.now(),

        replies: [],

        likes: 0,

        dislikes: 0,

        hearts: 0,

        userActions: {
          liked: false,
          disliked: false,
          loved: false,
        },
      },

      ...prev,
    ]);

    setTimeout(() => {
      reviewsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return (
    <div ref={reviewsRef} className="space-y-10 scroll-mt-30">
      {/* ReviewSummary ==> OK */}
      <FadeUpMotion>
        {title === "Comments" ? null : (
          <ReviewSummary initialReviews={reviews} />
        )}
      </FadeUpMotion>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* ================= REVIEWS ================= == OK */}
      <FadeUpMotion>
        <ReviewList
          reviews={reviews}
          visible={visible}
          setActiveReply={setActiveReply}
          toggleAction={toggleAction}
          activeReply={activeReply}
          replyText={replyText}
          setReplyText={setReplyText}
          addReply={addReply}
          /////////////////////////////////
          title={title}
        />
      </FadeUpMotion>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* ================= LOAD MORE ================= ==> OK */}
      <FadeUpMotion>
        <LoadMore visible={visible} reviews={reviews} setVisible={setVisible} />
      </FadeUpMotion>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* ================= ADD REVIEW ================= ==> OK */}
      <FadeUpMotion>
        <AddReviewFrom addReview={addReview} title={title} />
      </FadeUpMotion>
    </div>
  );
}
