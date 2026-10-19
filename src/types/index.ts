export type Language = 'en' | 'id';
export type TabType = 'materi' | 'lab' | 'game-kelompok' | 'game-ipo' | 'prestasi';

export type ComponentCategoryLevel1 = 'hardware' | 'software' | 'brainware';
export type HardwareSubCategory = 'input' | 'process' | 'output' | 'storage';
export type SoftwareSubCategory = 'os' | 'aplikasi' | 'utilitas';

export interface GroupingItem {
  id: string;
  name: string;
  iconName: string;
  description: string;
  categoryL1: ComponentCategoryLevel1;
  subCategoryHW?: HardwareSubCategory;
  subCategorySW?: SoftwareSubCategory;
  funFact: string;
  analogi?: string;
}

export interface IpoScenarioCard {
  id: string;
  name: string;
  iconName: string;
  description: string;
  stage: 'input' | 'process' | 'output' | 'storage';
}

export interface IpoScenario {
  id: string;
  title: string;
  categoryBadge: string;
  story: string;
  realWorldContext: string;
  cards: IpoScenarioCard[];
  correctOrder: string[]; // card ids in order: input, process, (storage if any), output
  explanation: string;
}

export interface StudentProfile {
  name: string;
  avatar: string;
  grade: string;
  points: number;
  stars: number;
  groupingScore: number;
  ipoCompletedCount: number;
  unlockedBadges: string[];
}

export interface Badge {
  id: string;
  title: string;
  icon: string;
  description: string;
  requiredCondition: string;
  isUnlocked: boolean;
}
