const formations = {
  "4-3-3": {
    title: "4-3-3",
    identity: "Wide front line, aggressive pressing, strong midfield triangle.",
    phases: {
      base: "Base Shape",
      possession: "In Possession",
      defense: "Out of Possession",
      press: "High Press",
    },
    summary:
      "A flexible attacking structure that creates width through wingers, central security through a holding midfielder, and fast access to pressure after losing the ball.",
    pros: ["Natural width", "Strong counter-press", "Clear triangles", "Good for possession teams"],
    cons: ["Fullbacks can be exposed", "Single pivot needs range", "Wingers must defend long distances"],
    evolution:
      "Commonly becomes a 2-3-5 in possession, a 4-1-4-1 in defense, and a front-three press when the opponent builds short.",
    drills: [
      "Build through center back, pivot, and fullback triangles.",
      "Train winger pressing angle to force play inside or toward the touchline.",
      "Rehearse fullback recovery when the winger loses the ball high.",
    ],
    players: [
      player("GK", "Goalkeeper", "GK", 8, 34, { possession: [9, 34], defense: [7, 34], press: [9, 34] }),
      player("LB", "Left Back", "FB", 24, 55, { possession: [36, 55], defense: [20, 55], press: [35, 56] }),
      player("LCB", "Left Center Back", "CB", 20, 42, { possession: [20, 43], defense: [18, 42], press: [22, 43] }),
      player("RCB", "Right Center Back", "CB", 20, 26, { possession: [20, 25], defense: [18, 26], press: [22, 25] }),
      player("RB", "Right Back", "FB", 24, 13, { possession: [36, 13], defense: [20, 13], press: [35, 12] }),
      player("DM", "Defensive Midfielder", "6", 40, 34, { possession: [42, 34], defense: [36, 34], press: [48, 34] }),
      player("LCM", "Left Central Midfielder", "8", 52, 46, { possession: [58, 45], defense: [47, 45], press: [58, 45] }),
      player("RCM", "Right Central Midfielder", "8", 52, 22, { possession: [58, 23], defense: [47, 23], press: [58, 23] }),
      player("LW", "Left Winger", "W", 76, 56, { possession: [86, 58], defense: [58, 56], press: [77, 55] }),
      player("ST", "Striker", "9", 82, 34, { possession: [87, 34], defense: [66, 34], press: [82, 34] }),
      player("RW", "Right Winger", "W", 76, 12, { possession: [86, 10], defense: [58, 12], press: [77, 13] }),
    ],
  },
  "4-2-3-1": {
    title: "4-2-3-1",
    identity: "Double-pivot control with a playmaker between the lines.",
    phases: {
      base: "Base Shape",
      possession: "In Possession",
      defense: "Out of Possession",
      press: "Mid Press",
    },
    summary:
      "A balanced shape that protects the center while giving the attacking midfielder freedom to receive behind the opponent midfield.",
    pros: ["Central protection", "Easy defensive references", "Good platform for creators"],
    cons: ["Striker can be isolated", "Wide players carry transition load", "Can become flat without rotations"],
    evolution:
      "Often attacks as a 2-4-4 or 3-2-5 depending on the fullbacks, then defends as a compact 4-4-1-1.",
    drills: [
      "Double pivot staggering: one shows, one screens.",
      "Number 10 receiving on the half-turn under pressure.",
      "Wide midfielder recovery after fullback overlap.",
    ],
    players: [
      player("GK", "Goalkeeper", "GK", 8, 34, { possession: [9, 34], defense: [7, 34], press: [9, 34] }),
      player("LB", "Left Back", "FB", 23, 55, { possession: [42, 56], defense: [20, 55], press: [30, 56] }),
      player("LCB", "Left Center Back", "CB", 19, 42, { possession: [21, 43], defense: [18, 42], press: [20, 43] }),
      player("RCB", "Right Center Back", "CB", 19, 26, { possession: [21, 25], defense: [18, 26], press: [20, 25] }),
      player("RB", "Right Back", "FB", 23, 13, { possession: [42, 12], defense: [20, 13], press: [30, 12] }),
      player("LDM", "Left Defensive Midfielder", "6", 39, 42, { possession: [44, 43], defense: [36, 42], press: [43, 42] }),
      player("RDM", "Right Defensive Midfielder", "6", 39, 26, { possession: [44, 25], defense: [36, 26], press: [43, 26] }),
      player("LW", "Left Midfielder", "W", 62, 55, { possession: [78, 57], defense: [50, 55], press: [65, 55] }),
      player("AM", "Attacking Midfielder", "10", 63, 34, { possession: [72, 34], defense: [55, 34], press: [66, 34] }),
      player("RW", "Right Midfielder", "W", 62, 13, { possession: [78, 11], defense: [50, 13], press: [65, 13] }),
      player("ST", "Striker", "9", 80, 34, { possession: [86, 34], defense: [67, 34], press: [80, 34] }),
    ],
  },
  "3-5-2": {
    title: "3-5-2",
    identity: "Back-three security with wingback width and two central forwards.",
    phases: {
      base: "Base Shape",
      possession: "In Possession",
      defense: "Out of Possession",
      press: "Front Two Press",
    },
    summary:
      "A compact central system that can overload midfield and attack with two strikers, but asks a lot from wingbacks in both directions.",
    pros: ["Strong central numbers", "Two-striker threat", "Back-three rest defense"],
    cons: ["Wingbacks cover huge space", "Can concede wide overloads", "Needs precise midfield distances"],
    evolution:
      "Can attack as a 3-2-5 with wingbacks high, then defend as a 5-3-2 when protecting the box.",
    drills: [
      "Wingback timing: join only when the near midfielder can cover.",
      "Striker pair pressing: one curves, one blocks the pivot.",
      "Back three shifting while keeping far-side center back connected.",
    ],
    players: [
      player("GK", "Goalkeeper", "GK", 8, 34, { possession: [9, 34], defense: [7, 34], press: [9, 34] }),
      player("LCB", "Left Center Back", "CB", 20, 48, { possession: [22, 48], defense: [18, 49], press: [22, 48] }),
      player("CB", "Center Back", "CB", 18, 34, { possession: [19, 34], defense: [17, 34], press: [20, 34] }),
      player("RCB", "Right Center Back", "CB", 20, 20, { possession: [22, 20], defense: [18, 19], press: [22, 20] }),
      player("LWB", "Left Wingback", "WB", 43, 58, { possession: [74, 59], defense: [24, 58], press: [58, 58] }),
      player("RWB", "Right Wingback", "WB", 43, 10, { possession: [74, 9], defense: [24, 10], press: [58, 10] }),
      player("DM", "Defensive Midfielder", "6", 40, 34, { possession: [43, 34], defense: [35, 34], press: [48, 34] }),
      player("LCM", "Left Midfielder", "8", 55, 45, { possession: [60, 45], defense: [48, 45], press: [58, 45] }),
      player("RCM", "Right Midfielder", "8", 55, 23, { possession: [60, 23], defense: [48, 23], press: [58, 23] }),
      player("LS", "Left Striker", "9", 76, 42, { possession: [84, 43], defense: [66, 42], press: [78, 42] }),
      player("RS", "Right Striker", "9", 76, 26, { possession: [84, 25], defense: [66, 26], press: [78, 26] }),
    ],
  },
  "4-4-2": {
    title: "4-4-2",
    identity: "Two banks of four with two strikers and clear wide-midfield responsibilities.",
    phases: {
      base: "Base Shape",
      possession: "In Possession",
      defense: "Out of Possession",
      press: "Front Two Press",
    },
    summary:
      "A direct, balanced structure that can protect width, play early into two forwards, and defend compactly with simple references.",
    pros: ["Clear partnerships", "Strong wide coverage", "Two-striker counter threat", "Simple defensive distances"],
    cons: ["Can be outnumbered centrally", "Wide midfielders work hard", "Needs compact vertical distances"],
    evolution:
      "Can defend as a compact 4-4-2 block, attack with wide midfielders high, or become a diamond to add central overloads.",
    drills: [
      "Striker pair pressing: one jumps, one screens pivot.",
      "Wide midfielder and fullback cover/overlap rotation.",
      "Central two staying connected against a midfield three.",
    ],
    variations: {
      flat: {
        label: "Flat midfield",
        title: "4-4-2 Flat",
        identity: "Two central midfielders, two wide midfielders, and two forwards in a compact classic block.",
        summary:
          "Best for simple defensive organization, wide coverage, and direct attacking through two strikers.",
        players: [
          player("GK", "Goalkeeper", "GK", 8, 34, { possession: [9, 34], defense: [7, 34], press: [9, 34] }),
          player("LB", "Left Back", "FB", 23, 55, { possession: [33, 55], defense: [20, 55], press: [30, 56] }),
          player("LCB", "Left Center Back", "CB", 19, 42, { possession: [21, 43], defense: [18, 42], press: [21, 43] }),
          player("RCB", "Right Center Back", "CB", 19, 26, { possession: [21, 25], defense: [18, 26], press: [21, 25] }),
          player("RB", "Right Back", "FB", 23, 13, { possession: [33, 13], defense: [20, 13], press: [30, 12] }),
          player("LM", "Left Midfielder", "W", 48, 55, { possession: [65, 56], defense: [42, 55], press: [55, 56] }),
          player("LCM", "Left Central Midfielder", "8", 46, 42, { possession: [52, 42], defense: [42, 42], press: [52, 42] }),
          player("RCM", "Right Central Midfielder", "8", 46, 26, { possession: [52, 26], defense: [42, 26], press: [52, 26] }),
          player("RM", "Right Midfielder", "W", 48, 13, { possession: [65, 12], defense: [42, 13], press: [55, 12] }),
          player("LS", "Left Striker", "9", 76, 41, { possession: [84, 42], defense: [66, 41], press: [78, 41] }),
          player("RS", "Right Striker", "9", 76, 27, { possession: [84, 26], defense: [66, 27], press: [78, 27] }),
        ],
      },
      smallDiamond: {
        label: "Small diamond",
        title: "4-4-2 Small Diamond",
        identity: "Narrow midfield diamond: pivot, two shuttlers, and a 10 close behind two strikers.",
        summary:
          "Best for central overloads, quick combinations, and protecting the middle, but it asks fullbacks to provide width.",
        players: [
          player("GK", "Goalkeeper", "GK", 8, 34, { possession: [9, 34], defense: [7, 34], press: [9, 34] }),
          player("LB", "Left Back", "FB", 23, 55, { possession: [46, 57], defense: [20, 55], press: [35, 56] }),
          player("LCB", "Left Center Back", "CB", 19, 42, { possession: [22, 43], defense: [18, 42], press: [22, 43] }),
          player("RCB", "Right Center Back", "CB", 19, 26, { possession: [22, 25], defense: [18, 26], press: [22, 25] }),
          player("RB", "Right Back", "FB", 23, 13, { possession: [46, 11], defense: [20, 13], press: [35, 12] }),
          player("DM", "Defensive Midfielder", "6", 39, 34, { possession: [42, 34], defense: [36, 34], press: [46, 34] }),
          player("LCM", "Left Shuttler", "8", 51, 43, { possession: [56, 43], defense: [45, 43], press: [56, 43] }),
          player("RCM", "Right Shuttler", "8", 51, 25, { possession: [56, 25], defense: [45, 25], press: [56, 25] }),
          player("AM", "Attacking Midfielder", "10", 62, 34, { possession: [70, 34], defense: [55, 34], press: [64, 34] }),
          player("LS", "Left Striker", "9", 78, 41, { possession: [85, 42], defense: [67, 41], press: [79, 41] }),
          player("RS", "Right Striker", "9", 78, 27, { possession: [85, 26], defense: [67, 27], press: [79, 27] }),
        ],
      },
      wideDiamond: {
        label: "Wide diamond",
        title: "4-4-2 Wide Diamond",
        identity: "A looser diamond where shuttlers stretch into half-wide lanes and the 10 connects to both forwards.",
        summary:
          "Best for mixing central combinations with wider outlets while keeping the two-striker threat.",
        players: [
          player("GK", "Goalkeeper", "GK", 8, 34, { possession: [9, 34], defense: [7, 34], press: [9, 34] }),
          player("LB", "Left Back", "FB", 23, 55, { possession: [38, 56], defense: [20, 55], press: [33, 56] }),
          player("LCB", "Left Center Back", "CB", 19, 42, { possession: [21, 43], defense: [18, 42], press: [21, 43] }),
          player("RCB", "Right Center Back", "CB", 19, 26, { possession: [21, 25], defense: [18, 26], press: [21, 25] }),
          player("RB", "Right Back", "FB", 23, 13, { possession: [38, 12], defense: [20, 13], press: [33, 12] }),
          player("DM", "Defensive Midfielder", "6", 39, 34, { possession: [42, 34], defense: [36, 34], press: [46, 34] }),
          player("LM", "Left Shuttler", "8", 54, 51, { possession: [63, 52], defense: [45, 51], press: [58, 51] }),
          player("RM", "Right Shuttler", "8", 54, 17, { possession: [63, 16], defense: [45, 17], press: [58, 17] }),
          player("AM", "Attacking Midfielder", "10", 64, 34, { possession: [72, 34], defense: [56, 34], press: [66, 34] }),
          player("LS", "Left Striker", "9", 79, 42, { possession: [86, 43], defense: [67, 42], press: [80, 42] }),
          player("RS", "Right Striker", "9", 79, 26, { possession: [86, 25], defense: [67, 26], press: [80, 26] }),
        ],
      },
    },
  },
};

