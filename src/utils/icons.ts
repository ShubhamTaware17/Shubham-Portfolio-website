import type { ComponentType } from 'react';
import * as LucideIcons from 'lucide-react';

export type IconType = ComponentType<{ className?: string }>;

export function getIcon(name: string): IconType {
  const icons = LucideIcons as unknown as Record<string, IconType>;
  return icons[name] ?? LucideIcons.Award;
}
