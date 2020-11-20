import { GroupWithSillsAndClosestGroups } from "./answer";

export default [
    {
        "name": "Groupe 1",
        "skills": [
            "NodeJS",
            "ReactJS",
            "PHP",
            "MySQL"
        ],
        "closestGroups": [
            {
                "name": "Groupe 3",
                "skills": [
                    "PHP",
                    "MySQL",
                    "ReactJS"
                ]
            }
        ]
    },
    {
        "name": "Groupe 2",
        "skills": [
            "NodeJS",
            "Ionic",
            "PHP",
            "MongoDB"
        ],
        "closestGroups": [
            {
                "name": "Groupe 1",
                "skills": [
                    "NodeJS",
                    "ReactJS",
                    "PHP",
                    "MySQL"
                ]
            }
        ]
    },
    {
        "name": "Groupe 3",
        "skills": [
            "PHP",
            "MySQL",
            "ReactJS"
        ],
        "closestGroups": [
            {
                "name": "Groupe 1",
                "skills": [
                    "NodeJS",
                    "ReactJS",
                    "PHP",
                    "MySQL"
                ]
            }
        ]
    },
    {
        "name": "Groupe 4",
        "skills": [
            "HTML",
            "Java",
            "PHP",
            "MySQL"
        ],
        "closestGroups": [
            {
                "name": "Groupe 1",
                "skills": [
                    "NodeJS",
                    "ReactJS",
                    "PHP",
                    "MySQL"
                ]
            },
            {
                "name": "Groupe 3",
                "skills": [
                    "PHP",
                    "MySQL",
                    "ReactJS"
                ]
            }
        ]
    }
] as GroupWithSillsAndClosestGroups[];