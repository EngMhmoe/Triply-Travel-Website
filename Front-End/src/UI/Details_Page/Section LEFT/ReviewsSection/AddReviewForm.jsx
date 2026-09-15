//import React Hooks
import { useState } from "react";

//import Component
import HoverRating from "./HoverRating";

export default function AddReviewFrom({ addReview, title }) {
  //
  const [rating, setRating] = useState(0);

  //valueRating
  const [value, setValue] = useState(4.5);

  //
  const [form, setForm] = useState({
    name: "",
    // email: "",
    description: "",
  });

  //
  const handleSubmit = () => {
    // if (!form.name || !form.description) return;
    if (!form.name || !form.description.trim()) {
      return;
    }

    //
    addReview({
      id: Date.now(),
      name: form.name,
      time: new Date().toLocaleString(),
      rating,
      description: form.description,
      likes: 0,
      dislikes: 0,
      hearts: 0,
      replies: [],
      userActions: { liked: false, disliked: false, loved: false },
    });

    // setForm({ name: "", email: "", description: "" });
    setForm(() => ({
      name: "",
      // email: "",
      description: "",
    }));

    setRating(0);

    setValue(4.5);
  };

  return (
    <div className="bg-red-950 p-6 rounded-4xl text-white shadow shadow-red-300">
      <h3 className="font-bold text-3xl text-(--primary-color) mb-4">
        Leave A {title === "Comments" ? " Comment" : "Review"}
      </h3>

      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}

      {title === "Comments" ? null : (
        <section>
          <p className="text-xl font-semibold mb-2">Your Rating</p>

          {/* //////////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////// */}

          <div className="flex gap-2 mb-4">
            <HoverRating
              setRating={setRating}
              value={value}
              setValue={setValue}
            />
          </div>
        </section>
      )}

      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}

      <input
        required
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        placeholder="Your Name*"
        className="w-full mb-5 p-2.5 border border-(--primary-color) outline-0 text-lg font-semibold rounded-xl"
      />

      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}

      <textarea
        required
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        placeholder="Write Your Review*"
        className="w-full h-40 mb-5 p-2.5 border border-(--primary-color) outline-0 text-lg font-semibold rounded-xl"
      />

      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}

      <button
        onClick={handleSubmit}
        className="cursor-pointer hover:border border-(--primary-color) outline-0 hover:bg-transparent  duration-1000 bg-(--primary-color2) text-white px-7 py-2.5 font-semibold rounded-full rounded-bl-none text-xl"
      >
        {title === "Comments" ? "Post Comment" : "Add Leave A Review"}
      </button>
    </div>
  );
}
