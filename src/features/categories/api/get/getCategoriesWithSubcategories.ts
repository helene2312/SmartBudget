import type { QueryData } from "@supabase/supabase-js";

import { supabase } from "../../../../lib/supabase";

const categoriesWithSubcategoriesQuery = supabase.from("Categories").select(`
    *,
    Subcategories!Subcategories_category_Id_fkey (
      subcategory_Id,
      name,
      icon,
      type,
      color,
      category_Id_fk
    )
  `);

const categoryWithSubcategoryQuery = (subcategory_Id: number) =>
  supabase
    .from("Subcategories")
    .select(
      `
      *,
      category:Categories!Subcategories_category_Id_fkey (
        *
      )
    `,
    )
    .eq("subcategory_Id", subcategory_Id)
    .single();

export type CategoriesWithSubcategories = QueryData<
  typeof categoriesWithSubcategoriesQuery
>;

export type CategoryWithSubcategories = CategoriesWithSubcategories[number];

export async function getCategoriesWithSubcategories(): Promise<CategoriesWithSubcategories> {
  const { data, error } = await categoriesWithSubcategoriesQuery;

  if (error) {
    throw error;
  }

  return data;
}

export type CategoryWithSubcategory = QueryData<
  ReturnType<typeof categoryWithSubcategoryQuery>
>;

export async function getCategoryWithSubcategory(
  subcategory_Id: number,
): Promise<CategoryWithSubcategory> {
  const { data, error } = await categoryWithSubcategoryQuery(subcategory_Id);

  if (error) {
    throw error;
  }

  return data;
}
