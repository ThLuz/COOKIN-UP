<script lang="ts">
import SelectIngredients from './SelectIngredients.vue';
import ShowRecipes from './ShowRecipes.vue';
import Tag from './Tag.vue';
import YourList from './YourList.vue';

type Page = 'SelectIngredients' | 'ShowRecipes';

export default {
  data() {
    return {
      ingredients: [] as string[],
      content: 'SelectIngredients' as Page
    };
  },
  components: { SelectIngredients, Tag, YourList, ShowRecipes },
  methods: {
    addIngredient(ingredient: string) {
      this.ingredients.push(ingredient)
    },
    removeIngredient(ingredient: string) {
      this.ingredients = this.ingredients.filter(iLista => ingredient !== iLista);
    },
    navigate(page: Page) {
      this.content = page;
    }
  }
}
</script>

<template>
  <main class="main-content">
    <YourList :ingredients="ingredients" />

    <KeepAlive include="SelectIngredients">
      <SelectIngredients v-if="content === 'SelectIngredients'" @addIngredient="addIngredient" 
      @remove-ingredient="removeIngredient" @search-recipes="navigate('ShowRecipes')"/>
      <ShowRecipes v-else-if="content === 'ShowRecipes'" :ingredients="ingredients" @edit-recipes="navigate('SelectIngredients')"/>
    </KeepAlive>
  </main>
</template>

<style scoped>
.main-content {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--cream, #FFFAF3);
  color: var(--cinza, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}

.your-list-text {
  color: var(--coral, #F0633C);
  display: block;
  text-align: center;
  margin-bottom: 1.5rem;
}

.ingredients-your-list {
  display: flex;
  justify-content: center;
  gap: 1rem 1.5rem;
  flex-wrap: wrap;
}

.empty-list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  color: var(--coral, #F0633C);
  text-align: center;
}

@media only screen and (max-width: 1300px) {
  .main-content {
    padding: 5rem 3.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .main-content {
    padding: 4rem 1.5rem;
    gap: 4rem;
  }
}
</style>
