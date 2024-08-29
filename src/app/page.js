"use client";
import VerticalNav from "@/components/nav";
import Hero from "@/components/hero";
import MusicSection from "@/components/music";
import ToneSection from "@/components/tones";
import NotesSection from "@/components/notes";
import TonesAndSemitonesSection from "@/components/intervals";
import AccidentalsSection from "@/components/acidents";
import ChordsSection from "@/components/chords";
import HarmonicFieldSection from "@/components/harmonicfield";
import RhythmSection from "@/components/rhythm";
import FinalSection from "@/components/end";
import Cursor from "@/components/cursor";

export default function Home() {
  return (
    <>
      <VerticalNav />
      <Cursor />
      <div id="hero">
        <Hero />
      </div>
      <div id="music">
        <MusicSection />
      </div>
      <div id="tones">
        <ToneSection />
      </div>
      <div id="notes">
        <NotesSection />
      </div>
      <div id="intervals">
        <TonesAndSemitonesSection />
      </div>
      <div id="accidents">
        <AccidentalsSection />
      </div>
      <div id="chords">
        <ChordsSection />
      </div>
      <div id="harmonicfield">
        <HarmonicFieldSection />
      </div>
      <div id="rhythm">
        <RhythmSection />
      </div>
      <div id="end">
        <FinalSection />
      </div>
    </>
  );
}
