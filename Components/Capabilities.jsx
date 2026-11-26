import styles from "./Capabilities.module.css";

const capabilities = [
  {
    title: "Content Writing & Copywriting",
    description: "I write and structure content for websites, blogs, landing pages, and marketing campaigns, with attention to audience needs, search intent, clarity, and the action each piece should encourage.",
    skills: ["SEO Articles & Blog Writing", "Website Copywriting", "Landing Page Copy", "Email Copywriting", "Content Editing"],
    primary: true,
  },
  {
    title: "SEO & Content Strategy",
    description: "I research search opportunities, map keywords to the right pages, plan content around user intent, and develop content structures that help businesses become more visible to relevant audiences.",
    skills: ["Keyword Research", "Search Intent Analysis", "Local SEO", "Content Mapping", "Editorial Planning", "On-Page SEO"],
    primary: true,
  },
  {
    title: "Website Design & Development",
    description: "I design and build responsive websites with attention to page structure, content hierarchy, usability, and conversion. My experience includes implementing complete website pages in WordPress and Elementor.",
    skills: ["WordPress", "Elementor", "Responsive Web Design", "Website Content Architecture", "UX-Focused Page Design", "Low-Code Website Development"],
  },
  {
    title: "Digital Marketing & Content Systems",
    description: "I support wider marketing efforts through paid-media copy, performance analysis, content workflows, and practical automation. I also develop guidelines and processes that help maintain consistency across content projects.",
    skills: ["Google Analytics 4", "Google Search Console", "Google Ads & Meta Ads Support", "Content Workflow Automation", "Brand Voice Guidelines", "SOP Development"],
  },
];

export default function Capabilities() {
  return (
    <section className={styles.section} id="capabilities" aria-labelledby="capabilities-title">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <p className={styles.kicker}>CAPABILITIES</p>
          <h2 id="capabilities-title">What I bring to the table.</h2>
          <p className={styles.lead}>My work goes beyond writing individual articles or website pages. I combine content strategy, SEO, website design, and digital marketing knowledge to create content that serves a clear purpose and supports wider business goals.</p>
        </div>

        <div className={styles.grid}>
          {capabilities.map((capability) => (
            <article className={`${styles.item} ${capability.primary ? styles.primary : ""}`} key={capability.title}>
              <h3>{capability.title}</h3>
              <p className={styles.description}>{capability.description}</p>
              <ul className={styles.skills} aria-label={`${capability.title} skills`}>
                {capability.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
