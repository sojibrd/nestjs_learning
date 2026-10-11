# nestjs_learning — Agent Instructions

NestJS-এর best practice-এর দিনভিত্তিক সাইট — ৪৫ দিন: ৪০ দিনে একটা করে rule, প্রতি ব্লকের শেষে একটা ⚑। chassis `nextjs_learning` থেকে (২০২৬-১০-১১); তিন repo-র পরিবার নয়, একটাই সাইট।

- **`guide/` = ৪০টা rule ফাইল**, `nestjs-best-practices` skill-এর `rules/` থেকে হুবহু (ইংরেজি; লেখক, upstream commit আর লাইসেন্স `guide/README.md`-এ)। **সম্পাদনা নয়** — উৎস বদলালে নতুন কপি। উৎসটা এই workspace-এর `.claude/skills/`-এ **নেই**; কপি হয়েছে GitHub থেকে। route `/guide/<ফাইলনাম>/`; সেকশন `_sections.md` থেকে, ফাইলনামের প্রথম অংশ ধরে।
- **`docs/` = plan** — `00-rules.md` আর ৫টা ব্লক, উৎসের নিজের ক্রমে, পাশাপাশি দুই সেকশন জোড়া দিয়ে: Architecture আর DI → Error আর Security → Performance আর Testing → Database আর API → Microservices আর DevOps। সেকশনের ভেতরে **ফাইলনামের** বর্ণানুক্রম — এই উৎসের compiled তালিকা এভাবেই সাজানো (ভাইবোন দুই সাইটে title-এর)। দিনের নম্বর পরপর না হলে build ভাঙে; ফাইলে তারিখ নেই, "আজ" = ক্যালেন্ডারের তারিখ।
- কাজে `(rule · <ফাইলনাম>)` = `guide/`-এর rule; না মিললে **build ভাঙে** — ইচ্ছাকৃত। দিনের শিরোনাম আর কাজের `**…**` = rule-এর `title` হুবহু।
- **plan-টা প্রথম পরিচয় ধরে সাজানো**, তাই কাজের ক্রম আন্দাজ → গাইডে Correct পড়া → বন্ধ করে নিজে লেখা → টিক, ১৫′। এই কারণে **গাইডের লিংক টিকের আগেই দেখায়** (`TaskItem`); `emberjs_learning` আর `nextjs_learning`-এ লিংক আসে টিকের পরে। গাইডের পাতার ভাঁজ তবু বন্ধ থাকে, টিক থাকলে নিজে খোলে (`RuleReveal`)।
- **ভাইবোনদের কোড এক নয়** — `nextjs_learning` থেকে আলাদা তিন জায়গায়: লিংক টিকের আগে (`TaskItem`), "আন্দাজ"-এর লেখা (`TaskItem`, `RuleReveal`, `guide/` পাতা দুটো), আর ক্রম ফাইলনাম ধরে (`guide.ts`)। এক সাইটের বদল অন্যটায় অন্ধভাবে কপি করবেন না। `kind: "example"` পথটা chassis থেকে রাখা; এই উৎসের ৪০টাই `fix`।
- কাজ শুধু rule-এর লেখা থেকে — NestJS নিয়ে নতুন rule বা ব্যাখ্যা নয়; গোড়ার ধারণায় আটকালে যাওয়ার জায়গা rule-এর নিজের Reference লিংক। একটাই সংযোজন: **Reference লিংকের পরীক্ষা** (২০২৬-১০-১১) `docs/00-rules.md`-এ — `docs.nestjs.com` যেকোনো ঠিকানায় HTTP 200 দেয়, তাই status দিয়ে নয়, browser-এ পাতার শিরোনাম দেখে মেলানো; ৯টা ঠিকানা সরে গেছে। `guide/` নতুন করে কপি হলে আবার মেলান।
- **Version মেলানো হয়নি** — rule-এ NestJS-এর version নেই, আর মেলানোর ডক এই workspace-এ নেই।
- ⚑ দিনের প্রশ্ন সব ব্লকেই ব্লকের rule থেকে — backend-এর জন্য `brainstorming/`-এ ইন্টারভিউ-প্রশ্ন নেই; বানাবেন না।
- **নোটের ঘর আর `note` key নেই**; আন্দাজটা ব্যবহারকারীর খাতায়। **Sandbox-ও নেই** — rule চালানোর NestJS প্রজেক্ট বানাবেন না, ব্যবহারকারী না বললে।
- **সময় ⏳** — দিনের ১৫′ সপ্তাহে ৭ ঘণ্টার ভেতরে না বাইরে, আর বাকি দুই সাইটের সাথে একসাথে না পরপর — ব্যবহারকারীর উত্তর বাকি। `suggestedStart` তাই `null`; কোনো plan-এর ঘর থেকে সময় কাটবেন না।
- 🧠 নাম → `app/lib/principles.ts`, `learning_to_learn`-এর ঐ ফাইলের কপি (৫৭টা বিষয়), লিংক ঐ সাইটের লাইভ Pages-এ। ওখানে বদলালে এখানেও।
- Progress চার key (`nestjs:v1:start`, `task`, `check`, `review`) — একমাত্র `app/hooks/useProgress.ts` দিয়ে; পঞ্চম key `nestjs:v1:meta` শুধু sync-এর timestamp। prefix `nextjs`-এর সাথে এক অক্ষরের তফাত — গুলিয়ে ফেলবেন না। কাজের লেখা বদলালে ঐ কাজের টিক হারায় (id = দিন + লেখার hash)।
- **Cross-device sync** — বাকি সাইটের মতোই: `app/lib/supabase.ts`, `app/hooks/useSync(Key).ts`, `app/components/SyncSettings.tsx`, `app/sync/page.tsx` chassis থেকে হুবহু, নিজে থেকে বদলাবেন না। `site_prefix` = `SITE.storagePrefix` = `nestjs`। `deploy.yml`-এর env নাম `NEXT_PUBLIC_SUPABASE_*` — বদলালে sync চুপচাপ মরে যাবে। **এখনো deploy হয়নি** (২০২৬-১০-১১)।
- `app/lib/plan.ts` আর `app/lib/guide.ts` server-only।
- **Theme contract অলঙ্ঘনীয়**, সাইট **dark-only**। code block-এ syntax highlighting নেই — chassis-এর `.doc-prose pre`।

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
