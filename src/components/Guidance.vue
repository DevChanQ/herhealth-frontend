<script setup>
import { reactive, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { VueModel } from '../model.js'

class DesignModel extends VueModel {
renderVals() {
const cell = (lvl, what) => {
if (lvl === 2) return { label: what + ': common', w: '14px', h: '14px', bg: '#2B44A8', bd: '0' };
if (lvl === 1) return { label: what + ': can occur', w: '14px', h: '14px', bg: '#FFFFFF', bd: '2px solid #2B44A8' };
return { label: what + ': not typical', w: '10px', h: '2px', bg: '#9AA0C4', bd: '0' };
};
const feats = ['Pain', 'Heavy bleeds', 'Bowel', 'Mood', 'Fatigue'];
const rows = [
{ name: 'Endometriosis', v: [2, 1, 1, 1, 2] },
{ name: 'Adenomyosis', v: [2, 2, 1, 1, 1] },
{ name: 'PMDD', v: [1, 0, 1, 2, 2] },
{ name: 'PMOS', v: [0, 1, 0, 1, 1] }
];
return {
matrix: rows.map((r) => ({
name: r.name,
cells: r.v.map((lvl, i) => cell(lvl, r.name + ' ' + feats[i]))
}))
};
}
}

const reminders = reactive([true,true,true,false])
const model = reactive(new DesignModel({}))
const v = computed(() => model.renderVals())
</script>
<template>
<div class="design-screen screen-guidance" style="width: 390px; height: 7800px; box-sizing: border-box; display: flex; flex-direction: column; gap: 12px; font-family: 'Plus Jakarta Sans', system-ui, sans-serif; color: #1D2140; overflow: hidden; background-color: #FEDBF8">

<header style="display: flex; align-items: center; gap: 10px; padding: 16px 16px 4px 10px">
<a href="Main.dc.html" aria-label="Back to Patterns" style="width: 44px; height: 44px; border-radius: 22px; border: 1px solid #D9DCEE; background: #FFFFFF; display: flex; align-items: center; justify-content: center; flex: none">
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#1D2140" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4.5L6.5 10l5.5 5.5"></path></svg>
</a>
<div>
<h1 style="margin: 0; font-size: 26px; line-height: 32px; font-weight: 800; letter-spacing: -0.4px">Guidance</h1>
<p style="margin: 2px 0 0 0; font-size: 13px; line-height: 18px; color: #5A5F85">Based on your logs · 24 Oct 2026</p>
</div>
</header>

<section style="margin: 0 10px; padding: 14px; background: #FFFFFF; border-radius: 20px; box-shadow: 0 1px 3px rgba(29,33,64,0.08)">
<div style="font-size: 12px; line-height: 16px; font-weight: 700; letter-spacing: 0.3px; color: #4A4F78">WHERE YOU ARE NOW</div>
<div style="margin: 2px 0 12px 0; font-size: 18px; line-height: 24px; font-weight: 800">Day 7 · Follicular phase</div>
<div style="position: relative; padding-top: 14px">
<div style="position: absolute; top: 0; left: 22.4%; width: 0; height: 0; margin-left: -6px; border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 9px solid #1D2140"></div>
<div role="img" aria-label="29-day cycle bar. You are on day 7, early in the follicular phase." style="display: flex; height: 20px; border-radius: 10px; overflow: hidden; gap: 2px">
<div style="flex: 5 1 0; background: #B2284F"></div>
<div style="flex: 8 1 0; background: #C9CDE3"></div>
<div style="flex: 3 1 0; background: #8FD1CF"></div>
<div style="flex: 6 1 0; background: #E6E8F5"></div>
<div style="flex: 7 1 0; background: #3552C9"></div>
</div>
<div style="display: flex; justify-content: space-between; margin-top: 4px; font-size: 11px; line-height: 16px; color: #5A5F85"><span>Day 1</span><span>Day 14</span><span>Day 29</span></div>
</div>
<p style="margin: 10px 0 0 0; font-size: 13px; line-height: 19px; color: #4A4F78">Your next period is expected around <strong style="color: #1D2140">16 Nov</strong>. The week before it, from about <strong style="color: #1D2140">9 Nov</strong>, is when your symptoms have tended to peak. Dates use your 29-day average, so they can shift.</p>
</section>

<div style="margin: 12px 16px 0 16px; display: flex; align-items: center; gap: 10px">
<span style="flex: none; width: 30px; height: 30px; border-radius: 15px; background: #2B44A8; color: #FFFFFF; font-size: 14px; line-height: 30px; text-align: center; font-weight: 800">1</span>
<h2 style="margin: 0; font-size: 18px; line-height: 24px; font-weight: 800">Know your cycle phases</h2>
</div>
<p style="margin: -4px 16px 0 56px; font-size: 13px; line-height: 19px; color: #5A5F85">What each phase tends to bring, and what your own logs show.</p>

<section style="margin: 0 10px; padding: 14px; background: #FFFFFF; border-radius: 20px; box-shadow: 0 1px 3px rgba(29,33,64,0.08)">
<div style="display: flex; align-items: center; gap: 8px"><span style="width: 12px; height: 12px; border-radius: 6px; background: #B2284F"></span><h3 style="margin: 0; font-size: 15px; line-height: 22px; font-weight: 700">Period</h3><span style="font-size: 12px; color: #5A5F85">Days 1–5</span></div>
<p style="margin: 8px 0 0 0; font-size: 13px; line-height: 19px"><strong style="color: #2B44A8">What happens:</strong> The womb lining sheds and hormone levels are at their lowest.</p>
<p style="margin: 6px 0 0 0; font-size: 13px; line-height: 19px"><strong style="color: #2B44A8">Your logs:</strong> Cramps in all 6 cycles. Heaviest bleeding and clots in P2 and P4. Migraine can return at the end of the period.</p>
<p style="margin: 6px 0 0 0; font-size: 13px; line-height: 19px"><strong style="color: #2B44A8">What helps:</strong> Heat, rest, iron-rich food, and pain relief at the first sign of cramps.</p>
</section>

<section style="margin: 0 10px; padding: 14px; background: #FFFFFF; border-radius: 20px; box-shadow: 0 1px 3px rgba(29,33,64,0.08)">
<div style="display: flex; align-items: center; gap: 8px"><span style="width: 12px; height: 12px; border-radius: 6px; background: #9AA3D6"></span><h3 style="margin: 0; font-size: 15px; line-height: 22px; font-weight: 700">Follicular</h3><span style="font-size: 12px; color: #5A5F85">Days 6–13</span></div>
<p style="margin: 8px 0 0 0; font-size: 13px; line-height: 19px"><strong style="color: #2B44A8">What happens:</strong> Oestrogen rises and energy often returns.</p>
<p style="margin: 6px 0 0 0; font-size: 13px; line-height: 19px"><strong style="color: #2B44A8">Your logs:</strong> Your quietest weeks for symptoms, and positive mood climbs towards its highest.</p>
<p style="margin: 6px 0 0 0; font-size: 13px; line-height: 19px"><strong style="color: #2B44A8">What helps:</strong> A good time for harder exercise, appointments and catching up on sleep.</p>
</section>

<section style="margin: 0 10px; padding: 14px; background: #FFFFFF; border-radius: 20px; box-shadow: 0 1px 3px rgba(29,33,64,0.08)">
<div style="display: flex; align-items: center; gap: 8px"><span style="width: 12px; height: 12px; border-radius: 6px; background: #3FA7A5"></span><h3 style="margin: 0; font-size: 15px; line-height: 22px; font-weight: 700">Ovulation</h3><span style="font-size: 12px; color: #5A5F85">Around days 14–16</span></div>
<p style="margin: 8px 0 0 0; font-size: 13px; line-height: 19px"><strong style="color: #2B44A8">What happens:</strong> An egg is released. Oestrogen peaks, then dips, and progesterone starts to rise. Some people feel a twinge on one side.</p>
<p style="margin: 6px 0 0 0; font-size: 13px; line-height: 19px"><strong style="color: #2B44A8">Your logs:</strong> Mood and energy are at their best, with no regular symptoms.</p>
<p style="margin: 6px 0 0 0; font-size: 13px; line-height: 19px"><strong style="color: #2B44A8">What helps:</strong> Note any one-sided pain or spotting in your log.</p>
</section>

<section style="margin: 0 10px; padding: 14px; background: #FFFFFF; border-radius: 20px; box-shadow: 0 1px 3px rgba(29,33,64,0.08)">
<div style="display: flex; align-items: center; gap: 8px"><span style="width: 12px; height: 12px; border-radius: 6px; background: #3552C9"></span><h3 style="margin: 0; font-size: 15px; line-height: 22px; font-weight: 700">Luteal, including the week before your period</h3></div>
<div style="margin: 2px 0 0 20px; font-size: 12px; color: #5A5F85">Days 17–29</div>
<p style="margin: 8px 0 0 0; font-size: 13px; line-height: 19px"><strong style="color: #2B44A8">What happens:</strong> Hormones fall sharply just before the period. In some people this triggers migraines, low mood and anxiety.</p>
<p style="margin: 6px 0 0 0; font-size: 13px; line-height: 19px"><strong style="color: #2B44A8">Your logs:</strong> Abdominal pain, migraine, mood swings, anxiety and brain fog peak in the last 7 days in 4 of 6 cycles.</p>
<p style="margin: 6px 0 0 0; font-size: 13px; line-height: 19px"><strong style="color: #2B44A8">What helps:</strong> Protect your sleep, plan lighter days and keep your medication to hand.</p>
</section>

<div style="margin: 16px 16px 0 16px; display: flex; align-items: center; gap: 10px">
<span style="flex: none; width: 30px; height: 30px; border-radius: 15px; background: #2B44A8; color: #FFFFFF; font-size: 14px; line-height: 30px; text-align: center; font-weight: 800">2</span>
<h2 style="margin: 0; font-size: 18px; line-height: 24px; font-weight: 800">Lifestyle and symptom support</h2>
</div>
<p style="margin: -4px 16px 0 56px; font-size: 13px; line-height: 19px; color: #5A5F85">Everyday changes, then steps for each symptom you have logged.</p>

<section style="margin: 0 10px; padding: 14px; background: #FFFFFF; border-radius: 20px; box-shadow: 0 1px 3px rgba(29,33,64,0.08)">
<h3 style="margin: 0 0 4px 0; font-size: 15px; line-height: 22px; font-weight: 700">Lifestyle adaptations</h3>
<ul style="list-style: none; margin: 0; padding: 0">
<li style="padding: 10px 0; border-top: 1px solid #E6E8F3; font-size: 13px; line-height: 19px"><strong>Protect your sleep.</strong> Keep a steady bedtime, especially in the week before your period. Your sleep dropped to 6.2 h in your heaviest cycle.</li>
<li style="padding: 10px 0; border-top: 1px solid #E6E8F3; font-size: 13px; line-height: 19px"><strong>Move gently when symptoms are high.</strong> Walking, stretching or yoga before and during your period. Save harder workouts for the follicular phase.</li>
<li style="padding: 10px 0; border-top: 1px solid #E6E8F3; font-size: 13px; line-height: 19px"><strong>Eat and drink regularly.</strong> Skipped meals and dehydration can bring on migraines. Cut back on caffeine and alcohol in the week before your period if they affect your sleep or mood, and add iron-rich food after heavy periods.</li>
<li style="padding: 10px 0; border-top: 1px solid #E6E8F3; font-size: 13px; line-height: 19px"><strong>Plan ahead.</strong> Move big commitments out of the week from 9 Nov, and tell someone you trust when a rough week is coming.</li>
<li style="padding: 10px 0 0 0; border-top: 1px solid #E6E8F3; font-size: 13px; line-height: 19px"><strong>Keep logging.</strong> Daily notes in the week before and the first days of your period make your summary far more useful to a clinician.</li>
</ul>
</section>

<section style="margin: 0 10px; padding: 14px; background: #FFFFFF; border-radius: 20px; box-shadow: 0 1px 3px rgba(29,33,64,0.08)">
<h3 style="margin: 0; font-size: 15px; line-height: 22px; font-weight: 700">Migraines</h3>
<p style="margin: 2px 0 8px 0; font-size: 12px; line-height: 16px; color: #5A5F85">Before 4 of 6 periods, strongest in the week before</p>
<p style="margin: 0 0 6px 0; font-size: 13px; line-height: 19px"><strong style="color: #2B44A8">Support:</strong> Eat regularly, drink water, keep sleep steady and note what triggers an attack.</p>
<p style="margin: 0 0 6px 0; font-size: 13px; line-height: 19px"><strong style="color: #2B44A8">Medication reminder:</strong> If you have sumatriptan, keep it with you from 9 Nov. Take it at the start of a migraine headache, exactly as your prescription says.</p>
<p style="margin: 0 0 6px 0; font-size: 13px; line-height: 19px"><strong style="color: #2B44A8">Contact your GP if:</strong> migraines get more frequent or longer, sumatriptan stops working, or you need it more often than prescribed. You can ask about preventive treatment timed around your period.</p>
<p style="margin: 0; padding: 8px 10px; border-radius: 10px; background: #FBE9EF; font-size: 12px; line-height: 18px; color: #6E1530"><strong>Call 999</strong> for a sudden, severe headache unlike any before, or face drooping, arm weakness or slurred speech.</p>
</section>

<section style="margin: 0 10px; padding: 14px; background: #FFFFFF; border-radius: 20px; box-shadow: 0 1px 3px rgba(29,33,64,0.08)">
<h3 style="margin: 0; font-size: 15px; line-height: 22px; font-weight: 700">Abdominal, back and leg pain</h3>
<p style="margin: 2px 0 8px 0; font-size: 12px; line-height: 16px; color: #5A5F85">Every period, up to 4 of 5 at its worst</p>
<p style="margin: 0 0 6px 0; font-size: 13px; line-height: 19px"><strong style="color: #2B44A8">Support:</strong> Hot water bottle, rest and gentle movement. Start pain relief at the first sign, not once pain is severe.</p>
<p style="margin: 0 0 6px 0; font-size: 13px; line-height: 19px"><strong style="color: #2B44A8">Medication reminder:</strong> Follow the packet or your prescription. If you have asthma, stomach problems or take other medicines, ask a pharmacist which painkiller suits you.</p>
<p style="margin: 0 0 6px 0; font-size: 13px; line-height: 19px"><strong style="color: #2B44A8">Contact your GP if:</strong> pain is not controlled, gets worse over time or affects work and daily life. Ask about stronger or hormonal options and a gynaecology referral.</p>
<p style="margin: 0; padding: 8px 10px; border-radius: 10px; background: #FFF3CF; font-size: 12px; line-height: 18px; color: #3F2900"><strong>Urgent:</strong> if pain is severe or worse than usual and painkillers have not helped, ask for an urgent GP appointment or contact NHS 111.</p>
</section>

<section style="margin: 0 10px; padding: 14px; background: #FFFFFF; border-radius: 20px; box-shadow: 0 1px 3px rgba(29,33,64,0.08)">
<h3 style="margin: 0; font-size: 15px; line-height: 22px; font-weight: 700">Heavy bleeding, clots, dizziness and fainting</h3>
<p style="margin: 2px 0 8px 0; font-size: 12px; line-height: 16px; color: #5A5F85">Strongest in P2 and P4</p>
<p style="margin: 0 0 6px 0; font-size: 13px; line-height: 19px"><strong style="color: #2B44A8">Support:</strong> Eat iron-rich food, drink water, stand up slowly and rest if you feel light-headed. Note how often you change protection.</p>
<p style="margin: 0 0 6px 0; font-size: 13px; line-height: 19px"><strong style="color: #2B44A8">Medication reminder:</strong> Ask your GP about a blood test for iron levels, and about treatments that reduce heavy bleeding.</p>
<p style="margin: 0 0 6px 0; font-size: 13px; line-height: 19px"><strong style="color: #2B44A8">Contact your GP if:</strong> heavy bleeding affects daily life, you pass large clots repeatedly, or you often feel faint or breathless.</p>
<p style="margin: 0; padding: 8px 10px; border-radius: 10px; background: #FBE9EF; font-size: 12px; line-height: 18px; color: #6E1530"><strong>Call 999</strong> for fainting with chest pain or severe breathlessness. If heavy bleeding with dizziness will not ease, get urgent help through NHS 111.</p>
</section>

<section style="margin: 0 10px; padding: 14px; background: #FFFFFF; border-radius: 20px; box-shadow: 0 1px 3px rgba(29,33,64,0.08)">
<h3 style="margin: 0; font-size: 15px; line-height: 22px; font-weight: 700">Mood, anxiety, low mood and brain fog</h3>
<p style="margin: 2px 0 8px 0; font-size: 12px; line-height: 16px; color: #5A5F85">Peaks before 3 of 6 periods and eases once bleeding starts</p>
<p style="margin: 0 0 6px 0; font-size: 13px; line-height: 19px"><strong style="color: #2B44A8">Support:</strong> Plan quieter days, talk to someone, move gently, keep sleep steady and go easy on alcohol.</p>
<p style="margin: 0 0 6px 0; font-size: 13px; line-height: 19px"><strong style="color: #2B44A8">Medication reminder:</strong> If you are prescribed something for mood or anxiety, keep taking it as directed and do not stop suddenly. You can ask your GP about treatments for mood symptoms that follow your cycle.</p>
<p style="margin: 0 0 6px 0; font-size: 13px; line-height: 19px"><strong style="color: #2B44A8">Contact your GP if:</strong> these feelings stop you doing everyday things, or return before every period.</p>
<p style="margin: 0; padding: 8px 10px; border-radius: 10px; background: #FBE9EF; font-size: 12px; line-height: 18px; color: #6E1530"><strong>If you have thoughts of harming yourself,</strong> call Samaritans free on 116 123 at any time, or use NHS 111 and choose the mental health option. In immediate danger, call 999.</p>
</section>

<section style="margin: 0 10px; padding: 14px; background: #FFFFFF; border-radius: 20px; box-shadow: 0 1px 3px rgba(29,33,64,0.08)">
<h3 style="margin: 0; font-size: 15px; line-height: 22px; font-weight: 700">Bowel changes and nausea</h3>
<p style="margin: 2px 0 8px 0; font-size: 12px; line-height: 16px; color: #5A5F85">Bowel changes at the start of 4 of 7 periods</p>
<p style="margin: 0 0 6px 0; font-size: 13px; line-height: 19px"><strong style="color: #2B44A8">Support:</strong> Fluids, fibre and small regular meals. Plain snacks can settle nausea.</p>
<p style="margin: 0 0 6px 0; font-size: 13px; line-height: 19px"><strong style="color: #2B44A8">Medication reminder:</strong> Ask a pharmacist about anti-sickness or bowel remedies that suit your other medicines.</p>
<p style="margin: 0; font-size: 13px; line-height: 19px"><strong style="color: #2B44A8">Contact your GP if:</strong> bowel symptoms return with every period, or you see blood when you poo. Ask whether endometriosis should be looked into.</p>
</section>

<section style="margin: 0 10px; padding: 14px; background: #FFFFFF; border-radius: 20px; box-shadow: 0 1px 3px rgba(29,33,64,0.08)">
<h3 style="margin: 0 0 2px 0; font-size: 15px; line-height: 22px; font-weight: 700">Medication reminders</h3>
<p style="margin: 0 0 6px 0; font-size: 12px; line-height: 17px; color: #5A5F85">Sample reminder preferences · No notifications are scheduled</p>
<ul style="list-style: none; margin: 0; padding: 0">
<li style="display: flex; align-items: center; justify-content: space-between; gap: 8px; min-height: 64px; border-top: 1px solid #E6E8F3">
<div><div style="font-size: 14px; line-height: 20px; font-weight: 700">Sumatriptan · migraine</div><div style="font-size: 12px; line-height: 17px; color: #5A5F85">Keep with you from 9 Nov. Take at migraine onset.</div></div>
<button @click="reminders[0]=!reminders[0]" :class="{ 'reminder-off': !reminders[0] }" role="switch" :aria-checked="reminders[0]" aria-label="Sumatriptan reminder" style="flex: none; width: 56px; height: 44px; border: none; background: transparent; padding: 0; display: flex; align-items: center; justify-content: center"><span style="display: flex; align-items: center; justify-content: flex-end; width: 48px; height: 28px; box-sizing: border-box; padding: 2px; border-radius: 14px; background: #3552C9"><span style="width: 24px; height: 24px; border-radius: 12px; background: #FFFFFF"></span></span></button>
</li>
<li style="display: flex; align-items: center; justify-content: space-between; gap: 8px; min-height: 64px; border-top: 1px solid #E6E8F3">
<div><div style="font-size: 14px; line-height: 20px; font-weight: 700">Pain relief · cramps</div><div style="font-size: 12px; line-height: 17px; color: #5A5F85">At the first sign of period pain, from about 16 Nov.</div></div>
<button @click="reminders[1]=!reminders[1]" :class="{ 'reminder-off': !reminders[1] }" role="switch" :aria-checked="reminders[1]" aria-label="Pain relief reminder" style="flex: none; width: 56px; height: 44px; border: none; background: transparent; padding: 0; display: flex; align-items: center; justify-content: center"><span style="display: flex; align-items: center; justify-content: flex-end; width: 48px; height: 28px; box-sizing: border-box; padding: 2px; border-radius: 14px; background: #3552C9"><span style="width: 24px; height: 24px; border-radius: 12px; background: #FFFFFF"></span></span></button>
</li>
<li style="display: flex; align-items: center; justify-content: space-between; gap: 8px; min-height: 64px; border-top: 1px solid #E6E8F3">
<div><div style="font-size: 14px; line-height: 20px; font-weight: 700">Cetirizine · daily</div><div style="font-size: 12px; line-height: 17px; color: #5A5F85">Every morning. From your NHS App.</div></div>
<button @click="reminders[2]=!reminders[2]" :class="{ 'reminder-off': !reminders[2] }" role="switch" :aria-checked="reminders[2]" aria-label="Cetirizine reminder" style="flex: none; width: 56px; height: 44px; border: none; background: transparent; padding: 0; display: flex; align-items: center; justify-content: center"><span style="display: flex; align-items: center; justify-content: flex-end; width: 48px; height: 28px; box-sizing: border-box; padding: 2px; border-radius: 14px; background: #3552C9"><span style="width: 24px; height: 24px; border-radius: 12px; background: #FFFFFF"></span></span></button>
</li>
<li style="display: flex; align-items: center; justify-content: space-between; gap: 8px; min-height: 64px; border-top: 1px solid #E6E8F3">
<div><div style="font-size: 14px; line-height: 20px; font-weight: 700">Vitamin D · daily</div><div style="font-size: 12px; line-height: 17px; color: #5A5F85">Every morning. Added by you.</div></div>
<button @click="reminders[3]=!reminders[3]" :class="{ 'reminder-off': !reminders[3] }" role="switch" :aria-checked="reminders[3]" aria-label="Vitamin D reminder" style="flex: none; width: 56px; height: 44px; border: none; background: transparent; padding: 0; display: flex; align-items: center; justify-content: center"><span style="display: flex; align-items: center; justify-content: flex-start; width: 48px; height: 28px; box-sizing: border-box; padding: 2px; border-radius: 14px; background: #9AA0C4"><span style="width: 24px; height: 24px; border-radius: 12px; background: #FFFFFF"></span></span></button>
</li>
</ul>
<p style="margin: 6px 0 0 0; font-size: 12px; line-height: 17px; color: #5A5F85">Reminders only. Take medicines as prescribed, and check the leaflet or ask a pharmacist if unsure.</p>
</section>

<section style="margin: 0 10px; padding: 14px; background: #E3E8FC; border-radius: 20px">
<h3 style="margin: 0 0 6px 0; font-size: 15px; line-height: 22px; font-weight: 700; color: #1D2140">Not getting enough relief? Ask for more.</h3>
<p style="margin: 0 0 8px 0; font-size: 13px; line-height: 19px; color: #1D2140">It is fine to ask for a medication review if your treatment is not controlling symptoms or the side effects bother you. Take these to your appointment:</p>
<ul style="margin: 0 0 12px 0; padding: 0 0 0 20px; font-size: 13px; line-height: 20px; color: #1D2140">
<li>Your summary from this app</li>
<li>What you have already tried, and how well it worked</li>
<li>How many days each cycle are affected</li>
<li>What you most want help with</li>
</ul>
<div style="display: flex; flex-direction: column; gap: 8px">
<a href="Summary.dc.html" style="display: flex; align-items: center; justify-content: center; min-height: 52px; padding: 0 16px; box-sizing: border-box; border-radius: 16px; background: #2B44A8; color: #FFFFFF; font-size: 14px; line-height: 20px; font-weight: 700; text-align: center">Share my summary with my GP</a>
<a href="https://www.nhs.uk/nhs-app/" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: center; gap: 8px; min-height: 52px; padding: 0 16px; box-sizing: border-box; border-radius: 16px; background: #FFFFFF; border: 1.5px solid #2B44A8; color: #2B44A8; font-size: 14px; line-height: 20px; font-weight: 700; text-align: center">Order repeat medicines in the NHS App
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#2B44A8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex: none"><path d="M5 11l6-6M6 5h5v5"></path></svg></a>
</div>
</section>

<section style="margin: 0 10px; padding: 14px; background: #FFFFFF; border-radius: 20px; box-shadow: 0 1px 3px rgba(29,33,64,0.08)">
<h3 style="margin: 0 0 8px 0; font-size: 15px; line-height: 22px; font-weight: 700">When to get help</h3>
<div style="padding: 10px 0; border-top: 1px solid #E6E8F3">
<span style="display: inline-block; padding: 3px 8px; border-radius: 8px; background: #E3E8FC; color: #2B44A8; font-size: 11px; line-height: 16px; font-weight: 700">Book a GP appointment</span>
<p style="margin: 6px 0 0 0; font-size: 13px; line-height: 19px">Symptoms are getting worse from cycle to cycle, periods are heavier, more painful or less regular, medicines are not working, you have pain during or after sex, or you bleed between periods or after sex.</p>
</div>
<div style="padding: 10px 0; border-top: 1px solid #E6E8F3">
<span style="display: inline-block; padding: 3px 8px; border-radius: 8px; background: #FFF3CF; color: #3F2900; font-size: 11px; line-height: 16px; font-weight: 700">Urgent GP appointment or NHS 111</span>
<p style="margin: 6px 0 0 0; font-size: 13px; line-height: 19px">Severe pain, or pain worse than usual, that painkillers have not helped. Heavy bleeding with dizziness that will not ease.</p>
</div>
<div style="padding: 10px 0 0 0; border-top: 1px solid #E6E8F3">
<span style="display: inline-block; padding: 3px 8px; border-radius: 8px; background: #FBE9EF; color: #6E1530; font-size: 11px; line-height: 16px; font-weight: 700">Call 999</span>
<p style="margin: 6px 0 0 0; font-size: 13px; line-height: 19px">Collapse, or fainting with chest pain or severe breathlessness. A sudden, severe headache or stroke signs. Anyone in immediate danger.</p>
</div>
</section>

<div style="margin: 16px 16px 0 16px; display: flex; align-items: center; gap: 10px">
<span style="flex: none; width: 30px; height: 30px; border-radius: 15px; background: #2B44A8; color: #FFFFFF; font-size: 14px; line-height: 30px; text-align: center; font-weight: 800">3</span>
<h2 style="margin: 0; font-size: 18px; line-height: 24px; font-weight: 800; font-family: Inter, sans-serif; color: #5c3d2b">Menstrual conditions and mental health</h2>
</div>
<p style="margin: -4px 16px 0 56px; font-size: 13px; line-height: 19px; color: #5A5F85">These conditions share symptoms and can overlap, which is one reason diagnosis often takes time. Your logs cannot diagnose anything, but they can help you start the conversation.</p>

<section style="margin: 0 10px; padding: 14px; background: #FFFFFF; border-radius: 20px; box-shadow: 0 1px 3px rgba(29,33,64,0.08)">
<h3 style="margin: 0; font-size: 15px; line-height: 22px; font-weight: 700">Endometriosis</h3>
<p style="margin: 6px 0 8px 0; font-size: 13px; line-height: 19px">Tissue similar to the womb lining grows in other parts of the body. There is no cure, but treatment can manage symptoms.</p>
<p style="margin: 0 0 6px 0; font-size: 13px; line-height: 19px"><strong style="color: #2B44A8">Common signs:</strong> severe period pain, heavy periods, lower tummy and back pain, pain when you poo or pee or during and after sex, extreme tiredness, and difficulty getting pregnant.</p>
<div style="margin: 10px 0 6px 0; font-size: 11px; line-height: 14px; font-weight: 700; letter-spacing: 0.3px; color: #4A4F78">TYPES, BY WHERE IT GROWS</div>
<ul style="list-style: none; margin: 0; padding: 0">
<li style="padding: 8px 0; border-top: 1px solid #E6E8F3; font-size: 13px; line-height: 19px"><strong>Superficial.</strong> On the lining of the pelvis.</li>
<li style="padding: 8px 0; border-top: 1px solid #E6E8F3; font-size: 13px; line-height: 19px"><strong>Ovarian.</strong> On or in the ovaries, sometimes forming cysts called endometriomas.</li>
<li style="padding: 8px 0; border-top: 1px solid #E6E8F3; font-size: 13px; line-height: 19px"><strong>Deep.</strong> Grows into deeper tissue and can involve the bowel, bladder or the tissues around the womb.</li>
<li style="padding: 8px 0; border-top: 1px solid #E6E8F3; font-size: 13px; line-height: 19px"><strong>Bowel.</strong> Can cause painful bowel movements, diarrhoea or constipation, bloating, and sometimes blood when you poo around your period.</li>
<li style="padding: 8px 0 0 0; border-top: 1px solid #E6E8F3; font-size: 13px; line-height: 19px"><strong>Other sites.</strong> Less often the chest, or surgical scars.</li>
</ul>
<p style="margin: 8px 0 0 0; font-size: 12px; line-height: 17px; color: #5A5F85">Diagnosis can take a long time. It may involve an examination, an ultrasound or MRI scan, and sometimes keyhole surgery (laparoscopy).</p>
</section>

<section style="margin: 0 10px; padding: 14px; background: #FFFFFF; border-radius: 20px; box-shadow: 0 1px 3px rgba(29,33,64,0.08)">
<h3 style="margin: 0; font-size: 15px; line-height: 22px; font-weight: 700">Adenomyosis</h3>
<p style="margin: 6px 0 8px 0; font-size: 13px; line-height: 19px">Womb lining tissue grows into the muscle wall of the womb. It is most often diagnosed over 35, but can affect anyone who has periods.</p>
<p style="margin: 0 0 6px 0; font-size: 13px; line-height: 19px"><strong style="color: #2B44A8">Common signs:</strong> very painful periods, heavy bleeding, pelvic pain at any point in the cycle, bloating or fullness, and pain during or after sex. Some people have no symptoms.</p>
<p style="margin: 0; font-size: 12px; line-height: 17px; color: #5A5F85">It can occur alongside endometriosis, and the two share many symptoms.</p>
</section>

<section style="margin: 0 10px; padding: 14px; background: #FFFFFF; border-radius: 20px; box-shadow: 0 1px 3px rgba(29,33,64,0.08)">
<h3 style="margin: 0; font-size: 15px; line-height: 22px; font-weight: 700">PMDD (premenstrual dysphoric disorder)</h3>
<p style="margin: 6px 0 8px 0; font-size: 13px; line-height: 19px">A severe form of premenstrual symptoms. Emotional and physical symptoms build in the week or two before a period and ease within a few days of bleeding starting.</p>
<p style="margin: 0 0 6px 0; font-size: 13px; line-height: 19px"><strong style="color: #2B44A8">Common signs:</strong> strong mood swings, irritability, anxiety, low mood or hopelessness, brain fog, tiredness, sleep changes, and physical symptoms such as bloating and aches.</p>
<p style="margin: 0 0 8px 0; font-size: 13px; line-height: 19px"><strong style="color: #2B44A8">How it is told apart:</strong> Mild premenstrual symptoms are called PMS. PMDD is more severe and disrupts daily life. It is usually confirmed by rating symptoms daily across at least two cycles. Anxiety or depression that is always present but worsens before a period is a different pattern, called premenstrual exacerbation.</p>
<p style="margin: 0; padding: 8px 10px; border-radius: 10px; background: #FBE9EF; font-size: 12px; line-height: 18px; color: #6E1530">Some people with PMDD have thoughts of self-harm or suicide in the days before a period. This is a symptom, not a weakness. Please reach out to the support below.</p>
</section>

<section style="margin: 0 10px; padding: 14px; background: #FFFFFF; border-radius: 20px; box-shadow: 0 1px 3px rgba(29,33,64,0.08)">
<h3 style="margin: 0; font-size: 15px; line-height: 22px; font-weight: 700">PMOS (previously PCOS)</h3>
<p style="margin: 6px 0 8px 0; font-size: 13px; line-height: 19px">A hormonal and metabolic condition affecting the ovaries.</p>
<p style="margin: 0; font-size: 13px; line-height: 19px"><strong style="color: #2B44A8">Common signs:</strong> irregular or infrequent periods, acne, excess hair growth, and weight or blood sugar changes. It is also linked with anxiety, depression and sleep problems. Your regular 27–31 day cycles make it less likely to explain your pattern, but only a clinician can say.</p>
</section>

<section style="margin: 0 10px; padding: 14px; border-radius: 20px; box-shadow: 0 1px 3px rgba(29,33,64,0.08); background-color: #ffeaea">
<h3 style="margin: 0 0 2px 0; font-size: 15px; line-height: 22px; font-weight: 700">How they overlap</h3>
<p style="margin: 0 0 10px 0; font-size: 12px; line-height: 17px; color: #5A5F85">A general guide to which features each condition can involve. Not diagnostic.</p>
<div style="display: grid; grid-template-columns: 92px repeat(5, minmax(0, 1fr)); column-gap: 4px; align-items: end; padding-bottom: 6px; font-size: 11px; line-height: 13px; font-weight: 700; color: #4A4F78; text-align: center">
<div></div><div>Pain</div><div>Heavy bleeds</div><div>Bowel</div><div>Mood</div><div>Fatigue</div>
</div>
<template v-for="r in v.matrix">
<div style="display: grid; grid-template-columns: 92px repeat(5, minmax(0, 1fr)); column-gap: 4px; align-items: center; min-height: 44px; border-top: 1px solid #E6E8F3">
<div style="font-size: 13px; line-height: 17px; font-weight: 700">{{ r.name }}</div>
<template v-for="c in r.cells">
<div style="display: flex; align-items: center; justify-content: center"><span role="img" :aria-label="(c.label)" :style="&quot;display: block; width: &quot; + (c.w) + &quot;; height: &quot; + (c.h) + &quot;; box-sizing: border-box; border-radius: 7px; background: &quot; + (c.bg) + &quot;; border: &quot; + (c.bd)"></span></div>
</template>
</div>
</template>
<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 4px 14px; margin-top: 10px; font-size: 11px; line-height: 14px; color: #4A4F78">
<span style="display: flex; align-items: center; gap: 5px"><span style="width: 14px; height: 14px; border-radius: 7px; background: #2B44A8"></span>Common</span>
<span style="display: flex; align-items: center; gap: 5px"><span style="width: 14px; height: 14px; box-sizing: border-box; border-radius: 7px; background: #FFFFFF; border: 2px solid #2B44A8"></span>Can occur</span>
<span style="display: flex; align-items: center; gap: 5px"><span style="width: 10px; height: 2px; background: #9AA0C4"></span>Not typical</span>
</div>
<p style="margin: 10px 0 0 0; font-size: 12px; line-height: 17px; color: #4A4F78">Endometriosis and adenomyosis can occur together, and mood symptoms appear across all of these conditions, which is why the full picture matters.</p>
</section>

<section style="margin: 0 10px; padding: 14px; border-radius: 20px; box-shadow: 0 1px 3px rgba(29,33,64,0.08); background-color: #FFEAEA">
<h3 style="margin: 0 0 6px 0; font-size: 15px; line-height: 22px; font-weight: 700">Your cycle and your mental health</h3>
<ul style="margin: 0; padding: 0 0 0 20px; font-size: 13px; line-height: 20px">
<li style="margin-bottom: 4px">Hormone shifts before a period can affect mood, anxiety and thinking, and in PMDD they can be severe.</li>
<li style="margin-bottom: 4px">Living with long-term pain, tiredness and poor sleep wears people down. The NHS notes that endometriosis can cause low mood and anxiety.</li>
<li style="margin-bottom: 4px">Waiting a long time for a diagnosis, or feeling dismissed, can add to the strain.</li>
<li>Feeling this way is not your fault, and support is available.</li>
</ul>
</section>

<section style="margin: 0 10px; padding: 6px 0 4px 0">
<h3 style="margin: 0 0 2px 4px; font-size: 15px; line-height: 22px; font-weight: 700; color: #4A2E1F">Support and NHS services</h3>
<p style="margin: 0 0 12px 4px; font-size: 12px; line-height: 17px; color: #5C3D2B">Links open in a new tab. Helplines are free from UK phones.</p>
<ul style="list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px">

<li style="margin-left: 0; width: 270px; max-width: 100%"><a href="https://www.nhs.uk/service-search/mental-health/find-an-nhs-talking-therapies-service/" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: space-between; gap: 10px; min-height: 64px; padding: 12px 14px; box-sizing: border-box; border-radius: 18px; background: #F8D9D9; color: #4A2E1F; box-shadow: 0 1px 2px rgba(74,46,31,0.10)">
<span><span style="display: block; font-size: 14px; line-height: 20px; font-weight: 700; color: #4A2E1F">NHS Talking Therapies</span><span style="display: block; font-size: 12px; line-height: 17px; color: #5C3D2B">NHS support for anxiety and low mood in England. You can refer yourself.</span></span>
<svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="#4A2E1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex: none"><path d="M5 11l6-6M6 5h5v5"></path></svg></a></li>

<li style="margin-left: 70px; width: 280px; max-width: calc(100% - 70px)"><a href="https://111.nhs.uk/" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: space-between; gap: 10px; min-height: 64px; padding: 12px 14px; box-sizing: border-box; border-radius: 18px; background: #D8E8D4; color: #4A2E1F; box-shadow: 0 1px 2px rgba(74,46,31,0.10)">
<span><span style="display: block; font-size: 14px; line-height: 20px; font-weight: 700; color: #4A2E1F">NHS 111</span><span style="display: block; font-size: 12px; line-height: 17px; color: #5C3D2B">Urgent help at any time. Call 111 and choose the mental health option.</span></span>
<svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="#4A2E1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex: none"><path d="M5 11l6-6M6 5h5v5"></path></svg></a></li>

<li style="margin-left: 20px; width: 300px; max-width: calc(100% - 20px)"><a href="https://www.samaritans.org/" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: space-between; gap: 10px; min-height: 64px; padding: 12px 14px; box-sizing: border-box; border-radius: 18px; background: #F9E8BE; color: #4A2E1F; box-shadow: 0 1px 2px rgba(74,46,31,0.10)">
<span><span style="display: block; font-size: 14px; line-height: 20px; font-weight: 700; color: #4A2E1F">Samaritans · 116 123</span><span style="display: block; font-size: 12px; line-height: 17px; color: #5C3D2B">Someone to talk to, any time, day or night.</span></span>
<svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="#4A2E1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex: none"><path d="M5 11l6-6M6 5h5v5"></path></svg></a></li>

<li style="margin-left: 90px; width: 260px; max-width: calc(100% - 90px)"><a href="https://giveusashout.org/" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: space-between; gap: 10px; min-height: 64px; padding: 12px 14px; box-sizing: border-box; border-radius: 18px; background: #E4DCF3; color: #4A2E1F; box-shadow: 0 1px 2px rgba(74,46,31,0.10)">
<span><span style="display: block; font-size: 14px; line-height: 20px; font-weight: 700; color: #4A2E1F">Shout · text 85258</span><span style="display: block; font-size: 12px; line-height: 17px; color: #5C3D2B">Free text support, any time. Text SHOUT to 85258.</span></span>
<svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="#4A2E1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex: none"><path d="M5 11l6-6M6 5h5v5"></path></svg></a></li>

<li style="margin-left: 8px; width: 320px; max-width: calc(100% - 8px)"><a href="https://mind.org.uk/information-support/types-of-mental-health-problems/premenstrual-dysphoric-disorder-pmdd/useful-contacts/?o=54651" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: space-between; gap: 10px; min-height: 64px; padding: 12px 14px; box-sizing: border-box; border-radius: 18px; background: #FADCC4; color: #4A2E1F; box-shadow: 0 1px 2px rgba(74,46,31,0.10)">
<span><span style="display: block; font-size: 14px; line-height: 20px; font-weight: 700; color: #4A2E1F">Mind · PMDD contacts</span><span style="display: block; font-size: 12px; line-height: 17px; color: #5C3D2B">Mental health information and a list of PMDD support organisations.</span></span>
<svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="#4A2E1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex: none"><path d="M5 11l6-6M6 5h5v5"></path></svg></a></li>

<li style="margin-left: 56px; width: 290px; max-width: calc(100% - 56px)"><a href="https://www.endometriosis-uk.org/" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: space-between; gap: 10px; min-height: 64px; padding: 12px 14px; box-sizing: border-box; border-radius: 18px; background: #D3E6F0; color: #4A2E1F; box-shadow: 0 1px 2px rgba(74,46,31,0.10)">
<span><span style="display: block; font-size: 14px; line-height: 20px; font-weight: 700; color: #4A2E1F">Endometriosis UK · 0808 808 2227</span><span style="display: block; font-size: 12px; line-height: 17px; color: #5C3D2B">Helpline, information and support groups.</span></span>
<svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="#4A2E1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex: none"><path d="M5 11l6-6M6 5h5v5"></path></svg></a></li>

<li style="margin-left: 30px; width: 300px; max-width: calc(100% - 30px)"><a href="https://iapmd.org/" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: space-between; gap: 10px; min-height: 64px; padding: 12px 14px; box-sizing: border-box; border-radius: 18px; background: #F2D2E1; color: #4A2E1F; box-shadow: 0 1px 2px rgba(74,46,31,0.10)">
<span><span style="display: block; font-size: 14px; line-height: 20px; font-weight: 700; color: #4A2E1F">IAPMD</span><span style="display: block; font-size: 12px; line-height: 17px; color: #5C3D2B">International PMDD support, resources and peer community.</span></span>
<svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="#4A2E1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex: none"><path d="M5 11l6-6M6 5h5v5"></path></svg></a></li>

</ul>
</section>

<section style="margin: 0 10px; padding: 14px; background: #E3E8FC; border-radius: 20px">
<h3 style="margin: 0 0 6px 0; font-size: 15px; line-height: 22px; font-weight: 700; color: #1D2140">Ask the NHS for help</h3>
<p style="margin: 0 0 12px 0; font-size: 13px; line-height: 19px; color: #1D2140">You can refer yourself for talking therapies, and ask your GP to refer you to a gynaecology or specialist endometriosis service if symptoms are not improving or are getting worse.</p>
<div style="display: flex; flex-direction: column; gap: 8px">
<a href="https://www.nhs.uk/service-search/mental-health/find-an-nhs-talking-therapies-service/" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: center; gap: 8px; min-height: 52px; padding: 0 16px; box-sizing: border-box; border-radius: 16px; background: #2B44A8; color: #FFFFFF; font-size: 14px; line-height: 20px; font-weight: 700; text-align: center">Refer myself to NHS Talking Therapies
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex: none"><path d="M5 11l6-6M6 5h5v5"></path></svg></a>
<a href="Summary.dc.html" style="display: flex; align-items: center; justify-content: center; min-height: 52px; padding: 0 16px; box-sizing: border-box; border-radius: 16px; background: #FFFFFF; border: 1.5px solid #2B44A8; color: #2B44A8; font-size: 14px; line-height: 20px; font-weight: 700; text-align: center">Share my summary to ask my GP for a referral</a>
</div>
</section>

<div style="margin-top: auto; padding: 14px 16px 24px 16px; background: #FFFFFF; border-top: 1px solid #E6E8F3">
<p style="margin: 0 0 6px 0; font-size: 13px; line-height: 19px; font-weight: 700; color: #6E1530">In an emergency or immediate danger, call 999.</p>
<p style="margin: 0; font-size: 12px; line-height: 17px; color: #5A5F85">This guidance is general information based on your logs. It is not medical advice or a diagnosis. Speak to your GP or pharmacist about your own treatment.</p>
</div>

</div>
</template>
