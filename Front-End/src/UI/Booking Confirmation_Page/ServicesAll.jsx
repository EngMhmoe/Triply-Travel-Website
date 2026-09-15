//import Component UI
import ServicesIcons from "../[Cart] AND [Check Out Booking]/ServicesIcons";

export default function ServicesAll({ title, services }) {
  return (
    <section className="mt-2 justify-content-evenly  font-semibold  w-full flex flex-col items-start gap-2">
      <h1 className="text-lg font-bold text-(--primary-color)">
        {title} Services:{" "}
      </h1>

      <ServicesIcons services={services} />
    </section>
  );
}
