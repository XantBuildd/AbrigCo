import Categories from "@/components/home/Categories";
import Hero from "@/components/home/Hero";

const page = () => {
  return (
    <main>
      <Hero />
      <section className="h-full bg-white-broken">
        <article className="h-full w-full rounded-t-xl bg-light-beige p-4 sm:p-6 md:p-6 lg:p-8">
          <Categories />
        </article>
      </section>
    </main>
  );
};

export default page;
