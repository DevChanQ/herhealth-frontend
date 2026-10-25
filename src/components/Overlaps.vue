<script setup>
import { reactive, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { VueModel } from '../model.js'

class DesignModel extends VueModel {
renderVals() {
const weeks = ['25 Apr','2 May','9 May','16 May','23 May','30 May','6 Jun','13 Jun','20 Jun','27 Jun','4 Jul','11 Jul','18 Jul','25 Jul','1 Aug','8 Aug','15 Aug','22 Aug','29 Aug','5 Sep','12 Sep','19 Sep','26 Sep','3 Oct','10 Oct','17 Oct'];
const cyc = ['P','','','L','P','','','L','P','','','L','P','P','','','L','P','','','L','P','','','L','P'];
const X0 = 28, STEP = 12.24, TOP = 10, H = 80;
const xAt = (i) => X0 + STEP * i;
const band = (code) => cyc.map((c, i) => (c === code ? 'M' + (xAt(i) - STEP / 2).toFixed(1) + ' ' + TOP + ' h' + STEP + ' v' + H + ' h-' + STEP + ' z' : '')).join(' ');
const bands = band('P');
const preBands = band('L');
const data = {
back: [2,0,0,1,3, 0,0,0,0,0, 0,0,2,4,1, 0,1,3,0,0, 0,1,0,0,1, 2],
mig: [3,2,0,4,2, 1,0,0,0,0, 0,0,4,3,1, 0,0,0,0,0, 3,3,1,0,4, 3],
joint: [1,0,0,0,2, 0,0,0,1,0, 0,0,1,3,1, 0,0,2,0,0, 0,1,0,0,0, 2],
abd: [3,1,0,3,4, 1,0,2,2,0, 0,1,3,4,1, 0,3,3,0,0, 3,3,1,0,3, 4],
leg: [1,0,0,1,3, 0,0,0,0,0, 0,0,2,3,1, 0,1,2,0,0, 0,0,0,0,2, 3],
nausea: [1,0,0,0,3, 0,0,0,0,0, 0,0,2,3,0, 0,0,1,0,0, 0,1,0,0,1, 2],
dizzy: [0,0,0,1,2, 0,0,0,0,0, 0,0,1,3,2, 0,0,1,0,0, 0,1,0,0,0, 2],
faint: [0,0,0,0,1, 0,0,0,0,0, 0,0,0,2,0, 0,0,0,0,0, 0,0,0,0,0, 1],
clots: [0,0,0,0,3, 0,0,0,0,0, 0,0,0,4,1, 0,0,1,0,0, 0,0,0,0,0, 2],
fog: [2,0,0,2,2, 0,0,1,2,0, 0,0,3,3,1, 0,2,2,0,0, 3,2,0,0,3, 3],
bowel: [2,0,0,1,3, 0,0,0,1,0, 0,0,2,3,0, 0,1,2,0,0, 1,2,0,0,2, 3],
anx: [1,0,0,2,1, 0,0,2,1,0, 0,1,3,2,0, 0,2,1,0,0, 3,2,0,0,4, 3],
dep: [0,0,0,2,2, 0,0,1,1,0, 0,0,3,3,2, 0,2,2,0,0, 3,2,0,0,3, 3],
mood: [0,0,0,3,1, 0,0,0,0,0, 0,0,4,2,0, 0,3,1,0,0, 3,1,0,0,3, 1],
irr: [0,0,0,2,1, 0,0,1,0,0, 0,0,3,1,0, 0,2,1,0,0, 3,1,0,0,3, 1],
conf: [0,0,0,1,1, 0,0,0,0,0, 0,0,2,2,0, 0,1,0,0,0, 2,1,0,0,3, 2]
};
const overlap = weeks.map((d, w) => Object.keys(data).filter((k) => data[k][w] >= 3).length);
const build = (title, note, aria, vals, color, isBars) => {
const max = Math.max.apply(null, vals);
const idx = vals.indexOf(max);
const scaleMax = isBars ? 12 : 4;
const yAt = (v) => TOP + H - (v * H) / scaleMax;
const px = xAt(idx);
const py = yAt(max);
const right = px > 250;
return {
title: title,
note: note,
aria: aria,
color: color,
bands: bands,
preBands: preBands,
points: isBars ? '' : vals.map((v, i) => xAt(i).toFixed(1) + ',' + yAt(v).toFixed(1)).join(' '),
bars: isBars ? vals.map((v, i) => (v > 0 ? 'M' + (xAt(i) - 4).toFixed(1) + ' ' + yAt(v).toFixed(1) + ' h8 v' + ((v * H) / scaleMax).toFixed(1) + ' h-8 z' : '')).join(' ') : '',
yTop: isBars ? '12' : '4',
yMid: isBars ? '6' : '2',
peakX: px.toFixed(1),
peakY: py.toFixed(1),
labelX: (right ? px - 9 : px + 9).toFixed(1),
labelY: (py + 4).toFixed(1),
anchor: right ? 'end' : 'start',
peakLabel: isBars ? max + ' at once · ' + weeks[idx] : 'Peak ' + max + ' · ' + weeks[idx]
};
};
return {
graphs: [
build('Abdominal pain', 'Rises the week before each period and peaks as it starts, reaching 4 of 4 in P2, P4 and P7.', 'Line chart of weekly abdominal pain severity from 0 to 4 across seven cycles, peaking at the start of periods.', data.abd, '#C2610C', false),
build('Migraines', 'Strongest the week before the period, 4 of 4 before P2, P4 and P7. Absent around P3 and P5.', 'Line chart of weekly migraine severity from 0 to 4, peaking in the week before P2, P4 and P7.', data.mig, '#3552C9', false),
build('Passing large blood clots', 'Only in the heaviest periods: 3 in P2, 4 in P4, 1 in P5 and 2 so far in P7.', 'Line chart of weekly large blood clot severity from 0 to 4, peaking in P4.', data.clots, '#B2284F', false),
build('Anxiety', 'Builds through the late luteal phase and eases once bleeding starts. Highest before P7 at 4 of 4.', 'Line chart of weekly anxiety severity from 0 to 4, rising before each period.', data.anx, '#6A4FD0', false),
build('Depression', 'Reaches 3 before P4, P6 and P7, and is slowest to lift after P4, still at 2 a week later.', 'Line chart of weekly depression severity from 0 to 4, rising before periods and lifting afterwards.', data.dep, '#1F6F6D', false),
build('Brain fog', 'Follows the mood pattern, reaching 3 before P4, P6 and P7 and again at the start of P7.', 'Line chart of weekly brain fog severity from 0 to 4, rising before periods.', data.fog, '#4A4F78', false),
build('Symptoms peaking at once', 'Count of the 16 tracked symptoms and negative emotions at 3 or more in the same week. Highest in P4, then before P4, P6 and P7.', 'Bar chart of how many symptoms reached severity 3 or more in each week, highest at 11 in the week of 25 July.', overlap, '#1D2140', true)
]
};
}
}

const model = reactive(new DesignModel({}))
const v = computed(() => model.renderVals())
</script>
<template>
<div class="design-screen screen-overlaps" style="width: 390px; height: 4300px; box-sizing: border-box; background: #F3F4FA; display: flex; flex-direction: column; gap: 12px; font-family: 'Plus Jakarta Sans', system-ui, sans-serif; color: #1D2140; overflow: hidden">

<header style="display: flex; align-items: center; gap: 10px; padding: 16px 16px 4px 10px">
<a href="Symptoms.dc.html" aria-label="Back to symptoms and emotions" style="width: 44px; height: 44px; border-radius: 22px; border: 1px solid #D9DCEE; background: #FFFFFF; display: flex; align-items: center; justify-content: center; flex: none">
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#1D2140" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4.5L6.5 10l5.5 5.5"></path></svg>
</a>
<div>
<h1 style="margin: 0; font-size: 22px; line-height: 28px; font-weight: 800; letter-spacing: -0.3px">Key Patterns and Overlaps</h1>
<p style="margin: 2px 0 0 0; font-size: 13px; line-height: 18px; color: #5A5F85">For specialists · 25 Apr – 24 Oct 2026</p>
</div>
</header>

<section style="margin: 0 10px; padding: 14px; background: #FFFFFF; border-radius: 20px; box-shadow: 0 1px 3px rgba(29,33,64,0.08)">
<p style="margin: 0 0 10px 0; font-size: 13px; line-height: 19px; color: #4A4F78">The seven graphs below show the symptoms and emotions with the sharpest swings. Severity is the worst day each week, from 0 to 4. Shaded bands mark when periods happened.</p>
<div style="display: flex; flex-wrap: wrap; gap: 4px 14px; font-size: 12px; line-height: 16px; color: #4A4F78">
<span style="display: flex; align-items: center; gap: 6px"><span style="width: 14px; height: 12px; border-radius: 3px; background: #F7D4DE"></span>Period week</span>
<span style="display: flex; align-items: center; gap: 6px"><span style="width: 14px; height: 12px; border-radius: 3px; background: #D9E1FB"></span>Week before period</span>
</div>
</section>

<h2 style="margin: 4px 16px 0 16px; font-size: 16px; line-height: 22px; font-weight: 700">Most drastic symptoms and emotions</h2>

<template v-for="g in v.graphs">
<section style="margin: 0 10px; padding: 14px; background: #FFFFFF; border-radius: 20px; box-shadow: 0 1px 3px rgba(29,33,64,0.08)">
<h3 style="margin: 0; font-size: 15px; line-height: 22px; font-weight: 700">{{ g.title }}</h3>
<p style="margin: 2px 0 8px 0; font-size: 13px; line-height: 18px; color: #4A4F78">{{ g.note }}</p>
<svg viewBox="0 0 342 116" width="100%" role="img" :aria-label="(g.aria)" style="display: block; font-family: 'Plus Jakarta Sans', system-ui, sans-serif">
<path :d="(g.preBands)" fill="#D9E1FB"></path>
<path :d="(g.bands)" fill="#F7D4DE"></path>
<g stroke="#E6E8F3" stroke-width="1">
<line x1="24" y1="10" x2="338" y2="10"></line>
<line x1="24" y1="50" x2="338" y2="50"></line>
<line x1="24" y1="90" x2="338" y2="90" stroke="#C9CDE3"></line>
</g>
<g font-size="11" fill="#5A5F85" text-anchor="end">
<text x="20" y="14">{{ g.yTop }}</text>
<text x="20" y="54">{{ g.yMid }}</text>
<text x="20" y="94">0</text>
</g>
<path :d="(g.bars)" :fill="(g.color)"></path>
<polyline :points="(g.points)" fill="none" :stroke="(g.color)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="stroke: #2b44a8; border-color: #2b44a8"></polyline>
<circle :cx="(g.peakX)" :cy="(g.peakY)" r="4.5" fill="#FFFFFF" :stroke="(g.color)" stroke-width="2.5"></circle>
<text :x="(g.labelX)" :y="(g.labelY)" :text-anchor="(g.anchor)" font-size="11" font-weight="700" fill="#1D2140">{{ g.peakLabel }}</text>
<g font-size="11" font-weight="600" fill="#4A4F78" text-anchor="middle">
<text x="28" y="108">P1</text>
<text x="76.96" y="108">P2</text>
<text x="125.92" y="108">P3</text>
<text x="174.88" y="108">P4</text>
<text x="236.08" y="108">P5</text>
<text x="285.04" y="108">P6</text>
<text x="334" y="108">P7</text>
</g>
</svg>
</section>
</template>

<h2 style="margin: 8px 16px 0 16px; font-size: 16px; line-height: 22px; font-weight: 700"><i>Key overlaps</i></h2>

<section style="margin: 0 10px; padding: 14px; background: #FFFFFF; border-radius: 20px; box-shadow: 0 1px 3px rgba(29,33,64,0.08)">
<h3 style="margin: 0; font-size: 15px; line-height: 22px; font-weight: 700; color: #4C1F82">Pain, migraine and mood swings together before the period</h3>
<div style="display: flex; flex-wrap: wrap; gap: 6px; margin: 8px 0">
<span style="padding: 3px 8px; border-radius: 8px; background: #E3E8FC; color: #2B44A8; font-size: 11px; line-height: 16px; font-weight: 700">Repeated: 4 of 6 cycles</span>
<span style="padding: 3px 8px; border-radius: 8px; background: #FBE9EF; color: #A3234A; font-size: 11px; line-height: 16px; font-weight: 700">Drastic: 7 to 8 at once</span>
</div>
<p style="margin: 0 0 8px 0; font-size: 13px; line-height: 20px; color: #1D2140">Abdominal pain, migraine and mood swings all reach 3 or more in the week before P2, P4, P6 and P7. Irritability and anxiety join in before P4, P6 and P7, so seven or eight symptoms peak at once. P3 and P5 did not follow this pattern.</p>
<div style="font-size: 11px; line-height: 14px; font-weight: 700; letter-spacing: 0.3px; color: #4A4F78; margin-bottom: 6px">COINCIDES WITH PATTERNS DESCRIBED IN</div>
<div style="display: flex; flex-wrap: wrap; gap: 6px">
<span style="padding: 3px 8px; border-radius: 8px; background: #F3F4FA; color: #1D2140; font-size: 12px; line-height: 16px; font-weight: 600">PMDD (mood side)</span>
<span style="padding: 3px 8px; border-radius: 8px; background: #F3F4FA; color: #1D2140; font-size: 12px; line-height: 16px; font-weight: 600">Endometriosis (pain side)</span>
</div>
</section>

<section style="margin: 0 10px; padding: 14px; background: #FFFFFF; border-radius: 20px; box-shadow: 0 1px 3px rgba(29,33,64,0.08)">
<h3 style="margin: 0; font-size: 15px; line-height: 22px; font-weight: 700">Heavy bleeding cluster: clots, dizziness, fainting, nausea, intense back pain</h3>
<div style="display: flex; flex-wrap: wrap; gap: 6px; margin: 8px 0">
<span style="padding: 3px 8px; border-radius: 8px; background: #E3E8FC; color: #2B44A8; font-size: 11px; line-height: 16px; font-weight: 700">Repeated: P2, P4, milder in P7</span>
<span style="padding: 3px 8px; border-radius: 8px; background: #FBE9EF; color: #A3234A; font-size: 11px; line-height: 16px; font-weight: 700">Drastic: 11 at once in P4</span>
</div>
<p style="margin: 0 0 8px 0; font-size: 13px; line-height: 20px; color: #1D2140">In the heaviest periods, large clots appear with dizziness, nausea and back pain, and fainting was logged in P2 and P4. The week of 25 Jul (P4) had 11 symptoms at 3 or more at once, the highest in the window. P7 shows the same shape at lower levels so far.</p>
<div style="font-size: 11px; line-height: 14px; font-weight: 700; letter-spacing: 0.3px; color: #4A4F78; margin-bottom: 6px">COINCIDES WITH PATTERNS DESCRIBED IN</div>
<div style="display: flex; flex-wrap: wrap; gap: 6px">
<span style="padding: 3px 8px; border-radius: 8px; background: #F3F4FA; color: #1D2140; font-size: 12px; line-height: 16px; font-weight: 600">Adenomyosis</span>
<span style="padding: 3px 8px; border-radius: 8px; background: #F3F4FA; color: #1D2140; font-size: 12px; line-height: 16px; font-weight: 600">Endometriosis</span>
</div>
</section>

<section style="margin: 0 10px; padding: 14px; background: #FFFFFF; border-radius: 20px; box-shadow: 0 1px 3px rgba(29,33,64,0.08)">
<h3 style="margin: 0; font-size: 15px; line-height: 22px; font-weight: 700">Pelvic, back and leg pain with bowel changes at period onset</h3>
<div style="display: flex; flex-wrap: wrap; gap: 6px; margin: 8px 0">
<span style="padding: 3px 8px; border-radius: 8px; background: #E3E8FC; color: #2B44A8; font-size: 11px; line-height: 16px; font-weight: 700">Repeated: 4 of 7 periods</span>
</div>
<p style="margin: 0 0 8px 0; font-size: 13px; line-height: 20px; color: #1D2140">Abdominal pain, thigh and leg pain, and alternating diarrhoea and constipation rise together as bleeding starts in P2, P4, P5 and P7, and ease within the following week.</p>
<div style="font-size: 11px; line-height: 14px; font-weight: 700; letter-spacing: 0.3px; color: #4A4F78; margin-bottom: 6px">COINCIDES WITH PATTERNS DESCRIBED IN</div>
<div style="display: flex; flex-wrap: wrap; gap: 6px">
<span style="padding: 3px 8px; border-radius: 8px; background: #F3F4FA; color: #1D2140; font-size: 12px; line-height: 16px; font-weight: 600">Endometriosis</span>
<span style="padding: 3px 8px; border-radius: 8px; background: #F3F4FA; color: #1D2140; font-size: 12px; line-height: 16px; font-weight: 600">Adenomyosis</span>
</div>
</section>

<section style="margin: 0 10px; padding: 14px; background: #FFFFFF; border-radius: 20px; box-shadow: 0 1px 3px rgba(29,33,64,0.08)">
<h3 style="margin: 0; font-size: 15px; line-height: 22px; font-weight: 700">Brain fog, confusion, low mood and anxiety that lift after bleeding starts</h3>
<div style="display: flex; flex-wrap: wrap; gap: 6px; margin: 8px 0">
<span style="padding: 3px 8px; border-radius: 8px; background: #E3E8FC; color: #2B44A8; font-size: 11px; line-height: 16px; font-weight: 700">Repeated: 5 of 6 cycles</span>
<span style="padding: 3px 8px; border-radius: 8px; background: #FBE9EF; color: #A3234A; font-size: 11px; line-height: 16px; font-weight: 700">Drastic: 3 or more in P4, P6, P7</span>
</div>
<p style="margin: 0 0 8px 0; font-size: 13px; line-height: 20px; color: #1D2140">Brain fog, anxiety and low mood reach 2 or more before five of six periods and 3 or more before P4, P6 and P7. Positive mood drops to its lowest level in the same weeks and recovers in the weeks after bleeding settles.</p>
<div style="font-size: 11px; line-height: 14px; font-weight: 700; letter-spacing: 0.3px; color: #4A4F78; margin-bottom: 6px">COINCIDES WITH PATTERNS DESCRIBED IN</div>
<div style="display: flex; flex-wrap: wrap; gap: 6px">
<span style="padding: 3px 8px; border-radius: 8px; background: #F3F4FA; color: #1D2140; font-size: 12px; line-height: 16px; font-weight: 600">PMDD</span>
</div>
</section>

<section style="margin: 0 10px; padding: 14px; background: #FFFFFF; border-radius: 20px; box-shadow: 0 1px 3px rgba(29,33,64,0.08)">
<h3 style="margin: 0; font-size: 15px; line-height: 22px; font-weight: 700">Sleep and overall symptom load</h3>
<div style="display: flex; flex-wrap: wrap; gap: 6px; margin: 8px 0">
<span style="padding: 3px 8px; border-radius: 8px; background: #E3E8FC; color: #2B44A8; font-size: 11px; line-height: 16px; font-weight: 700">Repeated: 2 of 2 heaviest cycles</span>
</div>
<p style="margin: 0 0 8px 0; font-size: 13px; line-height: 20px; color: #1D2140">Average sleep was lowest in P4 (6.2 h) and P2 (6.8 h), the two cycles with the most symptoms and heaviest bleeding. The lighter cycles averaged 7.0 to 7.6 h. This data cannot show which came first, since pain can also disturb sleep.</p>
<div style="font-size: 11px; line-height: 14px; font-weight: 700; letter-spacing: 0.3px; color: #4A4F78; margin-bottom: 6px">COINCIDES WITH PATTERNS DESCRIBED IN</div>
<div style="display: flex; flex-wrap: wrap; gap: 6px">
<span style="padding: 3px 8px; border-radius: 8px; background: #F3F4FA; color: #1D2140; font-size: 12px; line-height: 16px; font-weight: 600">Not specific to any one condition</span>
</div>
</section>

<h2 style="margin: 8px 16px 0 16px; font-size: 16px; line-height: 22px; font-weight: 700">Pattern alignment</h2>

<section style="margin: 0 10px; padding: 14px; background: #FFFFFF; border-radius: 20px; box-shadow: 0 1px 3px rgba(29,33,64,0.08)">
<p style="margin: 0 0 6px 0; font-size: 12px; line-height: 17px; color: #5A5F85">How closely the logged shapes resemble patterns described for each condition. This is pattern matching, not a diagnosis.</p>
<ul style="list-style: none; margin: 0; padding: 0">

<li style="padding: 12px 0; border-top: 1px solid #E6E8F3">
<div style="display: flex; align-items: center; justify-content: space-between; gap: 8px">
<span style="font-size: 14px; line-height: 20px; font-weight: 700">PMDD</span>
<span style="display: flex; align-items: center; gap: 6px; font-size: 12px; line-height: 16px; font-weight: 700; color: #2B44A8">Strong
<span role="img" aria-label="3 of 3" style="display: flex; gap: 3px"><span style="width: 14px; height: 8px; border-radius: 4px; background: #3552C9"></span><span style="width: 14px; height: 8px; border-radius: 4px; background: #3552C9"></span><span style="width: 14px; height: 8px; border-radius: 4px; background: #3552C9"></span></span></span>
</div>
<p style="margin: 4px 0 0 0; font-size: 12px; line-height: 18px; color: #4A4F78">Mood, anxiety, irritability and brain fog build before the period and lift after it starts. Diagnosis needs daily ratings across at least two cycles.</p>
</li>

<li style="padding: 12px 0; border-top: 1px solid #E6E8F3">
<div style="display: flex; align-items: center; justify-content: space-between; gap: 8px">
<span style="font-size: 14px; line-height: 20px; font-weight: 700">Endometriosis</span>
<span style="display: flex; align-items: center; gap: 6px; font-size: 12px; line-height: 16px; font-weight: 700; color: #2B44A8">Moderate
<span role="img" aria-label="2 of 3" style="display: flex; gap: 3px"><span style="width: 14px; height: 8px; border-radius: 4px; background: #3552C9"></span><span style="width: 14px; height: 8px; border-radius: 4px; background: #3552C9"></span><span style="width: 14px; height: 8px; border-radius: 4px; background: #D4D8EE"></span></span></span>
</div>
<p style="margin: 4px 0 0 0; font-size: 12px; line-height: 18px; color: #4A4F78">Cyclical pelvic, back and leg pain with bowel changes and nausea at period onset in 4 of 7 periods. Symptoms alone cannot confirm it.</p>
</li>

<li style="padding: 12px 0; border-top: 1px solid #E6E8F3">
<div style="display: flex; align-items: center; justify-content: space-between; gap: 8px">
<span style="font-size: 14px; line-height: 20px; font-weight: 700">Adenomyosis</span>
<span style="display: flex; align-items: center; gap: 6px; font-size: 12px; line-height: 16px; font-weight: 700; color: #2B44A8">Moderate
<span role="img" aria-label="2 of 3" style="display: flex; gap: 3px"><span style="width: 14px; height: 8px; border-radius: 4px; background: #3552C9"></span><span style="width: 14px; height: 8px; border-radius: 4px; background: #3552C9"></span><span style="width: 14px; height: 8px; border-radius: 4px; background: #D4D8EE"></span></span></span>
</div>
<p style="margin: 4px 0 0 0; font-size: 12px; line-height: 18px; color: #4A4F78">Heavy bleeding, large clots and severe pain with dizziness and fainting, but in only 2 of 7 periods so far.</p>
</li>

<li style="padding: 12px 0 0 0; border-top: 1px solid #E6E8F3">
<div style="display: flex; align-items: center; justify-content: space-between; gap: 8px">
<span style="font-size: 14px; line-height: 20px; font-weight: 700">PMOS (previously PCOS)</span>
<span style="display: flex; align-items: center; gap: 6px; font-size: 12px; line-height: 16px; font-weight: 700; color: #4A4F78">Weak
<span role="img" aria-label="1 of 3" style="display: flex; gap: 3px"><span style="width: 14px; height: 8px; border-radius: 4px; background: #4A4F78"></span><span style="width: 14px; height: 8px; border-radius: 4px; background: #D4D8EE"></span><span style="width: 14px; height: 8px; border-radius: 4px; background: #D4D8EE"></span></span></span>
</div>
<p style="margin: 4px 0 0 0; font-size: 12px; line-height: 18px; color: #4A4F78">Cycles are regular at 27 to 31 days. Mood and sleep changes are not specific, and this data has no ovulation or hormone information.</p>
</li>

</ul>
</section>

<section style="margin: 0 10px; padding: 14px; background: #FFFFFF; border-radius: 20px; box-shadow: 0 1px 3px rgba(29,33,64,0.08)">
<h2 style="margin: 0; font-size: 16px; line-height: 22px; font-weight: 700">External factors listed by the patient</h2>
<p style="margin: 0 0 8px 0; font-size: 12px; line-height: 16px; color: #5A5F85">Sample entries shown</p>
<ul style="list-style: none; margin: 0; padding: 0">
<li style="display: flex; align-items: center; justify-content: space-between; gap: 8px; min-height: 44px; border-top: 1px solid #E6E8F3; font-size: 14px; font-weight: 600"><span>Heavy workload</span><span style="font-size: 12px; font-weight: 500; color: #5A5F85">Aug – Sep</span></li>
<li style="display: flex; align-items: center; justify-content: space-between; gap: 8px; min-height: 44px; border-top: 1px solid #E6E8F3; font-size: 14px; font-weight: 600"><span>Travel across time zones</span><span style="font-size: 12px; font-weight: 500; color: #5A5F85">Jul</span></li>
<li style="display: flex; align-items: center; justify-content: space-between; gap: 8px; min-height: 44px; border-top: 1px solid #E6E8F3; font-size: 14px; font-weight: 600"><span>Started vitamin D</span><span style="font-size: 12px; font-weight: 500; color: #5A5F85">Sep</span></li>
</ul>
</section>

<aside role="note" style="margin: auto 10px 24px 10px; padding: 16px 14px; background: #FFF3CF; border: 1.5px solid #B07A00; border-radius: 20px">
<div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px">
<svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="#5C3D00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex: none"><path d="M13 3.5L24 22.5H2L13 3.5z"></path><path d="M13 10.5v5.5M13 19.2v.1"></path></svg>
<h2 style="margin: 0; font-size: 16px; line-height: 22px; font-weight: 800; color: #3F2900">Please read before interpreting</h2>
</div>
<ul style="margin: 0; padding: 0 0 0 20px; font-size: 13px; line-height: 20px; color: #3F2900">
<li style="margin-bottom: 6px">These patterns have <strong>not considered external life factors or the patient's environment</strong>, such as stress, work, travel, illness, grief, diet or changes in medication.</li>
<li style="margin-bottom: 6px">This is a <strong>mathematical representation</strong> of the combination of symptoms, sleep and menstrual experience. It is not a diagnosis.</li>
<li>Please review any <strong>other external factors the patient has listed</strong> before drawing conclusions.</li>
</ul>
</aside>

</div>
</template>
