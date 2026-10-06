// ─────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH FOR EVERY IMAGE ON THE SITE.
// Each key maps to a file in /public/images with the same name.
// When rebuilding in GoHighLevel, upload the file with the same
// name to the Media Library and swap the path for its GHL URL.
// ─────────────────────────────────────────────────────────────
const p = (file: string) => `/images/${file}`;

export const IMG = {
  // Brand
  logo: p("blackline-logo-white.png"),
  logoMark: p("blackline-logo-roof-mark.png"),
  favicon: p("blackline-favicon.png"),

  // Wide / hero shots
  heroDesertTile: p("home-hero-desert-tile-roof-crew.jpg"),
  mountainCrew: p("home-mountain-crew-underlayment.jpg"),
  aerialDrone: p("home-aerial-drone-desert-home.jpg"),
  aerialPool: p("aerial-tile-reroof-pool-home.jpg"),
  aerialTileRows: p("aerial-underlayment-tile-rows.jpg"),
  aerialRidge: p("aerial-ridge-underlayment-desert.jpg"),
  aerialBlue: p("aerial-blue-underlayment-reroof.jpg"),

  // Crew at work
  crewPassingTiles: p("crew-passing-tiles-blue-sky.jpg"),
  crewTileStacks: p("crew-tile-stacks-mountain.jpg"),
  crewBriefing: p("crew-briefing-straw-hat.jpg"),
  crewUnderlayment: p("crew-installing-underlayment-desert.jpg"),
  nailGunStrawHat: p("roofer-nail-gun-straw-hat.jpg"),
  nailGunCloseup: p("roofer-nail-gun-closeup.jpg"),
  circularSaw: p("roofer-circular-saw.jpg"),

  // Team & people
  teamTabletLaughing: p("team-three-tablet-laughing.jpg"),
  teamCloseup: p("team-laughing-closeup.jpg"),
  teamRoofMountain: p("team-on-roof-mountain.jpg"),
  teamThreeRoof: p("team-three-on-roof.jpg"),
  happyHomeowner: p("happy-homeowner-blackline-dumpster.jpg"),

  // Inspections
  inspectorTablet: p("inspector-tablet-blackline-shirt.jpg"),
  inspectorsPointing: p("inspectors-pointing-roof-detail.jpg"),
  inspectorHomeowner: p("inspector-with-homeowner-front-yard.jpg"),
  inspectorClayTile: p("inspector-clay-tile-roof.jpg"),
  inspectorMeasuring: p("inspector-measuring-tile-roof.jpg"),

  // Tile
  brokenTile: p("broken-clay-tile-damage.jpg"),
  tileStack: p("tile-stack-underlayment-job.jpg"),
  tileBattens: p("tile-new-underlayment-battens.jpg"),
  tileValley: p("tile-roof-valley-finished.jpg"),
  tilePoolHome: p("tile-roof-crew-pool-home.jpg"),

  // Shingle
  shingleRidge: p("shingle-roof-roofer-ridge.jpg"),
  shingleNew: p("shingle-roof-new-architectural.jpg"),
  shingleFinished: p("shingle-roof-finished-neighborhood.jpg"),

  // Flat / foam / coatings / metal
  foamRoof: p("foam-roof-spray-coated.jpg"),
  flatCommercial: p("flat-roof-commercial-aerial.jpg"),
  flatTpoRolls: p("flat-roof-tpo-rolls.jpg"),
  flatMembraneCut: p("flat-roof-membrane-cutting.jpg"),
  metalWorker: p("metal-roof-worker-installing.jpg"),
  metalSeam: p("metal-roof-standing-seam.jpg"),
  metalReflective: p("metal-roof-reflective-panels.jpg"),
  coatingCrew: p("coating-crew-rolling-white.jpg"),
  coatingAerial: p("coating-aerial-white-roof.jpg"),
} as const;

export type ImgKey = keyof typeof IMG;
