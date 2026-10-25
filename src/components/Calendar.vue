<script setup>
import { reactive, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { VueModel } from '../model.js'

class DesignModel extends VueModel {
constructor(props) {
super(props);
const pad = (n) => String(n).padStart(2, '0');
const key = (y, m, d) => y + '-' + pad(m + 1) + '-' + pad(d);
const log = {};
const slot = (y, m, d) => {
const k = key(y, m, d);
if (!log[k]) log[k] = { period: false, syms: [], emo: [], diary: null };
return log[k];
};
const per = (y, m, a, b) => { for (let d = a; d <= b; d++) slot(y, m, d).period = true; };
const run = (y, m, a, b, id) => { for (let d = a; d <= b; d++) slot(y, m, d).syms.push(id); };
const emo = (y, m, d, ids) => { slot(y, m, d).emo = ids; };

per(2026, 7, 23, 27);
run(2026, 7, 18, 19, 'migraine'); run(2026, 7, 19, 23, 'bloating'); run(2026, 7, 20, 24, 'fatigue'); run(2026, 7, 21, 25, 'cramps');
emo(2026, 7, 20, ['irritable']); emo(2026, 7, 22, ['anxious']); emo(2026, 7, 24, ['tired']); emo(2026, 7, 29, ['happy']);

per(2026, 8, 21, 25);
run(2026, 8, 14, 16, 'migraine'); run(2026, 8, 20, 20, 'migraine');
run(2026, 8, 15, 17, 'other'); run(2026, 8, 17, 22, 'bloating'); run(2026, 8, 18, 22, 'fatigue');
run(2026, 8, 19, 23, 'cramps'); run(2026, 8, 21, 22, 'stool'); run(2026, 8, 22, 22, 'back');
emo(2026, 8, 14, ['anxious']); emo(2026, 8, 16, ['mood']); emo(2026, 8, 18, ['irritable', 'nervous']);
emo(2026, 8, 21, ['tired']); emo(2026, 8, 27, ['energetic']); emo(2026, 8, 28, ['happy']);

per(2026, 9, 18, 22);
run(2026, 9, 11, 13, 'migraine'); run(2026, 9, 17, 18, 'migraine'); run(2026, 9, 22, 22, 'migraine');
run(2026, 9, 12, 14, 'other'); run(2026, 9, 17, 17, 'other');
run(2026, 9, 14, 19, 'bloating'); run(2026, 9, 15, 20, 'fatigue');
run(2026, 9, 16, 20, 'cramps'); run(2026, 9, 18, 19, 'back'); run(2026, 9, 18, 18, 'nausea'); run(2026, 9, 18, 20, 'stool'); run(2026, 9, 18, 19, 'appetite'); run(2026, 9, 18, 19, 'dizzy');
emo(2026, 9, 11, ['anxious']); emo(2026, 9, 12, ['anxious', 'irritable']); emo(2026, 9, 13, ['mood']);
emo(2026, 9, 14, ['irritable']); emo(2026, 9, 15, ['nervous']); emo(2026, 9, 16, ['depressed']);
emo(2026, 9, 17, ['anxious', 'depressed']); emo(2026, 9, 18, ['tired']); emo(2026, 9, 19, ['tired']);
emo(2026, 9, 20, ['calm']); emo(2026, 9, 21, ['energetic']); emo(2026, 9, 22, ['happy']);
emo(2026, 9, 23, ['happy']); emo(2026, 9, 24, ['energetic', 'excited']);
slot(2026, 9, 18).diary = { heart: false, mood: '😔', feel: 'Shooting pain low in my tummy from the morning. Heavy by the afternoon.', food: 'Toast, banana, lots of tea. No appetite later.', act: 'Worked from home. Hot water bottle on the sofa.', note: 'Sumatriptan helped the migraine within the hour.' };
slot(2026, 9, 24).diary = { heart: true, mood: '😊', feel: 'Much lighter today. Slept well and woke up clear-headed.', food: 'Porridge, salmon and greens, lots of water.', act: 'Long walk in the park, then lunch with a friend.', note: '' };

this.state = { y: 2026, m: 9, d: 25, diaryOpen: true, log: log };
this._PRED = ['2026-11-16', '2026-11-17', '2026-11-18', '2026-11-19', '2026-11-20'];
this._SYMS = [
{ id: 'cramps', label: 'Abdominal cramps', color: '#F28C28' },
{ id: 'nausea', label: 'Nausea', color: '#C7A600' },
{ id: 'migraine', label: 'Migraine', color: '#7B4FE0' },
{ id: 'joint', label: 'Joint pain', color: '#2F6FDE' },
{ id: 'appetite', label: 'Loss of appetite', color: '#8A5A2B' },
{ id: 'back', label: 'Lower back pain', color: '#0A9396' },
{ id: 'stool', label: 'Trouble passing stool / stool changes', color: '#3DAA6D' },
{ id: 'rectal', label: 'Rectal pain', color: '#8E24AA' },
{ id: 'dizzy', label: 'Dizziness', color: '#5BC0EB' },
{ id: 'fatigue', label: 'Fatigue', color: '#6D7B8D' },
{ id: 'vomiting', label: 'Vomiting', color: '#8AB317' },
{ id: 'fainting', label: 'Fainting', color: '#1F3A93' },
{ id: 'bloating', label: 'Bloating', color: '#D6409F' },
{ id: 'acne', label: 'Acne', color: '#E8A0BF' },
{ id: 'hair', label: 'Hair loss', color: '#37474F' },
{ id: 'weight', label: 'Weight gain / loss', color: '#A1887F' },
{ id: 'other', label: 'Other', color: '#9E9E9E' }
];
this._EMOS = [
{ id: 'anxious', label: 'Anxious', emoji: '😰' },
{ id: 'nervous', label: 'Nervous', emoji: '😬' },
{ id: 'depressed', label: 'Low', emoji: '😔' },
{ id: 'mood', label: 'Mood swings', emoji: '🎢' },
{ id: 'irritable', label: 'Irritable', emoji: '😠' },
{ id: 'tired', label: 'Tired', emoji: '😴' },
{ id: 'calm', label: 'Calm', emoji: '😌' },
{ id: 'happy', label: 'Happy', emoji: '😊' },
{ id: 'excited', label: 'Excited', emoji: '🤩' },
{ id: 'energetic', label: 'Energetic', emoji: '⚡' }
];
this._MOODS = [
{ emoji: '😊', label: 'Happy page' }, { emoji: '😌', label: 'Calm page' }, { emoji: '🤩', label: 'Excited page' },
{ emoji: '😴', label: 'Tired page' }, { emoji: '😰', label: 'Anxious page' }, { emoji: '😔', label: 'Low page' },
{ emoji: '😠', label: 'Irritable page' }, { emoji: '🎢', label: 'Mood swings page' }
];
}

componentDidMount() { this.scrollSel(); }
componentDidUpdate(prevProps, prevState) {
if (prevState.m !== this.state.m || prevState.y !== this.state.y || prevState.d !== this.state.d) this.scrollSel();
}
scrollSel() {
try {
setTimeout(() => {
const el = document.getElementById('strip');
if (!el) return;
const idx = this.state.d - 1;
el.scrollLeft = Math.max(0, idx * 52 - (el.clientWidth - 52) / 2 + 14);
}, 60);
} catch (e) {}
}

renderVals() {
const pad = (n) => String(n).padStart(2, '0');
const key = (y, m, d) => y + '-' + pad(m + 1) + '-' + pad(d);
const keyOf = (dt) => key(dt.getFullYear(), dt.getMonth(), dt.getDate());
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const WD = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const { y, m, d, log, diaryOpen } = this.state;
const PRED = this._PRED;
const SYMS = this._SYMS;
const EMOS = this._EMOS;
const get = (k) => log[k] || {};
const selKey = key(y, m, d);
const selDate = new Date(y, m, d);
const today = new Date();
const todayKey = keyOf(today);

const upd = (k, fn) => this.setState((s) => {
const nl = Object.assign({}, s.log);
const cur = Object.assign({ period: false, syms: [], emo: [], diary: null }, nl[k] || {});
cur.syms = (cur.syms || []).slice();
cur.emo = (cur.emo || []).slice();
cur.diary = cur.diary ? Object.assign({}, cur.diary) : null;
fn(cur);
nl[k] = cur;
return { log: nl };
});
const dEmpty = () => ({ heart: false, mood: '', feel: '', food: '', act: '', note: '' });
const setDiary = (f) => upd(selKey, (c) => { c.diary = c.diary || dEmpty(); f(c.diary); });

const ptype = (k) => (get(k).period ? 'p' : (PRED.indexOf(k) > -1 ? 'q' : ''));
const n = new Date(y, m + 1, 0).getDate();
const cells = [];
const usedSyms = SYMS.filter((s) => { for (let q = 1; q <= n; q++) { if ((get(key(y, m, q)).syms || []).indexOf(s.id) > -1) return true; } return false; });
for (let day = 1; day <= n; day++) {
const dt = new Date(y, m, day);
const k = key(y, m, day);
const pk = keyOf(new Date(y, m, day - 1));
const nk = keyOf(new Date(y, m, day + 1));
const L = get(k);
const syms = L.syms || [];
const lanes = [];
const pt = ptype(k);
const ppt = ptype(pk);
const npt = ptype(nk);
if (pt) {
const st = ppt !== pt; const en = npt !== pt;
lanes.push({ h: '7px', bg: pt === 'p' ? '#D7263D' : '#E58A9A', ml: st ? '6px' : '0', mr: en ? '6px' : '0', br: (st ? '4px' : '0') + ' ' + (en ? '4px 4px' : '0 0') + ' ' + (st ? '4px' : '0') });
} else {
lanes.push({ h: '7px', bg: 'transparent', ml: '0', mr: '0', br: '0' });
}
usedSyms.forEach((s) => {
const has = syms.indexOf(s.id) > -1;
if (!has) { lanes.push({ h: '4px', bg: 'transparent', ml: '0', mr: '0', br: '0' }); return; }
const pHas = (get(pk).syms || []).indexOf(s.id) > -1;
const nHas = (get(nk).syms || []).indexOf(s.id) > -1;
lanes.push({ h: '4px', bg: s.color, ml: pHas ? '0' : '6px', mr: nHas ? '0' : '6px', br: (pHas ? '0' : '2px') + ' ' + (nHas ? '0' : '2px') + ' ' + (nHas ? '0' : '2px') + ' ' + (pHas ? '0' : '2px') });
});
const emos = (L.emo || []).map((id) => (EMOS.filter((e) => e.id === id)[0] || {}).emoji || '').filter(Boolean);
const isSel = day === d;
const isToday = k === todayKey;
const isPred = pt === 'q';
const isP = pt === 'p';
const dairy = L.diary;
const hasDiary = !!(dairy && (dairy.feel || dairy.food || dairy.act || dairy.note || dairy.mood));
const emoText = emos.slice(0, 2).join('');
cells.push({
num: day,
dow: WD[dt.getDay()].charAt(0),
bg: isSel ? '#E8ECFB' : 'transparent',
selected: isSel,
fill: isToday ? '#1D2140' : (isP ? '#FBE3E7' : '#FFFFFF'),
shape: (isP || isPred) ? 'M22 6L40 43L4 43Z' : 'M6 25a16 21 0 1 0 32 0a16 21 0 1 0 -32 0z',
ty: (isP || isPred) ? '36' : '30',
fg: isToday ? '#FFFFFF' : (isP ? '#8F1229' : '#1D2140'),
stroke: isSel ? '#2B44A8' : (isPred ? '#C25A6E' : (isP ? '#D7263D' : '#C9CDE3')),
sw: isSel ? '3' : '1.5',
dash: isPred ? '4 3' : 'none',
lanes: lanes,
emo: emoText,
hasDiary: hasDiary,
heart: !!(dairy && dairy.heart),
aria: WD[dt.getDay()] + ' ' + day + ' ' + MONTHS[m] + (isToday ? ', today' : '') + (isP ? ', period day' : '') + (isPred ? ', predicted period' : '') + (syms.length ? ', symptoms: ' + syms.map((id) => SYMS.filter((s) => s.id === id)[0].label).join(', ') : '') + ((L.emo || []).length ? ', feeling: ' + (L.emo || []).map((id) => EMOS.filter((e) => e.id === id)[0].label).join(', ') : '') + (hasDiary ? ', has diary page' : ''),
pick: () => this.setState({ d: day })
});
}

const L = get(selKey);
const selSyms = L.syms || [];
const selEmo = L.emo || [];
const diary = L.diary || dEmpty();

// cycle line
const starts = Object.keys(log).filter((k) => log[k].period).filter((k) => {
const parts = k.split('-').map(Number);
const prev = keyOf(new Date(parts[0], parts[1] - 1, parts[2] - 1));
return !(log[prev] && log[prev].period);
}).sort();
let lastStart = null;
starts.forEach((k) => { const p = k.split('-').map(Number); const dt = new Date(p[0], p[1] - 1, p[2]); if (dt <= selDate) lastStart = dt; });
const MS = 86400000;
let cycleLine = 'No period logged before this date.';
if (lastStart) {
const diff = Math.round((Date.UTC(y, m, d) - Date.UTC(lastStart.getFullYear(), lastStart.getMonth(), lastStart.getDate())) / MS);
const cd = diff + 1;
let phase = cd <= 5 && L.period ? 'Period' : (cd <= 13 ? 'Follicular phase' : (cd <= 16 ? 'Around ovulation' : 'Luteal phase'));
if (cd > 45) { cycleLine = 'No recent period logged before this date.'; }
else { cycleLine = 'Cycle day ' + cd + ' · ' + phase; }
}
const nextDays = Math.round((Date.UTC(2026, 10, 16) - Date.UTC(2026, 9, 25)) / MS);
const nextLine = 'Next period expected around 16 Nov, in ' + nextDays + ' days. Based on your 29-day average.';

const symChips = SYMS.map((s) => {
const on = selSyms.indexOf(s.id) > -1;
return {
label: s.label, color: s.color, on: on,
bd: on ? '2px solid ' + s.color : '1px solid #D9DCEE',
bg: on ? s.color + '26' : '#FFFFFF',
fw: on ? '700' : '600',
toggle: () => upd(selKey, (c) => { const i = c.syms.indexOf(s.id); if (i > -1) c.syms.splice(i, 1); else c.syms.push(s.id); })
};
});
const emoChips = EMOS.map((e) => {
const on = selEmo.indexOf(e.id) > -1;
return {
label: e.label, emoji: e.emoji, on: on,
bd: on ? '2px solid #2B44A8' : '1px solid #D9DCEE',
bg: on ? '#E3E8FC' : '#FFFFFF',
fw: on ? '700' : '600',
toggle: () => upd(selKey, (c) => { const i = c.emo.indexOf(e.id); if (i > -1) c.emo.splice(i, 1); else c.emo.push(e.id); })
};
});
const pageMoods = this._MOODS.map((p) => {
const on = diary.mood === p.emoji;
return {
emoji: p.emoji, label: p.label, on: on,
bd: on ? '2px solid #2B44A8' : '1px solid #D9CFA6',
bg: on ? '#E3E8FC' : '#FFFFFF',
pick: () => setDiary((dd) => { dd.mood = on ? '' : p.emoji; })
};
});

const entries = Object.keys(log).filter((k) => {
const dd = log[k].diary;
return dd && (dd.feel || dd.food || dd.act || dd.note || dd.mood || dd.heart);
}).sort().reverse().slice(0, 4);
const pages = entries.map((k) => {
const p = k.split('-').map(Number);
const dt = new Date(p[0], p[1] - 1, p[2]);
const dd = log[k].diary;
const text = dd.feel || dd.note || dd.food || dd.act || 'Blank page';
return {
date: WD[dt.getDay()].slice(0, 3) + ' ' + p[2] + ' ' + MONTHS[p[1] - 1].slice(0, 3),
mood: dd.mood || '📓',
heart: !!dd.heart,
snippet: text.length > 74 ? text.slice(0, 74) + '…' : text,
pick: () => this.setState({ y: p[0], m: p[1] - 1, d: p[2] })
};
});

const periodOn = !!L.period;
return {
monthTitle: MONTHS[m] + ' ' + y,
cells: cells,
selWeekday: WD[selDate.getDay()].toUpperCase(),
selDateLabel: d + ' ' + MONTHS[m] + ' ' + y,
selShort: WD[selDate.getDay()].slice(0, 3) + ' ' + d + ' ' + MONTHS[m].slice(0, 3),
cycleLine: cycleLine,
nextLine: nextLine,
periodOn: periodOn,
periodBd: periodOn ? '2px solid #D7263D' : '1px solid #D9DCEE',
periodBg: periodOn ? '#FBE3E7' : '#FFFFFF',
periodState: periodOn ? 'Logged' : 'Tap to log',
togglePeriod: () => upd(selKey, (c) => { c.period = !c.period; }),
symChips: symChips,
emoChips: emoChips,
diaryOpen: diaryOpen,
diaryBtn: diaryOpen ? 'Close' : 'Open page',
toggleDiary: () => this.setState((s) => ({ diaryOpen: !s.diaryOpen })),
heartOn: !!diary.heart,
heartFill: diary.heart ? '#D7263D' : 'none',
toggleHeart: () => setDiary((dd) => { dd.heart = !dd.heart; }),
pageMoods: pageMoods,
dFeel: diary.feel || '',
dFood: diary.food || '',
dAct: diary.act || '',
dNote: diary.note || '',
onFeel: (e) => { const v = e.target.value; setDiary((dd) => { dd.feel = v; }); },
onFood: (e) => { const v = e.target.value; setDiary((dd) => { dd.food = v; }); },
onAct: (e) => { const v = e.target.value; setDiary((dd) => { dd.act = v; }); },
onNote: (e) => { const v = e.target.value; setDiary((dd) => { dd.note = v; }); },
pages: pages,
prevMonth: () => this.setState((s) => { const dt = new Date(s.y, s.m - 1, 1); return { y: dt.getFullYear(), m: dt.getMonth(), d: (dt.getFullYear() === 2026 && dt.getMonth() === 9) ? 25 : 1 }; }),
nextMonth: () => this.setState((s) => { const dt = new Date(s.y, s.m + 1, 1); return { y: dt.getFullYear(), m: dt.getMonth(), d: (dt.getFullYear() === 2026 && dt.getMonth() === 9) ? 25 : 1 }; }),
goToday: () => { const t = new Date(); this.setState({ y: t.getFullYear(), m: t.getMonth(), d: t.getDate() }); }
};
}
}

const model = reactive(new DesignModel({}))
const v = computed(() => model.renderVals())

try { const saved = JSON.parse(localStorage.getItem('herhealth-cycle-log-v1') || 'null'); if (saved && typeof saved === 'object' && !Array.isArray(saved)) model.state.log = saved } catch {}
const stopSave = watch(() => model.state.log, log => { try { localStorage.setItem('herhealth-cycle-log-v1', JSON.stringify(log)) } catch {} }, { deep: true })
onMounted(() => model.componentDidMount())
const stopScroll = watch(() => [model.state.y,model.state.m,model.state.d], () => model.scrollSel())
onBeforeUnmount(() => { stopSave(); stopScroll() })
</script>
<template>
<div class="design-screen screen-calendar" style="width: 390px; height: 2650px; box-sizing: border-box; background: #FCEFF8; display: flex; flex-direction: column; gap: 12px; font-family: 'Plus Jakarta Sans', system-ui, sans-serif; color: #1D2140; overflow: hidden">

<header style="display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 16px 12px 0 16px">
<h1 style="margin: 0; font-size: 26px; line-height: 32px; font-weight: 800; letter-spacing: -0.4px">Cycle</h1>
<button @click="(v.goToday)" style="min-height: 44px; padding: 0 16px; border: 1px solid #D9DCEE; border-radius: 22px; background: #FFFFFF; color: #2B44A8; font-size: 14px; font-weight: 700">Today</button>
</header>

<section style="margin: 0 10px; padding: 14px; background: #FFFFFF; border-radius: 20px; box-shadow: 0 1px 3px rgba(29,33,64,0.08)">
<div style="display: flex; align-items: center; justify-content: space-between; gap: 4px">
<button @click="(v.prevMonth)" aria-label="Previous month" style="width: 44px; height: 44px; border-radius: 22px; border: 1px solid #D9DCEE; background: #FFFFFF; display: flex; align-items: center; justify-content: center; padding: 0">
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#1D2140" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4.5L6.5 10l5.5 5.5"></path></svg>
</button>
<h2 style="margin: 0; font-size: 18px; line-height: 24px; font-weight: 800; text-align: center">{{ v.monthTitle }}</h2>
<button @click="(v.nextMonth)" aria-label="Next month" style="width: 44px; height: 44px; border-radius: 22px; border: 1px solid #D9DCEE; background: #FFFFFF; display: flex; align-items: center; justify-content: center; padding: 0">
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#1D2140" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7.5 4.5L13 10l-5.5 5.5"></path></svg>
</button>
</div>

<div style="display: flex; align-items: baseline; justify-content: space-between; gap: 8px; margin: 10px 4px 6px 4px">
<span style="font-size: 12px; line-height: 16px; color: #5A5F85">Swipe sideways to move through the month</span>
<svg width="22" height="12" viewBox="0 0 22 12" fill="none" stroke="#5A5F85" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 6h17M15 2l4 4-4 4"></path></svg>
</div>

<div id="strip" style="display: flex; overflow-x: auto; scroll-snap-type: x proximity; margin: 0 -14px; padding: 4px 14px 4px 14px">
<template v-for="c in v.cells">
<button @click="(c.pick)" :aria-label="(c.aria)" :aria-pressed="(c.selected)" :style="&quot;flex: none; width: 52px; scroll-snap-align: center; border: none; padding: 6px 0 6px 0; border-radius: 16px; background: &quot; + (c.bg) + &quot;; display: flex; flex-direction: column; align-items: center; gap: 0; color: #1D2140&quot;">
<span style="font-size: 11px; line-height: 14px; font-weight: 600; color: #5A5F85">{{ c.dow }}</span>
<svg width="44" height="50" viewBox="0 0 44 50" aria-hidden="true" style="display: block; margin-top: 2px; overflow: visible"><path :d="(c.shape)" :fill="(c.fill)" :stroke="(c.stroke)" :stroke-width="(c.sw)" :stroke-dasharray="(c.dash)" stroke-linejoin="round"></path><text x="22" :y="(c.ty)" text-anchor="middle" font-size="15" font-weight="700" :fill="(c.fg)">{{ c.num }}</text></svg>
<span style="display: flex; flex-direction: column; gap: 1px; width: 100%; margin-top: 1px">
<template v-for="l in c.lanes">
<span :style="&quot;display: block; height: &quot; + (l.h) + &quot;; background: &quot; + (l.bg) + &quot;; margin-left: &quot; + (l.ml) + &quot;; margin-right: &quot; + (l.mr) + &quot;; border-radius: &quot; + (l.br)"></span>
</template>
</span>
<span style="display: block; height: 20px; font-size: 15px; line-height: 20px; white-space: nowrap">{{ c.emo }}</span>
<span style="display: flex; align-items: center; justify-content: center; gap: 2px; height: 14px">
<template v-if="c.hasDiary">
<svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="#2B44A8" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="1.5" width="8.5" height="11" rx="1.5"></rect><path d="M3 4H1.5M3 7H1.5M3 10H1.5M6 5h3.5"></path></svg>
</template>
<template v-if="c.heart">
<svg width="12" height="12" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 14s-5.5-3.4-5.5-7.4A3.1 3.1 0 0 1 8 4.7a3.1 3.1 0 0 1 5.5 1.9C13.5 10.600 8 14 8 14z" fill="#D7263D"></path></svg>
</template>
</span>
</button>
</template>
</div>

<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 6px 14px; margin: 8px 4px 0 4px; font-size: 11px; line-height: 14px; color: #4A4F78">
<span style="display: flex; align-items: center; gap: 5px"><svg width="12" height="16" viewBox="0 0 12 16" aria-hidden="true"><ellipse cx="6" cy="8" rx="4.500" ry="6.500" fill="#FFFFFF" stroke="#8B90B5" stroke-width="1.500"></ellipse></svg>Day</span>
<span style="display: flex; align-items: center; gap: 5px"><svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M7 2L12 12H2Z" fill="#FBE3E7" stroke="#D7263D" stroke-width="1.500" stroke-linejoin="round"></path></svg>Period day</span>
<span style="display: flex; align-items: center; gap: 5px"><span style="display: block; width: 18px; height: 6px; border-radius: 3px; background: #D7263D"></span>Flow</span>
<span style="display: flex; align-items: center; gap: 5px"><span style="display: block; width: 18px; height: 6px; border-radius: 3px; background: #E58A9A"></span>Predicted</span>
<span style="display: flex; align-items: center; gap: 5px"><span style="display: block; width: 18px; height: 3px; border-radius: 2px; background: #2F6FDE"></span>Symptom streak</span>
<span style="display: flex; align-items: center; gap: 5px">
<svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="#2B44A8" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="1.5" width="8.5" height="11" rx="1.5"></rect><path d="M3 4H1.5M3 7H1.5M3 10H1.5M6 5h3.5"></path></svg>Diary page</span>
</div>
</section>

<section style="margin: 0 10px; padding: 14px; background: #FFFFFF; border-radius: 20px; box-shadow: 0 1px 3px rgba(29,33,64,0.08)">
<div style="font-size: 12px; line-height: 16px; font-weight: 700; letter-spacing: 0.3px; color: #4A4F78">{{ v.selWeekday }}</div>
<div style="font-size: 20px; line-height: 26px; font-weight: 800">{{ v.selDateLabel }}</div>
<p style="margin: 2px 0 0 0; font-size: 13px; line-height: 19px; color: #4A4F78">{{ v.cycleLine }}</p>
<p style="margin: 6px 0 0 0; padding: 8px 10px; border-radius: 10px; background: #F3F4FA; font-size: 12px; line-height: 17px; color: #4A4F78">{{ v.nextLine }}</p>
</section>

<section style="margin: 0 10px; padding: 14px; background: #FFFFFF; border-radius: 20px; box-shadow: 0 1px 3px rgba(29,33,64,0.08)">
<h3 style="margin: 0 0 10px 0; font-size: 15px; line-height: 22px; font-weight: 700">Period</h3>
<button @click="(v.togglePeriod)" :aria-pressed="(v.periodOn)" :style="&quot;display: flex; align-items: center; justify-content: space-between; gap: 10px; width: 100%; min-height: 52px; padding: 0 14px; box-sizing: border-box; border-radius: 14px; border: &quot; + (v.periodBd) + &quot;; background: &quot; + (v.periodBg) + &quot;; color: #1D2140; font-size: 14px; font-weight: 700; text-align: left&quot;">
<span style="display: flex; align-items: center; gap: 10px"><span style="display: block; width: 28px; height: 6px; border-radius: 3px; background: #D7263D"></span>Period day</span>
<span style="font-size: 12px; font-weight: 600; color: #8F1229">{{ v.periodState }}</span>
</button>
</section>

<section style="margin: 0 10px; padding: 14px; background: #FFFFFF; border-radius: 20px; box-shadow: 0 1px 3px rgba(29,33,64,0.08)">
<h3 style="margin: 0; font-size: 15px; line-height: 22px; font-weight: 700">Symptoms</h3>
<p style="margin: 0 0 10px 0; font-size: 12px; line-height: 16px; color: #5A5F85">Each symptom keeps its own colour line in the calendar. Back-to-back days join into a streak.</p>
<div style="display: flex; flex-wrap: wrap; gap: 8px">
<template v-for="s in v.symChips">
<button @click="(s.toggle)" :aria-pressed="(s.on)" :style="&quot;display: flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 14px 0 10px; border-radius: 22px; border: &quot; + (s.bd) + &quot;; background: &quot; + (s.bg) + &quot;; color: #1D2140; font-size: 13px; font-weight: &quot; + (s.fw)">
<span :style="&quot;display: block; width: 16px; height: 16px; border-radius: 8px; background: &quot; + (s.color)"></span>{{ s.label }}
</button>
</template>
</div>
</section>

<section style="margin: 0 10px; padding: 14px; background: #FFFFFF; border-radius: 20px; box-shadow: 0 1px 3px rgba(29,33,64,0.08)">
<h3 style="margin: 0; font-size: 15px; line-height: 22px; font-weight: 700">How are you feeling?</h3>
<p style="margin: 0 0 10px 0; font-size: 12px; line-height: 16px; color: #5A5F85">Pick as many as fit. The first two appear in the calendar.</p>
<div style="display: flex; flex-wrap: wrap; gap: 8px">
<template v-for="e in v.emoChips">
<button @click="(e.toggle)" :aria-pressed="(e.on)" :style="&quot;display: flex; align-items: center; gap: 6px; min-height: 44px; padding: 0 14px 0 10px; border-radius: 22px; border: &quot; + (e.bd) + &quot;; background: &quot; + (e.bg) + &quot;; color: #1D2140; font-size: 13px; font-weight: &quot; + (e.fw)">
<span style="font-size: 18px; line-height: 20px" aria-hidden="true">{{ e.emoji }}</span>{{ e.label }}
</button>
</template>
<span style="display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 12px; background: #E3E8FC">
<svg width="22" height="22" viewBox="0 0 14 14" fill="none" stroke="#2B44A8" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="1.5" width="8.5" height="11" rx="1.5"></rect><path d="M3 4H1.5M3 7H1.5M3 10H1.5M6 5h3.5"></path></svg>
</span></div>
</section>

<section style="margin: 0 10px; padding: 14px; background: #FFFFFF; border-radius: 20px; box-shadow: 0 1px 3px rgba(29,33,64,0.08)">
<div style="display: flex; align-items: center; justify-content: space-between; gap: 8px">
<div style="display: flex; align-items: center; gap: 10px">
<span style="display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 12px; background: #E3E8FC">
<svg width="22" height="22" viewBox="0 0 14 14" fill="none" stroke="#2B44A8" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="1.5" width="8.5" height="11" rx="1.5"></rect><path d="M3 4H1.5M3 7H1.5M3 10H1.5M6 5h3.5"></path></svg>
</span>
<div><h3 style="margin: 0; font-size: 15px; line-height: 22px; font-weight: 700">Diary</h3><div style="font-size: 12px; line-height: 16px; color: #5A5F85">{{ v.selShort }}</div></div>
</div>
<button @click="(v.toggleDiary)" :aria-expanded="(v.diaryOpen)" style="min-height: 44px; padding: 0 16px; border-radius: 22px; border: 1.5px solid #2B44A8; background: #FFFFFF; color: #2B44A8; font-size: 13px; font-weight: 700">{{ v.diaryBtn }}</button>
</div>

<template v-if="v.diaryOpen">
<div style="margin-top: 14px; padding: 14px; border-radius: 16px; background: #FBF8EF; border: 1px solid #EADFB8">
<div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 10px">
<span style="font-size: 13px; line-height: 18px; font-weight: 700; color: #4A3B05">Today's page</span>
<button @click="(v.toggleHeart)" :aria-pressed="(v.heartOn)" aria-label="Favourite this page" style="display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; border-radius: 22px; border: 1px solid #EADFB8; background: #FFFFFF; padding: 0">
<svg width="22" height="22" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 14s-5.5-3.4-5.5-7.4A3.1 3.1 0 0 1 8 4.7a3.1 3.1 0 0 1 5.5 1.9C13.5 10.600 8 14 8 14z" :fill="(v.heartFill)" stroke="#D7263D" stroke-width="1.2" stroke-linejoin="round"></path></svg>
</button>
</div>

<div style="font-size: 12px; line-height: 16px; font-weight: 700; color: #4A3B05; margin-bottom: 6px">Mood of this page</div>
<div style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 14px">
<template v-for="p in v.pageMoods">
<button @click="(p.pick)" :aria-pressed="(p.on)" :aria-label="(p.label)" :style="&quot;width: 44px; height: 44px; border-radius: 22px; border: &quot; + (p.bd) + &quot;; background: &quot; + (p.bg) + &quot;; font-size: 22px; line-height: 24px; padding: 0&quot;">{{ p.emoji }}</button>
</template>
</div>

<label for="d-feel" style="display: block; margin-bottom: 4px; font-size: 13px; line-height: 18px; font-weight: 700; color: #4A3B05">How are you feeling?</label>
<textarea id="d-feel" rows="3" placeholder="Body, mind, energy. Anything goes." :value="(v.dFeel)" @input="(v.onFeel)" style="display: block; width: 100%; box-sizing: border-box; margin-bottom: 12px; padding: 10px 12px; border: 1px solid #D9CFA6; border-radius: 12px; background: #FFFFFF; font-size: 14px; line-height: 20px; color: #1D2140; resize: none"></textarea>

<label for="d-food" style="display: block; margin-bottom: 4px; font-size: 13px; line-height: 18px; font-weight: 700; color: #4A3B05">What did you eat?</label>
<textarea id="d-food" rows="2" placeholder="Meals, snacks, water, caffeine" :value="(v.dFood)" @input="(v.onFood)" style="display: block; width: 100%; box-sizing: border-box; margin-bottom: 12px; padding: 10px 12px; border: 1px solid #D9CFA6; border-radius: 12px; background: #FFFFFF; font-size: 14px; line-height: 20px; color: #1D2140; resize: none"></textarea>

<label for="d-act" style="display: block; margin-bottom: 4px; font-size: 13px; line-height: 18px; font-weight: 700; color: #4A3B05">What did you get up to?</label>
<textarea id="d-act" rows="2" placeholder="Movement, work, rest, plans" :value="(v.dAct)" @input="(v.onAct)" style="display: block; width: 100%; box-sizing: border-box; margin-bottom: 12px; padding: 10px 12px; border: 1px solid #D9CFA6; border-radius: 12px; background: #FFFFFF; font-size: 14px; line-height: 20px; color: #1D2140; resize: none"></textarea>

<label for="d-note" style="display: block; margin-bottom: 4px; font-size: 13px; line-height: 18px; font-weight: 700; color: #4A3B05">Anything else you noticed?</label>
<textarea id="d-note" rows="2" placeholder="Something specific, a trigger, a question for your GP" :value="(v.dNote)" @input="(v.onNote)" style="display: block; width: 100%; box-sizing: border-box; padding: 10px 12px; border: 1px solid #D9CFA6; border-radius: 12px; background: #FFFFFF; font-size: 14px; line-height: 20px; color: #1D2140; resize: none"></textarea>
</div>
</template>
</section>

<section style="margin: 0 10px; padding: 14px 14px 6px 14px; background: #FFFFFF; border-radius: 20px; box-shadow: 0 1px 3px rgba(29,33,64,0.08)">
<h3 style="margin: 0 0 4px 0; font-size: 15px; line-height: 22px; font-weight: 700">Diary pages</h3>
<ul style="list-style: none; margin: 0; padding: 0">
<template v-for="pg in v.pages">
<li style="border-top: 1px solid #E6E8F3">
<button @click="(pg.pick)" style="display: flex; align-items: center; gap: 12px; width: 100%; min-height: 64px; padding: 8px 0; border: none; background: transparent; text-align: left; color: #1D2140">
<span style="flex: none; display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 20px; background: #FBF8EF; font-size: 22px; line-height: 24px">{{ pg.mood }}</span>
<span style="flex: 1; min-width: 0">
<span style="display: block; font-size: 13px; line-height: 18px; font-weight: 700">{{ pg.date }}</span>
<span style="display: block; font-size: 12px; line-height: 17px; color: #4A4F78">{{ pg.snippet }}</span>
</span>
<template v-if="pg.heart">
<svg width="18" height="18" viewBox="0 0 16 16" aria-label="Favourite" role="img" style="flex: none"><path d="M8 14s-5.5-3.4-5.5-7.4A3.1 3.1 0 0 1 8 4.7a3.1 3.1 0 0 1 5.5 1.9C13.5 10.600 8 14 8 14z" fill="#D7263D"></path></svg>
</template>
</button>
</li>
</template>
</ul>
</section>

<nav aria-label="Main" style="margin-top: auto; display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); padding: 8px 8px 12px 8px; background: #FFFFFF; border-top: 1px solid #E6E8F3">
<a aria-current="page" href="Cycle.dc.html" style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px; min-height: 48px; color: #2B44A8; font-size: 11px; font-weight: 800">
<span style="display: flex; align-items: center; justify-content: center; width: 48px; height: 26px; border-radius: 13px; background: #E3E8FC">
<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#2B44A8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3.5" y="5" width="15" height="13" rx="3"></rect><path d="M3.5 9.5h15M7.5 3v3M14.5 3v3"></path></svg>
</span>
Cycle
</a>
<a href="Main.dc.html" style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px; min-height: 48px; color: #4A4F78; font-size: 11px; font-weight: 600">
<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#4A4F78" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3.5 15.5l4.5-5 3.5 3 6-7"></path></svg>
Patterns
</a>
<a href="Guidance.dc.html" style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px; min-height: 48px; color: #4A4F78; font-size: 11px; font-weight: 600">
<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#4A4F78" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5.5h5.5a2 2 0 0 1 2 2V18a2 2 0 0 0-2-2H4zM18 5.5h-5.5a2 2 0 0 0-2 2"></path><path d="M18 5.5V16h-4.500"></path></svg>
Guidance
</a>
<a href="Summary.dc.html" style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px; min-height: 48px; color: #4A4F78; font-size: 11px; font-weight: 600">
<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#4A4F78" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3.5h7.500L17.500 7.500V18.500H6z"></path><path d="M9 11h5M9 14.500h5"></path></svg>
Summary
</a>
</nav>

</div>
</template>
