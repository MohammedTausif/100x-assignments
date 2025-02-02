import { NextResponse } from "next/server";

 export const UserModel = [
    {
        "id": 1,
        "name": "Sam Altman",
        "password": "123456",
        "About": "Co-Founder of OpenAI",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Sam_Altman_TechCrunch_SF_2019_Day_2_Oct_3_%28cropped%29_%28cropped%29.jpg/440px-Sam_Altman_TechCrunch_SF_2019_Day_2_Oct_3_%28cropped%29_%28cropped%29.jpg",
        "wiki": "https://en.wikipedia.org/wiki/Sam_Altman"
    },
    {
        "id": 2,
        "name": "Elon Musk",
        "password": "123456",
        "About": "CEO of Tesla & SpaceX",
        "image": "https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg",
        "wiki": "https://en.wikipedia.org/wiki/Elon_Musk"
    },
    {
        "id": 3,
        "name": "Sundar Pichai",
        "password": "123456",
        "About": "CEO of Google & Alphabet",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Sundar_Pichai_-_2023_%28cropped%29.jpg/440px-Sundar_Pichai_-_2023_%28cropped%29.jpg",
        "wiki": "https://en.wikipedia.org/wiki/Sundar_Pichai"
    },
    {
        "id": 4,
        "name": "Satya Nadella",
        "password": "123456",
        "About": "CEO of Microsoft",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/MS-Exec-Nadella-Satya-2017-08-31-22_%28cropped%29.jpg/440px-MS-Exec-Nadella-Satya-2017-08-31-22_%28cropped%29.jpg",
        "wiki": "https://en.wikipedia.org/wiki/Satya_Nadella"
    },
    {
        "id": 5,
        "name": "Mark Zuckerberg",
        "password": "123456",
        "About": "Founder of Facebook & CEO of Meta",
        "image": "https://upload.wikimedia.org/wikipedia/commons/9/96/Mark_Zuckerberg_F8_2019_Keynote.jpg",
        "wiki": "https://en.wikipedia.org/wiki/Mark_Zuckerberg"
    },
    {
        "id": 6,
        "name": "Jeff Bezos",
        "password": "123456",
        "About": "Founder of Amazon",
        "image": "https://upload.wikimedia.org/wikipedia/commons/0/0b/Jeff_Bezos%27_iconic_smile%21.jpg",
        "wiki": "https://en.wikipedia.org/wiki/Jeff_Bezos"
    },
    {
        "id": 7,
        "name": "Amit Sharma",
        "password": "123456",
        "About": "Software Engineer from India",
        "image": "https://cdn-icons-png.flaticon.com/512/149/149071.png",
        "wiki": "https://en.wikipedia.org/wiki/Software_engineer"
    },
    {
        "id": 8,
        "name": "Fatima Khan",
        "password": "123456",
        "About": "Content Writer from India",
        "image": "https://cdn-icons-png.flaticon.com/512/149/149071.png",
        "wiki": "https://en.wikipedia.org/wiki/Content_writing"
    },
    {
        "id": 9,
        "name": "Ravi Patel",
        "password": "123456",
        "About": "HR Manager from India",
        "image": "https://cdn-icons-png.flaticon.com/512/149/149071.png",
        "wiki": "https://en.wikipedia.org/wiki/Human_resource_management"
    },
    {
        "id": 10,
        "name": "test@user",
        "password": "123456",
        "About": "HR Manager from India",
        "image": "https://cdn-icons-png.flaticon.com/512/149/149071.png",
        "wiki": "https://en.wikipedia.org/wiki/Human_resource_management"
    }
]


export function GET(request){
return NextResponse.json({
    users: UserModel
})
}
