import Question from "@/components/Question";

const faq = () => {
  return (
    <div>
      <p>faq.tsx</p>
      <Question
        question="What is GuildHub?"
        respond="GuildHub is Albion Online's guild manager. A set of tools designed to support the management of a guild, its members, officers, blacklist, treasury, and a mass of other things."
      />
      <Question
        question="Can I use GuildHub for another game?"
        respond="All of the tools available in the app are designed specifically for Albion Online, but if you find them useful, feel free to use them!"
      />
      <Question
        question="Is there support planned for other games?"
        respond="At this point, support for other games is in distant plans, but it is being considered. Priority is given to the development of Albion applications, with World of Warcraft and ESO as potential future additions."
      />
      <Question
        question="Is the platform free of charge?"
        respond="At this moment, yes, the platform is free of charge. However, there are plans to move to a subscription model with a free plan in the future."
      />
    </div>
  );
};

export default faq;