const roleLibrary = {
  GK: {
    requirements: "Calm distribution, shot stopping, depth control, and communication.",
    responsibilities: ["Offer a safe backward pass", "Control space behind the line", "Start attacks with the right tempo"],
    skills: ["Handling", "Long pass", "Sweeping", "Scanning"],
    avoid: ["Dropping too deep during build-up", "Forcing central passes when the pivot is marked"],
    metrics: { Range: 78, Voice: 86, Passing: 74, Timing: 82 },
  },
  CB: {
    requirements: "Defend forward, protect depth, pass through pressure, and shift as a unit.",
    responsibilities: ["Hold the defensive line", "Break lines when possible", "Cover the fullback or wingback"],
    skills: ["Aerial duel", "Body shape", "Diagonal passing", "Recovery pace"],
    avoid: ["Following strikers too far", "Leaving the far-side gap open"],
    metrics: { Duel: 84, Pace: 72, Passing: 77, Focus: 88 },
  },
  FB: {
    requirements: "Balance width, overlap timing, recovery speed, and 1v1 defending.",
    responsibilities: ["Support winger", "Stop crosses", "Recover the channel", "Invert when midfield needs help"],
    skills: ["Crossing", "1v1 defending", "Engine", "Underlapping"],
    avoid: ["Going high without cover", "Standing on the same line as the winger"],
    metrics: { Engine: 90, Crossing: 76, Recovery: 84, Duel: 74 },
  },
  WB: {
    requirements: "High stamina, crossing quality, timing to join attacks, and fast recovery runs.",
    responsibilities: ["Provide width alone", "Recover into back five", "Attack the far post", "Press opposition fullback"],
    skills: ["Repeated sprint", "Crossing", "Back-post runs", "Defensive tracking"],
    avoid: ["Arriving too early and being marked", "Failing to recover after a turnover"],
    metrics: { Engine: 94, Crossing: 78, Recovery: 86, Timing: 80 },
  },
  "6": {
    requirements: "Excellent scanning, pressure resistance, positioning, and defensive discipline.",
    responsibilities: ["Screen counterattacks", "Connect both sides", "Receive from center backs", "Set pressing distances"],
    skills: ["Scanning", "First touch", "Tackling", "Tempo control"],
    avoid: ["Hiding behind the striker", "Chasing too wide and opening the center"],
    metrics: { Scan: 92, Touch: 86, Cover: 89, Tempo: 88 },
  },
  "8": {
    requirements: "Box-to-box range, timing, pressing intelligence, and combination play.",
    responsibilities: ["Support attacks between lines", "Press the near midfielder", "Arrive around the box", "Cover wide rotations"],
    skills: ["Third-man runs", "Pressing", "Short passing", "Recovery"],
    avoid: ["Standing flat with the pivot", "Leaving the half-space uncovered"],
    metrics: { Engine: 88, Press: 84, Runs: 82, Passing: 80 },
  },
  "10": {
    requirements: "Creativity, half-turn receiving, final pass, and pressing discipline.",
    responsibilities: ["Find pockets", "Connect midfield to striker", "Press opponent pivot", "Create overloads"],
    skills: ["Vision", "First touch", "Final pass", "Disguise"],
    avoid: ["Drifting away from useful passing lanes", "Pressing alone without cover"],
    metrics: { Vision: 92, Touch: 88, Press: 68, Chance: 86 },
  },
  W: {
    requirements: "1v1 threat, pressing angle, width discipline, and back-post timing.",
    responsibilities: ["Stretch the back line", "Attack fullback 1v1", "Press curved runs", "Recover to midfield line"],
    skills: ["Dribbling", "Crossing", "Sprint", "Finishing"],
    avoid: ["Receiving too close to touchline every time", "Switching off when the far side attacks"],
    metrics: { Speed: 90, Dribble: 86, Press: 76, Finish: 78 },
  },
  "9": {
    requirements: "Link play, penalty-box movement, pressing leadership, and hold-up ability.",
    responsibilities: ["Pin center backs", "Set first pressing angle", "Connect lay-offs", "Attack crosses"],
    skills: ["Finishing", "Hold-up", "Pressing", "Movement"],
    avoid: ["Standing between defenders without checking shoulders", "Pressing straight and opening the pivot"],
    metrics: { Finish: 88, Hold: 78, Press: 82, Runs: 86 },
  },
};

let activeFormation = "4-3-3";
let activeVariation = "default";
let activePhase = "base";
let activeSituation = "middle";
let activeTab = "overview";
let selectedId = "DM";
let isDrawMode = false;
let dragState = null;
let drawState = null;
let drawings = [];
let livePositions = {};
let opponentPositions = {};
let ballPosition = { x: 42, y: 34 };
let ballOwner = { team: "home", id: "DM" };
let passAim = null;
let tacticalShift = { x: 0, y: 0 };
let autoShiftEnabled = true;
let guideLinesEnabled = true;
let compactnessLevel = 0.62;

const pitch = document.querySelector("#pitch");
const formationSelect = document.querySelector("#formationSelect");
const variationSelect = document.querySelector("#variationSelect");
const phaseSelect = document.querySelector("#phaseSelect");
const situationSelect = document.querySelector("#situationSelect");
const playersGroup = document.querySelector("#players");
const zonesGroup = document.querySelector("#zones");
const tacticalLayer = document.querySelector("#tacticalLayer");
const opponentsGroup = document.querySelector("#opponents");
const connectionsGroup = document.querySelector("#connections");
const drawingsGroup = document.querySelector("#drawings");
const passLayer = document.querySelector("#passLayer");
const ballLayer = document.querySelector("#ballLayer");
const panelContent = document.querySelector("#panelContent");
const roleContent = document.querySelector("#roleContent");
const playBtn = document.querySelector("#playBtn");
const resetBtn = document.querySelector("#resetBtn");
const drawBtn = document.querySelector("#drawBtn");
const clearBtn = document.querySelector("#clearBtn");
const autoShiftToggle = document.querySelector("#autoShiftToggle");
const guideLinesToggle = document.querySelector("#guideLinesToggle");
const compactnessRange = document.querySelector("#compactnessRange");

function player(id, name, role, x, y, phases) {
  return { id, name, role, x, y, phases };
}

function getDefaultVariationKey(formationKey) {
  const keys = Object.keys(formations[formationKey].variations || {});
  return keys[0] || "default";
}

