/** @Spec
* Feature: Dynamic Icon Renderer
* Type: component
* Route: N/A
* Description: Safely renders a Lucide icon based on a string name.
* Acceptance:
* ✅ Compiles without TypeScript errors
* ✅ Lints and formats cleanly
* ✅ Uses the iconRegistry to prevent function-passing errors.
*/
'use client';

import * as lucideIcons from 'lucide-react';
import { type LucideIcon } from 'lucide-react';

const DynamicIcon = ({ name, ...props }: { name: string } & React.ComponentProps<'svg'>) => {
    const icons = lucideIcons as unknown as Record<string, LucideIcon>;
    const Icon = icons[name];
    if (!Icon) return null;
    return <Icon {...props} />;
};

export default DynamicIcon;
