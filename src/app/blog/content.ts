export type BlogBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    };

export const blogPost: {
  title: string;
  href: string;
  content: BlogBlock[];
} = {
  title: "Why building on SORs sucks",
  href: "https://x.com/arushi_ressl/status/2020943617079247226?s=20",
  content: [
    {
      type: "paragraph",
      text: `Dearest gentle readers,

I’ve had basically the most intense 4 weeks of my life and feel compelled to write this because I find myself suddenly having strong opinions about everything. I guess YC does that to you.`,
    },
    {
      type: "paragraph",
      text: `Coming back to what’s up with the biz -

Let’s start with a little background. We started Ressl AI in the first half of 2025 - with the thesis that productising IT services will be the next big unlock in capturing enterprise spend as models get better and better at coding tasks.

We chose Salesforce as our first platform of attack for a multitude of reasons.

> Salesforce was a front-office software. People seemed to care about the speed of delivery of configuration changes in front-office software more than back-office software. We also believed that one could make a revenue play here. “If your Salesforce implementation sucks, your pipeline leaks X% of deals leading to Y impact in business”.`,
    },
    {
      type: "paragraph",
      text: `> Salesforce as a PaaS was the easiest to connect to (mind you - this is pre-MCP popularisation - yes it hasn’t been that long). General purpose coding agents still sucked for Salesforce tasks in Q1 2025, but we had hunches of how we could get them to work for Salesforce to start off with - until the technology improves enough to use our distribution in Salesforce and go cross-platform.`,
    },
    {
      type: "paragraph",
      text: `> Least important reason but unlike SAP etc - Salesforce has mid-market customers - who I could build with as design partners before I needed to go enterprise. And, a senior of mine from college ran a Salesforce consulting firm and he let us work for him for a few months.`,
    },
    {
      type: "paragraph",
      text: `We launched in July after being a services firm for a few months. The next few months were a grind. We did well considering the space. In every offline and online forum, we went to we were known as the config agent for SFDC. We had ~400 tickets being solved by the platform on a weekly basis at our highest. I was known as the Salesforce girl, to my dismay. I can now say I did not enjoy being @-ed at every time someone mentioned Salesforce.`,
    },
    {
      type: "paragraph",
      text: "Now, here are a list of things I have learnt in few months of being in production that might be useful if you are exploring this space:",
    },
    {
      type: "list",
      items: [
        `Be very, very scared of Claude Code. We churned a very important customer after Claude Opus 4.5 released.

We had closed this SV darling customer in <5 days. And, it wasn’t a small ACV either. The timing was great since they were rapidly growing and adding sellers to the team every week, thereby requiring more and more Salesforce configuration work. We had a great relationship with them and the product did well. The story was perfect. But everyday as the models got better, the general purpose coding agents got better, our product got better - but the gap started closing between what we offered at a min of $1K/mo and what Cursor offered at $20/month.`,
        `Now you could say that Salesforce teams don’t use Claude Code (yet) - but I think that argument is fundamentally flawed because a) Agentforce Vibes (more on this) and b) I don’t think it’s a good argument to build anything in AI just because model labs don’t have distribution there yet - and definitely not in coding.`,
        `We were also left wide open to also being killed by the mothership - Salesforce. As long as there was sufficient work to be done to make geenral purpose coding agents work for Salesforce - we weren’t scared of Salesforce killing us because they weren’t going to be able to pull off that product. But the AI labs built such a great product that it became very easy for Salesforce to just pull on their capabilities, put their branding and distribution behind it and call it Agentforce Vibes. Salesforce, SAP and ServiceNow have all partnered with Cline to fork their software to make their own respective config agents.`,
      ],
    },
    {
      type: "paragraph",
      text: `Now, I must admit I do not know how the configuration of the rest of these platforms work - but I understand Salesforce deeply and anything worth configuring is totally possible API-first which means unfortunately for me, Cursor/Devin/Claude Code for Salesforce is just Cursor/Devin/Claude Code.`,
    },
    {
      type: "paragraph",
      text: "(AT THE 2025 OPENING OF DREAMFORCE BY FUCKING MARC BENIOFF - THE FIRST THING HE ANNOUNCED TO THE CROWD WAS AGENTFORCE VIBES. Can you imagine what it felt like to be building what I was building and sitting in the crowd listening to that keynote",
    },
    {
      type: "list",
      items: [
        "It wasn’t clear what the value proposition was beyond implementation and migration. After the initial heavy usage of set-up is done, the work does get significantly less (at-least for MM companies) - which means there is diminishing value of the product after initial procurement. (But tbf this could be offset by building for more SORs).",
        "Getting an entry when a company is in the implementation phase is very very tough. And % of net-new implementations happening every year are also reducing. I couldn’t convince myself there was a repeatable GTM here yet.",
        "During managed services - it broadly becomes a cost play. A MSP could do it for X, Ressl could do it for X/4. And broadly, for a company with ABC revenue, the % that goes towards Salesforce maintenance isn’t significant enough for them to think about buying AI to reduce that cost. (1 admin for 200-300 end-users unfort) Frankly, there are so many use-cases that end up getting prioritised above AI SFDC agents. Like, it could work and that is how we got our contracts - consultant replacement. But, it is a slog. You need a very very large TOFU with less than ideal conversion rates and you need to be okay with that. Teams you're selling to (enterprise apps ops) are weak parts of organizations with limited budgets.",
        "Product solves for scale, not GTM. Your GTM will still mirror that of a services firm.",
        'No one, and I mean no-one, cares about the productivity of Salesforce admins or Enterprise applications engineers. Sorry but that’s just the truth - you’re not going to win a sale or be a billion-$ outcome with that positioning. (Replacing the consulting firm works though.) Products are perceived as "nice-to-have" rather than essential, making it hard to capture significant budgets',
        "I’m not convinced what the tech arbitrage is as an AI-enabled services player. If everyone from Accenture to Infosys to your local SI - has access to coding tools (either general purpose or Salesforce distributed) - what arbitrage do you have in that world? Why wouldn’t an SI with an existing distribution win? I think it boils down to my first point about product commoditization.",
        "Customers mentally cap spending at 5-15% of their Salesforce costs, regardless of actual value provided. This creates a pricing ceiling that requires high volume to succeed. High volume requires low cost of sale, which is hard with products needing customization and hand-holding.",
        "Cross-platform expansion is difficult - teams are segregated and don't communicate. Cross-application use cases exist but are uncommon. No single person typically owns multiple systems, making it a harder sell",
        "Least important point - but do the best companies still use Salesforce / similar such enterprise application softwares in the next 10 years? And would the next-gen Salesforce not have config agents built in? (Like GigaML did with their AI-FDE)",
      ],
    },
    {
      type: "paragraph",
      text: "Last point I’ll add here is about procurement. Things are crazy in AI and procurement teams are literally losing their minds. You need to be very clear with the massive ROI that you’re bringing to the company. It can not be a slight uplift over an existing product.",
    },
    {
      type: "paragraph",
      text: "Some somewhat bull points:",
    },
    {
      type: "list",
      items: [
        "AI still doesn't work for very large codebase / Salesforce orgs - is there a way to solve for this? (But then again when Claude Code gets better - you will become redundant so do you really want to be in that race of always having to be marginally better than existing coding agents.)",
        "Is there a case to be an end to end delivery system (from requirements to build to deployment)? Having looked at Copado’s approach on this - my conclusion was no.",
        "Sell to non-tech companies as they won’t be the first people to try all the latest models and you can build enough / position differently enough to still warrant decent contract sizes - Unfort for me - all my distribution was sexy B2B SV style businesses RIP",
        "Go cross platform from day one and build for all of the major SORs. (My opinion - cross-platform expansion is difficult - teams are segregated and don't communicate.  So it’s basically a net-new sale with each SOR. Cross-application use cases exist but are very very uncommon. No single person typically owns multiple systems, making it a harder sell - but doable.)",
        "Do process mining and solve for the functional aspect of consulting (more on this soon)",
        "Just let the bubble burst and see what sticks",
      ],
    },
    {
      type: "paragraph",
      text: "What’s next for Ressl?",
    },
    {
      type: "list",
      items: [
        "We got into YC at a great time so we got the last 6 weeks as  some breathing space to figure out what’s next in the most talent dense room of the world",
        "We continue to stay bullish on AI services / AI BPO / AI roll-ups / AI eating menial labour",
        "We’ve built muscle of selling to traditional industries (beyond fancy tech companies) in the US - thank Harshita",
        "Our launch is this week so look out for that",
        "If you’d like to chat about introducing AI employees to your business, please find my cal here - https://calendly.com/arushi-gandhi",
      ],
    },
  ],
};