function getFormation() {
  const base = formations[activeFormation];
  const variation = base.variations?.[activeVariation];
  if (!variation) return base;
  return {
    ...base,
    ...variation,
    phases: variation.phases || base.phases,
    pros: variation.pros || base.pros,
    cons: variation.cons || base.cons,
    evolution: variation.evolution || base.evolution,
    drills: variation.drills || base.drills,
    variationLabel: variation.label,
  };
}

function getPlayerCircleLabel(item) {
  return item.id.length > 3 ? item.role : item.id;
}

function getCircleFontSize(label) {
  return label.length >= 3 ? 2.12 : 2.22;
}

function setup() {
  renderMowLines();
  Object.keys(formations).forEach((key) => {
    formationSelect.add(new Option(key, key));
  });
  Object.entries(getSituations()).forEach(([key, item]) => {
    situationSelect.add(new Option(item.label, key));
  });
  formationSelect.value = activeFormation;
  updateVariationOptions();
  situationSelect.value = activeSituation;
  updatePhaseOptions();
  resetLivePositions();
  bindEvents();
  render();
}

function bindEvents() {
  formationSelect.addEventListener("change", () => {
    activeFormation = formationSelect.value;
    activeVariation = getDefaultVariationKey(activeFormation);
    activePhase = "base";
    selectedId = getFormation().players[5]?.id ?? getFormation().players[0].id;
    ballOwner = { team: "home", id: selectedId };
    drawings = [];
    updateVariationOptions();
    updatePhaseOptions();
    resetLivePositions();
    render();
  });

  variationSelect.addEventListener("change", () => {
    activeVariation = variationSelect.value;
    activePhase = "base";
    selectedId = getFormation().players[5]?.id ?? getFormation().players[0].id;
    ballOwner = { team: "home", id: selectedId };
    updatePhaseOptions();
    resetLivePositions();
    render();
  });

  phaseSelect.addEventListener("change", () => {
    activePhase = phaseSelect.value;
    applyPhaseToLivePositions();
    render();
  });

  situationSelect.addEventListener("change", () => {
    activeSituation = situationSelect.value;
    resetLivePositions();
    render();
  });

  playBtn.addEventListener("click", playEvolution);
  resetBtn.addEventListener("click", () => {
    resetLivePositions();
    render();
  });
  drawBtn.addEventListener("click", () => {
    isDrawMode = !isDrawMode;
    drawBtn.classList.toggle("active", isDrawMode);
  });
  clearBtn.addEventListener("click", () => {
    drawings = [];
    renderDrawings();
  });
  autoShiftToggle.addEventListener("change", () => {
    autoShiftEnabled = autoShiftToggle.checked;
  });
  guideLinesToggle.addEventListener("change", () => {
    guideLinesEnabled = guideLinesToggle.checked;
    renderTacticalLayer();
    renderConnections();
    renderDrawings();
    renderPassAim();
  });
  compactnessRange.addEventListener("input", () => {
    compactnessLevel = Number(compactnessRange.value) / 100;
    if (autoShiftEnabled) animateAllMarkersToCurrentShape(ballOwner);
  });

  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      activeTab = tab.dataset.tab;
      document.querySelectorAll(".tab").forEach((item) => item.classList.toggle("active", item === tab));
      renderPanel();
    });
  });

  pitch.addEventListener("pointermove", onPointerMove);
  pitch.addEventListener("pointerup", onPointerUp);
  pitch.addEventListener("pointerleave", onPointerUp);
  pitch.addEventListener("pointerdown", onPitchPointerDown);
}

function updatePhaseOptions() {
  phaseSelect.innerHTML = "";
  Object.entries(getFormation().phases).forEach(([value, label]) => {
    phaseSelect.add(new Option(label, value));
  });
  phaseSelect.value = activePhase;
}

function updateVariationOptions() {
  variationSelect.innerHTML = "";
  const variations = formations[activeFormation].variations;
  if (!variations) {
    variationSelect.add(new Option("Standard", "default"));
    activeVariation = "default";
    variationSelect.disabled = true;
    return;
  }
  Object.entries(variations).forEach(([value, item]) => {
    variationSelect.add(new Option(item.label, value));
  });
  variationSelect.disabled = false;
  if (!variations[activeVariation]) activeVariation = getDefaultVariationKey(activeFormation);
  variationSelect.value = activeVariation;
}

function resetLivePositions() {
  livePositions = {};
  opponentPositions = {};
  getFormation().players.forEach((item) => {
    livePositions[item.id] = getPhasePoint(item, activePhase);
  });
  getOpponents().forEach((item) => {
    opponentPositions[item.id] = getOpponentPhasePoint(item, activePhase);
  });
  syncBallToOwner();
}

function applyPhaseToLivePositions() {
  getFormation().players.forEach((item) => {
    livePositions[item.id] = getPhasePoint(item, activePhase);
  });
  getOpponents().forEach((item) => {
    opponentPositions[item.id] = getOpponentPhasePoint(item, activePhase);
  });
  syncBallToOwner();
}

function getPhasePoint(item, phase) {
  const point = phase === "base" ? [item.x, item.y] : item.phases[phase] || [item.x, item.y];
  const shift = getTeamSituationShift(item);
  const ballShift = getBallSideShift(item, "home");
  return applyCompactness({
    x: clamp(point[0] + shift.x + ballShift.x, 4, 96),
    y: clamp(getDisplayY(item, point[1]) + shift.y + ballShift.y, 5, 63),
  }, item, "home");
}

function render() {
  renderTacticalLayer();
  renderOpponents();
  renderPlayers();
  renderZones();
  renderConnections();
  renderDrawings();
  renderPassAim();
  renderBall();
  renderPanel();
  renderRole();
}

function renderPassAim() {
  passLayer.innerHTML = "";
  if (!passAim) return;
  passLayer.appendChild(
    svgEl("line", {
      class: "pass-aim",
      x1: passAim.from.x,
      y1: passAim.from.y,
      x2: passAim.to.x,
      y2: passAim.to.y,
    }),
  );
  passLayer.appendChild(svgEl("circle", { class: "pass-target", cx: passAim.to.x, cy: passAim.to.y, r: 1.4 }));
}

function renderBall() {
  ballLayer.innerHTML = "";
  const ownerClass = ballOwner ? " attached" : "";
  const group = svgEl("g", {
    class: `ball${ownerClass}`,
    transform: `translate(${ballPosition.x} ${ballPosition.y})`,
  });
  group.appendChild(svgEl("circle", { class: "ball-shadow", cx: 0.3, cy: 0.45, r: 1.65 }));
  group.appendChild(svgEl("circle", { class: "ball-disc", r: 1.25 }));
  group.appendChild(svgEl("path", { class: "ball-seam", d: "M -0.75 -0.2 Q 0 -0.85 0.75 -0.2 M -0.7 0.38 Q 0 0.85 0.7 0.38 M 0 -1.1 L 0 1.1" }));
  group.addEventListener("pointerdown", onBallPointerDown);
  ballLayer.appendChild(group);
}

function renderTacticalLayer() {
  tacticalLayer.innerHTML = "";
  if (!guideLinesEnabled) return;
  const selected = getSelectedPlayer();
  if (!selected) return;
  const phaseClass = activePhase === "possession" ? "attack" : activePhase === "defense" ? "defense" : "transition";
  getPhaseActions(selected, activePhase).forEach((action) => {
    tacticalLayer.appendChild(
      svgEl("path", {
        class: `tactical-arrow ${phaseClass}`,
        d: makeCurve(action.from, action.to, action.bend ?? 0),
      }),
    );
  });
}

function renderOpponents() {
  opponentsGroup.innerHTML = "";
  const involvedIds = new Set(getInvolvedOpponents().map((item) => item.id));
  getOpponents().forEach((item) => {
    const position = opponentPositions[item.id] || getOpponentPhasePoint(item, activePhase);
    const group = svgEl("g", {
      class: `opponent${involvedIds.has(item.id) ? " involved" : ""}${ballOwner?.team === "opponent" && ballOwner.id === item.id ? " ball-owner" : ""}`,
      transform: `translate(${position.x} ${position.y})`,
      "data-id": item.id,
    });
    group.appendChild(svgEl("circle", { class: "opponent-disc", r: 2.9 }));
    if (ballOwner?.team === "opponent" && ballOwner.id === item.id) {
      group.appendChild(svgEl("path", { class: "pass-cap", d: "M -2.9 0 A 2.9 2.9 0 0 1 2.9 0 L -2.9 0 Z" }));
    }
    const label = svgEl("text", {
      class: "opponent-label",
      y: 0.05,
      "font-size": getCircleFontSize(item.id),
    });
    label.textContent = item.id;
    group.appendChild(label);
    group.addEventListener("pointerdown", (event) => onOpponentPointerDown(event, item.id));
    group.addEventListener("dblclick", (event) => onMarkerDoubleClick(event, "opponent", item.id));
    opponentsGroup.appendChild(group);
  });
}

function renderMowLines() {
  const group = document.querySelector(".mow-lines");
  group.innerHTML = "";
  for (let i = 0; i < 10; i += 1) {
    const rect = svgEl("rect", { x: i * 10, y: 0, width: 10, height: 68 });
    group.appendChild(rect);
  }
}

function renderPlayers() {
  playersGroup.innerHTML = "";
  getFormation().players.forEach((item) => {
    const position = livePositions[item.id] || { x: item.x, y: item.y };
    const group = svgEl("g", {
      class: `player${item.id === selectedId ? " selected" : ""}${ballOwner?.team === "home" && ballOwner.id === item.id ? " ball-owner" : ""}`,
      transform: `translate(${position.x} ${position.y})`,
      "data-id": item.id,
    });

    group.appendChild(svgEl("circle", { class: "player-disc", r: 2.9 }));
    if (ballOwner?.team === "home" && ballOwner.id === item.id) {
      group.appendChild(svgEl("path", { class: "pass-cap", d: "M -2.9 0 A 2.9 2.9 0 0 1 2.9 0 L -2.9 0 Z" }));
    }
    const circleLabel = getPlayerCircleLabel(item);
    const label = svgEl("text", {
      class: "player-label",
      y: 0.1,
      "font-size": getCircleFontSize(circleLabel),
    });
    label.textContent = circleLabel;
    group.appendChild(label);

    group.addEventListener("pointerdown", (event) => onPlayerPointerDown(event, item.id));
    group.addEventListener("dblclick", (event) => onMarkerDoubleClick(event, "home", item.id));
    playersGroup.appendChild(group);
  });
}

