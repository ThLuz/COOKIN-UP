<script lang="ts">
  import { getCategories } from "@/http/index"
import type ICategorie from "@/interfaces/ICategorie";
import CardCategorie from "./CardCategorie.vue";
import MainButton from "./MainButton.vue";

  export default {
    name: 'SelectIngredients',
    components: {
      CardCategorie, MainButton
    },
    data() {
      return {
        categories: [] as ICategorie[]
      }
    },
    async created() {
        this.categories = await getCategories();
    },
    emits: ['addIngredient', 'removeIngredient', 'searchRecipes']
  }
</script>

<template>
  <section class="select-ingredients">
    <h1 class="header title-ingredients">Ingredientes</h1>

    <p class="paragraph-lg instructions">
      Selecione abaixo os ingredientes que você quer usar nesta receita:
    </p>

    <ul class="categories">
      <li v-for="categorie in categories" :key="categorie.name">
        <CardCategorie :categorie="categorie" @addIngredient="$emit('addIngredient', $event)" @remove-ingredient="$emit('removeIngredient', $event)" />
      </li>
    </ul>

    <p class="paragraph tip">
      *Atenção: consideramos que você tenha em casa sal, pimenta e água.
    </p>

    <MainButton text="Buscar receitas!" @click="$emit('searchRecipes')"/>
  </section>
</template>

<style scoped>
.select-ingredients {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title-ingredients {
  color: var(--medium-green, #3D6D4A);
  display: block;
  margin-bottom: 1.5rem;
}

.instructions {
  margin-bottom: 2rem;
}

.categories {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.tip {
  align-self: flex-start;
  margin-bottom: 3.5rem;
}

@media only screen and (max-width: 767px) {
  .tip {
    margin-bottom: 2.5rem;
  }
}
</style>