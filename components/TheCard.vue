<template>
  <div class="ui-card-block">
    <div v-if="card.thumb" class="ui-card-thumb-block">
      <img
        :src="thumbComputed"
        :alt="card.h1"
        class="ui-card-thumb"
        loading="lazy"
        width="345"
        height="194"
      />
    </div>

    <div class="ui-card-text-block">
      <div class="ui-card-h1-block">
        <div class="ui-card-h1">{{ card.h1 }}</div>

        <div v-if="card.views" class="ui-card-views-block">
          <img
            src="@/assets/icons/views.svg"
            class="ui-card-views-icon"
            :alt="`${card.views} просмотров`"
            loading="lazy"
            width="16"
            height="16"
          />
          <div class="ui-card-views">{{ card.views }}</div>
        </div>
      </div>

      <div v-if="card.theme" class="ui-card-theme">{{ card.theme.h1 }}</div>

      <div class="ui-card-introtext">{{ card.introtext }}</div>

      <div v-if="card.tag" class="ui-card-tag-block">
        <template v-if="typeof card.tag === 'string'">
          <span class="ui-card-tag">{{ card.tag }}</span>
        </template>
        <template v-else>
          <span v-for="(tag, index) in card.tag" :key="`tag${index}`" class="ui-card-tag">{{
            tag
          }}</span>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiCard',
  props: {
    card: { type: Object, required: true },
  },
  computed: {
    thumbComputed() {
      return this.thumbPrefix ? `${this.thumbPrefix}${this.card.thumb}` : this.card.thumb || ''
    },
  },
}
</script>

<style>
.ui-card-h1 {
  font-size: 20px;
  font-weight: 700;
  line-height: 1.3;
}
.ui-card-block {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.ui-card-block:hover .ui-card-h1 {
  text-decoration: underline;
}
.ui-card-thumb-block {
  display: flex;
  margin-bottom: 8px;
}
.ui-card-thumb {
  width: 100%;
  height: auto;
  border-radius: 4px;
}

.ui-card-h1-block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2px;
}

.ui-card-theme {
  font-size: 16px;
  opacity: 0.5;
  margin-bottom: 4px;
  line-height: 1;
}
.ui-card-introtext {
  line-height: 1.3;
}
.ui-card-tag-block {
  display: flex;
  flex-wrap: wrap;
}
.ui-card-tag {
  background-color: lightgray;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 16px;
  margin-right: 8px;
  margin-top: 8px;
}
.ui-card-tag:last-child {
  margin-right: 0;
}
.ui-card-views-block {
  display: flex;
  align-items: center;
  opacity: 0.5;
}
.ui-card-views-icon {
  width: 16px;
  height: 16px;
}
.ui-card-views {
  font-size: 16px;
}
</style>