function renderZones() {
  zonesGroup.innerHTML = "";
  const item = getSelectedPlayer();
  if (!item) return;
  const position = livePositions[item.id];
  const width = item.role === "W" || item.role === "WB" || item.role === "FB" ? 20 : 17;
  const height = item.role === "GK" ? 16 : item.role === "CB" ? 20 : 24;
  zonesGroup.appendChild(
    svgEl("rect", {
      class: "zone",
      x: clamp(position.x - width / 2, 3, 97 - width),
      y: clamp(position.y - height / 2, 3, 65 - height),
      width,
      height,
      rx: 1,
    }),
  );
}

function renderConnections() {
  connectionsGroup.innerHTML = "";
  if (!guideLinesEnabled) return;
  const selected = getSelectedPlayer();
  if (!selected) return;
  const source = livePositions[selected.id];
  nearestPlayers(selected.id, 3).forEach((target) => {
    const targetPoint = livePositions[target.id];
    connectionsGroup.appendChild(
      svgEl("line", {
        class: "connection",
        x1: source.x,
        y1: source.y,
        x2: targetPoint.x,
        y2: targetPoint.y,
      }),
    );
  });
  getInvolvedOpponents().forEach((target) => {
    const targetPoint = opponentPositions[target.id];
    connectionsGroup.appendChild(
      svgEl("line", {
        class: "opponent-link",
        x1: source.x,
        y1: source.y,
        x2: targetPoint.x,
        y2: targetPoint.y,
      }),
    );
  });
}

function renderDrawings() {
  drawingsGroup.innerHTML = "";
  if (!guideLinesEnabled) return;
  drawings.forEach((line) => {
    drawingsGroup.appendChild(
      svgEl("line", {
        class: "drawing",
        x1: line.x1,
        y1: line.y1,
        x2: line.x2,
        y2: line.y2,
      }),
    );
  });
  if (drawState?.preview) {
    drawingsGroup.appendChild(svgEl("line", { class: "drawing", ...drawState.preview }));
  }
}

function renderPanel() {
  const formation = getFormation();
  const phaseLabel = formation.phases[activePhase];
  const situation = getSituations()[activeSituation];
  if (activeTab === "overview") {
    panelContent.innerHTML = `
      <section class="panel-section">
        <p class="eyebrow">${phaseLabel} / ${situation.label}</p>
        <h2>${formation.title}</h2>
        <p class="body-copy">${formation.summary}</p>
        <div class="pill-row">${formation.pros.map((item) => `<span class="pill">${item}</span>`).join("")}</div>
      </section>
      <section class="panel-section">
        <h3>Main structure</h3>
        <p class="body-copy">${formation.identity}</p>
      </section>
      <section class="panel-section">
        <h3>Dynamic evolution</h3>
        <p class="body-copy">${formation.evolution}</p>
      </section>
      <section class="panel-section">
        <h3>Current situation</h3>
        <p class="body-copy">${situation.description}</p>
      </section>
    `;
    return;
  }

  if (activeTab === "details") {
    panelContent.innerHTML = `
      <section class="panel-section">
        <p class="eyebrow">Strengths</p>
        <ul class="note-list">${formation.pros.map((item) => `<li>${item}</li>`).join("")}</ul>
      </section>
      <section class="panel-section">
        <p class="eyebrow">Risks</p>
        <ul class="note-list">${formation.cons.map((item) => `<li>${item}</li>`).join("")}</ul>
      </section>
      <section class="panel-section">
        <p class="eyebrow">Coaching cue</p>
        <p class="body-copy">Watch the distances between nearest players. If the selected player moves, the highlighted passing and cover relationships update with the shape.</p>
      </section>
    `;
    return;
  }

  panelContent.innerHTML = `
    <section class="panel-section">
      <p class="eyebrow">Drill menu</p>
      <h2>${formation.title}</h2>
      <ul class="note-list">${formation.drills.map((item) => `<li>${item}</li>`).join("")}</ul>
    </section>
    <section class="panel-section">
      <h3>Coach task</h3>
      <p class="body-copy">Pick one unit, drag a player out of shape, then use the reset and phase controls to compare the mistake against the intended team structure.</p>
    </section>
  `;
}

function renderRole() {
  const item = getSelectedPlayer();
  if (!item) {
    roleContent.innerHTML = `<div class="role-empty">Select a player to inspect the role.</div>`;
    return;
  }

  const role = roleLibrary[item.role];
  const involved = getInvolvedOpponents();
  const moves = getMoveOptions(item);
  const metrics = Object.entries(role.metrics)
    .map(([label, value]) => `<div class="metric"><strong>${value}</strong><span>${label}</span></div>`)
    .join("");

  roleContent.innerHTML = `
    <article class="role-card">
      <div class="role-title">
        <div>
          <p class="eyebrow">${item.id}</p>
          <h2>${item.name}</h2>
        </div>
        <span class="role-badge">${item.role}</span>
      </div>
      <section>
        <h3>Requirement</h3>
        <p class="body-copy">${role.requirements}</p>
      </section>
      <section>
        <h3>Key responsibilities</h3>
        <ul class="note-list">${role.responsibilities.map((entry) => `<li>${entry}</li>`).join("")}</ul>
      </section>
      <section>
        <h3>Opponents involved</h3>
        <ul class="note-list">${involved.map((entry) => `<li>${entry.name}: ${entry.reason}</li>`).join("")}</ul>
      </section>
      <section>
        <h3>Passing and moving options</h3>
        <div class="move-grid">${moves.map((entry) => `<button class="move-option" type="button" data-move="${entry.key}">${entry.label}</button>`).join("")}</div>
      </section>
      <section>
        <h3>Key skills</h3>
        <div class="pill-row">${role.skills.map((entry) => `<span class="pill">${entry}</span>`).join("")}</div>
      </section>
      <section>
        <h3>Mistakes to avoid</h3>
        <ul class="note-list">${role.avoid.map((entry) => `<li>${entry}</li>`).join("")}</ul>
      </section>
      <section>
        <h3>Profile</h3>
        <div class="metric-grid">${metrics}</div>
      </section>
    </article>
  `;
  roleContent.querySelectorAll("[data-move]").forEach((button) => {
    button.addEventListener("click", () => applyMoveOption(button.dataset.move));
  });
}

function onPlayerPointerDown(event, id) {
  event.stopPropagation();
  selectedId = id;
  const point = getSvgPoint(event);
  const start = livePositions[id];
  if (!isDrawMode && shouldStartPassFromCap("home", id, point, start)) {
    startPassAim("home", id, point);
    render();
    return;
  }
  render();
  if (isDrawMode) return;
  dragState = {
    team: "home",
    id,
    startX: start.x,
    startY: start.y,
    offsetX: point.x - start.x,
    offsetY: point.y - start.y,
  };
  event.currentTarget.classList.add("dragging");
  pitch.setPointerCapture(event.pointerId);
}

function onOpponentPointerDown(event, id) {
  event.stopPropagation();
  if (isDrawMode) return;
  const point = getSvgPoint(event);
  const start = opponentPositions[id];
  if (shouldStartPassFromCap("opponent", id, point, start)) {
    startPassAim("opponent", id, point);
    render();
    return;
  }
  dragState = {
    team: "opponent",
    id,
    startX: start.x,
    startY: start.y,
    offsetX: point.x - start.x,
    offsetY: point.y - start.y,
  };
  event.currentTarget.classList.add("dragging");
  pitch.setPointerCapture(event.pointerId);
}

function onBallPointerDown(event) {
  event.stopPropagation();
  if (isDrawMode) return;
  const point = getSvgPoint(event);
  dragState = {
    team: "ball",
    id: "ball",
    offsetX: point.x - ballPosition.x,
    offsetY: point.y - ballPosition.y,
  };
  ballOwner = null;
  event.currentTarget.classList.add("dragging");
  pitch.setPointerCapture(event.pointerId);
}

function onMarkerDoubleClick(event, team, id) {
  event.stopPropagation();
  startPassAim(team, id, getSvgPoint(event));
}

function shouldStartPassFromCap(team, id, point, marker) {
  if (!ballOwner || ballOwner.team !== team || ballOwner.id !== id || !marker) return false;
  const localY = point.y - marker.y;
  const localX = point.x - marker.x;
  return localY <= 0 && Math.hypot(localX, localY) <= 3.15;
}

function startPassAim(team, id, point) {
  if (!ballOwner || ballOwner.team !== team || ballOwner.id !== id) return;
  const marker = team === "opponent" ? opponentPositions[id] : livePositions[id];
  if (!marker) return;
  passAim = {
    from: { ...marker },
    to: point,
    owner: { team, id },
  };
  renderPassAim();
}

function finishPass(target) {
  const start = { ...ballPosition };
  const end = { x: clamp(target.x, 4, 96), y: clamp(target.y, 5, 63) };
  const blocker = findPassBlocker(start, end, passAim?.owner?.team);
  const finalTarget = blocker ? getBallDockPoint(blocker) : end;
  passAim = null;
  renderPassAim();
  animateBall(start, finalTarget, () => {
    ballPosition = finalTarget;
    if (blocker) {
      ballOwner = { team: blocker.team, id: blocker.id };
      syncBallToOwner();
    } else {
      snapBallToNearest(9.5);
    }
    applyBallSideShift();
  });
}

function findPassBlocker(start, end, passerTeam) {
  if (!passerTeam) return null;
  const defendingTeam = passerTeam === "home" ? "opponent" : "home";
  const candidates = defendingTeam === "home"
    ? getFormation().players.map((item) => ({ team: "home", id: item.id, ...livePositions[item.id] }))
    : getOpponents().map((item) => ({ team: "opponent", id: item.id, ...opponentPositions[item.id] }));
  return candidates
    .map((candidate) => ({
      ...candidate,
      lane: getPointToSegmentDistance(candidate, start, end),
    }))
    .filter((candidate) => candidate.lane.t > 0.08 && candidate.lane.t < 0.92 && candidate.lane.distance < 3.2)
    .sort((a, b) => a.lane.t - b.lane.t)[0] || null;
}

