export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.15";
  };
  graphql_public: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      graphql: {
        Args: {
          extensions?: Json;
          operationName?: string;
          query?: string;
          variables?: Json;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  public: {
    Tables: {
      Accounts: {
        Row: {
          account_id: string;
          account_type: Database["public"]["Enums"]["account_type"] | null;
          created_at: string;
          currency: Database["public"]["Enums"]["currency_type"] | null;
          name: string | null;
          user_id_fk: string | null;
        };
        Insert: {
          account_id?: string;
          account_type?: Database["public"]["Enums"]["account_type"] | null;
          created_at?: string;
          currency?: Database["public"]["Enums"]["currency_type"] | null;
          name?: string | null;
          user_id_fk?: string | null;
        };
        Update: {
          account_id?: string;
          account_type?: Database["public"]["Enums"]["account_type"] | null;
          created_at?: string;
          currency?: Database["public"]["Enums"]["currency_type"] | null;
          name?: string | null;
          user_id_fk?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "Accounts_user_id_fk_fkey";
            columns: ["user_id_fk"];
            isOneToOne: false;
            referencedRelation: "Users";
            referencedColumns: ["user_id"];
          },
        ];
      };
      Categories: {
        Row: {
          category_id: number;
          created_at: string;
          name: string | null;
        };
        Insert: {
          category_id?: number;
          created_at?: string;
          name?: string | null;
        };
        Update: {
          category_id?: number;
          created_at?: string;
          name?: string | null;
        };
        Relationships: [];
      };
      Entries: {
        Row: {
          account_id_fk: string | null;
          amount: number | null;
          created_at: string;
          entry_date: string | null;
          entry_id: string;
          name: string | null;
          notes: string | null;
          subcategory_id_fk: number;
          type: Database["public"]["Enums"]["entry_type"] | null;
          updated_at: string | null;
        };
        Insert: {
          account_id_fk?: string | null;
          amount?: number | null;
          created_at?: string;
          entry_date?: string | null;
          entry_id?: string;
          name?: string | null;
          notes?: string | null;
          subcategory_id_fk: number;
          type?: Database["public"]["Enums"]["entry_type"] | null;
          updated_at?: string | null;
        };
        Update: {
          account_id_fk?: string | null;
          amount?: number | null;
          created_at?: string;
          entry_date?: string | null;
          entry_id?: string;
          name?: string | null;
          notes?: string | null;
          subcategory_id_fk?: number;
          type?: Database["public"]["Enums"]["entry_type"] | null;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "Entries_account_id_fkey";
            columns: ["account_id_fk"];
            isOneToOne: false;
            referencedRelation: "Accounts";
            referencedColumns: ["account_id"];
          },
          {
            foreignKeyName: "Entries_subcategory_id_fk_fkey";
            columns: ["subcategory_id_fk"];
            isOneToOne: false;
            referencedRelation: "Subcategories";
            referencedColumns: ["subcategory_Id"];
          },
        ];
      };
      Subcategories: {
        Row: {
          category_Id_fk: number | null;
          color: string | null;
          created_at: string;
          icon: string | null;
          name: string | null;
          subcategory_Id: number;
          type: Database["public"]["Enums"]["entry_type"] | null;
        };
        Insert: {
          category_Id_fk?: number | null;
          color?: string | null;
          created_at?: string;
          icon?: string | null;
          name?: string | null;
          subcategory_Id?: number;
          type?: Database["public"]["Enums"]["entry_type"] | null;
        };
        Update: {
          category_Id_fk?: number | null;
          color?: string | null;
          created_at?: string;
          icon?: string | null;
          name?: string | null;
          subcategory_Id?: number;
          type?: Database["public"]["Enums"]["entry_type"] | null;
        };
        Relationships: [
          {
            foreignKeyName: "Subcategories_category_Id_fkey";
            columns: ["category_Id_fk"];
            isOneToOne: false;
            referencedRelation: "Categories";
            referencedColumns: ["category_id"];
          },
        ];
      };
      Users: {
        Row: {
          birth_date: string | null;
          created_at: string | null;
          first_name: string;
          last_name: string | null;
          user_id: string;
        };
        Insert: {
          birth_date?: string | null;
          created_at?: string | null;
          first_name?: string;
          last_name?: string | null;
          user_id?: string;
        };
        Update: {
          birth_date?: string | null;
          created_at?: string | null;
          first_name?: string;
          last_name?: string | null;
          user_id?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      account_type: "konto" | "sparbuch";
      currency_type: "euro" | "dollar";
      entry_type: "income" | "expense";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">;

type DefaultSchema = DatabaseWithoutInternals[Extract<
  keyof Database,
  "public"
>];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    keyof DefaultSchema["Tables"] | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    keyof DefaultSchema["Tables"] | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    keyof DefaultSchema["Enums"] | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never;

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {
      account_type: ["konto", "sparbuch"],
      currency_type: ["EUR", "USD"],
      entry_type: ["income", "expense"],
    },
  },
} as const;
