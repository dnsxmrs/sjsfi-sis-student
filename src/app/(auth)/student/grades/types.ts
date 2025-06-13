export interface Subject {
    number: number;
    code: string;
    desc: string;
    faculty: string;
    g1: number;
    g2: number;
    g3: number;
    g4: number;
    final: number;
    status: string;
}

export interface GradeData {
    schoolYear: string;
    gradeLevel: string;
    subjects: Subject[];
} 