function getPointToSegmentDistance(point, start, end) {
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const lengthSq = dx * dx + dy * dy || 1;
  const t = clamp(((point.x - start.x) * dx + (point.y - start.y) * dy) / lengthSq, 0, 1);
  const projection = {
    x: start.x + dx * t,
    y: start.y + dy * t,
  };
  return {
    t,
    distance: Math.hypot(point.x - projection.x, point.y - projection.y),
  };
}

function animateBall(start, end, done) {
  ballOwner = null;
  const started = performance.now();
  const duration = Math.min(850, Math.max(320, Math.hypot(end.x - start.x, end.y - start.y) * 16));
  function frame(now) {
    const t = Math.min((now - started) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    ballPosition = {
      x: start.x + (end.x - start.x) * eased,
      y: start.y + (end.y - start.y) * eased,
    };
    renderBall();
    if (t < 1) {
      requestAnimationFrame(frame);
    } else {
      done?.();
    }
  }
  requestAnimationFrame(frame);
}

function onPitchPointerDown(event) {
  if (passAim) {
    finishPass(getSvgPoint(event));
    return;
  }
  if (!isDrawMode) return;
  const point = getSvgPoint(event);
  drawState = {
    start: point,
    preview: { x1: point.x, y1: point.y, x2: point.x, y2: point.y },
  };
  pitch.setPointerCapture(event.pointerId);
}

function onPointerMove(event) {
  const point = getSvgPoint(event);
  if (passAim) {
    passAim.to = point;
    renderPassAim();
  }
  if (dragState) {
    if (dragState.team === "ball") {
      ballPosition = {
        x: clamp(point.x - dragState.offsetX, 4, 96),
        y: clamp(point.y - dragState.offsetY, 5, 63),
      };
      previewBallMagnet();
    } else {
      const positions = dragState.team === "opponent" ? opponentPositions : livePositions;
      positions[dragState.id] = {
        x: clamp(point.x - dragState.offsetX, 4, 96),
        y: clamp(point.y - dragState.offsetY, 5, 63),
      };
      if (ballOwner?.team === dragState.team && ballOwner.id === dragState.id) syncBallToOwner();
    }
    renderTacticalLayer();
    renderOpponents();
    renderPlayers();
    renderZones();
    renderConnections();
    renderBall();
  }

  if (drawState) {
    drawState.preview = {
      x1: drawState.start.x,
      y1: drawState.start.y,
      x2: clamp(point.x, 1, 99),
      y2: clamp(point.y, 1, 67),
    };
    renderDrawings();
  }
}

function onPointerUp(event) {
  if (dragState) {
    if (dragState.team === "ball") {
      snapBallToNearest();
      if (autoShiftEnabled) applyBallSideShift();
    } else if (autoShiftEnabled) {
      applyMarkerShift(dragState);
    }
    dragState = null;
    renderBall();
    renderConnections();
    pitch.releasePointerCapture?.(event.pointerId);
  }
  if (drawState) {
    const line = drawState.preview;
    const length = Math.hypot(line.x2 - line.x1, line.y2 - line.y1);
    if (length > 2) drawings.push(line);
    drawState = null;
    renderDrawings();
    pitch.releasePointerCapture?.(event.pointerId);
  }
}

function getAllMarkers() {
  const home = getFormation().players.map((item) => ({
    team: "home",
    id: item.id,
    label: item.id,
    ...livePositions[item.id],
  }));
  const away = getOpponents().map((item) => ({
    team: "opponent",
    id: item.id,
    label: item.id,
    ...opponentPositions[item.id],
  }));
  return [...home, ...away].filter((item) => Number.isFinite(item.x) && Number.isFinite(item.y));
}

function findNearestToBall() {
  return getAllMarkers()
    .map((item) => ({ ...item, distance: Math.hypot(item.x - ballPosition.x, item.y - ballPosition.y) }))
    .sort((a, b) => a.distance - b.distance)[0];
}

function previewBallMagnet() {
  const nearest = findNearestToBall();
  if (!nearest || nearest.distance > 5.2) return;
  ballPosition = getBallDockPoint(nearest);
}

function snapBallToNearest(radius = 7.5) {
  const nearest = findNearestToBall();
  if (!nearest || nearest.distance > radius) {
    ballOwner = null;
    return;
  }
  ballOwner = { team: nearest.team, id: nearest.id };
  ballPosition = getBallDockPoint(nearest);
}

function syncBallToOwner() {
  if (!ballOwner) return;
  const positions = ballOwner.team === "opponent" ? opponentPositions : livePositions;
  const point = positions[ballOwner.id];
  if (!point) return;
  ballPosition = getBallDockPoint({ ...point, team: ballOwner.team, id: ballOwner.id });
}

function getBallDockPoint(marker) {
  return {
    x: clamp(marker.x + 2.6, 4, 96),
    y: clamp(marker.y + 1.6, 5, 63),
  };
}

function applyBallSideShift() {
  if (!autoShiftEnabled) return;
  tacticalShift = {
    x: clamp((ballPosition.x - 50) / 12, -4, 4),
    y: clamp((ballPosition.y - 34) / 5, -6, 6),
  };
  animateAllMarkersToCurrentShape();
}

function applyMarkerShift(state) {
  const positions = state.team === "opponent" ? opponentPositions : livePositions;
  const marker = positions[state.id];
  if (!marker) return;
  if (ballOwner?.team === state.team && ballOwner.id === state.id) {
    syncBallToOwner();
    applyBallCarrierInfluence(state);
    return;
  }
  applyOffBallLocalInfluence(state);
}

function applyBallCarrierInfluence(state) {
  const positions = state.team === "opponent" ? opponentPositions : livePositions;
  const marker = positions[state.id];
  if (!marker) return;
  tacticalShift = {
    x: clamp((marker.x - 50) / 10, -5.5, 5.5),
    y: clamp((marker.y - 34) / 4.5, -7.5, 7.5),
  };
  animateAllMarkersToCurrentShape(state);
}

function applyOffBallLocalInfluence(state) {
  const positions = state.team === "opponent" ? opponentPositions : livePositions;
  const marker = positions[state.id];
  if (!marker) return;
  const dx = marker.x - state.startX;
  const dy = marker.y - state.startY;
  const homeTargets = {};
  const opponentTargets = {};
  const radius = 18;

  getFormation().players.forEach((item) => {
    const point = livePositions[item.id];
    if (!point) return;
    homeTargets[item.id] = getLocalInfluenceTarget(point, marker, dx, dy, radius, state.team === "home" && item.id === state.id);
  });

  getOpponents().forEach((item) => {
    const point = opponentPositions[item.id];
    if (!point) return;
    opponentTargets[item.id] = getLocalInfluenceTarget(point, marker, dx, dy, radius, state.team === "opponent" && item.id === state.id);
  });

  applyCoverageRotations(state, homeTargets, opponentTargets, dx, dy, marker);
  animateMarkersToTargets(homeTargets, opponentTargets);
}

function applyCoverageRotations(state, homeTargets, opponentTargets, dx, dy, marker) {
  const moved = getMarkerItem(state.team, state.id);
  if (!moved) return;
  const role = normalizeTacticalRole(moved, state.team);
  const move = classifyMovement(state, marker, dx, dy);
  const ownTargets = state.team === "home" ? homeTargets : opponentTargets;
  const otherTargets = state.team === "home" ? opponentTargets : homeTargets;
  const ownItems = getTeamItems(state.team);
  const otherItems = getTeamItems(state.team === "home" ? "opponent" : "home");
  const direction = state.team === "home" ? 1 : -1;
  const sideSign = marker.y < 34 ? -1 : marker.y > 34 ? 1 : Math.sign(dy || ballPosition.y - 34 || 1);

  if (role === "fullback" && move.advanced) {
    nudge(findNearestRole(ownItems, ownTargets, marker, ["centerBack"]), ownTargets, { x: -direction * 1.6, y: sideSign * 3.2 });
    nudge(findNearestRole(ownItems, ownTargets, marker, ["pivot"]), ownTargets, { x: -direction * 2.6, y: sideSign * 1.8 });
    nudge(findNearestRole(ownItems, ownTargets, marker, ["eight"]), ownTargets, { x: -direction * 1.8, y: sideSign * 1.2 });
    nudge(findFarRole(ownItems, ownTargets, marker, ["fullback", "centerBack"]), ownTargets, { x: -direction * 0.8, y: -sideSign * 2.0 });
  }

  if (role === "centerBack" && (move.advanced || move.wide)) {
    nudge(findNearestRole(ownItems, ownTargets, marker, ["centerBack"], state.id), ownTargets, { x: -direction * 2.0, y: -sideSign * 1.4 });
    nudge(findNearestRole(ownItems, ownTargets, marker, ["pivot"]), ownTargets, { x: -direction * 3.0, y: sideSign * 0.8 });
    nudge(findNearestRole(ownItems, ownTargets, marker, ["fullback"]), ownTargets, { x: -direction * 1.2, y: sideSign * 1.6 });
  }

  if (role === "pivot" && move.wide) {
    nudge(findNearestRole(ownItems, ownTargets, { ...marker, y: 34 }, ["eight"]), ownTargets, { x: -direction * 1.4, y: -sideSign * 2.8 });
    nudge(findNearestRole(ownItems, ownTargets, marker, ["centerBack"]), ownTargets, { x: -direction * 1.8, y: sideSign * 1.2 });
    nudge(findFarRole(ownItems, ownTargets, marker, ["eight"]), ownTargets, { x: -direction * 0.8, y: -sideSign * 1.8 });
  }

  if (role === "eight" && move.advanced) {
    nudge(findNearestRole(ownItems, ownTargets, marker, ["pivot"]), ownTargets, { x: -direction * 1.8, y: -sideSign * 0.8 });
    nudge(findFarRole(ownItems, ownTargets, marker, ["eight"]), ownTargets, { x: -direction * 1.2, y: -sideSign * 1.4 });
    nudge(findNearestRole(ownItems, ownTargets, marker, ["fullback", "centerBack"]), ownTargets, { x: -direction * 0.8, y: sideSign * 1.0 });
  }

  if (role === "winger") {
    if (move.inside) {
      nudge(findNearestRole(ownItems, ownTargets, marker, ["fullback"]), ownTargets, { x: direction * 2.8, y: sideSign * 3.2 });
      nudge(findNearestRole(ownItems, ownTargets, marker, ["striker"]), ownTargets, { x: direction * 1.6, y: -sideSign * 0.8 });
    } else if (move.wide) {
      nudge(findNearestRole(ownItems, ownTargets, marker, ["fullback"]), ownTargets, { x: -direction * 0.8, y: -sideSign * 1.8 });
      nudge(findNearestRole(ownItems, ownTargets, marker, ["eight"]), ownTargets, { x: direction * 1.0, y: sideSign * 1.6 });
    }
  }

  if (role === "striker" && move.dropped) {
    getItemsByRoles(ownItems, ["winger"]).forEach((item) => nudge(item, ownTargets, { x: direction * 2.8, y: itemSide(item, state.team) * 0.8 }));
    nudge(findNearestRole(ownItems, ownTargets, marker, ["ten", "eight"]), ownTargets, { x: direction * 2.0, y: sideSign * 0.8 });
  }

  if (role === "keeper" && move.advanced) {
    getItemsByRoles(ownItems, ["centerBack"]).forEach((item) => nudge(item, ownTargets, { x: direction * 1.0, y: itemSide(item, state.team) * 2.0 }));
    nudge(findNearestRole(ownItems, ownTargets, marker, ["pivot"]), ownTargets, { x: -direction * 1.4, y: 0 });
  }

  getNearestOpponents(otherItems, otherTargets, marker, 3).forEach((item, index) => {
    const target = otherTargets[item.id];
    if (!target) return;
    const pressure = 1 - index * 0.22;
    nudge(item, otherTargets, {
      x: -direction * 1.8 * pressure,
      y: (marker.y - target.y) * 0.18 * pressure,
    });
  });
}

function classifyMovement(state, marker, dx, dy) {
  const direction = state.team === "home" ? 1 : -1;
  const startSide = state.startY < 34 ? -1 : state.startY > 34 ? 1 : 0;
  const endSide = marker.y < 34 ? -1 : marker.y > 34 ? 1 : 0;
  return {
    advanced: dx * direction > 5,
    dropped: dx * direction < -5,
    wide: Math.abs(marker.y - 34) > Math.abs(state.startY - 34) + 3 || Math.abs(dy) > 5 && Math.sign(dy) === endSide,
    inside: Math.abs(marker.y - 34) < Math.abs(state.startY - 34) - 3 || startSide !== 0 && Math.sign(dy) === -startSide,
  };
}

function getTeamItems(team) {
  return team === "home" ? getFormation().players : getOpponents();
}

function getMarkerItem(team, id) {
  return getTeamItems(team).find((item) => item.id === id);
}

function getItemPoint(item, targets, team) {
  return targets[item.id] || (team === "home" ? livePositions[item.id] : opponentPositions[item.id]);
}

function getItemsByRoles(items, roles) {
  return items.filter((item) => roles.includes(normalizeTacticalRole(item, item.id.match(/^\d/) ? "opponent" : "home")));
}

function findNearestRole(items, targets, point, roles, excludeId = null) {
  return items
    .filter((item) => item.id !== excludeId && roles.includes(normalizeTacticalRole(item, item.id.match(/^\d/) ? "opponent" : "home")))
    .map((item) => ({ item, point: targets[item.id] }))
    .filter((entry) => entry.point)
    .sort((a, b) => Math.hypot(a.point.x - point.x, a.point.y - point.y) - Math.hypot(b.point.x - point.x, b.point.y - point.y))[0]?.item;
}

function findFarRole(items, targets, point, roles) {
  return items
    .filter((item) => roles.includes(normalizeTacticalRole(item, item.id.match(/^\d/) ? "opponent" : "home")))
    .map((item) => ({ item, point: targets[item.id] }))
    .filter((entry) => entry.point)
    .sort((a, b) => Math.hypot(b.point.x - point.x, b.point.y - point.y) - Math.hypot(a.point.x - point.x, a.point.y - point.y))[0]?.item;
}

function getNearestOpponents(items, targets, point, count) {
  return items
    .map((item) => ({ item, point: targets[item.id] }))
    .filter((entry) => entry.point)
    .sort((a, b) => Math.hypot(a.point.x - point.x, a.point.y - point.y) - Math.hypot(b.point.x - point.x, b.point.y - point.y))
    .slice(0, count)
    .map((entry) => entry.item);
}

function itemSide(item, team) {
  const point = team === "home" ? livePositions[item.id] : opponentPositions[item.id];
  const y = point?.y ?? getDisplayY(item, item.y);
  return y < 34 ? -1 : y > 34 ? 1 : 0;
}

function nudge(item, targets, delta) {
  if (!item || !targets[item.id]) return;
  targets[item.id] = {
    x: clamp(targets[item.id].x + delta.x, 4, 96),
    y: clamp(targets[item.id].y + delta.y, 5, 63),
  };
}

function getLocalInfluenceTarget(point, marker, dx, dy, radius, isAnchor) {
  if (isAnchor) return { ...point };
  const distance = Math.hypot(point.x - marker.x, point.y - marker.y);
  if (distance > radius) return { ...point };
  const weight = Math.pow(1 - distance / radius, 1.8);
  const towardMarker = {
    x: (marker.x - point.x) * 0.08 * weight,
    y: (marker.y - point.y) * 0.08 * weight,
  };
  return {
    x: clamp(point.x + dx * weight * 0.42 + towardMarker.x, 4, 96),
    y: clamp(point.y + dy * weight * 0.42 + towardMarker.y, 5, 63),
  };
}

function animateAllMarkersToCurrentShape(anchor = null) {
  const starts = {};
  const ends = {};
  const opponentStarts = {};
  const opponentEnds = {};
  getFormation().players.forEach((item) => {
    starts[item.id] = { ...livePositions[item.id] };
    ends[item.id] = getPhasePoint(item, activePhase);
  });
  getOpponents().forEach((item) => {
    opponentStarts[item.id] = { ...opponentPositions[item.id] };
    opponentEnds[item.id] = getOpponentPhasePoint(item, activePhase);
  });
  if (anchor?.team === "home") ends[anchor.id] = { ...livePositions[anchor.id] };
  if (anchor?.team === "opponent") opponentEnds[anchor.id] = { ...opponentPositions[anchor.id] };
  animateMarkersToTargets(ends, opponentEnds, starts, opponentStarts);
}

function animateMarkersToTargets(homeTargets, opponentTargets, homeStarts = null, opponentStarts = null) {
  const starts = homeStarts || {};
  const opponentStartsResolved = opponentStarts || {};
  getFormation().players.forEach((item) => {
    if (!starts[item.id]) starts[item.id] = { ...livePositions[item.id] };
    if (!homeTargets[item.id]) homeTargets[item.id] = { ...livePositions[item.id] };
  });
  getOpponents().forEach((item) => {
    if (!opponentStartsResolved[item.id]) opponentStartsResolved[item.id] = { ...opponentPositions[item.id] };
    if (!opponentTargets[item.id]) opponentTargets[item.id] = { ...opponentPositions[item.id] };
  });
  const started = performance.now();
  const duration = 520;
  function frame(now) {
    const t = Math.min((now - started) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    Object.keys(starts).forEach((id) => {
      livePositions[id] = {
        x: starts[id].x + (homeTargets[id].x - starts[id].x) * eased,
        y: starts[id].y + (homeTargets[id].y - starts[id].y) * eased,
      };
    });
    Object.keys(opponentStartsResolved).forEach((id) => {
      opponentPositions[id] = {
        x: opponentStartsResolved[id].x + (opponentTargets[id].x - opponentStartsResolved[id].x) * eased,
        y: opponentStartsResolved[id].y + (opponentTargets[id].y - opponentStartsResolved[id].y) * eased,
      };
    });
    syncBallToOwner();
    renderTacticalLayer();
    renderOpponents();
    renderPlayers();
    renderZones();
    renderConnections();
    renderBall();
    if (t < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

function playEvolution() {
  const sequence = ["base", "possession", "defense", "press"];
  let index = 0;
  playBtn.disabled = true;
  const step = () => {
    activePhase = sequence[index % sequence.length];
    phaseSelect.value = activePhase;
    animateToPhase(activePhase, () => {
      renderPanel();
      index += 1;
      if (index < sequence.length) {
        window.setTimeout(step, 520);
      } else {
        playBtn.disabled = false;
      }
    });
  };
  step();
}

function animateToPhase(phase, done) {
  const starts = {};
  const ends = {};
  const opponentStarts = {};
  const opponentEnds = {};
  getFormation().players.forEach((item) => {
    starts[item.id] = { ...livePositions[item.id] };
    ends[item.id] = getPhasePoint(item, phase);
  });
  getOpponents().forEach((item) => {
    opponentStarts[item.id] = { ...opponentPositions[item.id] };
    opponentEnds[item.id] = getOpponentPhasePoint(item, phase);
  });
  const duration = 620;
  const started = performance.now();

  function frame(now) {
    const t = Math.min((now - started) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    Object.keys(starts).forEach((id) => {
      livePositions[id] = {
        x: starts[id].x + (ends[id].x - starts[id].x) * eased,
        y: starts[id].y + (ends[id].y - starts[id].y) * eased,
      };
    });
    Object.keys(opponentStarts).forEach((id) => {
      opponentPositions[id] = {
        x: opponentStarts[id].x + (opponentEnds[id].x - opponentStarts[id].x) * eased,
        y: opponentStarts[id].y + (opponentEnds[id].y - opponentStarts[id].y) * eased,
      };
    });
    syncBallToOwner();
    renderTacticalLayer();
    renderOpponents();
    renderPlayers();
    renderZones();
    renderConnections();
    renderBall();
    if (t < 1) {
      requestAnimationFrame(frame);
    } else {
      done?.();
    }
  }

  requestAnimationFrame(frame);
}

function getOpponents() {
  return [
    opponent("1", "Goalkeeper", "GK", 94, 34, {
      possession: [93, 34],
      defense: [90, 34],
      press: [94, 34],
    }),
    opponent("2", "Right Back", "RB", 77, 13, {
      possession: [82, 14],
      defense: [61, 13],
      press: [72, 12],
    }),
    opponent("3", "Left Back", "LB", 77, 55, {
      possession: [82, 54],
      defense: [61, 55],
      press: [72, 56],
    }),
    opponent("4", "Center Back", "LCB", 83, 42, {
      possession: [87, 42],
      defense: [69, 42],
      press: [80, 42],
    }),
    opponent("5", "Center Back", "RCB", 83, 26, {
      possession: [87, 26],
      defense: [69, 26],
      press: [80, 26],
    }),
    opponent("6", "Holding Mid", "DM", 66, 34, {
      possession: [70, 34],
      defense: [55, 34],
      press: [61, 34],
    }),
    opponent("7", "Right Winger", "RW", 63, 12, {
      possession: [76, 11],
      defense: [48, 15],
      press: [61, 13],
    }),
    opponent("8", "Central Mid", "CM", 61, 43, {
      possession: [66, 44],
      defense: [53, 43],
      press: [58, 42],
    }),
    opponent("9", "Striker", "ST", 38, 34, {
      possession: [31, 34],
      defense: [73, 34],
      press: [29, 34],
    }),
    opponent("10", "Attacking Mid", "AM", 51, 33, {
      possession: [45, 34],
      defense: [63, 34],
      press: [44, 34],
    }),
    opponent("11", "Left Winger", "LW", 63, 56, {
      possession: [76, 57],
      defense: [48, 53],
      press: [61, 55],
    }),
  ];
}

function opponent(id, name, role, x, y, phases) {
  return { id, name, role, x, y, phases };
}

function getOpponentPhasePoint(item, phase) {
  const point = phase === "base" ? [item.x, item.y] : item.phases[phase] || [item.x, item.y];
  const shift = getOpponentSituationShift(item);
  const ballShift = getBallSideShift(item, "opponent");
  return applyCompactness({
    x: clamp(point[0] + shift.x + ballShift.x, 4, 96),
    y: clamp(getDisplayY(item, point[1]) + shift.y + ballShift.y, 5, 63),
  }, item, "opponent");
}

function getBallSideShift(item, team) {
  const baseY = getDisplayY(item, item.y);
  const sidePull = clamp((ballPosition.y - 34) / 34, -1, 1);
  const depthPull = clamp((ballPosition.x - 50) / 50, -1, 1);
  const profile = getBehaviorProfile(item, team);
  const inPossession = getPossessionTeam() === team;
  const defending = getPossessionTeam() && getPossessionTeam() !== team;
  const nearSide = Math.abs(ballPosition.y - baseY) < 13 || Math.sign(ballPosition.y - 34) === Math.sign(baseY - 34);
  const aheadOfBall = team === "home" ? item.x > ballPosition.x : item.x < ballPosition.x;
  const ballThird = ballPosition.x < 34 ? "defensive" : ballPosition.x > 66 ? "final" : "middle";

  let x = tacticalShift.x * profile.coachFreedom;
  let y = tacticalShift.y * profile.coachFreedom;

  y += sidePull * profile.slide;
  y += nearSide ? sidePull * profile.nearSupport : -sidePull * profile.farTuck;

  if (inPossession) {
    x += team === "home" ? profile.attackDepth * depthPull : -profile.attackDepth * depthPull;
    if (nearSide) x += team === "home" ? profile.nearForward : -profile.nearForward;
    if (!nearSide) x += team === "home" ? -profile.restDefense : profile.restDefense;
    if (profile.role === "pivot") x += team === "home" ? -Math.max(0, depthPull) * 3 : Math.max(0, depthPull) * 3;
    if (profile.role === "striker" && ballThird !== "defensive") x += team === "home" ? 3.5 : -3.5;
  } else if (defending) {
    x += team === "home" ? -profile.defensiveDrop * Math.max(depthPull, -0.2) : profile.defensiveDrop * Math.min(depthPull, 0.2);
    if (nearSide) x += team === "home" ? profile.pressStep : -profile.pressStep;
    if (!nearSide) y += sidePull * profile.compactness;
    if (aheadOfBall && profile.role !== "striker") x += team === "home" ? -2.2 : 2.2;
  } else {
    x += depthPull * (team === "home" ? profile.balanceDepth : -profile.balanceDepth);
  }

  const nearestOpponent = getNearestOpponentDistance(item, team);
  if (nearestOpponent < 7) {
    x += team === "home" ? -profile.pressResistance : profile.pressResistance;
    y += sidePull * profile.escapeLane;
  }

  return {
    x: clamp(x, -11, 11),
    y: clamp(y, -13, 13),
  };
}

function applyCompactness(point, item, team) {
  const profile = getBehaviorProfile(item, team);
  const role = profile.role;
  const ball = ballPosition;
  const inPossession = getPossessionTeam() === team;
  const defending = getPossessionTeam() && getPossessionTeam() !== team;
  const strength = compactnessLevel;
  const baseY = getDisplayY(item, item.y);
  const nearSide = Math.abs(ball.y - baseY) < 16 || Math.sign(ball.y - 34) === Math.sign(baseY - 34);

  const desired = getSupportDistance(role, inPossession, defending);
  const dx = point.x - ball.x;
  const dy = point.y - ball.y;
  const distance = Math.max(0.01, Math.hypot(dx, dy));
  const maxDistance = desired.max + (nearSide ? 0 : desired.farBonus);
  const minDistance = desired.min;
  let targetDistance = distance;
  if (distance > maxDistance) targetDistance = distance - (distance - maxDistance) * strength * desired.pull;
  if (distance < minDistance) targetDistance = distance + (minDistance - distance) * strength * 0.45;

  let x = ball.x + (dx / distance) * targetDistance;
  let y = ball.y + (dy / distance) * targetDistance;

  const teamCenterY = ball.y * 0.58 + 34 * 0.42;
  const lineCompactness = defending ? 0.42 : 0.24;
  y += (teamCenterY - y) * strength * lineCompactness * profile.coachFreedom;

  if (!nearSide) {
    y += (34 - y) * strength * 0.32;
  }

  return {
    x: clamp(x, 4, 96),
    y: clamp(y, 5, 63),
  };
}

function getSupportDistance(role, inPossession, defending) {
  const table = {
    keeper: { min: 20, max: 47, farBonus: 10, pull: 0.24 },
    centerBack: { min: 12, max: defending ? 28 : 36, farBonus: 7, pull: 0.45 },
    fullback: { min: 9, max: defending ? 24 : 31, farBonus: 5, pull: 0.62 },
    pivot: { min: 7, max: 18, farBonus: 3, pull: 0.82 },
    eight: { min: 7, max: 20, farBonus: 4, pull: 0.78 },
    winger: { min: 10, max: inPossession ? 29 : 23, farBonus: 6, pull: 0.58 },
    ten: { min: 7, max: 19, farBonus: 3, pull: 0.78 },
    striker: { min: 11, max: inPossession ? 31 : 24, farBonus: 6, pull: 0.54 },
  };
  return table[role] || table.eight;
}

function getPossessionTeam() {
  return ballOwner?.team || null;
}

function getBehaviorProfile(item, team) {
  const role = normalizeTacticalRole(item, team);
  const profiles = {
    keeper: { role: "keeper", slide: 1.5, nearSupport: 0.4, farTuck: 0.4, attackDepth: 1.2, nearForward: 0.2, restDefense: 0.3, defensiveDrop: 1.4, pressStep: 0.1, compactness: 0.4, balanceDepth: 0.8, pressResistance: 0.3, escapeLane: 0.2, coachFreedom: 0.25 },
    centerBack: { role: "centerBack", slide: 3.2, nearSupport: 0.9, farTuck: 1.6, attackDepth: 1.4, nearForward: 0.5, restDefense: 2.4, defensiveDrop: 3.8, pressStep: 0.7, compactness: 1.8, balanceDepth: 1.2, pressResistance: 0.8, escapeLane: 0.4, coachFreedom: 0.45 },
    fullback: { role: "fullback", slide: 4.6, nearSupport: 2.4, farTuck: 2.5, attackDepth: 4.7, nearForward: 2.6, restDefense: 2.8, defensiveDrop: 3.2, pressStep: 2.1, compactness: 2.8, balanceDepth: 2.1, pressResistance: 1.1, escapeLane: 1.0, coachFreedom: 0.7 },
    pivot: { role: "pivot", slide: 4.0, nearSupport: 1.6, farTuck: 1.3, attackDepth: 1.8, nearForward: 0.2, restDefense: 3.3, defensiveDrop: 2.2, pressStep: 0.8, compactness: 2.2, balanceDepth: 1.3, pressResistance: 1.9, escapeLane: 1.4, coachFreedom: 0.55 },
    eight: { role: "eight", slide: 5.1, nearSupport: 2.2, farTuck: 1.9, attackDepth: 3.7, nearForward: 1.9, restDefense: 1.8, defensiveDrop: 2.5, pressStep: 2.0, compactness: 2.0, balanceDepth: 2.0, pressResistance: 1.2, escapeLane: 1.3, coachFreedom: 0.75 },
    winger: { role: "winger", slide: 6.0, nearSupport: 3.0, farTuck: 2.6, attackDepth: 5.8, nearForward: 3.1, restDefense: 0.8, defensiveDrop: 3.0, pressStep: 2.8, compactness: 2.6, balanceDepth: 2.7, pressResistance: 1.0, escapeLane: 1.6, coachFreedom: 0.9 },
    ten: { role: "ten", slide: 4.6, nearSupport: 1.8, farTuck: 1.2, attackDepth: 3.3, nearForward: 1.3, restDefense: 1.1, defensiveDrop: 2.4, pressStep: 1.9, compactness: 1.5, balanceDepth: 1.8, pressResistance: 1.5, escapeLane: 1.5, coachFreedom: 0.8 },
    striker: { role: "striker", slide: 3.4, nearSupport: 0.8, farTuck: 0.6, attackDepth: 4.8, nearForward: 1.2, restDefense: 0.2, defensiveDrop: 1.2, pressStep: 2.7, compactness: 0.8, balanceDepth: 2.4, pressResistance: 0.8, escapeLane: 1.1, coachFreedom: 0.85 },
  };
  return profiles[role] || profiles.eight;
}

function normalizeTacticalRole(item, team) {
  if (item.role === "GK") return "keeper";
  if (item.role === "CB" || item.role === "LCB" || item.role === "RCB") return "centerBack";
  if (item.role === "FB" || item.role === "WB" || item.role === "LB" || item.role === "RB") return "fullback";
  if (item.role === "6" || item.role === "DM") return "pivot";
  if (item.role === "8" || item.role === "CM") return "eight";
  if (item.role === "10" || item.role === "AM") return "ten";
  if (item.role === "W" || item.role === "LW" || item.role === "RW") return "winger";
  if (item.role === "9" || item.role === "ST") return "striker";
  return team === "opponent" && item.id === "10" ? "ten" : "eight";
}

function getNearestOpponentDistance(item, team) {
  const source = team === "home" ? livePositions[item.id] : opponentPositions[item.id];
  const targets = team === "home" ? Object.values(opponentPositions) : Object.values(livePositions);
  if (!source || !targets.length) return Infinity;
  return targets.reduce((best, point) => Math.min(best, Math.hypot(source.x - point.x, source.y - point.y)), Infinity);
}

function getTeamSituationShift(item) {
  const displayY = getDisplayY(item, item.y);
  const side = displayY < 34 ? "left" : displayY > 34 ? "right" : "center";
  const line = item.x < 30 ? "back" : item.x > 68 ? "front" : "mid";
  if (activeSituation === "right") {
    return {
      x: line === "front" ? 1 : 0,
      y: side === "right" ? -3 : side === "left" ? -7 : -5,
    };
  }
  if (activeSituation === "left") {
    return {
      x: line === "front" ? 1 : 0,
      y: side === "left" ? 3 : side === "right" ? 7 : 5,
    };
  }
  if (activeSituation === "counter") {
    return {
      x: line === "front" ? 9 : line === "mid" ? 6 : 2,
      y: side === "center" ? 0 : side === "left" ? -2 : 2,
    };
  }
  return { x: 0, y: 0 };
}

function getOpponentSituationShift(item) {
  const displayY = getDisplayY(item, item.y);
  const side = displayY < 34 ? "left" : displayY > 34 ? "right" : "center";
  const line = item.x > 75 ? "back" : item.x < 45 ? "front" : "mid";
  if (activeSituation === "right") {
    return {
      x: line === "back" ? -2 : -4,
      y: side === "right" ? -2 : side === "left" ? -10 : -7,
    };
  }
  if (activeSituation === "left") {
    return {
      x: line === "back" ? -2 : -4,
      y: side === "left" ? 2 : side === "right" ? 10 : 7,
    };
  }
  if (activeSituation === "counter") {
    return {
      x: line === "back" ? -6 : line === "mid" ? -10 : -16,
      y: side === "center" ? 0 : side === "left" ? -3 : 3,
    };
  }
  return { x: 0, y: 0 };
}

function getDisplayY(item, y) {
  const id = item.id || "";
  const role = item.role || "";
  if (id.startsWith("L") || id.startsWith("R") || role.startsWith("L") || role.startsWith("R")) {
    return 68 - y;
  }
  return y;
}

function getInvolvedOpponents() {
  const selected = getSelectedPlayer();
  if (!selected) return [];
  const map = {
    GK: ["9", "10"],
    CB: ["9", "10", "6"],
    FB: selected.y > 34 || selected.id.includes("L") ? ["3", "10", "6", "11"] : ["2", "10", "6", "7"],
    WB: selected.y > 34 || selected.id.includes("L") ? ["3", "11", "6"] : ["2", "7", "6"],
    "6": ["10", "9", "6", "8"],
    "8": selected.y > 34 || selected.id.includes("L") ? ["6", "10", "3", "11"] : ["6", "10", "2", "7"],
    "10": ["6", "4", "5", "8"],
    W: selected.y > 34 || selected.id.includes("L") ? ["2", "5", "6", "7"] : ["3", "4", "6", "11"],
    "9": ["4", "5", "6", "1"],
  };
  const reasons = {
    1: "last defender and depth reference",
    2: "right-side wide defender",
    3: "left-side wide defender",
    4: "left center back duel",
    5: "right center back duel",
    9: "first pressure and cover shadow",
    10: "blocks the central passing lane",
    6: "screens the pocket between lines",
    8: "tracks the near central runner",
    7: "right winger presses from outside",
    11: "left winger presses from outside",
  };
  const ids = map[selected.role] || ["10", "6"];
  return getOpponents()
    .filter((item) => ids.includes(item.id))
    .map((item) => ({ ...item, reason: reasons[item.id] }));
}

function getSituations() {
  return {
    middle: {
      label: "Flat middle",
      description: "The ball is central. The team needs balanced distances, two safe passing angles, and protection behind the ball.",
      attackVector: { x: 0, y: 0 },
      defenseVector: { y: 0 },
    },
    right: {
      label: "Play right side",
      description: "The ball is on the right. The near side supports and combines while the far side tucks in for switch protection.",
      attackVector: { x: 2, y: -8 },
      defenseVector: { y: -8 },
    },
    left: {
      label: "Play left side",
      description: "The ball is on the left. The near side creates width and overloads while central players slide across to cover.",
      attackVector: { x: 2, y: 8 },
      defenseVector: { y: 8 },
    },
    counter: {
      label: "Counter attack",
      description: "The opponent is stretched. First pass should break forward, while the closest teammates sprint into support lanes.",
      attackVector: { x: 15, y: 0 },
      defenseVector: { y: 0 },
    },
  };
}

function getPhaseActions(selected, phase) {
  const position = livePositions[selected.id];
  const nearby = nearestPlayers(selected.id, 2);
  const situation = getSituations()[activeSituation];
  if (phase === "possession") {
    return [
      {
        from: [position.x, position.y],
        to: [clamp(position.x + 11 + situation.attackVector.x, 5, 95), clamp(position.y + situation.attackVector.y, 5, 63)],
        bend: situation.attackVector.y > 0 ? 4 : -4,
      },
      ...nearby.map((item, index) => ({
        from: [position.x, position.y],
        to: [livePositions[item.id].x, livePositions[item.id].y],
        bend: index === 0 ? 3 : -3,
      })),
    ];
  }
  if (phase === "defense") {
    return [
      { from: [position.x, position.y], to: [clamp(position.x - 9, 5, 95), position.y], bend: 0 },
      { from: [position.x, position.y], to: [clamp(position.x - 5, 5, 95), clamp(position.y + situation.defenseVector.y, 5, 63)], bend: 3 },
    ];
  }
  if (phase === "press") {
    return getInvolvedOpponents().slice(0, 2).map((item, index) => ({
      from: [position.x, position.y],
      to: [opponentPositions[item.id].x, opponentPositions[item.id].y],
      bend: index === 0 ? -4 : 4,
    }));
  }
  return [
    {
      from: [position.x, position.y],
      to: [clamp(position.x + 7 + situation.attackVector.x, 5, 95), clamp(position.y + situation.attackVector.y, 5, 63)],
      bend: 2,
    },
  ];
}

function getMoveOptions(item) {
  return [
    { key: "support", label: "Support: move closer to create a safe passing angle" },
    { key: "attack", label: "Attack: push forward into the next line" },
    { key: "cover", label: "Cover: recover behind the ball and protect space" },
  ];
}

function applyMoveOption(key) {
  const selected = getSelectedPlayer();
  if (!selected) return;
  const current = livePositions[selected.id];
  const movement = {
    support: { x: 4, y: selected.y > 34 ? -5 : 5 },
    attack: { x: 10, y: 0 },
    cover: { x: -8, y: selected.y > 34 ? -3 : 3 },
  }[key];
  const start = { ...current };
  const end = {
    x: clamp(current.x + movement.x, 4, 96),
    y: clamp(current.y + movement.y, 5, 63),
  };
  const started = performance.now();
  const duration = 460;
  function frame(now) {
    const t = Math.min((now - started) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    livePositions[selected.id] = {
      x: start.x + (end.x - start.x) * eased,
      y: start.y + (end.y - start.y) * eased,
    };
    renderTacticalLayer();
    renderPlayers();
    renderZones();
    renderConnections();
    if (t < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

function makeCurve(from, to, bend) {
  const [x1, y1] = from;
  const [x2, y2] = to;
  const cx = (x1 + x2) / 2;
  const cy = (y1 + y2) / 2 + bend;
  return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
}

function getSelectedPlayer() {
  return getFormation().players.find((item) => item.id === selectedId);
}

function nearestPlayers(id, count) {
  const source = livePositions[id];
  return getFormation().players
    .filter((item) => item.id !== id)
    .map((item) => ({
      ...item,
      distance: Math.hypot(livePositions[item.id].x - source.x, livePositions[item.id].y - source.y),
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, count);
}

function getSvgPoint(event) {
  const point = pitch.createSVGPoint();
  point.x = event.clientX;
  point.y = event.clientY;
  return point.matrixTransform(pitch.getScreenCTM().inverse());
}

function svgEl(tag, attrs = {}) {
  const element = document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.entries(attrs).forEach(([key, value]) => element.setAttribute(key, value));
  return element;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

setup();
