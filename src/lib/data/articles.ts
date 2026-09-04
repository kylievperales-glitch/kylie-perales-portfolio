import type { Article } from "@/lib/types";

/**
 * Eight articles were written for Parlance: seven ghostwritten for the
 * Parlance team (no public byline) and one published under Kylie's own
 * name. The byline piece is kept first in this array so it leads the
 * writing archive; the rest follow in no particular order. Do not invent
 * headlines or article content.
 */
const parlanceArticles: Article[] = [
  {
    slug: "healthcare-cios-invest-in-conversational-ai-save-money",
    headline: "Why CIOs Should Invest in Conversational AI to Save Money and Enhance Patient Access",
    deck: "88% of healthcare appointments are still scheduled by phone. High call volumes and outdated systems create long hold times and frustrate patients, CIOs must prioritize investment in conversational AI voice solutions to meet demand.",
    publication: "Parlance",
    attribution: "By Kylie Perales, Written for Parlance",
    byline: "Kylie Perales",
    category: "IT Leadership",
    excerpt:
      "The phone is still the most widely used method of patient communication, and it's the channel healthcare IT budgets have neglected. Here's the case for fixing that.",
    readTime: "3 min read",
    hero: {
      src: "/images/article-cio-invest-conversational-ai.jpg",
      alt: "Why CIOs Should Invest in Conversational AI to Save Money and Enhance Patient Access, hero image",
      label: "ADD ARTICLE HERO IMAGE",
      aspect: "landscape",
    },
    sourceURL: "https://www.parlancecorp.com/healthcare-cios-invest-in-conversational-ai-save-money/",
    status: "published",
    body: [
      {
        type: "paragraph",
        text: "In response to rising consumer expectations, increased costs, and workforce shortages, health system leaders have heavily invested in digital communication channels like patient portals and chatbots. 75% of providers have increased their digital and IT budgets since 2019. However, the voice channel has often been neglected as a part of digital transformation. 88% of healthcare appointments are booked over the phone, but scheduling takes an average of eight minutes, and patient calls are transferred 63% of the time. When contact centers can't deliver ease and efficiency, patients get frustrated and have difficulty contacting their providers. To ensure all patients have easy access to care, health systems must modernize the voice channel with conversational AI-powered intelligent virtual assistants (IVAs).",
      },
      { type: "heading", text: "The Perfect Opportunity for Change" },
      {
        type: "paragraph",
        text: "In a recent survey, 88% of healthcare leaders said artificial intelligence held the biggest potential of any technology, but fewer than half had invested in it. With over 85% of providers expecting their digital and IT budgets to increase in 2024, health system executives should allocate a portion of funds to enhancing the voice channel with IVAs.",
      },
      { type: "heading", text: "Why Is Improving the Voice Channel So Important?" },
      { type: "label", text: "Patient and Caregiver Preferences" },
      {
        type: "paragraph",
        text: "Healthcare consumers often prefer the personal, human connection of the voice channel and the ease of navigation it offers.",
      },
      { type: "label", text: "Accessibility for Disabled Individuals" },
      {
        type: "paragraph",
        text: "Many disabled individuals' conditions, like visual or dexterity impairments, prevent them from using other communication channels, the voice channel is needed to contact their provider.",
      },
      { type: "label", text: "Maintaining Patient Satisfaction Amid Other Digital Advancements" },
      {
        type: "paragraph",
        text: "Although patient portals and chatbots are increasingly available, about 24% of patients had higher expectations based on their idea of what functionalities a patient portal should provide, and 22% had technical problems. When these communication channels cannot meet healthcare consumer needs, patients may look to the voice channel instead. Contact centers must be prepared to handle these calls with efficiency.",
      },
      { type: "label", text: "High Consumer Expectations" },
      {
        type: "paragraph",
        text: "When asked to name key factors to a five-star review, almost 58% of consumers cite great communication, and 60% name ease of scheduling. The voice channel is central to healthcare communication and appointment management. Optimizing phone system operations is critical for patient retention and a health system's brand image.",
      },
      { type: "heading", text: "Voice Channel Improvements Align with Existing Digital Transformation Objectives" },
      {
        type: "paragraph",
        text: "Enhancing the voice channel strengthens technological initiatives put in place to automate routine processes. Two of the top three criteria healthcare leaders use to evaluate digital investments are “patient satisfaction” and “financial metrics/ROI.” Implementing speech-enabled technologies meets these criteria by enabling patients to use their voices to self-serve easily and by reducing hold times for callers who are waiting for a live representative. By mitigating large call volumes and allowing agents to work at the top of their skillset, operations are optimized and healthcare organizations save money.",
      },
      { type: "heading", text: "About Parlance" },
      {
        type: "paragraph",
        text: "Parlance delivers conversational AI as a managed service for leading health systems nationwide. We blend intelligent speech technologies, including automatic speech recognition (ASR) and natural language processing (NLP) to transform old-fashioned IVRs and automated attendants into easy-to-navigate speech-driven tools. Multibillion-dollar health systems and individual hospitals alike rely on Parlance to modernize call handling, enhance patient experiences, and significantly reduce operational costs with conversational AI.",
      },
    ],
  },
  {
    slug: "parlance-article-1",
    headline: "Attract and Retain Gen Z Contact Center Agent Talent with Conversational AI",
    deck: "As the Gen Z workforce becomes a growing presence in contact centers, health systems face a new challenge: addressing persistent staffing shortages while meeting the expectations of a generation that values purpose and professional growth.",
    publication: "Parlance",
    attribution: "Ghostwritten for Parlance",
    category: "Conversational AI",
    excerpt:
      "Gen Z's tech-savviness is an asset, but their desire for engaging work means traditional contact center models often fall short. Here's where conversational AI closes the gap.",
    readTime: "3 min read",
    hero: {
      src: "/images/article-gen-z-talent.jpg",
      alt: "Attract and Retain Gen Z Contact Center Agent Talent with Conversational AI, hero image",
      label: "ADD ARTICLE HERO IMAGE",
      aspect: "landscape",
    },
    sourceURL: "https://www.parlancecorp.com/attract-gen-z-talent-with-conversational-ai/",
    status: "published",
    body: [
      {
        type: "paragraph",
        text: "The Gen Z workforce is becoming increasingly vital to contact centers, comprising 24% of customer service representatives and offering a diverse skillset. However, 98% of Gen Z report dealing with symptoms of burnout in the workplace, contributing to hospital and clinic staffing challenges. A 2022 CCW market study found that agent demand has doubled since 2020 and workforce participation is down 2.5% year over year since 2019. To attract and retain Gen Z talent, health systems must implement conversational AI to reduce agent and operator burnout.",
      },
      { type: "heading", text: "What Gen Z Brings to the Table" },
      { type: "label", text: "Digital Fluency" },
      {
        type: "paragraph",
        text: "Growing up with advanced technology, Gen Z excels at navigating innovative tools, an asset that helps companies streamline adoption of new technologies and meet efficiency objectives.",
      },
      { type: "label", text: "Strong Work Ethic" },
      {
        type: "paragraph",
        text: "74% of Gen Z strives to learn new skills and develop professionally, per LinkedIn, they're harder workers than often believed. Diligent employees provide greater value to health systems.",
      },
      { type: "heading", text: "Challenges for Gen Z in a Contact Center Setting" },
      { type: "label", text: "Little Experience with Phone Communication" },
      {
        type: "paragraph",
        text: "While they'll talk on the phone when necessary, Gen Z-ers will avoid calling when they can, only 10% of working Gen Z-ers prefer phone calls to other forms of communication. Handling high call volumes is overwhelming to most contact center agents, but even more so to Gen Z staff.",
      },
      { type: "label", text: "Workplace Misalignment" },
      {
        type: "paragraph",
        text: "Contact center environments often don't fit Gen Z's ideals for a job. When choosing a position, one of the top five things this generation looks for is “a sense of purpose from their work.” Responding to repetitive caller requests for prescription refills and directions, or transferring calls, does not engage Gen Z with a feeling of fulfillment.",
      },
      {
        type: "paragraph",
        text: "Speech-enabled technologies like conversational interactive voice response (IVR) and intelligent virtual assistants (IVAs) alleviate agent and operator burnout. These tools mitigate large call volumes by handling routine inquiries, which reduces agent workload. This makes it easier for Gen Z to manage these calls, minimizing their phone anxiety. Conversational AI gives agents more availability to assist callers who need complex or emotional support, motivating Gen Z staff through a deeper connection to their work.",
      },
      {
        type: "paragraph",
        text: "Health system cost savings depend on supporting Gen Z agents. A Deloitte survey found that 40% of Gen Z say they would like to leave their job within two years. High turnover due to burnout is costly, especially when additional training is necessary to bring Gen Z's phone communication skills up to standard. As Gen Z continues to make up a greater share of the workforce, addressing revenue leakage from high turnover and burnout is key to optimizing contact center operations.",
      },
      { type: "heading", text: "About Parlance" },
      {
        type: "paragraph",
        text: "For over 25 years, Parlance has been at the forefront of speech-enabled solutions. Our voice-driven self-service offloads 50-65% of calls coming into the queue at hospitals and clinics nationwide, lifting the weight off their support staff's shoulders. When health systems implement IVAs, agents and operators work at the top of their skillset, find more enjoyment in their positions, and are less likely to quit.",
      },
    ],
  },
  {
    slug: "parlance-article-2",
    headline: "Automate Healthcare Scheduling with Conversational AI and Improve Patient Experience",
    deck: "Many patients find it easier to schedule appointments over the phone. This leads to high call volume and is a challenge for healthcare contact centers, often resulting in caller frustration and lost revenue.",
    publication: "Parlance",
    attribution: "Ghostwritten for Parlance",
    category: "Patient Access",
    excerpt:
      "Long hold times make for poor caller experiences, and empty appointment slots. Conversational AI automates appointment management, meeting patient demand without burdening staff.",
    readTime: "3 min read",
    hero: {
      src: "/images/article-automate-scheduling.jpg",
      alt: "Automate Healthcare Scheduling with Conversational AI, hero image",
      label: "ADD ARTICLE HERO IMAGE",
      aspect: "landscape",
    },
    sourceURL: "https://www.parlancecorp.com/automate-healthcare-scheduling-with-conversational-ai/",
    status: "published",
    body: [
      {
        type: "paragraph",
        text: "Automating appointment management with conversational interactive voice response (IVRs) and intelligent virtual assistants (IVAs) should be a top priority for healthcare contact centers. Hospitals and clinics receive an abundance of appointment requests, and often cannot handle the high call volume efficiently. This significantly impacts the patient experience and health system revenue.",
      },
      {
        type: "paragraph",
        text: "Appointments are critical to the patient-provider relationship. Each interaction is an opportunity for health systems to demonstrate exceptional care, knowledge, and expertise. Managing appointments inefficiently disrupts the patient journey and creates revenue loss. According to MedCity News, health systems lose 10-30% of revenue due to patient leakage. With many callers making appointments and limited time slots, effective scheduling is key. When long hold times prevent patients from rescheduling an appointment, the slot remains empty and both the health system and the provider lose revenue.",
      },
      {
        type: "paragraph",
        text: "For patients waiting to schedule an appointment, excessive hold times delay important care and cause anxiety. These issues create a negative impression and can prompt patients to change providers and share their frustration with friends and family or online. According to a healthcare market research report, when deciding where to go for care, 31% of consumers rely on recommendations from friends and family and 26% rely on ratings from other patients.",
      },
      {
        type: "paragraph",
        text: "When patients have a hard time accessing care, it sends the wrong message about the healthcare provider. Patients should feel that their well-being is a top concern.",
      },
      {
        type: "paragraph",
        text: "To achieve high patient satisfaction levels and optimize operations, health systems must automate appointment management with conversational AI. IVRs and IVAs handle each scheduling request a contact center receives, no matter the volume of patient demand. A healthcare consumer simply states their needs and the voice-driven technology works quickly to complete the task. When it's easy for callers to self-serve, they get the help they need and in the process, they reduce hold times for callers who want to reach a live representative.",
      },
      { type: "heading", text: "Benefits of Speech-Enabled Technology to Automate Management" },
      { type: "label", text: "Convenient Access to Care" },
      {
        type: "paragraph",
        text: "Self-service enables patients and caregivers to make or change appointments at any time, reducing stress and frustration. Efficient navigation is key to consumers; according to a 2022 Accenture report, 78% of patients who've recently switched providers were prioritizing ease of navigation.",
      },
      { type: "label", text: "Frictionless Interactions" },
      {
        type: "paragraph",
        text: "Callers communicate their requests easily as the AI leverages advanced natural language processing (NLP) to respond to human language seamlessly.",
      },
      { type: "label", text: "Revenue Growth" },
      {
        type: "paragraph",
        text: "Conversational AI optimizes scheduling and fills the calendar, increasing the number of patients it treats.",
      },
      { type: "label", text: "Patient Retention" },
      {
        type: "paragraph",
        text: "When AI tools enable hospitals and clinics to reliably handle scheduling demand, there is less frustration and patient turnover.",
      },
      { type: "label", text: "Improved Reputation" },
      {
        type: "paragraph",
        text: "Happy with their experiences, healthcare consumers may spread the word to other patients looking for high-quality care and efficient service.",
      },
      { type: "heading", text: "About Parlance" },
      {
        type: "paragraph",
        text: "For over 25 years, Parlance has been a leader in the healthcare IT space. Our conversational AI improves patient navigation and removes barriers to access. Implementing 'low-customer-effort' approaches to service drives loyalty and prevents unnecessary revenue leakage. Our generative IVR and IVA solutions enable hospitals and clinics to deliver highly personalized service, automate routine call routing with ease, and perform tasks faster and with higher accuracy.",
      },
      {
        type: "paragraph",
        text: "70% of healthcare consumers connect with healthcare providers on the phone. Parlance conversational AI solutions for health systems accelerate patient access to care for over 1000 hospitals and clinics across the United States. Healthcare consumers easily connect to people, access information, and manage their appointments, no matter the volume of patient demand.",
      },
    ],
  },
  {
    slug: "parlance-article-3",
    headline: "Empowering Patients with Self-Service to Ease Caller Navigation",
    deck: "Patients want fast, easy access to care, without having to wait on hold. Parlance helps healthcare organizations meet that demand with conversational AI that turns routine calls into seamless self-service experiences.",
    publication: "Parlance",
    attribution: "Ghostwritten for Parlance",
    category: "Patient Experience",
    excerpt:
      "Voice-driven self-service lets callers speak naturally to make appointments or get answers to FAQs, fewer repetitive calls for agents, shorter hold times for callers.",
    readTime: "2 min read",
    hero: {
      src: "/images/article-self-service.jpg",
      alt: "Empowering Patients with Self-Service to Ease Caller Navigation, hero image",
      label: "ADD ARTICLE HERO IMAGE",
      aspect: "landscape",
    },
    sourceURL:
      "https://www.parlancecorp.com/empowering-patients-with-self-service-to-ease-caller-navigation/",
    status: "published",
    body: [
      {
        type: "paragraph",
        text: "In healthcare, self-service technology assists patients and provides immediate access to care while reducing hold times for people who opt to speak with a live agent.",
      },
      {
        type: "paragraph",
        text: "Without automated solutions, the only choices are to wait on hold or call back. Conversational interactive voice response (IVRs) and intelligent virtual assistants (IVAs) give callers a third option: easy and efficient self-service following these steps:",
      },
      { type: "label", text: "Greeting" },
      {
        type: "paragraph",
        text: "After being welcomed, the caller uses their own voice to state their need and easily engage with conversational AI.",
      },
      { type: "label", text: "Quick Authentication" },
      { type: "paragraph", text: "The technology verifies the patient, if necessary." },
      { type: "label", text: "Recognizing Needs" },
      {
        type: "paragraph",
        text: "Callers ask to schedule or change appointments, refill prescriptions, speak to a provider, etc.",
      },
      { type: "label", text: "Task Completion" },
      {
        type: "paragraph",
        text: "The automated solution quickly and effectively fulfills the requests, connecting the caller to the requested destination or service line.",
      },
      {
        type: "paragraph",
        text: "Increased self-service reduces hold times by removing repetitive calls from the queue and giving healthcare agents time for patients and caregivers who need human support. Healthcare consumers who self-serve experience the following benefits:",
      },
      { type: "label", text: "Low-Caller-Effort" },
      { type: "paragraph", text: "Straightforward navigation for frictionless interactions." },
      { type: "label", text: "Skipping Hold Times Altogether" },
      {
        type: "paragraph",
        text: "Nobody wants to be inconvenienced, especially for tasks and questions that should take one minute or less.",
      },
      { type: "label", text: "Accessibility" },
      {
        type: "paragraph",
        text: "Callers with limited time quickly manage their needs, ensuring quick access to necessary care.",
      },
      { type: "label", text: "Autonomy" },
      {
        type: "paragraph",
        text: "Patients have more power over their healthcare journey and don't experience feelings of helplessness or frustration in getting what they need.",
      },
      {
        type: "paragraph",
        text: "A 2021 Lumeon study found that 90% of patient access leaders consider patient experience the main differentiator for hospitals, with 81% citing access to care as second. By streamlining navigation, health systems improve overall efficiency and patient satisfaction.",
      },
      { type: "heading", text: "Why Self-Service Solutions Are Ideal for Healthcare Organizations" },
      { type: "label", text: "Resource Optimization" },
      {
        type: "paragraph",
        text: "When automated technologies handle routine requests, live agents have time to offer complex or emotional support to those who need it.",
      },
      { type: "label", text: "Simplicity" },
      {
        type: "paragraph",
        text: "IVRs and IVAs seamlessly integrate with existing infrastructure and EMR/EHR systems.",
      },
      { type: "label", text: "Affordability" },
      {
        type: "paragraph",
        text: "Conversational AI is effective right away. The solution pays for itself by saving on operational costs and continues to deliver high ROI.",
      },
      { type: "label", text: "Practicality" },
      {
        type: "paragraph",
        text: "These solutions fit the hectic health industry environment. They scale based on demand, handle frequent requests that overtake call queues, and simplify complex phone systems to broaden patient access.",
      },
      { type: "heading", text: "About Parlance" },
      {
        type: "paragraph",
        text: "Parlance is a conversational AI-powered solution that delivers intuitive voice-driven self-service for callers who know what they want but quickly pivots out of the way of callers who cannot or do not want to self-serve.",
      },
      {
        type: "paragraph",
        text: "Parlance improves patient navigation and removes barriers to access. More efficient communication means that healthcare organizations exceed expectations while maintaining profitability. By providing easy, natural interactions, our product delivers high levels of caller engagement, outperforming any other solution on the market.",
      },
    ],
  },
  {
    slug: "parlance-article-4",
    headline: "Exceed Gen Z's Healthcare Customer Service Expectations with Conversational AI",
    deck: "To meet Gen Z's expectations for fast, intuitive customer service, health systems must modernize the voice channel by improving self-service with more robust conversational AI and easier access to live support when needed.",
    publication: "Parlance",
    attribution: "Ghostwritten for Parlance",
    category: "Customer Experience",
    excerpt:
      "Digital natives still prefer self-service for simple tasks, but 70% pick up the phone for complex issues. The answer is a blend of conversational AI and live support.",
    readTime: "2 min read",
    hero: {
      src: "/images/article-exceed-gen-z-expectations.jpg",
      alt: "Exceed Gen Z's Healthcare Customer Service Expectations, hero image",
      label: "ADD ARTICLE HERO IMAGE",
      aspect: "landscape",
    },
    sourceURL: "https://www.parlancecorp.com/exceed-gen-z-healthcare-expectations/",
    status: "published",
    body: [
      {
        type: "paragraph",
        text: "Gen Z has grown up with on-demand experiences and seamless digital interactions, but today's customer service environment faces them with frustrating inefficiencies. While members of this generation are known for being digital natives, a health system's online avenues often can't solve tough problems, leading most to try calling over the phone… to varying levels of success. Health systems must adapt to meet Gen Z's high standards, or they may go somewhere else for fast, convenient assistance. This adaptation comes in the form of a blend between conversational AI and live support.",
      },
      { type: "heading", text: "Gen Z Favors Live Phone Calls for Complex Issues" },
      {
        type: "paragraph",
        text: "Recent McKinsey & Company customer service research finds that “about 70% of Gen Z prefer to make a phone call when facing an unsolvable problem.” However, contact centers often struggle to handle large call volumes without sacrificing efficiency, causing issues like long hold times, slow call-to-answer and resolution, and excessive transferring. These issues are unacceptable to anyone, and especially to Gen Z.",
      },
      { type: "heading", text: "Gen Z Wants Self-Service for Simple Requests" },
      {
        type: "paragraph",
        text: "A study by Gartner found that 75% of Gen Z consumers prefer self-service options for simple tasks. Conversational AI technology like intelligent virtual assistants (IVAs) reduce inefficiencies and caller irritation.",
      },
      { type: "heading", text: "Speech-Enabled Solutions Appeal to Gen Z With:" },
      { type: "label", text: "1. On-Demand Assistance" },
      {
        type: "paragraph",
        text: "When AI addresses simple requests, callers bypass hold times completely. IVAs handle frequently asked questions (FAQs), appointment management tasks, routing to a specific person or department, prescription refills, etc.",
      },
      { type: "label", text: "2. Ease of Use" },
      {
        type: "paragraph",
        text: "Equipped with natural language processing (NLP), IVAs understand any combination of words and phrases, mimicking the ease of human interaction for frictionless problem resolution.",
      },
      {
        type: "paragraph",
        text: "Conversational AI does both, optimizing self-service and enhancing live phone interactions. By managing routine requests quickly, IVAs minimize hold times for callers with complex issues waiting for a live agent. Patients also benefit when reduced call volume frees up agents and operators to provide higher-quality assistance. Speech-driven AI enables health systems to provide the balance of self-service and live support that Gen Z looks for!",
      },
      { type: "heading", text: "About Parlance" },
      {
        type: "paragraph",
        text: "Parlance delivers conversational AI as a managed service for leading organizations nationwide. More efficient communication allows health systems to exceed expectations while maintaining profitability.",
      },
      {
        type: "paragraph",
        text: "When healthcare companies combine IVAs with live agent support, they elevate the voice channel for patients. That means fast, intuitive service for callers who know what they want, and less frustration and shorter hold times for callers who need to speak with a live agent. Parlance improves patient navigation, facilitates frictionless interactions, and provides on-demand service and high levels of caller engagement.",
      },
    ],
  },
  {
    slug: "parlance-article-5",
    headline: "The High Cost of Inadequate Call Navigation in Healthcare",
    deck: "Outdated call navigation systems are silently draining revenue from healthcare organizations. Long hold times and confusing phone trees frustrate patients and contribute to no-shows, while overwhelming contact center staff.",
    publication: "Parlance",
    attribution: "Ghostwritten for Parlance",
    category: "Operations",
    excerpt:
      "Beyond hurting patient experience, poor call navigation increases costs and decreases employee retention. Here's what it's actually costing health systems, and how AI closes the gap.",
    readTime: "2 min read",
    hero: {
      src: "/images/article-high-cost-call-navigation.jpg",
      alt: "The High Cost of Inadequate Call Navigation in Healthcare, hero image",
      label: "ADD ARTICLE HERO IMAGE",
      aspect: "landscape",
    },
    sourceURL: "https://www.parlancecorp.com/the-high-cost-of-inadequate-call-navigation-in-healthcare/",
    status: "published",
    body: [
      {
        type: "paragraph",
        text: "Healthcare organizations can't afford to overlook their underperforming call navigation systems. With inefficiencies like excessive transfers and confusing phone trees, health systems lose revenue due to the following reasons:",
      },
      { type: "label", text: "1. Extended Call Durations and Repeat Calls" },
      {
        type: "paragraph",
        text: "Complex navigation lengthens hold times and forces callbacks. This causes bloated queues which require more contact center staff, raising labor expenses. Call abandonment means lost revenue and delays patient care.",
      },
      { type: "label", text: "2. Appointment No-Shows" },
      {
        type: "paragraph",
        text: "Difficult scheduling leads to revenue leakage when callers decide to miss appointments rather than reschedule.",
      },
      { type: "label", text: "3. Patient Dissatisfaction and Churn" },
      {
        type: "paragraph",
        text: "Challenging access to care frustrates and deters patients, leading to lost revenue. A study by Gartner showed that 96% of customers became more disloyal when they experienced high-effort service compared to only 9% who had a low-effort interaction.",
      },
      { type: "label", text: "4. Contact Center Agent Burnout and Turnover" },
      {
        type: "paragraph",
        text: "Underperforming call navigation overwhelms agents with workload and irritated healthcare consumers. This causes staff to quit and increases recruiting, hiring, and training costs. NICE WEM Global Survey reported agent attrition rates of up to 42% as of 2022.",
      },
      {
        type: "paragraph",
        text: "Accenture predicts that by 2026, AI in the U.S. healthcare economy can save $150 billion annually. Enhanced call navigation via modern interactive voice response (IVRs) and intelligent virtual assistants (IVAs) reduces costs by:",
      },
      { type: "label", text: "1. Automating Routine Inquiries" },
      {
        type: "paragraph",
        text: "IVRs and IVAs handle caller verifications, take on appointment management tasks, and answer common frequently asked questions at any volume. When fewer agents are required to maintain the contact center, labor costs decrease. Revenue increases when patients and caregivers can self-serve for easier access to care.",
      },
      { type: "label", text: "2. Efficiently Routing Calls" },
      {
        type: "paragraph",
        text: "Conversational AI technologies quickly address caller needs to minimize hold times and unnecessary transfers. This optimizes staffing resources and reduces operational costs. SQM Group found that each 1% increase in first call resolution (FCR) leads to a 1% increase in customer satisfaction scores. When patient satisfaction and retention go up, revenue increases.",
      },
      { type: "label", text: "3. Providing Data for Effective Management" },
      {
        type: "paragraph",
        text: "Health systems utilize call metrics to make decisions that promote efficient navigation and cost-effectiveness.",
      },
      { type: "heading", text: "About Parlance" },
      {
        type: "paragraph",
        text: "The Parlance managed service solution provides more than industry-leading technology. It's a partnership, with a team of tenured experts who make your system work, take ownership of day-to-day performance, and guarantee ROI.",
      },
      {
        type: "paragraph",
        text: "Over a thousand hospitals and clinics rely on Parlance every day to modernize call handling and call routing, minimize caller effort, and reduce operational costs. People with routine requests navigate to the person, department, or resource they need without waiting on hold. People who need complex support get it quickly, because live agents, no longer burdened with routine transfers, are more available to help callers who need it.",
      },
      {
        type: "paragraph",
        text: "Implementing 'low-customer-effort' approaches to service and empowering support staff with more time to own patient and family member issues from start to finish, drives loyalty, and prevents unnecessary revenue leakage.",
      },
    ],
  },
  {
    slug: "parlance-article-6",
    headline: "Why Effective Call Navigation is Imperative for Health Systems",
    deck: "For many health systems, complex phone trees and overloaded operators make for long hold times and low first-call resolution rates. Parlance uses conversational AI to simplify call navigation.",
    publication: "Parlance",
    attribution: "Ghostwritten for Parlance",
    category: "Call Navigation",
    excerpt:
      "First-call resolution rates are just 20% in healthcare, compared to 74% across industries. Here's how conversational AI closes that gap without adding headcount.",
    readTime: "3 min read",
    hero: {
      src: "/images/article-effective-call-navigation.jpg",
      alt: "Why Effective Call Navigation is Imperative for Health Systems, hero image",
      label: "ADD ARTICLE HERO IMAGE",
      aspect: "landscape",
    },
    sourceURL: "https://www.parlancecorp.com/why-effective-call-navigation-is-imperative-for-health-systems/",
    status: "published",
    body: [
      {
        type: "paragraph",
        text: "Complex call navigation stands between healthcare consumers and the resources they need. According to WebMD, first-call resolution across industries is 74%, but for the health sector, leaders estimate 20%. This is partially due to the intricacy of healthcare organization phone systems. Call steering guides patients, caregivers, and loved ones through the maze.",
      },
      {
        type: "paragraph",
        text: "Vanity numbers provide a single access point so patients don't need to locate the phone number for the department or provider they seek. However, this creates the challenge of routing a larger volume and variety of callers to different destinations.",
      },
      {
        type: "paragraph",
        text: "Conversational interactive voice response (IVRs) and intelligent virtual assistants (IVAs) streamline navigation and manage the high influx of calls resulting from vanity numbers. They assist operators and agents and enhance call navigation by:",
      },
      { type: "label", text: "1. Satisfying Each Caller's Needs" },
      {
        type: "paragraph",
        text: "Conversational AI fulfills routine requests, giving live agents time for healthcare consumers who require complex or emotional support.",
      },
      { type: "label", text: "2. Connecting Callers Accurately" },
      {
        type: "paragraph",
        text: "Automatic speech recognition (ASR) and natural language processing (NLP) technologies help execute transfers proficiently, eliminating confusion and irritation.",
      },
      { type: "label", text: "3. Increasing First-Call-Resolution and Reducing Hold Times" },
      {
        type: "paragraph",
        text: "AI-powered self-service solutions streamline operations by freeing up agents and operators so they have the bandwidth to address patient and caregiver needs.",
      },
      { type: "label", text: "4. Integrating into EMR / EHR Systems" },
      {
        type: "paragraph",
        text: "When the telephony environment is integrated with patient information, known callers are recognized with caller ID, and the experience is personalized. This added context helps to streamline operations and further reduces friction for patients and support staff.",
      },
      { type: "heading", text: "Conversational AI Is a Practical Solution" },
      { type: "label", text: "1. Even Starting Small Makes a Big Difference" },
      {
        type: "paragraph",
        text: "Improving caller navigation immediately benefits each patient who could otherwise be left on hold for an extended period. When patients can use their voices to effectively navigate a large health system environment they are more satisfied and live agents waste less time. This optimization improves caller experience and boosts productivity.",
      },
      { type: "label", text: "2. Scalability" },
      {
        type: "paragraph",
        text: "IVRs and IVAs adjust to handle spikes in call volume. They open up conversations that are directed by the caller, route them where they need to go, and reduce calls coming into the queue. When routine work is deflected from agents, contact centers can keep up regardless of demand.",
      },
      { type: "label", text: "3. Simplicity" },
      {
        type: "paragraph",
        text: "These technologies are low-risk for health systems. They broaden patient and caregiver access to tens of thousands of destinations within a large health system. Agents spend less time transferring callers, easing navigation and saving the organization money.",
      },
      { type: "heading", text: "About Parlance" },
      {
        type: "paragraph",
        text: "For over 25 years, Parlance has been at the forefront of speech-enabled technologies. As a trusted partner, we enable our healthcare clients to feel confident taking advantage of IVAs. Advancements in this intelligent, emerging technology allow hospitals and clinics to further reduce friction in patient calling experiences, by performing more complicated tasks with faster speed and higher accuracy. By incorporating IVAs, healthcare providers automate routine call routing with ease, deliver highly personalized service, answer FAQs without stealing bandwidth from overburdened agents, and handle many appointment management tasks.",
      },
      {
        type: "paragraph",
        text: "Parlance delivers conversational AI as a fully managed service. Our technology solutions for health systems accelerate patient access to care for over a thousand hospitals and clinics across the United States. Healthcare consumers easily connect to the people, information, and services they need, no matter the volume of patient demand. Parlance provides not only industry-leading technology, but a team of tenured experts who make your system work, take ownership of day-to-day performance, and guarantee ROI.",
      },
    ],
  },
  {
    slug: "parlance-article-7",
    headline: "Why Healthcare CIOs Should Automate FAQs with Conversational AI",
    deck: "Most patients still pick up the phone when contacting hospitals and clinics. With call volume often outpacing agent capacity, healthcare CIOs are turning to conversational AI to manage the load.",
    publication: "Parlance",
    attribution: "Ghostwritten for Parlance",
    category: "IT Leadership",
    excerpt:
      "Automating responses to FAQs reduces hold times, frees up staff for complex patient needs, and protects against revenue loss due to agent burnout and turnover.",
    readTime: "2 min read",
    hero: {
      src: "/images/article-automate-faqs.jpg",
      alt: "Why Healthcare CIOs Should Automate FAQs with Conversational AI, hero image",
      label: "ADD ARTICLE HERO IMAGE",
      aspect: "landscape",
    },
    sourceURL: "https://www.parlancecorp.com/healthcare-cios-automate-faqs-conversational-ai/",
    status: "published",
    body: [
      {
        type: "paragraph",
        text: "As a CIO in healthcare, your job description demands that you eliminate inefficiencies in the contact center. Rising consumer expectations for high-quality patient care means acting quickly is essential, but budget constraints and staffing limitations create pressure to avoid mistakes.",
      },
      {
        type: "paragraph",
        text: "When conversational AI is used for frequently asked question (FAQ) resolution it reduces hold times while mitigating substantial call volumes. This minimizes patient and caregiver frustration and eases agent and operator workload. Without effective contact center technology, callers face barriers to care, and staff burnout drives turnover. These outcomes impact revenue. According to Cresta, the annual average cost to backfill a call center of 100 agents in the care/support category is $900,000-$1.8 million.",
      },
      {
        type: "paragraph",
        text: "Most healthcare consumers contact hospitals and clinics by phone, meaning your staff answer countless redundant questions. Handling FAQs manually is unsustainable when calls greatly outnumber agents.",
      },
      { type: "heading", text: "How Does Automating FAQs Improve Contact Center Operations?" },
      {
        type: "paragraph",
        text: "Intelligent virtual assistants (IVAs) easily understand and answer frequently asked questions. AI scales, no matter call volume, each offloaded call makes a difference.",
      },
      {
        type: "paragraph",
        text: "Metrigy projects that 65.7% of inquiries will be resolved by AI in 2025 in organizations that already have implemented the technology. Conversational AI quickly assists patients and their caregivers, reducing hold times for people waiting for a live representative, so that agents and operators are more available to provide complex, empathetic assistance. In a recent survey of client support professionals, 78% stated that AI “helps them spend more time on the most important parts of their role” and 78% feel it “makes me more efficient in my role.”",
      },
      {
        type: "quote",
        text: "Metrigy reports that without AI, contact centers will require 2.3 times more agents than those with AI.",
      },
      {
        type: "paragraph",
        text: "Be aware, your competitors have already implemented AI-driven speech technology solutions to deliver top-of-the-line customer service and support for staff, and to reduce revenue leakage. According to Fortune Business Insights, AI in healthcare was “valued at USD 19.54 billion in 2023,” and “projected to grow from USD 27.69 billion in 2024 to USD 490.96 billion by 2032, exhibiting a CAGR of 43.2%.”",
      },
      {
        type: "paragraph",
        text: "As this technology becomes more widely adopted, it's less of a choice to implement and more of a necessity to meet and exceed expectations and operate efficiently.",
      },
      {
        type: "paragraph",
        text: "Implementing new technology is daunting but Parlance subscription-based managed service makes the transition and upkeep easy. We enable our healthcare clients to confidently take advantage of IVAs. Parlance is more than an HIT vendor. We are a partner, a team of tenured experts who make your system work, take ownership of day-to-day performance, and guarantee ROI. Over a thousand hospitals and clinics rely on Parlance every day to modernize call handling, answer FAQs without stealing bandwidth from overburdened agents, and reduce operational costs.",
      },
      {
        type: "paragraph",
        text: "High call volume means more appointments and more revenue. No matter the volume of patient demand, Parlance improves patient experience and reduces agent burnout.",
      },
    ],
  },
];

export const articles: Article[] = parlanceArticles;

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function getRelatedArticles(slug: string, count = 3) {
  return articles.filter((a) => a.slug !== slug).slice(0, count);
}
