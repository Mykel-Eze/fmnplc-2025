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
    position: 'Group Chief Executive Officer',
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
    name: 'Uchenna S. Ajo',
    position: 'Group HR & Services Director',
    image: '/team/uchenna.jpg'
  },
  {
    id: '5',
    name: 'Joseph Umolu',
    position: 'Company Secretary & Group Director, Legal Services',
    image: '/team/joseph.jpg'
  },
  {
    id: '6',
    name: 'Sadiq Usman',
    position: 'MD, FMN AGRO and Group Director, Partnerships and Strategic Engagements',
    image: '/team/sadiq.jpg'
  },
  {
    id: '7',
    name: 'Cephas Afebuameh',
    position: 'Group Director, Supply Chain',
    image: '/team/cephas.jpg'
  }
];
</script>

<style scoped>
</style>