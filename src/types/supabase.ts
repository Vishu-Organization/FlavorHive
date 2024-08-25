export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  footer_navigation: {
    Tables: {
      customer_support: {
        Row: {
          created_at: string
          id: number
          name: string | null
          to: string | null
          type: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
          to?: string | null
          type?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
          to?: string | null
          type?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "customer_support_type_fkey"
            columns: ["type"]
            isOneToOne: false
            referencedRelation: "customer_support_type"
            referencedColumns: ["id"]
          },
        ]
      }
      customer_support_type: {
        Row: {
          id: number
          type: string | null
        }
        Insert: {
          id?: number
          type?: string | null
        }
        Update: {
          id?: number
          type?: string | null
        }
        Relationships: []
      }
      heroes: {
        Row: {
          created_at: string
          id: number
          name: string | null
          to: string
          type: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
          to: string
          type?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
          to?: string
          type?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "heroes_type_fkey"
            columns: ["type"]
            isOneToOne: false
            referencedRelation: "customer_support_type"
            referencedColumns: ["id"]
          },
        ]
      }
      legal: {
        Row: {
          created_at: string
          id: number
          name: string | null
          to: string | null
          type: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
          to?: string | null
          type?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
          to?: string | null
          type?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "legal_type_fkey"
            columns: ["type"]
            isOneToOne: false
            referencedRelation: "customer_support_type"
            referencedColumns: ["id"]
          },
        ]
      }
      product_links: {
        Row: {
          created_at: string
          id: number
          name: string | null
          to: string
          type: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
          to: string
          type?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
          to?: string
          type?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "product_links_type_fkey"
            columns: ["type"]
            isOneToOne: false
            referencedRelation: "customer_support_type"
            referencedColumns: ["id"]
          },
        ]
      }
      team: {
        Row: {
          created_at: string
          id: number
          name: string | null
          to: string
          type: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
          to: string
          type?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
          to?: string
          type?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "team_type_fkey"
            columns: ["type"]
            isOneToOne: false
            referencedRelation: "customer_support_type"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      Email: "1"
      type_of_support: "0" | "1" | "2"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
