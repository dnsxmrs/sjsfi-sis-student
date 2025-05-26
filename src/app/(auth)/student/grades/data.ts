import { GradeData } from './types';

export const gradesData: GradeData[] = [
    {
        schoolYear: '2023-2024',
        gradeLevel: 'Grade-5',
        subjects: [
            { number: 1, code: 'ENGL 5', desc: 'English 5', faculty: 'Mrs. Maria Santos', g1: 88, g2: 91, g3: 87, g4: 90, final: 89, status: 'P' },
            { number: 2, code: 'MATH 5', desc: 'Mathematics 5', faculty: 'Mr. Joseph Reyes', g1: 92, g2: 90, g3: 93, g4: 91, final: 92, status: 'P' },
            { number: 3, code: 'SCI 5', desc: 'Science 5', faculty: 'Ms. Liza Del Rosario', g1: 85, g2: 86, g3: 88, g4: 87, final: 87, status: 'P' },
            { number: 4, code: 'FILI 5', desc: 'Filipino 5', faculty: 'Mr. Ramon Cruz', g1: 89, g2: 90, g3: 91, g4: 90, final: 90, status: 'P' },
            { number: 5, code: 'AP 5', desc: 'Araling Panlipunan 5', faculty: 'Mrs. Jenny Valdez', g1: 86, g2: 85, g3: 88, g4: 87, final: 87, status: 'P' },
            { number: 6, code: 'EPP 5', desc: 'Edukasyong Pantahanan at Pangkabuhayan 5', faculty: 'Ms. Irene Manalo', g1: 93, g2: 92, g3: 94, g4: 91, final: 93, status: 'P' },
            { number: 7, code: 'ESP 5', desc: 'Edukasyon sa Pagpapakatao 6', faculty: 'Mr. Noel Garcia', g1: 90, g2: 88, g3: 91, g4: 90, final: 90, status: 'P' },
            { number: 8, code: 'MAPEH 5', desc: 'Music, Arts, Physical Education, and Health 5', faculty: 'Ms. Carla De Leon', g1: 87, g2: 89, g3: 88, g4: 92, final: 91, status: 'P' },
        ],
    },
    {
        schoolYear: '2022-2023',
        gradeLevel: 'Grade-4',
        subjects: [], // You can fill this with similar data if needed
    },
]; 