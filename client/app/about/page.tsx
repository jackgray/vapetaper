import { subtitle, title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h2 className={subtitle({ class: "mt-4" })}>
          <section>
            Vape Taper helps you track and taper your vaping habits by detecting trends in your use patterns and charting changes in them.
            It makes this convenient by only requiring a photo upload when you purchase a new vape. It will then assume that you consumed your last purchased vape within this time window and allow you to adjust the window manually. The total nicotine content in the vape is extrapolated by reading the label on the vape and comparing it against a database of known vape products and the nicotine concentration and puff counts in various devices.
            If the vape is not in the database, the user is asked to enter the concentration, puff count, brand, and product name which will add the device to the database.           

            If the photo recognition fails the user is asked to select from a list of last uploaded devices, or a complete list of known devices.
          </ section>
          <section>
            Vape Taper interpolates your daily use from the total nicotine content in the device and the time it took for you to replace it, and charts this alongside goals you can set.

            It can then display changing trends on your spending and consumption over various time periods and encourage you to curb your habits through comparing your progress to the average progress of users who opt to anonymously share their usage.
          </ section>
        </h2>
      </div>
    </ section>
  );
}
