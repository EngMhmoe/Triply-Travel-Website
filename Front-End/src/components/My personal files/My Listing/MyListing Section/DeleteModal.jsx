//import React
import { useState } from "react";

//import Components
import ModalShell from "./ModalShell";

//import React Icons
import { FiAlertTriangle, FiLoader, FiTrash2 } from "react-icons/fi";

export default function DeleteModal({ listing, onClose, onConfirm }) {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = () => {
    setDeleting(true);
    setTimeout(() => {
      onConfirm();
    }, 700);
  };

  return (
    <ModalShell onClose={onClose}>
      <div className="p-6 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-rose-50 text-rose-500">
          <FiAlertTriangle size={26} />
        </div>
        <h3 className="mt-4 text-lg font-bold text-slate-800">
          Delete this listing?
        </h3>
        <p className="mx-auto mt-2 max-w-xs text-sm text-slate-500">
          You're about to permanently delete{" "}
          <span className="font-semibold text-slate-700">
            "{listing.title}"
          </span>
          . This action can't be undone.
        </p>

        <div className="mt-6 flex gap-3">
          <button
            onClick={onClose}
            disabled={deleting}
            className="flex-1 rounded-lg border border-slate-200 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            disabled={deleting}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-rose-500 py-2.5 text-sm font-semibold text-white transition hover:bg-rose-600 disabled:opacity-70"
          >
            {deleting ? (
              <>
                <FiLoader className="animate-spin" size={14} /> Deleting...
              </>
            ) : (
              <>
                <FiTrash2 size={14} /> Delete
              </>
            )}
          </button>
        </div>
      </div>
    </ModalShell>
  );
}
