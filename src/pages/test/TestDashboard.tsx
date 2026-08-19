import React from "react";

import { createCategory } from "../../features/categories/api/create/createCategory";
import { createSubcategory } from "../../features/categories/api/create/createSubcategory";
import {
  getCategories,
  getCategory,
} from "../../features/categories/api/get/getCategories";
import {
  getSubcategories,
  getSubcategory,
} from "../../features/categories/api/get/getSubCategories";
import { updateCategory } from "../../features/categories/api/update/updateCategory";
import { updateSubcategory } from "../../features/categories/api/update/updateSubcategory";
import { deleteSubcategory } from "../../features/categories/api/delete/deleteSubcategory";
import { deleteCategory } from "../../features/categories/api/delete/deleteCategory";
import { getCategoryWithSubcategory } from "../../features/categories/api/get/getCategoriesWithSubcategories";
import { getCategoriesWithSubcategories } from "../../features/categories/api/get/getCategoriesWithSubcategories";
import { getAccountsForUser } from "../../features/accounts/api/get/getAccountsForUser";
import { createAccountForUser } from "../../features/accounts/api/create/createAccountForUser";
import { deleteAccountById } from "../../features/accounts/api/delete/deleteAccountById";
import { updateAccount } from "../../features/accounts/api/update/updateAccount";
import { getEntryById } from "../../features/entries/api/get/getEntryById";
import { createEntry } from "../../features/entries/api/create/createEntry";
import { updateEntry } from "../../features/entries/api/update/updateEntry";
import { deleteEntryById } from "../../features/entries/api/delete/deleteEntryById";
import { Button } from "../../components/common/Button";
import { getUserById } from "../../features/users/api/get/getUserById";
import { getUserId } from "../../store/userStore";

