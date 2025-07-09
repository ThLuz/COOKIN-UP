<script lang="ts">
import type ICategorie from '@/interfaces/ICategorie';
import type { PropType } from 'vue';
import Tag from './Tag.vue';
import SelectableIngredient from './SelectableIngredient.vue';

  export default {
    components: { Tag, SelectableIngredient },
    props: {
      categorie: { type: Object as PropType<ICategorie>, required: true }
    },
    emits: ['addIngredient', 'removeIngredient']
  }
</script>

<template>
  <article class="categorie">
    <header class="categorie__header">
      <img :src="`/images/icons/categories_ingredients/${categorie.image}`" alt="" class="categorie__image">

      <h2 class="paragraph-lg categorie__name">
        {{ categorie.name }}
      </h2>

      <ul class="categorie__ingredients">
        <li v-for="ingredient in categorie.ingredients" :key="ingredient">
          <SelectableIngredient :ingredient="ingredient" @addIngredient="$emit('addIngredient', $event)" @remove-ingredient="$emit('removeIngredient', $event)"/>
        </li>
      </ul>
    </header>
  </article>
</template>

<style scoped>
.categorie {
  width: 19.5rem;
  padding: 1rem;
  border-radius: 1rem;
  background: var(--white, #FFF);
  box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.categorie__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.categorie__image {
  width: 3.5rem;
}

.categorie__name {
  text-align: center;
  color: var(--medium-green, #3D6D4A);
  font-weight: 700;
}

.categorie__ingredients {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}
</style>