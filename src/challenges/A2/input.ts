import { Group } from "./answer";

export default {
    groups: [
        {
            name: "Group 1", students: [
                { name: "Joseph", skills: ['NodeJS', 'ReactJS'], age: 33 },
                { name: "Alice", skills: ['NodeJS', 'MongoDB'], age: 28 },
                { name: "Toto", skills: ['MySQL', 'PHP'], age: 41 },
            ]
        },
        {
            name: "Group 3", students: [
                { name: "Tom", skills: ['ReactJS', 'Typescript'], age: 21 },
                { name: "Matin", skills: ['HTML', 'Typescript'], age: 22 },
                { name: "Mathieu", skills: ['ReactJS', 'PHP', 'MySQL'], age: 28 },
            ]
        },
        {
            name: "Group 2", students: [
                { name: "Thibault", skills: ['PHP', 'NodeJS', 'HTML'], age: 25 },
                { name: "Joseph", skills: ['PHP', 'NodeJS'], age: 28 },
                { name: "Marine", skills: ['ReactJS'], age: 28 },
            ]
        }
    ]
} as { groups: Group[] };