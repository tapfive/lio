<template>
  <div class="portfolio-sidebar">
    <div class="sidebar-group-wrap">
      <div class="sidebar-logo">
        <svg width="26" height="33" viewBox="0 0 26 33" xmlns="http://www.w3.org/2000/svg"><title>sidebar-logo-box</title><g fill="none" fill-rule="evenodd"><path fill-opacity=".33" fill="#046" d="M13.5 19.963l11.31 6.52L13.5 33 2.19 26.482"/><path stroke="#046" stroke-width="1.17" fill="#00FFA2" d="M13.202 29.055L1 22.042V8.014L13.202 1l12.203 7.014v14.028z"/></g></svg>
        <h1>Lio</h1>
      </div>

      <div class="sidebar-user">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" xml:space="preserve" width="64" height="64"><g class="nc-icon-wrapper" fill="#00334c"><path fill="#00334c" d="M32,1C14.906,1,1,14.907,1,32s13.906,31,31,31s31-13.907,31-31S49.094,1,32,1z M20,28 c0-6.617,5.383-12,12-12s12,5.383,12,12v3c0,6.617-5.383,12-12,12s-12-5.383-12-12V28z M32,61c-6.701,0-12.873-2.291-17.789-6.122 C17.082,49.99,22.26,47,28,47h8c5.733,0,10.911,2.99,13.788,7.879C44.872,58.71,38.7,61,32,61z"></path></g></svg>

        <div class="user-name-logout">
          <h3>{{ user.name }}</h3>

          <a href="#" @click.prevent="signOut">
            <span>Sign Out</span>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" xml:space="preserve" width="16" height="16"><g class="nc-icon-wrapper" fill="#00334c"><polygon data-color="color-2" fill="#00334c" points="11,12.414 15.414,8 11,3.586 9.586,5 11.586,7 5,7 5,9 11.586,9 9.586,11 "></polygon> <path fill="#00334c" d="M12,14H3V2h9V0H2C1.448,0,1,0.448,1,1v14c0,0.552,0.448,1,1,1h10V14z"></path></g></svg>
          </a>
        </div>
      </div>


      <div class="nav-links">
        <a :class="{ selected : isSelected('overview') }" href="#" @click.prevent="changeComponent('overview')">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve" width="24" height="24"><g class="nc-icon-wrapper" fill="#00334c"><path fill="#00334c" d="M17,16c-2.951,0-5.403-0.639-7-1.712c0,0.746,0,1.238,0,1.712c0,1.657,3.134,3,7,3s7-1.343,7-3 c0-0.474,0-0.966,0-1.712C22.403,15.361,19.951,16,17,16z"></path> <path fill="#00334c" d="M17,21c-2.951,0-5.403-0.639-7-1.712c0,0.746,0,1.238,0,1.712c0,1.657,3.134,3,7,3s7-1.343,7-3 c0-0.474,0-0.966,0-1.712C22.403,20.361,19.951,21,17,21z"></path> <ellipse fill="#00334c" cx="17" cy="11" rx="7" ry="3"></ellipse> <ellipse data-color="color-2" fill="#00334c" cx="7" cy="3" rx="7" ry="3"></ellipse> <path data-color="color-2" fill="#00334c" d="M8,17.973C7.673,17.989,7.341,18,7,18c-2.951,0-5.403-0.639-7-1.712C0,17.034,0,17.526,0,18 c0,1.657,3.134,3,7,3c0.34,0,0.673-0.014,1-0.034V17.973z"></path> <path data-color="color-2" fill="#00334c" d="M8,12.973C7.673,12.989,7.341,13,7,13c-2.951,0-5.403-0.639-7-1.712C0,12.034,0,12.526,0,13 c0,1.657,3.134,3,7,3c0.34,0,0.673-0.014,1-0.034V12.973z"></path> <path data-color="color-2" fill="#00334c" d="M9.92,7.766C9.018,7.916,8.042,8,7,8C4.049,8,1.597,7.361,0,6.288C0,7.034,0,7.526,0,8 c0,1.657,3.134,3,7,3c0.341,0,0.674-0.014,1.003-0.034C8.015,9.703,8.71,8.606,9.92,7.766z"></path></g></svg>
          <span>Overview</span>
        </a>
        <a :class="{ selected : isSelected('graph') }" href="#" @click.prevent="changeComponent('graph')">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve" width="24" height="24"><g class="nc-icon-wrapper" fill="#00334c"><path fill="#00334c" d="M19.471,12.854c0.509-0.451,0.924-1.004,1.187-1.643L24,12.882V2c0-0.552-0.448-1-1-1H1C0.448,1,0,1.448,0,2 v12.4l5.989-4.658l4.045,3.034l2.314-1.544c0.263,0.629,0.676,1.174,1.178,1.62l-3.561,2.373l-3.955-2.966L0,16.934V22 c0,0.552,0.448,1,1,1h22c0.552,0,1-0.448,1-1v-6.882L19.471,12.854z M17,11.949V21h-1v-9.051c-1.14-0.232-2-1.242-2-2.449 s0.86-2.217,2-2.449V3h1v4.051c1.14,0.232,2,1.242,2,2.449S18.14,11.717,17,11.949z"></path></g></svg>
          <span>Graph</span>
        </a>
        <a :class="{ selected : isSelected('history') }" href="#" @click.prevent="changeComponent('history')">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve" width="24" height="24"><g class="nc-icon-wrapper" fill="#00334c"><path fill="#00334c" d="M17,16c-2.951,0-5.403-0.639-7-1.712c0,0.746,0,1.238,0,1.712c0,1.657,3.134,3,7,3s7-1.343,7-3 c0-0.474,0-0.966,0-1.712C22.403,15.361,19.951,16,17,16z"></path> <path fill="#00334c" d="M17,21c-2.951,0-5.403-0.639-7-1.712c0,0.746,0,1.238,0,1.712c0,1.657,3.134,3,7,3s7-1.343,7-3 c0-0.474,0-0.966,0-1.712C22.403,20.361,19.951,21,17,21z"></path> <polygon data-color="color-2" fill="#00334c" points="9,9 4,9 4,7 7,7 7,4 9,4 "></polygon> <ellipse fill="#00334c" cx="17" cy="11" rx="7" ry="3"></ellipse> <path data-color="color-2" fill="#00334c" d="M8,14c-3.309,0-6-2.691-6-6s2.691-6,6-6c2.636,0,5.001,1.763,5.752,4.286l0.002,0.007 c0.632-0.12,1.303-0.205,2.011-0.25l-0.097-0.328C14.667,2.351,11.514,0,8,0C3.589,0,0,3.589,0,8s3.589,8,8,8V14z"></path></g></svg>
          <span>History</span>
        </a>
        <a :class="{ selected : isSelected('settings') }" href="#" @click.prevent="changeComponent('settings')">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve" width="24" height="24"><g class="nc-icon-wrapper" fill="#00334c"><path fill="#00334c" d="M21,10h-1.3c-0.2-0.7-0.5-1.4-0.9-2.1l0.9-0.9c0.8-0.8,0.8-2,0-2.8h0c-0.8-0.8-2-0.8-2.8,0l-0.9,0.9 c-0.6-0.4-1.3-0.7-2.1-0.9V3c0-1.1-0.9-2-2-2s-2,0.9-2,2v1.3C9.3,4.5,8.6,4.7,7.9,5.1L7.1,4.2c-0.8-0.8-2-0.8-2.8,0h0 c-0.8,0.8-0.8,2,0,2.8l0.9,0.9C4.7,8.6,4.5,9.3,4.3,10H3c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2h1.3c0.2,0.7,0.5,1.4,0.9,2.1l-0.9,0.9 c-0.8,0.8-0.8,2,0,2.8h0c0.8,0.8,2,0.8,2.8,0l0.9-0.9c0.6,0.4,1.3,0.7,2.1,0.9V21c0,1.1,0.9,2,2,2s2-0.9,2-2v-1.3 c0.7-0.2,1.4-0.5,2.1-0.9l0.9,0.9c0.8,0.8,2,0.8,2.8,0h0c0.8-0.8,0.8-2,0-2.8l-0.9-0.9c0.4-0.6,0.7-1.3,0.9-2.1H21c1.1,0,2-0.9,2-2 C23,10.9,22.1,10,21,10z M12,15c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S13.7,15,12,15z"></path></g></svg>
          <span>Settings</span>
        </a>

      </div>
    </div>

    <div class="action-buttons">
      <button class="add-value-button" @click="showAddModal()">+ Add Balance</button>
      <button class="subtract-value-button" @click="showSubtractModal()">- Subtract</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'portfolio-sidebar',

  props: {
    user: {
      required: true
    }
  },

  data () {
    return {
      blockstack: window.blockstack,
      currentComponent: 'overview'
    };
  },

  methods: {
    signOut () {
      this.blockstack.signUserOut(window.location.href);
    },

    changeComponent (component: string) {
      this.currentComponent = component;
      this.$emit('update:current-component', component);
    },

    isSelected (component: string) {
      return this.currentComponent === component;
    },

    showAddModal: function () {
      this.$emit('show-add-modal');
    },

    showSubtractModal: function () {
      this.$emit('show-subtract-modal');
    }
  }
});
</script>

