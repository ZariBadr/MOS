"use client";
import ScrambledText from '../components/ScrambledText';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-6 font-mono selection:bg-green-500/30">

      <main className="text-center space-y-8">
        {/* Subtle Logo/Status Indicator */}
        <div className="flex justify-center">
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-green-500 text-xl md:text-2xl font-medium tracking-tight">
            Moroccan Open Source
          </h1>
        </div>
        <ScrambledText
          className="scrambled-text-demo"
          radius={100}
          duration={1.2}
          speed={0.5}
          scrambleChars=".:"
        >
          MOS is under construction.
          Stay tuned for the launch of our open source projects, tools, and resources. We're brewing something special in the Moroccan open source ecosystem, and we can't wait to share it with you!
        </ScrambledText>
        {/* Message */}
        <div className="max-w-xl mx-auto space-y-6">
          <div className="space-y-3">
            <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
              <a
                href="https://myportfolio-git-main-badreddine-zaris-projects.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-200 hover:text-green-500 transition-colors underline decoration-zinc-700 underline-offset-4 font-medium"
              >
                Badreddine Zari
              </a>
              {" "} is currently building a team. Feel free to reach out to contribute or share ideas.
            </p>
          </div>
        </div>
      </main>

      {/* Subtle Bottom Label */}
      <footer className="fixed bottom-8 text-[10px] text-zinc-700 uppercase tracking-[0.2em]">
        Coming Soon — 2026
      </footer>
    </div>
  );
}