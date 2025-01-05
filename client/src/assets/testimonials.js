
const colors = [
    'slate','gray','zinc','neurtal','stone','red','orange','amber','yellow','lime','green','emerald','teal','cyan','sky','blue','indigo','violet','purple','fuchsia','pink','rose' 
]
const density = 300

const  testimonials = [
    {
        "title": "Great user interface",
        "desc": "I enjoyed how simple it is to navigate through Frizlet's website.",
        "name": "Sandy",
        "role": "Student",
        "color": `bg-${colors[ Math.trunc((Math.random()) * colors.length)  ]}-${density}`

    },
    {
        "title": "Helpful for studying",
        "desc": "Frizlet makes it easy to review for exams with customizable flashcards.",
        "name": "Alex",
        "role": "Student",
        "color": `bg-${colors[ Math.trunc((Math.random()) * colors.length)  ]}-${density}`
    },
    {
        "title": "Perfect for group projects",
        "desc": "I love collaborating with classmates on study sets in Frizlet.",
        "name": "Jordan",
        "role": "Teacher",
        "color": `bg-${colors[ Math.trunc((Math.random()) * colors.length)  ]}-${density}`
    },
    {
        "title": "User-friendly platform",
        "desc": "Even as a parent, I find Frizlet's layout intuitive and engaging.",
        "name": "Dana",
        "role": "Parent",
        "color": `bg-${colors[ Math.trunc((Math.random()) * colors.length)  ]}-${density}`
    },
    {
        "title": "Makes studying fun",
        "desc": "The games and quizzes make learning feel more interactive and enjoyable.",
        "name": "Chris",
        "role": "Student",
        "color": `bg-${colors[ Math.trunc((Math.random()) * colors.length)  ]}-${density}`
    },
    {
        "title": "Great for younger kids",
        "desc": "My child enjoys learning vocabulary with Frizlet's flashcards.",
        "name": "Taylor",
        "role": "Guardian",
        "color": `bg-${colors[ Math.trunc((Math.random()) * colors.length)  ]}-${density}`
    },
    {
        "title": "Boosted my grades",
        "desc": "Frizlet's study tools helped me improve in all my subjects!",
        "name": "Jamie",
        "role": "Student",
        "color": `bg-${colors[ Math.trunc((Math.random()) * colors.length)  ]}-${density}`
    },
    {
        "title": "Excellent teaching tool",
        "desc": "I use Frizlet to create study materials for my students, and it works wonderfully.",
        "name": "Morgan",
        "role": "Teacher",
        "color": `bg-${colors[ Math.trunc((Math.random()) * colors.length)  ]}-${density}`
    },
    {
        "title": "Very versatile app",
        "desc": "Frizlet works well for a wide range of subjects and topics.",
        "name": "Casey",
        "role": "Student",
        "color": `bg-${colors[ Math.trunc((Math.random()) * colors.length)  ]}-${density}`
    },
    {
        "title": "Keeps my child engaged",
        "desc": "Frizlet's interactive features make studying less of a chore for my child.",
        "name": "Pat",
        "role": "Parent",
        "color": `bg-${colors[ Math.trunc((Math.random()) * colors.length)  ]}-${density}`
    },
    {
        "title": "Super convenient",
        "desc": "I love that I can study anywhere with Frizlet's mobile app.",
        "name": "Sam",
        "role": "Student",
        "color": `bg-${colors[ Math.trunc((Math.random()) * colors.length)  ]}-${density}`
    },
    {
        "title": "Highly effective",
        "desc": "Frizlet is an invaluable tool for reinforcing classroom lessons.",
        "name": "Alexis",
        "role": "Teacher",
        "color": `bg-${colors[ Math.trunc((Math.random()) * colors.length)  ]}-${density}`
    }
]


export default testimonials;