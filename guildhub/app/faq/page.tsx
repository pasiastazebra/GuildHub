import Question from "@/components/Question";

//! Please keep in mind that due to stupid Question component animation
//! respond text should be that long

//? Question ideas:
//?
//? -Login using Google

const faq = () => {
  return (
    <>
      <h1>Frequently Asked Questions</h1>
      <Question
        question="What is GuildHub?"
        respond="GuildHub is Albion Online's guild manager. A set of tools designed to help you manage your guild, its members, officers, blacklist, treasury, armory and a ton of other stuff."
      />
      <Question
        question="Can I use GuildHub for another game?"
        respond="All of the tools available in the app are designed specifically for Albion Online, but if you find them useful, feel free to use them, but I can't guarantee a perfect experience."
      />
      <Question
        question="Is there support planned for other games?"
        respond="At this point, support for other games is in distant plans, but it is being considered. Priority is given to the development of Albion applications, with World of Warcraft and ESO as potential future additions."
      />
      <Question
        question="Is the platform free of charge?"
        respond="At this moment yes, but in the future there are plans to move to a subscription model (the price will not be too high 😄) with a free plan. Any changes to this will be announced accordingly in the user panel."
      />
      <Question
        question="Is a mobile version planned?"
        respond="It's hard to say. Landing page for sure, but as for the port of the app itself, it all depends on the final complexity. At the moment, rather not, but everything can change."
      />
      <Question
        question="How do I access the app?"
        respond="During the closed beta, you need an access token and an access tag. If you are a guild master, hit me up on Discord, while if you are an officer from a guild using GuildHub, hit up your guild master."
      />
    </>
  );
};

export default faq;
