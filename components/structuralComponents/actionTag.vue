<template>
  <div>
    <div :class="getClasses()">
      <p>
      <span>
        {{ icon }}
      </span>
        <span>
        {{ text }}
      </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "actionTag",
  data() {
    return {
      classes: "no-select actionTag"
    }
  },
  props: {
    icon: String,
    text: String,
    state: {
      default: 'default',
      type: String
    },
    cta: {
      default: false,
      type: Boolean
    },
  },
  methods:{
    getClasses(){
      if(this.cta){
        this.classes = this.classes + " actionTag-cta"
      }else{
        this.classes = this.classes + " backdrop"
      }

      if(this.state === "disabled"){
        this.classes = this.classes + " disabled"
      }

      return this.classes;
    }
  }
}
</script>

<style scoped>
@property --rotation {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

.actionTag{
  --radius: 50px;
  position: relative;
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  padding: 8px 24px;
  border: 1px solid white;
  background: rgba(255, 255, 255, 0.35);
  border-radius: var(--radius);
  box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.07);
  cursor: pointer;
}

.backdrop{
  backdrop-filter: blur(20px);
}

.actionTag:hover{
  background: rgba(0, 0, 0, 0.025);
}

.actionTag-cta {
  background: white;
}

.actionTag-cta:hover{
  background-color: #fbf2ff;
}

.actionTag-cta::before {
  --rotation: 0deg;
  content: '';
  width: calc(100% + 6px);
  height: calc(100% + 6px);
  border-radius: var(--radius);
  position: absolute;
  top: 0;
  bottom: 0;
  left: -3px;
  margin: auto;
  background: linear-gradient(var(--rotation),#FFFFFF, #DDB2E5);
  animation: rotate-border 5s linear infinite;
  z-index: -1;
}

.disabled:hover {
  cursor: not-allowed;
}

@keyframes rotate-border {
  to {
    --rotation: 360deg;
  }
}


</style>
