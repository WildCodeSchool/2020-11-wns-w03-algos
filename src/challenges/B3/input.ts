import { GroupWithSills } from "./answer";

export default {
    groups: [
        {
            name: "Groupe 1",
            skills: ["NodeJS", "ReactJS", "PHP", "MySQL"]
        },
        {
            name: "Groupe 2",
            skills: ["NodeJS", "Ionic", "PHP", "MongoDB"]
        },
        {
            name: "Groupe 3",
            skills: ["PHP", "MySQL", "ReactJS"]
        },
        {
            name: "Groupe 4",
            skills: ["HTML", "Java", "PHP", "MySQL"]
        }
    ]
} as { groups: GroupWithSills[] };