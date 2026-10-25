<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import Patterns from './components/Patterns.vue'
import Questions from './components/Questions.vue'
import Summary from './components/Summary.vue'
import Symptoms from './components/Symptoms.vue'
import Overlaps from './components/Overlaps.vue'
import Guidance from './components/Guidance.vue'
import Calendar from './components/Calendar.vue'
const screens = { patterns: Patterns, questions: Questions, summary: Summary, symptoms: Symptoms, overlaps: Overlaps, guidance: Guidance, calendar: Calendar }
const readPage = () => Object.hasOwn(screens, location.hash.slice(1)) ? location.hash.slice(1) : 'patterns'
const page = ref(readPage())
const current = computed(() => screens[page.value])
function syncPage() { page.value = readPage(); window.scrollTo(0,0); document.title = `HerHealth · ${page.value[0].toUpperCase()+page.value.slice(1)}` }
function go(target) { location.hash = target }
onMounted(() => window.addEventListener('hashchange', syncPage))
onBeforeUnmount(() => window.removeEventListener('hashchange', syncPage))
const links = { 'KeyPatterns.dc.html':'overlaps','Main.dc.html':'patterns','Questions.dc.html':'questions','Symptoms.dc.html':'symptoms','Patterns.dc.html':'overlaps','Guidance.dc.html':'guidance','Calendar.dc.html':'calendar','Summary.dc.html':'summary' }
function navigate(event) {
 const link=event.target.closest('a'); if(link && links[link.getAttribute('href')]) { event.preventDefault(); go(links[link.getAttribute('href')]); return }
 const button=event.target.closest('nav button'); if (!button) return
 const text=button.textContent.trim().toLowerCase()
 if(text.includes('calendar') || text==='cycle') go('calendar')
 else if(text.includes('pattern')) go('patterns')
 else if(text.includes('guidance')) go('guidance')
 else if(text.includes('summary')) go('questions')
 else if(text.includes('profile')) go('calendar')
}
</script>
<template>
 <div class="app-shell" @click="navigate">
  <div class="brand"><a href="#patterns" aria-label="HerHealth home"><svg class="brand-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M12 2v20M2 12h20M5 5l14 14M5 19L19 5"/></svg> herhealth<span class="brand-dot">.</span></a><span>Your cycle. Your story.</span></div>
  <main><component :is="current" @navigate="go" /></main>
  <nav class="bottom-nav" aria-label="Main navigation">
   <a v-for="item in [['calendar','Cycle','▦'],['patterns','Patterns','⌁'],['guidance','Guidance','✧'],['questions','GP Summary','▤']]" :key="item[0]" :href="'#'+item[0]" :aria-current="page === item[0] || (item[0]==='questions' && page==='summary') ? 'page' : undefined"><span><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><template v-if="item[0]==='calendar'"><rect x="4" y="5" width="16" height="16" rx="3"/><path d="M8 3v4m8-4v4M4 10h16M8 14h2m4 0h2m-8 3h2"/></template><path v-else-if="item[0]==='patterns'" d="M4 18l5-6 4 3 7-10M4 6v15h17"/><template v-else-if="item[0]==='guidance'"><path d="M12 7c-3-3-7-3-9-2v14c3-1 6-1 9 1 3-2 6-2 9-1V5c-2-1-6-1-9 2v13"/></template><template v-else><path d="M6 3h8l4 4v14H6zM14 3v5h4M9 12h6m-6 4h6"/></template></svg></span>{{item[1]}}</a>
  </nav>
 </div>
</template>
