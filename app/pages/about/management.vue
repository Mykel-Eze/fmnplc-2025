<template>
  <div id="management-team-page">
    <!-- Management Team Grid -->
    <TeamMembersGrid :team-members="managementTeam" />
  </div>
</template>

<script lang="ts" setup>
const managementTeam = [
  {
    id: '1',
    name: 'Omoboyede Olusanya',
    position: 'Group Managing Director & CEO',
    image: '/team/omoboyede.jpg'
  },
  {
    id: '2',
    name: 'Devlin Hainsworth',
    position: 'MD Food Division',
    image: '/team/devlin.jpg'
  },
  {
    id: '3',
    name: 'Nassib Raffoul',
    position: 'MD Honeywell Flourmills',
    image: '/team/nassib.jpg'
  },
  {
    id: '4',
    name: 'Stoney Su',
    position: 'MD Agro-Allied Division',
    image: '/team/stoney.jpg'
  },
  {
    id: '5',
    name: 'Anders Kristiansson',
    position: 'Group Chief Finance Officer',
    image: '/team/anders.jpg'
  },
  {
    id: '6',
    name: 'Uchenna S. Ajo',
    position: 'Group HR & Services Director',
    image: '/team/uchenna.jpg'
  },
  {
    id: '7',
    name: 'Joseph Umolu',
    position: 'Company Secretary & Group Director, Legal Services',
    image: '/team/joseph.jpg'
  },
  {
    id: '8',
    name: 'Bola Adeeko',
    position: 'Group Director, Special Projects',
    image: '/team/bola.jpg'
  },
  {
    id: '9',
    name: 'Sadiq Usman',
    position: 'Group Director, Strategy & Stakeholder Relations',
    image: '/team/sadiq.jpg'
  },
  {
    id: '10',
    name: 'Cephas Afebuameh',
    position: 'Group Director, Supply Chain',
    image: '/team/cephas.jpg'
  }
];
</script>

<style scoped>
</style>