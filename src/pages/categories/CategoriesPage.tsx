import { useCategories } from "../../features/categories/hooks/useCategories";
import { useCategoriesWithSubcategories } from "../../features/categories/hooks/useCategoriesWithSubcategories";

export function CategoriesPage() {
  const {
    data: categoriesWithSubcategories,
    isLoading,
    isError,
  } = useCategoriesWithSubcategories();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Could not load categories.</div>;
  }

  return <div>{JSON.stringify(categoriesWithSubcategories)}</div>;
}
