"use client";

import { Timeline } from "@/components/ui/timeline";
import { Squares } from "@/components/ui/squares-background";

export default function FighterJourneySection() {
  const timelineData = [
    {
      title: "Stage 1 – Foundations (0–6 months)",
      content: (
        <p>
          Learn stance, guard, jab–cross–hook, teep and low-kick while building basic strength and cardio. 
          Mentally, adopt a beginner&apos;s mind: welcome not-knowing, track small daily wins and stay patient. 
          <br /><br />
          <strong className="text-dl-gold">Milestone:</strong> You can shadow-box a full three-minute round with tidy form and explain one lesson you just learned.
        </p>
      ),
    },
    {
      title: "Stage 2 – Technical Growth (6–18 months)",
      content: (
        <p>
          Add three- to five-strike combinations, checking kicks, entry-level clinch work and light sparring. 
          Cultivate a growth mindset: see mistakes as data, keep a sparring journal and leave ego at the door. 
          <br /><br />
          <strong className="text-dl-gold">Milestone:</strong> You complete your first light-spar round landing every core strike and log constructive notes afterwards.
        </p>
      ),
    },
    {
      title: "Stage 3 – First Fight Camp (18–24 months)",
      content: (
        <p>
          Follow an eight-week fight camp, practise safe weight-cuts and ring-craft, drill corner communication. 
          Psychologically, train courage: visualise walk-outs, rehearse under pressure and focus on Stoic &quot;control the controllable&quot; principles. 
          <br /><br />
          <strong className="text-dl-gold">Milestone:</strong> You enter a novice or inter-club bout, execute your game-plan and review the fight without harsh self-judgement.
        </p>
      ),
    },
    {
      title: "Stage 4 – Amateur Circuit (2–4 years)",
      content: (
        <p>
          Accumulate 10+ amateur fights, refine clinch elbows and knees, improve recovery protocols and chase regional titles. 
          Develop resilience: bounce back from losses with structured debriefs, practise gratitude and separate self-worth from results. 
          <br /><br />
          <strong className="text-dl-gold">Milestone:</strong> You win a regional belt or record five consecutive bouts showing clear technical progress and healthy post-fight mindset.
        </p>
      ),
    },
    {
      title: "Stage 5 – Professional Debut (4–6 years)",
      content: (
        <p>
          Transition to 5×3-minute pro rules, manage sponsorships, run periodised camps and polish media skills. 
          Anchor yourself in professional purpose: craft a personal &quot;why,&quot; blend humility with public poise and use breathwork or cue words for focus. 
          <br /><br />
          <strong className="text-dl-gold">Milestone:</strong> You sign a pro contract, break into the national top-10 and deliver a composed post-fight interview that echoes your purpose.
        </p>
      ),
    },
    {
      title: "Stage 6 – International Contender (6+ years)",
      content: (
        <p>
          Compete on global shows (WBC, ONE, Lumpinee), adapt to travel conditions and shape your legacy skills. 
          Pursue mastery and service: mentor younger teammates, keep a white-belt curiosity and plan life after fighting while maintaining equanimity under spotlight. 
          <br /><br />
          <strong className="text-dl-gold">Milestone:</strong> You secure a world ranking and televised title shot while actively mentoring at least one rising fighter.
        </p>
      ),
    },
  ];

  return (
    <div className="relative">
      <div className="absolute inset-0">
        <Squares 
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="#333" 
          hoverFillColor="#222"
        />
      </div>
      <div className="relative z-10 pt-0">
        <Timeline data={timelineData} />
      </div>
    </div>
  );
}