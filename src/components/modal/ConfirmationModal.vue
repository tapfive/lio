<template>
  <transition name="modal">
    <div class="modal-mask" @click="$emit('close')">
      <div class="modal-wrapper">
        <div class="modal-container" @click.stop>

          <div class="modal-header">
            <slot name="header"><h3>Confirm</h3></slot>
          </div>

          <div class="modal-body">
            <slot name="body"/>
          </div>

          <div class="modal-footer">
            <button class="modal-default-button" @click="confirm">
              <div v-if="!loading"><slot name="button-text">Confirm</slot></div>
              <div v-else><spinner line-fg-color="#004466" line-bg-color="#00000000" size="small"></spinner></div>
            </button>
          </div>

        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";
import Spinner from "vue-simple-spinner";

export default Vue.extend({
  name: "confirmation-modal",

  components: { Spinner },

  props: {
    showLoading: {
      required: false,
      type: Boolean
    }
  },

  data() {
    return {
      loading: false
    };
  },

  methods: {
    confirm: function() {
      this.loading = this.showLoading;
      this.$emit("confirm");
    }
  }
});
</script>

<style scoped>
@import "../../css/modal.css";
</style>
