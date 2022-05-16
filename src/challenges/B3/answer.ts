/**
 * In this challenge, you must find and attach to each group the group (or groups)
 * with which the current group has the most skills in common.
 * Attached groups must be sorted by their name (A to Z).
 * You must not change the order of the main list of groups.
 *
 * @param groups List of groups without closestGroups
 * @returns The same list but with a new closestGroups prop on each
 */

// ↓ uncomment bellow lines and add your response!

function getMatchSkillsWithGroups({ groups }: { groups: GroupWithSkills[] }) : GroupWithSkills[] {
  return groups.map(group => {
    const { skills } = group;
    const closestGroups = groups
      .filter(g => g.name !== group.name)
      .filter(g => g.skills.some(s => skills.includes(s)))
      .sort((a, b) => a.name.localeCompare(b.name));
    return { ...group, closestGroups };
  });
}


export default function ({ groups }: { groups: GroupWithSkills[] }): GroupWithSkillsAndClosestGroups[] {
    return groups.map(group => {
        return {
            ...group,
            closestGroups: groups
                .filter(g => g.name !== group.name)
                .reduce((bestMatches, currentGroup) => {
                    const count = currentGroup.skills.filter(skill => group.skills.includes(skill)).length;
                    if (bestMatches.length === 0 || bestMatches[0].count < count) {
                        bestMatches = [{ group: currentGroup, count }];
                    } else if (bestMatches.length > 0 && bestMatches[0].count === count) {
                        bestMatches.push({ group: currentGroup, count });
                    }
                    return bestMatches;
                 }, [] as any)
                .map(bestMatch => bestMatch.group)
                .sort()
        };
    });
}


// used interfaces, do not touch
export interface GroupWithSkills {
    name: string;
    skills: string[];
}

export interface GroupWithSkillsAndClosestGroups extends GroupWithSkills {
    closestGroups: GroupWithSkills[];
}
