import { reactive } from 'vue'
export const questionnaire = reactive({ solutions: ['Gentle exercise'], medications: [{name:'Cetirizine 10 mg', frequency:'Once daily',source:'Sample NHS App data'},{name:'Vitamin D 1000 IU',frequency:'Once daily',source:'Added by you'}], impact:3, notes:'' })
