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
            <button class="modal-default-button" @click="$emit('confirm')">
              <slot name="button-text">Confirm</slot>
            </button>
          </div>

        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "confirmation-modal"
});
</script>

<style scoped>
@import "../../css/modal.css";
</style>
