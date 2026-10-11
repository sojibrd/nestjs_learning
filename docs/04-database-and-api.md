# ব্লক ৪ — Database আর API

*দিন ০৩১–০৩৮ · db · api*

উৎসের সেকশন ৭ (*Database & ORM*) আর ৮ (*API Design*) — ৭টা rule, দিনে একটা; শেষ দিনে ⚑। N+1 query, migration আর transaction; তারপর DTO, interceptor, pipe আর API versioning।

> **ব্লক শেষে:** ৭টা rule-এর প্রতিটায় Correct বন্ধ করে নিজে লেখা আর "কেন" ইংরেজিতে বলা হয়েছে, আর ⚑-এর উত্তর ২ মিনিটে মুখে এসেছে?

### দিন ০৩১ · Avoid N+1 Query Problems

- [ ] ১৫′ **Avoid N+1 Query Problems** — নিচের Incorrect কোড পড়ে আগে খাতায় এক লাইনে আন্দাজ: কী ভুল; তারপর গাইডে Correct আর ব্যাখ্যা পড়ুন, বন্ধ করে Correct-টা নিজে লিখুন, আর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন (rule · db-avoid-n-plus-one) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** আন্দাজ লেখা, Correct বন্ধ করে নিজে লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০৩২ · Use Database Migrations

- [ ] ১৫′ **Use Database Migrations** — নিচের Incorrect কোড পড়ে আগে খাতায় এক লাইনে আন্দাজ: কী ভুল; তারপর গাইডে Correct আর ব্যাখ্যা পড়ুন, বন্ধ করে Correct-টা নিজে লিখুন, আর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন (rule · db-use-migrations) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** আন্দাজ লেখা, Correct বন্ধ করে নিজে লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০৩৩ · Use Transactions for Multi-Step Operations

- [ ] ১৫′ **Use Transactions for Multi-Step Operations** — নিচের Incorrect কোড পড়ে আগে খাতায় এক লাইনে আন্দাজ: কী ভুল; তারপর গাইডে Correct আর ব্যাখ্যা পড়ুন, বন্ধ করে Correct-টা নিজে লিখুন, আর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন (rule · db-use-transactions) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** আন্দাজ লেখা, Correct বন্ধ করে নিজে লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০৩৪ · Use DTOs and Serialization for API Responses

- [ ] ১৫′ **Use DTOs and Serialization for API Responses** — নিচের Incorrect কোড পড়ে আগে খাতায় এক লাইনে আন্দাজ: কী ভুল; তারপর গাইডে Correct আর ব্যাখ্যা পড়ুন, বন্ধ করে Correct-টা নিজে লিখুন, আর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন (rule · api-use-dto-serialization) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** আন্দাজ লেখা, Correct বন্ধ করে নিজে লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০৩৫ · Use Interceptors for Cross-Cutting Concerns

- [ ] ১৫′ **Use Interceptors for Cross-Cutting Concerns** — নিচের Incorrect কোড পড়ে আগে খাতায় এক লাইনে আন্দাজ: কী ভুল; তারপর গাইডে Correct আর ব্যাখ্যা পড়ুন, বন্ধ করে Correct-টা নিজে লিখুন, আর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন (rule · api-use-interceptors) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** আন্দাজ লেখা, Correct বন্ধ করে নিজে লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০৩৬ · Use Pipes for Input Transformation

- [ ] ১৫′ **Use Pipes for Input Transformation** — নিচের Incorrect কোড পড়ে আগে খাতায় এক লাইনে আন্দাজ: কী ভুল; তারপর গাইডে Correct আর ব্যাখ্যা পড়ুন, বন্ধ করে Correct-টা নিজে লিখুন, আর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন (rule · api-use-pipes) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** আন্দাজ লেখা, Correct বন্ধ করে নিজে লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০৩৭ · Use API Versioning for Breaking Changes

- [ ] ১৫′ **Use API Versioning for Breaking Changes** — নিচের Incorrect কোড পড়ে আগে খাতায় এক লাইনে আন্দাজ: কী ভুল; তারপর গাইডে Correct আর ব্যাখ্যা পড়ুন, বন্ধ করে Correct-টা নিজে লিখুন, আর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন (rule · api-versioning) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** আন্দাজ লেখা, Correct বন্ধ করে নিজে লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০৩৮ · মুখে — Database আর API-এর তিনটা rule

- [ ] ১০′ ⚑ এই ব্লকের ৭টা rule থেকে তিনটা বাছুন — Database & ORM থেকে অন্তত একটা, API Design থেকে অন্তত একটা — শুধু নাম দেখে, গাইড না খুলে, প্রতিটার "কেন" ইংরেজিতে জোরে বলুন, মোট ২ মিনিটে 🧠 (Test yourself · Chunking)

> **দিন শেষে:** ২ মিনিটে, গাইড না খুলে, ইংরেজিতে বলা হয়েছে?
