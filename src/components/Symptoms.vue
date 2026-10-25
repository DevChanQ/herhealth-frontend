<script setup>
import { reactive, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { VueModel } from '../model.js'

class DesignModel extends VueModel {
renderVals() {
const weeks = ['25 Apr','2 May','9 May','16 May','23 May','30 May','6 Jun','13 Jun','20 Jun','27 Jun','4 Jul','11 Jul','18 Jul','25 Jul','1 Aug','8 Aug','15 Aug','22 Aug','29 Aug','5 Sep','12 Sep','19 Sep','26 Sep','3 Oct','10 Oct','17 Oct'];
const cyc = ['P','','','L','P','','','L','P','','','L','P','P','','','L','P','','','L','P','','','L','P'];
const cycBg = (c) => (c === 'P' ? '#B2284F' : c === 'L' ? '#3552C9' : '#F3F4FA');
const amber = ['#EFF0F8','#FBDDBF','#F4B574','#DC7A1E','#8F3E04'];
const purple = ['#EFF0F8','#DCD6F5','#B5A8EA','#7F68D6','#4A2FA8'];
const teal = ['#EFF0F8','#CDEBEA','#8FD1CF','#3FA7A5','#136B69'];
const sym = [
{ label: 'Back pain', ramp: amber, v: [2,0,0,1,3, 0,0,0,0,0, 0,0,2,4,1, 0,1,3,0,0, 0,1,0,0,1, 2] },
{ label: 'Migraines', ramp: amber, v: [3,2,0,4,2, 1,0,0,0,0, 0,0,4,3,1, 0,0,0,0,0, 3,3,1,0,4, 3] },
{ label: 'Joint pain', ramp: amber, v: [1,0,0,0,2, 0,0,0,1,0, 0,0,1,3,1, 0,0,2,0,0, 0,1,0,0,0, 2] },
{ label: 'Abdominal pain', ramp: amber, v: [3,1,0,3,4, 1,0,2,2,0, 0,1,3,4,1, 0,3,3,0,0, 3,3,1,0,3, 4] },
{ label: 'Thigh, leg, lower body pain', ramp: amber, v: [1,0,0,1,3, 0,0,0,0,0, 0,0,2,3,1, 0,1,2,0,0, 0,0,0,0,2, 3] },
{ label: 'Nausea', ramp: amber, v: [1,0,0,0,3, 0,0,0,0,0, 0,0,2,3,0, 0,0,1,0,0, 0,1,0,0,1, 2] },
{ label: 'Dizziness', ramp: amber, v: [0,0,0,1,2, 0,0,0,0,0, 0,0,1,3,2, 0,0,1,0,0, 0,1,0,0,0, 2] },
{ label: 'Fainting', ramp: amber, v: [0,0,0,0,1, 0,0,0,0,0, 0,0,0,2,0, 0,0,0,0,0, 0,0,0,0,0, 1] },
{ label: 'Large blood clots', ramp: amber, v: [0,0,0,0,3, 0,0,0,0,0, 0,0,0,4,1, 0,0,1,0,0, 0,0,0,0,0, 2] },
{ label: 'Brain fog', ramp: amber, v: [2,0,0,2,2, 0,0,1,2,0, 0,0,3,3,1, 0,2,2,0,0, 3,2,0,0,3, 3] },
{ label: 'Diarrhoea or constipation', ramp: amber, v: [2,0,0,1,3, 0,0,0,1,0, 0,0,2,3,0, 0,1,2,0,0, 1,2,0,0,2, 3] }
];
const emo = [
{ label: 'Anxiety', ramp: purple, v: [1,0,0,2,1, 0,0,2,1,0, 0,1,3,2,0, 0,2,1,0,0, 3,2,0,0,4, 3] },
{ label: 'Depression', ramp: purple, v: [0,0,0,2,2, 0,0,1,1,0, 0,0,3,3,2, 0,2,2,0,0, 3,2,0,0,3, 3] },
{ label: 'Mood swings', ramp: purple, v: [0,0,0,3,1, 0,0,0,0,0, 0,0,4,2,0, 0,3,1,0,0, 3,1,0,0,3, 1] },
{ label: 'Irritated', ramp: purple, v: [0,0,0,2,1, 0,0,1,0,0, 0,0,3,1,0, 0,2,1,0,0, 3,1,0,0,3, 1] },
{ label: 'Positive', ramp: teal, v: [1,3,4,2,1, 3,4,3,2,3, 4,3,1,1,3, 4,2,1,3,4, 1,1,3,4,1, 1] },
{ label: 'Confusion', ramp: purple, v: [0,0,0,1,1, 0,0,0,0,0, 0,0,2,2,0, 0,1,0,0,0, 2,1,0,0,3, 2] }
];
const rowsFor = (cols) => weeks.map((d, w) => ({
date: d,
cyc: cycBg(cyc[w]),
cells: cols.map((c) => ({ bg: c.ramp[c.v[w]] }))
}));
return {
symCols: sym.map((c) => ({ label: c.label })),
symRows: rowsFor(sym),
emoCols: emo.map((c) => ({ label: c.label })),
emoRows: rowsFor(emo)
};
}
}

const model = reactive(new DesignModel({}))
const v = computed(() => model.renderVals())
</script>
<template>
<div class="design-screen screen-symptoms" style="width: 390px; height: 1560px; box-sizing: border-box; background: #F3F4FA; display: flex; flex-direction: column; gap: 12px; font-family: 'Plus Jakarta Sans', system-ui, sans-serif; color: #1D2140; overflow: hidden">

<header style="display: flex; align-items: center; gap: 10px; padding: 16px 16px 4px 10px">
<a href="Main.dc.html" aria-label="Back to Patterns" style="width: 44px; height: 44px; border-radius: 22px; border: 1px solid #D9DCEE; background: #FFFFFF; display: flex; align-items: center; justify-content: center; flex: none">
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#1D2140" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4.5L6.5 10l5.5 5.5"></path></svg>
</a>
<div>
<h1 style="margin: 0; font-size: 22px; line-height: 28px; font-weight: 800; letter-spacing: -0.3px">Symptoms and Emotions Over Time</h1>
<p style="margin: 2px 0 0 0; font-size: 13px; line-height: 18px; color: #5A5F85">25 Apr – 24 Oct 2026 · 26 weeks · 7 periods</p>
</div>
</header>

<section style="margin: 0 10px; padding: 14px 12px 12px 12px; background: #FFFFFF; border-radius: 20px; box-shadow: 0 1px 3px rgba(29,33,64,0.08)">
<h2 style="margin: 0 0 2px 2px; font-size: 16px; line-height: 22px; font-weight: 700">Symptoms over time</h2>
<p style="margin: 0 0 10px 2px; font-size: 12px; line-height: 16px; color: #5A5F85">Time runs down the page. Each cell is the worst day that week.</p>

<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 4px 10px; margin: 0 2px 12px 2px; font-size: 11px; line-height: 14px; color: #4A4F78">
<span style="display: flex; align-items: center; gap: 4px">None
<span style="width: 16px; height: 12px; border-radius: 3px; background: #EFF0F8"></span><span style="width: 16px; height: 12px; border-radius: 3px; background: #FBDDBF"></span><span style="width: 16px; height: 12px; border-radius: 3px; background: #F4B574"></span><span style="width: 16px; height: 12px; border-radius: 3px; background: #DC7A1E"></span><span style="width: 16px; height: 12px; border-radius: 3px; background: #8F3E04"></span>
Severe</span>
<span style="display: flex; align-items: center; gap: 4px"><span style="width: 10px; height: 12px; border-radius: 3px; background: #3552C9"></span>Week before period</span>
<span style="display: flex; align-items: center; gap: 4px"><span style="width: 10px; height: 12px; border-radius: 3px; background: #B2284F"></span>Period week</span>
</div>

<div role="img" aria-label="Heatmap of 11 symptoms by week from 25 April to 24 October. Darker cells are more severe. Most symptoms darken in the week before each period and the first week of it.">
<div style="display: grid; grid-template-columns: 46px 10px repeat(11, minmax(0, 1fr)); column-gap: 2px; align-items: end; margin-bottom: 4px">
<div style="font-size: 11px; line-height: 14px; font-weight: 700; color: #4A4F78">Week of</div>
<div></div>
<template v-for="c in v.symCols">
<div style="writing-mode: vertical-rl; transform: rotate(180deg); height: 96px; font-size: 11px; line-height: 24px; font-weight: 600; color: #1D2140; white-space: nowrap">{{ c.label }}</div>
</template>
</div>
<div style="display: flex; flex-direction: column; gap: 2px">
<template v-for="row in v.symRows">
<div style="display: grid; grid-template-columns: 46px 10px repeat(11, minmax(0, 1fr)); column-gap: 2px; align-items: center">
<div style="font-size: 11px; line-height: 14px; color: #5A5F85">{{ row.date }}</div>
<div :style="&quot;height: 14px; border-radius: 3px; background: &quot; + (row.cyc)"></div>
<template v-for="cell in row.cells">
<div :style="&quot;height: 14px; border-radius: 3px; background: &quot; + (cell.bg)"></div>
</template>
</div>
</template>
</div>
</div>
</section>

<section style="margin: 0 10px; padding: 14px 12px 12px 12px; background: #FFFFFF; border-radius: 20px; box-shadow: 0 1px 3px rgba(29,33,64,0.08)">
<h2 style="margin: 0 0 2px 2px; font-size: 16px; line-height: 22px; font-weight: 700">Emotions over time</h2>
<p style="margin: 0 0 10px 2px; font-size: 12px; line-height: 16px; color: #5A5F85">Same weeks, same layout. Positive is shown in its own colour.</p>

<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 4px 12px; margin: 0 2px 12px 2px; font-size: 11px; line-height: 14px; color: #4A4F78">
<span style="display: flex; align-items: center; gap: 4px">Low
<span style="width: 16px; height: 12px; border-radius: 3px; background: #EFF0F8"></span><span style="width: 16px; height: 12px; border-radius: 3px; background: #DCD6F5"></span><span style="width: 16px; height: 12px; border-radius: 3px; background: #B5A8EA"></span><span style="width: 16px; height: 12px; border-radius: 3px; background: #7F68D6"></span><span style="width: 16px; height: 12px; border-radius: 3px; background: #4A2FA8"></span>
Intense</span>
<span style="display: flex; align-items: center; gap: 4px">Positive
<span style="width: 16px; height: 12px; border-radius: 3px; background: #CDEBEA"></span><span style="width: 16px; height: 12px; border-radius: 3px; background: #3FA7A5"></span><span style="width: 16px; height: 12px; border-radius: 3px; background: #136B69"></span></span>
</div>

<div role="img" aria-label="Heatmap of six emotions by week. Anxiety, depression, mood swings, irritability and confusion intensify in the week before each period. Positive mood is lowest in the same weeks.">
<div style="display: grid; grid-template-columns: 46px 10px repeat(6, minmax(0, 1fr)); column-gap: 2px; align-items: end; margin-bottom: 4px">
<div style="font-size: 11px; line-height: 14px; font-weight: 700; color: #4A4F78">Week of</div>
<div></div>
<template v-for="c in v.emoCols">
<div style="writing-mode: vertical-rl; transform: rotate(180deg); height: 80px; font-size: 11px; line-height: 46px; font-weight: 600; color: #1D2140; white-space: nowrap">{{ c.label }}</div>
</template>
</div>
<div style="display: flex; flex-direction: column; gap: 2px">
<template v-for="row in v.emoRows">
<div style="display: grid; grid-template-columns: 46px 10px repeat(6, minmax(0, 1fr)); column-gap: 2px; align-items: center">
<div style="font-size: 11px; line-height: 14px; color: #5A5F85">{{ row.date }}</div>
<div :style="&quot;height: 14px; border-radius: 3px; background: &quot; + (row.cyc)"></div>
<template v-for="cell in row.cells">
<div :style="&quot;height: 14px; border-radius: 3px; background: &quot; + (cell.bg)"></div>
</template>
</div>
</template>
</div>
</div>
</section>

<div style="margin-top: auto; padding: 14px 16px 24px 16px; background: #FFFFFF; border-top: 1px solid #E6E8F3">
<a href="KeyPatterns.dc.html" style="display: flex; align-items: center; justify-content: center; gap: 10px; min-height: 56px; padding: 0 16px; box-sizing: border-box; border-radius: 16px; background: #2B44A8; color: #FFFFFF; font-size: 15px; line-height: 20px; font-weight: 700; text-align: center">
View key patterns and overlaps
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex: none"><path d="M3.5 9h11M10 4.5L14.5 9 10 13.5"></path></svg>
</a>
</div>

</div>
</template>
