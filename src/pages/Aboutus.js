import React from "react";

const Aboutus = () => {
  return (
    <main className="bg-[#f5f1e8] text-[#29251f]">

      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden  bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
          <div className="max-w-4xl text-white">

            <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-white/70">
              THE STORY BEHIND FOOD STORIES
            </p>

            <h1 className="max-w-4xl font-serif text-5xl font-normal leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
              More Than Food.
              <span className="mt-2 block italic text-[#e7b873]">
                The Stories We Carry With Us.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              Food has a way of holding memories. A familiar aroma can take us
              back to childhood, while a simple meal can remind us of someone
              we love.
            </p>

            <div className="mt-16 flex items-center gap-4">
              <span className="text-xs uppercase tracking-[0.25em] text-white/60">
                Scroll to explore
              </span>

              <div className="h-px w-20 bg-white/50" />
            </div>

          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-[#f5f1e8] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 sm:px-10 lg:grid-cols-[180px_1fr] lg:gap-20 lg:px-16">

          <div className="border-t border-[#29251f]/20 pt-4">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#8b7355]">
              OUR STORY
            </span>
          </div>

          <div className="max-w-4xl">

            <p className="font-serif text-3xl leading-tight text-[#29251f] sm:text-4xl lg:text-5xl">
              A recipe passed down through generations can carry a piece of
              family history.
            </p>

            <div className="mt-10 max-w-3xl space-y-6 text-base leading-8 text-[#625c52] sm:text-lg">
              <p>
                Sometimes, the foods we crave are not just about taste—they are
                about comfort, belonging, celebration, and home.
              </p>

              <p>
                <strong className="font-semibold text-[#29251f]">
                  Food Stories
                </strong>{" "}
                was created to explore these moments.
              </p>

              <p>
                We believe food is more than something we eat. It is woven
                into our relationships, traditions, celebrations, struggles,
                and everyday lives.
              </p>

              <p>
                It can express love when words fall short, bring people
                together around a table, offer comfort during difficult times,
                and keep memories of people and places alive.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Stories Beyond The Plate */}
      <section className="bg-[#ebe4d6] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

          <div className="mb-16 flex items-start gap-6 lg:mb-24">
            <span className="text-sm font-medium text-[#a48a66]">
              01
            </span>

            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-[#8b7355]">
                THE HEART OF FOOD STORIES
              </p>

              <h2 className="font-serif text-4xl font-normal sm:text-5xl lg:text-6xl">
                Stories Beyond the Plate
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">

            {/* Card */}
            <div className="relative flex min-h-[430px] flex-col justify-end overflow-hidden bg-[#34312b] p-8 text-[#f5f1e8] sm:p-12 lg:p-16">
              <span className="absolute left-8 top-8 text-xs text-white/40 sm:left-12 sm:top-12">
                01
              </span>

              <h3 className="max-w-md font-serif text-4xl leading-tight sm:text-5xl">
                Food is never
                <em className="block text-[#e7b873]">just food.</em>
              </h3>

              <p className="mt-8 max-w-lg text-base leading-7 text-white/65">
                Food Stories is not simply a collection of recipes. It is a
                space for stories about the people behind the food and the
                emotions that give it meaning.
              </p>
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center">
              <div className="space-y-6 text-base leading-8 text-[#625c52] sm:text-lg">
                <p>
                  Here, we explore the meals we grew up with, the dishes that
                  remind us of home, the recipes shared by grandparents and
                  parents, and the celebrations that revolve around food.
                </p>

                <p>
                  We also find meaning in the quiet, everyday moments that
                  become memories without us realizing it.
                </p>
              </div>

              <div className="mt-10 flex gap-4 border-l-2 border-[#c69b62] pl-6">
                <span className="font-serif text-5xl leading-none text-[#c69b62]">
                  “
                </span>

                <p className="pt-2 font-serif text-2xl italic leading-relaxed text-[#39342c]">
                  Some of the most powerful memories are made around the
                  simplest meals.
                </p>
              </div>
            </div>

          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 border-t border-[#29251f]/20 pt-10 md:grid-cols-2 md:items-end">
            <p className="max-w-xl text-base leading-8 text-[#625c52]">
              Some stories may be joyful. Some may be nostalgic. Some may be
              about love, loss, change, or simply the comfort of something
              familiar.
            </p>

            <p className="font-serif text-2xl leading-relaxed md:text-right">
              But each story begins with something we all understand:
              <span className="italic text-[#a27642]"> food.</span>
            </p>
          </div>

        </div>
      </section>

      {/* Why Food Stories */}
      <section className="bg-[#f5f1e8] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

          <div className="mb-16 flex items-start gap-6 lg:mb-24">
            <span className="text-sm font-medium text-[#a48a66]">
              02
            </span>

            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-[#8b7355]">
                WHY WE EXIST
              </p>

              <h2 className="font-serif text-4xl font-normal sm:text-5xl lg:text-6xl">
                Why Food Stories?
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">

            <div>
              <span className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#dfc7a3] text-xl text-[#715437]">
                ✦
              </span>

              <h3 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Because everyone
                <br />
                has a{" "}
                <em className="text-[#a27642]">food story.</em>
              </h3>
            </div>

            <div className="space-y-6 text-base leading-8 text-[#625c52] sm:text-lg">
              <p>
                It might be the dish your mother made when you were sick. The
                snack you shared with your closest friend after school. A
                recipe you learned from a grandparent.
              </p>

              <p>
                It could be a meal that reminds you of a place you once called
                home, or something as simple as the smell of dinner cooking
                that made you feel safe.
              </p>

              <p>
                These experiences may seem ordinary, but they become part of
                who we are.
              </p>

              <p>
                Food connects us to our past while creating new memories in
                the present. It carries culture, identity, tradition, and
                emotion from one generation to the next.
              </p>
            </div>

          </div>

          <div className="mt-20 border-y border-[#29251f]/15 py-12 text-center">
            <span className="block font-serif text-6xl leading-none text-[#c69b62]">
              “
            </span>

            <p className="mx-auto mt-4 max-w-3xl font-serif text-2xl italic leading-relaxed sm:text-3xl lg:text-4xl">
              And sometimes, the most meaningful stories are found in the
              simplest meals.
            </p>
          </div>

        </div>
      </section>

      {/* Purpose */}
      <section className="bg-[#302d27] py-24 text-[#f5f1e8] sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

          <div className="mb-16 flex items-start gap-6 lg:mb-20">
            <span className="text-sm font-medium text-[#c69b62]">
              03
            </span>

            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-[#c69b62]/70">
                WHAT WE BELIEVE
              </p>

              <h2 className="font-serif text-4xl font-normal leading-tight sm:text-5xl lg:text-6xl">
                A Place for People
                <br />
                and Their Stories
              </h2>
            </div>
          </div>

          <p className="max-w-3xl text-lg leading-8 text-white/65 sm:text-xl">
            Through Food Stories, we want to create a space where people can
            pause, remember, share, and connect.
          </p>

          <div className="mt-20 grid grid-cols-1 border-y border-white/10 md:grid-cols-3">

            <article className="border-b border-white/10 py-10 md:border-b-0 md:border-r md:px-10 md:first:pl-0">
              <span className="text-xs text-[#c69b62]">01</span>

              <h3 className="mt-6 font-serif text-3xl">
                Recipes
              </h3>

              <p className="mt-5 leading-7 text-white/55">
                We celebrate recipes, but we also celebrate the hands that
                prepare them.
              </p>
            </article>

            <article className="border-b border-white/10 py-10 md:border-b-0 md:border-r md:px-10">
              <span className="text-xs text-[#c69b62]">02</span>

              <h3 className="mt-6 font-serif text-3xl">
                Traditions
              </h3>

              <p className="mt-5 leading-7 text-white/55">
                We celebrate traditions and the people who keep them alive
                from one generation to the next.
              </p>
            </article>

            <article className="py-10 md:px-10 md:pr-0">
              <span className="text-xs text-[#c69b62]">03</span>

              <h3 className="mt-6 font-serif text-3xl">
                Memories
              </h3>

              <p className="mt-5 leading-7 text-white/55">
                Above all, we celebrate the emotions, relationships, and
                memories that food brings to the surface.
              </p>
            </article>

          </div>

        </div>
      </section>

      {/* Closing */}
      <section className="bg-[#f5f1e8] py-28 text-center sm:py-36 lg:py-48">
        <div className="mx-auto max-w-5xl px-6 sm:px-10">

          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#8b7355]">
            FOOD STORIES
          </p>

          <h2 className="mt-8 font-serif text-5xl font-normal leading-tight sm:text-6xl lg:text-8xl">
            Food feeds the body.
            <span className="mt-3 block italic text-[#a27642]">
              Stories feed something deeper.
            </span>
          </h2>

          <div className="mx-auto my-12 h-px w-24 bg-[#c69b62]" />

          <p className="mx-auto max-w-2xl text-base leading-8 text-[#625c52] sm:text-lg">
            Welcome to Food Stories—where every dish has a story, every memory
            has a taste, and every table has something worth remembering.
          </p>

        </div>
      </section>

    </main>
  );
};

export default Aboutus;




