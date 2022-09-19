import mainstyles from "../styles/Main.module.scss";
import styles from "../styles/Posts.module.scss";
import Head from "next/head";
import BackToPortfolio from "../components/BackToPortfolio";
import Image from "next/image";
import Thumbnail from "/public/thumbnail-social-media.png";

const CaseStudy1 = () => {
  return (
    <>
      <Head>
        <title>
          Marketing Case Study #1: Social Media - Ryan Krysiak Development
          Portfolio
        </title>
        <meta
          name="description"
          content="Web development portfolio of Ryan Krysiak"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={mainstyles.wrapper}>
        <div className={styles.whiteBackground}>
          <h1>Maximizing Social Engagement: Case Study #1</h1>
          <div className={styles.tagline}>From 0 to 200,000 in 6 months</div>
          <div className={styles.thumbnail}>
            <Image src={Thumbnail} alt="Social Media Case Study" />
          </div>
          <div className={styles.content}>
            <p>
              After finding success in SEO, I wanted to expand my skillset of
              Social Media Growth.
              <br />I grew a community from 0 - 200,000 in 6 months on the app,
              Musical.ly (the predecessor to TikTok) and created a viral video
              that garnered 20+ million views across social platforms and
              coordinated omnipresent marketing efforts that landed placements
              on Twitter News, Cheddar News, What’s Trending, The Huffington
              Post, and more.
              <br />
              Let’s dig into it.
            </p>
            <h2>The Stress Test</h2>
            <p>
              Creating a naturally shareable piece of content is the goldmine of
              digital marketing. Pour a little ad spend behind a shareable piece
              of content and it takes off on its own. But finding something that
              works is often very expensive. How much money is enough to
              prove-out the validity of a piece of content? This is where the
              stress test comes in.
            </p>
            <p>
              Stress Testing a piece of content means using free platforms to
              see what gains traffic. Then take your best performing pieces of
              content and pour gasoline on them in the form of ad spend. This
              dramatically reduces ad spend on content that wasn’t going to work
              well in the first place.
            </p>
            <p>
              Of course, this wasn’t fully possible until algorithms like
              Musical.ly/TikTok came around. The closest runner up would
              probably be something like Reddit - though the nature of that
              platform is different. Now, the most used platforms fundamentally
              are built around stress testing content.
            </p>
            <h2>Stress Testing In Practice</h2>
            <p>
              Unlike TikTok, Musical.ly wasn’t fully built around random
              discoverability. Instead, the app had a featured page where the
              app would manually feature handfuls of videos each day.
            </p>
            <p>
              Getting a feature was like striking gold - guaranteeing you
              hundreds of thousands of views in a few hours. I was lucky enough
              to get around 10 of them over the 6 months using the app.
            </p>
            <p>
              There was one particular video that really did well after its
              feature. It was a silly video called “Shark-ira”. I noticed that
              the engagement was easily 1.5x what a normal feature would yield.
              Later that day, I saw somebody had ripped it and posted it to
              twitter and it was taking off there.
            </p>
            <p>
              This is a great example of a piece of content that has been stress
              tested. For zero dollars spent, I discovered I had a winner on my
              hands.
            </p>
            <p>
              As a result, I started up a facebook ad campaign and poured $200
              into it. The result? 15 million views on my video alone (not
              counting other platforms/people who ripped and reposted). The
              facebook page went from 0 - 10,000 followers as well. Talk about a
              return on investment.
            </p>
            <h2>Omnipresent Marketing</h2>
            <p>
              If it does exceptionally well somewhere, it will likely do well
              everywhere.
              <br />
              The goal of omnipresent marketing is to be everywhere, all at
              once. Most people are using multiple social platforms daily. So if
              you make it impossible for them to escape your content, you create
              a mini cultural moment.
            </p>
            <p>
              This is what ultimately happened with Shark-ira. I was pouring
              gasoline on all the social platforms and it was taking off.
              Facebook, Twitter, Instagram, Musical.ly - you couldn’t escape it
              that first week.
            </p>
            <p>
              As a result, it was picked up by Twitter News, Cheddar News,
              What’s Trending, The Huffington Post, and even Wyclef (the singer
              in the song) tweeted about it. This would have never happened if
              it wasn’t omnipresent in that brief moment of time.
            </p>
            <h2>Community Growth</h2>
            <p>
              While going viral is exciting, it’s more like hitting a jackpot
              than anything else. You can set yourself up for a moment like
              that, but you can’t force it to happen. It requires many factors
              that are out of your control.
            </p>
            <p>
              Because of this, the majority of my growth on Musical.ly was due
              to my community building strategy. One on one connection at scale.
            </p>
            <p>
              While making content, I made a daily effort of spending several
              hours per day going out and supporting content from other tiny,
              everyday creators on the platform. Not promoting, just supporting.
              This quickly grew the account from 0 - 100. Then 100 - 1,000. Then
              1,000 - 10,000.
            </p>
            <p>
              But the strategy had to change once it hit 5 digits. I couldn’t
              consistenly support the videos of 10,000 people. There just
              weren’t enough hours in the day. So I switched to making 2x the
              amount of content and making sure to continue to interact with the
              people who were interacting on my videos already (developing
              deeper connections and super-fans).
            </p>
            <p>
              This helped propel things from 10,000 to just under 200,000 when I
              decided to stop creating.
              <br />A major success in just 6 short months.
            </p>
            <h2>Why I Stopped</h2>
            <p>
              Growing the community felt a lot like a game and I loved that. I
              love devising strategies and comparing it against past data to
              break through new barriers. But I hated being a “micro
              influencer”. It felt inauthentic to my being and was weighing on
              me with more weight as things got bigger. I learned a lot from the
              experience, but it wasn’t a life path that I wanted to continue
              down.
            </p>
            <BackToPortfolio />
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudy1;
