export interface Post {
  title: string
  date: string
  category: string
  excerpt: string
  content: string
}

export const posts: Post[] = [
  {
    title: 'The Architecture of Silence',
    date: 'Feb 19, 2026',
    category: 'Design',
    excerpt:
      'Exploring how minimalist interfaces reduce cognitive load and create space for deep work in an increasingly noisy digital landscape.',
    content: `
        Minimalism is not just an aesthetic choice; it is a functional requirement for the modern mind. In a world where every pixel competes for our attention, silence becomes a luxury.

        When we strip away the non-essential, we are not just simplifying the visual field; we are reducing the cognitive overhead required to process information. This "Architecture of Silence" allows the user to focus on what truly matters: the content and the task at hand.

        In my own work, I strive to create interfaces that feel like they aren't even there. The best design is invisible. It guides the user without shouting, providing just enough affordance to be useful without being intrusive.
      `,
  },
  {
    title: 'NixOS: A Love Letter to Reproducibility',
    date: 'Feb 04, 2026',
    category: 'Systems',
    excerpt:
      'Why declarative configuration is the only way forward for professional development environments. A deep dive into my current setup.',
    content: `
        The traditional way of managing operating systems is broken. We install packages, tweak configuration files, and eventually, our systems become "snowflakes"—unique, fragile, and impossible to reproduce.

        NixOS changes everything. By treating the entire system configuration as a pure function, it ensures that your environment is exactly the same every time you build it. No more "it works on my machine" excuses.

        My current setup is fully defined in a set of Nix flakes. Whether I'm on my desktop or a new laptop, I can have my entire development environment—from my shell aliases to my window manager keybindings—up and running in minutes.
      `,
  },
  {
    title: 'Why Zed is the Future of Editing',
    date: 'Jan 22, 2026',
    category: 'Tools',
    excerpt:
      'Analyzing the performance benchmarks of the Zed editor and how its Rust-based core is redefining our expectations of latency.',
    content: `
        Latency is the enemy of flow. Even a few milliseconds of delay between a keystroke and the character appearing on screen can break the delicate state of deep focus.

        Zed, built from the ground up in Rust, is a masterclass in performance engineering. By leveraging the GPU for rendering and a highly optimized multi-threaded core, it achieves levels of responsiveness that make other editors feel sluggish.

        But performance isn't just about speed; it's about what that speed enables. When your tools are this fast, they disappear. You stop thinking about the editor and start thinking directly in code.
      `,
  },
  {
    title: 'Minimalism as a Performance Metric',
    date: 'Jan 08, 2026',
    category: 'Philosophy',
    excerpt:
      'Shifting the focus from raw speed to structural simplicity. How removing features can actually improve the perceived performance of a system.',
    content: `
        We often measure performance in terms of CPU cycles or network latency. But there is another metric that is just as important: structural simplicity.

        A system with fewer moving parts is inherently more reliable, easier to maintain, and often faster in practice. By removing features that don't add significant value, we reduce the complexity of the code and the cognitive load on the developer.

        Minimalism is not about having less; it's about having exactly what you need. When every part of a system has a clear and necessary purpose, the entire machine runs more efficiently.
      `,
  },
]
