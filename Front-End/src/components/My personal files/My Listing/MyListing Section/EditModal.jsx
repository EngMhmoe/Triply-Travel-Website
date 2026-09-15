//import React
import { useState } from "react";

//import Components
import ModalShell from "./ModalShell";

//import React ICons
import { FiX, FiLoader, FiCheckCircle } from "react-icons/fi";
import { FaHotel, FaPlane, FaCar, FaShip } from "react-icons/fa";

const TYPE_META = {
  Hotel: { icon: FaHotel, from: "#0ea5b7", to: "#0f766e" },
  Flight: { icon: FaPlane, from: "#3b82f6", to: "#1e3a8a" },
  Car: { icon: FaCar, from: "#f59e0b", to: "#b45309" },
  Cruise: { icon: FaShip, from: "#8b5cf6", to: "#5b21b6" },
};

export function EditModal({ listing, onClose, onSave }) {
  const [form, setForm] = useState({ ...listing });
  const [saving, setSaving] = useState(false);

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaving(true);
    setTimeout(() => {
      onSave({ ...form, price: Number(form.price) });
      setSaving(false);
    }, 700);
  };

  return (
    <ModalShell onClose={onClose}>
      <form onSubmit={handleSubmit} className="p-6">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-800">Update Listing</h3>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600"
          >
            <FiX size={18} />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-500">
              Title
            </label>
            <input
              value={form.title}
              onChange={update("title")}
              required
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-slate-500">
              Address
            </label>
            <input
              value={form.address}
              onChange={update("address")}
              required
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-500">
                Price ($)
              </label>
              <input
                type="number"
                value={form.price}
                onChange={update("price")}
                required
                min="0"
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-500">
                Type
              </label>
              <select
                value={form.type}
                onChange={update("type")}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
              >
                {Object.keys(TYPE_META).map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-slate-500">
              Status
            </label>
            <div className="flex gap-2">
              {["Active", "Expired"].map((s) => (
                <button
                  type="button"
                  key={s}
                  onClick={() => setForm((f) => ({ ...f, status: s }))}
                  className={`flex-1 rounded-lg border py-2 text-sm font-medium transition ${
                    form.status === s
                      ? s === "Active"
                        ? "border-emerald-300 bg-emerald-50 text-emerald-600"
                        : "border-rose-300 bg-rose-50 text-rose-500"
                      : "border-slate-200 text-slate-400 hover:bg-slate-50"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-lg border border-slate-200 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={saving}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-teal-600 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-700 disabled:opacity-70"
          >
            {saving ? (
              <>
                <FiLoader className="animate-spin" size={14} /> Saving...
              </>
            ) : (
              <>
                <FiCheckCircle size={14} /> Save Changes
              </>
            )}
          </button>
        </div>
      </form>
    </ModalShell>
  );
}
