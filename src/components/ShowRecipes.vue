<script lang="ts">
import { getRecipes } from '@/http';
import MainButton from './MainButton.vue';
import type IRecipe from '@/interfaces/IRecipe';
import CardRecipe from './CardRecipe.vue';
import type { PropType } from 'vue';
import { List1IsOnList2 } from '@/operations/lists';

export default {
  props: {
    ingredients: { type: Array as PropType<string[]>, require: true }
  },
  data() {
    return {
      recipesFound: [] as IRecipe[]
    };
  },
  async created() {
    const recipes = await getRecipes();

    this.recipesFound = recipes.filter((recipe) => {
      //@ts-ignore
      const makeRecipe = List1IsOnList2(recipe.ingredients, this.ingredients);

      return makeRecipe;
    })
    /*this.recipesFound = recipes.slice(0, 16); */
  },
  components: { MainButton, CardRecipe },
  emits: ['editRecipes']
}
</script>

<template>
  <section class="show-recipes">
    <h1 class="header title-recipes">Receitas</h1>

    <p class="paragraph-lg results-found">
      Resultados encontrados: {{ recipesFound.length }}
    </p>

    <div v-if="recipesFound.length" class="recipes-wrapper">
      <p class="paragraph-lg informations">
        Veja as opções de receitas que encontramos com os ingredientes que você tem por aí!
      </p>

      <ul class="recipes" :data-count="recipesFound.length">
        <li v-for="recipe of recipesFound" :key="recipe.name">
          <CardRecipe :recipe="recipe" />
        </li>
      </ul>
    </div>

    <div v-else class="recipes-not-found">
      <p class="paragraph-lg recipes-not-found__info">
        Ops, não encontramos resultados para sua combinação. Vamos tentar de novo?
      </p>

      <img src="../assets/images/sem-receitas.png"
        alt="Desenho de um ovo quebrado. A gema tem um rosto com uma expressão triste.">
    </div>

    <MainButton text="Editar lista" @click="$emit('editRecipes')" />
  </section>
</template>

<style scoped>
.show-recipes {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.title-recipes {
  color: var(--medium-green, #3D6D4A);
  margin-bottom: 1.5rem;
}

.results-found {
  color: var(--medium-green, #3D6D4A);
  margin-bottom: 0.5rem;
}

.recipes-wrapper {
  margin-bottom: 3.5rem;
}

.informations {
  margin-bottom: 2rem;
}

.recipes {
  display: grid;
  grid-template-columns: repeat(4, 300px);
  gap: 1.5rem;
  justify-content: center;
  padding: 0;
  list-style: none;
  max-width: calc(4 * 300px + 3 * 1.5rem); 
  margin: 0 auto;
}



.recipes[data-count="1"] {
  grid-template-columns: 300px;
}

.recipes[data-count="2"] {
  grid-template-columns: 300px 300px; 
  justify-content: center; 
}

.recipes[data-count="3"] {
  grid-template-columns: 300px 300px 300px;
  justify-content: center;
}

.recipes[data-count="4"],
.recipes[data-count="5"],
.recipes[data-count="6"] {
  grid-template-columns: repeat(4, 300px);
  justify-content: center;
}

.recipes-not-found {
  margin-bottom: 2rem;
}

.recipes-not-found__info {
  margin-bottom: 0.5rem;
}

@media only screen and (max-width: 767px) {
  .recipes-wrapper {
    margin-bottom: 2rem;
  }
}
</style>