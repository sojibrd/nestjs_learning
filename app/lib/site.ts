/**
 * সাইটের পরিচয় — plan-এর কনটেন্ট নয়, তাই `docs/`-এ নয়, এখানে।
 *
 * chassis `nextjs_learning` থেকে; এই সাইট একটাই পথ, তিন repo-র পরিবার নয়।
 */
export const SITE: {
  title: string;
  short: string;
  emoji: string;
  description: string;
  storagePrefix: string;
  suggestedStart: string | null;
} = {
  title: "NestJS — rule ধরে প্রথম পরিচয়",
  short: "nestjs learning",
  emoji: "🪺",
  description:
    "NestJS-এর ৪০টা best practice — দিনে একটা, ১৫′: Incorrect কোড দেখে আন্দাজ, Correct পড়া, বন্ধ করে নিজে লেখা আর কেন ইংরেজিতে বলা, ঝালাইসহ।",
  /** localStorage key-এর prefix */
  storagePrefix: "nestjs",
  /** শুরুর তারিখের প্রস্তাব নেই — কখন বসবেন ⏳ */
  suggestedStart: null,
};
