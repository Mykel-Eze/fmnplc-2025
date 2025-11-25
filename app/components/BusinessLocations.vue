<template>
  <section class="my-12 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="section-title">
            FMN Business Locations
        </h2>
        <div class="contact-accordion-wrapper mt-6">
            <Accordion :value="String(0)">
                <AccordionPanel v-for="(location, index) in displayedLocations" :key="index" :value="String(index)">
                    <AccordionHeader>{{ location.name }}</AccordionHeader>
                    <AccordionContent>
                        <div class="address-wrapper text-[#4b5563] text-sm">
                            <div v-if="location.registeredAddress" class="address-block mb-5">
                                <div class="address-title bold-txt">REGISTERED ADDRESS</div>
                                <div class="">
                                    {{ location.registeredAddress }}
                                </div>
                            </div>
                            <div v-if="location.factoryAddresses && location.factoryAddresses.length > 0" class="address-block">
                                <div class="address-title bold-txt">FACTORY ADDRESSES</div>
                                <ul class="list-disc pl-5">
                                    <li v-for="(address, idx) in location.factoryAddresses" :key="idx">{{ address }}</li>
                                </ul>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionPanel>
            </Accordion>
        </div>

        <div class="mt-8 text-center">
            <button
                @click="toggleShowAll"
                class="px-[24px] py-[10px] pry-bg rounded font-semibold h-12"
            >
                {{ showAll ? 'View Less Locations' : 'View More Locations' }}
            </button>
        </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

const showAll = ref(false)

