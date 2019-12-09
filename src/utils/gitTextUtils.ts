import { MagitChangeHunk } from "../models/magitChangeHunk";

export class GitTextUtils {
  public static diffToHunks(diff: string): MagitChangeHunk[] {
    return diff
      .substring(diff.indexOf("@@"))
      .split(/^(?=@@.*@@.*$)/gm)
      .map(hunkText => ({ diff: hunkText }));
  }
}