<style scoped>
.portfolio-sidebar {
  position: fixed;
  top: 0;
  left:0;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-between;
  padding-top: 24px;
  padding-bottom: 24px;
  box-sizing: border-box;
  min-height: 100vh;
  max-height: 100vh;
  width: 220px;
  height: 100vh;
  background: var(--bg-theme-color);
  /* grid-area: sidebar; */
  /* grid-column: 1 / 2; */
}

h1, h3 {
  color: var(--font-theme-color);
}

.sidebar-logo {
  display: flex;
  align-items: center;
  /* justify-content: center; */
  margin-bottom: 32px;
  margin-left: 32px;

  & > h1 {
    margin-left: 8px;
  }
}

.sidebar-user {
  display: flex;
  flex-direction: row;
   align-items: center;
  margin-bottom: 32px;
  margin-left: 32px;
  font-size: 14px;

  & .nc-icon-wrapper > path {
    fill: var(--icon-theme-color);
  }

  & .nc-icon-wrapper > ellipse {
    fill: var(--icon-theme-color);
  }

  & .nc-icon-wrapper > polygon {
    fill: var(--icon-theme-color);
  }

  & .user-name-logout > a {
    & span {
      margin-right: 8px;
    }
  }
}

a {
  display: flex;
  align-items: center;
  color: var(--font-theme-color);
  text-decoration: none;

  & span {
    margin-left: 16px;
  }
}

.nav-links {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin-left: 32px;

  & a {
    padding-top: 16px;
    padding-bottom:16px;
  }

  & .nc-icon-wrapper > path {
    fill: var(--icon-theme-color);
  }

  & .nc-icon-wrapper > ellipse {
    fill: var(--icon-theme-color);
  }

  & .nc-icon-wrapper > polygon {
    fill: var(--icon-theme-color);
  }
}

.selected {
  /* color: #FF0000; */
  /* font-weight: 600; */

  & .nc-icon-wrapper > path {
    fill: var(--green);
  }

  & .nc-icon-wrapper > ellipse {
    fill: var(--green);
  }

  & .nc-icon-wrapper > polygon {
    fill: var(--green);
  }

}

.action-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.add-value-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 62px;
  margin-bottom:16px;
  border-radius: 6px;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
}

.subtract-value-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 36px;
  border-radius: 6px;
  text-align: center;
  background-color: var(--dark-blue);
  color: white;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
}

.subtract-value-button:hover {
    background-color: var(--red);
    color: var(--dark-blue);
}
</style>