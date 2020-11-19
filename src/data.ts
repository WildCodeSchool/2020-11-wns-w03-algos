export const data = {
    challengeB1: {
        input: [[
            { startDatetime: "2020-11-19 09:00:00", endDatetime: "2020-11-19 10:00:00", event: "Daily" },
            { startDatetime: "2020-11-21 09:00:00", endDatetime: "2020-11-21 10:00:00", event: "Daily" },
            { startDatetime: "2020-11-17 09:00:00", endDatetime: "2020-11-17 10:00:00", event: "Daily" },
            { startDatetime: "2020-11-20 09:00:00", endDatetime: "2020-11-20 10:00:00", event: "Daily" },
        ]],
        output: [
            { startDatetime: "2020-11-17 09:00:00", endDatetime: "2020-11-17 10:00:00", event: "Daily" },
            { startDatetime: "2020-11-19 09:00:00", endDatetime: "2020-11-19 10:00:00", event: "Daily" },
            { startDatetime: "2020-11-20 09:00:00", endDatetime: "2020-11-20 10:00:00", event: "Daily" },
            { startDatetime: "2020-11-21 09:00:00", endDatetime: "2020-11-21 10:00:00", event: "Daily" },
        ]
    },
    challengeB2: {
        input: [[
            {categories: ['Live coding', 'Letsplay'], startDatetime: "2020-11-19 09:00:00", endDatetime: "2020-11-19 10:00:00", event: "NodeJS"},
            {categories: ['Quest'], startDatetime: "2020-11-19 09:00:00", endDatetime: "2020-11-19 10:00:00", event: "Typescript"},
            {categories: ['Quest', 'Course'], startDatetime: "2020-11-19 09:00:00", endDatetime: "2020-11-19 10:00:00", event: "GraphQL"},
            {categories: ['Letsplay'], startDatetime: "2020-11-19 09:00:00", endDatetime: "2020-11-19 10:00:00", event: "ReactJS"},
            {categories: ['Dojo'], startDatetime: "2020-11-19 09:00:00", endDatetime: "2020-11-19 10:00:00", event: "Algo"},
            {categories: ['Workshop', 'Course'], startDatetime: "2020-11-19 09:00:00", endDatetime: "2020-11-19 10:00:00", event: "Docker"},
        ]],
        output: []
    },
    challengeB3: {
        input: [[
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
        ]],
        output: [
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
        ]
    }
};