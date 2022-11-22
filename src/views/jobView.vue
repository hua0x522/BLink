<template>
  <v-app>
    <v-row>
      <v-col>
        <v-row>
          <v-col :cols="4">
            <v-text-field
              rounded
              dense
              outlined
              :prepend-inner-icon="icons.mdiMagnify"
              class="app-bar-search flex-grow-0"
              hide-details
            ></v-text-field>
          </v-col>
          <v-col :cols="4">
            <v-select
              rounded
              dense
              outlined
              :prepend-inner-icon="icons.mdiMagnify"
              class="app-bar-search flex-grow-0"
              hide-details
              :items="keys"
            ></v-select>
          </v-col>
        </v-row>
        
        <v-row>
          <v-col :cols="4">
            <job-card
              :change="totalProfit.change"
              :color="totalProfit.color"
              :icon="totalProfit.icon"
              :statistics="totalProfit.statistics"
              :stat-title="totalProfit.statTitle"
              :subtitle="totalProfit.subtitle"
            ></job-card>
          </v-col>
    
          <v-col :cols="4">
            <job-card
              :change="totalProfit.change"
              :color="totalProfit.color"
              :icon="totalProfit.icon"
              :statistics="totalProfit.statistics"
              :stat-title="totalProfit.statTitle"
              :subtitle="totalProfit.subtitle"
            ></job-card>
          </v-col>
    
          <v-col :cols="4">
            <job-card
              :change="totalProfit.change"
              :color="totalProfit.color"
              :icon="totalProfit.icon"
              :statistics="totalProfit.statistics"
              :stat-title="totalProfit.statTitle"
              :subtitle="totalProfit.subtitle"
            ></job-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>   
  </v-app>
</template>

<script>
import { mdiPoll, mdiMagnify } from '@mdi/js'
import JobCard from '../components/JobCard.vue'
export default {
    data: function() {
        return {
          icons: {
            mdiMagnify
          },
          totalProfit: {
            statTitle: 'Total Profit',
            icon: mdiPoll,
            color: 'success',
            subtitle: 'Weekly Project',
            statistics: '$25.6k',
            change: '+42%',
          },
          keys: ['aaaa', 'bbbbb']
        }
    },
    components: {
      JobCard
    }
}
</script>

<style scoped>
.vtitle {
  font-size: 15px;
}
</style>