const TestDashboard: React.FC = () => {
  async function runAction<T>(label: string, action: () => Promise<T>) {
    try {
      const result = await action();

      console.log(`${label}:`, result);

      window.alert(`${label} successful\n\n${JSON.stringify(result, null, 2)}`);
    } catch (error) {
      console.error(`${label} failed:`, error);

      window.alert(
        `${label} failed\n\n${error instanceof Error ? error.message : String(error)
        }`,
      );
    }
  }

  const actions = [
    {
      label: "Get Categories",
      fn: () => runAction("Get Categories", () => getCategories()),
    },
    {
      label: "Get Category",
      fn: () => {
        const id = window.prompt("Category ID:");

        if (!id) return;

        runAction("Get Category", () => getCategory(Number(id)));
      },
    },
    {
      label: "Create Category",
      fn: () => {
        const name = window.prompt("Category name:");

        if (!name) return;

        runAction("Create Category", () =>
          createCategory({
            name,
          }),
        );
      },
    },
    {
      label: "Update Category",
      fn: () => {
        const id = window.prompt("Category ID:");
        const name = window.prompt("New category name:");

        if (!id || !name) return;

        runAction("Update Category", () =>
          updateCategory({
            category_id: Number(id),
            name,
          }),
        );
      },
    },
    {
      label: "Delete Category",
      fn: () => {
        const id = window.prompt("Category ID:");
        if (!id) return;

        runAction("Delete Category", () =>
          deleteCategory({
            category_id: Number(id),
          }),
        );
      },
    },
    {
      label: "Get Subcategories",
      fn: () => runAction("Get Subcategories", () => getSubcategories()),
    },
    {
      label: "Get Subcategory",
      fn: () => {
        const id = window.prompt("Subcategory ID:");

        if (!id) return;

        runAction("Get Subcategory", () => getSubcategory(Number(id)));
      },
    },
    {
      label: "Create Subcategory",
      fn: () => {
        const name = window.prompt("Subcategory name:");
        const categoryId = window.prompt("Category ID:");
        const icon = window.prompt("Subcategory icon:");
        const color = window.prompt("Subcategory color:");
        const type = window.prompt("Subcategory type (income/expense):");

        if (!name || !categoryId) return;

        runAction("Create Subcategory", () =>
          createSubcategory({
            name,
            category_Id_fk: Number(categoryId),
            icon: icon,
            color: color,
            type: type as "income" | "expense" | null,
          }),
        );
      },
    },
    {
      label: "Update Subcategory",
      fn: () => {
        const id = window.prompt("Subcategory ID:");
        const name = window.prompt("New subcategory name:");

        if (!id || !name) return;

        runAction("Update Subcategory", () =>
          updateSubcategory({
            subcategory_Id: Number(id),
            name,
          }),
        );
      },
    },
    {
      label: "Delete Subcategory",
      fn: () => {
        const id = window.prompt("Subcategory ID:");
        if (!id) return;

        runAction("Delete Subcategory", () =>
          deleteSubcategory({
            subcategory_Id: Number(id),
          }),
        );
      },
    },

    {
      label: "Get Categories with Subcategories",
      fn: () =>
        runAction("Get Categories with Subcategories", () =>
          getCategoriesWithSubcategories(),
        ),
    },

    {
      label: "Get Category with Subcategory",
      fn: () => {
        const id = window.prompt("Subcategory ID:");

        if (!id) return;

        runAction("Get Category with Subcategory", () =>
          getCategoryWithSubcategory(Number(id)),
        );
      },
    },

    {
      label: "Get Accounts for User",
      fn: () => {
        const userId = window.prompt("User ID:");

        if (!userId) return;

        runAction("Get Accounts for User", () => getAccountsForUser(userId));
      },
    },

    {
      label: "Create Accounts for User",
      fn: () => {
        const userId = window.prompt("User ID:");
        const name = window.prompt("Account name:");
        const accountType = window.prompt("Account type (konto/sparbuch):");
        const currency = window.prompt("Account currency (EUR/USD):");

        if (!userId || !name || !accountType || !currency) return;

        runAction("Create Account for User", () =>
          createAccountForUser({
            user_id_fk: String(userId),
            name,
            account_type: accountType,
            currency: currency as "EUR" | "USD" | null,
          }),
        );
      },
    },

    {
      label: "Update Accounts by ID",
      fn: () => {
        const accountId = window.prompt("Account ID:");
        const name = window.prompt("New account name:");

        if (!accountId) return;

        runAction("Update Account", () =>
          updateAccount({
            account_id: accountId,
            name,
          }),
        );
      },
    },

    {
      label: "Delete Accounts by ID",
      fn: () => {
        const accountId = window.prompt("Account ID:");

        if (!accountId) return;

        runAction("Delete Account by ID", () => deleteAccountById(accountId));
      },
    },

    {
      label: "Get Entry By Id",
      fn: () => {
        const entryId = window.prompt("Entry ID:");

        if (!entryId) return;

        runAction("Get Entry By Id", () => getEntryById(String(entryId)));
      },
    },

    {
      label: "Create Entry",
      fn: () => {
        const name = window.prompt("Entry name:");
        const amount = window.prompt("Amount:");
        const entryDate = window.prompt("Entry date (YYYY-MM-DD):");
        const type = window.prompt("Entry type (income/expense):");
        const notes = window.prompt("Notes:");
        const subcategoryId = window.prompt("Subcategory ID:");
        const accountId = window.prompt("Account ID:");

        if (
          !name ||
          !amount ||
          !entryDate ||
          !type ||
          !subcategoryId ||
          !accountId
        )
          return;

        runAction("Create Entry", () =>
          createEntry({
            name,
            amount: Number(amount),
            entry_date: entryDate,
            type: type as "income" | "expense",
            notes,
            subcategory_id_fk: Number(subcategoryId),
            account_id_fk: String(accountId),
          }),
        );
      },
    },

    {
      label: "Update Entry by ID",
      fn: () => {
        const entryId = window.prompt("Entry ID:");
        const name = window.prompt("New entry name:");

        if (!entryId) return;

        runAction("Update Entry", () =>
          updateEntry({
            entry_id: String(entryId),
            name,
          }),
        );
      },
    },

    {
      label: "Delete Entry by ID",
      fn: () => {
        const entryId = window.prompt("Entry ID:");

        if (!entryId) return;

        runAction("Delete Entry by ID", () => deleteEntryById(entryId));
      },
    },

    {
      label: "Get User By Id",
      fn: () => {
        const userId = window.prompt("User ID:");

        if (!userId) return;

        runAction("Get User By Id", () => getUserById(String(userId)));
      },
    },
    {
      label: "Get User Id",
      fn: () => {

        runAction("Get User Id", async () => getUserId());
      },
    },
  ];

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Test Dashboard</h1>

      <div
        style={{
          display: "grid",
          gap: "0.5rem",
          maxWidth: 260,
        }}
      >
        {actions.map(({ label, fn }) => (
          <Button key={label} type="button" onClick={fn} buttonStyle="primary">
            {label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TestDashboard;