const locations = [
    {
        name: 'FLOUR MILLS OF NIGERIA PLC',
        registeredAddress: '1, GOLDEN PENNY PLACE, WHARF ROAD, APAPA, LAGOS',
        factoryAddresses: [
            '79, MURTALA MUHAMMED HIGHWAY, CALABAR, CROSS-RIVER STATE, NIGERIA',
            '34, ERIC MOORE ROAD, IGANMU, LAGOS, NIGERIA',
            'PLOT 7, BLOCK B, GBAGADA INDUSTRIAL SCHEME, LAGOS.',
            'ABUJA OFFICE - PLOT 340 OBAFEMI AWOLOWO WAY​ JABI, LIFECAMP​ ABUJA'
        ]
    },
    {
        name: 'HONEYWELL FLOUR MILLS PLC',
        registeredAddress: '1, GOLDEN PENNY PLACE, WHARF ROAD, APAPA, LAGOS',
        factoryAddresses: [
            '2ND GATE BYE-PASS, NPA PREMISES, TINCAN, APAPA, LAGOS',
            'FLOURGATE FACTORY, SHAGAMU INTERCHANGE'
        ]
    },
    {
        name: 'NORTHERN NIGERIA FLOUR MILLS PLC',
        registeredAddress: '15, MAIMALARI ROAD, BOMPAI INDUSTRIAL ESTATE, KANO.'
    },
    {
        name: 'APAPA BULK TERMINAL LIMITED',
        registeredAddress: '1, GOLDEN PENNY PLACE, WHARF ROAD, APAPA, LAGOS.',
        factoryAddresses: [
            'ABTL ADMINISTRATION BUILDING, APAPA PORT COMPLEX TERMINAL A & B.'
        ]
    },
    {
        name: 'CRESTVIEW TOWERS LIMITED',
        registeredAddress: '1, GOLDEN PENNY PLACE, WHARF ROAD, APAPA, LAGOS'
    },
    {
        name: 'PREMIER FEED MILLS COMPANY LIMITED',
        registeredAddress: '1, GOLDEN PENNY PLACE, WHARF ROAD, APAPA, LAGOS',
        factoryAddresses: [
            '79, MURTALA MUHAMMED HIGHWAY, CALABAR, CROSS-RIVER STATE, NIGERIA',
            'KABOJI VILLAGE, KONTGAGORA, NIGER STATE'
        ]
    },
    {
        name: 'EASTERN PREMIER FEED MILLS LIMITED',
        registeredAddress: '1, GOLDEN PENNY PLACE, WHARF ROAD, APAPA, LAGOS',
        factoryAddresses: [
            '79, MURTALA MUHAMMED HIGHWAY, LAGOS CALABAR, CROSS-RIVER STATE, NIGERIA'
        ]
    },
    {
        name: 'GOLDEN FERTILIZER COMPANY LIMITED',
        registeredAddress: '1, GOLDEN PENNY PLACE, WHARF ROAD, APAPA, LAGOS',
        factoryAddresses: [
            '2, OLD DOCK ROAD, APAPA, LAGOS',
            'SHAO – ELEMERE ROAD, MORO LOCAL GOVT, KWARA STATE',
            'UNGUAN MUAZU INDUSTRIAL AREA, KADUNA.'
        ]
    },
    {
        name: 'GOLDEN SUGAR COMPANY LIMITED',
        registeredAddress: '1, GOLDEN PENNY PLACE, WHARF ROAD, APAPA, LAGOS',
        factoryAddresses: [
            '2, OLD DOCK ROAD, APAPA, LAGOS',
            'MOKWA LGA, NIGER STATE.',
            'SHAGAMU-BENIN EXPRESSWAY, NEAR IJEBU-ODE, OSOSA, OGUN STATE.'
        ]
    },
    {
        name: 'NIGERIAN EAGLE FLOUR MILLS LIMITED',
        registeredAddress: '1, GOLDEN PENNY PLACE, WHARF ROAD, APAPA, LAGOS',
        factoryAddresses: [
            'EAGLE FLOUR ROAD, TOLL POINT, LAGOS-IBADAN EXPRESS WAY, EAGLE FLOUR ROAD, OYO STATE, NIGERIA.'
        ]
    },
    {
        name: 'PREMIUM EDIBLE OIL PRODUCTS LIMITED',
        registeredAddress: '1, GOLDEN PENNY PLACE, WHARF ROAD, APAPA, LAGOS',
        factoryAddresses: [
            'BEHIND NIGER WEST, CHALLENGE, IBADAN, OYO STATE.',
            'IBADAN-IJEBU-ODE ROAD, IDI AYUNRE JUNCTION, IBADAN, OYO STATE.',
            'IDUMWUNOWINA QUARTERS, OVIA NORTH EAST, BENIN CITY, EDO STATE.'
        ]
    },
    {
        name: 'BEST CHICKENS LIMITED',
        registeredAddress: '1, GOLDEN PENNY PLACE, WHARF ROAD, APAPA, LAGOS',
        factoryAddresses: [
            'BEHIND NIGER WEST, CHALLENGE, IBADAN, OYO STATE.',
            'ALOMAJA VILLAGE, IDI AYUNRE ROAD, IBADAN, OYO STATE.'
        ]
    },
    {
        name: 'UPLAND GRAINS PRODUCTION COMPANY LIMITED',
        registeredAddress: '1, GOLDEN PENNY PLACE, WHARF ROAD, APAPA, LAGOS',
        factoryAddresses: [
            'MAKURDI, BENUE STATE. (CONCESSION SILO)'
        ]
    },
    {
        name: 'INDEPENDENT GRAINS HANDLING AND STORAGE LIMITED',
        registeredAddress: '1, GOLDEN PENNY PLACE, WHARF ROAD, APAPA, LAGOS',
        factoryAddresses: [
            'IBADAN, OYO STATE (CONCESSION SILO)'
        ]
    },
    {
        name: 'SERVEWELL AGRICULTURAL SERVICES LIMITED',
        registeredAddress: '1, GOLDEN PENNY PLACE, WHARF ROAD, APAPA, LAGOS',
        factoryAddresses: [
            'IBADAN, OYO STATE (CONCESSION SILO)'
        ]
    },
    {
        name: 'GOLDEN PENNY POWER LIMITED',
        registeredAddress: '1, GOLDEN PENNY PLACE, WHARF ROAD, APAPA, LAGOS'
    },
    {
        name: 'GREYWISE INVESTMENT SOLUTIONS LIMITED',
        registeredAddress: '1, GOLDEN PENNY PLACE, WHARF ROAD, APAPA, LAGOS'
    },
    {
        name: 'ECOWISE HORIZON INVESTMENT LIMITED',
        registeredAddress: '1, GOLDEN PENNY PLACE, WHARF ROAD, APAPA, LAGOS'
    },
    {
        name: 'BAGCO INDUSTRIAL SOLUTIONS LIMITED',
        registeredAddress: '1, GOLDEN PENNY PLACE, WHARF ROAD, APAPA, LAGOS'
    },
    {
        name: 'GOLDEN AIR LIMITED',
        registeredAddress: '1, GOLDEN PENNY PLACE, WHARF ROAD, APAPA, LAGOS'
    }
]

const displayedLocations = computed(() => {
    return showAll.value ? locations : locations.slice(0, 5)
})

const toggleShowAll = () => {
    showAll.value = !showAll.value
}
</script>

<style></style>
