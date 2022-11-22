<template>
  <v-row>
    <v-col>
      <v-row>
        <v-col :cols="4">
            <person-card></person-card>
        </v-col>
      </v-row> 
    </v-col>
  </v-row>
</template>

<script>
import PersonCard from '../components/PersonCard.vue'
export default {
    components: {
        PersonCard
    }
}
</script>