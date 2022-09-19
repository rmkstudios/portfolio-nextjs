import mainstyles from "../styles/Main.module.scss";
import styles from "../styles/Posts.module.scss";
import Head from "next/head";
import BackToPortfolio from "../components/BackToPortfolio";
import Image from "next/image";
import Thumbnail from "/public/thumbnail-seo.png";

const CaseStudy1 = () => {
  return (
    <>
      <Head>
        <title>
          Marketing Case Study #2: SEO - Ryan Krysiak Development Portfolio
        </title>
        <meta
          name="description"
          content="Web development portfolio of Ryan Krysiak"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={mainstyles.wrapper}>
        <div className={styles.whiteBackground}>
          <h1>Maximizing Organic Search Traffic: Case Study #2</h1>
          <div className={styles.tagline}>
            Becoming one of HostGator&apos;s top affiliates through organic
            search traffic
          </div>
          <div className={styles.thumbnail}>
            <Image src={Thumbnail} alt="SEO Case Study" />
          </div>
          <div className={styles.content}>
            <p>
              I started my career as a freelance web designer. But after several
              years, I began expanding my skillset into digital marketing and
              quickly developed an affinity for SEO and that lead to becoming
              one of HostGator&apos;s top affiliates in 2015. Let&apos;s dig
              into the fundamentals of SEO strategy and how the space has
              changed!
            </p>
            <h2>Understanding Google SEO</h2>
            <p>
              While optimization tactics change a lot over time, the
              fundamentals have always remained constant. Ranking on Google is
              all about trust and endorsement (often through link building).
              Let&apos;s understand this through a simple analogy.
            </p>
            <ul>
              <li>
                Imagine a school filled with a mix of trustworthy and
                untrustworthy kids.
                <br />
                Today, a new student enrolls. How can we best-guess if they are
                trustworthy or not?
              </li>
              <li>
                One of the easiest answers is endorsement. <br />
                If trustworthy students begin hanging around the new student,
                that is a possible green flag. <br />
                If untrustworthy students begin hanging around the new student,
                that is a possible red flag. <br />
                Additionally, one highly trustworthy endorsement is worth more
                than 100 semi-trustworthy endorsements.
                <br />
                This is essentially the concept of &lsquo;backlinks&lsquo; in
                SEO.
              </li>
              <li>
                When you launch a brand new site, it is like you&apos;re that
                brand new enrolled student.
                <br />
                Google doesn&apos;t know if they can trust you or not, so they
                begin to wait for endorsements.
                <br />
                If a bunch of sites that Google already trusts begin linking to
                your site, your trust goes up in Google&apos;s eyes and they
                increase your rankings. This is a simplification of the concept,
                but now you understand the fundamentals of how Google creates
                their search rankings.
              </li>
            </ul>
            <h2>Understanding YouTube SEO</h2>
            <p>
              YouTube is a lot more straightforward than Google.
              <br />
              While it still partially relies upon a trust model, it is far less
              weighted than Google Search. Instead, YouTube relies primarily on
              clickthrough rate (CTR) and watch time (WT).
            </p>
            <ul>
              <li>Low CTR + Low WT = Massive Red Flag</li>
              <li>High CTR + Low WT = Red Flag</li>
              <li>Low CTR + High WT = Green Flag</li>
              <li>High CTR + High WT = Massive Green Flag</li>
            </ul>
            <p>
              This is why it&apos;s very important that you work on improving
              your watch time prior to working on your click-through rate.
            </p>
            <h2>My Implementation</h2>
            <p>
              I operated a coupon website similar to RetailMeNot that offered
              promo codes for online purchases. While the site contained
              hundreds of pages for hundreds of retailers, the majority of the
              traffic came from less than 10 retailers.
            </p>
            <ul>
              <li>
                Google Strategy: The goal was to rank for as many
                &ldquo;retailer promo code&ldquo; / &ldquo;retailer
                coupon&ldquo; searches as possible. But traffic was only really
                aquired if you were in the top 3 search results. I A/B tested
                hundreds of backlink strategies on external sites and used the
                ones that worked best on the actual site.
              </li>
              <li>
                YouTube Strategy: I recognized the coupon site as part of a
                conversion funnel and spent time creating videos teaching people
                how to create websites for themselves using HostGator. As a
                result, anyone who used the tutorial would get the coupon code
                from my website and I would grab an affiliate commission for
                that sale. For several years, I was ranked #1 for huge search
                terms like &ldquo;How To Create a Website&ldquo;. These videos
                performed very well at the time and I became one of
                HostGator&apos;s top affiliates - earning over $500,000 in a
                single year.
              </li>
            </ul>
            <h2>How do we use this information?</h2>
            <p>
              As time goes on, Google gets smarter and smarter to the tactics
              used to game their system. As a result, the game of SEO changes a
              lot over time.
            </p>
            <ul>
              <li>
                White Hat SEO is often defined as just creating the best content
                possible and doing your best to publicize that content and let
                it grow organically (starting with social shares/word of mouth).
              </li>
              <li>
                Gray/Black Hat SEO is when you attempt to game the system. These
                tactics work well in the short term but definitely don&apos;t
                last in the long term.
              </li>
            </ul>
            <h2>Lessons Learned</h2>
            <p>
              A lot of the success from this site came from gamifying
              Google&apos;s algorithm. While that worked extraordinarily well
              for a while, it was not a viable long-term strategy. Google&apos;s
              algorithm changed and so did the site&apos;s rankings. This is a
              tale as old as time with SEO tactics. As an arbitrage, it was
              wildly successful. But going forward, it taught me to respect the
              massive value of the long game when it comes to SEO. A firecracker
              lights up fast, but goes out just the same.
            </p>
            <BackToPortfolio />
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudy1;
