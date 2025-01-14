/*
  # Create agents table

  1. New Tables
    - `agents`
      - `id` (uuid, primary key)
      - `name` (text)
      - `role` (text)
      - `language` (text)
      - `phone` (text)
      - `image` (text)
      - `stats` (jsonb)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `agents` table
    - Add policies for authenticated users to read and manage agents
*/

CREATE TABLE IF NOT EXISTS agents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  language text NOT NULL,
  phone text NOT NULL,
  image text NOT NULL,
  stats jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE agents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow authenticated users to read agents"
  ON agents
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to insert agents"
  ON agents
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update their agents"
  ON agents
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to delete agents"
  ON agents
  FOR DELETE
  TO authenticated
  USING (true);