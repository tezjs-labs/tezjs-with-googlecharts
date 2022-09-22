<template>
  <div class="max-w-7xl mx-auto grid grid-cols-4">
    <div style="margin: 30px 50px">
        <label for="chartlist"><h1 class=" font-bold">Select Chart :</h1></label>
      <select
        v-model="chartvariable"
        @change="onChange($event)"
        name="chartlist"
        id="chartlist"
        class="border rounded mt-1 "
      >
        <option v-for="ct in chartList" :key="ct.id" :value="ct.id">
          {{ ct.chartName }}
        </option>
      </select>
    </div>
    <div class="col-span-3">
      <div v-for="ct in chartList" :key="ct.id">
        <div v-if="chartvariable == ct.id" id="app">
          <GChart
            :settings="ct.sett"
            :type="ct.chartName"
            :data="ct.chartData"
            :options="ct.chartOptions"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";
import { chartList } from "../domain/chart-list";
export default {
  name: "App",
  layoutName: "default",
  components: {
    GChart,
  },
  data() {
    return {
      chartvariable: 1,
      chartList: chartList,
    };
  },
  created() {
    console.log("chartlist");
    console.log(this.chartList);
  },
  methods: {
    onChange(event) {},
  },
};
</script>

<style>
#chartlist {
  background-color: rgb(217, 214, 214);
  
}
</style>
