import { ChordAnalyzerImpl, ChordNamerImpl } from "..";
import { Chord } from "../sound/interfaces";
import { ChordAnalyzer, ChordNamer, ChordParser } from "./interfaces";

export class ChordParserImpl implements ChordParser {
  private analyzer: ChordAnalyzer = new ChordAnalyzerImpl();
  private namer: ChordNamer = new ChordNamerImpl();

  constructor(analyzer: ChordAnalyzer, namer: ChordNamer) {
    this.analyzer = analyzer;
    this.namer = namer;
  }

  parse(chord: Chord): string | undefined {
    const analyzed = this.analyzer.analyze(chord);
    return this.namer.name(chord, analyzed);
  }
}
