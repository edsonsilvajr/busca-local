export interface EnvironmentSettings {
  rows: number;
  columns: number;
}

export const defaultEnvironment: EnvironmentSettings = {
  rows: 8,
  columns: 8,
};
