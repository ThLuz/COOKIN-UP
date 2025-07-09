import type ICategorie from "@/interfaces/ICategorie";

export async function getCategories() {
  const response = await fetch('https://gist.githubusercontent.com/ThLuz/e42df6b7bb0e38ba48a5c8290cb9cd3b/raw/3a87f10152b579cf24cc1051b8c49458f03eca95/categories.json');
  const categories: ICategorie[] = await response.json();

/*   await new Promise((solve) => {
    setTimeout(solve, 3000);
  }) */
  
  return categories;
}