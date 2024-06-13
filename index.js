import { TD1Generator } from "./src/generators/td1.js";
import { TD2Generator } from "./src/generators/td2.js";
import { TD3Generator } from "./src/generators/td3.js";
import { MRVAGenerator } from "./src/generators/mrv-a.js";
import { MRVBGenerator } from "./src/generators/mrv-b.js";

import { TD1Document } from "./src/documents/td1.js";
import { TD2Document } from "./src/documents/td2.js";
import { TD3Document } from "./src/documents/td3.js";
import { MRVADocument } from "./src/documents/mrv-a.js";
import { MRVBDocument } from "./src/documents/mrv-b.js";

import { TD1Checker } from "./src/checkers/td1.js";
import { TD2Checker } from "./src/checkers/td2.js";
import { TD3Checker } from "./src/checkers/td3.js";
import { MRVAChecker } from "./src/checkers/mrv-a.js";
import { MRVBChecker } from "./src/checkers/mrv-b.js";

export {
  TD1Generator,
  TD2Generator,
  TD3Generator,
  MRVAGenerator,
  MRVBGenerator,
  TD1Document,
  TD2Document,
  TD3Document,
  MRVADocument,
  MRVBDocument,
  TD1Checker,
  TD2Checker,
  TD3Checker,
  MRVAChecker,
  MRVBChecker,
};

const document = new TD1Document(
  "ID",
  "MOZ",
  "50012",
  "M",
  "Keven José Manuel",
  "Gonçalves",
  "24/04/2002",
  "31/05/2027",
  "MOZ",
  "DA",
  "12"
);

const generator = new TD1Generator(document);
console.log(generator);
