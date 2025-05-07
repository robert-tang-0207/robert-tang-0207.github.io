// Skills badges data
const skillsBadges = {
    languages: [
        { name: 'Go', badge: 'https://img.shields.io/badge/-Go-00ADD8?style=flat-square&logo=go&logoColor=white' },
        { name: 'Java', badge: 'https://img.shields.io/badge/-Java-007396?style=flat-square&logo=java&logoColor=white' },
        { name: 'Python', badge: 'https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=white' },
        { name: 'TypeScript', badge: 'https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white' },
        { name: 'Rust', badge: 'https://img.shields.io/badge/-Rust-000000?style=flat-square&logo=rust&logoColor=white' },
        { name: 'C++', badge: 'https://img.shields.io/badge/-C++-00599C?style=flat-square&logo=c%2B%2B&logoColor=white' },
        { name: 'Solidity', badge: 'https://img.shields.io/badge/-Solidity-363636?style=flat-square&logo=solidity&logoColor=white' }
    ],
    backend: [
        { name: 'Spring Boot', badge: 'https://img.shields.io/badge/-Spring%20Boot-6DB33F?style=flat-square&logo=spring-boot&logoColor=white' },
        { name: 'ASP.NET', badge: 'https://img.shields.io/badge/-ASP.NET-512BD4?style=flat-square&logo=dotnet&logoColor=white' },
        { name: 'FastAPI', badge: 'https://img.shields.io/badge/-FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white' },
        { name: 'Node.js', badge: 'https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white' },
        { name: 'GraphQL', badge: 'https://img.shields.io/badge/-GraphQL-E10098?style=flat-square&logo=graphql&logoColor=white' }
    ],
    frontend: [
        { name: 'React', badge: 'https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black' },
        { name: 'React Native', badge: 'https://img.shields.io/badge/-React%20Native-61DAFB?style=flat-square&logo=react&logoColor=black' },
        { name: 'Redux', badge: 'https://img.shields.io/badge/-Redux-764ABC?style=flat-square&logo=redux&logoColor=white' },
        { name: 'Next.js', badge: 'https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white' }
    ],
    databases: [
        { name: 'MySQL', badge: 'https://img.shields.io/badge/-MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white' },
        { name: 'PostgreSQL', badge: 'https://img.shields.io/badge/-PostgreSQL-336791?style=flat-square&logo=postgresql&logoColor=white' },
        { name: 'MongoDB', badge: 'https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white' },
        { name: 'Redis', badge: 'https://img.shields.io/badge/-Redis-DC382D?style=flat-square&logo=redis&logoColor=white' },
        { name: 'DynamoDB', badge: 'https://img.shields.io/badge/-DynamoDB-4053D6?style=flat-square&logo=amazondynamodb&logoColor=white' }
    ],
    cloud: [
        { name: 'AWS', badge: 'https://img.shields.io/badge/-AWS-232F3E?style=flat-square&logo=amazonaws&logoColor=white' },
        { name: 'Kubernetes', badge: 'https://img.shields.io/badge/-Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white' },
        { name: 'Docker', badge: 'https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=docker&logoColor=white' },
        { name: 'Terraform', badge: 'https://img.shields.io/badge/-Terraform-7B42BC?style=flat-square&logo=terraform&logoColor=white' }
    ],
    ai: [
        { name: 'TensorFlow', badge: 'https://img.shields.io/badge/-TensorFlow-FF6F00?style=flat-square&logo=tensorflow&logoColor=white' },
        { name: 'PyTorch', badge: 'https://img.shields.io/badge/-PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white' },
        { name: 'scikit-learn', badge: 'https://img.shields.io/badge/-scikit%20learn-F7931E?style=flat-square&logo=scikitlearn&logoColor=white' }
    ],
    blockchain: [
        { name: 'Ethereum', badge: 'https://img.shields.io/badge/-Ethereum-3C3C3D?style=flat-square&logo=ethereum&logoColor=white' },
        { name: 'BNB Chain', badge: 'https://img.shields.io/badge/-BNB%20Chain-F0B90B?style=flat-square&logo=binance&logoColor=white' },
        { name: 'Web3.js', badge: 'https://img.shields.io/badge/-Web3.js-F16822?style=flat-square&logo=web3dotjs&logoColor=white' }
    ],
    messaging: [
        { name: 'Kafka', badge: 'https://img.shields.io/badge/-Kafka-231F20?style=flat-square&logo=apachekafka&logoColor=white' },
        { name: 'RabbitMQ', badge: 'https://img.shields.io/badge/-RabbitMQ-FF6600?style=flat-square&logo=rabbitmq&logoColor=white' },
        { name: 'WebSockets', badge: 'https://img.shields.io/badge/-WebSockets-010101?style=flat-square&logo=socketdotio&logoColor=white' }
    ],
    certifications: [
        { name: 'AWS Solutions Architect Professional', institution: 'Amazon Web Services', year: '2022' },
        { name: 'Google Cloud Professional Engineer', institution: 'Google Cloud', year: '2021' },
        { name: 'Certified Kubernetes Administrator', institution: 'Cloud Native Computing Foundation', year: '2020' }
    ]
};
