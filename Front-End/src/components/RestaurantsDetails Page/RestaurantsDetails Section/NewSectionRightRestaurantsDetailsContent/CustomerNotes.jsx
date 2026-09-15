export default function CustomerNotes({ booking, updateBooking }) {
  return (
    <textarea
      value={booking.CustomerNotes}
      //////////////////////////////////////
      //////////////////////////////////////

      onChange={(e) => {
        updateBooking({
          CustomerNotes: e.target.value,
        });
      }}
      //////////////////////////////////////
      //////////////////////////////////////

      name="CustomerNotes"
      id="CustomerNotes"
      rows={5}
      placeholder="Customer Notes"
      className="w-full flex flex-col gap-2 font-semibold capitalize border border-(--primary-color) outline-0 rounded-2xl p-4 cursor-pointer"
    ></textarea>
  );
}
