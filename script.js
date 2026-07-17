document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. PORTFOLIO DATA STORES (SCALABLE ARCHITECTURE)
       ========================================================================== */
    
    // Video Work Projects Database
    const videoProjects = [
        {
            id: "office-relatable-shake-hands",
            brand: "Office Relatable",
            campaign: "Shake Hands – Viral Office Short",
            role: "Content Ideation • Script Planning • Creative Strategy",
            platform: "YouTube Shorts",
            objective: "Create a highly relatable office-based short that captures attention instantly and encourages audience interaction through curiosity-driven storytelling.",
            resultsText: "2.74M+ Views, 46K Likes, 114 Comments",
            metrics: [
                { label: "Views", val: "2.74M+" },
                { label: "Likes", val: "46K" },
                { label: "Comments", val: "114" },
                { label: "Published", val: "18 Mar 2026" }
            ],
            challenge: "Create relatable office content that grabs attention in the first few seconds and encourages viewers to engage.",
            strategy: "Used a common workplace situation (employees leaving exactly at 6 PM) with a curiosity-driven hook to increase watch time, comments, and shares.",
            script: "[Hook] 'Shake hands with someone who leaves office at exactly 6 PM.' \\n[Execution] Fast-paced editing, bold captions, relatable office visuals, and an open-ended ending to encourage audience participation.",
            storyboard: "Frame 1: Office setting with employees working. \\nFrame 2: The hook question appears on screen. \\nFrame 3: Relatable reactions from office workers. \\nFrame 4: Open-ended ending encouraging comments and shares.",
            execution: "Shot vertically inside the office using natural lighting and handheld camera movement. Edited with fast-paced cuts, bold captions, and trending audio to maximize watch time and engagement.",
            videoUrl: "assets/video_shoonya.mp4",
            watchUrl: "https://youtube.com/shorts/",
            lessons: "Simple, relatable workplace content combined with curiosity can generate strong organic reach and engagement."
        },
        {
            id: "genz-vs-millennials",
            brand: "Office Relatable",
            campaign: "Gen Z vs Millennials – Office Comedy Short",
            role: "Content Ideation • Script Planning • Creative Strategy",
            platform: "YouTube Shorts",
            objective: "Create a humorous, highly relatable short comparing Gen Z and Millennials in everyday office life to drive engagement, comments, and shares.",
            resultsText: "2.4K+ Views, 30 Likes, 5 Comments",
            metrics: [
                { label: "Views", val: "2.4K+" },
                { label: "Likes", val: "30" },
                { label: "Comments", val: "5" },
                { label: "Published", val: "30 Mar 2026" }
            ],
            challenge: "Create engaging office content around generational differences that instantly resonates with young professionals and encourages discussion.",
            strategy: "Used relatable humor, expressive acting, and a comparison-based storytelling format to highlight the funny differences between Gen Z and Millennials, encouraging viewers to comment on which generation they relate to.",
            script: "[Hook] 'Gen Z vs Millennials – The Ultimate Difference.' \\n[Execution] Short comedic scenes, conversational dialogue, quick pacing, expressive reactions, and captions optimized for mobile viewing. \\n[CTA] 'Which one are you—Gen Z or Millennial? Comment below.'",
            storyboard: "Frame 1: Title card – Gen Z vs Millennials. \\nFrame 2: Side-by-side comedic comparison scenes. \\nFrame 3: Expressive reactions highlighting generational differences. \\nFrame 4: CTA encouraging viewers to comment which generation they relate to.",
            execution: "A relatable office comedy highlighting the everyday differences between Gen Z and Millennials through humor, expressive storytelling, and engaging short-form content designed to spark conversations and audience interaction.",
            videoUrl: "assets/video_stable_money.mp4",
            watchUrl: "https://youtube.com/shorts/",
            lessons: "Simple, relatable workplace humor and comparison-based storytelling create higher engagement by encouraging viewers to share opinions and tag friends."
        },
        {
            id: "office-comedy-lame-jokes",
            brand: "InfluencerAct",
            campaign: "Office Comedy – Lame Jokes Part 3",
            role: "Content Executive",
            platform: "Instagram Reels",
            objective: "Create a relatable office comedy reel using a recurring 'Lame Jokes' series to maximize engagement, comments, shares, and audience retention.",
            resultsText: "39.2K+ Views, 144 Likes, 26 Shares, 14 Saves",
            metrics: [
                { label: "Views", val: "39.2K+" },
                { label: "Likes", val: "144" },
                { label: "Shares", val: "26" },
                { label: "Saves", val: "14" },
                { label: "Avg Watch", val: "20s" },
                { label: "Reach", val: "1,410" }
            ],
            challenge: "Create a recurring comedy format that keeps audiences coming back for more while maintaining high engagement and shareability.",
            strategy: "Leveraged a recurring 'Lame Jokes' series format with relatable office humor, quick pacing, and expressive acting to build a loyal audience that anticipates each new installment.",
            script: "[Hook] Office comedy setup with a lame joke premise. \\n[Execution] Quick comedic delivery, expressive reactions, and relatable office scenarios. \\n[CTA] Encourage viewers to share with colleagues who tell lame jokes.",
            storyboard: "Frame 1: Office setting with the joke setup. \\nFrame 2: Delivery of the lame joke with dramatic pause. \\nFrame 3: Over-the-top reactions from colleagues. \\nFrame 4: Punchline and CTA to follow for more.",
            execution: "Shot vertically inside the office with natural lighting. Edited in CapCut with quick cuts, bold captions, and comedic timing optimized for Instagram Reels format.",
            videoUrl: "assets/video_5paisa.mp4",
            watchUrl: "[Paste Instagram Reel URL here]",
            lessons: "Recurring series formats build audience loyalty and anticipation, leading to consistently higher engagement rates with each new installment."
        },
        {
            id: "fun-friday-office-game",
            brand: "InfluencerAct",
            campaign: "Fun Friday – Office Game Reel",
            role: "Content Executive",
            platform: "Instagram Reels",
            objective: "Create a fun office culture reel that boosts employee engagement while showcasing a positive and energetic workplace environment.",
            resultsText: "25.2K+ Views, 139 Likes, 16 Saves, 6 Shares",
            metrics: [
                { label: "Views", val: "25.2K+" },
                { label: "Likes", val: "139" },
                { label: "Saves", val: "16" },
                { label: "Shares", val: "6" },
                { label: "Avg Watch", val: "20s" },
                { label: "Reach", val: "741" }
            ],
            challenge: "Create a fun office culture reel that boosts employee engagement while showcasing a positive and energetic workplace environment.",
            strategy: "Captured a Fun Friday team activity using short, dynamic clips, trending background music, and quick edits to create entertaining, shareable content that highlights company culture.",
            script: "[Hook] 'Fun Friday at the Office! 🎉' \\n[Action] Show teammates participating in a fun challenge, cheering each other on, and ending with a lighthearted team celebration.",
            storyboard: "Frame 1: 'Fun Friday' title with team introduction. \\nFrame 2: Employees participating in the game. \\nFrame 3: Funny reactions and cheering moments. \\nFrame 4: Team celebration with CTA to follow for more office content.",
            execution: "Shot vertically using natural lighting and handheld camera movement. Edited in CapCut with upbeat music, subtitles, smooth transitions, and quick cuts to keep viewers engaged.",
            videoUrl: "assets/video_zet.mp4",
            watchUrl: "[Paste Instagram Reel URL here]",
            lessons: "Office culture content creates stronger emotional connections with the audience, increasing shares, saves, and overall engagement while strengthening employer branding."
        },
        {
            id: "manager-interrupts-call",
            brand: "InfluencerAct",
            campaign: "Manager Interrupts Your Call – Office Comedy",
            role: "Content Executive",
            platform: "Instagram Reels",
            objective: "Create a highly relatable office comedy reel around a common workplace situation—employees getting interrupted while they're on a call—to maximize engagement and audience retention.",
            resultsText: "51.8K+ Views, 170 Likes, 18 Saves, 12 Comments",
            metrics: [
                { label: "Views", val: "51.8K+" },
                { label: "Likes", val: "170" },
                { label: "Saves", val: "18" },
                { label: "Comments", val: "12" },
                { label: "Avg Watch", val: "19s" },
                { label: "Reach", val: "10,352" }
            ],
            challenge: "Create a highly relatable office comedy reel around a common workplace situation—employees getting interrupted while they're on a call—to maximize engagement and audience retention.",
            strategy: "Used a simple workplace scenario with natural acting, short dialogue, and relatable humor. Focused on quick pacing, subtitles, and a strong opening hook to encourage shares and comments.",
            script: "[Hook] 'Your manager tells you to do something while you're on a call.' \\n[Action] Show the employee trying to handle the call while being interrupted by the manager, followed by a humorous reaction that every office employee can relate to.",
            storyboard: "Frame 1: Employee talking on an office call. \\nFrame 2: Manager interrupts with another task. \\nFrame 3: Confused and awkward reaction. \\nFrame 4: Funny ending with relatable office humor and CTA to share with coworkers.",
            execution: "Shot vertically inside the office using natural lighting and handheld camera movement. Edited in CapCut with subtitles, quick cuts, zoom effects, and fast-paced transitions to improve watch time and retention.",
            videoUrl: "assets/video_generic.mp4",
            watchUrl: "[Paste Instagram Reel URL here]",
            lessons: "Relatable workplace scenarios consistently perform well because they encourage viewers to tag friends, share with colleagues, and engage through comments."
        }
    ];

    // Social Media Posts / Carousels Database
    const socialPosts = [
        {
            id: "project1",
            title: "2X ROI, Not Just Hopes",
            platform: "Instagram",
            contentType: "Carousel",
            image: "assets/WhatsApp Image 2026-07-14 at 10.37.58 PM.jpeg",
            description: "Designed a branding-focused Instagram carousel for InfluencerAct to communicate how strategic influencer marketing delivers measurable ROI instead of vanity metrics. The carousel simplifies the value proposition using clean visuals, bold messaging, and a premium corporate design to build trust and encourage brand collaborations.",
            role: "Content Strategy, Copywriting, Carousel Planning, Design Direction",
            tools: "Canva, ChatGPT",
            livePostLink: "https://www.instagram.com/p/DTRytCHEvkh/",
            imgW: 1170,
            imgH: 1463
        },
        {
            id: "project2",
            title: "Official Apology Statement",
            platform: "Instagram",
            contentType: "Static Post",
            image: "assets/WhatsApp Image 2026-07-14 at 10.39.04 PM.jpeg",
            description: "Designed a humorous, brand-first Instagram static post for InfluencerAct using a fake 'Official Apology Statement' format. The creative uses witty copywriting to highlight the agency's marketing performance, campaign execution, and ROI while making the content highly shareable and memorable. The objective was to strengthen brand identity through relatable corporate humor.",
            role: "Creative Concept, Copywriting, Content Planning, Graphic Design",
            tools: "Canva, ChatGPT",
            livePostLink: "https://www.instagram.com/p/DQwPF4MDNVV/",
            imgW: 1170,
            imgH: 1463
        },
        {
            id: "project3",
            title: "Influencer Marketing Strategy Carousel",
            platform: "LinkedIn",
            contentType: "Carousel",
            image: "assets/WhatsApp Image 2026-07-14 at 10.40.37 PM.jpeg",
            description: "Created an educational LinkedIn carousel focused on influencer marketing strategies to build thought leadership and increase engagement among professionals.",
            role: "Content Research, Copywriting, Carousel Planning",
            tools: "Canva, ChatGPT",
            livePostLink: "https://www.linkedin.com/posts/influenceract_influencermarketing-creatoreconomy-brandstrategy-activity-7478699137232719872-T2C7",
            imgW: 1080,
            imgH: 1350
        },
        {
            id: "project4",
            title: "Digital Marketing Industry Insight",
            platform: "LinkedIn",
            contentType: "Static Post",
            image: "assets/WhatsApp Image 2026-07-14 at 10.42.08 PM.jpeg",
            description: "Designed a professional LinkedIn static creative to share digital marketing insights, strengthen brand authority, and engage a B2B audience.",
            role: "Content Strategy, Graphic Design",
            tools: "Canva",
            livePostLink: "https://www.linkedin.com/posts/influenceract_influencermarketing-kolkatamarketing-digitalads-activity-7356574569345794050-BNn1",
            imgW: 1200,
            imgH: 600
        },
        {
            id: "project5",
            title: "Instagram Account Insights – 42.9K Views",
            platform: "Instagram",
            contentType: "Analytics",
            image: "assets/post_1.jpeg",
            description: "Real-time Instagram account analytics snapshot showing 42,940 total views with 10,911 accounts reached. Reels contributed 55.1% of views with 71.3% coming from non-followers, validating organic reach performance.",
            role: "Analytics Reporting, Platform Optimization",
            tools: "Meta Business Suite",
            livePostLink: "",
            imgW: 1080,
            imgH: 540
        },
        {
            id: "project6",
            title: "Instagram Account Insights – 130K Views",
            platform: "Instagram",
            contentType: "Analytics",
            image: "assets/post_2.jpeg",
            description: "90-day Instagram analytics dashboard showing 130,742 total views and 42,406 accounts reached. Reels dominated at 68.7% of content views, with 76.1% of reach coming from non-followers — proving strong organic discovery.",
            role: "Analytics Reporting, Content Strategy Validation",
            tools: "Meta Business Suite",
            livePostLink: "",
            imgW: 1080,
            imgH: 540
        },
        {
            id: "project7",
            title: "YouTube Channel Analytics – 2.9M Views",
            platform: "YouTube",
            contentType: "Analytics",
            image: "assets/post_3.jpeg",
            description: "YouTube Studio analytics for the Office Relatable channel over 365 days: 2.9M views, 17.6K watch hours, and +1.2K subscribers. Realtime counter at 3,112 views in last 48 hours. Demonstrates consistent, high-volume video performance.",
            role: "YouTube SEO, Channel Management, Analytics",
            tools: "YouTube Studio",
            livePostLink: "",
            imgW: 1080,
            imgH: 540
        }
    ];

    // Planning Documents / Workspace Previews Database
    const planningDocuments = [
        {
            id: "instagram-cal",
            name: "Instagram Content Calendar",
            category: "Content Calendar",
            icon: "fa-brands fa-instagram",
            objective: "Establish a cohesive aesthetic grid, build a loyal community, and drive organic reach using short-form video reels and educational carousels.",
            timeline: "Monthly (Recurring Grid Strategy)",
            strategy: "Maintain a 3-pillar content distribution: 40% Engagement & Reels (Viral Hooks), 40% Value & Carousels (Saves & Shares), 20% Conversion & Stories (DM Automation triggers).",
            pillar: "Personal Finance / Career Growth / Social Media Tips",
            frequency: "4 Posts/Week (2 Reels, 1 Carousel, 1 Static) + Daily Stories",
            workflow: "Idea Research -> Keyword Strategy -> Visual Mockups in Claude -> Copywriting & Hooks -> Scheduling in Meta Business Suite",
            process: "Reviewing weekly explorer page metrics, designing grids using soft HSL Pinterest palettes, and pre-recording vertical video batches.",
            calendarImg: "assets/calendar_instagram_jan.jpg",
            preview: "Grid visual planner showcasing high-converting titles, visual palettes, and schedule slots.",
            notes: "Integrates ManyChat automation trigger words in captions ('Comment GROW to receive my checklist') to capture leads directly."
        },
        {
            id: "linkedin-cal",
            name: "LinkedIn Content Calendar",
            category: "Content Calendar",
            icon: "fa-brands fa-linkedin-in",
            objective: "Position as a thought leader in Social Media Marketing and Brand Strategy, attracting agency mandates and recruiter inquiries.",
            timeline: "Weekly Scheduling",
            strategy: "Focus on authority-building text guides, industry tear-downs, and visual PDF carousels breaking down campaign analytics.",
            pillar: "Marketing Teardowns / Workplace Insights / Campaign Case Studies",
            frequency: "3 Posts/Week (Tuesday, Thursday, Saturday morning slots)",
            workflow: "Industry News Monitoring -> Draft Outline -> Visual Slides Creation -> Polish Hook -> Native PDF Upload",
            process: "Analyzing B2B marketing trends, translating campaign data into carousel slides, and engaging with industry leads in comments.",
            calendarImg: "assets/calendar_linkedin.jpg",
            preview: "Scheduler table reflecting copywriting drafts, document carousels, and target post tags.",
            notes: "Uses the 'PAS' (Problem-Agitation-Solution) copywriting framework for high-impact hook positioning."
        },
        {
            id: "youtube-cal",
            name: "YouTube Content Calendar",
            category: "Content Calendar",
            icon: "fa-brands fa-youtube",
            objective: "Drive long-form watch time and channel subscribers via SEO-optimized tutorial guides and engaging horizontal video outlines.",
            timeline: "Quarterly Campaign Layout",
            strategy: "Focus on search-intent terms for educational content, backed by high-CTR thumbnail variations and interactive pinned comments.",
            pillar: "Detailed Tutorials / Tool Walkthroughs / Long-form Marketing Audits",
            frequency: "1 Video/Week (Saturdays) + 3 Shorts/Week",
            workflow: "TubeBuddy Keyword Research -> Script Writing -> A/B Thumbnail Design -> Video Production -> Meta Tag Optimization",
            process: "Script drafting with tight pacing constraints, designing thumbnails before filming, and auditing competitors' tags.",
            calendarImg: "assets/calendar_youtube.jpg",
            preview: "Weekly release schedule showing title keywords, edit status, and description copy links.",
            notes: "Tracks average viewer duration (AVD) peaks to optimize video layout and script pacing."
        },
        {
            id: "monthly-sheets",
            name: "Monthly Planning Sheets",
            category: "Strategic Planning",
            icon: "fa-solid fa-calendar-check",
            objective: "Outline campaign KPIs, brand partnerships, and monthly milestone tracks to align content creation with business goals.",
            timeline: "First week of every month",
            strategy: "Map content formats against product launches and key marketing holidays, ensuring uniform message alignment.",
            pillar: "Macro Goals / KPI Alignment / Brand Integrations",
            frequency: "1 Document/Month",
            workflow: "Client Briefing -> Target Metric Formulation -> Content Calendar Alignment -> Milestone Triggers",
            process: "Formulating performance benchmarks based on past month results, setting conversion targets, and mapping asset budgets.",
            preview: "Dashboard grid reflecting KPI target numbers, calendar grids, and campaign briefs.",
            notes: "Helps maintain a high-level view of content campaigns, ensuring content is never produced ad-hoc."
        },
        {
            id: "campaign-roadmaps",
            name: "Campaign Roadmaps",
            category: "Strategic Planning",
            icon: "fa-solid fa-route",
            objective: "Deconstruct multi-channel campaigns from pre-launch awareness phases to direct conversion action items.",
            timeline: "6-Week Cycles",
            strategy: "Build audience anticipation in phase 1, release main educational hooks in phase 2, and deploy direct CTAs in phase 3.",
            pillar: "Product Launches / Event Promotions / Audience Acquisition",
            frequency: "As per brand marketing calendar",
            workflow: "Concept Ideation -> Phase Definition -> Creative Deliverables Matrix -> Launch Runbook -> Post-Campaign Report",
            process: "Coordinating copywriting, visual assets, and influencer schedules to go live synchronously across channels.",
            preview: "Gantt-style timeline chart highlighting phases, cross-channel activities, and target milestones.",
            notes: "Critical for ensuring all channels (social, email, paid ads) communicate a singular cohesive narrative."
        },
        {
            id: "publishing-schedule",
            name: "Publishing Schedule",
            category: "Operations",
            icon: "fa-solid fa-clock",
            objective: "Optimize posting times across globally distributed audience timezones to maximize initial algorithm velocity.",
            timeline: "Continuous Optimization",
            strategy: "Schedule content during peak active hours (evaluated from channel analytics dashboards) to secure maximum initial watch rate.",
            pillar: "Distribution Velocity / Timezone Optimization",
            frequency: "Daily Calendar Matrix",
            workflow: "Auditing analytics logs -> Pinpointing peak hours -> Automating scheduler slots -> Verifying live publication",
            process: "Monitoring platform analytics weekly, setting up buffers, and adjusting triggers for global time zones.",
            preview: "Grid matrix displaying optimal hours per platform, status checks, and scheduling queues.",
            notes: "Automated via Buffer and Meta Business Suite to maintain consistent delivery cycles."
        },
        {
            id: "script-tracker",
            name: "Script Tracker",
            category: "Operations",
            icon: "fa-solid fa-file-signature",
            objective: "Maintain a dynamic repository of video script concepts, hooks, body points, and CTAs for vertical video formats.",
            timeline: "Bi-Weekly Script Sprints",
            strategy: "Standardize formatting for video scripts using hook variations (educational, curiosity, counter-intuitive) and clear visual cues.",
            pillar: "Script Writing / Vertical Video Formatting / Hook Testing",
            frequency: "10-15 Scripts/Month",
            workflow: "Idea Validation -> Writing Hook Options -> Detailing Body -> Formulating CTA -> Teleprompter Sync",
            process: "Pacing scripts to fit within 45 seconds, adding camera angle notes, and timing hooks for maximum retention.",
            preview: "Spreadsheet database tracking script title, hook type, draft text, and recording status.",
            notes: "Includes a strict A/B test strategy for hooks (first 3 seconds) to identify high-retention concepts."
        },
        {
            id: "content-approval",
            name: "Content Approval Workflow",
            category: "Operations",
            icon: "fa-solid fa-tasks",
            objective: "Ensure absolute brand compliance and quality standards through a multi-stage creative review process.",
            timeline: "Weekly Client Reviews",
            strategy: "Establish a transparent review protocol where writers, designers, and brand managers approve drafts before final queueing.",
            pillar: "Quality Assurance / Compliance / Client Communication",
            frequency: "Continuous Cycle",
            workflow: "First Draft -> Design Review -> Brand Compliance Check -> Client Approval -> Scheduled",
            process: "Logging comments on collaboration boards, updating templates, and tracking revision histories.",
            preview: "Kanban board card workspace showing stages: Idea, In Writing, In Design, Client Approval, and Ready to Publish.",
            notes: "Eliminates publishing errors and keeps agency, creator, and brand client perfectly aligned."
        }
    ];

    // Marketing Playbook Tab Content Database
    const playbookData = {
        research: {
            title: "Trend Forecasting & Pattern Mining",
            desc: "How I systematically identify cultural waves and viral formats before they peak, utilizing data-driven tracking tools instead of passive browsing.",
            badges: ["Google Trends", "TikTok Creative Center", "Instagram Explore", "Feedly RSS"],
            step: "Pillars of Trend Research",
            details: "1. DAILY AUDITING: Spending 20 mins on TikTok Creative Center filtering by 'Most Liked Reels' in regional finance/tech sectors.<br>2. HOOK CATALOGING: Extracting high-converting audio tracks and text prompts into a content repository.<br>3. CONTEXTUAL TRANSLATION: Adapting global trends to fit local FinTech brands (e.g. converting a viral dance trend into a brokerage calculator walkthrough)."
        },
        competitor: {
            title: "Competitor Grid & Content Auditing",
            desc: "Conducting content audits on major regional players to extract formatting templates and pinpoint content gaps.",
            badges: ["Competitor Mapping", "Gap Auditing", "Engagement Ratio Check", "Claude Design Review"],
            step: "Competitor Audit Process",
            details: "1. METRIC MAPPING: Reviewing top 5 competitors' grids and calculating their average engagement rates per format (Reels vs. Carousels).<br>2. GAPS CAPTURING: Identifying topics they avoid due to complexity (e.g. detailed auto-pay walkthroughs).<br>3. DESIGN CONTRASTING: Creating layout guidelines that visually break away from generic competitor styles (e.g. soft luxury vs. corporate blue)."
        },
        audience: {
            title: "Audience Persona & Sentiment Mapping",
            desc: "Mapping specific customer demographics, core financial anxieties, and language styles to design messaging that resonates emotionally.",
            badges: ["Demographics Analysis", "Psychographic Triggers", "Anxiety Mapping", "Comment Sentiment Scraping"],
            step: "Persona Mapping Matrix",
            details: "• PROFILE: First-time earners (ages 22-26) in Tier-1 & Tier-2 cities.<br>• PAIN POINT: 'I want to invest, but the UI looks intimidating and I'm afraid of losing capital.'<br>• LANGUAGE STYLE: Minimal jargon, friendly peer-like explanations, relatable visual analogies (e.g. comparing automated investments to a subscription service like Netflix)."
        },
        pillars: {
            title: "Three-Pillar Content Distribution Grid",
            desc: "Organizing content output around three core objective tracks to ensure brand authority, emotional connection, and conversion velocity.",
            badges: ["Authority Track (40%)", "Connection Track (40%)", "Conversion Track (20%)", "Grid Harmony"],
            step: "Content Pillar Execution",
            details: "1. AUTHORITY: High-value PDF carousels breaking down complex rates (e.g. Fixed Deposit peak analysis) and SEO guides.<br>2. CONNECTION: Relatable lifestyle reels, behind-the-scenes agency operations, and workplace humor.<br>3. CONVERSION: High-contrast case study posts and direct stories prompting comments to trigger DM leads."
        },
        scripting: {
            title: "Vertical Pacing & The 3-Sec Hook Formula",
            desc: "My structural framework for vertical videos to arrest scroll velocity immediately and maintain average view duration (AVD) above 70%.",
            badges: ["Visual Hook (0-3s)", "Problem Statement (3-8s)", "Step Breakdown (8-35s)", "The ManyChat CTA"],
            step: "The Script Blueprint",
            details: "• THE HOOK: A/B testing three styles: Curiosity ('This simple habit is costing you Rs. 4,000...'), Contrast ('Crypto vs. Fixed Deposit'), or Direct Claim.<br>• PACING: Switching visual frame/screen zoom every 2.5 seconds to prevent visual fatigue.<br>• CALL TO ACTION: Directing users to comment a trigger word instead of asking them to 'Click the bio link' (yielding 4x higher compliance)."
        },
        analytics: {
            title: "Analytics Post-Mortem & Optimization",
            desc: "How I interpret raw metrics to guide content iterations, focusing on retention curves, saves-to-shares velocity, and lead generation rates.",
            badges: ["Retention Curves", "Save-to-Share Velocity", "CTR Auditing", "A/B Testing Loops"],
            step: "Optimization Protocol",
            details: "1. CURVE AUDITING: Identifying where retention drops below 60% in video timelines to cut visual lag in future editing.<br>2. ENGAGEMENT RATIOS: Prioritizing content ideas that net high Saves (indicating utility) and Shares (indicating alignment).<br>3. STRATEGIC ITERATION: If a format wins, immediately duplicating its script layout, pacing, and visual theme for next week's grid."
        }
    };

    // Analytics Dashboard Data Store
    const dashboardMetricsData = {
        instagram: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            reach: [10, 25, 45, 50, 62, 70],
            shares: "221+",
            enquiries: "99",
            views: "70K+",
            engagements: "6.5K+",
            viewsDiff: "+42%",
            reachDiff: "+35%",
            engDiff: "+28%",
            enqDiff: "+50%"
        },
        linkedin: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            reach: [2, 5, 8, 12, 16, 19.9],
            shares: "128",
            enquiries: "42",
            views: "19.9K",
            engagements: "1.8K",
            viewsDiff: "+18%",
            reachDiff: "+22%",
            engDiff: "+15%",
            enqDiff: "+30%"
        },
        youtube: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            reach: [0.2, 0.8, 1.5, 2.1, 2.6, 2.9],
            shares: "5.8K",
            enquiries: "120",
            views: "2.9M",
            engagements: "17.5K Hr",
            viewsDiff: "+110%",
            reachDiff: "+85%",
            engDiff: "+95%",
            enqDiff: "+40%"
        },
        campaigns: {
            labels: ["Q1 '25", "Q2 '25", "Q3 '25", "Q4 '25", "Q1 '26", "Q2 '26"],
            reach: [1.5, 2.2, 3.8, 4.2, 4.6, 4.8], // ROI index
            shares: "4.8x Avg",
            enquiries: "280+",
            views: "140K+",
            engagements: "8.6%",
            viewsDiff: "+55%",
            reachDiff: "+60%",
            engDiff: "+18%",
            enqDiff: "+45%"
        },
        growth: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            reach: [0.1, 0.4, 0.9, 1.5, 2.3, 3.1], // Reach in Millions
            shares: "12.5K",
            enquiries: "450+",
            views: "3.1M+",
            engagements: "28.5K",
            viewsDiff: "+82%",
            reachDiff: "+95%",
            engDiff: "+70%",
            enqDiff: "+80%"
        }
    };

    const platformShares = [
        { name: "YouTube Video Campaigns", share: 65, colorClass: "bg-youtube" },
        { name: "Instagram Reels & Stories", share: 25, colorClass: "bg-instagram" },
        { name: "LinkedIn Thought Leadership", share: 10, colorClass: "bg-linkedin" }
    ];

    /* ==========================================================================
       2. DECORATIVE AMBIENT INTERACTIONS
       ========================================================================== */
    
    // Custom cursor glow movement
    const cursorGlow = document.getElementById('cursorGlow');
    if (cursorGlow) {
        document.addEventListener('mousemove', (e) => {
            cursorGlow.style.left = `${e.clientX}px`;
            cursorGlow.style.top = `${e.clientY}px`;
            cursorGlow.style.opacity = '1';
        });

        document.addEventListener('mouseleave', () => {
            cursorGlow.style.opacity = '0';
        });
    }

    // Sparkles interaction engine
    const sparklesBg = document.getElementById('sparklesBg');
    function generateSparkle(x, y) {
        if (!sparklesBg) return;
        const particle = document.createElement('div');
        particle.classList.add('sparkle-particle');

        const size = Math.random() * 8 + 4;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;

        // Sparkle directions
        const dx = (Math.random() - 0.5) * 150;
        const dy = (Math.random() - 0.5) * 150;
        particle.style.setProperty('--dx', `${dx}px`);
        particle.style.setProperty('--dy', `${dy}px`);

        const duration = Math.random() * 0.8 + 0.5;
        particle.style.animation = `sparkleFloat ${duration}s cubic-bezier(0.25, 1, 0.5, 1) forwards`;

        sparklesBg.appendChild(particle);
        setTimeout(() => particle.remove(), duration * 1000);
    }

    // Click sparkle burst
    document.addEventListener('click', (e) => {
        for (let i = 0; i < 8; i++) {
            generateSparkle(e.pageX, e.pageY);
        }
    });

    /* ==========================================================================
       3. DARK / LIGHT THEME TOGGLER
       ========================================================================== */
    const themeToggleBtn = document.getElementById('themeToggle');
    const systemThemeKey = 'aditi-portfolio-theme';

    // Init Theme Setup
    const savedTheme = localStorage.getItem(systemThemeKey);
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.body.classList.add('dark');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark');
            const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
            localStorage.setItem(systemThemeKey, currentTheme);
            
            // Re-render SVG chart to update color theme variables
            const activePeriodBtn = document.querySelector('.dashboard-toggle-btn.active');
            if (activePeriodBtn) {
                renderDashboard(activePeriodBtn.getAttribute('data-chart-period'));
            }
        });
    }

    /* ==========================================================================
       4. NAVIGATION STYLING & ACTIVE SCROLLING
       ========================================================================== */
    const navbar = document.getElementById('navbar');
    const navMenu = document.getElementById('navMenu');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollIndicator = document.getElementById('scrollIndicator');

    // Sticky Navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        highlightActiveSection();
    });

    // Mobile Toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = navToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.replace('fa-bars', 'fa-xmark');
            } else {
                icon.classList.replace('fa-xmark', 'fa-bars');
            }
        });
    }

    // Close Menu on Link Click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = navToggle.querySelector('i');
            if (icon) icon.classList.replace('fa-xmark', 'fa-bars');
        });
    });

    // Scroll Indicator
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Scroll active link highlight
    function highlightActiveSection() {
        const scrollPosition = window.scrollY + 200;
        const sections = document.querySelectorAll('section, header');
        
        sections.forEach(sec => {
            if (sec.id && sec.offsetTop <= scrollPosition && sec.offsetTop + sec.offsetHeight > scrollPosition) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sec.id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Back to Top Toggler
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTop.classList.add('active');
            } else {
                backToTop.classList.remove('active');
            }
        });
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ==========================================================================
       5. FEATURED VIDEO SHOWCASE & GALLERY RENDER
       ========================================================================== */
    const featuredVideoBox = document.getElementById('featuredVideoBox');
    const videoGallery = document.getElementById('videoGallery');

    // Function to render the main featured project block
    function renderFeaturedProject(proj) {
        if (!featuredVideoBox) return;

        featuredVideoBox.innerHTML = `
            <video class="featured-video-player" loop autoplay muted playsinline width="720" height="1280" src="${proj.videoUrl}"></video>
            <div class="featured-video-overlay">
                <div class="featured-brand-row">
                    <strong class="featured-category-badge">${proj.brand}</strong>
                    <span class="featured-category-badge">${proj.platform}</span>
                </div>
                <h3 class="featured-campaign-title">${proj.campaign}</h3>
                
                <div class="featured-campaign-details">
                    <div class="featured-detail-item">
                        <span>Role</span>
                        <strong>${proj.role}</strong>
                    </div>
                    <div class="featured-detail-item">
                        <span>Objective</span>
                        <strong>${proj.objective}</strong>
                    </div>
                    <div class="featured-detail-item">
                        <span>Results Summary</span>
                        <strong>${proj.resultsText}</strong>
                    </div>
                </div>
                
                <div class="featured-video-actions">
                    <button class="btn btn-primary open-case-study" data-project-id="${proj.id}">
                        Case Study Breakdown <i class="fa-solid fa-book-open" style="margin-left: 6px;"></i>
                    </button>
                    <button class="btn btn-tertiary watch-full-video" data-video-src="${proj.videoUrl}">
                        Watch Video <i class="fa-solid fa-play" style="margin-left: 6px;"></i>
                    </button>
                </div>
            </div>
        `;

        // Re-attach triggers to buttons inside this container
        featuredVideoBox.querySelector('.open-case-study').addEventListener('click', () => {
            openCaseStudyModal(proj.id);
        });
        featuredVideoBox.querySelector('.watch-full-video').addEventListener('click', () => {
            const isGenericShorts = proj.watchUrl && (proj.watchUrl === "https://youtube.com/shorts/" || proj.watchUrl === "https://youtube.com/shorts");
            if (proj.watchUrl && proj.watchUrl.startsWith('http') && !proj.watchUrl.includes('placeholder') && !proj.watchUrl.includes('Paste') && !isGenericShorts) {
                window.open(proj.watchUrl, '_blank');
            } else {
                openVideoPlayerOnly(proj);
            }
        });
    }

    // Render horizontal video project list
    function renderGalleryCards() {
        if (!videoGallery) return;

        videoGallery.innerHTML = videoProjects.map(proj => `
            <div class="gallery-card scroll-reveal" data-id="${proj.id}">
                <div class="card-video-preview">
                    <video loop muted playsinline width="720" height="1280" src="${proj.videoUrl}"></video>
                    <div class="card-video-play-btn"><i class="fa-solid fa-play"></i></div>
                </div>
                <div class="card-video-info">
                    <div class="card-video-brand">${proj.brand} • ${proj.platform}</div>
                    <h4 class="card-video-title">${proj.campaign}</h4>
                    <p class="card-video-objective">${proj.objective}</p>
                    
                    <div class="card-video-results">
                        <div class="card-result-metric">
                            <span>Key Result</span>
                            <strong>${proj.resultsText.split(',')[0]}</strong>
                        </div>
                        <button class="btn btn-secondary card-view-details" style="padding: 6px 16px; font-size: 0.75rem;">
                            View Case
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

        // Autoplay on hover & click trigger
        const cards = videoGallery.querySelectorAll('.gallery-card');
        cards.forEach(card => {
            const video = card.querySelector('video');
            
            // Hover autoplay logic
            card.addEventListener('mouseenter', () => {
                const playPromise = video.play();
                if (playPromise !== undefined) {
                    playPromise.catch(() => {});
                }
            });
            card.addEventListener('mouseleave', () => {
                video.pause();
                video.currentTime = 0;
            });

            // Card click highlights the featured segment
            card.addEventListener('click', (e) => {
                // If they clicked the 'View Case' button specifically, open modal directly
                if (e.target.classList.contains('card-view-details')) {
                    openCaseStudyModal(card.getAttribute('data-id'));
                } else {
                    const selectedId = card.getAttribute('data-id');
                    const project = videoProjects.find(p => p.id === selectedId);
                    if (project) {
                        renderFeaturedProject(project);
                        // Smooth scroll back to featured window
                        document.getElementById('featuredVideoBox').scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }
            });
        });
    }

    // Carousel buttons
    const prevBtn = document.getElementById('galleryPrevBtn');
    const nextBtn = document.getElementById('galleryNextBtn');
    if (videoGallery && prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            videoGallery.scrollBy({ left: -360, behavior: 'smooth' });
        });
        nextBtn.addEventListener('click', () => {
            videoGallery.scrollBy({ left: 360, behavior: 'smooth' });
        });
    }

    // Initialize Video Components
    if (videoProjects.length > 0) {
        renderFeaturedProject(videoProjects[0]);
        renderGalleryCards();
    }

    /* ==========================================================================
       6. SOCIAL POSTS MASONRY GRID (FILTERS & RENDER)
       ========================================================================== */
    const masonryGrid = document.getElementById('masonryGrid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    function renderSocialPosts(filterCategory = 'all') {
        if (!masonryGrid) return;

        const filtered = filterCategory === 'all' 
            ? socialPosts 
            : socialPosts.filter(post => {
                const typeMatch = post.contentType && post.contentType.toLowerCase().includes(filterCategory.toLowerCase());
                const platformMatch = post.platform && post.platform.toLowerCase() === filterCategory.toLowerCase();
                return typeMatch || platformMatch;
              });

        masonryGrid.innerHTML = filtered.map(post => {
            // Determine platform icon class
            let platformIconClass = "fa-instagram";
            if (post.platform.toLowerCase() === 'linkedin') {
                platformIconClass = "fa-linkedin-in";
            } else if (post.platform.toLowerCase() === 'youtube') {
                platformIconClass = "fa-youtube";
            }

            return `
            <div class="masonry-item scroll-reveal" data-id="${post.id}">
                <div class="post-media-wrapper">
                    <img src="${post.image}" alt="${post.title}" width="${post.imgW || 1080}" height="${post.imgH || 1350}" loading="lazy">
                    <div class="post-overlay">
                        <div class="post-overlay-btn"><i class="fa-solid fa-expand"></i></div>
                    </div>
                </div>
                <div class="post-content">
                    <div class="post-badge-row" style="display: flex; gap: 8px; margin-bottom: 12px; flex-wrap: wrap;">
                        <span class="badge-pill platform-badge" style="background: rgba(255,255,255,0.06); border: 1px solid var(--border-glass); padding: 4px 10px; border-radius: var(--radius-pill); font-size: 0.65rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: var(--text-primary); display: flex; align-items: center; gap: 6px;">
                            <i class="fa-brands ${platformIconClass}"></i> ${post.platform}
                        </span>
                        <span class="badge-pill type-badge" style="background: var(--gradient-gold); padding: 4px 10px; border-radius: var(--radius-pill); font-size: 0.65rem; font-weight: 600; color: #0F0E0D; text-transform: uppercase; letter-spacing: 0.5px;">
                            ${post.contentType}
                        </span>
                    </div>
                    <h4 class="post-title" style="margin-top: 0; margin-bottom: 8px;">${post.title}</h4>
                    <p class="post-objective" style="margin-bottom: 20px; line-height: 1.5;">${post.description}</p>
                    
                    <div class="post-actions" style="margin-top: auto;">
                        <button class="btn btn-secondary view-project-btn" style="width: 100%; padding: 10px 16px; font-size: 0.78rem; border-radius: var(--radius-md); font-weight: 500; display: flex; align-items: center; justify-content: center; gap: 6px;">
                            View Project <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
            `;
        }).join('');

        // Apply grid triggers
        masonryGrid.querySelectorAll('.masonry-item').forEach(item => {
            item.addEventListener('click', () => {
                openLightboxModal(item.getAttribute('data-id'));
            });
        });
        
        // Re-trigger scroll reveal for newly added elements
        const newlyAdded = masonryGrid.querySelectorAll('.scroll-reveal');
        newlyAdded.forEach(el => {
            el.classList.add('active');
        });
    }

    // Filter Buttons logic
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filterVal = btn.getAttribute('data-filter');
            renderSocialPosts(filterVal);
        });
    });

    // Init Masonry Grid
    renderSocialPosts();

    /* ==========================================================================
       7. MARKETING ANALYTICS DASHBOARD (CUSTOM SVG GRAPHS)
       ========================================================================== */
    const lineChartWrap = document.getElementById('lineChartWrap');
    const platformSharesContainer = document.getElementById('platformSharesContainer');
    const dashboardMetrics = document.getElementById('dashboardMetrics');
    const chartToggleBtns = document.querySelectorAll('[data-chart-period]');

    function renderDashboard(platform = 'instagram') {
        if (!lineChartWrap) return;

        const data = dashboardMetricsData[platform];
        
        // Update dashboard chart title dynamically
        const chartTitle = document.querySelector('.dashboard-panel-title');
        if (chartTitle) {
            if (platform === 'instagram') chartTitle.textContent = 'Instagram Organic Reach';
            else if (platform === 'linkedin') chartTitle.textContent = 'LinkedIn Impressions Growth';
            else if (platform === 'youtube') chartTitle.textContent = 'YouTube Video Growth Curve';
            else if (platform === 'campaigns') chartTitle.textContent = 'Campaign Performance (ROI / CTR)';
            else if (platform === 'growth') chartTitle.textContent = 'Cross-Channel Audience Impressions';
        }

        // SVG Graph calculations
        const width = 800;
        const height = 280;
        const paddingLeft = 50;
        const paddingRight = 30;
        const paddingTop = 20;
        const paddingBottom = 40;

        const plotWidth = width - paddingLeft - paddingRight;
        const plotHeight = height - paddingTop - paddingBottom;

        const maxVal = Math.max(...data.reach) * 1.15; // 15% headroom
        
        // Plot points
        const points = data.reach.map((val, idx) => {
            const x = paddingLeft + (idx / (data.reach.length - 1)) * plotWidth;
            const y = height - paddingBottom - (val / maxVal) * plotHeight;
            return { x, y, val };
        });

        // Path generator strings
        const pathLine = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
        const pathArea = `${pathLine} L ${points[points.length - 1].x} ${height - paddingBottom} L ${points[0].x} ${height - paddingBottom} Z`;

        let toolSuffix = (platform === 'youtube' || platform === 'growth') ? 'M' : (platform === 'campaigns' ? 'x' : 'K');

        // SVG Render
        lineChartWrap.innerHTML = `
            <svg viewBox="0 0 ${width} ${height}" class="chart-svg" width="100%" height="100%">
                <defs>
                    <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="var(--accent-gold)" stop-opacity="0.3"/>
                        <stop offset="100%" stop-color="var(--accent-gold)" stop-opacity="0.0"/>
                    </linearGradient>
                </defs>
                
                <!-- Y Axis Grid Lines -->
                ${[0, 0.25, 0.5, 0.75, 1].map(ratio => {
                    const y = paddingTop + ratio * plotHeight;
                    const rawVal = maxVal * (1 - ratio);
                    const val = (platform === 'youtube' || platform === 'growth' || platform === 'campaigns') ? rawVal.toFixed(1) : rawVal.toFixed(0);
                    let suffix = 'K';
                    if (platform === 'youtube' || platform === 'growth') suffix = 'M';
                    else if (platform === 'campaigns') suffix = 'x';
                    return `
                        <line x1="${paddingLeft}" y1="${y}" x2="${width - paddingRight}" y2="${y}" class="chart-grid-line"></line>
                        <text x="${paddingLeft - 10}" y="${y + 4}" text-anchor="end" class="chart-label-text">${val}${suffix}</text>
                    `;
                }).join('')}
                
                <!-- X Axis Labels -->
                ${data.labels.map((lbl, idx) => {
                    const x = paddingLeft + (idx / (data.labels.length - 1)) * plotWidth;
                    return `
                        <text x="${x}" y="${height - 15}" text-anchor="middle" class="chart-label-text">${lbl}</text>
                    `;
                }).join('')}
                
                <!-- Shaded Area -->
                <path d="${pathArea}" class="chart-path-area"></path>
                
                <!-- Line Path -->
                <path d="${pathLine}" class="chart-path-line" id="chartLinePath"></path>
                
                <!-- Interaction Nodes -->
                ${points.map(p => `
                    <circle cx="${p.x}" cy="${p.y}" r="5" fill="var(--bg-secondary)" stroke="var(--accent-gold)" stroke-width="2.5" style="transition: r 0.2s;" onmouseover="this.setAttribute('r', '8')" onmouseout="this.setAttribute('r', '5')">
                        <title>Reach: ${p.val}${toolSuffix}</title>
                    </circle>
                `).join('')}
            </svg>
        `;

        // Configure dynamic metric labels and icons
        let stat1Title = "Campaign Views", stat2Title = "Total Reach", stat3Title = "Engagement Rate", stat4Title = "Inbound Queries";
        let stat1Icon = "fa-eye", stat2Icon = "fa-user-group", stat3Icon = "fa-heart", stat4Icon = "fa-message";
        let reachSuffix = (platform === 'youtube' || platform === 'growth') ? 'M' : (platform === 'campaigns' ? 'x' : 'K');
        
        if (platform === 'campaigns') {
            stat1Title = "Lead Conversions"; stat1Icon = "fa-bullseye";
            stat2Title = "Campaign ROI"; stat2Icon = "fa-chart-line";
            stat3Title = "Average CTR"; stat3Icon = "fa-arrow-pointer";
            stat4Title = "Completed Forms"; stat4Icon = "fa-clipboard-list";
        } else if (platform === 'growth') {
            stat1Title = "Total Impressions"; stat1Icon = "fa-arrow-trend-up";
            stat2Title = "Network Reach"; stat2Icon = "fa-users";
            stat3Title = "Growth Rate"; stat3Icon = "fa-chart-pie";
            stat4Title = "Follower Inbound"; stat4Icon = "fa-user-plus";
        }

        // Update card metrics
        if (dashboardMetrics) {
            dashboardMetrics.innerHTML = `
                <div class="glass-panel metric-card scroll-reveal">
                    <div class="metric-header">
                        <span class="metric-title">${stat1Title}</span>
                        <div class="metric-icon"><i class="fa-solid ${stat1Icon}"></i></div>
                    </div>
                    <div class="metric-value">${data.views}</div>
                    <div class="metric-trend trend-up"><i class="fa-solid fa-arrow-trend-up"></i> ${data.viewsDiff}</div>
                </div>

                <div class="glass-panel metric-card scroll-reveal">
                    <div class="metric-header">
                        <span class="metric-title">${stat2Title}</span>
                        <div class="metric-icon"><i class="fa-solid ${stat2Icon}"></i></div>
                    </div>
                    <div class="metric-value">${data.reach[data.reach.length - 1]}${reachSuffix}+</div>
                    <div class="metric-trend trend-up"><i class="fa-solid fa-arrow-trend-up"></i> ${data.reachDiff}</div>
                </div>

                <div class="glass-panel metric-card scroll-reveal">
                    <div class="metric-header">
                        <span class="metric-title">${stat3Title}</span>
                        <div class="metric-icon"><i class="fa-solid ${stat3Icon}"></i></div>
                    </div>
                    <div class="metric-value">${data.engagements}</div>
                    <div class="metric-trend trend-up"><i class="fa-solid fa-arrow-trend-up"></i> ${data.engDiff}</div>
                </div>

                <div class="glass-panel metric-card scroll-reveal">
                    <div class="metric-header">
                        <span class="metric-title">${stat4Title}</span>
                        <div class="metric-icon"><i class="fa-solid ${stat4Icon}"></i></div>
                    </div>
                    <div class="metric-value">${data.enquiries}</div>
                    <div class="metric-trend trend-up"><i class="fa-solid fa-arrow-trend-up"></i> ${data.enqDiff}</div>
                </div>
            `;
            // Trigger instant active on these metrics
            dashboardMetrics.querySelectorAll('.scroll-reveal').forEach(el => el.classList.add('active'));
        }
    }

    // Toggle logic for graph platforms
    chartToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            chartToggleBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderDashboard(btn.getAttribute('data-chart-period'));
        });
    });

    // Render Side Bar Graph Shares
    function renderPlatformShares() {
        if (!platformSharesContainer) return;

        platformSharesContainer.innerHTML = platformShares.map(p => `
            <div class="platform-share-item">
                <div class="platform-label-row">
                    <span class="platform-name">${p.name}</span>
                    <span class="platform-percent">${p.share}%</span>
                </div>
                <div class="platform-bar-track">
                    <div class="platform-bar-fill ${p.colorClass}" style="width: 0%;"></div>
                </div>
            </div>
        `).join('');

        // Trigger animation delay for fill bars
        setTimeout(() => {
            const fills = platformSharesContainer.querySelectorAll('.platform-bar-fill');
            fills.forEach((fill, idx) => {
                fill.style.width = `${platformShares[idx].share}%`;
            });
        }, 300);
    }

    // Init Dashboard
    renderDashboard('instagram');
    renderPlatformShares();

    /* ==========================================================================
       8. TESTIMONIALS SLIDER RENDER
       ========================================================================== */
    const testimonialTrack = document.getElementById('testimonialTrack');
    const testimonialDots = document.getElementById('testimonialDots');
    const slides = document.querySelectorAll('.testimonial-slide');
    let activeTestimonialIdx = 0;

    if (testimonialTrack && testimonialDots && slides.length > 0) {
        // Render dots
        testimonialDots.innerHTML = Array.from({ length: slides.length }).map((_, idx) => `
            <div class="testimonial-dot ${idx === 0 ? 'active' : ''}" data-idx="${idx}"></div>
        `).join('');

        const dots = testimonialDots.querySelectorAll('.testimonial-dot');

        function slideTo(idx) {
            testimonialTrack.style.transform = `translateX(-${idx * 100}%)`;
            dots.forEach(d => d.classList.remove('active'));
            dots[idx].classList.add('active');
            activeTestimonialIdx = idx;
        }

        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const targetIdx = parseInt(dot.getAttribute('data-idx'), 10);
                slideTo(targetIdx);
            });
        });

        // Auto transition every 6 seconds
        setInterval(() => {
            let next = activeTestimonialIdx + 1;
            if (next >= slides.length) next = 0;
            slideTo(next);
        }, 6000);
    }

    /* ==========================================================================
       9. POP-UP OVERLAY MODAL MANAGER
       ========================================================================== */
    const overlayModal = document.getElementById('overlayModal');
    const modalContentArea = document.getElementById('modalContentArea');
    const modalClose = document.getElementById('modalClose');

    // Close Modal Event Handler
    if (modalClose && overlayModal) {
        modalClose.addEventListener('click', closeModal);
        overlayModal.addEventListener('click', (e) => {
            if (e.target === overlayModal) {
                closeModal();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && overlayModal.classList.contains('active')) {
                closeModal();
            }
        });
    }

    function closeModal() {
        overlayModal.classList.remove('active');
        // Stop any videos playing inside modal body
        const activeVideo = modalContentArea.querySelector('video');
        if (activeVideo) activeVideo.pause();
    }

    // Render detailed Case Study in Overlay Modal
    function openCaseStudyModal(id) {
        const proj = videoProjects.find(p => p.id === id);
        if (!proj || !modalContentArea || !overlayModal) return;

        modalContentArea.innerHTML = `
            <div class="modal-body">
                <div class="modal-header-section">
                    <div class="modal-brand">${proj.brand} • Case Study</div>
                    <h3 class="modal-title">${proj.campaign}</h3>
                    
                    <div class="modal-meta-grid">
                        <div class="modal-meta-item">
                            <span>Role</span>
                            <strong>${proj.role}</strong>
                        </div>
                        <div class="modal-meta-item">
                            <span>Objective</span>
                            <strong>${proj.objective}</strong>
                        </div>
                        <div class="modal-meta-item">
                            <span>Platform</span>
                            <strong>${proj.platform}</strong>
                        </div>
                        <div class="modal-meta-item">
                            <span>Campaign Metrics</span>
                            <strong>${proj.resultsText}</strong>
                        </div>
                    </div>
                </div>

                <div class="modal-main-content">
                    <div class="modal-video-box">
                        <video controls class="featured-video-player" width="720" height="1280" src="${proj.videoUrl}"></video>
                        ${proj.watchUrl && proj.watchUrl.startsWith('http') && !proj.watchUrl.includes('placeholder') && !proj.watchUrl.includes('Paste') && proj.watchUrl !== "https://youtube.com/shorts/" && proj.watchUrl !== "https://youtube.com/shorts" ? `
                            <a href="${proj.watchUrl}" target="_blank" class="modal-video-external-link" style="display: block; text-align: center; margin-top: 12px; color: var(--accent-gold); font-size: 0.85rem; text-decoration: none; font-weight: 500; transition: color 0.3s ease;">
                                View Live Post <i class="fa-solid fa-up-right-from-square" style="font-size: 0.75rem; margin-left: 4px;"></i>
                            </a>
                        ` : ''}
                    </div>

                    <div class="modal-text-grid">
                        <div>
                            <div class="modal-section-title">The Challenge</div>
                            <p class="modal-para">${proj.challenge}</p>
                            
                            <div class="modal-section-title" style="margin-top: 32px;">Content Strategy</div>
                            <p class="modal-para">${proj.strategy}</p>

                            <div class="modal-section-title" style="margin-top: 32px;">Lessons Learned</div>
                            <p class="modal-para">${proj.lessons}</p>
                        </div>

                        <div>
                            <div class="modal-section-title">Content Breakdown</div>
                            <div class="modal-script-box">${proj.script}</div>

                            <div class="modal-section-title" style="margin-top: 32px;">Creative Execution</div>
                            <div class="modal-script-box" style="max-height: 200px;">${proj.storyboard}</div>

                            <div class="modal-section-title" style="margin-top: 32px;">Production & Execution</div>
                            <p class="modal-para">${proj.execution}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;

        overlayModal.classList.add('active');
    }

    // Play only video modal handler
    function openVideoPlayerOnly(proj) {
        if (!modalContentArea || !overlayModal) return;

        modalContentArea.innerHTML = `
            <div class="modal-body" style="padding: 0; background: #000; overflow: hidden; height: 80vh;">
                <video controls autoplay class="featured-video-player" style="height: 100%; width: 100%; object-fit: contain;" width="720" height="1280" src="${proj.videoUrl}"></video>
            </div>
        `;
        overlayModal.classList.add('active');
    }

    // Render Expandable Lightbox for Social Media Posts
    function openLightboxModal(id) {
        const post = socialPosts.find(p => p.id === id);
        if (!post || !modalContentArea || !overlayModal) return;

        // Determine platform icon class
        let platformIconClass = "fa-instagram";
        if (post.platform.toLowerCase() === 'linkedin') {
            platformIconClass = "fa-linkedin-in";
        } else if (post.platform.toLowerCase() === 'youtube') {
            platformIconClass = "fa-youtube";
        }

        modalContentArea.innerHTML = `
            <div class="lightbox-body">
                <div class="lightbox-image-box">
                    <img src="${post.image}" alt="${post.title}" width="${post.imgW || 1080}" height="${post.imgH || 1350}">
                </div>
                <div class="lightbox-details">
                    <div class="modal-brand-row" style="display: flex; gap: 8px; margin-bottom: 12px; flex-wrap: wrap;">
                        <span class="badge-pill platform-badge" style="background: rgba(255,255,255,0.06); border: 1px solid var(--border-glass); padding: 4px 10px; border-radius: var(--radius-pill); font-size: 0.65rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: var(--text-primary); display: flex; align-items: center; gap: 6px;">
                            <i class="fa-brands ${platformIconClass}"></i> ${post.platform}
                        </span>
                        <span class="badge-pill type-badge" style="background: var(--gradient-gold); padding: 4px 10px; border-radius: var(--radius-pill); font-size: 0.65rem; font-weight: 600; color: #0F0E0D; text-transform: uppercase; letter-spacing: 0.5px;">
                            ${post.contentType}
                        </span>
                    </div>
                    <h3 class="modal-title" style="margin-bottom: 20px;">${post.title}</h3>
                    
                    <div style="margin-bottom: 24px;">
                        <div class="modal-section-title" style="font-size: 0.95rem; margin-bottom: 6px;">Project Description</div>
                        <p class="modal-para" style="font-size: 0.82rem; line-height: 1.55; color: var(--text-secondary);">${post.description}</p>
                    </div>

                    <div class="modal-meta-grid" style="grid-template-columns: 1fr 1fr; padding: 16px 0; margin-bottom: 24px; border-top: 1px solid var(--border-glass); border-bottom: 1px solid var(--border-glass); gap: 16px;">
                        <div class="modal-meta-item" style="display: flex; flex-direction: column; gap: 4px;">
                            <span style="font-size: 0.7rem; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.5px;">My Role</span>
                            <strong style="font-size: 0.82rem; color: var(--text-primary); font-weight: 600; line-height: 1.3;">${post.role}</strong>
                        </div>
                        <div class="modal-meta-item" style="display: flex; flex-direction: column; gap: 4px;">
                            <span style="font-size: 0.7rem; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.5px;">Tools Used</span>
                            <strong style="font-size: 0.82rem; color: var(--text-primary); font-weight: 600; line-height: 1.3;">${post.tools}</strong>
                        </div>
                    </div>

                    ${post.livePostLink ? `
                    <a href="${post.livePostLink}" target="_blank" class="btn btn-primary btn-shimmer" style="align-self: flex-start; padding: 12px 28px; font-size: 0.8rem; display: flex; align-items: center; gap: 8px;">
                        View Live Post <i class="fa-brands ${platformIconClass}"></i>
                    </a>` : ''}
                </div>
            </div>
        `;

        overlayModal.classList.add('active');
    }

    /* ==========================================================================
       10. COUNT-UP STAT NUMBERS (INTERSECTION OBSERVER)
       ========================================================================== */
    const counterNumbers = document.querySelectorAll('.counter-num');
    let countersCounted = false;

    function countUpStats() {
        counterNumbers.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'), 10);
            const duration = 2000;
            const start = performance.now();

            function update(time) {
                const elapsed = time - start;
                const progress = Math.min(elapsed / duration, 1);
                // Ease out quad
                const ease = progress * (2 - progress);
                const currentVal = Math.floor(ease * target);
                
                counter.innerHTML = `${currentVal}<span>+</span>`;

                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    counter.innerHTML = `${target}<span>+</span>`;
                }
            }
            requestAnimationFrame(update);
        });
    }

    // Intersection observer for counters
    const aboutSection = document.getElementById('about');
    if (aboutSection && counterNumbers.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !countersCounted) {
                    countUpStats();
                    countersCounted = true;
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        observer.observe(aboutSection);
    }

    /* ==========================================================================
       11. SCROLL REVEAL ACTIVATION
       ========================================================================== */
    function initScrollReveal() {
        const revealElements = document.querySelectorAll('.scroll-reveal');
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        revealElements.forEach(el => {
            revealObserver.observe(el);
        });
    }

    // Staggered reveal for sibling elements (skills, gallery cards, metrics)
    function addStaggerDelays(containerSelector, childSelector) {
        const containers = document.querySelectorAll(containerSelector);
        containers.forEach(container => {
            const children = container.querySelectorAll(childSelector);
            children.forEach((child, idx) => {
                child.style.transitionDelay = `${idx * 0.08}s`;
            });
        });
    }
    
    addStaggerDelays('.skills-cloud-wrap', '.skill-bubble');
    addStaggerDelays('.dashboard-metrics-grid', '.metric-card');
    addStaggerDelays('.timeline-wrapper', '.timeline-event');
    addStaggerDelays('.filter-tabs', '.filter-btn');

    // Subtle parallax drift for hero badges on scroll
    const heroBadges = document.querySelectorAll('.hero-badge');
    if (heroBadges.length > 0) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            heroBadges.forEach((badge, idx) => {
                const speed = 0.03 + idx * 0.015;
                badge.style.transform = `translateY(${-scrollY * speed}px)`;
            });
        }, { passive: true });
    }

    /* ==========================================================================
       12. CONTACT FORM SUBMISSION HANDLING (THANK YOU ANIMATION)
       ========================================================================== */
    const contactForm = document.getElementById('contactForm');
    const formStatusMsg = document.getElementById('formStatusMsg');

    if (contactForm && formStatusMsg) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            // Disable and show loading
            submitBtn.disabled = true;
            submitBtn.innerHTML = `Sending... <i class="fa-solid fa-spinner fa-spin" style="margin-left: 6px;"></i>`;
            
            // Simulate post request
            setTimeout(() => {
                const nameVal = document.getElementById('form-name').value;
                
                // Set success message
                formStatusMsg.textContent = `Thank you, ${nameVal}! Your message has been sent. Aditi will get back to you shortly! 💕`;
                formStatusMsg.className = 'form-status-msg success active';
                
                // Success thank you submit button text
                submitBtn.innerHTML = `Success! Thank You <i class="fa-solid fa-check" style="margin-left: 6px;"></i>`;
                
                // Reset form inputs
                contactForm.reset();
                
                // Re-enable and reset after duration
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;
                    
                    formStatusMsg.className = 'form-status-msg';
                    formStatusMsg.textContent = '';
                }, 5000);
                
            }, 1500);
        });
    }

    /* ==========================================================================
       13. CONTENT PLANNING & PLAYBOOK SYSTEM (DYNAMIC RENDER & INTERACTIVITY)
       ========================================================================== */
    
    // Render Planning Previews Grid
    const plannersGrid = document.getElementById('plannersGrid');
    function renderPlanningCards() {
        if (!plannersGrid) return;
        plannersGrid.innerHTML = planningDocuments.map(doc => `
            <div class="planner-card scroll-reveal" data-id="${doc.id}">
                <div class="planner-card-header">
                    <span class="planner-card-tag">${doc.category}</span>
                    <h4 class="planner-card-title">${doc.name}</h4>
                </div>
                <div class="planner-card-footer">
                    <div class="planner-card-icon"><i class="${doc.icon}"></i></div>
                    <span class="planner-card-action">Explore Plan <i class="fa-solid fa-arrow-right-long"></i></span>
                </div>
            </div>
        `).join('');

        // Modal triggers for planners
        plannersGrid.querySelectorAll('.planner-card').forEach(card => {
            card.addEventListener('click', () => {
                openPlanningModal(card.getAttribute('data-id'));
            });
        });
    }

    // Fullscreen Detailed Planning Modal Content Builder
    function openPlanningModal(id) {
        var doc = planningDocuments.find(function(d) { return d.id === id; });
        if (!doc || !modalContentArea || !overlayModal) return;

        // Build parts using concatenation to avoid nested template literal parse errors
        var workflowSteps = doc.workflow.split(' -> ').map(function(step, idx) {
            return '<div style="display:flex;align-items:center;margin-bottom:8px;">'
                 + '<span style="min-width:24px;height:24px;border-radius:50%;background:var(--accent-gold);color:var(--text-primary);display:inline-flex;align-items:center;justify-content:center;font-size:0.72rem;font-weight:600;margin-right:12px;">'
                 + (idx + 1) + '</span>'
                 + '<strong style="color:var(--text-primary);font-size:0.82rem;">' + step + '</strong>'
                 + '</div>';
        }).join('');

        var calendarBox = doc.calendarImg
            ? '<div style="font-weight:600;color:var(--text-primary);margin-bottom:10px;"><i class="fa-solid fa-table-cells" style="margin-right:6px;color:var(--accent-gold);"></i> Actual Calendar:</div>'
              + '<img src="' + doc.calendarImg + '" alt="Calendar" style="width:100%;border-radius:10px;border:1px solid var(--border-glass);object-fit:cover;max-height:260px;">'
            : '<p style="color:var(--text-secondary);line-height:1.5;font-size:0.78rem;">' + doc.preview + '</p>';

        modalContentArea.innerHTML = '<div class="modal-body">'
            + '<div class="modal-header-section">'
            +   '<div class="modal-brand">' + doc.category + ' &bull; Strategy Workspace</div>'
            +   '<h3 class="modal-title">' + doc.name + '</h3>'
            +   '<div class="modal-meta-grid">'
            +     '<div class="modal-meta-item"><span>Objective</span><strong>' + doc.objective + '</strong></div>'
            +     '<div class="modal-meta-item"><span>Timeline</span><strong>' + doc.timeline + '</strong></div>'
            +     '<div class="modal-meta-item"><span>Content Pillar</span><strong>' + doc.pillar + '</strong></div>'
            +     '<div class="modal-meta-item"><span>Frequency</span><strong>' + doc.frequency + '</strong></div>'
            +   '</div>'
            + '</div>'
            + '<div class="modal-text-grid">'
            +   '<div>'
            +     '<div class="modal-section-title">Content Strategy</div>'
            +     '<p class="modal-para">' + doc.strategy + '</p>'
            +     '<div class="modal-section-title" style="margin-top:32px;">Planning Process</div>'
            +     '<p class="modal-para">' + doc.process + '</p>'
            +     '<div class="modal-section-title" style="margin-top:32px;">Workflow Steps</div>'
            +     '<div class="modal-script-box" style="background:rgba(205,180,255,0.04);font-family:var(--font-body);font-size:0.85rem;padding:20px;">' + workflowSteps + '</div>'
            +   '</div>'
            +   '<div>'
            +     '<div class="modal-section-title">Calendar Preview</div>'
            +     '<div class="modal-script-box" style="padding:16px;background:rgba(248,200,220,0.04);">' + calendarBox + '</div>'
            +     '<div class="modal-section-title" style="margin-top:32px;">Strategic Notes</div>'
            +     '<div class="modal-script-box" style="max-height:220px;font-size:0.8rem;">' + doc.notes + '</div>'
            +   '</div>'
            + '</div>'
            + '</div>';

        overlayModal.classList.add('active');
    }


    // Render and manage Playbook
    const playbookHeader = document.getElementById('playbookHeader');
    const playbookBody = document.getElementById('playbookBody');

    function renderPlaybook(key = 'research') {
        if (!playbookBody) return;
        const pb = playbookData[key];
        
        playbookBody.innerHTML = `
            <div class="playbook-panel active">
                <div class="playbook-grid">
                    <div class="playbook-content-left">
                        <h4>${pb.title}</h4>
                        <p>${pb.desc}</p>
                        <div class="playbook-badge-list">
                            ${pb.badges.map(b => `<span class="playbook-badge">${b}</span>`).join('')}
                        </div>
                    </div>
                    <div class="playbook-content-right">
                        <div class="playbook-step-title">${pb.step}</div>
                        <div class="playbook-code-block">
                            ${pb.details}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    function initPlaybook() {
        if (!playbookHeader) return;
        renderPlaybook('research'); // Init with first tab

        const tabs = playbookHeader.querySelectorAll('.playbook-tab-btn');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                const key = tab.getAttribute('data-playbook');
                renderPlaybook(key);
            });
        });
    }

    // Horizontal Timeline Scroll Progression Trigger
    const timelineHorizontal = document.getElementById('timelineHorizontal');
    const timelineHorizontalFill = document.getElementById('timelineHorizontalFill');

    function initHorizontalTimelineScroll() {
        if (!timelineHorizontal) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    timelineHorizontal.classList.add('active');
                    
                    // Progressive step pulsing trigger
                    const steps = timelineHorizontal.querySelectorAll('.timeline-step-item');
                    steps.forEach((step, idx) => {
                        setTimeout(() => {
                            step.classList.add('active');
                            // Move fill percentage progressively
                            if (timelineHorizontalFill) {
                                const percent = ((idx) / (steps.length - 1)) * 100;
                                timelineHorizontalFill.style.width = `${percent}%`;
                            }
                        }, idx * 180 + 300);
                    });
                    
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
        
        observer.observe(timelineHorizontal);
    }

    // Initialize components
    renderPlanningCards();
    initPlaybook();
    initHorizontalTimelineScroll();
    
    // Trigger scroll reveal on all elements (including dynamic ones)
    initScrollReveal();

    // Trigger staggered delays for the new strategy elements
    addStaggerDelays('.workspace-grid', '.planner-card');
    addStaggerDelays('.viral-grid', '.viral-card');

});
