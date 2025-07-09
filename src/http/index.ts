import type ICategorie from "@/interfaces/ICategorie";
import type IRecipe from "@/interfaces/IRecipe";

async function getURL<T>(url: string) {
  const resposta = await fetch(url);
  return resposta.json() as T;
}

export async function getCategories() {
  return getURL<ICategorie[]>('https://gist.githubusercontent.com/ThLuz/e42df6b7bb0e38ba48a5c8290cb9cd3b/raw/3a87f10152b579cf24cc1051b8c49458f03eca95/categories.json');
}

export async function getRecipes() {
  return getURL<IRecipe[]>('https://gist.githubusercontent.com/ThLuz/c76af24fb8a50135c546c369fc90f996/raw/b1547222c4e4084bb2724ea736b271d21216427b/recipes.json');
}