<template>
  <div class="home">
    <div class="hours-grid">
      <div class="hours-grid__headers">
        <div class="hours-grid__headers--name">Name</div>
        <div class="hours-grid__headers--category">Category</div>
        <div class="hours-grid__headers--hours">
          <div class="hours-grid__headers--hours--title">Hours</div>
          <div class="hours-grid__headers--hours--hours">
            <p class="box">1</p>
            <p class="box">2</p>
            <p class="box">3</p>
            <p class="box">4</p>
            <p class="box">5</p>
            <p class="box">6</p>
            <p class="box">7</p>
            <p class="box">8</p>
            <p class="box">9</p>
            <p class="box">10</p>
            <p class="box">11</p>
            <p class="box">12</p>
            <p class="box">13</p>
            <p class="box">14</p>
            <p class="box">15</p>
          </div>
        </div>
        <div class="hours-grid__headers--total">Total</div>
      </div>
      <div class="hours-grid__content">
        <div class="hours-grid__content--name">Team Lead Name</div>
        <div class="hours-grid__content--category">
          <div class="box">On Rope</div>
          <div class="box">Off Rope</div>
          <div class="box">Something Else</div>
        </div>
        <div class="hours-grid__content--hours">
          <div
            v-for="i in 15"
            :key="i"
            class="hours-grid__content--hours--hour"
          >
            <div class="box">-</div>
            <div class="box">-</div>
            <div class="box">-</div>
          </div>
        </div>
        <div class="hours-grid__content--total">
          <div class="box">20</div>
          <div class="box">15</div>
          <div class="box">8</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>

<style lang="scss" scoped>
.hours-grid {
  max-width: 375px;
  display: grid;
  grid-template-columns: 100px 1fr;
  @media (min-width: 676px) {
    grid-template-columns: 1fr;
    max-width: auto;
  }
  &__headers {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 100px 100px 1fr 50px;
    @media (min-width: 676px) {
      grid-template-columns: 100px 100px 1fr 50px;
      grid-template-rows: 1fr;
    }

    &--hours {
      &--title {
        display: none;
        @media (min-width: 676px) {
          display: inline-block;
        }
      }
      &--hours {
        display: grid;
        grid-auto-flow: row;
        @media (min-width: 676px) {
          grid-auto-flow: column;
        }
      }
    }
  }
  &__content {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 100px 100px 1fr 50px;
    @media (min-width: 676px) {
      grid-template-columns: 100px 100px 1fr 50px;
      grid-template-rows: 1fr;
    }
    &--category {
      display: grid;
      grid-auto-flow: column;
      @media (min-width: 676px) {
        grid-auto-flow: row;
      }
    }
    &--hours {
      display: grid;
      grid-auto-flow: row;
      &--hour {
        display: grid;
        grid-auto-flow: column;
        @media (min-width: 676px) {
          grid-auto-flow: row;
        }
      }
      @media (min-width: 676px) {
        grid-auto-flow: column;
      }
    }
    &--total {
      display: grid;
      grid-auto-flow: column;
      @media (min-width: 676px) {
        grid-auto-flow: row;
      }
    }
  }
}
.box {
  height: 75px;
  width: 75px;
  border: solid 1px red;
  margin: auto;
  @media (min-width: 676px) {
    height: 50px;
    width: 50px;
  }
}
</style>
