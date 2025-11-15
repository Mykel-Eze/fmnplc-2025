<template>
    <div id="project-pillars">
        <section class="mt-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="content-box">
                    <div class="project-pillars-wrapper max-w-[950px]">
                        <div v-for="pillar in pillars" :key="pillar.id" class="project-pillar-row mb-12">
                            <img :src="pillar.image" :alt="pillar.title" class="sdg-img">
                            <div class="sdg-pillar-details">
                                <div class="sdg-title mb-6">{{ pillar.title }}</div>
                                <div class="sdg-description text-base">
                                    <p v-for="(desc, index) in pillar.description" :key="index" class="mb-1">
                                        {{ desc }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts" setup>
  definePageMeta({
    title: 'Project Execution Pillars'
  });
  const pillars = ref([
    {
        id: 1,
        title: 'Education',
        description: [
            'The FMN Foundation under the quality education goal seeks to establish structures and support that would drive impactful education that is beyond schooling so that beneficiaries will be well-equipped to reach their full potential in life. Projects will include scholarships, sponsorships, renovations, etc.'
        ],
        image: '/sdg/sdg-4.png'
    },
    {
        id: 2,
        title: 'Zero Hunger',
        description: [
            'Under this goal, the Group will seek to churn out impactful projects and initiatives that would ensure sustainable food systems and promote well-being for people of all ages.',
            'This includes Prize for Innovation, sponsorships, Value chain development projects, project support, partnerships, etc.'
        ],
        image: '/sdg/sdg-2.png'
    },
    {
        id: 3,
        title: 'Infrastructural Development',
        description: [
            'Under this pillar, the Foundation seeks to build infrastructures across various contact points that would better the lives of stakeholders. Projects under this tend to be a sustainable, brandable, and long-term commitment.',
            'This includes community projects like boreholes, classrooms, renovations, libraries, etc.'
        ],
        image: '/sdg/sdg-9.png'
    },
    {
        id: 4,
        title: 'Gender Equality',
        description: [
            'This pillar allows the Group to be at the forefront of driving Gender Parity and inclusivity.',
            'This includes all activities of the FMN Women Network and the initiatives by the Network.'
        ],
        image: '/sdg/sdg-5.png'
    },
    {
        id: 5,
        title: 'Climate Action',
        description: [
            'This includes all sustainable actions taken by the Group to combat climate change and impact.'
        ],
        image: '/sdg/sdg-13.png'
    },
]);
</script>

<style scoped>
.project-pillar-row {
    display: flex;
    gap: 40px;
    align-items: center;
}
.sdg-img {
    border-radius: 12px;
}
.sdg-title {
    font-size: 32px;
    color: var(--pry-color);
    font-family: var(--font-bold);
}

@media(max-width: 640px) {
    .project-pillar-row {
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: flex-start;
    }
    .sdg-img {
        max-width: 150px;
    }
}
</style>